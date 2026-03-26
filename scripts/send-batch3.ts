// VisaVault AI — Send Batch 3 Only (new firms)
import { Resend } from "resend";
import * as dotenv from "dotenv";
import { batch3Leads } from "./leads-batch3";

dotenv.config({ path: ".env.local" });

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.OUTREACH_FROM!;
const REPLY_TO = process.env.OUTREACH_REPLY_TO!;
const SITE_URL = process.env.SITE_URL!;

function buildHtml(name: string, intro: string) {
  return `
  <!doctype html>
  <html lang="tr">
    <body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
              <tr>
                <td style="background:#020b1c;padding:28px 32px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="vertical-align:middle;width:52px;">
                        <img src="${SITE_URL}/logo.png" alt="VisaVault AI" width="48" height="48" style="display:block;border-radius:50%;" />
                      </td>
                      <td style="vertical-align:middle;padding-left:14px;">
                        <div style="font-size:26px;font-weight:700;line-height:1.2;color:#f8fafc;">
                          VisaVault <span style="color:#2ee6a6;">AI</span>
                        </div>
                        <div style="margin-top:4px;font-size:14px;line-height:1.6;color:#94a3b8;">
                          Immigration law firms için belge toplama ve AI ön inceleme akışı
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:32px;">
                  <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#0f172a;">
                    Merhaba ${name},
                  </p>
                  <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#0f172a;">
                    ${intro}
                  </p>
                  <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#0f172a;">
                    Ben Berkay. VisaVault AI adlı, immigration law firm'ler için geliştirdiğim bir belge toplama ve AI destekli ön inceleme platformu üzerinde çalışıyorum.
                  </p>
                  <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#0f172a;">
                    Ürünün amacı çok net: müvekkilden belge toplama, ön inceleme, avukat notları ve revizyon/onay sürecini tek akışta toplamak.
                  </p>
                  <div style="margin:20px 0 20px;padding:18px 20px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
                    <div style="font-size:14px;font-weight:700;color:#0f172a;margin-bottom:10px;">Odaklandığımız alanlar</div>
                    <ul style="padding-left:18px;margin:0;color:#334155;font-size:15px;line-height:1.8;">
                      <li>Dağınık belge toplama sürecini sadeleştirmek</li>
                      <li>Eksik belge turunu azaltmak</li>
                      <li>AI ile ilk ön incelemeyi hızlandırmak</li>
                      <li>Son kararı her zaman avukat kontrolünde tutmak</li>
                    </ul>
                  </div>
                  <p style="margin:0 0 20px;font-size:16px;line-height:1.7;color:#0f172a;">
                    Kısa tanıtım sitesi:
                    <a href="${SITE_URL}" style="color:#0f62fe;text-decoration:none;">${SITE_URL.replace("https://", "")}</a>
                  </p>
                  <p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#0f172a;">
                    Uygun görürseniz size 10–15 dakikalık kısa bir demo göstermek isterim. Şu an seçili ofislerle sınırlı kapsamlı pilot görüşmeleri yapıyorum.
                  </p>
                  <a href="${SITE_URL}/demo"
                     style="display:inline-block;background:#2ee6a6;color:#02131f;text-decoration:none;font-size:15px;font-weight:700;padding:14px 22px;border-radius:12px;">
                    Demo Talep Et
                  </a>
                  <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e2e8f0;">
                    <div style="font-size:15px;font-weight:700;color:#0f172a;">Berkay Umut Kılınç</div>
                    <div style="font-size:14px;color:#64748b;line-height:1.7;">Founder, VisaVault AI</div>
                    <div style="font-size:14px;color:#64748b;line-height:1.7;">
                      <a href="${SITE_URL}" style="color:#0f62fe;text-decoration:none;">${SITE_URL}</a>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

async function main() {
  const validLeads = batch3Leads.filter((l) =>
    Array.isArray(l.email) ? l.email.some((e) => e.trim()) : l.email.trim()
  );

  console.log(`\n📧 Batch 3 outreach başlıyor — ${validLeads.length} alıcı\n`);

  let sent = 0;
  let errors = 0;

  for (let i = 0; i < validLeads.length; i++) {
    const lead = validLeads[i];
    const toEmails = Array.isArray(lead.email)
      ? lead.email.map((e) => e.trim()).filter(Boolean)
      : [lead.email.trim()];

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: toEmails,
      replyTo: REPLY_TO,
      subject: "Immigration dosyaları için daha düzenli belge akışı",
      html: buildHtml(lead.name, lead.intro),
      text: `Merhaba ${lead.name},\n\n${lead.intro}\n\nBen Berkay. VisaVault AI adlı, immigration law firm'ler için geliştirdiğim bir belge toplama ve AI destekli ön inceleme platformu üzerinde çalışıyorum.\n\nÜrünün amacı çok net: müvekkilden belge toplama, ön inceleme, avukat notları ve revizyon/onay sürecini tek akışta toplamak.\n\nOdaklandığımız alanlar:\n- Dağınık belge toplama sürecini sadeleştirmek\n- Eksik belge turunu azaltmak\n- AI ile ilk ön incelemeyi hızlandırmak\n- Son kararı her zaman avukat kontrolünde tutmak\n\nSite: ${SITE_URL}\nDemo: ${SITE_URL}/demo\n\nSelamlar,\nBerkay Umut Kılınç\nFounder, VisaVault AI`,
    });

    if (error) {
      console.error(`❌ HATA -> ${lead.firm} (${toEmails.join(", ")}):`, error);
      errors++;
    } else {
      console.log(`✅ [${i + 1}/${validLeads.length}] ${lead.firm} (${toEmails.join(", ")}): ${data?.id}`);
      sent++;
    }

    await new Promise((resolve) => setTimeout(resolve, 2500));
  }

  console.log(`\n🏁 Tamamlandı — ${sent} gönderildi, ${errors} hata, ${batch3Leads.length - validLeads.length} atlandı\n`);
}

main().catch(console.error);
