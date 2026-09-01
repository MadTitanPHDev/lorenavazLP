"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FadeUpReveal } from "@/components/FadeUpReveal";
import { SERVICES, type Service } from "@/lib/content";

export function ServiceView({ service }: { service: Service }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const currentIndex = SERVICES.findIndex((item) => item.id === service.id);
  const previous = SERVICES[(currentIndex - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <article className="px-5 pt-32 pb-20 md:px-10 md:pt-40 lg:px-16 lg:pb-28">
      <FadeUpReveal>
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55">
          {service.eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,8vw,7.5rem)] font-normal leading-[0.92] tracking-[-0.02em]">
          {service.title}
          <br />
          <em className="italic">{service.subtitle}</em>
        </h1>
      </FadeUpReveal>

      <div className="mt-14 grid items-start gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <FadeUpReveal className="lg:col-span-5" delay={0.08}>
          <div
            ref={imageRef}
            className="relative aspect-[3/4] overflow-hidden bg-sand/30"
          >
            <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </FadeUpReveal>

        <div className="lg:col-span-7 lg:pt-6">
          <FadeUpReveal delay={0.12}>
            <p className="max-w-xl font-serif text-2xl italic leading-relaxed md:text-[1.75rem]">
              {service.lead}
            </p>
          </FadeUpReveal>
          {service.body.map((paragraph, index) => (
            <FadeUpReveal key={paragraph} delay={0.16 + index * 0.06}>
              <p className="mt-6 max-w-xl font-sans text-[15px] font-light leading-[1.9] text-ink/75 md:text-base">
                {paragraph}
              </p>
            </FadeUpReveal>
          ))}
          <FadeUpReveal delay={0.28}>
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.22em] text-ink/50">
              {service.duration}
            </p>
            <Link
              href="/contato"
              className="group relative mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.22em]"
            >
              Marcar uma sessão
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </FadeUpReveal>
        </div>
      </div>

      <div className="mt-24 grid gap-px border border-sand bg-sand md:mt-32 md:grid-cols-3">
        {service.benefits.map((benefit, index) => (
          <FadeUpReveal
            key={benefit.title}
            delay={index * 0.08}
            className="bg-cream p-8 md:p-10"
          >
            <p className="font-serif text-3xl text-sand">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-6 font-serif text-2xl leading-snug md:text-3xl">
              {benefit.title}
            </h2>
            <p className="mt-4 font-sans text-sm font-light leading-[1.85] text-ink/70">
              {benefit.text}
            </p>
          </FadeUpReveal>
        ))}
      </div>

      <nav className="mt-20 flex flex-col justify-between gap-8 border-t border-sand pt-10 md:mt-28 md:flex-row md:items-end">
        <Link href={previous.href} className="group max-w-sm">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink/45">
            Anterior
          </p>
          <p className="mt-2 font-serif text-2xl md:text-3xl">
            {previous.title}{" "}
            <em className="italic">{previous.subtitle}</em>
          </p>
          <span className="mt-2 block h-px w-16 origin-left scale-x-0 bg-ink transition-transform duration-500 group-hover:scale-x-100" />
        </Link>
        <Link href={next.href} className="group max-w-sm md:text-right">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink/45">
            Seguinte
          </p>
          <p className="mt-2 font-serif text-2xl md:text-3xl">
            {next.title} <em className="italic">{next.subtitle}</em>
          </p>
          <span className="ml-auto mt-2 block h-px w-16 origin-left scale-x-0 bg-ink transition-transform duration-500 group-hover:scale-x-100 md:origin-right" />
        </Link>
      </nav>
    </article>
  );
}
