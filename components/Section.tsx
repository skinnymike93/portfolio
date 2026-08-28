import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-prose scroll-mt-8 px-5 md:px-0 ${className}`}
    >
      <div className="h-px w-full bg-line" />
      <h2 className="pt-10 pb-6 font-sans text-lg font-semibold leading-6 text-ink">
        {title}
      </h2>
      {children}
    </section>
  );
}
