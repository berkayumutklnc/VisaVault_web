import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/get-dictionary";

type PilotCTADict = Dictionary["pilotCTA"];

export function PilotCTA({ locale, dict }: { locale: Locale; dict: PilotCTADict }) {
  const lp = `/${locale}`;

  return (
    <SectionWrapper id="pilot-cta">
      <Reveal>
        <div className="relative card p-10 md:p-16 text-center max-w-3xl mx-auto border-brand-accent/20 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(46,230,166,0.15) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <span className="eyebrow mb-6 inline-block">{dict.eyebrow}</span>
          <h2 className="heading-2 mb-4">{dict.heading}</h2>
          <p className="body-large max-w-xl mx-auto mb-10">{dict.description}</p>

          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            {dict.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-heading font-bold text-2xl md:text-3xl text-brand-accent">
                  {m.value}
                </div>
                <div className="text-xs text-brand-muted mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`${lp}/pilot`} size="lg">
              {dict.ctaPilot}
            </Button>
            <Button href={`${lp}/demo`} variant="secondary" size="lg">
              {dict.ctaDemo}
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
