const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://visavaultai.com";
const SITE_NAME = "VisaVault AI";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function generatePageMeta({ title, description, path, noIndex }: PageMetaInput) {
  const url = `${SITE_URL}${path}`;
  // For home page, use full title; for sub-pages, use just the title (layout template adds suffix)
  const pageTitle = path === "/" ? `${SITE_NAME} — ${title}` : title;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website" as const,
      images: [
        {
          url: `${SITE_URL}/screenshots/dashboard.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Göçmenlik Dosya Yönetimi`,
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
