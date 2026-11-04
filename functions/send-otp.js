export async function onRequestPost(context) {
  try {
    let body;
    try {
      body = await context.request.json();
    } catch (parseErr) {
      return new Response(JSON.stringify({ success: false, error: "Invalid JSON format received" }), {
        headers: { "Content-Type": "application/json" },
        status: 400
      });
    }

    const { email, passcode, name } = body;

    if (!email || !passcode) {
      return new Response(JSON.stringify({ success: false, error: "Missing email or passcode" }), {
        headers: { "Content-Type": "application/json" },
        status: 400
      });
    }

    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ success: false, error: "Server API key not configured" }), {
        headers: { "Content-Type": "application/json" },
        status: 500
      });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: "Yumilo Market <noreply@yumilomarket.store>",
        to: [email],
        subject: "Your Yumilo Market Verification Code",
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #064e3b;">Yumilo Market</h2>
            <p>Dear ${name || 'Customer'},</p>
            <p>Your verification code for Yumilo Market is:</p>
            <div style="background-color: #f3f4f6; padding: 12px 20px; font-size: 24px; font-weight: bold; color: #064e3b; letter-spacing: 3px; display: inline-block; border-radius: 6px; margin: 10px 0;">
              ${passcode}
            </div>
            <p>Please enter this code on the website to complete your verification.</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 12px; color: #6b7280;">If you did not request this verification code, please ignore this email.</p>
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

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}