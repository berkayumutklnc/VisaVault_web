import type { Metadata } from "next";
import { generatePageMeta } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/metadata";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = generatePageMeta({
  title: "Demo Talep Et",
  description:
    "VisaVault AI'ın canlı demosunu izleyin. Göçmenlik dosya yönetimi platformunun belge toplama, AI ön inceleme ve avukat kontrol akışını yakından görün.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", url: SITE_URL },
          { name: "Demo Talep Et", url: `${SITE_URL}/demo` },
        ])}
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            <h1 className="heading-1 mb-6">
              Canlı Demo ile{" "}
              <span className="text-brand-accent">Yakından Görün</span>
            </h1>

            <p className="body-large mb-10">
              VisaVault AI&apos;ın belge toplama, AI ön inceleme ve avukat
              kontrol akışını gerçek bir demo ortamında inceleyin. Büronuzun
              ihtiyaçlarına uygun olup olmadığını birlikte değerlendirelim.
            </p>

            {/* What to expect */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-3 mb-4">Demo Sürecinde Ne Beklemelisiniz?</h2>
                <ul className="space-y-3">
                  {[
                    "Platformun temel iş akışının canlı gösterimi",
                    "Müvekkil portalı ve avukat panelinin incelenmesi",
                    "AI ön inceleme modülünün çalışma mantığı",
                    "Büronuzun ihtiyaçlarına özel soru-cevap",
                    "Pilot program hakkında detaylı bilgi",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="flex-shrink-0 mt-0.5 text-brand-accent"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="body-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="heading-3 mb-4">Kimler İçin Uygun?</h2>
                <ul className="space-y-3">
                  {[
                    "Göçmenlik hukuku alanında çalışan hukuk büroları",
                    "Belge toplama sürecini iyileştirmek isteyen avukatlar",
                    "Legal operations süreçlerini dijitalleştirmek isteyen ekipler",
                    "Pilot ortaklık değerlendiren karar vericiler",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="flex-shrink-0 mt-0.5 text-brand-accent"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="body-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="card p-8 lg:p-10 sticky top-24">
              <h2 className="heading-3 mb-2">Demo Formu</h2>
              <p className="body-base mb-6">
                Formu doldurun, en kısa sürede size ulaşalım.
              </p>
              <ContactForm formType="demo" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
