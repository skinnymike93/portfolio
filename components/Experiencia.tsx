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
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-heading"
      className="relative mx-auto w-full max-w-[92rem] scroll-mt-28 px-[4.861vw] pt-28 pb-[18vh] text-ink"
    >
      <div className="cv-axis">
        <h2
          id="experiencia-heading"
          className="font-body text-[40px] font-extralight italic leading-[1.2] tracking-[0.05em] [-webkit-text-stroke:1px_#0221e7]"
        >
          {experience.kicker}
        </h2>
        <p className="cv-year cv-year-start">
          <time dateTime={experience.from}>{experience.from}</time>
        </p>
        <div className="cv-spine">
          <span className="cv-arrow">
            <ArrowDown />
          </span>
          <ol className="cv-list">
            {experience.items.map((item) => (
              <li key={item.company} className="cv-row">
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
          <time dateTime={experience.to}>{experience.to}</time>
        </p>
      </div>
    </section>
  );
}
