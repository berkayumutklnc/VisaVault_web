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
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
    path: `/${locale}/privacy`,
    locale: locale as Locale,
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const p = dict.privacy;

  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-1 mb-4">{p.title}</h1>
        <p className="body-base mb-10">{p.lastUpdated}</p>

        <div className="prose-custom space-y-10">
          {p.sections.map((section) => (
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
              {"contactNote" in section && section.contactNote && (
                <p className="body-base mt-3">
                  {(section.contactNote as string).includes("privacy@visavaultai.com") ? (
                    <>
                      {(section.contactNote as string).split("privacy@visavaultai.com")[0]}
                      <a
                        href="mailto:privacy@visavaultai.com"
                        className="text-brand-accent hover:underline"
                      >
                        privacy@visavaultai.com
                      </a>
                      {(section.contactNote as string).split("privacy@visavaultai.com")[1]}
                    </>
                  ) : (
                    section.contactNote as string
                  )}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
