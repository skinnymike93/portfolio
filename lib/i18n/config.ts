export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const sectionHrefs = [
  "#historia",
  "#proyectos",
  "#experiencia",
  "#skills",
] as const;

export type NavHref = (typeof sectionHrefs)[number];

export function localePath(locale: Locale, hash = ""): string {
  const base = locale === defaultLocale ? "/" : "/en";
  return hash ? `${base}${hash}` : base;
}

export const siteUrl = "https://migueldelgado.me";
