import type { Locale } from "./i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://visavaultai.com";
const SITE_NAME = "VisaVault AI";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  locale?: Locale;
};

export function generatePageMeta({ title, description, path, noIndex, locale }: PageMetaInput) {
  const url = `${SITE_URL}${path}`;
  // For home page, use full title; for sub-pages, use just the title (layout template adds suffix)
  const isHome = path === "/" || path === "/tr" || path === "/en";
  const pageTitle = isHome ? `${SITE_NAME} — ${title}` : title;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const ogLocale = locale === "tr" ? "tr_TR" : "en_US";

  // Build path without locale prefix for alternates
  const pathWithoutLocale = locale
    ? path.replace(new RegExp(`^/${locale}`), "") || "/"
    : path;

  const alternates: Record<string, unknown> = {
    canonical: url,
  };

  if (locale) {
    alternates.languages = {
      tr: `${SITE_URL}/tr${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`,
      en: `${SITE_URL}/en${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`,
    };
  }

  return {
    title: pageTitle,
    description,
    alternates,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: ogLocale,
      type: "website" as const,
      images: [
        {
          url: `${SITE_URL}/screenshots/dashboard.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
      images: [`${SITE_URL}/screenshots/dashboard.png`],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

export { SITE_URL, SITE_NAME };
