import { navItems } from "@/lib/content";

export function Nav({
  className,
  activeHref = "#historia",
}: {
  className?: string;
  activeHref?: string;
}) {
  return (
    <nav className={className} aria-label="Primary">
      {navItems.map((item) => {
        const isActive = item.href === activeHref;
        return (
          <a
            key={item.href}
            href={item.href}
            className={
              isActive
                ? "flex shrink-0 flex-col items-center gap-[0.694cqw]"
                : "relative shrink-0"
            }
            aria-current={isActive ? "page" : undefined}
          >
            <span
              className={
                isActive ? "font-bold italic" : "font-medium not-italic"
              }
            >
              {item.label}
            </span>
            {isActive ? (
              <img
                src="/images/nav-underline.svg"
                alt=""
                className="h-[0.174cqw] w-[8.264cqw] max-w-none"
              />
            ) : null}
          </a>
        );
      })}
    </nav>
  );
}
