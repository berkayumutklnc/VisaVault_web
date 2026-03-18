import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://visavaultai.com"
  ),
  title: {
    default: "VisaVault AI — Göçmenlik Dosya Yönetimi Platformu",
    template: "%s | VisaVault AI",
  },
  description:
    "Immigration law firms için belge toplama, AI destekli ön inceleme ve avukat kontrollü karar akışını tek platformda birleştiren dijital dosya yönetimi çözümü.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#040816",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        <Header />
        <main className="flex-1 pt-16 md:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
