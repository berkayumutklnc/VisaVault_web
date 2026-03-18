import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendEmail({ to, subject, html, replyTo }: SendEmailInput) {
  if (!resend) {
    console.warn(
      "[Resend] RESEND_API_KEY not set. Email not sent. Subject:",
      subject
    );
    return { success: true, simulated: true };
  }

  const fromEmail =
    process.env.FROM_EMAIL || "VisaVault AI <noreply@visavaultai.com>";

  const { error } = await resend.emails.send({
    from: fromEmail,
    to,
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) {
    console.error("[Resend] Error:", error);
    throw new Error("E-posta gönderilemedi.");
  }

  return { success: true };
}
