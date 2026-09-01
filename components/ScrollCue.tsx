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
        {atTop ? (
          <>
            <span className="scroll-cue-stem" />
            <span className="scroll-cue-drop" />
            <svg
              className="scroll-cue-head"
              viewBox="0 0 12 8"
              width="12"
              height="8"
              fill="none"
            >
              <path
                d="M1 1.5 L6 6.5 L11 1.5"
                stroke="currentColor"
                strokeWidth="1.15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        ) : (
          <svg
            className="scroll-cue-head"
            viewBox="0 0 12 8"
            width="12"
            height="8"
            fill="none"
          >
            <path
              d="M1 6.5 L6 1.5 L11 6.5"
              stroke="currentColor"
              strokeWidth="1.15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="flex items-baseline gap-[0.35em] font-body text-[13px] font-extralight italic leading-none tracking-[0.08em]">
        {label}
        {atTop ? <span className="scroll-cue-caret" /> : null}
      </span>
    </a>
  );
}
