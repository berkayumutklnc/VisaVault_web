import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/get-dictionary";

type ProblemDict = Dictionary["problem"];

const icons = [
  <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-400"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M12 18v-6" /><path d="M9 15h6" /></svg>,
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose-400"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-400"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose-400"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
];

export function Problem({ dict }: { dict: ProblemDict }) {
  return (
    <SectionWrapper id="problem">
      <Reveal>
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 inline-block">{dict.eyebrow}</span>
          <h2 className="heading-2 mb-4">{dict.heading}</h2>
          <p className="body-large max-w-2xl mx-auto">{dict.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dict.items.map((problem, i) => (
          <Reveal key={problem.title} delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
            <div className="card-hover group h-full">
              <div className="mb-4 w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center transition-colors group-hover:border-white/[0.1]">
                {icons[i]}
              </div>
              <h3 className="heading-4 mb-2">{problem.title}</h3>
              <p className="body-base">{problem.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
