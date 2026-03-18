import type { Metadata } from "next";
import { generatePageMeta } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/metadata";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = generatePageMeta({
  title: "Pilot Program",
  description:
    "VisaVault AI pilot programı ile 2–4 haftalık kontrollü bir deneme yapın. Sınırlı kapsamda, ölçülebilir hedeflerle göçmenlik dosya yönetimi platformunu değerlendirin.",
  path: "/pilot",
});

const scope = [
  {
    title: "Sınırlı Dosya Kapsamı",
    description:
      "Pilot süresince belirli sayıda dosya üzerinde çalışılır. Tüm büro operasyonunuzu değiştirmeniz gerekmez.",
  },
  {
    title: "Ölçülebilir Hedefler",
    description:
      "Belge toplama süresi, revizyon döngüsü, avukat inceleme hızı gibi ölçülebilir metrikler belirlenir.",
  },
  {
    title: "Teknik Destek",
    description:
      "Pilot süresince kurulum, eğitim ve teknik destek sağlanır. Sorularınız hızlıca yanıtlanır.",
  },
  {
    title: "Değerlendirme Raporu",
    description:
      "Pilot sonunda elde edilen sonuçlar ve gözlemler bir rapor halinde paylaşılır.",
  },
];

const criteria = [
  "Belge toplama sürecinin düzenlenmesi",
  "Müvekkil-avukat iletişiminin tek kanalda toplanması",
  "AI ön inceleme ile avukat inceleme süresinin azalması",
  "Revizyon döngüsünün kısalması",
  "Sürecin daha görünür ve izlenebilir hale gelmesi",
];

export default function PilotPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", url: SITE_URL },
          { name: "Pilot Program", url: `${SITE_URL}/pilot` },
        ])}
      />

      {/* Hero */}
      <SectionWrapper>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-medium mb-6">
            Pilot Program
          </div>

          <h1 className="heading-1 mb-6">
            Kontrollü Bir Başlangıçla{" "}
            <span className="text-brand-accent">Değerlendirin</span>
          </h1>

          <p className="body-large mb-8">
            VisaVault AI&apos;ı büronuzun gerçek dosyalarıyla, sınırlı
            kapsamda, 2–4 haftalık bir pilot programla deneyin. Risk almadan,
            ölçülebilir sonuçlarla karar verin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#pilot-form" size="lg">
              Pilot Başvurusu Yap
            </Button>
            <Button href="/demo" variant="secondary" size="lg">
              Önce Demo İzle
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* What is pilot */}
      <SectionWrapper className="bg-brand-surface/30">
        <div className="max-w-3xl">
          <h2 className="heading-2 mb-4">Pilot Program Nedir?</h2>
          <p className="body-large mb-6">
            Pilot program, VisaVault AI platformunu gerçek iş akışınızda,
            kontrollü bir ortamda denemenizi sağlayan kısa süreli bir
            değerlendirme sürecidir. Amacı, platformun büronuzun ihtiyaçlarına
            uygun olup olmadığını somut verilerle belirlemektir.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div className="card">
              <h3 className="heading-4 mb-2">Süre</h3>
              <p className="body-base">2–4 hafta</p>
            </div>
            <div className="card">
              <h3 className="heading-4 mb-2">Kapsam</h3>
              <p className="body-base">Sınırlı dosya sayısı ile test</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Who is it for */}
      <SectionWrapper>
        <div className="max-w-3xl">
          <h2 className="heading-2 mb-6">Kimler İçin Uygundur?</h2>
          <ul className="space-y-4">
            {[
              "Göçmenlik hukuku alanında düzenli dosya yöneten hukuk büroları",
              "Belge toplama sürecinde tekrarlayan sorunlar yaşayan ekipler",
              "Dijital araçlarla süreç iyileştirmek isteyen avukatlar",
              "Legal-tech çözümleri değerlendiren büro partnerleri",
              "Kontrollü bir başlangıçla yeni bir araç denemek isteyen karar vericiler",
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
      </SectionWrapper>

      {/* Pilot scope */}
      <SectionWrapper className="bg-brand-surface/30">
        <h2 className="heading-2 mb-10 text-center">Pilot Kapsamı</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {scope.map((item) => (
            <div key={item.title} className="card">
              <h3 className="heading-4 mb-2">{item.title}</h3>
              <p className="body-base">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Success criteria */}
      <SectionWrapper>
        <div className="max-w-3xl">
          <h2 className="heading-2 mb-6">Başarı Kriterleri</h2>
          <p className="body-large mb-8">
            Pilot program boyunca şu alanlarda ölçülebilir iyileşme hedeflenir:
          </p>
          <ul className="space-y-4">
            {criteria.map((item) => (
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
      </SectionWrapper>

      {/* Collaboration */}
      <SectionWrapper className="bg-brand-surface/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Beklenen İş Birliği</h2>
          <p className="body-large mb-6">
            Pilot sürecinde büronuzdan beklenen katkı minimumdur. Belirlenmiş
            dosyaların platforma aktarılması ve ekipten bir kişinin ana
            iletişim noktası olarak belirlenmesi yeterlidir. Geri kalan
            kurulum ve eğitim sürecini biz yürütürüz.
          </p>
        </div>
      </SectionWrapper>

      {/* Pilot form */}
      <SectionWrapper id="pilot-form">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-4">Pilot Program Başvurusu</h2>
            <p className="body-large">
              Formu doldurun, pilot program detaylarını birlikte planlayalım.
            </p>
          </div>
          <div className="card p-8 lg:p-10">
            <ContactForm formType="pilot" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
