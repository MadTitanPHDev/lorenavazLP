import Link from "next/link";
import { FadeUpReveal } from "@/components/FadeUpReveal";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col justify-center px-5 py-32 md:px-10 lg:px-16">
      <FadeUpReveal>
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/50">
          404
        </p>
        <h1 className="mt-4 font-serif text-[clamp(3rem,8vw,7rem)] font-normal leading-[0.92]">
          Esta página
          <br />
          <em className="italic">não existe.</em>
        </h1>
        <Link
          href="/"
          className="group relative mt-10 inline-block text-[11px] font-medium uppercase tracking-[0.22em]"
        >
          Voltar ao início
          <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </Link>
      </FadeUpReveal>
    </main>
  );
}
