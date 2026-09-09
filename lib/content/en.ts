import type { SiteContent } from "@/lib/content/types";

export const contentEn: SiteContent = {
  locale: "en",
  navItems: [
    { href: "#historia", label: "my story" },
    { href: "#proyectos", label: "projects" },
    { href: "#experiencia", label: "experience" },
    { href: "#skills", label: "skills" },
  ],
  heroIntro: {
    kicker: "starring:",
    firstName: "Miguel",
    lastName: "Delgado",
  },
  profileFacts: [
    "product design engineer",
    "andalusia, spain",
    "33 years old",
  ],
  cv: {
    label: "download cv",
    downloading: "downloading…",
    onTheWay: "on its way",
    href: "/files/miguel-delgado-cv.pdf",
    fileName: "Miguel-Delgado-CV.pdf",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/skinnymike93",
  },
  siteClose: {
    thanks: "Thanks for stopping by.",
    invite: "Let's head for the mountains.",
    name: "Miguel Delgado",
    artAlt: "Ink illustration of a trail leading toward a mountain",
  },
  skillStats: {
    kicker: "skills",
    coda: ["product. design. code.", "& repeat."],
    max: 10,
    items: [
      { id: "product-design", name: "product design", level: 8 },
      { id: "design-engineer", name: "design engineer", level: 7 },
      { id: "figma", name: "figma", level: 8 },
      { id: "paper", name: "paper", level: 6 },
      { id: "cursor", name: "cursor", level: 8 },
      { id: "claude-code", name: "claude code", level: 7 },
    ],
    rest: { id: "rest", name: "what comes next" },
    inProgress: "in progress",
  },
  projectSpread: {
    kicker: "projects",
    lede: "two products of my own",
    items: [
      {
        folio: "I",
        name: "Mono",
        stamp: "founder · cpo",
        line: "Radio reimagined for the AI era. Prompt to radio.",
        body: "Mono is radio reimagined for the AI era — the one where we can satisfy our curiosity in seconds. A prompt-to-radio product that lets you create broadcast-quality audio pieces by voice or text.",
        href: "https://apps.apple.com/app/mono-ai-prompt-to-radio/id6772781044",
        card: "/images/tarot/mono.png",
        video: "/videos/mono.mp4",
        poster: "/videos/mono.jpg",
        suit: "mono",
      },
      {
        folio: "II",
        name: "Esferica",
        stamp: "founder · cpo",
        line: "100k+ football podcasts, organised.",
        body: "Esferica comes from my love of the game: a platform with 100k+ football podcasts organised by competition, team, and collection — so you never have to hunt forever for what your club is up to.",
        href: "https://esferica.club/",
        card: "/images/tarot/esferica.png",
        video: "/videos/esferica.mp4",
        poster: "/videos/esferica.jpg",
        suit: "esferica",
      },
    ],
    videoTourAria: (name) => `${name} interface walkthrough`,
    videoSkipBackAria: (name) => `Rewind 10 seconds in ${name}`,
    videoSkipForwardAria: (name) => `Forward 10 seconds in ${name}`,
  },
  experience: {
    kicker: "experience",
    from: "2026",
    to: "2016",
    items: [
      {
        company: "Mono",
        body: [
          "Welcome to the AI era — and nothing beats real motivation for biting into the present.",
          "Also: don't let the future catch you offside. We live in the best time there is — the one we actually get.",
          "That the apple of my eye turned out to be a monkey… I'm still not sure how to feel about that.",
        ],
      },
      {
        company: "Espacio RES",
        body: [
          "The best accelerator in southern Spain gave me a new life.",
          "First, by giving me confidence.",
          "But above all, by professionalising a mind that sometimes leaned chaotic.",
        ],
      },
      {
        company: "Sensa",
        body: [
          "Design discipline is an art, and designing means understanding the human condition.",
          "A studio that teaches you craft lives in the small details.",
          "Nuances and ways of connecting with the root of everyday challenges.",
        ],
      },
      {
        company: "Esferica",
        body: [
          "My first time as a founder was also a period marked by emotional instability.",
          "I started living on a roller coaster that reframed me and put me face to face with the mirror.",
          "Innovation doesn't exist — parents do.",
        ],
      },
      {
        company: "Kampaoh",
        body: [
          "Picture learning customer experience 1,000 km from home, with guests showing up at a campsite with roller suitcases.",
          "Nothing is what it seems.",
        ],
      },
      {
        company: "ElDesmarque",
        body: [
          "My last contact with journalism — a.k.a. chronicle of a death foretold.",
          "I don't know if you can fall out of love with a profession, but I must have felt something close.",
          "May Kobe Bryant's death never find you at work.",
        ],
      },
      {
        company: "BeSoccer",
        body: [
          "I'd recommend getting inside a tech company VERY early. Just to breathe what's happening there.",
          "That's where I truly touched and felt what I wanted to be when I grew up.",
          "Málaga can be spectacular — even for someone from Seville.",
        ],
      },
      {
        company: "Onda Cero",
        body: [
          "The best — and worst — thing about radio is how volatile the message is. Did it go well? Good.",
          "Did it go badly? On to the next one — those words will never come back.",
          "Once I got locked in the booth and there was no way out until 7am :)",
        ],
      },
    ],
  },
  aboutStory: {
    kicker: "my story",
    opening: {
      body: "The truth is, at 18, the closest I'd come to design was editing — as if there were no tomorrow — the kits, boots, and crests of every team in La Liga. Everything I did back then was being a nerd, playing for the village team, and daydreaming about getting paid to walk into a football ground for free.",
    },
    liverpool: {
      fromCode: "SVQ",
      fromCity: "Seville",
      toCode: "LPL",
      toCity: "Liverpool",
      passenger: "Delgado, M.",
      flight: "MD018",
      valid: "1 year",
      body: "That's the level of obsession — I even moved to Liverpool because, back then, they were one of my favourite teams. Almost a year. Washing dishes. A wreck, but my head remembers it now with nostalgia and pride.",
    },
    journalism: {
      from: "Madrid",
      to: "Andalusia",
      body: "I studied journalism so I wouldn't have to go back to washing spoons to stay close to my teams. In Madrid I worked in radio, hosted a show, reported, interviewed, covered every kind of sporting event — and after two years, I returned to Andalusia.",
      land: "The promised land.",
    },
    malaga: {
      year: "25",
      place: "Málaga",
      body: "I landed a job at a startup in full swing. I was 25, in Málaga, working at one of the most promising tech companies on the Mediterranean. We had a play area, ping-pong, a beer tap, even a ball pit. But I fell for the product, the interfaces, the unanswered questions. It ran so deep that my product design colleagues let me drop by once a week.",
    },
    coda: {
      title: "The rest is history.",
      body: "Leonardo DiCaprio showed up in my dreams too and, in some way, changed the course of my life. Plenty left in the inkwell — but this isn't the place for long stories.",
    },
    signOff: "For more migueladas, drop me a line.",
    signOffEmail: "delmiguelmah@gmail.com",
    bootsAlt: "La Liga football boots hanging from a hook",
    creaseOpen: "keep reading",
    creaseClose: "close",
    expandOpen: "Continue reading the story",
    expandClose: "Close the rest of the story",
    boardingPass: {
      kicker: "boarding pass · one way",
      flight: "flight",
      valid: "valid",
      aria: (from, to, valid) =>
        `Boarding pass from ${from} to ${to}, valid ${valid}`,
    },
  },
  ui: {
    scrollCue: "keep going",
    scrollCueAria: "Keep scrolling down",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menuSections: "Sections",
    navPrimary: "Primary",
    heroPortraitAlt:
      "Illustrated portrait of Miguel Delgado seated in a lounge chair",
    localeEs: "Español",
    localeEn: "English",
  },
};
