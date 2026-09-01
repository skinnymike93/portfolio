"use client";

import { navItems } from "@/lib/content";

export type NavHref = (typeof navItems)[number]["href"];

function NavMark() {
  return (
    <span className="nav-mark pointer-events-none absolute top-full left-0 -mt-1 w-[130%] max-w-none -translate-x-[6%] overflow-visible">
      <svg
        viewBox="0 0 220 36"
        preserveAspectRatio="none"
        aria-hidden="true"
        overflow="visible"
        className="block h-[18px] w-full overflow-visible"
      >
        <defs>
          <filter
            id="nav-brush"
            x="-20%"
            y="-80%"
            width="140%"
            height="260%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.35 0.22"
              numOctaves="3"
              seed="11"
              result="grain"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="grain"
              scale="1.7"
              xChannelSelector="R"
              yChannelSelector="G"
              result="warped"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.8 0.12"
              numOctaves="2"
              seed="3"
              result="dry"
            />
            <feColorMatrix
              in="dry"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 2.15 -0.48"
              result="bristle"
            />
            <feComposite in="warped" in2="bristle" operator="in" />
          </filter>
        </defs>
        <g filter="url(#nav-brush)" fill="currentColor">
          <path d="M3.2 19.4C10 17.2 26 11.4 48 13.1C74 15 96 9.2 124 12.6C148 15.4 170 10.4 196 8.2C204 7.4 212 6.6 216.5 8.1C218.4 8.8 217.6 11.2 214 13.4C206 18.2 190 21.6 168 22.8C142 24.2 118 27.4 92 23.2C68 19.4 46 25.2 26 22.6C14 21 6.2 21.4 3.2 19.4Z" />
          <path
            d="M168 13.2C184 9.4 198 8.2 216 4.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinecap="round"
            opacity="0.92"
          />
          <path
            d="M176 17.4C190 15.6 202 16.8 217 13.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>
      </svg>
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
