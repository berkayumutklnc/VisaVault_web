import type { Metadata } from "next";
import { generatePageMeta } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/metadata";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = generatePageMeta({
  title: "Güvenlik ve Kontrol Yaklaşımı",
  description:
    "VisaVault AI'ın güvenlik ve kontrol yaklaşımı: rol bazlı erişim, avukat kontrollü iş akışı, denetlenebilir süreç ve güvenli belge yönetimi.",
  path: "/security",
});

const sections = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Rol Bazlı Erişim Kontrolü",
    description:
      "Platformda her kullanıcı rolü (avukat, müvekkil, ekip üyesi) farklı erişim seviyelerine sahiptir. Müvekkiller yalnızca kendi dosyalarına erişir. Avukatlar, atandıkları dosyaları yönetir. Erişim sınırları net olarak tanımlıdır.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Avukat Kontrollü İş Akışı",
    description:
      "Hiçbir belge otomatik olarak onaylanmaz veya reddedilemez. AI sistemi yalnızca ön inceleme yapar ve dikkat noktalarını işaretler. Onay, ret ve revizyon kararları yalnızca avukat tarafından verilir.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: "Kontrollü Belge İnceleme Akışı",
    description:
      "Belgeler, yapılandırılmış bir akış içinde işlenir: yükleme → AI ön inceleme → avukat değerlendirmesi → karar. Her adım kayıt altındadır. Belge durumları (bekliyor, incelemede, onaylı, revizyon gerekli) her zaman görülebilir.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Denetlenebilirlik ve Süreç Görünürlüğü",
    description:
      "Tüm işlemler (belge yükleme, inceleme, not ekleme, karar verme, revizyon talebi) zaman damgalı olarak kaydedilir. Dosya bazlı zaman çizelgesi, kimin ne zaman ne yaptığını gösterir. Denetim izi her zaman erişilebilirdir.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "Güvenli Belge Yönetimi",
    description:
      "Belgeler güvenli bir altyapıda saklanır. Dosya transferleri şifreli bağlantılar üzerinden gerçekleşir. Erişim izinleri rol bazında sınırlandırılır. Belgeler avukat onayı olmadan dışa aktarılamaz.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    title: "E-posta ve Bildirim Ayrımı",
    description:
      "Platform üzerinden gönderilen bildirimler, iş akışı ile ilgili durum güncellemelerini içerir. E-posta içerikleri belge detaylarını barındırmaz; yalnızca ilgili aksiyona bağlantı sağlar. Hassas bilgiler e-posta üzerinden paylaşılmaz.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", url: SITE_URL },
          { name: "Güvenlik", url: `${SITE_URL}/security` },
        ])}
      />

      <SectionWrapper>
        <div className="max-w-3xl mb-16">
          <h1 className="heading-1 mb-6">Güvenlik ve Kontrol Yaklaşımı</h1>
          <p className="body-large">
            VisaVault AI, hukuk bürolarının belge süreçlerini yönetirken
            güvenlik, kontrol ve denetlenebilirliği ön planda tutar. Aşağıda
            platformun temel güvenlik ve kontrol prensipleri yer almaktadır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="card">
              <div className="mb-4">{section.icon}</div>
              <h2 className="heading-4 mb-3">{section.title}</h2>
              <p className="body-base">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-lg border border-brand-border bg-brand-surface/50 max-w-3xl">
          <p className="body-base text-sm">
            <strong className="text-brand-text">Not:</strong> Bu sayfa
            VisaVault AI&apos;ın güvenlik yaklaşımını genel hatlarıyla anlatır.
            Belirtilen özellikler mevcut mimari tasarımı ve geliştirme
            hedeflerini yansıtır. Üçüncü taraf güvenlik sertifikasyonları
            henüz alınmamıştır. Detaylı güvenlik soruları için bizimle
            iletişime geçebilirsiniz.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
