import { SITE_URL, SITE_NAME } from "./metadata";
import type { Locale } from "./i18n";

const descriptions = {
  tr: {
    org: "Immigration law firms için belge toplama, AI destekli ön inceleme ve avukat kontrollü karar akışı platformu.",
    website: "Göçmenlik dosyalarında belge toplama ve ön inceleme sürecini düzenleyen, avukat kontrollü AI destekli platform.",
    app: "Immigration law firms için belge toplama, AI ön inceleme ve avukat kontrollü karar akışı platformu.",
    offer: "Pilot program başvurusu açık.",
  },
  en: {
    org: "Document collection, AI-powered preliminary review, and attorney-controlled decision workflow platform for immigration law firms.",
    website: "An attorney-controlled, AI-powered platform that streamlines document collection and preliminary review for immigration cases.",
    app: "Document collection, AI pre-review, and attorney-controlled decision workflow platform for immigration law firms.",
    offer: "Pilot program applications are open.",
  },
};

export function organizationJsonLd(locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: descriptions[locale].org,
    logo: `${SITE_URL}/favicon.svg`,
  };
}

export function websiteJsonLd(locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: descriptions[locale].website,
  };
}

export function softwareApplicationJsonLd(locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: descriptions[locale].app,
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      description: descriptions[locale].offer,
    },
  };
}

export function faqJsonLd(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
