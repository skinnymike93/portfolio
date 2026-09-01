"use client";

import { useEffect, useRef } from "react";
import { projectSpread } from "@/lib/content";

function Sparkle({ className }: { className: string }) {
  return (
    <svg
      className={`tarot-sparkle ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 1.2C12.35 7.05 16.95 11.65 22.8 12C16.95 12.35 12.35 16.95 12 22.8C11.65 16.95 7.05 12.35 1.2 12C7.05 11.65 11.65 7.05 12 1.2Z" />
    </svg>
  );
}

export function Proyectos() {
  const spreadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spread = spreadRef.current;
    if (!spread) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        spread.classList.toggle("is-playing", entry.isIntersecting);
      },
      { threshold: 0.4 },
    );

    observer.observe(spread);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-heading"
      className="relative mx-auto w-full max-w-[92rem] scroll-mt-28 px-[4.861vw] pt-28 pb-[18vh] text-ink"
    >
      <header className="relative mb-16 lg:mb-20">
        <h2
          id="proyectos-heading"
          className="font-body text-[40px] font-extralight italic leading-[1.2] tracking-[0.05em] [-webkit-text-stroke:1px_#0221e7]"
        >
          {projectSpread.kicker}
        </h2>
        <p className="mt-4 max-w-[22rem] font-body text-xl font-extralight italic leading-[1.3] tracking-[0.02em]">
          {projectSpread.lede}
        </p>
      </header>

      <div ref={spreadRef} className="tarot-spread">
        {projectSpread.items.map((item) => (
          <a
            key={item.suit}
            href={item.href}
            className={`tarot-card tarot-card-${item.suit}`}
            aria-label={`${item.name}. ${item.line}`}
            {...(item.href.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            <span className="tarot-card-live">
              <img src={`${item.card}?v=2`} alt="" className="block h-auto w-full" />
            </span>
          </a>
        ))}
        <img
          src="/images/tarot/hand.png?v=4"
          alt=""
          className="tarot-hand"
        />
        <span className="tarot-sparkles" aria-hidden="true">
          <Sparkle className="tarot-sparkle-a" />
          <Sparkle className="tarot-sparkle-b" />
          <Sparkle className="tarot-sparkle-c" />
          <Sparkle className="tarot-sparkle-d" />
          <Sparkle className="tarot-sparkle-e" />
        </span>
      </div>

      <ul className="tarot-legend">
        {projectSpread.items.map((item) => (
          <li key={item.suit}>
            <h3 className="font-body text-[2.15rem] font-extralight italic leading-none tracking-[0.01em] lg:text-[2.4rem]">
              {item.name}
            </h3>
            <p className="mt-5 max-w-[28rem] font-body text-[1.35rem] font-medium leading-[1.42]">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
