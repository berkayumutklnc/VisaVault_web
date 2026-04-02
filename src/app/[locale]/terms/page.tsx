import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import { generatePageMeta } from "@/lib/metadata";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return generatePageMeta({
    title: dict.meta.terms.title,
    description: dict.meta.terms.description,
    path: `/${locale}/terms`,
    locale: locale as Locale,
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.terms;

  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-1 mb-4">{t.title}</h1>
        <p className="body-base mb-10">{t.lastUpdated}</p>

        <div className="prose-custom space-y-10">
          {t.sections.map((section) => (
            <section key={section.title}>
              <h2 className="heading-3 mb-3">{section.title}</h2>
              {section.content && (
                <p className="body-base mb-3">{section.content}</p>
              )}
              {section.list && (
                <ul className="list-disc pl-6 space-y-2 body-base">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
