import { Nav } from "@/components/Nav";
import { cv, heroIntro, profileFacts } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full items-center justify-center overflow-hidden bg-background">
      <div className="@container relative aspect-[1440/820] w-[min(100vw,calc(100dvh*1440/820))]">
        <Nav className="absolute top-[6.098%] left-[4.861%] flex items-start gap-[2.431cqw] font-body text-[1.667cqw] leading-none tracking-[0.025em] whitespace-nowrap text-ink" />
        <a
          href={cv.href}
          className="absolute top-[5.122%] left-[82.847%] flex h-[3.472cqw] items-center justify-center gap-[0.347cqw] rounded-[0.556cqw] border-[0.104cqw] border-ink/25 px-[0.694cqw] font-body text-[1.667cqw] font-normal leading-none whitespace-nowrap text-ink"
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
        <div className="pointer-events-none absolute top-[17.927%] left-[17.476%] flex h-[72.892%] w-[57.479%] items-center justify-center">
          <div className="relative h-[86.664%] w-[93.875%] rotate-[-6.11deg]">
            <img
              src="/images/hero-portrait.png"
              alt="Illustrated portrait of Miguel Delgado seated in a lounge chair"
              className="absolute inset-0 size-full max-w-none object-cover"
            />
          </div>
        </div>
        <ul className="absolute top-[65.366%] left-[74.976%] flex flex-col gap-[1.111cqw] font-body text-[1.667cqw] font-medium leading-none whitespace-nowrap text-ink">
          {profileFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <h1 className="absolute top-[25.366%] left-[17.847%] text-[0] leading-[0] whitespace-nowrap text-ink [-webkit-text-stroke:0.069cqw_#0221e7]">
          <span className="block font-body text-[2.778cqw] font-extralight italic leading-[1.2] tracking-[0.05em]">
            {heroIntro.kicker}
          </span>
          <span className="block font-display text-[4.444cqw] font-medium leading-[1.2] tracking-[0.05em]">
            {heroIntro.firstName}
          </span>
          <span className="-mt-[0.5cqw] block font-display text-[2.778cqw] font-extralight leading-[1.2] tracking-[0.05em]">
            {heroIntro.lastName}
          </span>
        </h1>
      </div>
    </main>
  );
}
