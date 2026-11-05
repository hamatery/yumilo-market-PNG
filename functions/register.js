export async function onRequestPost(context) {
  try {
    let body;
    try {
      body = await context.request.json();
    } catch (e) {
      return new Response(JSON.stringify({ success: false, error: "Invalid JSON format" }), {
        headers: { "Content-Type": "application/json" },
        status: 400
      });
    }

    const { email, password, fullName } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ success: false, error: "Missing email or password" }), {
        headers: { "Content-Type": "application/json" },
        status: 400
      });
    }

    const SUPABASE_URL = 'https://syxibiyrbgwsgghwwgej.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_0pWBbZd-S5UthaXCOzu4KA_YblfcNHG';

    // Register user securely via Supabase Auth REST API from Cloudflare server
    const supRes = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY
      },
      body: JSON.stringify({
        email,
        password,
        data: { full_name: fullName || 'Customer' }
      })
    });

    const supData = await supRes.json();

    if (!supRes.ok) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: supData.msg || supData.error_description || supData.message || "Registration failed" 
      }), {
        headers: { "Content-Type": "application/json" },
        status: 400
      });
    }

    return new Response(JSON.stringify({ success: true, data: supData }), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}