export const site = {
  name: "Miguel Delgado",
  role: "Product designer and design engineer",
  tagline: "Product designer and design engineer. Interfaces made with uncommon care.",
  email: "hello@migueldelgado.com",
  indexLabel: "Index",
  cta: "Write to me",
};

export const navItems = [
  { href: "#historia", label: "mi historia" },
  { href: "#proyectos", label: "proyectos" },
  { href: "#experiencia", label: "experiencia" },
  { href: "#skills", label: "skills" },
] as const;

export const heroIntro = {
  kicker: "starring:",
  firstName: "Miguel",
  lastName: "Delgado",
};

export const profileFacts = [
  "design engineer",
  "sevilla, españa",
  "33 años",
] as const;

export const cv = {
  label: "descargar cv",
  href: "#",
};

export const markColors = [
  "#0C0A09",
  "#F9A8D4",
  "#86EFAC",
  "#EA580C",
  "#E8D5C4",
  "#F43F5E",
  "#38BDF8",
  "#34D399",
  "#0C0A09",
] as const;

export const manifesto = [
  "Every day, software gets easier and easier to make. And most of what gets made will probably be fine. Functional, but forgettable. Made too quickly without enough thought.",
  "This is for people who want to make something else.",
  "Products that are loved. Interfaces that feel timeless. Experiences that welcome you in and anticipate your needs. Software that feels right — like it was made by someone who took the time.",
];

export type PracticeCard = {
  id: string;
  title: string;
  description: string;
  tone: "orange" | "cream" | "blue" | "green" | "black";
};

export const practiceCards: PracticeCard[] = [
  {
    id: "product-design",
    title: "Product Design",
    description:
      "End-to-end product surfaces, from the first sketch to the last pixel in production.",
    tone: "orange",
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description:
      "Detailed walkthroughs of shipping interfaces, finding the opportunity, and refining until it feels right.",
    tone: "cream",
  },
  {
    id: "design-engineering",
    title: "Design Engineering",
    description:
      "Working in code to get exacting results. Prototypes that become the product.",
    tone: "blue",
  },
  {
    id: "systems",
    title: "Systems",
    description:
      "Tokens, components, and the quiet craft of making a product feel like one thing.",
    tone: "green",
  },
  {
    id: "selected-work",
    title: "Selected Work",
    description:
      "A short index of products I’ve designed and built — systems, tools, and surfaces.",
    tone: "black",
  },
];

export const workIntro =
  "A short index of products I’ve designed and built — systems, tools, and surfaces made to feel inevitable. Each piece is a walkthrough of the problem, the decisions, and the last 5% of craft.";

export const projects = [
  {
    name: "Harbor",
    tags: "Product design · Design engineering",
    summary:
      "A calm research workspace. Rebuilt the reading, capture, and sharing flow until it felt like paper — quiet, fast, and a little bit magical.",
  },
  {
    name: "Ledger",
    tags: "Product design · Systems",
    summary:
      "A wealth OS for independent operators. Designed the information architecture, then engineered the densest screens so they still feel light.",
  },
  {
    name: "Atlas",
    tags: "Design system · Engineering",
    summary:
      "A multi-product system. Tokens, components, and documentation written so designers and engineers share one language.",
  },
];

export const quotes = [
  {
    text: "There are very few people who think about the last 5% the way Miguel does. If you care about craft, you already know the difference.",
    name: "Ana Ruiz",
    role: "Staff Designer, Linear",
    initial: "A",
    avatar: "#E7D5C4",
  },
  {
    text: "Miguel has that rare combination of taste and follow-through. He makes complex product problems feel obvious in retrospect.",
    name: "Jonas Hale",
    role: "Principal Design Engineer, Mercury",
    initial: "J",
    avatar: "#BAE6FD",
  },
];

export const about = [
  "I’m Miguel Delgado, a product designer and design engineer. I spend my time at the seam between intent and implementation — shaping the product, then assembling it in the interface until it feels inevitable.",
  "I’ve designed and shipped products for early teams and established ones, and I still prefer the work that asks for an unreasonable level of consideration. The interesting problems live in the details: timing, type, the way a control yields under the cursor.",
];

export const available =
  "Open to a small number of collaborations. Product design, design engineering, or the stretch of both. If the work needs uncommon care, write.";

export const questions = [
  {
    q: "Do you take on new projects?",
    a: "A few each year, when the problem is sharp and the craft is the point. If you’re building something that needs to feel loved, not merely shipped, write.",
  },
  {
    q: "Design, engineering, or both?",
    a: "Both. I benefit from — and prefer — the full loop: defining the product, drawing the interface, and assembling it in code. Some work stays in Paper; some ships as the product.",
  },
  {
    q: "How do you like to work?",
    a: "Embedded, with a small team, close to the surface. Weekly artifacts you can feel, not decks. I work best when the bar is already high.",
  },
  {
    q: "Where are you based?",
    a: "Europe, and remote by default. Overlap with US mornings is easy. Travel for the right kickoff.",
  },
];

export const waveform = [
  28, 52, 40, 76, 34, 64, 88, 48, 70, 36, 58, 80, 44, 62, 30,
];
