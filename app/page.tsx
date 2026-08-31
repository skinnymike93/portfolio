import { Nav } from "@/components/Nav";
import { cv, heroIntro, profileFacts, site } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full items-center justify-center overflow-hidden bg-background">
      <div className="@container relative aspect-[1440/820] w-[min(100vw,calc(100dvh*1440/820))]">
        <header className="absolute inset-x-0 top-[5.122%] flex h-[3.472cqw] items-center px-[4.861%]">
          <div className="flex flex-1 items-center justify-start self-stretch">
            <a href="/" className="relative size-[3.472cqw] overflow-clip">
              <img
                src="/images/nav-logo.png"
                alt={site.name}
                className="absolute inset-0 size-full max-w-none object-cover"
              />
            </a>
          </div>
          <Nav className="flex items-center gap-[5.208cqw] font-body text-[1.667cqw] leading-none whitespace-nowrap text-ink" />
          <div className="flex flex-1 items-center justify-end self-stretch">
            <a
              href={cv.href}
              className="flex h-full items-center justify-center gap-[0.694cqw] rounded-[0.347cqw] border-[1.5px] border-ink/25 px-[0.694cqw] font-body text-[1.667cqw] font-normal leading-none whitespace-nowrap text-ink"
            >
              <span className="relative size-[1.667cqw] shrink-0 overflow-clip">
                <img
                  src="/images/download-cv.svg"
                  alt=""
                  className="absolute inset-0 size-full max-w-none"
                />
              </span>
              {cv.label}
            </a>
          </div>
        </header>
        <div className="pointer-events-none absolute top-[17.927%] left-[17.476%] flex h-[72.892%] w-[57.479%] items-center justify-center">
          <div className="relative h-[86.664%] w-[93.875%] rotate-[-6.11deg]">
            <img
              src="/images/hero-portrait.png"
              alt="Illustrated portrait of Miguel Delgado seated in a lounge chair"
              className="absolute inset-0 size-full max-w-none object-cover"
            />
          </div>
        </div>
        <ul className="absolute top-[65.366%] left-[74.976%] flex flex-col gap-[1.111cqw] font-body text-[1.667cqw] font-normal leading-none whitespace-nowrap text-ink">
          {profileFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <h1 className="absolute top-[25.366%] left-[17.014%] font-display leading-[1.2] tracking-[0.05em] whitespace-nowrap text-ink">
          <span className="block text-[1.667cqw] font-extralight tracking-normal">
            {heroIntro.kicker}
          </span>
          <span className="block text-[4.444cqw] font-medium">
            {heroIntro.firstName}
          </span>
          <span className="block text-[2.778cqw] font-extralight">
            {heroIntro.lastName}
          </span>
        </h1>
      </div>
    </main>
  );
}
