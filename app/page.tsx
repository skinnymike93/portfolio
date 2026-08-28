export default function Home() {
  return (
    <main className="flex min-h-dvh w-full items-center justify-center overflow-hidden bg-background">
      <div className="@container relative aspect-[1440/820] w-[min(100vw,calc(100dvh*1440/820))]">
        <h1 className="absolute top-[26.341%] left-[23.958%] font-display leading-none text-ink">
          <span className="block text-[4.444cqw] font-medium tracking-[0.02em]">
            MIGUEL
          </span>
          <span className="block text-[2.778cqw] font-light tracking-[0.02em]">
            DELGADO
          </span>
        </h1>
        <div className="pointer-events-none absolute top-[13.554%] left-[30.948%] flex h-[72.892%] w-[57.479%] items-center justify-center">
          <div className="relative h-[86.664%] w-[93.875%] rotate-[-6.11deg]">
            <img
              src="/images/hero-portrait.png"
              alt="Illustrated portrait of Miguel Delgado seated in a lounge chair"
              className="absolute inset-0 size-full max-w-none object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
