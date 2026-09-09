"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const LINES = [
  {
    text: "Os processos",
    className: "block text-[clamp(1.85rem,4.4vw,4.4rem)]",
  },
  {
    text: "de auto-cura",
    className:
      "mt-2 block font-sans text-[clamp(1.15rem,3.4vw,2.75rem)] font-light uppercase tracking-[0.18em]",
  },
  {
    text: "acontecem sozinhos,",
    className: "mt-3 block text-[clamp(1.85rem,4.4vw,4.4rem)] italic",
  },
  {
    text: "mas não sem o nosso",
    className:
      "mt-3 block font-sans text-[clamp(0.95rem,2.6vw,1.85rem)] font-light uppercase tracking-[0.22em]",
  },
  {
    text: (
      <>
        TOTAL <em className="italic">consentimento.</em>
      </>
    ),
    className: "mt-3 block text-[clamp(2.1rem,5.2vw,5.25rem)]",
  },
] as const;

function QuoteLine({
  children,
  className,
  progress,
  index,
  total,
}: {
  children: ReactNode;
  className: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const step = 1 / total;
  const start = index * step;
  const mid = start + step * 0.45;
  const end = start + step;

  const opacity = useTransform(progress, [start, mid, end], [0, 1, 1]);
  const y = useTransform(progress, [start, mid, end], [36, 0, 0]);
  const filter = useTransform(
    progress,
    [start, mid, end],
    ["blur(8px)", "blur(0px)", "blur(0px)"],
  );

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.span>
  );
}

export function BigQuote() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const eyebrowY = useTransform(scrollYProgress, [0, 0.08], [16, 0]);

  return (
    <section
      ref={targetRef}
      className="relative h-[280vh]"
      aria-label="Citação"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-5 md:px-10 lg:px-20">
        <div className="mx-auto w-full max-w-6xl text-center">
          <motion.p
            style={{ opacity: eyebrowOpacity, y: eyebrowY }}
            className="mb-10 text-[11px] font-medium uppercase tracking-[0.32em] text-ink/50"
          >
            No consultório
          </motion.p>

          <blockquote className="font-serif font-normal leading-[1.05] tracking-[-0.02em]">
            {LINES.map((line, index) => (
              <QuoteLine
                key={index}
                className={line.className}
                progress={scrollYProgress}
                index={index}
                total={LINES.length}
              >
                {line.text}
              </QuoteLine>
            ))}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
