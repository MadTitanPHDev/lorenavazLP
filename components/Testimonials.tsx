"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FadeUpReveal } from "@/components/FadeUpReveal";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      const overflow = track.scrollWidth - viewport.offsetWidth;
      setDragLimit(overflow > 0 ? overflow : 0);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className="overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-16">
      <FadeUpReveal className="mb-12 md:mb-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55">
          Depoimentos
        </p>
        <h2 className="mt-4 font-serif text-[clamp(2.4rem,6vw,5rem)] font-normal leading-[0.98]">
          Os pacientes
          <br />
          <em className="italic">falam</em>
        </h2>
      </FadeUpReveal>

      <FadeUpReveal>
        <div
          ref={viewportRef}
          className="cursor-grab overflow-hidden active:cursor-grabbing"
        >
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -dragLimit, right: 0 }}
            dragElastic={0.12}
            className="flex gap-6 md:gap-8"
          >
            {TESTIMONIALS.map((item, index) => (
              <article
                key={item.name}
                className="flex w-[min(82vw,420px)] shrink-0 flex-col justify-between border border-sand bg-cream p-8 md:w-[460px] md:p-10"
              >
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ink/45">
                  {String(index + 1).padStart(2, "0")}
                  <span className="mx-2 text-sand">/</span>
                  {String(TESTIMONIALS.length).padStart(2, "0")}
                </p>
                <blockquote className="mt-10 font-serif text-[1.35rem] leading-[1.55] md:text-[1.55rem]">
                  {item.quote}
                </blockquote>
                <p className="mt-12 font-sans text-[11px] font-medium uppercase tracking-[0.24em]">
                  {item.name}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
        <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-ink/40">
          Arraste para ler
        </p>
      </FadeUpReveal>
    </section>
  );
}
