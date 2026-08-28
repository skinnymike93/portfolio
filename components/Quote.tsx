export function Quote({
  text,
  name,
  role,
  initial,
  avatar,
}: {
  text: string;
  name: string;
  role: string;
  initial: string;
  avatar: string;
}) {
  return (
    <figure className="mx-auto w-full max-w-prose px-5 pt-2 pb-[72px] md:px-0">
      <blockquote className="font-serif text-[20px] leading-8 text-ink italic">
        “{text}”
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-2.5">
        <span
          className="flex size-7 shrink-0 items-center justify-center rounded-full font-sans text-[11px] font-semibold leading-[14px] text-ink"
          style={{ backgroundColor: avatar }}
        >
          {initial}
        </span>
        <span className="flex flex-col">
          <span className="font-sans text-[13px] font-semibold leading-4 text-ink">
            {name}
          </span>
          <span className="font-sans text-[13px] font-medium leading-4 text-muted">
            {role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
