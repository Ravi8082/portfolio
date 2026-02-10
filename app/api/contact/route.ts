import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Use Web3Forms API to send email (free, no server config needed)
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Fallback: log the message (in production, set WEB3FORMS_ACCESS_KEY)
      console.log("Contact form submission:", { name, email, subject, message });
      return NextResponse.json({
        success: true,
        message: "Message received! (Email delivery requires WEB3FORMS_ACCESS_KEY)",
      });
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: subject || `Portfolio Contact from ${name}`,
        message,
        from_name: "Portfolio Contact Form",
        to: "palravi1093@gmail.com",
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      });
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
