"use client";

import { useState } from "react";
import { aboutStory, site } from "@/lib/content";

function BrushLine() {
  return (
    <svg
      viewBox="0 0 220 36"
      preserveAspectRatio="none"
      aria-hidden="true"
      overflow="visible"
      className="mt-3 block h-[18px] w-[min(100%,18rem)] overflow-visible text-ink"
    >
      <g fill="currentColor">
        <path d="M3.2 19.4C10 17.2 26 11.4 48 13.1C74 15 96 9.2 124 12.6C148 15.4 170 10.4 196 8.2C204 7.4 212 6.6 216.5 8.1C218.4 8.8 217.6 11.2 214 13.4C206 18.2 190 21.6 168 22.8C142 24.2 118 27.4 92 23.2C68 19.4 46 25.2 26 22.6C14 21 6.2 21.4 3.2 19.4Z" />
      </g>
    </svg>
  );
}

function InkRule({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 8"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 4.2C38 2.6 72 5.4 110 3.8C148 2.2 186 5.1 228 3.4C258 2.2 290 4.6 319 3.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HistoriaStory() {
  const story = aboutStory;
  const [open, setOpen] = useState(false);

  function toggle() {
    const next = !open;
    setOpen(next);
    if (!next) {
      document.getElementById("historia-mas")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <div
      id="historia-mas"
      aria-labelledby="historia-heading"
      className="historia-spread relative mx-auto w-full max-w-[92rem] scroll-mt-28 px-[4.861vw] pt-[18vh] pb-[22vh] text-ink"
    >
      <header className="relative mb-16 lg:mb-24">
        <h2
          id="historia-heading"
          className="font-body text-[40px] font-extralight italic leading-[1.2] tracking-[0.05em] [-webkit-text-stroke:1px_#0221e7]"
        >
          {story.kicker}
        </h2>
      </header>

      <div className="relative grid items-start gap-x-10 gap-y-16 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <p className="font-display text-[clamp(4.5rem,8vw,7.5rem)] font-medium leading-[0.78] tracking-[-0.04em] -rotate-3">
            {story.opening.year}
          </p>
          <p className="mt-3 font-body text-sm font-medium italic tracking-[0.22em]">
            {story.opening.place}
          </p>
        </div>

        <p className="historia-lede font-body text-[1.35rem] font-medium leading-[1.42] lg:col-span-6 lg:text-[1.5rem]">
          {story.opening.body}
        </p>

        <blockquote className="lg:col-span-4 lg:self-start lg:mt-4">
          <p className="max-w-[16rem] font-body text-[2.15rem] font-extralight italic leading-[1.12] tracking-[0.01em] -rotate-2 lg:text-[2.55rem]">
            {story.opening.pull}
          </p>
          <BrushLine />
        </blockquote>
      </div>

      <button
        type="button"
        className="historia-crease mt-16 lg:mt-20"
        aria-expanded={open}
        aria-controls="historia-tintero"
        onClick={toggle}
      >
        <span className="historia-crease-line" aria-hidden="true" />
        <span className="flex items-baseline gap-[0.35em] font-body text-[13px] font-extralight italic leading-none tracking-[0.08em] whitespace-nowrap">
          {open ? "cerrar el tintero" : "hay más en el tintero"}
          {open ? null : <span className="scroll-cue-caret" />}
        </span>
        <span className="historia-crease-line" aria-hidden="true" />
      </button>

      <div
        id="historia-tintero"
        className={`historia-fold ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div inert={open ? undefined : true}>
          <div className="relative grid items-start gap-x-10 gap-y-16 pt-16 lg:grid-cols-12 lg:pt-20">
            <div className="flex flex-col gap-5 lg:col-span-5 lg:col-start-8">
              <p className="historia-ticket">
                <span>{story.liverpool.ticket}</span>
                <span aria-hidden="true">·</span>
                <span>{story.liverpool.meta}</span>
              </p>
              <p className="max-w-[34rem] font-body text-xl font-medium leading-[1.4]">
                {story.liverpool.body}
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-3 lg:mt-8">
              <p className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-none tracking-[0.04em]">
                <span>{story.journalism.from}</span>
                <span className="font-body text-base font-extralight italic tracking-[0.18em]">
                  →
                </span>
                <span className="font-extralight [-webkit-text-stroke:1px_#0221e7] [paint-order:stroke_fill]">
                  {story.journalism.to}
                </span>
              </p>
              <p className="max-w-[42rem] font-body text-[1.35rem] font-medium leading-[1.42]">
                {story.journalism.body}
              </p>
              <p className="mt-6 font-body text-[2rem] font-extralight italic leading-[1.15] tracking-[0.03em] lg:text-[2.4rem]">
                {story.journalism.land}
              </p>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:mt-4">
              <p className="font-display text-[clamp(4.5rem,8vw,7.5rem)] font-medium leading-[0.78] tracking-[-0.04em] rotate-2">
                {story.malaga.year}
              </p>
              <p className="mt-3 font-body text-sm font-medium italic tracking-[0.22em]">
                {story.malaga.place}
              </p>
            </div>

            <p className="font-body text-[1.35rem] font-medium leading-[1.42] lg:col-span-6 lg:mt-8 lg:text-[1.5rem]">
              {story.malaga.body}
            </p>

            <div className="lg:col-span-5 lg:col-start-8 lg:mt-4">
              <p className="font-display text-[clamp(2.4rem,4.6vw,4rem)] font-medium leading-[0.92] tracking-[0.02em]">
                {story.coda.title}
              </p>
              <p className="mt-5 max-w-[32rem] font-body text-xl font-medium italic leading-[1.4]">
                {story.coda.body}
              </p>
            </div>
          </div>

          <footer className="relative mt-24 flex flex-col items-end gap-4 lg:mt-32">
            <InkRule className="w-[min(100%,22rem)] text-ink" />
            <a
              href={`mailto:${site.email}`}
              className="font-body text-xl font-extralight italic tracking-[0.02em] underline decoration-ink/30 underline-offset-[0.28em] transition-colors hover:decoration-ink"
            >
              {story.signOff}
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
