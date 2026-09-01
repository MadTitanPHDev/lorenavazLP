import Link from "next/link";
import { FadeUpReveal } from "@/components/FadeUpReveal";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-20 md:px-10 md:pb-12 md:pt-28 lg:px-16">
      <FadeUpReveal>
        <div className="grid gap-12 border-t border-sand pt-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55">
              Onde?
            </p>
            <p className="mt-4 font-serif text-2xl leading-snug md:text-3xl">
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
              className="group relative mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.22em]"
            >
              Ver no Google Maps
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </a>
          </div>

          <div className="md:col-span-7 md:text-right">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55">
              Marcar uma consulta
            </p>
            <Link
              href="/contato"
              className="group relative mt-4 inline-block font-serif text-2xl italic md:text-3xl"
            >
              Escrever a Lorena
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </div>
        </div>
      </FadeUpReveal>

      <FadeUpReveal className="mt-20 md:mt-28">
        <p className="font-serif text-[clamp(2.4rem,8vw,8rem)] font-normal leading-[0.92] tracking-[-0.03em]">
          Nada é sólido,
          <br />
          <em className="italic">tudo é energia...</em>
        </p>
      </FadeUpReveal>

      <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-sand pt-6 text-[11px] uppercase tracking-[0.2em] text-ink/50 md:mt-20 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <p>Reflexologia · Massagem · Physioscan</p>
      </div>
    </footer>
  );
}
