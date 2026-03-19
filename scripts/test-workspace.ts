import { Resend } from "resend";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const resend = new Resend(process.env.RESEND_API_KEY);

async function main() {
  const { data, error } = await resend.emails.send({
    from: process.env.OUTREACH_FROM!,
    to: ["berkay@visavaultai.com"],
    replyTo: "berkayumut98@gmail.com",
    subject: "Google Workspace Test — VisaVault AI",
    html: "<h2>Test Mail</h2><p>Bu mail <strong>berkay@visavaultai.com</strong> adresine ulaşıyor mu kontrol için gönderildi.</p><p>— VisaVault AI</p>",
    text: "Test mail. berkay@visavaultai.com adresine ulaşıyor mu kontrol için gönderildi.",
  });

  if (error) console.error("❌ HATA:", error);
  else console.log("✅ GÖNDERİLDİ:", data?.id);
}

main().catch(console.error);
