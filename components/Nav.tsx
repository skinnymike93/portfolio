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
            className="relative shrink-0"
            aria-current={isActive ? "page" : undefined}
          >
            <span className={isActive ? "font-bold" : "font-medium"}>
              {item.label}
            </span>
            {isActive ? (
              <img
                src="/images/nav-underline.svg"
                alt=""
                className="absolute top-full left-1/2 mt-[0.694cqw] h-[0.174cqw] w-[8.264cqw] max-w-none -translate-x-1/2"
              />
            ) : null}
          </a>
        );
      })}
    </nav>
  );
}
