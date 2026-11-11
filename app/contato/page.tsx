import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactIntro } from "@/components/ContactIntro";
import { ContactStudio } from "@/components/ContactStudio";
import { SCREEN, screenAttrs } from "@/lib/screen";

export const metadata: Metadata = {
  title: "Contato — Lorena Vaz",
  description:
    "Marque uma sessão com Lorena Vaz. Drenagem linfática, terapias manuais e terapias integrativas no Instituto Vivance, em Presidente Prudente.",
};

export default function ContatoPage() {
  return (
    <main
      {...screenAttrs(SCREEN.paginaContato)}
      className="px-5 pt-32 pb-10 md:px-10 md:pt-40 lg:px-16"
    >
      <ContactIntro />

      <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-20">
        <ContactStudio />
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
