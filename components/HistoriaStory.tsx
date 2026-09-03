"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { BoardingPass } from "@/components/BoardingPass";
import { aboutStory, site } from "@/lib/content";

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
  const [breeze, setBreeze] = useState<"off" | "wait" | "play">("off");
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setBreeze("wait");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBreeze("play");
          observer.disconnect();
        }
      },
      {
        // En pantallas cortas la sección no llega a ocupar el 20% pedido y el
        // observer no dispararía nunca, dejando el botón invisible e inerte.
        threshold: Math.min(
          0.2,
          (window.innerHeight * 0.7) / Math.max(root.offsetHeight, 1),
        ),
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

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
      ref={rootRef}
      id="historia-mas"
      aria-labelledby="historia-heading"
      className={`historia-spread relative mx-auto w-full max-w-[92rem] scroll-mt-28 px-[4.861vw] pt-[18vh] pb-[22vh] text-ink${
        breeze === "wait" ? " is-breeze-ready" : breeze === "play" ? " is-breezing" : ""
      }`}
    >
      <header className="historia-breeze historia-breeze-a relative mb-16 lg:mb-24">
        <h2
          id="historia-heading"
          className="font-body text-[40px] font-extralight italic leading-[1.2] tracking-[0.05em] [-webkit-text-stroke:1px_#0221e7]"
        >
          {story.kicker}
        </h2>
      </header>

      <div className="relative grid items-start gap-x-10 gap-y-16 lg:grid-cols-12">
        <div className="historia-breeze historia-breeze-b lg:col-span-2">
          <figure className="historia-pro-mark">
            <img
              src="/images/historia-botas.png"
              alt="Botas de fútbol del Pro, colgadas de un gancho"
            />
          </figure>
        </div>

        <p className="historia-breeze historia-breeze-c historia-lede font-body text-[1.35rem] font-medium leading-[1.42] lg:col-span-7 lg:text-[1.5rem]">
          {story.opening.body}
        </p>
      </div>

      <button
        type="button"
        className="historia-breeze historia-breeze-d historia-crease mt-16 lg:mt-20"
        aria-expanded={open}
        aria-controls="historia-tintero"
        aria-label={open ? "Cerrar el resto de la historia" : "Seguir leyendo la historia"}
        onClick={toggle}
      >
        <span className="historia-crease-face">
          <span className="historia-crease-copy">
            {open ? "cerrar" : "seguir leyendo"}
          </span>
          <svg
            className="historia-crease-caret"
            viewBox="0 0 12 8"
            width="11"
            height="7"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1.6 L6 6.2 L11 1.6"
              stroke="currentColor"
              strokeWidth="1.15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="historia-crease-rule" aria-hidden="true" />
      </button>

      <div
        id="historia-tintero"
        className={`historia-fold ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div inert={open ? undefined : true}>
          <div className="relative grid items-start gap-x-10 gap-y-16 pt-16 lg:grid-cols-12 lg:pt-20">
            <div className="flex flex-col gap-5 lg:col-span-5 lg:col-start-8">
              <BoardingPass
                fromCode={story.liverpool.fromCode}
                fromCity={story.liverpool.fromCity}
                toCode={story.liverpool.toCode}
                toCity={story.liverpool.toCity}
                passenger={story.liverpool.passenger}
                flight={story.liverpool.flight}
                valid={story.liverpool.valid}
              />
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
