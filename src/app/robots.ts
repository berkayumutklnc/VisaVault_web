import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://visavaultai.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/tr/thanks", "/en/thanks"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
