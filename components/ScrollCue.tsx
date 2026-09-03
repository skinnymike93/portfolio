"use client";

import { useEffect, useState } from "react";

function cueOpacityForProyectos(proyectosTop: number, viewportHeight: number) {
  const fadeStart = viewportHeight * 0.88;
  const fadeEnd = viewportHeight * 0.58;
  if (proyectosTop >= fadeStart) {
    return 1;
  }
  if (proyectosTop <= fadeEnd) {
    return 0;
  }
  return (proyectosTop - fadeEnd) / (fadeStart - fadeEnd);
}

export function ScrollCue({ onActivate }: { onActivate: () => void }) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function update() {
      const proyectos = document.getElementById("proyectos");
      if (!proyectos) {
        return;
      }
      const vh = window.visualViewport?.height ?? window.innerHeight;
      setOpacity(cueOpacityForProyectos(proyectos.getBoundingClientRect().top, vh));
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.visualViewport?.addEventListener("resize", update);
    window.visualViewport?.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.visualViewport?.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <a
      href="#historia-mas"
      onClick={(event) => {
        event.preventDefault();
        onActivate();
      }}
      className="scroll-cue fixed bottom-20 left-[4.861vw] z-30 flex items-end gap-3 text-ink no-underline transition-[opacity,filter] duration-500"
      style={{
        opacity,
        filter: opacity < 1 ? `blur(${(1 - opacity) * 3}px)` : undefined,
        pointerEvents: opacity < 0.04 ? "none" : undefined,
      }}
      aria-hidden={opacity < 0.04}
      tabIndex={opacity < 0.04 ? -1 : undefined}
      aria-label="Sigue bajando"
    >
      <span className="scroll-cue-track" aria-hidden="true">
        <svg
          className="scroll-cue-mark"
          viewBox="0 0 12 46"
          width="12"
          height="46"
          fill="none"
        >
          <path
            className="scroll-cue-rail"
            d="M6 1V44.6"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            className="scroll-cue-trace"
            d="M6 1V44.6"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            className="scroll-cue-tip"
            d="M1.9 40.4 6 44.6 10.1 40.4"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex items-baseline gap-[0.35em] font-body text-[13px] font-extralight italic leading-none tracking-[0.08em]">
        sigue
        <span className="scroll-cue-caret" />
      </span>
    </a>
  );
}
