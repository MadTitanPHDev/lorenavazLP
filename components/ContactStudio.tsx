import { FadeUpReveal } from "@/components/FadeUpReveal";
import { buildWhatsappUrl } from "@/lib/contact";
import { SCREEN, screenAttrs } from "@/lib/screen";
import { SITE } from "@/lib/site";

export function ContactStudio() {
  const whatsappHref = buildWhatsappUrl(SITE.whatsappMessage);

  return (
    <div {...screenAttrs(SCREEN.contatoConsultorio)} className="lg:col-span-5">
      <FadeUpReveal delay={0.08}>
        <p className="max-w-md font-sans text-[15px] font-light leading-[1.85] text-ink/75">
          Uma mensagem basta para começar. Lorena responde com calma, para
          encontrar o cuidado e o horário que fazem sentido para você.
        </p>
        <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.22em] text-ink/70">
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
        {whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-6 block w-fit text-[11px] font-medium uppercase tracking-[0.22em]"
          >
            Falar pelo WhatsApp
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </a>
        ) : null}
      </FadeUpReveal>
    </div>
  );
}
