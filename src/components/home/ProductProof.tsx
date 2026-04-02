import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/get-dictionary";

type ProductProofDict = Dictionary["productProof"];

export function ProductProof({ dict }: { dict: ProductProofDict }) {
  return (
    <SectionWrapper id="product" className="relative">
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
          <span className="eyebrow mb-4 inline-block">{dict.eyebrow}</span>
          <h2 className="heading-2 mb-4">{dict.heading}</h2>
          <p className="body-large max-w-2xl mx-auto">{dict.description}</p>
        </div>
      </Reveal>

      <Reveal delay={1}>
        <div className="max-w-5xl mx-auto mb-12">
          <ScreenshotFrame
            src="/screenshots/dashboard.png"
            alt={dict.altDashboard}
            device="desktop"
            glow
          />
          <p className="text-sm text-brand-muted mt-4 text-center">
            {dict.captionDashboard}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-end">
        <Reveal delay={2}>
          <ScreenshotFrame
            src="/screenshots/review-panel.png"
            alt={dict.altReview}
            device="desktop"
            width={600}
            height={500}
          />
          <p className="text-sm text-brand-muted mt-4 text-center">
            {dict.captionReview}
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="flex justify-center">
            <div className="w-[240px] md:w-[260px]">
              <ScreenshotFrame
                src="/screenshots/mobile-upload.jpg"
                alt={dict.altMobile}
                device="mobile"
                width={375}
                height={750}
              />
            </div>
          </div>
          <p className="text-sm text-brand-muted mt-4 text-center">
            {dict.captionMobile}
          </p>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
