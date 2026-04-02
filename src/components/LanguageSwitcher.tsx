"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  function getLocalePath(targetLocale: Locale) {
    // Replace current locale prefix with target locale
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/");
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && (
            <span className="text-brand-muted/30 mx-1" aria-hidden="true">|</span>
          )}
          {loc === locale ? (
            <span className="text-brand-text">{localeNames[loc]}</span>
          ) : (
            <Link
              href={getLocalePath(loc)}
              className="text-brand-muted hover:text-brand-text transition-colors"
              aria-label={`Switch to ${loc === "tr" ? "Türkçe" : "English"}`}
            >
              {localeNames[loc]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
