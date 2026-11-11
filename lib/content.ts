export const SERVICES = [
  {
    id: "drenagem-linfatica",
    href: "/drenagem-linfatica",
    index: "01",
    title: "Drenagem",
    subtitle: "linfática",
    description:
      "Manobras suaves, lentas e rítmicas, no sentido da linfa, para aliviar a sensação de peso e favorecer a circulação.",
    image: "/images/drenagem.jpg",
    alt: "Mãos em um toque amplo e leve, no ritmo da drenagem",
    eyebrow: "Técnica 01",
    lead: "Um toque leve, no ritmo da linfa. A drenagem convida o que estava retido a voltar a circular.",
    body: [
      "A drenagem linfática manual, descrita por Emil Vodder na década de 1930, é feita com manobras superficiais, lentas e ritmadas. As mãos acompanham o trajeto dos vasos linfáticos, sem dor e sem marcar a pele.",
      "O gesto favorece o deslocamento da linfa, ajuda a diminuir a sensação de inchaço e de peso e oferece um descanso profundo. Não substitui avaliação médica: infecção aguda, trombose e insuficiência cardíaca descompensada pedem outro caminho.",
    ],
    benefits: [
      {
        title: "Leveza",
        text: "Alivia a sensação de retenção e de peso nos tecidos.",
      },
      {
        title: "Ritmo",
        text: "O toque lento acompanha o fluxo natural da linfa e acalma.",
      },
      {
        title: "Cuidado consciente",
        text: "Indicada quando o corpo pede circulação, não num quadro agudo.",
      },
    ],
    duration: "Sessão de cerca de 60 minutos",
  },
  {
    id: "terapias-manuais",
    href: "/terapias-manuais",
    index: "02",
    title: "Terapias",
    subtitle: "manuais",
    description:
      "O toque das mãos sobre músculos, fáscia e articulações, para soltar a tensão, devolver mobilidade e acalmar o corpo.",
    image: "/images/manuais.jpg",
    alt: "Mãos aplicando pressão na terapia manual",
    eyebrow: "Técnica 02",
    lead: "As mãos escutam antes de agir. A terapia manual devolve espaço ao que estava preso.",
    body: [
      "Terapia manual é o conjunto de técnicas feitas com as mãos sobre os tecidos: massagem, mobilização suave e liberação da fáscia. O objetivo é reduzir a tensão, melhorar a mobilidade e aliviar a sensação de dor muscular.",
      "A sessão se ajusta ao que o corpo apresenta no dia — pressão, ritmo e região. É um cuidado de bem-estar. Não faz diagnóstico e não substitui um tratamento médico.",
    ],
    benefits: [
      {
        title: "Soltar a tensão",
        text: "O toque rítmico afrouxa músculos e fáscia sobrecarregados.",
      },
      {
        title: "Devolver movimento",
        text: "A mobilização suave ajuda a região a recuperar amplitude.",
      },
      {
        title: "Acalmar",
        text: "O relaxamento físico também alivia a tensão e a ansiedade do dia.",
      },
    ],
    duration: "Sessão de cerca de 60 minutos",
  },
  {
    id: "terapias-integrativas",
    href: "/terapias-integrativas",
    index: "03",
    title: "Terapias",
    subtitle: "integrativas",
    description:
      "Um cuidado da pessoa inteira — corpo, mente e essência — com escuta, presença e práticas que conversam entre si.",
    image: "/images/integrativas.jpg",
    alt: "Pessoa em meditação, cuidado integrativo de corpo e mente",
    eyebrow: "Técnica 03",
    lead: "Nada está separado. A terapia integrativa junta o toque, a escuta e o ritmo de quem chega.",
    body: [
      "As práticas integrativas e complementares, reconhecidas no Brasil pela Política Nacional de Práticas Integrativas e Complementares no SUS desde 2006, olham a pessoa por inteiro: corpo, emoção, mente e vida social.",
      "No consultório, isso se traduz em escuta acolhedora e em técnicas que se complementam — o toque manual, a drenagem e o tempo de pausa — para apoiar o autocuidado. Complementam o acompanhamento de saúde. Não o substituem.",
    ],
    benefits: [
      {
        title: "Escuta inteira",
        text: "O cuidado considera o que o corpo pede e também o momento de vida.",
      },
      {
        title: "Práticas que se combinam",
        text: "Drenagem, toque manual e pausa podem compor a mesma sessão.",
      },
      {
        title: "Autocuidado",
        text: "A sessão devolve presença para continuar o cuidado fora do consultório.",
      },
    ],
    duration: "Sessão de cerca de 50 minutos",
  },
] as const;

export type Service = (typeof SERVICES)[number];

export const HEALTH_AXES = [
  "Limpeza",
  "Alimentação",
  "Descanso",
  "Otimismo",
  "Cuidado do corpo",
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah",
    quote:
      "Consultei Lorena Vaz em drenagem linfática e em terapias manuais. É uma pessoa muito atenta e apaixonada pelo que faz. Duas sessões bastaram para aliviar a minha queixa.",
  },
  {
    name: "François",
    quote:
      "A terapia manual foi uma verdadeira pausa de bem-estar, que me devolveu leveza. Um toque justo, uma presença calma, uma sessão que permanece.",
  },
  {
    name: "Valérie",
    quote:
      "Obrigada pela abordagem tão profissional do bem-estar do corpo, no respeito da pessoa. Bom toque, bela energia, boa massagem. O que mais pedir?",
  },
  {
    name: "Patricia",
    quote:
      "Um momento em que encontrei paz e tranquilidade para me depositar num espaço acolhedor. Lorena Vaz sabe cuidar com doçura e harmonia.",
  },
] as const;
