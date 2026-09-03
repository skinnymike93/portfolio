"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Nav, NavMark, type NavHref } from "@/components/Nav";
import { ScrollCue } from "@/components/ScrollCue";
import { HistoriaStory } from "@/components/HistoriaStory";
import { Proyectos } from "@/components/Proyectos";
import { Experiencia } from "@/components/Experiencia";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import {
  cv,
  github,
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
    const deepLink =
      hash !== "" && hash !== "#historia" && hash !== "#historia-mas";
    if (reduced || deepLink) {
      setIntro(false);
      return;
    }
    // Chrome restaura el scroll al recargar, y eso cancelaba la intro.
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    const done = window.setTimeout(() => setIntro(false), 4500);
    return () => window.clearTimeout(done);
  }, []);

  // Nada debe quedar invisible o inerte esperando a que acabe la intro:
  // el primer gesto la corta y revela el sitio entero.
  useEffect(() => {
    if (!intro) {
      return;
    }
    const end = () => setIntro(false);
    const options = { passive: true, once: true } as const;
    const events = ["pointerdown", "touchstart", "wheel", "keydown"] as const;
    for (const event of events) {
      window.addEventListener(event, end, options);
    }
    return () => {
      for (const event of events) {
        window.removeEventListener(event, end);
      }
    };
  }, [intro]);

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
        <div className="hero-stage flex min-h-dvh w-full items-center justify-center">
          <div className="hero-board @container relative aspect-[1440/820] w-[min(100vw,calc(100dvh*1440/820))]">
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

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
      />
    </svg>
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
  const [menuOpen, setMenuOpen] = useState(false);
  const current =
    navItems.find((item) => item.href === activeHref) ?? navItems[0];

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    const { body } = document;
    const scrollY = window.scrollY;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    document.documentElement.classList.add("is-menu-open");
    document.addEventListener("keydown", onKey);
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      document.documentElement.classList.remove("is-menu-open");
      document.removeEventListener("keydown", onKey);
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
    };
  }, [menuOpen]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 767) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function goTo(href: NavHref) {
    setMenuOpen(false);
    onNavigate(href);
  }

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-30 overflow-visible transition-[background-color] duration-300 ${
        atTop && !menuOpen ? "bg-transparent" : "bg-background grain-surface"
      }${menuOpen ? " is-open" : ""}`}
    >
      <div className="site-header-bar flex items-start justify-between gap-10 overflow-visible">
        <Nav
          activeHref={activeHref}
          onNavigate={onNavigate}
          className="site-nav flex items-start gap-12 overflow-visible font-body text-2xl leading-none tracking-[0.025em] whitespace-nowrap text-ink"
        />
        <p className="site-header-now">
          <span className="site-header-current">
            <span className="font-bold italic">{current.label}</span>
            <NavMark />
          </span>
        </p>
        <div className="site-header-actions flex shrink-0 items-center gap-2">
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
          <a
            href={github.href}
            className="hero-github"
            target="_blank"
            rel="noreferrer"
            aria-label={github.label}
          >
            <GitHubMark />
          </a>
          <button
            type="button"
            className="site-burger-btn"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="site-burger" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
      <div
        id="site-menu"
        className="site-menu"
        hidden={!menuOpen}
        aria-hidden={menuOpen ? undefined : true}
        inert={menuOpen ? undefined : true}
      >
        <nav className="site-menu-nav" aria-label="Secciones">
          {navItems.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  goTo(item.href);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <a
          href={github.href}
          className="site-menu-github"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubMark />
          github
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
