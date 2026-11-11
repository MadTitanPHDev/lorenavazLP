"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import "lenis/dist/lenis.css";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import type { LenisOptions } from "lenis";

type SmoothScrollProps = {
  children: ReactNode;
};

const LENIS_OPTIONS: LenisOptions = {
  autoRaf: false,
  duration: 1.35,
  lerp: 0.075,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1,
  stopInertiaOnNavigate: true,
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (data: { timestamp: number }) => {
      lenisRef.current?.lenis?.raf(data.timestamp);
    };

    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
