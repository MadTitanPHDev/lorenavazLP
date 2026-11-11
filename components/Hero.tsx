"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FadeUpReveal } from "@/components/FadeUpReveal";
import { FillImage } from "@/components/FillImage";
import { SCREEN, screenAttrs } from "@/lib/screen";

const HERO_POSTER =
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80";

const HERO_SIZES = "(max-width: 1024px) 90vw, 42vw";

type HeroProps = {
  videoSrc: string | null;
};

export function Hero({ videoSrc }: HeroProps) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = Boolean(videoSrc) && !videoFailed;
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  return (
    <section
      {...screenAttrs(SCREEN.hero)}
      className="relative overflow-hidden px-5 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28 lg:px-16 lg:pt-44 lg:pb-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div {...screenAttrs(SCREEN.heroMidia)} className="order-1 min-w-0 lg:col-span-5">
          <FadeUpReveal className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none">
            <div
              ref={mediaRef}
              className="relative aspect-[3/4] overflow-hidden bg-sand/40"
            >
              <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0">
                {showVideo ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={videoSrc ?? undefined}
                    poster={HERO_POSTER}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    disableRemotePlayback
                    aria-label="Vídeo em loop do espaço Lorena Vaz"
                    onError={() => setVideoFailed(true)}
                  />
                ) : (
                  <FillImage
                    src={HERO_POSTER}
                    alt="Cuidado em linho e luz suave"
                    sizes={HERO_SIZES}
                    preload
                  />
                )}
              </motion.div>
            </div>
          </FadeUpReveal>
        </div>

        <div {...screenAttrs(SCREEN.heroTexto)} className="order-2 min-w-0 lg:col-span-7 lg:text-right">
          <FadeUpReveal>
            <h1 className="font-serif text-[clamp(3.25rem,9vw,8.75rem)] font-normal leading-[0.92] tracking-[-0.02em]">
              Parar,
              <br />
              <em className="italic">respirar,</em>
              <br />
              reconectar-se
            </h1>
          </FadeUpReveal>

          <FadeUpReveal delay={0.15} className="mt-10 md:mt-14">
            <p className="font-sans text-[15px] font-light leading-[1.85] text-ink/80 md:text-base lg:ml-auto lg:max-w-xl">
              Lorena Vaz, praticante em cuidados energéticos, recebe você
              com uma abordagem holística para ajudar a liberar e relançar as
              suas energias vitais. Três técnicas complementares, para deixar o
              corpo iniciar os seus mecanismos de homeostase e equilíbrio.
            </p>
          </FadeUpReveal>
        </div>
      </div>
    </section>
  );
}
