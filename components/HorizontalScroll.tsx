"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { FadeUpReveal } from "@/components/FadeUpReveal";
import { FillImage } from "@/components/FillImage";
import { SERVICES, type Service } from "@/lib/content";
import { SCREEN, screenAttrs } from "@/lib/screen";

const COUNT = SERVICES.length;
const WIPE = 0.18;
const HOLD = (1 - (COUNT - 1) * WIPE) / COUNT;

const IMAGE_SIZES = "(max-width: 1024px) 100vw, 55vw";

function activeIndexAt(progress: number) {
  let cursor = 0;
  for (let index = 0; index < COUNT - 1; index += 1) {
    cursor += HOLD;
    if (progress < cursor + WIPE / 2) return index;
    cursor += WIPE;
  }
  return COUNT - 1;
}

const IMAGE_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function TechniqueImage({ service, active }: { service: Service; active: boolean }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const skipEnter = useRef(true);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    frame.getAnimations().forEach((animation) => animation.cancel());
    if (skipEnter.current) {
      skipEnter.current = false;
      return;
    }
    if (!active) return;
    frame.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 700,
      easing: IMAGE_EASE,
      fill: "backwards",
    });
  }, [active]);

  return (
    <div
      ref={frameRef}
      aria-hidden={!active}
      className="absolute inset-0 overflow-hidden"
      style={{
        opacity: active ? 1 : 0,
        visibility: active ? "visible" : "hidden",
      }}
    >
      <FillImage
        src={service.image}
        alt={active ? service.alt : ""}
        sizes={IMAGE_SIZES}
        loading="eager"
        fetchPriority="low"
      />
    </div>
  );
}

function TechniqueCopy({ service }: { service: Service }) {
  return (
    <div className="max-w-lg">
      <p className="font-serif text-5xl font-normal leading-[1.15] text-clay md:text-6xl xl:text-8xl">
        {service.index}
      </p>
      <h3 className="mt-5 font-serif text-[clamp(2rem,4.4vw,4.5rem)] font-normal leading-[1.45] lg:mt-8">
        {service.title}
        <br />
        <em className="italic">{service.subtitle}</em>
      </h3>
      <p className="mt-4 max-w-md font-sans text-[13px] font-light uppercase leading-[1.65] tracking-[0.14em] text-ink/75 md:mt-6 md:text-sm md:tracking-[0.18em]">
        {service.description}
      </p>
    </div>
  );
}

function StickyTechniquesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES[activeIndex] ?? SERVICES[0];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = activeIndexAt(latest);
    setActiveIndex((current) => (current === next ? current : next));
  });

  return (
    <div
      {...screenAttrs(SCREEN.tecnicasPainel)}
      ref={containerRef}
      className="relative h-[300vh] max-w-full"
    >
      <div className="sticky top-0 box-border h-svh touch-pan-y pt-20">
        <div className="relative grid h-full grid-rows-[auto_minmax(0,1fr)] border-t border-sand/30 lg:grid-cols-[45%_55%] lg:grid-rows-none">
          <div
            {...screenAttrs(SCREEN.tecnicasTexto)}
            className="relative z-10 flex h-full min-h-0 items-center overflow-hidden border-sand/30 px-5 py-6 md:px-10 lg:border-r lg:px-12 lg:py-0 xl:px-20"
          >
            <TechniqueCopy key={activeService.id} service={activeService} />
          </div>

          <div
            {...screenAttrs(SCREEN.tecnicasImagem)}
            className="relative overflow-hidden bg-sand/20"
          >
            {SERVICES.map((service, index) => (
              <TechniqueImage key={service.id} service={service} active={index === activeIndex} />
            ))}
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
    <section {...screenAttrs(SCREEN.tecnicas)} aria-labelledby="tecnicas-heading">
      <div {...screenAttrs(SCREEN.tecnicasIntro)} className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <FadeUpReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/70">
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
