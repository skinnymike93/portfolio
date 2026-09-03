"use client";

export function ScrollCue({
  atTop,
  onActivate,
}: {
  atTop: boolean;
  onActivate: () => void;
}) {
  const href = atTop ? "#historia-mas" : "#historia";
  const label = atTop ? "sigue" : "arriba";

  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onActivate();
      }}
      className={`scroll-cue fixed bottom-20 left-[4.861vw] z-30 flex items-end gap-3 text-ink no-underline transition-opacity duration-500 ${
        atTop ? "opacity-100" : "opacity-70"
      }`}
      aria-label={atTop ? "Sigue a mi historia" : "Volver arriba"}
    >
      <span
        className={`scroll-cue-track ${atTop ? "" : "scroll-cue-track-up"}`}
        aria-hidden="true"
      >
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
        {label}
        {atTop ? <span className="scroll-cue-caret" /> : null}
      </span>
    </a>
  );
}
