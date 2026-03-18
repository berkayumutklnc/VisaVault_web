import type { Metadata } from "next";
import { generatePageMeta } from "@/lib/metadata";
import {
  softwareApplicationJsonLd,
  faqJsonLd,
} from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Solution } from "@/components/home/Solution";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ProductProof } from "@/components/home/ProductProof";
import { AttorneyControl } from "@/components/home/AttorneyControl";
import { Auditability } from "@/components/home/Auditability";
import { PilotCTA } from "@/components/home/PilotCTA";
import { FAQ } from "@/components/home/FAQ";
import { faqs } from "@/lib/faq-data";

export const metadata: Metadata = generatePageMeta({
  title: "Göçmenlik Dosya Yönetimi Platformu",
  description:
    "Immigration law firms için belge toplama, AI destekli ön inceleme ve avukat kontrollü karar akışını tek platformda birleştiren dijital süreç yönetimi çözümü. Pilot programı inceleyin.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd
        data={faqJsonLd(
          faqs.map((f) => ({ question: f.question, answer: f.answer }))
        )}
      />
      <Hero />
      <div className="section-glow" />
      <Problem />
      <div className="section-glow" />
      <Solution />
      <div className="section-glow" />
      <HowItWorks />
      <div className="section-glow" />
      <ProductProof />
      <div className="section-glow" />
      <AttorneyControl />
      <div className="section-glow" />
      <Auditability />
      <div className="section-glow" />
      <PilotCTA />
      <div className="section-glow" />
      <FAQ />
    </>
  );
}
