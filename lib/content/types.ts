import type { Locale, NavHref } from "@/lib/i18n/config";

export type BoardingPassLabels = {
  kicker: string;
  flight: string;
  valid: string;
  aria: (from: string, to: string, valid: string) => string;
};

export type SiteContent = {
  locale: Locale;
  navItems: readonly { href: NavHref; label: string }[];
  heroIntro: {
    kicker: string;
    firstName: string;
    lastName: string;
  };
  profileFacts: readonly string[];
  cv: {
    label: string;
    downloading: string;
    onTheWay: string;
    href: string;
    fileName: string;
  };
  github: {
    label: string;
    href: string;
  };
  siteClose: {
    thanks: string;
    invite: string;
    name: string;
    artAlt: string;
  };
  skillStats: {
    kicker: string;
    coda: readonly string[];
    max: number;
    items: readonly { id: string; name: string; level: number }[];
    rest: { id: string; name: string };
    inProgress: string;
  };
  projectSpread: {
    kicker: string;
    lede: string;
    items: readonly {
      folio: string;
      name: string;
      stamp: string;
      line: string;
      body: string;
      href: string;
      card: string;
      video: string;
      poster: string;
      suit: string;
    }[];
    videoTourAria: (name: string) => string;
    videoSkipBackAria: (name: string) => string;
    videoSkipForwardAria: (name: string) => string;
  };
  experience: {
    kicker: string;
    from: string;
    to: string;
    items: readonly {
      company: string;
      body: readonly string[];
    }[];
  };
  aboutStory: {
    kicker: string;
    opening: {
      body: string;
    };
    liverpool: {
      fromCode: string;
      fromCity: string;
      toCode: string;
      toCity: string;
      passenger: string;
      flight: string;
      valid: string;
      body: string;
    };
    journalism: {
      from: string;
      to: string;
      body: string;
      land: string;
    };
    malaga: {
      year: string;
      place: string;
      body: string;
    };
    coda: {
      title: string;
      body: string;
    };
    signOff: string;
    signOffEmail: string;
    bootsAlt: string;
    creaseOpen: string;
    creaseClose: string;
    expandOpen: string;
    expandClose: string;
    boardingPass: BoardingPassLabels;
  };
  ui: {
    scrollCue: string;
    scrollCueAria: string;
    menuOpen: string;
    menuClose: string;
    menuSections: string;
    navPrimary: string;
    heroPortraitAlt: string;
    localeEs: string;
    localeEn: string;
  };
};
