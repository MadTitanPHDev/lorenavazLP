export const SCREEN = {
  inicio: "inicio",
  cabecalho: "cabecalho",
  menuDesktop: "menu-desktop",
  menuMobile: "menu-mobile",
  hero: "hero",
  heroMidia: "hero-midia",
  heroTexto: "hero-texto",
  faixaConvite: "faixa-convite",
  tecnicas: "tecnicas",
  tecnicasIntro: "tecnicas-intro",
  tecnicasPainel: "tecnicas-painel",
  tecnicasTexto: "tecnicas-texto",
  tecnicasImagem: "tecnicas-imagem",
  citacao: "citacao",
  praticante: "praticante",
  praticanteRetrato: "praticante-retrato",
  praticanteTexto: "praticante-texto",
  depoimentos: "depoimentos",
  depoimentosLista: "depoimentos-lista",
  eixosSaude: "eixos-saude",
  faixaEixos: "faixa-eixos",
  rodape: "rodape",
  rodapeLocal: "rodape-local",
  rodapeConvite: "rodape-convite",
  rodapeFrase: "rodape-frase",
  rodapeAssinatura: "rodape-assinatura",
  paginaContato: "pagina-contato",
  contatoIntro: "contato-intro",
  contatoConsultorio: "contato-consultorio",
  contatoFormulario: "contato-formulario",
  paginaNaoEncontrada: "pagina-nao-encontrada",
} as const;

export type ScreenName = (typeof SCREEN)[keyof typeof SCREEN];

export function screenAttrs(name: string) {
  return {
    id: name,
    "data-component": name,
  };
}

export function serviceBlock(
  serviceId: string,
  part?: "intro" | "corpo" | "beneficios" | "navegacao",
) {
  const name = part ? `servico-${serviceId}-${part}` : `servico-${serviceId}`;
  return screenAttrs(name);
}
