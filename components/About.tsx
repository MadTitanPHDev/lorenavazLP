"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FadeUpReveal } from "@/components/FadeUpReveal";

const PORTRAIT = "/images/lorena.webp";

export function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="px-5 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <FadeUpReveal className="lg:col-span-5">
          <div
            ref={imageRef}
            className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden bg-sand/30 lg:max-w-none"
          >
            <motion.div style={{ y }} className="absolute -inset-y-[10%] inset-x-0">
              <Image
                src={PORTRAIT}
                alt="Retrato de Lorena Vaz"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover object-top"
              />
            </motion.div>
          </div>
        </FadeUpReveal>

        <div className="lg:col-span-7">
          <FadeUpReveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55">
              A praticante
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-normal leading-[1.02]">
              Lorena <em className="italic">Vaz</em>
            </h2>
          </FadeUpReveal>

          <FadeUpReveal delay={0.1}>
            <p className="mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-ink/90 md:text-2xl">
              « Tornei-me uma adepta apaixonada do bem-estar. A minha filosofia
              é agora uma pausa para si — para parar, respirar, reconectar-se a
              si, ao essencial. »
            </p>
          </FadeUpReveal>

          <FadeUpReveal delay={0.18}>
            <p className="mt-8 max-w-xl font-sans text-[15px] font-light leading-[1.9] text-ink/75 md:text-base">
              Lorena Vaz compreendeu que tudo é energia, e que ela se encontra
              no presente — daí a importância desta pausa. Foram os cuidados
              energéticos que a ajudaram a reencontrar o equilíbrio de saúde
              corporal, psicológica e emocional. Essa nova consciência a
              conduziu ao aprendizado durante vários anos. Hoje, no Instituto
              Vivance, ela recebe você com toda a sua atenção e na mais
              profunda benevolência.
            </p>
          </FadeUpReveal>
        </div>
      </div>
    </section>
  );
}
