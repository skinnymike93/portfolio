"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useContent } from "@/lib/i18n/content-provider";
import {
  defaultLocale,
  localePath,
  type Locale,
} from "@/lib/i18n/config";

function LocaleLink({
  targetLocale,
  code,
  label,
  active,
}: {
  targetLocale: Locale;
  code: string;
  label: string;
  active: boolean;
}) {
  const [href, setHref] = useState(localePath(targetLocale));

  useEffect(() => {
    setHref(localePath(targetLocale, window.location.hash));
  }, [targetLocale]);

  return (
    <Link
      href={href}
      className={`locale-link${active ? " is-active" : ""}`}
      aria-label={label}
      aria-current={active ? "true" : undefined}
      prefetch
    >
      {code}
    </Link>
  );
}

export function LocaleSwitch({ className = "" }: { className?: string }) {
  const { locale, ui } = useContent();
  const activeEs = locale === defaultLocale;
  const activeEn = locale === "en";

  return (
    <div
      className={`locale-switch${className ? ` ${className}` : ""}`}
      role="group"
      aria-label="Language"
    >
      <LocaleLink targetLocale="es" code="ES" label={ui.localeEs} active={activeEs} />
      <span className="locale-sep" aria-hidden="true">
        |
      </span>
      <LocaleLink targetLocale="en" code="EN" label={ui.localeEn} active={activeEn} />
    </div>
  );
}
