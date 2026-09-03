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
  "product design engineer",
  "andalucía, españa",
  "33 años",
] as const;

export const cv = {
  label: "descargar cv",
  href: "#",
};

export const github = {
  label: "GitHub",
  href: "https://github.com/skinnymike93",
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

export const siteClose = {
  thanks: "Gracias por pasarte.",
  invite: "Vamos a la montaña.",
  name: "Miguel Delgado",
  artAlt: "Ilustración a tinta de un sendero hacia una montaña",
} as const;

export const skillStats = {
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
  rest: {
    id: "rest",
    name: "lo que venga",
  },
} as const;

export const workIntro =
  "A short index of products I’ve designed and built — systems, tools, and surfaces made to feel inevitable. Each piece is a walkthrough of the problem, the decisions, and the last 5% of craft.";

export const projectSpread = {
  kicker: "proyectos",
  lede: "dos productos, los míos",
  items: [
    {
      folio: "I",
      name: "Mono",
      stamp: "founder · cpo",
      line: "La radio repensada en la era de la IA. Prompt to radio.",
      body: "Mono es la radio repensada en la era de la IA, aquella en la que podemos satisfacer nuestra curiosidad en segundos. Un producto prompt to radio que permite vía voz o texto crear piezas de audio con estética radiofónica.",
      href: "#proyectos",
      card: "/images/tarot/mono.png",
      video: "/videos/mono.mp4",
      poster: "/videos/mono.jpg",
      suit: "mono",
    },
    {
      folio: "II",
      name: "Esferica",
      stamp: "founder · cpo",
      line: "Más de 100k podcasts de fútbol, organizados.",
      body: "Esferica nace de mi pasión por la pelota: una plataforma con más de 100k podcasts de fútbol organizados en competiciones, equipos y colecciones, para que no tengas que andar buscando eternamente lo que sucede con tu equipo.",
      href: "#proyectos",
      card: "/images/tarot/esferica.png",
      video: "/videos/esferica.mp4",
      poster: "/videos/esferica.jpg",
      suit: "esferica",
    },
  ],
} as const;

export const experience = {
  kicker: "experiencia",
  from: "2026",
  to: "2016",
  items: [
    {
      company: "Mono",
      body: [
        "Bienvenidos a la era de la IA y nada como tener una verdadera motivación para morder el presente.",
        "Eso, y que el futuro no te pille en fuera de juego. Vivimos en la mejor época, la que nos toca vivir.",
        "Que la niña de mis ojos sea en realidad un mono… La verdad que no sé muy bien cómo tomármelo.",
      ],
    },
    {
      company: "Espacio RES",
      body: [
        "La mejor aceleradora del sur de España me dio una nueva vida.",
        "Primero, por darme valor y confianza.",
        "Pero, sobre todo, por profesionalizar una mente a veces tendente a lo caótico.",
      ],
    },
    {
      company: "Sensa",
      body: [
        "La disciplina del diseño es un arte y diseñar es entender la condición humana.",
        "Un estudio que enseña que la artesanía está en los pequeños detalles.",
        "Matices y formas de conectar con la raíz de los retos del día a día.",
      ],
    },
    {
      company: "Esferica",
      body: [
        "Mi primera vez como founder fue también una época marcada por la inestabilidad emocional.",
        "Empecé a vivir en una montaña rusa que me resignificó y me puso contra el espejo.",
        "La innovación no existe, son los padres.",
      ],
    },
    {
      company: "Kampaoh",
      body: [
        "Imagina aprender a lidiar con la customer experience a 1000km de casa, con clientes que acuden a un camping con una maleta de ruedines.",
        "Nada es lo que parece.",
      ],
    },
    {
      company: "ElDesmarque",
      body: [
        "El último contacto con el periodismo a.k.a crónica de una muerte anunciada.",
        "No sé si uno puede desenamorarse de una profesión, pero debí sentir algo cercano.",
        "Que la muerte de Kobe Bryant no te pille trabajando.",
      ],
    },
    {
      company: "BeSoccer",
      body: [
        "Recomiendo tener contacto con una empresa tech MUY pronto. Para respirar qué sucede por ahí.",
        "Ahí toqué y sentí de cerca verdaderamente que quería ser de mayor.",
        "Málaga puede ser espectacular, incluso para un sevillano.",
      ],
    },
    {
      company: "Onda Cero",
      body: [
        "Lo mejor —y lo peor— de trabajar en la radio es la volatilidad del mensaje. ¿Lo haces bien? Bien.",
        "¿Lo haces mal? Pa’ la siguiente, mejor: esas palabras ya nunca volverán.",
        "Una vez me quedé encerrado en la cabina y no hubo boleto a las 7am :)",
      ],
    },
  ],
} as const;

export const aboutStory = {
  kicker: "mi historia",
  opening: {
    year: "18",
    place: "el pro",
    body: "La realidad es que, con 18 años, lo más cercano que había estado al diseño fue editando —como si no hubiera un mañana— las equipaciones, botas y escudos de todos los equipos del Pro. Todo lo que hice en mi vida por aquella época era ser un empollón, jugar en el equipo del pueblo y soñar despierto con la posibilidad de que me pagaran por entrar gratis a un estadio de fútbol.",
  },
  liverpool: {
    fromCode: "SVQ",
    fromCity: "Sevilla",
    toCode: "LPL",
    toCity: "Liverpool",
    passenger: "Delgado, M.",
    flight: "MD018",
    valid: "1 año",
    body: "Fíjate la obsesión que incluso me fui a vivir a Liverpool porque era, por aquel entonces, uno de mis equipos favoritos. Casi un año. Fregando platos. Una ruina, pero ahora mi cabeza lo recuerda con nostalgia y orgullo.",
  },
  journalism: {
    from: "Madrid",
    to: "Andalucía",
    body: "Estudié periodismo para no tener que volver a lavar cucharas para poder estar cerca de mis equipos favoritos. En Madrid trabajé en la radio, presenté un programa, hice de reportero, entrevistas, cubrí eventos deportivos de todo tipo y, a los 2 años, volví a Andalucía.",
    land: "La tierra prometida.",
  },
  malaga: {
    year: "25",
    place: "Málaga",
    body: "Encontré curro en una startup en plena efervescencia. Tenía 25 años, en Málaga, trabajando en una de las empresas tech con mayor proyección del mediterráneo. Teníamos la play, mesa de ping-pong, un tirador de cerveza e incluso una piscina de bolas. Pero yo me enamoré del producto, de las interfaces, de las preguntas sin respuesta. Fue de tal magnitud la lata que di a mis compañeros de diseño de producto, que me dejaban ir por allí una vez a la semana.",
  },
  coda: {
    title: "El resto es historia.",
    body: "Leonardo di Caprio se metió también en mis sueños y cambió, de alguna forma, el destino de mi vida. Quedan muchas cosas en el tintero, pero este no es lugar para chapas.",
  },
  signOff: "Para más migueladas, nos leemos por correo.",
} as const;

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
