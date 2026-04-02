import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import { generatePageMeta, SITE_URL } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return generatePageMeta({
    title: dict.meta.pilot.title,
    description: dict.meta.pilot.description,
    path: `/${locale}/pilot`,
    locale: locale as Locale,
  });
}

export default async function PilotPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const p = dict.pilot;
  const f = dict.form;
  const lp = `/${locale}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: p.breadcrumbHome, url: `${SITE_URL}/${locale}` },
          { name: p.breadcrumbPilot, url: `${SITE_URL}/${locale}/pilot` },
        ])}
      />

      {/* Hero */}
      <SectionWrapper>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-medium mb-6">
            {p.badge}
          </div>

          <h1 className="heading-1 mb-6">
            {p.heading}{" "}
            <span className="text-brand-accent">{p.headingAccent}</span>
          </h1>

          <p className="body-large mb-8">{p.body}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#pilot-form" size="lg">
              {p.ctaApply}
            </Button>
            <Button href={`${lp}/demo`} variant="secondary" size="lg">
              {p.ctaDemo}
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* What is pilot */}
      <SectionWrapper className="bg-brand-surface/30">
        <div className="max-w-3xl">
          <h2 className="heading-2 mb-4">{p.whatTitle}</h2>
          <p className="body-large mb-6">{p.whatBody}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div className="card">
              <h3 className="heading-4 mb-2">{p.duration}</h3>
              <p className="body-base">{p.durationValue}</p>
            </div>
            <div className="card">
              <h3 className="heading-4 mb-2">{p.scope}</h3>
              <p className="body-base">{p.scopeValue}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Who is it for */}
      <SectionWrapper>
        <div className="max-w-3xl">
          <h2 className="heading-2 mb-6">{p.whoTitle}</h2>
          <ul className="space-y-4">
            {p.whoItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 mt-0.5 text-brand-accent"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="body-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Pilot scope */}
      <SectionWrapper className="bg-brand-surface/30">
        <h2 className="heading-2 mb-10 text-center">{p.scopeTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {p.scopeItems.map((item) => (
            <div key={item.title} className="card">
              <h3 className="heading-4 mb-2">{item.title}</h3>
              <p className="body-base">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Success criteria */}
      <SectionWrapper>
        <div className="max-w-3xl">
          <h2 className="heading-2 mb-6">{p.criteriaTitle}</h2>
          <p className="body-large mb-8">{p.criteriaBody}</p>
          <ul className="space-y-4">
            {p.criteriaItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 mt-0.5 text-brand-accent"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="body-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Collaboration */}
      <SectionWrapper className="bg-brand-surface/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">{p.collabTitle}</h2>
          <p className="body-large mb-6">{p.collabBody}</p>
        </div>
      </SectionWrapper>

      {/* Pilot form */}
      <SectionWrapper id="pilot-form">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-4">{p.formTitle}</h2>
            <p className="body-large">{p.formBody}</p>
          </div>
          <div className="card p-8 lg:p-10">
            <ContactForm formType="pilot" locale={locale as Locale} dict={f} />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
