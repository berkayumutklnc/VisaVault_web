import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: "Belge Durumu Takibi",
    description:
      "Her belgenin güncel durumu (bekliyor, incelemede, onaylı, revizyon gerekli) tek bakışta görülür.",
    chip: "Onaylı",
    chipColor: "bg-brand-accent/15 text-brand-accent",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Süreç Zaman Çizelgesi",
    description:
      "Her dosya için tarihli bir zaman çizelgesi tutulur. Kim ne zaman ne yaptı, net görülür.",
    chip: "Timeline",
    chipColor: "bg-brand-accent-cool/15 text-brand-accent-cool",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Karar Notları",
    description:
      "Avukat notları ve AI ön inceleme özetleri belge bazında saklanır. Revizyon geçmişi korunur.",
    chip: "Notlar",
    chipColor: "bg-amber-500/15 text-amber-400",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Denetim İzi",
    description:
      "Tüm işlemler kayıt altında tutulur. Süreçte kimin ne zaman hangi adımı attığı her zaman izlenebilir.",
    chip: "Audit Log",
    chipColor: "bg-brand-accent/15 text-brand-accent",
  },
];

export function Auditability() {
  return (
    <SectionWrapper id="auditability" className="relative">
      <Reveal>
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 inline-block">Denetlenebilirlik</span>
          <h2 className="heading-2 mb-4">Görünür ve Denetlenebilir Süreç</h2>
          <p className="body-large max-w-2xl mx-auto">
            Her belge, her adım ve her karar kayıt altındadır. Süreç
            şeffaf, izlenebilir ve yönetilebilir hale gelir.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}>
            <div className="card-hover group h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center transition-colors group-hover:border-white/[0.1]">
                  {feature.icon}
                </div>
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${feature.chipColor}`}>
                  {feature.chip}
                </span>
              </div>
              <h3 className="heading-4 mb-2">{feature.title}</h3>
              <p className="body-base">{feature.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
