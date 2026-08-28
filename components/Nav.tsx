import { site } from "@/lib/content";

export function Nav() {
  return (
    <header className="flex w-full items-center justify-end px-5 py-5 md:px-14 md:py-6">
      <a
        href="#work"
        className="shrink-0 rounded-lg bg-index px-3.5 py-2 font-sans text-[13px] font-medium leading-4 text-body transition-colors hover:bg-line"
      >
        {site.indexLabel}
      </a>
    </header>
  );
}
