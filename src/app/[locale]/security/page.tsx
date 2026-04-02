import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import { generatePageMeta, SITE_URL } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { Locale } from "@/lib/i18n";

const securityIcons = [
  <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8M16 17H8M10 9H8" /></svg>,
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  <svg key="4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
  <svg key="5" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>,
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return generatePageMeta({
    title: dict.meta.security.title,
    description: dict.meta.security.description,
    path: `/${locale}/security`,
    locale: locale as Locale,
  });
}

export default async function SecurityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const s = dict.security;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: s.breadcrumbHome, url: `${SITE_URL}/${locale}` },
          { name: s.breadcrumbSecurity, url: `${SITE_URL}/${locale}/security` },
        ])}
      />

      <SectionWrapper>
        <div className="max-w-3xl mb-16">
          <h1 className="heading-1 mb-6">{s.heading}</h1>
          <p className="body-large">{s.body}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {s.items.map((section, i) => (
            <div key={section.title} className="card">
              <div className="mb-4">{securityIcons[i]}</div>
              <h2 className="heading-4 mb-3">{section.title}</h2>
              <p className="body-base">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-lg border border-brand-border bg-brand-surface/50 max-w-3xl">
          <p className="body-base text-sm">
            <strong className="text-brand-text">{s.disclaimerNote}</strong>{" "}
            {s.disclaimer}
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
