import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale, siteUrl } from "@/lib/i18n/config";

export function createMetadata(locale: Locale): Metadata {
  const isDefault = locale === defaultLocale;
  const canonical = isDefault ? siteUrl : `${siteUrl}/en`;

  return {
    metadataBase: new URL(siteUrl),
    title: "Miguel Delgado — Portfolio",
    description: "Product Design Engineer",
    alternates: {
      canonical,
      languages: {
        es: siteUrl,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: "Miguel Delgado — Portfolio",
      description: "Product Design Engineer",
      url: canonical,
      siteName: "Miguel Delgado",
      type: "website",
      locale: isDefault ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Miguel Delgado — Portfolio",
      description: "Product Design Engineer",
    },
  };
}
