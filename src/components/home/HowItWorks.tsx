import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/get-dictionary";

type HowItWorksDict = Dictionary["howItWorks"];

export function HowItWorks({ dict }: { dict: HowItWorksDict }) {
  return (
    <SectionWrapper id="how-it-works">
      <Reveal>
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 inline-block">{dict.eyebrow}</span>
          <h2 className="heading-2 mb-4">{dict.heading}</h2>
          <p className="body-large max-w-2xl mx-auto">{dict.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {dict.steps.map((item, i) => (
          <Reveal key={item.step} delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}>
            <div className="relative group">
              {i < dict.steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-brand-accent/20 to-brand-accent/5" />
                </div>
              )}

              <div className="text-center">
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
