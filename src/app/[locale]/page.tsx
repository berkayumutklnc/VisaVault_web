import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
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
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return generatePageMeta({
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    path: `/${locale}`,
    locale: locale as Locale,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <JsonLd data={softwareApplicationJsonLd(locale as Locale)} />
      <JsonLd
        data={faqJsonLd(
          dict.faq.items.map((f) => ({ question: f.question, answer: f.answer }))
        )}
      />
      <Hero locale={locale as Locale} dict={dict.hero} />
      <div className="section-glow" />
      <Problem dict={dict.problem} />
      <div className="section-glow" />
      <Solution dict={dict.solution} />
      <div className="section-glow" />
      <HowItWorks dict={dict.howItWorks} />
      <div className="section-glow" />
      <ProductProof dict={dict.productProof} />
      <div className="section-glow" />
      <AttorneyControl dict={dict.attorneyControl} />
      <div className="section-glow" />
      <Auditability dict={dict.auditability} />
      <div className="section-glow" />
      <PilotCTA locale={locale as Locale} dict={dict.pilotCTA} />
      <div className="section-glow" />
      <FAQ dict={dict.faq} />
    </>
  );
}
