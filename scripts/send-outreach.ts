import { Resend } from "resend";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.OUTREACH_FROM!;
const REPLY_TO = process.env.OUTREACH_REPLY_TO!;
const SITE_URL = process.env.SITE_URL!;

type Lead = {
  name: string;
  email: string;
  firm: string;
  intro: string;
};

const leads: Lead[] = [
  {
    name: "Berkay Test",
    email: "berkayumut98@gmail.com",
    firm: "Test",
    intro: "Bu bir test gönderimidir — logo kontrol.",
  },
  /*
  {
    name: "Gündüz Law Ekibi",
    email: "INFO@GUNDUZLAW.COM",
    firm: "Gündüz Law",
    intro:
      "Sitenizde immigration, citizenship, residency ve work permit başlıklarını ayrı bir uzmanlık alanı olarak konumlandırdığınızı gördüm.",
  },
  {
    name: "TMR Legal Ekibi",
    email: "info@tmrlegal.av.tr",
    firm: "TMR Legal",
    intro:
      "Yabancılar hukuku, oturma izni, çalışma izni ve vatandaşlık tarafındaki odağınız dikkatimi çekti.",
  },
  {
    name: "Kulaçoğlu Law Office Ekibi",
    email: "info@kulacoglu.av.tr",
    firm: "Kulaçoğlu Law Office",
    intro:
      "Immigration and citizenship law tarafında hem bireysel hem yatırım odaklı süreçleri ele alış biçiminiz ilgimi çekti.",
  },
  {
    name: "Kurucuk & Associates Ekibi",
    email: "info@kurucuk.com.tr",
    firm: "Kurucuk & Associates",
    intro:
      "Residence permit ve citizenship by investment tarafında yoğun çalışan bir yapı olduğunuzu gördüm.",
  },
  {
    name: "KL Legal Consultancy Ekibi",
    email: "info@kllegalconsultancy.com",
    firm: "KL Legal Consultancy",
    intro:
      "Yabancılar hukuku ve yatırımcı odaklı dosyalarda belge ve süreç yönetiminin önemli bir darboğaz olabileceğini düşündüm.",
  },
  */
];

function buildHtml(lead: Lead) {
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
                    Merhaba ${lead.name},
                  </p>

                  <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#0f172a;">
                    ${lead.intro}
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
  console.log(`\n📧 Outreach başlıyor — ${leads.length} alıcı\n`);

  for (const lead of leads) {
    const subject = "Immigration dosyaları için daha düzenli belge akışı";

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [lead.email],
      replyTo: REPLY_TO,
      subject,
      html: buildHtml(lead),
      text: `
Merhaba ${lead.name},

${lead.intro}

Ben Berkay. VisaVault AI adlı, immigration law firm'ler için geliştirdiğim bir belge toplama ve AI destekli ön inceleme platformu üzerinde çalışıyorum.

Ürünün amacı çok net: müvekkilden belge toplama, ön inceleme, avukat notları ve revizyon/onay sürecini tek akışta toplamak.

Odaklandığımız alanlar:
- Dağınık belge toplama sürecini sadeleştirmek
- Eksik belge turunu azaltmak
- AI ile ilk ön incelemeyi hızlandırmak
- Son kararı her zaman avukat kontrolünde tutmak

Site: ${SITE_URL}
Demo: ${SITE_URL}/demo

Selamlar,
Berkay Umut Kılınç
Founder, VisaVault AI
      `,
    });

    if (error) {
      console.error(`❌ HATA -> ${lead.firm}:`, error);
    } else {
      console.log(`✅ GÖNDERİLDİ -> ${lead.firm} (${lead.email}):`, data?.id);
    }

    // Spam gibi görünmemek için bekleme
    await new Promise((resolve) => setTimeout(resolve, 2500));
  }

  console.log("\n🏁 Tamamlandı.\n");
}

main().catch(console.error);
