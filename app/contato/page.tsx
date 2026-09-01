import type { Metadata } from "next";
import { FadeUpReveal } from "@/components/FadeUpReveal";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato — Lorena Vaz",
  description:
    "Marque uma pausa com Lorena Vaz. Reflexologia, massagem Abhyanga e Physioscan no Instituto Vivance, em Presidente Prudente.",
};

export default function ContatoPage() {
  return (
    <main className="px-5 pt-32 pb-10 md:px-10 md:pt-40 lg:px-16">
      <FadeUpReveal>
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55">
          Contato
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,8vw,7.2rem)] font-normal leading-[0.92] tracking-[-0.02em]">
          Oferecer-se
          <br />
          <em className="italic">uma pausa</em>
        </h1>
      </FadeUpReveal>

      <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <FadeUpReveal delay={0.08}>
            <p className="max-w-md font-sans text-[15px] font-light leading-[1.85] text-ink/75">
              Uma mensagem basta para começar. Lorena responde com calma, para
              encontrar o cuidado e o horário que fazem sentido para você.
            </p>
            <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.22em] text-ink/45">
              O consultório
            </p>
            <p className="mt-3 font-serif text-2xl leading-snug md:text-3xl">
              {SITE.addressName}
              <br />
              {SITE.addressLine1}
              <br />
              {SITE.addressLine2}
            </p>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-8 inline-block text-[11px] font-medium uppercase tracking-[0.22em]"
            >
              Ver no Google Maps
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </a>
          </FadeUpReveal>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
