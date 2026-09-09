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
      "A short index of products I've designed and built — systems, tools, and surfaces.",
    tone: "black",
  },
];

export const waveform = [
  28, 52, 40, 76, 34, 64, 88, 48, 70, 36, 58, 80, 44, 62, 30,
];
