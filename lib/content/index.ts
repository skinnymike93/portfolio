import { contentEn } from "@/lib/content/en";
import { contentEs } from "@/lib/content/es";
import type { SiteContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";

export type { SiteContent } from "@/lib/content/types";

const contentByLocale: Record<Locale, SiteContent> = {
  es: contentEs,
  en: contentEn,
};

export function getContent(locale: Locale): SiteContent {
  return contentByLocale[locale];
}

/** @deprecated Use getContent(locale) or useContent() */
export const markColors = [
  "#0C0A09",
  "#F9A8D4",
  "#86EFAC",
  "#EA580C",
  "#E8D5C4",
  "#F43F5E",
  "#38BDF8",
  "#34D399",
  "#0C0A09",
] as const;
