<script>
    import { onMount, onDestroy, tick } from 'svelte';
    import { createClient } from '@supabase/supabase-js';

    // Initialize Supabase (Replace with your actual project keys or import from your config)
    const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

    export let customerId = 'user-uuid-123'; // Pass actual authenticated user ID here
    export let customerName = 'Valued Customer';

    let messages = [];
    let newMessage = '';
    let currentConversationId = null;
    let conversationStatus = 'ai'; // 'ai' | 'waiting_agent' | 'active_agent' | 'closed'
    let assignedAgentName = '';
    let chatBoxContainer;
    let channel = null;

    onMount(async () => {
        await initChatSession();
    });

    onDestroy(() => {
        if (channel) {
            supabase.removeChannel(channel);
        }
    });

    // 1. Initialize or Resume Active Chat Session
    async function initChatSession() {
        let { data: existingChat } = await supabase
            .from('conversations')
            .select('*')
            .eq('customer_id', customerId)
            .neq('status', 'closed')
            .single();

        if (existingChat) {
            currentConversationId = existingChat.id;
            conversationStatus = existingChat.status;
            assignedAgentName = existingChat.assigned_agent_name || '';
            await loadMessageHistory();
        } else {
            // Start new chat with AI by default (no persistent header agent button)
            let { data: newChat, error } = await supabase
                .from('conversations')
                .insert([{ 
                    customer_id: customerId, 
                    customer_name: customerName, 
                    status: 'ai' 
                }])
                .select()
                .single();

            if (!error && newChat) {
                currentConversationId = newChat.id;
                conversationStatus = 'ai';
                
                // Send initial AI greeting
                await sendSystemOrAIMessage('AI Assistant', 'Hello! I am your AI assistant. How can I help you today? If you ever need a human agent, just let me know or click the option below.');
            }
        }

        if (currentConversationId) {
            subscribeToRealtime();
        }
    }

    // 2. Load Past Message History
    async function loadMessageHistory() {
        let { data: history } = await supabase
            .from('messages')
            .select('*')
            .eq('conversation_id', currentConversationId)
            .order('created_at', { ascending: true });

        if (history) {
            messages = history;
            scrollToBottom();
        }
    }

    // 3. Realtime Supabase Subscription
    function subscribeToRealtime() {
        channel = supabase
            .channel(`chat_${currentConversationId}`)
            .on('postgres_changes', {
                event: 'UPDATE',
                schema: 'public',
                table: 'conversations',
                filter: `id=eq.${currentConversationId}`
            }, payload => {
                conversationStatus = payload.new.status;
                assignedAgentName = payload.new.assigned_agent_name || '';
            })
            .on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'messages',
                filter: `conversation_id=eq.${currentConversationId}`
            }, payload => {
                if (!messages.some(m => m.id === payload.new.id)) {
                    messages = [...messages, payload.new];
                    scrollToBottom();
                }
            })
            .subscribe();
    }

    // 4. Send Message Handler
    async function handleSendMessage() {
        if (!newMessage.trim() || !currentConversationId) return;

        const textToSend = newMessage.trim();
        newMessage = '';

        // Save customer message to DB
        const { data: sentMsg } = await supabase.from('messages').insert([{
            conversation_id: currentConversationId,
            sender_type: 'customer',
            sender_name: customerName,
            content: textToSend
        }]).select().single();

        if (sentMsg) {
            messages = [...messages, sentMsg];
            scrollToBottom();
        }

        // Check if user explicitly asked for human agent
        const lowerText = textToSend.toLowerCase();
        if (lowerText.includes('agent') || lowerText.includes('human') || lowerText.includes('customer care')) {
            await requestHumanAgent();
            return;
        }

        // If in AI mode, trigger AI response logic
        if (conversationStatus === 'ai') {
            triggerAIResponse(textToSend);
        }
    }

    // 5. Trigger Human Escalation (Switch to waiting queue)
    async function requestHumanAgent() {
        conversationStatus = 'waiting_agent';

        await supabase
            .from('conversations')
            .update({ status: 'waiting_agent' })
            .eq('id', currentConversationId);

        await sendSystemOrAIMessage('System', '⏳ Please wait while we connect you to an available customer support agent...');
    }

    // Helper to insert AI or System messages
    async function sendSystemOrAIMessage(senderName, content) {
        const type = senderName === 'System' ? 'ai' : 'ai';
        const { data } = await supabase.from('messages').insert([{
            conversation_id: currentConversationId,
            sender_type: type,
            sender_name: senderName,
            content: content
        }]).select().single();

        if (data) {
            messages = [...messages, data];
            scrollToBottom();
        }
    }

    // 6. Mock AI Response (Hook your backend AI API here)
    async function triggerAIResponse(userText) {
        setTimeout(async () => {
            // Simulated AI logic that can offer escalation options
            let replyText = `I understand you're asking about "${userText}". How would you like to proceed?`;
            
            await sendSystemOrAIMessage('AI Assistant', replyText);
        }, 1000);
    }

    async function scrollToBottom() {
        await tick();
        if (chatBoxContainer) {
            chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;
        }
    }
