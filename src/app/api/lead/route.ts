import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, website, message, planName, billingCycle, price } = body;

    // Convert React Component to pure HTML string
    const emailHtml = await render(
      EmailTemplate({
        name,
        email,
        phone,
        website,
        message,
        planName,
        billingCycle,
        price,
      }) as React.ReactElement, 
    );

    // Send email using HTML string
    const { data, error } = await resend.emails.send({
      from: "Akhiloptix System <support@akhilenterprise.info>",
      to: ["founder@akhilenterprise.info"],
      subject: `🔥 New Lead: ${name} (${planName} Plan)`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server Route Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email lead" },
      { status: 500 }
    );
  }
}