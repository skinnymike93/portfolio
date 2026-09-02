"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Nav, type NavHref } from "@/components/Nav";
import { ScrollCue } from "@/components/ScrollCue";
import { HistoriaStory } from "@/components/HistoriaStory";
import { Proyectos } from "@/components/Proyectos";
import { Experiencia } from "@/components/Experiencia";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import {
  cv,
  heroIntro,
  navItems,
  profileFacts,
} from "@/lib/content";

export function Home() {
  const [activeHref, setActiveHref] = useState<NavHref>("#historia");
  const [atTop, setAtTop] = useState(true);
  const [intro, setIntro] = useState(true);
  const navigating = useRef(false);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hash = window.location.hash;
    const skip =
      reduced ||
      window.scrollY > 24 ||
      (hash !== "" && hash !== "#historia" && hash !== "#historia-mas");
    if (skip) {
      setIntro(false);
      return;
    }
    const done = window.setTimeout(() => setIntro(false), 4500);
    return () => window.clearTimeout(done);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        href: item.href,
        node: document.querySelector(item.href),
      }))
      .filter(
        (item): item is { href: NavHref; node: HTMLElement } =>
          item.node instanceof HTMLElement,
      );

    let frame = 0;

    function update() {
      frame = 0;
      if (navigating.current) {
        return;
      }
      const marker = window.innerHeight * 0.32;
      let current: NavHref = sections[0]?.href ?? "#historia";
      for (const section of sections) {
        if (section.node.getBoundingClientRect().top <= marker) {
          current = section.href;
        }
      }
      setActiveHref(current);
    }

    function onScroll() {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 48);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function navigate(href: NavHref) {
    navigating.current = true;
    setActiveHref(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);

    const release = () => {
      navigating.current = false;
    };
    window.addEventListener("scrollend", release, { once: true });
    window.setTimeout(release, 900);
  }

  return (
    <main className={`bg-background${intro ? " hero-intro" : ""}`}>
      <SiteHeader
        activeHref={activeHref}
        atTop={atTop}
        onNavigate={navigate}
      />
      <section id="historia">
        <div className="flex min-h-dvh w-full items-center justify-center">
          <div className="@container relative aspect-[1440/820] w-[min(100vw,calc(100dvh*1440/820))]">
            <Historia />
          </div>
        </div>
        <HistoriaStory />
      </section>
      <Proyectos />
      <Experiencia />
      <Skills />
      <Footer />
      <ScrollCue
        atTop={atTop}
        onActivate={() => {
          if (atTop) {
            document.getElementById("historia-mas")?.scrollIntoView({
              behavior: "smooth",
            });
            window.history.pushState(null, "", "#historia");
            setActiveHref("#historia");
            return;
          }
          navigate("#historia");
        }}
      />
    </main>
  );
}

function SiteHeader({
  activeHref,
  atTop,
  onNavigate,
}: {
  activeHref: NavHref;
  atTop: boolean;
  onNavigate: (href: NavHref) => void;
}) {
  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-30 overflow-visible transition-[background-color] duration-300 ${
        atTop ? "bg-transparent" : "bg-background"
      }`}
    >
      <div className="flex items-start justify-between gap-10 overflow-visible px-[4.861vw] pt-10 pb-6">
        <Nav
          activeHref={activeHref}
          onNavigate={onNavigate}
          className="flex items-start gap-12 overflow-visible font-body text-2xl leading-none tracking-[0.025em] whitespace-nowrap text-ink"
        />
        <a
          href={cv.href}
          className="hero-cv flex h-[2.55rem] shrink-0 items-center justify-center gap-[0.32rem] rounded-[0.425rem] border-[1.275px] border-ink/25 px-[0.53rem] font-body text-[1.275rem] font-normal leading-none whitespace-nowrap text-ink"
        >
          <span className="relative size-[1em] shrink-0 overflow-clip">
            <img
              src="/images/download-cv.svg?v=2"
              alt=""
              className="absolute inset-0 size-full max-w-none"
            />
          </span>
          {cv.label}
        </a>
      </div>
    </header>
  );
}

function Historia() {
  return (
    <>
      <div className="hero-art pointer-events-none absolute top-[17.927%] left-[17.476%] flex h-[72.892%] w-[57.479%] items-center justify-center">
        <div className="relative h-[86.664%] w-[93.875%] rotate-[-6.11deg]">
          <img
            src="/images/hero-portrait.png"
            alt="Illustrated portrait of Miguel Delgado seated in a lounge chair"
            className="absolute inset-0 size-full max-w-none object-cover"
          />
        </div>
      </div>
      <ul className="hero-facts absolute top-[65.366%] left-[74.976%] flex flex-col gap-[1.111cqw] font-body text-[1.667cqw] font-medium leading-none whitespace-nowrap text-ink">
        {profileFacts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      <h1 className="hero-title absolute top-[25.366%] left-[17.847%] overflow-visible text-[0] leading-[0] whitespace-nowrap text-ink">
        <span className="block font-body text-[2.778cqw] font-extralight italic leading-[1.2] tracking-[0.05em] [-webkit-text-stroke:0.069cqw_#0221e7]">
          {heroIntro.kicker}
        </span>
        <span className="block font-display text-[4.444cqw] font-medium leading-[1.2] tracking-[0.05em]">
          {heroIntro.firstName}
        </span>
        <span className="block font-display text-[2.778cqw] font-extralight leading-[1.2] tracking-[0.05em]">
          {heroIntro.lastName}
        </span>
      </h1>
    </>
  );
}
