export async function onRequestPost(context) {
  try {
    let body;
    try {
      body = await context.request.json();
    } catch (parseErr) {
      return new Response(JSON.stringify({ success: false, error: "Invalid JSON format" }), {
        headers: { "Content-Type": "application/json" },
        status: 400
      });
    }

    const { action, email, passcode, password, fullName } = body;
    const resendApiKey = context.env.RESEND_API_KEY;

    const SUPABASE_URL = 'https://syxibiyrbgwsgghwwgej.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_0pWBbZd-S5UthaXCOzu4KA_YblfcNHG';

    // ACTION 1: SEND OTP EMAIL VIA RESEND
    if (action === 'send-otp' || (!action && passcode)) {
      if (!email || !passcode) {
        return new Response(JSON.stringify({ success: false, error: "Missing email or passcode" }), {
          headers: { "Content-Type": "application/json" },
          status: 400
        });
      }

      if (!resendApiKey) {
        return new Response(JSON.stringify({ success: false, error: "RESEND_API_KEY not configured" }), {
          headers: { "Content-Type": "application/json" },
          status: 500
        });
      }

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: "Yumilo Market <noreply@yumilomarket.store>",
          to: [email],
          subject: "Your Yumilo Market Verification Code",
          html: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #064e3b; margin-top: 0;">Yumilo Market</h2>
              <p>Hello,</p>
              <p>Thank you for creating an account with Yumilo Market. Please use the verification code below to complete your registration:</p>
              
              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
                <span style="font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #064e3b; font-family: monospace;">${passcode}</span>
              </div>

              <p style="font-size: 13px; color: #4b5563;">This code will expire shortly. If you did not request this verification, please ignore this email.</p>
              
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
              <p style="font-size: 13px; color: #4b5563; line-height: 1.5;">
                If you have any questions or need support, contact our team anytime at <a href="mailto:support@yumilomarket.store" style="color: #064e3b; text-decoration: underline;">support@yumilomarket.store</a>.
              </p>
              <p style="font-size: 12px; color: #6b7280; line-height: 1.5;">
                <strong>Security Notice:</strong> Yumilo Market will never ask for your password, and all account verifications must be completed securely on our official website.
              </p>
            </div>
          `
        })
      });

      const data = await res.json();
      if (!res.ok) {
        return new Response(JSON.stringify({ success: false, error: data }), {
          headers: { "Content-Type": "application/json" },
          status: 400
        });
      }

      return new Response(JSON.stringify({ success: true, data }), {
        headers: { "Content-Type": "application/json" },
        status: 200
      });
    }

    // ACTION 2: SIGNUP USER IN SUPABASE (WITH EXPLICIT ERROR TRAPPING)
    if (action === 'signup') {
      if (!email || !password) {
        return new Response(JSON.stringify({ success: false, error: "Missing email or password" }), {
          headers: { "Content-Type": "application/json" },
          status: 400
        });
      }

      try {
        const supRes = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
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

      } catch (fetchErr) {
        return new Response(JSON.stringify({ success: false, error: "Supabase connection failed: " + fetchErr.message }), {
          headers: { "Content-Type": "application/json" },
          status: 500
        });
      }
    }

    return new Response(JSON.stringify({ success: false, error: "Invalid action" }), {
      headers: { "Content-Type": "application/json" },
      status: 400
    });

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}