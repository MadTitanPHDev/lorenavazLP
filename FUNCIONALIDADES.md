# Funcionalidades do site Lorena Vaz

Landing page institucional da praticante **Lorena Vaz**, com abordagem holística de cuidados energéticos no Instituto Vivance, em Presidente Prudente/SP. O site apresenta três técnicas (Reflexologia plantar, Massagem Abhyanga e Physioscan) e convite a marcar uma sessão.

Não há área logada, CMS, agendamento online nem backend. O conteúdo é estático, em português, com foco em narrativa visual e scroll.

---

## Rotas

| Rota | Página | Função |
| --- | --- | --- |
| `/` | Home | Apresentação completa: hero, técnicas, citação, sobre, depoimentos e eixos de saúde |
| `/reflexologia` | Reflexologia plantar | Detalhe da técnica 01 |
| `/massagem` | Massagem Abhyanga | Detalhe da técnica 02 |
| `/physioscan` | Physioscan | Detalhe da técnica 03 |
| `/contato` | Contato | Endereço, mapa e formulário de pedido de consulta |
| *(qualquer outra)* | 404 | Mensagem de página inexistente e link de volta ao início |

Cada página de serviço e a de contato têm título e descrição próprios para SEO. O layout global define o título padrão *Lorena Vaz — Reflexologia, Massagem Abhyanga e Physioscan*.

---

## Navegação global

Presente em todas as páginas.

### Cabeçalho

- Logo **LORENA VAZ** leva à home.
- Menu desktop: Reflexologia, Massagem, Physioscan, Contato.
- Indicador visual da página ativa (linha sob o item).
- Menu mobile em hamburger, com overlay animado.
- Ao abrir o menu mobile, o scroll do corpo é bloqueado.
- O menu fecha sozinho ao mudar de rota.
- Fundo transparente no topo; ao rolar (ou com o menu aberto), ganha blur e fundo creme.

### Rodapé

- Endereço do **Instituto Vivance** (Rua Vicente Furlaneto, 65 — Presidente Prudente/SP).
- Link **Ver no Google Maps** (abre em nova aba).
- CTA **Escrever a Lorena**, que leva a `/contato`.
- Frase de encerramento: *Nada é sólido, tudo é energia...*
- Copyright com o ano atual e as três técnicas.

### Scroll suave

Lenis integrado ao Framer Motion em todo o site: a rolagem da roda e do toque é interpolada, mais lenta e contínua.

---

## Home (`/`)

A home é uma sequência de seções de storytelling.

### 1. Hero

- Título: *Parar, respirar, reconectar-se*.
- Texto de apresentação da praticante e das três técnicas.
- Mídia em formato retrato, com parallax no scroll.
- Tenta reproduzir o vídeo `/videos/hero.mp4` (mudo, em loop, sem Picture-in-Picture).
- Se o vídeo falhar, cai para uma imagem Unsplash de spa.

### 2. Faixa marquee

Faixa infinita com o texto *Marcar uma consulta* / *Presentear-se com uma pausa*, separado por um losango.

### 3. Técnicas de cuidado

Introdução *Para relançar a auto-cura*, seguida de um bloco sticky de ~300vh:

- Ao rolar, as três técnicas passam em sequência (01 Reflexologia, 02 Massagem, 03 Physioscan).
- Cada slide troca título, descrição e imagem com animação.
- Botão **Descobrir o cuidado** aponta para a página da técnica visível.

### 4. Citação sticky

Bloco alto (~280vh) em que a frase *Os processos de auto-cura acontecem sozinhos, mas não sem o nosso TOTAL consentimento* revela linha a linha conforme o scroll (fade, blur e deslocamento).

### 5. A praticante

- Retrato de Lorena (`/images/lorena.webp`) com parallax.
- Citação em primeira pessoa e biografia: caminho até os cuidados energéticos e atendimento no Instituto Vivance.

### 6. Depoimentos

Carrossel horizontal arrastável (mouse/toque) com quatro depoimentos estáticos: Sarah, François, Valérie e Patricia. Indicador *Arraste para ler*.

### 7. Eixos para uma melhor saúde

Texto sobre consentimento e manutenção do corpo, seguido de marquee com os cinco eixos:

- Limpeza
- Alimentação
- Descanso
- Otimismo
- Cuidado do corpo

---

## Páginas de serviço

As três rotas usam o mesmo modelo (`ServiceView`), alimentado por `lib/content.ts`.

Cada página inclui:

- Numeração da técnica (Técnica 01 / 02 / 03).
- Título e subtítulo.
- Imagem com parallax.
- Lead, dois parágrafos de corpo e duração da sessão:
  - Reflexologia: ~60 minutos
  - Massagem Abhyanga: ~75 minutos
  - Physioscan: ~45 minutos
- CTA **Marcar uma sessão** → `/contato`.
- Três benefícios em grade.
- Navegação **Anterior / Seguinte** em ciclo (da última volta à primeira).

O Physioscan deixa explícito que **não substitui diagnóstico médico**.

---

## Contato (`/contato`)

- Título *Oferecer-se uma pausa*.
- Texto de convite à mensagem.
- Endereço do consultório e link para o Google Maps.
- Formulário:
  - Nome (obrigatório)
  - E-mail (obrigatório)
  - Telefone (opcional)
  - Mensagem (obrigatória)
- Ao enviar, o site monta um e-mail (`mailto:`) com assunto `Consulta Lorena Vaz — [nome]` e o corpo preenchido, e tenta abrir o cliente de e-mail do visitante.
- O botão passa a mostrar *Abrindo o e-mail...*.

Não há envio para servidor, confirmação por API nem endereço de destino definido no `mailto`.

---

## Página 404

Mensagem *Esta página não existe* e link **Voltar ao início**.

---

## Identidade visual e movimento

- Paleta: creme (`#f8f6f0`), tinta (`#2a2b26`), areia (`#d5c3a5`).
- Tipografia: Playfair Display (títulos) e Inter (texto).
- Overlay de grain sutil em tela cheia.
- Revelação `FadeUpReveal`: blocos entram com fade + subida ao entrar na viewport (uma vez).
- Parallax em hero, retrato e imagens de serviço.
- Hover com linha que cresce/encolhe em links e CTAs.

---

## Conteúdo e dados

Centralizados em dois arquivos:

- `lib/site.ts` — nome, endereço e URL do Maps.
- `lib/content.ts` — serviços, eixos de saúde e depoimentos.

Imagens das técnicas vêm do Unsplash. Retrato e vídeo de hero são arquivos locais esperados em `public/`.

---

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS 4
- Framer Motion (animações e scroll)
- Lenis (scroll suave)
- TypeScript

---

## O que o site não faz hoje

Revisão do código atual:

- Sem backend, banco, CMS ou área administrativa.
- Formulário só abre o cliente de e-mail; não há destinatário no `mailto` e não há fallback se o visitante não tiver app de e-mail.
- Sem calendário, WhatsApp, telefone clicável ou confirmação de agendamento.
- Sem blog, FAQ, preços, políticas (privacidade/cookies) ou i18n.
- Depoimentos e textos são hardcoded.
- O vídeo `/videos/hero.mp4` e a foto `/images/lorena.webp` são referenciados no código, mas **não estão em `public/`** neste clone — o hero cai na imagem Unsplash; o retrato da seção “A praticante” fica quebrado até os arquivos serem adicionados.
- `public/` ainda contém SVGs padrão do create-next-app (`file.svg`, `vercel.svg`, `window.svg`), não usados pelo site.
