import "server-only";
import type { Locale } from "./i18n";

const dictionaries = {
  tr: () => import("../../messages/tr.json").then((m) => m.default),
  en: () => import("../../messages/en.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["tr"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale];
  if (!loader) return dictionaries.en();
  return loader();
}
