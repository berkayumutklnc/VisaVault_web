import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: "2–4", label: "Hafta Pilot Süresi" },
  { value: "5–15", label: "Dosya ile Test" },
  { value: "%0", label: "Başlangıç Maliyeti" },
];

export function PilotCTA() {
  return (
    <SectionWrapper id="pilot-cta">
      <Reveal>
        <div className="relative card p-10 md:p-16 text-center max-w-3xl mx-auto border-brand-accent/20 overflow-hidden">
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

          {/* Glow behind */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(46,230,166,0.15) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <span className="eyebrow mb-6 inline-block">Pilot Program</span>

          <h2 className="heading-2 mb-4">
            Kontrollü Bir Başlangıç Yapın
          </h2>

          <p className="body-large max-w-xl mx-auto mb-10">
            2–4 haftalık pilot programla VisaVault AI&apos;ı sınırlı kapsamda,
            ölçülebilir hedeflerle değerlendirin. Risk almadan, gerçek
            dosyalarınızla test edin.
          </p>

          {/* Metrics row */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-heading font-bold text-2xl md:text-3xl text-brand-accent">
                  {m.value}
                </div>
                <div className="text-xs text-brand-muted mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/pilot" size="lg">
              Pilot Programı İncele
            </Button>
            <Button href="/demo" variant="secondary" size="lg">
              Önce Demo İzle
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
