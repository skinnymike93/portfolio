"use client";

import { navItems } from "@/lib/content";
import { InkMark } from "@/components/InkMark";

export type NavHref = (typeof navItems)[number]["href"];

export function NavMark() {
  return (
    <span className="nav-mark pointer-events-none absolute top-full left-0 -mt-1 w-[130%] max-w-none -translate-x-[6%] overflow-visible">
      <InkMark />
    </span>
  );
}

export function Nav({
  className,
  activeHref = "#historia",
  onNavigate,
}: {
  className?: string;
  activeHref?: NavHref;
  onNavigate?: (href: NavHref) => void;
}) {
  return (
    <nav className={className} aria-label="Primary">
      {navItems.map((item) => {
        const isActive = item.href === activeHref;
        return (
          <a
            key={item.href}
            href={item.href}
            className="relative shrink-0 overflow-visible pb-3.5"
            aria-current={isActive ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              onNavigate?.(item.href);
            }}
          >
            <span
              className={
                isActive ? "font-bold italic" : "font-medium not-italic"
              }
            >
              {item.label}
            </span>
            {isActive ? <NavMark key={item.href} /> : null}
          </a>
        );
      })}
    </nav>
  );
}
