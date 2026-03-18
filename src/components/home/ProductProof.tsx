import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { Reveal } from "@/components/ui/Reveal";

export function ProductProof() {
  return (
    <SectionWrapper id="product" className="relative">
      {/* Ambient backdrop */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(46,230,166,0.1) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <Reveal>
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 inline-block">Ürün</span>
          <h2 className="heading-2 mb-4">Ürünü Yakından İnceleyin</h2>
          <p className="body-large max-w-2xl mx-auto">
            VisaVault AI&apos;ın gerçek arayüzü. Müvekkil portalı, belge
            inceleme ekranı ve avukat karar paneli.
          </p>
        </div>
      </Reveal>

      {/* Row 1: Full-width dashboard — cinematic hero shot */}
      <Reveal delay={1}>
        <div className="max-w-5xl mx-auto mb-12">
          <ScreenshotFrame
            src="/screenshots/dashboard.png"
            alt="VisaVault AI — Dosya yönetim paneli ve belge durumu"
            device="desktop"
            glow
          />
          <p className="text-sm text-brand-muted mt-4 text-center">
            Avukat paneli — Dosya durumu, belge listesi ve AI ön inceleme notları
          </p>
        </div>
      </Reveal>

      {/* Row 2: Review panel + Mobile side by side, balanced */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-end">
        <Reveal delay={2}>
          <ScreenshotFrame
            src="/screenshots/review-panel.png"
            alt="VisaVault AI — Belge detay ve AI inceleme paneli"
            device="desktop"
            width={600}
            height={500}
          />
          <p className="text-sm text-brand-muted mt-4 text-center">
            AI ön inceleme — Belge detay paneli
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="flex justify-center">
            <div className="w-[240px] md:w-[260px]">
              <ScreenshotFrame
                src="/screenshots/mobile-upload.jpg"
                alt="VisaVault AI — Müvekkil mobil belge yükleme"
                device="mobile"
                width={375}
                height={750}
              />
            </div>
          </div>
          <p className="text-sm text-brand-muted mt-4 text-center">
            Müvekkil portalı — Mobil belge yükleme
          </p>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
