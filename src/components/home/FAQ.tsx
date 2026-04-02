"use client";

import { useState, useRef, useEffect } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/get-dictionary";

type FAQDict = Dictionary["faq"];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border border-white/[0.06] rounded-xl overflow-hidden transition-colors hover:border-white/[0.1]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-brand-text pr-4">
          {question}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`flex-shrink-0 text-brand-muted transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-[height] duration-300 ease-out"
        style={{ height }}
      >
        <div ref={contentRef} className="px-6 pb-5">
          <p className="body-base">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ dict }: { dict: FAQDict }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <Reveal>
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 inline-block">{dict.eyebrow}</span>
          <h2 className="heading-2 mb-4">{dict.heading}</h2>
          <p className="body-large max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-3">
        {dict.items.map((faq, i) => (
          <Reveal key={i} delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}>
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
