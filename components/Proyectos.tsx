"use client";

import { useLayoutEffect, useRef } from "react";
import { projectSpread } from "@/lib/content";
import {
  attachBreezeScrollFallback,
  breezeObserverInit,
  playObserverInit,
  revealBreeze,
} from "@/lib/breeze-reveal";

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

function ProjectPhone({
  name,
  poster,
  video,
}: {
  name: string;
  poster: string;
  video: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function skip(seconds: number) {
    const node = videoRef.current;
    if (!node) {
      return;
    }
    const duration = Number.isFinite(node.duration) ? node.duration : 0;
    const next = node.currentTime + seconds;
    if (duration > 0) {
      node.currentTime = ((next % duration) + duration) % duration;
      return;
    }
    node.currentTime = Math.max(0, next);
  }

  return (
    <figure className="tarot-phone">
      <div className="tarot-phone-frame">
        <video
          ref={videoRef}
          poster={poster}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`Recorrido de la interfaz de ${name}`}
        />
        <div className="tarot-phone-skip">
          <button
            type="button"
            onClick={() => skip(-10)}
            aria-label={`Retroceder 10 segundos en ${name}`}
          >
            −10s
          </button>
          <button
            type="button"
            onClick={() => skip(10)}
            aria-label={`Avanzar 10 segundos en ${name}`}
          >
            +10s
          </button>
        </div>
      </div>
    </figure>
  );
}

export function Proyectos() {
  const rootRef = useRef<HTMLElement>(null);
  const spreadRef = useRef<HTMLDivElement>(null);
  const legendRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const spread = spreadRef.current;
    const legend = legendRef.current;
    if (!root || !spread) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const breezeNodes = [...root.querySelectorAll(".tarot-breeze")];
    let spreadRevealed = reduced;
    let playingLatched = reduced;

    if (!reduced) {
      for (const node of breezeNodes) {
        node.classList.add("is-breeze-ready");
      }
    }

    function syncPlaying(intersecting: boolean) {
      if (spreadRevealed) {
        if (intersecting) {
          playingLatched = true;
        }
        spread!.classList.toggle(
          "is-playing",
          playingLatched || intersecting,
        );
      }
    }

    function scheduleSpreadPlay(staggerIndex: number) {
      const wait = 700 + staggerIndex * 90;
      window.setTimeout(() => {
        spreadRevealed = true;
        playingLatched = true;
        spread!.classList.add("is-playing");
      }, wait);
    }

    function revealNode(el: Element, staggerIndex: number) {
      revealBreeze(el, staggerIndex);
      if (el === spread) {
        scheduleSpreadPlay(staggerIndex);
      }
    }

    const breezeObserver =
      !reduced && breezeNodes.length > 0
        ? new IntersectionObserver(
            (entries) => {
              const entering = entries
                .filter((entry) => entry.isIntersecting)
                .sort(
                  (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
                );

              entering.forEach((entry, index) => {
                revealNode(entry.target, index);
                breezeObserver?.unobserve(entry.target);
              });
            },
            breezeObserverInit(),
          )
        : null;

    if (breezeObserver) {
      for (const node of breezeNodes) {
        breezeObserver.observe(node);
      }
    }

    const detachFallback =
      !reduced && breezeNodes.length > 0
        ? attachBreezeScrollFallback(breezeNodes, (el, index) => {
            revealNode(el, index);
            breezeObserver?.unobserve(el);
          })
        : () => {};

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        syncPlaying(entry.isIntersecting);
      },
      playObserverInit(),
    );

    playObserver.observe(spread);

    const videos = legend
      ? [...legend.querySelectorAll<HTMLVideoElement>(".tarot-phone video")]
      : [];
    const videoObserver =
      !reduced && videos.length > 0
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                const video = entry.target as HTMLVideoElement;
                if (entry.isIntersecting) {
                  void video.play();
                } else {
                  video.pause();
                }
              }
            },
            playObserverInit(),
          )
        : null;

    if (videoObserver) {
      for (const video of videos) {
        videoObserver.observe(video);
      }
    }

    return () => {
      breezeObserver?.disconnect();
      detachFallback();
      playObserver.disconnect();
      videoObserver?.disconnect();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="proyectos"
      aria-labelledby="proyectos-heading"
      className="relative mx-auto w-full max-w-[92rem] scroll-mt-28 px-[4.861vw] pt-28 pb-[22vh] text-ink"
    >
      <header className="relative mb-16 lg:mb-20">
        <h2
          id="proyectos-heading"
          className="tarot-breeze font-body text-[40px] font-extralight italic leading-[1.2] tracking-[0.05em] [-webkit-text-stroke:1px_#0221e7]"
        >
          {projectSpread.kicker}
        </h2>
        <p className="tarot-breeze mt-4 max-w-[22rem] font-body text-xl font-extralight italic leading-[1.3] tracking-[0.02em]">
          {projectSpread.lede}
        </p>
      </header>

      <div ref={spreadRef} className="tarot-spread tarot-breeze">
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

      <ul ref={legendRef} className="tarot-legend">
        {projectSpread.items.map((item) => (
          <li key={item.suit} className={`tarot-entry tarot-entry-${item.suit} tarot-breeze`}>
            <ProjectPhone name={item.name} poster={item.poster} video={item.video} />
            <div className="tarot-copy">
              <h3>{item.name}</h3>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
