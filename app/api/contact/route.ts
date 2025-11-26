import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
// TODO: Implement IP-based rate limiting (Redis/Upstash) to limit to N requests per window.

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email." },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, message: "Message too long." },
        { status: 400 }
      );
    }

    // TODO: Validate reCAPTCHA token here before sending email.

    // Mock email sending
    await new Promise((resolve) => setTimeout(resolve, 300));

    /* Example SendGrid hook:
    await sendgridClient.send({
      to: process.env.CONTACT_EMAIL!,
      from: process.env.SENDGRID_FROM!,
      subject: `[Portfolio] ${subject}`,
      text: `${name} <${email}>\n\n${message}`
    });
    */

    /* Example Nodemailer/SMTP hook:
    const transporter = nodemailer.createTransport({...});
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `[Portfolio] ${subject}`,
      text: `${name} <${email}>\n\n${message}`
    });
    */

    return NextResponse.json({ success: true, message: "Message sent." });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Unexpected error occurred."
      },
      { status: 500 }
    );
  }
}

