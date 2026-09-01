export const SERVICES = [
  {
    id: "reflexologia",
    href: "/reflexologia",
    index: "01",
    title: "Reflexologia",
    subtitle: "plantar",
    description:
      "Prática ancestral, esta técnica de cuidado alternativo faz-se por pressões digitais em todo o pé, para detectar e liberar tensões.",
    image:
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1400&q=80",
    alt: "Cuidado de reflexologia, mãos em um pé",
    eyebrow: "Técnica 01",
    lead: "Uma escuta do corpo a partir da planta dos pés — para detectar, liberar e devolver circulação à energia vital.",
    body: [
      "A reflexologia plantar é uma prática ancestral. Por pressões precisas nos pontos reflexos do pé, o cuidado detecta zonas de tensão e convida o organismo a retomar o seu próprio equilíbrio.",
      "A sessão acontece em silêncio atento. Sem força, sem pressa. O toque acompanha o que o corpo já sabe fazer: limpar o que estagnou e relançar o que precisa circular.",
    ],
    benefits: [
      {
        title: "Liberar tensões",
        text: "Pressões digitais mapeiam o pé e desfazem nós físicos e energéticos.",
      },
      {
        title: "Relançar a circulação",
        text: "O estímulo dos pontos reflexos apoia a homeostase e o descanso profundo.",
      },
      {
        title: "Voltar ao essencial",
        text: "Uma pausa concreta para o sistema nervoso sair do modo de alerta.",
      },
    ],
    duration: "Sessão de cerca de 60 minutos",
  },
  {
    id: "massagem",
    href: "/massagem",
    index: "02",
    title: "Massagem",
    subtitle: "Abhyanga",
    description:
      "Massagem de bem-estar conhecida pelas virtudes preventivas e pela capacidade de redistribuir a energia pelo corpo, no plano físico e mental.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
    alt: "Massagem Abhyanga com pedras mornas",
    eyebrow: "Técnica 02",
    lead: "Um banho de óleo e presença. O Abhyanga redistribui a energia, acalma o mental e devolve densidade ao corpo.",
    body: [
      "O Abhyanga é uma massagem ayurvédica de bem-estar, reconhecida pelo seu caráter preventivo. Óleos quentes e gestos longos envolvem o corpo inteiro, da cabeça aos pés.",
      "Mais do que relaxar, o cuidado favorece a circulação da energia vital — no físico e no mental. É uma pausa para se depositar, sem ter de produzir nada.",
    ],
    benefits: [
      {
        title: "Nutrir o sistema nervoso",
        text: "O ritmo lento e o calor do óleo sinalizam segurança ao corpo.",
      },
      {
        title: "Redistribuir a energia",
        text: "O gesto contínuo ajuda a energia a circular de forma mais homogênea.",
      },
      {
        title: "Prevenir o desgaste",
        text: "Uma manutenção regular, como se cuida de um instrumento precioso.",
      },
    ],
    duration: "Sessão de cerca de 75 minutos",
  },
  {
    id: "physioscan",
    href: "/physioscan",
    index: "03",
    title: "Physio",
    subtitle: "scan",
    description:
      "Permite obter informações precisas sobre o estado energético de todos os sistemas do corpo humano: endócrino, nervoso, ósseo, digestivo, linfático...",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    alt: "Folhagem e luz, universo do Physioscan",
    eyebrow: "Técnica 03",
    lead: "Uma leitura sutil do terreno. O Physioscan observa o estado energético dos sistemas e indica por onde recomeçar.",
    body: [
      "O Physioscan permite obter informações precisas sobre o estado energético dos sistemas do corpo: endócrino, nervoso, ósseo, digestivo, linfático.",
      "Não substitui um diagnóstico médico. Oferece um mapa complementar — para orientar o cuidado, escolher a técnica e acompanhar a evolução com clareza e respeito.",
    ],
    benefits: [
      {
        title: "Ver o terreno",
        text: "Uma fotografia energética para compreender o que pede atenção.",
      },
      {
        title: "Orientar o cuidado",
        text: "Ajuda a escolher entre reflexologia, massagem ou o acompanhamento seguinte.",
      },
      {
        title: "Acompanhar no tempo",
        text: "Permite observar, com suavidade, o que se reequilibra de uma sessão para a outra.",
      },
    ],
    duration: "Sessão de cerca de 45 minutos",
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
      "Consultei Lorena Vaz em reflexologia plantar e em massagem Abhyanga. É uma pessoa muito atenta e apaixonada pelo que faz. Duas sessões bastaram para resolver a minha queixa.",
  },
  {
    name: "François",
    quote:
      "A massagem Abhyanga foi uma verdadeira pausa de bem-estar, que me devolveu energia. Um toque justo, uma presença calma, uma sessão que permanece.",
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