</script>

<div class="chat-container">
    <!-- Header -->
    <div class="chat-header">
        <h3>Customer Support</h3>
        {#if conversationStatus === 'active_agent'}
            <span class="badge active">Live with {assignedAgentName}</span>
        {:else if conversationStatus === 'waiting_agent'}
            <span class="badge waiting">Connecting...</span>
        {:else}
            <span class="badge ai">AI Assistant</span>
        {/if}
    </div>

    <!-- Status Banner -->
    {#if conversationStatus === 'waiting_agent'}
        <div class="status-banner waiting">
            ⏳ Waiting for an available agent to pick up your chat...
        </div>
    {:else if conversationStatus === 'active_agent'}
        <div class="status-banner active">
            🟢 You are chatting with human agent <strong>{assignedAgentName}</strong>
        </div>
    {/if}

    <!-- Messages Area -->
    <div class="chat-messages" bind:this={chatBoxContainer}>
        {#each messages as msg}
            <div class="message-row {msg.sender_type}">
                <div class="bubble">
                    <span class="sender">{msg.sender_name}</span>
                    <p>{msg.content}</p>
                </div>
            </div>
        {/each}
    </div>

    <!-- Escalation Prompt Trigger (Optional Quick Button) -->
    {#if conversationStatus === 'ai'}
        <div class="escalation-prompt">
            <p>Need a human?</p>
            <button class="escalate-btn" on:click={requestHumanAgent}>
                Chat with Customer Agent
            </button>
        </div>
    {/if}

    <!-- Input Area -->
    <div class="chat-input-area">
        <input 
            type="text" 
            bind:value={newMessage} 
            on:keydown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={conversationStatus === 'waiting_agent' ? 'Waiting for agent...' : 'Type your message...'}
            disabled={conversationStatus === 'waiting_agent'}
        />
        <button on:click={handleSendMessage} disabled={conversationStatus === 'waiting_agent'}>
            Send
        </button>
    </div>
</div>

<style>
    .chat-container {
        display: flex;
        flex-direction: column;
        height: 550px;
        width: 100%;
        max-width: 420px;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        background: #ffffff;
        font-family: system-ui, -apple-system, sans-serif;
        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        overflow: hidden;
    }
    .chat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 16px;
        background: #0f172a;
        color: #ffffff;
    }
    .chat-header h3 {
        margin: 0;
        font-size: 16px;
    }
    .badge {
        font-size: 11px;
        padding: 3px 8px;
        border-radius: 12px;
        font-weight: 500;
    }
    .badge.ai { background: #3b82f6; color: white; }
    .badge.waiting { background: #f59e0b; color: white; }
    .badge.active { background: #10b981; color: white; }

    .status-banner {
        padding: 8px 16px;
        font-size: 12px;
        text-align: center;
        font-weight: 500;
    }
    .status-banner.waiting { background: #fef3c7; color: #92400e; }
    .status-banner.active { background: #d1fae5; color: #065f46; }

    .chat-messages {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
        background: #f8fafc;
    }
    .message-row {
        display: flex;
        flex-direction: column;
    }
    .message-row.customer { align-items: flex-end; }
    .message-row.ai, .message-row.agent { align-items: flex-start; }

    .bubble {
        max-width: 85%;
        padding: 10px 14px;
        border-radius: 10px;
        font-size: 14px;
        line-height: 1.4;
    }
    .message-row.customer .bubble {
        background: #2563eb;
        color: white;
        border-bottom-right-radius: 2px;
    }
    .message-row.ai .bubble {
        background: #e2e8f0;
        color: #1e293b;
        border-bottom-left-radius: 2px;
    }
    .message-row.agent .bubble {
        background: #10b981;
        color: white;
        border-bottom-left-radius: 2px;
    }
    .sender {
        display: block;
        font-size: 10px;
        font-weight: 700;
        margin-bottom: 3px;
        opacity: 0.8;
    }
    .escalation-prompt {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        background: #eff6ff;
        border-top: 1px solid #dbeafe;
        font-size: 13px;
        color: #1e40af;
    }
    .escalate-btn {
        background: #2563eb;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 6px;
        font-size: 12px;
        cursor: pointer;
    }
    .escalate-btn:hover { background: #1d4ed8; }

    .chat-input-area {
        display: flex;
        padding: 12px;
        border-top: 1px solid #e2e8f0;
        background: #ffffff;
    }
    .chat-input-area input {
        flex: 1;
        padding: 9px 12px;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        outline: none;
        font-size: 14px;
    }
    .chat-input-area button {
        margin-left: 8px;
        padding: 9px 16px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
    }
    .chat-input-area button:disabled {
        background: #94a3b8;
        cursor: not-allowed;
    }
</style>