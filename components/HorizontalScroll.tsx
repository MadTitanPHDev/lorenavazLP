"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { FadeUpReveal } from "@/components/FadeUpReveal";
import { SERVICES } from "@/lib/content";

const SLIDE_TRANSITION = {
  duration: 0.8,
  ease: [0.33, 1, 0.68, 1] as const,
};

function StickyTechniquesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES[activeIndex];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      SERVICES.length - 1,
      Math.floor(latest * SERVICES.length),
    );
    setActiveIndex(index);
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-dvh">
        <div className="relative grid h-full grid-rows-[1fr_1.15fr] border-t border-sand/30 lg:grid-cols-[45%_55%] lg:grid-rows-none">
          <div className="relative z-10 flex flex-col justify-center overflow-hidden border-sand/30 px-5 py-8 md:px-10 lg:border-r lg:px-12 lg:py-0 xl:px-20">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeService.id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={SLIDE_TRANSITION}
                className="max-w-lg"
              >
                <p className="font-serif text-5xl font-normal text-sand md:text-6xl xl:text-8xl">
                  {activeService.index}
                </p>
                <h3 className="mt-6 font-serif text-[clamp(2.4rem,8vw,5.5rem)] font-normal leading-none lg:mt-10">
                  {activeService.title}
                  <br />
                  <em className="italic">{activeService.subtitle}</em>
                </h3>
                <p className="mt-5 max-w-md font-sans text-[13px] font-light uppercase leading-[1.85] tracking-[0.18em] text-ink/75 md:mt-8 md:text-sm md:tracking-[0.22em]">
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative overflow-hidden bg-sand/20">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeService.id}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: 0 }}
                transition={SLIDE_TRANSITION}
                className="absolute inset-0"
                style={{ zIndex: activeIndex + 1 }}
              >
                <Image
                  src={activeService.image}
                  alt={activeService.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                  priority={activeIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <Link
            href={activeService.href}
            className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full border border-sand bg-cream px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-sand/20 md:bottom-10 md:px-8 md:py-4 lg:bottom-20"
          >
            Descobrir o cuidado
          </Link>
        </div>
      </div>
    </div>
  );
}

export function HorizontalScroll() {
  return (
    <section aria-labelledby="tecnicas-heading">
      <div className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <FadeUpReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/60">
            Técnicas de cuidado
          </p>
          <h2
            id="tecnicas-heading"
            className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,6vw,5.5rem)] font-normal leading-[0.98]"
          >
            Para relançar
            <br />
            <em className="italic">a auto-cura</em>
          </h2>
        </FadeUpReveal>
        <FadeUpReveal delay={0.12} className="mt-8 max-w-lg">
          <p className="font-sans text-[15px] font-light leading-[1.85] text-ink/75">
            Os cuidados propostos limpam as energias estagnadas, recarregam e
            relançam a circulação vital — para ajudar o corpo no seu mecanismo
            de homeostase.
          </p>
        </FadeUpReveal>
      </div>

      <div className="relative">
        {SERVICES.map((service) => (
          <span
            key={service.id}
            id={service.id}
            className="absolute top-0 h-px w-px scroll-mt-28"
          />
        ))}
      </div>

      <StickyTechniquesScroll />
    </section>
  );
}
