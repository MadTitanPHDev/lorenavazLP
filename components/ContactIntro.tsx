import { FadeUpReveal } from "@/components/FadeUpReveal";
import { SCREEN, screenAttrs } from "@/lib/screen";

export function ContactIntro() {
  return (
    <div {...screenAttrs(SCREEN.contatoIntro)}>
      <FadeUpReveal>
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/70">
          Contato
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,8vw,7.2rem)] font-normal leading-[0.92] tracking-[-0.02em]">
          Oferecer-se
          <br />
          <em className="italic">uma pausa</em>
        </h1>
      </FadeUpReveal>
    </div>
  );
}
