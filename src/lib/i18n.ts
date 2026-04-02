export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Cookie name used by middleware to persist the user's locale choice. */
export const LOCALE_COOKIE = "NEXT_LOCALE";
