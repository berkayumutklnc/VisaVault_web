import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import { generatePageMeta, SITE_URL } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
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
    title: dict.meta.demo.title,
    description: dict.meta.demo.description,
    path: `/${locale}/demo`,
    locale: locale as Locale,
  });
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const d = dict.demo;
  const f = dict.form;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: d.breadcrumbHome, url: `${SITE_URL}/${locale}` },
          { name: d.breadcrumbDemo, url: `${SITE_URL}/${locale}/demo` },
        ])}
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            <h1 className="heading-1 mb-6">
              {d.heading}{" "}
              <span className="text-brand-accent">{d.headingAccent}</span>
            </h1>

            <p className="body-large mb-10">{d.body}</p>

            {/* What to expect */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-3 mb-4">{d.expectTitle}</h2>
                <ul className="space-y-3">
                  {d.expectItems.map((item) => (
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

              <div>
                <h2 className="heading-3 mb-4">{d.eligibleTitle}</h2>
                <ul className="space-y-3">
                  {d.eligibleItems.map((item) => (
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
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="card p-8 lg:p-10 sticky top-24">
              <h2 className="heading-3 mb-2">{d.formTitle}</h2>
              <p className="body-base mb-6">{d.formDescription}</p>
              <ContactForm formType="demo" locale={locale as Locale} dict={f} />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
