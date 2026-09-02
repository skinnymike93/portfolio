"use client";

import { useLayoutEffect, useRef } from "react";
import { experience } from "@/lib/content";

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 22"
      width="16"
      height="22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 1.2 V16.2"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M2.2 12.4 L8 18.4 L13.8 12.4"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Experiencia() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const nodes = [...root.querySelectorAll(".cv-breeze")];
    for (const node of nodes) {
      node.classList.add("is-breeze-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        entering.forEach((entry, index) => {
          const el = entry.target;
          if (!el.classList.contains("is-breeze-ready")) {
            return;
          }
          el.classList.remove("is-breeze-ready");
          el.classList.add("is-breezing");
          if (index > 0) {
            (el as HTMLElement).style.animationDelay = `${index * 0.09}s`;
          }
          observer.unobserve(el);
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -14% 0px" },
    );

    for (const node of nodes) {
      observer.observe(node);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      id="experiencia"
      aria-labelledby="experiencia-heading"
      className="relative mx-auto w-full max-w-[92rem] scroll-mt-28 px-[4.861vw] pt-28 pb-[18vh] text-ink"
    >
      <div className="cv-axis">
        <h2
          id="experiencia-heading"
          className="cv-breeze font-body text-[40px] font-extralight italic leading-[1.2] tracking-[0.05em] [-webkit-text-stroke:1px_#0221e7]"
        >
          {experience.kicker}
        </h2>
        <p className="cv-year cv-year-start">
          <span className="cv-breeze">
            <time dateTime={experience.from}>{experience.from}</time>
          </span>
        </p>
        <div className="cv-spine">
          <span className="cv-arrow">
            <ArrowDown />
          </span>
          <ol className="cv-list">
            {experience.items.map((item) => (
              <li key={item.company} className="cv-row cv-breeze">
                <span className="cv-node" aria-hidden="true" />
                <h3 className="font-display text-[28px] font-medium leading-none tracking-[0.05em] md:text-[32px]">
                  {item.company}
                </h3>
                <div className="cv-copy">
                  {item.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          <span className="cv-arrow cv-arrow-end">
            <ArrowDown />
          </span>
        </div>
        <p className="cv-year cv-year-end">
          <span className="cv-breeze">
            <time dateTime={experience.to}>{experience.to}</time>
          </span>
        </p>
      </div>
    </section>
  );
}
