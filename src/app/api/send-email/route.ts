import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // 🛑 Empty request handle karna
    if (!req.body) {
      return NextResponse.json({ success: false, error: "Empty request body" });
    }

    // ✅ Parse request JSON safely
    let body;
    try {
      body = await req.json();
    } catch (error) {
      return NextResponse.json({ success: false, error: "Invalid JSON format" });
    }

    const { email, name, orderId, total } = body;

    // 🛑 Validate required fields
    if (!email || !name || !orderId || !total) {
      return NextResponse.json({ success: false, error: "Missing required fields" });
    }

    // ✅ Send email
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Use Resend verified email/domain
      to: email, // User ka email
      subject: "Order Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Thank you for your order, ${name}!</h2>
          <p>Your order <strong>#${orderId}</strong> has been placed successfully.</p>
          <p><strong>Total Amount:</strong> $${total}</p>
          <p>We will notify you once your order is shipped.</p>
          <hr />
          <p>Best regards, <br />Your Shop Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email Sending Error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" });
  }
}
