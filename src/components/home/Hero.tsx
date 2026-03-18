import { Button } from "@/components/ui/Button";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { Reveal } from "@/components/ui/Reveal";

const pills = [
  "Avukat Kontrollü",
  "AI Ön İnceleme",
  "Pilot Programa Açık",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Layered ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top accent glow */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(46,230,166,0.12) 0%, transparent 65%)",
          }}
        />
        {/* Secondary cool glow */}
        <div
          className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(56,189,248,0.1) 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-main pt-20 md:pt-28 lg:pt-36 pb-24 md:pb-32">
        {/* Centered copy block */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          {/* Floating pills */}
          <Reveal delay={0}>
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
              {pills.map((pill) => (
                <span key={pill} className="eyebrow">
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="heading-1 mb-6">
              Immigration Law Firms İçin{" "}
              <span className="text-brand-accent">Belge Toplama ve AI Ön İnceleme</span>{" "}
              Platformu
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="body-large max-w-2xl mx-auto mb-4">
              VisaVault AI, göçmenlik dosyalarında belge toplama, AI destekli ön
              inceleme ve avukat kontrollü karar akışını tek bir dijital ortamda
              birleştirir. Daha düzenli süreçler, daha görünür dosya durumları.
            </p>
            <p className="text-sm text-brand-muted/80 max-w-xl mx-auto mb-10">
              AI ön inceleme yapar, son karar her zaman avukata aittir.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" size="lg">
                Demo Talep Et
              </Button>
              <Button href="/pilot" variant="secondary" size="lg">
                Pilot Programı İncele
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Cinematic product screenshot */}
        <Reveal delay={3}>
          <div className="relative max-w-5xl mx-auto">
            {/* Perspective wrapper */}
            <div
              className="relative"
              style={{
                perspective: "1200px",
              }}
            >
              <div
                style={{
                  transform: "rotateX(2deg)",
                  transformOrigin: "center bottom",
                }}
              >
                <ScreenshotFrame
                  src="/screenshots/dashboard.png"
                  alt="VisaVault AI — Avukat dosya yönetim paneli, belge durumu ve AI ön inceleme notları"
                  device="desktop"
                  glow
                  priority
                />
              </div>
            </div>

            {/* Bottom fade to bg */}
            <div className="absolute inset-x-0 -bottom-1 h-24 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
