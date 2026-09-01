import { FadeUpReveal } from "@/components/FadeUpReveal";

export function BigQuote() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-36 lg:px-20 lg:py-44">
      <FadeUpReveal className="mx-auto max-w-6xl text-center">
        <p className="mb-10 text-[11px] font-medium uppercase tracking-[0.32em] text-ink/50">
          No consultório
        </p>
        <blockquote className="font-serif font-normal leading-[1.05] tracking-[-0.02em]">
          <span className="block text-[clamp(1.85rem,4.4vw,4.4rem)]">
            Os processos
          </span>
          <span className="mt-2 block font-sans text-[clamp(1.15rem,3.4vw,2.75rem)] font-light uppercase tracking-[0.18em]">
            de auto-cura
          </span>
          <span className="mt-3 block text-[clamp(1.85rem,4.4vw,4.4rem)] italic">
            acontecem sozinhos,
          </span>
          <span className="mt-3 block font-sans text-[clamp(0.95rem,2.6vw,1.85rem)] font-light uppercase tracking-[0.22em]">
            mas não sem o nosso
          </span>
          <span className="mt-3 block text-[clamp(2.1rem,5.2vw,5.25rem)]">
            TOTAL <em className="italic">consentimento.</em>
          </span>
        </blockquote>
      </FadeUpReveal>
    </section>
  );
}
