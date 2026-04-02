import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { Analytics } from "@vercel/analytics/react";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { SITE_URL, SITE_NAME } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const ogLocale = locale === "tr" ? "tr_TR" : "en_US";
  const altLocale = locale === "tr" ? "en" : "tr";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.siteTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: dict.meta.siteDescription,
    icons: {
      icon: "/favicon.svg",
      apple: "/apple-touch-icon.svg",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        tr: `${SITE_URL}/tr`,
        en: `${SITE_URL}/en`,
      },
    },
    openGraph: {
      locale: ogLocale,
      alternateLocale: altLocale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#040816",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${inter.variable} ${sora.variable}`}>
      <head>
        <JsonLd data={organizationJsonLd(locale as Locale)} />
        <JsonLd data={websiteJsonLd(locale as Locale)} />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        <Header locale={locale as Locale} dict={dict.header} />
        <main className="flex-1 pt-16 md:pt-18">{children}</main>
        <Footer locale={locale as Locale} dict={dict.footer} />
        <Analytics />
      </body>
    </html>
  );
}
