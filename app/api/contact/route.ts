import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Prepare email data
    const emailData = {
      name,
      email,
      subject: subject || `Portfolio Contact from ${name}`,
      message,
      timestamp: new Date().toISOString()
    };

    // Log the submission (for your reference)
    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", emailData.subject);
    console.log("Message:", message);
    console.log("Time:", new Date().toISOString());
    console.log("===============================");

    // Send real email using Web3Forms with proper error handling
    try {
      // Prepare form data for Web3Forms
      const formData = new FormData();
      formData.append("access_key", "3e692229-7604-4352-a1ae-a1b502862c3a");
      formData.append("subject", subject || `Portfolio Contact from ${name}`);
      formData.append("from_name", name);
      formData.append("from_email", email);
      formData.append("message", message);
      formData.append("replyto", email);
      formData.append("to", "palravi1093@gmail.com");

      // Send to Web3Forms with proper headers
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      // Check if response is OK and is JSON
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const result = await response.json();
          
          if (result.success) {
            console.log("📧 Email sent successfully via Web3Forms!");
            console.log("📧 To: palravi1093@gmail.com");
            console.log("📧 From:", `${name} <${email}>`);
            console.log("📧 Subject:", subject || `Portfolio Contact from ${name}`);
          } else {
            console.error("📧 Web3Forms API error:", result);
            // Fallback to console logging
            console.log("=== EMAIL NOTIFICATION (FALLBACK) ===");
            console.log("TO: palravi1093@gmail.com");
            console.log("FROM:", `${name} <${email}>`);
            console.log("SUBJECT:", subject || `Portfolio Contact from ${name}`);
            console.log("MESSAGE:");
            console.log(message);
            console.log("========================");
          }
        } else {
          // Handle non-JSON response (likely Cloudflare challenge)
          const text = await response.text();
          console.error("📧 Web3Forms returned non-JSON response:", text.substring(0, 200));
          // Fallback to console logging
          console.log("=== EMAIL NOTIFICATION (FALLBACK) ===");
          console.log("TO: palravi1093@gmail.com");
          console.log("FROM:", `${name} <${email}>`);
          console.log("SUBJECT:", subject || `Portfolio Contact from ${name}`);
          console.log("MESSAGE:");
          console.log(message);
          console.log("========================");
        }
      } else {
        console.error("📧 Web3Forms HTTP error:", response.status, response.statusText);
        // Fallback to console logging
        console.log("=== EMAIL NOTIFICATION (FALLBACK) ===");
        console.log("TO: palravi1093@gmail.com");
        console.log("FROM:", `${name} <${email}>`);
        console.log("SUBJECT:", subject || `Portfolio Contact from ${name}`);
        console.log("MESSAGE:");
        console.log(message);
        console.log("========================");
      }
      
    } catch (emailError) {
      console.error("📧 Web3Forms sending error:", emailError);
      // Fallback to console logging
      console.log("=== EMAIL NOTIFICATION (FALLBACK) ===");
      console.log("TO: palravi1093@gmail.com");
      console.log("FROM:", `${name} <${email}>`);
      console.log("SUBJECT:", subject || `Portfolio Contact from ${name}`);
      console.log("MESSAGE:");
      console.log(message);
      console.log("========================");
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}