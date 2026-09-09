import type { SiteContent } from "@/lib/content/types";

export const contentEs: SiteContent = {
  locale: "es",
  navItems: [
    { href: "#historia", label: "mi historia" },
    { href: "#proyectos", label: "proyectos" },
    { href: "#experiencia", label: "experiencia" },
    { href: "#skills", label: "skills" },
  ],
  heroIntro: {
    kicker: "starring:",
    firstName: "Miguel",
    lastName: "Delgado",
  },
  profileFacts: [
    "product design engineer",
    "andalucía, españa",
    "33 años",
  ],
  cv: {
    label: "descargar cv",
    downloading: "descargando…",
    onTheWay: "en camino",
    href: "/files/miguel-delgado-cv.pdf",
    fileName: "Miguel-Delgado-CV.pdf",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/skinnymike93",
  },
  siteClose: {
    thanks: "Gracias por pasarte.",
    invite: "Vamos a la montaña.",
    name: "Miguel Delgado",
    artAlt: "Ilustración a tinta de un sendero hacia una montaña",
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
    rest: { id: "rest", name: "lo que venga" },
    inProgress: "en curso",
  },
  projectSpread: {
    kicker: "proyectos",
    lede: "dos productos, los míos",
    items: [
      {
        folio: "I",
        name: "Mono",
        stamp: "founder · cpo",
        line: "La radio repensada en la era de la IA. Prompt to radio.",
        body: "Mono es la radio repensada en la era de la IA, aquella en la que podemos satisfacer nuestra curiosidad en segundos. Un producto prompt to radio que permite vía voz o texto crear piezas de audio con estética radiofónica.",
        href: "https://apps.apple.com/es/app/mono-ai-prompt-to-radio/id6772781044",
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
        href: "https://esferica.club/",
        card: "/images/tarot/esferica.png",
        video: "/videos/esferica.mp4",
        poster: "/videos/esferica.jpg",
        suit: "esferica",
      },
    ],
    videoTourAria: (name) => `Recorrido de la interfaz de ${name}`,
    videoSkipBackAria: (name) => `Retroceder 10 segundos en ${name}`,
    videoSkipForwardAria: (name) => `Avanzar 10 segundos en ${name}`,
  },
  experience: {
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
  },
  aboutStory: {
    kicker: "mi historia",
    opening: {
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
    signOffEmail: "delmiguelmah@gmail.com",
    bootsAlt: "Botas de fútbol del Pro, colgadas de un gancho",
    creaseOpen: "seguir leyendo",
    creaseClose: "cerrar",
    expandOpen: "Seguir leyendo la historia",
    expandClose: "Cerrar el resto de la historia",
    boardingPass: {
      kicker: "pase de abordaje · ida",
      flight: "vuelo",
      valid: "válido",
      aria: (from, to, valid) =>
        `Pase de abordaje de ${from} a ${to}, válido ${valid}`,
    },
  },
  ui: {
    scrollCue: "sigue",
    scrollCueAria: "Sigue bajando",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    menuSections: "Secciones",
    navPrimary: "Principal",
    heroPortraitAlt:
      "Retrato ilustrado de Miguel Delgado sentado en un sillón",
    localeEs: "Español",
    localeEn: "English",
  },
};
