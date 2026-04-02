import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import { generatePageMeta } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";
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
    title: dict.meta.thanks.title,
    description: dict.meta.thanks.description,
    path: `/${locale}/thanks`,
    noIndex: true,
    locale: locale as Locale,
  });
}

export default async function ThanksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.thanks;
  const lp = `/${locale}`;

  return (
    <SectionWrapper>
      <div className="max-w-2xl mx-auto text-center py-12">
        {/* Success icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-accent/10 mb-8">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-brand-accent"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h1 className="heading-1 mb-4">{t.heading}</h1>

        <p className="body-large mb-4">{t.body}</p>

        <p className="body-base mb-10">
          {t.responseTime}{" "}
          <a
            href="mailto:berkay@visavaultai.com"
            className="text-brand-accent hover:underline"
          >
            berkay@visavaultai.com
          </a>{" "}
          {t.responseTimeSuffix}{" "}
          <a
            href="tel:+905541790203"
            className="text-brand-accent hover:underline"
          >
            +90 (554) 179 02 03
          </a>{" "}
          {t.responseTimeEnd}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={lp} variant="secondary">
            {t.ctaHome}
          </Button>
          <Button href={`${lp}/pilot`} variant="ghost">
            {t.ctaPilot}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
