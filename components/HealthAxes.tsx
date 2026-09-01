import { FadeUpReveal } from "@/components/FadeUpReveal";
import { Marquee } from "@/components/Marquee";
import { HEALTH_AXES } from "@/lib/content";

export function HealthAxes() {
  return (
    <section className="py-8 md:py-12">
      <div className="px-5 pb-12 md:px-10 md:pb-16 lg:px-16">
        <FadeUpReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55">
            Caminhos
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.2rem,5.5vw,4.6rem)] font-normal leading-[0.98]">
            Eixos para uma
            <br />
            <em className="italic">melhor saúde</em>
          </h2>
        </FadeUpReveal>
        <FadeUpReveal delay={0.1} className="mt-8 max-w-xl">
          <p className="font-sans text-[15px] font-light leading-[1.85] text-ink/75">
            As fontes do desequilíbrio estão no ambiente. Os processos de
            auto-cura acontecem sozinhos, mas precisam primeiro do nosso
            consentimento. O corpo é o veículo: basta uma boa manutenção. Aí
            está o nosso sim.
          </p>
        </FadeUpReveal>
      </div>
      <Marquee items={[...HEALTH_AXES]} />
    </section>
  );
}
