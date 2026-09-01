"use client";

import { useEffect, useRef, useState } from "react";
import { skillStats } from "@/lib/content";

const PIP_MS = 70;
const ROW_MS = 160;

function Meter({
  name,
  level,
  max,
  row,
  booting,
  lit,
}: {
  name: string;
  level: number;
  max: number;
  row: number;
  booting: boolean;
  lit: boolean;
}) {
  return (
    <div
      className="skill-meter"
      role="meter"
      aria-label={name}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={level}
    >
      {Array.from({ length: max }, (_, index) => {
        const filled = lit && index < level;
        const delay = row * ROW_MS + index * PIP_MS;
        return (
          <span
            key={index}
            className={filled ? "is-filled" : undefined}
            style={booting && filled ? { animationDelay: `${delay}ms` } : undefined}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}

function BufferMeter({ name, max, live }: { name: string; max: number; live: boolean }) {
  return (
    <div
      className={`skill-meter skill-buffer${live ? " is-live" : ""}`}
      role="meter"
      aria-label={name}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuetext="en curso"
    >
      {Array.from({ length: max }, (_, index) => (
        <span
          key={index}
          style={live ? { animationDelay: `${index * 0.08}s` } : undefined}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Skills() {
  const sheetRef = useRef<HTMLElement>(null);
  const played = useRef(false);
  const [booting, setBooting] = useState(false);
  const [lit, setLit] = useState(false);
  const [buffering, setBuffering] = useState(false);

  useEffect(() => {
    const sheet = sheetRef.current;
    if (!sheet) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function boot() {
      if (played.current) {
        return;
      }
      played.current = true;
      if (reduced) {
        setLit(true);
        return;
      }
      setBooting(true);
      setLit(true);
      setBuffering(true);
      const lastRow = skillStats.items.length - 1;
      const lastPips = skillStats.items[lastRow].level;
      const doneAt = lastRow * ROW_MS + lastPips * PIP_MS + 180;
      window.setTimeout(() => setBooting(false), doneAt);
    }

    function isOnScreen(node: HTMLElement) {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.72 && rect.bottom > 96;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          boot();
        }
      },
      { threshold: [0, 0.15, 0.3], rootMargin: "-8% 0px -20% 0px" },
    );

    observer.observe(sheet);
    if (isOnScreen(sheet)) {
      boot();
    }

    function onScroll() {
      if (isOnScreen(sheet)) {
        boot();
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sheetRef}
      id="skills"
      aria-labelledby="skills-heading"
      className="relative mx-auto w-full max-w-[92rem] scroll-mt-28 px-[4.861vw] pt-28 pb-[22vh] text-ink"
    >
      <div className={`skill-sheet${booting ? " is-booting" : ""}`}>
        <h2
          id="skills-heading"
          className="font-body text-[40px] font-extralight italic leading-[1.2] tracking-[0.05em] [-webkit-text-stroke:1px_#0221e7]"
        >
          {skillStats.kicker}
        </h2>
        <ul className="skill-list">
          {skillStats.items.map((item, row) => (
            <li key={item.id} className="skill-row">
              <p className="font-display text-[22px] font-medium leading-none tracking-[0.04em] md:text-[24px]">
                {item.name}
              </p>
              <Meter
                name={item.name}
                level={item.level}
                max={skillStats.max}
                row={row}
                booting={booting}
                lit={lit}
              />
            </li>
          ))}
          <li className="skill-row">
            <p className="font-display text-[22px] font-medium leading-none tracking-[0.04em] md:text-[24px]">
              {skillStats.rest.name}
            </p>
            <BufferMeter
              name={skillStats.rest.name}
              max={skillStats.max}
              live={buffering}
            />
          </li>
        </ul>
      </div>
      <p className="skill-sign">
        {skillStats.coda.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    </section>
  );
}
