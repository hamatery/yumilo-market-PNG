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

    const { email, passcode } = body;

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

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}export async function onRequestPost(context) {
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

    const { email, passcode } = body;

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

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
   headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}