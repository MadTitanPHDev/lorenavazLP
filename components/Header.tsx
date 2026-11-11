"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import { useScrollLock } from "@/components/useScrollLock";
import { SCREEN, screenAttrs } from "@/lib/screen";

const NAV_LINKS = [
  { href: "/reflexologia", label: "Reflexologia" },
  { href: "/massagem", label: "Massagem" },
  { href: "/physioscan", label: "Physioscan" },
  { href: "/contato", label: "Contato" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      {...screenAttrs(SCREEN.cabecalho)}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter] duration-500 ${
        scrolled || open ? "bg-cream/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-5 md:px-10 lg:px-16">
        <Link
          href="/"
          className="font-serif text-[15px] font-medium tracking-[0.28em] uppercase"
        >
          LORENA&nbsp;&nbsp;VAZ
        </Link>

        <nav {...screenAttrs(SCREEN.menuDesktop)} className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              {...link}
              active={pathname === link.href}
            />
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar o menu" : "Abrir o menu"}
          aria-expanded={open}
          onClick={() => setOpenPath(open ? null : pathname)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            {...screenAttrs(SCREEN.menuMobile)}
            data-lenis-prevent=""
            className="flex max-h-[calc(100svh-4.5rem)] flex-col gap-8 overflow-y-auto border-t border-sand/70 bg-cream/95 px-5 py-12 backdrop-blur-md md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                active={pathname === link.href}
                onClick={() => setOpenPath(null)}
              />
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
