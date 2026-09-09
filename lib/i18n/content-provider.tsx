"use client";

import { createContext, useContext } from "react";
import { getContent, type SiteContent } from "@/lib/content/index";
import type { Locale } from "@/lib/i18n/config";

const ContentContext = createContext<SiteContent | null>(null);

export function ContentProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <ContentContext.Provider value={getContent(locale)}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): SiteContent {
  const content = useContext(ContentContext);
  if (!content) {
    throw new Error("useContent must be used within ContentProvider");
  }
  return content;
}
