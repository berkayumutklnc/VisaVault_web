import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/get-dictionary";

type AuditabilityDict = Dictionary["auditability"];

const icons = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8M16 17H8M10 9H8" /></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
];

const chipColors = [
  "bg-brand-accent/15 text-brand-accent",
  "bg-brand-accent-cool/15 text-brand-accent-cool",
  "bg-amber-500/15 text-amber-400",
  "bg-brand-accent/15 text-brand-accent",
];

export function Auditability({ dict }: { dict: AuditabilityDict }) {
  return (
    <SectionWrapper id="auditability" className="relative">
      <Reveal>
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 inline-block">{dict.eyebrow}</span>
          <h2 className="heading-2 mb-4">{dict.heading}</h2>
          <p className="body-large max-w-2xl mx-auto">{dict.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dict.items.map((feature, i) => (
          <Reveal key={feature.title} delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}>
            <div className="card-hover group h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center transition-colors group-hover:border-white/[0.1]">
                  {icons[i]}
                </div>
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${chipColors[i]}`}>
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
