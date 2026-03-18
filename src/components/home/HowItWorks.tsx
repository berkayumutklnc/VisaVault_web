import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    step: "01",
    title: "Belge Yükleme",
    description:
      "Müvekkil, kendisine açılan güvenli portal üzerinden gerekli belgeleri yükler. Eksik belgeler otomatik olarak listelenir.",
  },
  {
    step: "02",
    title: "AI Ön İnceleme",
    description:
      "Yüklenen belgeler AI tarafından ön incelemeye alınır. Olası eksiklikler ve dikkat edilmesi gereken noktalar işaretlenir.",
  },
  {
    step: "03",
    title: "Avukat Değerlendirmesi",
    description:
      "Avukat, AI'ın ön inceleme notlarını görür, kendi değerlendirmesini yapar ve belge hakkında karar verir.",
  },
  {
    step: "04",
    title: "Revizyon veya Onay",
    description:
      "Belge yeterliyse onaylanır. Yetersizse müvekkile net bir revizyon talebi gönderilir. Süreç aynı akışta devam eder.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <Reveal>
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 inline-block">Süreç</span>
          <h2 className="heading-2 mb-4">Nasıl Çalışır?</h2>
          <p className="body-large max-w-2xl mx-auto">
            Dört adımda belge toplama ve inceleme süreci daha kontrollü ve
            görünür hale gelir.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, i) => (
          <Reveal key={item.step} delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}>
            <div className="relative group">
              {/* Connector line on large screens */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-brand-accent/20 to-brand-accent/5" />
                </div>
              )}

              <div className="text-center">
                {/* Step number circle */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-accent/[0.08] border border-brand-accent/[0.15] mb-5 transition-all duration-300 group-hover:bg-brand-accent/[0.15] group-hover:shadow-[0_0_20px_rgba(46,230,166,0.12)]">
                  <span className="font-heading font-bold text-sm text-brand-accent">
                    {item.step}
                  </span>
                </div>
                <h3 className="heading-4 mb-3">{item.title}</h3>
                <p className="body-base">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
