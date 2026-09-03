"use client";

import { useLayoutEffect, useRef, useState } from "react";
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
      aria-valuetext="en curso"
      aria-valuemin={0}
      aria-valuemax={max}
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

function viewportHeight() {
  return window.visualViewport?.height ?? window.innerHeight;
}

function isListVisible(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  const vh = viewportHeight();
  const visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
  return visible >= 48 && rect.bottom > 40 && rect.top < vh;
}

export function Skills() {
  const listRef = useRef<HTMLUListElement>(null);
  const [booting, setBooting] = useState(false);
  const [lit, setLit] = useState(false);
  const [buffering, setBuffering] = useState(false);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animated = false;

    function reveal() {
      setLit(true);
      if (reduced || animated) {
        return;
      }
      animated = true;
      setBooting(true);
      setBuffering(true);
      const lastRow = skillStats.items.length - 1;
      const lastPips = skillStats.items[lastRow].level;
      const doneAt = lastRow * ROW_MS + lastPips * PIP_MS + 180;
      window.setTimeout(() => setBooting(false), doneAt);
    }

    const target = list;

    function check() {
      if (isListVisible(target)) {
        reveal();
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          reveal();
        }
      },
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(list);
    check();

    const timers = [0, 120, 480, 1200, 2400].map((ms) =>
      window.setTimeout(check, ms),
    );
    const onScroll = () => check();
    const onViewport = () => check();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.visualViewport?.addEventListener("resize", onViewport);
    window.visualViewport?.addEventListener("scroll", onViewport);

    return () => {
      observer.disconnect();
      for (const timer of timers) {
        window.clearTimeout(timer);
      }
      window.removeEventListener("scroll", onScroll);
      window.visualViewport?.removeEventListener("resize", onViewport);
      window.visualViewport?.removeEventListener("scroll", onViewport);
    };
  }, []);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative mx-auto w-full max-w-[92rem] scroll-mt-28 px-[4.861vw] pt-28 pb-[22vh] text-ink"
    >
      <div className={`skill-sheet${booting ? " is-booting" : ""}${lit ? " is-lit" : ""}`}>
        <h2
          id="skills-heading"
          className="font-body text-[40px] font-extralight italic leading-[1.2] tracking-[0.05em] [-webkit-text-stroke:1px_#0221e7]"
        >
          {skillStats.kicker}
        </h2>
        <ul ref={listRef} className="skill-list">
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
