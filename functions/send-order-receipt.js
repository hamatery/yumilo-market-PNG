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

    const { email, customerName, orderId, items, totalAmount, deliveryLocation } = body;

    if (!email || !orderId || !totalAmount) {
      return new Response(JSON.stringify({ success: false, error: "Missing required order receipt fields" }), {
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

    const itemsHtml = Array.isArray(items) 
      ? items.map(item => `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${item.name || 'Product'} (x${item.quantity || 1})</td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb; text-align: right;">K${Number(item.price || 0).toFixed(2)}</td></tr>`).join('')
      : `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">Nationwide Order Items</td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb; text-align: right;">K${Number(totalAmount).toFixed(2)}</td></tr>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: "Yumilo Market <noreply@yumilomarket.store>",
        to: [email],
        subject: `Your Yumilo Market Order Confirmation (#${orderId.slice(0, 8)})`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2 style="color: #064e3b; margin-top: 0;">Yumilo Market</h2>
            <p>Dear ${customerName || 'Customer'},</p>
            <p>Thank you for your order! We have successfully received your purchase and it is being prepared for nationwide delivery.</p>
            
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; margin: 15px 0;">
              <p style="margin: 0 0 10px 0; font-size: 13px;"><strong>Order ID:</strong> #${orderId}</p>
              <p style="margin: 0 0 10px 0; font-size: 13px;"><strong>Delivery Location:</strong> ${deliveryLocation || 'Zambia'}</p>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 15px;">
              <thead>
                <tr style="background-color: #f3f4f6; text-align: left;">
                  <th style="padding: 8px;">Item</th>
                  <th style="padding: 8px; text-align: right;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
              <tfoot>
                <tr>
                  <td style="padding: 10px; font-weight: bold;">Total Amount:</td>
                  <td style="padding: 10px; font-weight: bold; text-align: right; color: #064e3b;">K${Number(totalAmount).toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 13px; color: #4b5563; line-height: 1.5;">
              If you have any questions or need support, contact our team anytime at <a href="mailto:support@yumilomarket.store" style="color: #064e3b; text-decoration: underline;">support@yumilomarket.store</a>.
            </p>
            <p style="font-size: 12px; color: #6b7280; line-height: 1.5;">
              <strong>Security Notice:</strong> Yumilo Market will never ask for your password, and all payments must be completed securely on our official website.
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