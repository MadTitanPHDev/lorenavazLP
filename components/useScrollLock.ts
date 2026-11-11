"use client";

import { useLenis } from "lenis/react";
import { useEffect } from "react";

function clearLockStyles() {
  const html = document.documentElement;
  const body = document.body;
  html.style.overflow = "";
  body.style.overflow = "";
  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.right = "";
  body.style.width = "";
}

export function useScrollLock(locked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!locked) return;

    const pathAtLock = window.location.pathname;
    const y = window.scrollY;
    const html = document.documentElement;
    const body = document.body;

    lenis?.stop();
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      const navigated = window.location.pathname !== pathAtLock;
      const target = navigated ? 0 : y;
      clearLockStyles();
      window.scrollTo(0, target);
      lenis?.scrollTo(target, { immediate: true, force: true });
      lenis?.start();
      lenis?.resize();
    };
  }, [locked, lenis]);
}
