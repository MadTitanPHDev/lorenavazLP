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
import { SERVICES, type Service } from "@/lib/content";

const SLIDE_TRANSITION = {
  duration: 0.8,
  ease: [0.33, 1, 0.68, 1] as const,
};

function ServiceCard({
  service,
  className = "",
}: {
  service: Service;
  className?: string;
}) {
  return (
    <article
      className={`relative flex h-full shrink-0 flex-col justify-between overflow-hidden bg-cream ${className}`}
    >
      <div className="flex flex-1 flex-col justify-between gap-8 p-8 md:flex-row md:p-12">
        <div className="flex max-w-md flex-col justify-between">
          <p className="font-serif text-5xl font-normal text-sand md:text-7xl">
            {service.index}
          </p>
          <div className="mt-10 md:mt-0">
            <h3 className="font-serif text-[clamp(2.25rem,5vw,4.25rem)] font-normal leading-[0.95]">
              {service.title}
              <br />
              <em className="italic">{service.subtitle}</em>
            </h3>
            <p className="mt-6 max-w-sm font-sans text-sm font-light leading-[1.85] text-ink/75 md:text-[15px]">
              {service.description}
            </p>
            <Link
              href={service.href}
              className="group relative mt-8 inline-block text-[11px] font-medium uppercase tracking-[0.22em]"
            >
              Descobrir
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </div>
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden bg-sand/30 md:aspect-auto md:h-full md:min-h-[280px] md:w-[42%]">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="(max-width: 768px) 80vw, 32vw"
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}

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
    <div ref={containerRef} className="relative hidden h-[300vh] lg:block">
      <div className="sticky top-0 h-screen">
        <div className="relative grid h-full grid-cols-[45%_55%] border-t border-sand/30">
          <div className="relative flex flex-col justify-center overflow-hidden border-r border-sand/30 px-12 xl:px-20">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeService.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={SLIDE_TRANSITION}
                className="max-w-lg"
              >
                <p className="font-serif text-6xl font-normal text-sand xl:text-8xl">
                  {activeService.index}
                </p>
                <h3 className="mt-10 font-serif text-[clamp(3rem,5vw,5.5rem)] font-normal leading-none">
                  {activeService.title}
                  <br />
                  <em className="italic">{activeService.subtitle}</em>
                </h3>
                <p className="mt-8 max-w-md font-sans text-sm font-light uppercase leading-[1.85] tracking-[0.22em] text-ink/75">
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
                  sizes="55vw"
                  className="object-cover"
                  priority={activeIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <Link
            href={activeService.href}
            className="absolute bottom-20 left-1/2 z-30 -translate-x-1/2 rounded-full border border-sand bg-cream px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-sand/20"
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

      <div className="space-y-6 px-5 pb-20 lg:hidden">
        {SERVICES.map((service, i) => (
          <FadeUpReveal key={service.id} delay={i * 0.08}>
            <div className="border border-sand">
              <ServiceCard service={service} className="w-full" />
            </div>
          </FadeUpReveal>
        ))}
      </div>

      <StickyTechniquesScroll />
    </section>
  );
}
