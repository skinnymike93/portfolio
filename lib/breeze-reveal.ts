const SHORT_VIEWPORT = 720;

export function isShortViewport(): boolean {
  return window.innerHeight < SHORT_VIEWPORT;
}

export function breezeObserverInit(): Pick<
  IntersectionObserverInit,
  "threshold" | "rootMargin"
> {
  if (isShortViewport()) {
    return { threshold: 0, rootMargin: "0px" };
  }

  return {
    threshold: [0, 0.12, 0.22],
    rootMargin: "0px 0px -14% 0px",
  };
}

export function playObserverInit(): Pick<
  IntersectionObserverInit,
  "threshold" | "rootMargin"
> {
  if (isShortViewport()) {
    return { threshold: 0, rootMargin: "0px" };
  }

  return {
    threshold: [0, 0.25, 0.4],
    rootMargin: "0px 0px -14% 0px",
  };
}

export function revealBreeze(el: Element, staggerIndex: number): void {
  if (!el.classList.contains("is-breeze-ready")) {
    return;
  }
  el.classList.remove("is-breeze-ready");
  el.classList.add("is-breezing");
  if (staggerIndex > 0) {
    (el as HTMLElement).style.animationDelay = `${staggerIndex * 0.09}s`;
  }
}

function visibleEnough(node: Element) {
  const rect = node.getBoundingClientRect();
  const vh = window.visualViewport?.height ?? window.innerHeight;
  if (rect.bottom <= 40 || rect.top >= vh - 16) {
    return false;
  }
  const visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
  return visible >= (isShortViewport() ? 32 : 80);
}

export function attachBreezeScrollFallback(
  nodes: Element[],
  onReveal: (el: Element, staggerIndex: number) => void,
): () => void {
  function check() {
    const stuck = nodes.filter((node) => node.classList.contains("is-breeze-ready"));
    stuck.sort(
      (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top,
    );
    stuck.forEach((node, index) => {
      if (visibleEnough(node)) {
        onReveal(node, index);
      }
    });
  }

  const timers = [0, 120, 480, 1200, 2400].map((ms) => window.setTimeout(check, ms));
  window.addEventListener("scroll", check, { passive: true });
  window.addEventListener("resize", check, { passive: true });
  window.visualViewport?.addEventListener("resize", check);
  window.visualViewport?.addEventListener("scroll", check);
  check();

  return () => {
    for (const timer of timers) {
      window.clearTimeout(timer);
    }
    window.removeEventListener("scroll", check);
    window.removeEventListener("resize", check);
    window.visualViewport?.removeEventListener("resize", check);
    window.visualViewport?.removeEventListener("scroll", check);
  };
}
