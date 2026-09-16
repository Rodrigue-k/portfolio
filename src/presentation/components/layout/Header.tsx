"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { resumeData } from "@/core/data/resume";
import { Container } from "../ui/Layout";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";

export function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: t("nav.about"), href: `/${locale}#about` },
    { name: t("nav.skills"), href: `/${locale}#skills` },
    { name: t("nav.projects"), href: `/${locale}/projects` },
    { name: t("nav.experience"), href: `/${locale}#experience` },
    { name: t("nav.contact"), href: `/${locale}#contact` },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={cn("fixed inset-x-0 top-0 z-40 py-6 transition-all duration-300 md:py-8", scrolled && "border-b border-card-border bg-[var(--bg)]/90 py-4 backdrop-blur-md md:py-5")}>
        <Container className="flex items-center justify-between">
          <a href={`/${locale}`} className="font-display text-xl font-semibold tracking-[-0.06em] md:text-2xl" aria-label="Accueil">RK<span className="text-[var(--accent-gold)]">.</span></a>
          <div className="flex items-center gap-5">
            <button type="button" onClick={() => setMenuOpen(true)} aria-label="Ouvrir le menu" aria-expanded={menuOpen} className="group grid size-11 place-items-center rounded-full bg-[var(--text)] text-[var(--bg)] transition-transform hover:scale-105 md:size-12">
              <span className="flex w-4 flex-col gap-[5px]"><span className="h-px w-full bg-current transition-transform group-hover:translate-x-0.5" /><span className="h-px w-3 bg-current transition-transform group-hover:-translate-x-0.5" /></span>
            </button>
            <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--text)]" />
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-50 flex min-h-svh flex-col bg-[var(--text)] text-[var(--bg)]">
            <Container className="flex w-full items-center justify-between py-6 md:py-8">
              <span className="font-display text-xl font-semibold tracking-[-0.06em] md:text-2xl">RK.</span>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="Fermer le menu" className="grid size-11 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-black md:size-12"><X className="size-5" /></button>
            </Container>
            <Container className="grid w-full flex-1 items-center py-10 md:grid-cols-[1fr_auto] md:gap-20">
              <nav className="flex flex-col items-start">
                {navLinks.map((item, index) => (
                  <a key={item.name} href={item.href} onClick={() => setMenuOpen(false)} className="group flex w-full items-baseline gap-4 border-b border-white/15 py-3 font-display text-4xl font-semibold tracking-tight transition-colors hover:text-white/55 sm:text-5xl md:text-6xl">
                    <span className="font-mono text-[10px] font-normal tracking-widest text-white/40">0{index + 1}</span>{item.name}
                  </a>
                ))}
              </nav>
              <div className="mt-10 space-y-7 font-mono text-[10px] uppercase tracking-[.18em] text-white/55 md:mt-0 md:min-w-48">
                <LanguageSwitcher />
                <a className="block hover:text-white" href={`mailto:${resumeData.profile.contact.email}`}>{t("nav.hireMe")}</a>
                <div className="flex gap-5"><a className="hover:text-white" href={resumeData.profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="hover:text-white" href={resumeData.profile.contact.github} target="_blank" rel="noreferrer">GitHub</a></div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
