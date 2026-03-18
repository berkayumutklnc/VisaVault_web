import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: "Müvekkil Belge Yükleme",
    description:
      "Müvekkilleriniz güvenli bir portal üzerinden belgelerini yükler. Hangi belgenin beklendiği, hangisinin geldiği net görünür.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "AI Ön İnceleme",
    description:
      "Yüklenen belgeler AI tarafından ön incelemeye alınır. Eksiklik, uyumsuzluk ve dikkat gerektiren noktalar otomatik işaretlenir.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Avukat Değerlendirmesi",
    description:
      "Avukat, AI ön incelemesini gözden geçirir, kendi notlarını ekler ve belge üzerinde karar verir. Son söz her zaman avukata aittir.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Revizyon ve İletişim",
    description:
      "Eksik veya yetersiz belgeler için müvekkile revizyon talebi gönderilir. Tüm süreç aynı akış içinde kalır.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Kontrollü İletişim Akışı",
    description:
      "Müvekkil ve avukat arasındaki iletişim dosya bazında organize edilir. Notlar, talepler ve güncellemeler tek bir yerde toplanır.",
  },
];

export function Solution() {
  return (
    <SectionWrapper id="solution" className="relative">
      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(46,230,166,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Reveal>
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 inline-block">Çözüm</span>
          <h2 className="heading-2 mb-4">
            Tek Platform, Düzenli Süreç
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            VisaVault AI, belge toplama aşamasından avukat onayına kadar tüm
            akışı tek bir dijital ortamda toplar.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.title} delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}>
            <div className="card-hover group h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/[0.08] border border-brand-accent/[0.15] flex items-center justify-center transition-colors group-hover:bg-brand-accent/[0.12]">
                  {cap.icon}
                </div>
                <span className="text-xs font-heading font-bold text-brand-accent/40 tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="heading-4 mb-2">{cap.title}</h3>
              <p className="body-base">{cap.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
