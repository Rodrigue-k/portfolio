"use client";

import { useState, useEffect } from "react";
import { Container } from "../ui/Layout";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { resumeData } from "@/core/data/resume";

export function Header() {
    const t = useTranslations('Header');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.about'), href: "#about" },
        { name: t('nav.skills'), href: "#skills" },
        { name: t('nav.projects'), href: "#projects" },
        { name: t('nav.experience'), href: "#experience" },
        { name: t('nav.contact'), href: "#contact" },
    ];

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [mobileMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 bg-[#0A0A0F]/95 backdrop-blur-md",
                    scrolled ? "border-b border-[var(--accent)]" : "border-b border-transparent"
                )}
            >
                <Container className="flex items-center justify-between">
                    <a href="#" className="flex items-center gap-4">
                        <span className="font-mono font-bold text-xl leading-none text-foreground">RK</span>
                        <span className="h-5 w-[2px] bg-[var(--accent)]"></span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[11px] font-mono tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-2 border-l border-white/10 pl-6 ml-2">
                            <LanguageSwitcher />
                        </div>
                        <a
                            href={`mailto:${resumeData.profile.contact.email}`}
                            className="text-[11px] font-mono uppercase tracking-widest border border-[var(--accent)] text-[var(--accent)] px-4 py-2 rounded-[2px] hover:bg-[var(--accent)] hover:text-white transition-all ml-2"
                        >
                            {t('nav.hireMe')}
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <LanguageSwitcher />
                        <button
                            className="text-[var(--text)] p-2 hover:text-[var(--accent)] transition-colors"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu />
                        </button>
                    </div>
                </Container>
            </header>

            {/* Mobile Nav Drawer Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-50 bg-[#0A0A0F] flex flex-col md:hidden"
                    >
                        <div className="flex items-center justify-between p-6 mt-2">
                            <a href="#" className="flex items-center gap-4" onClick={() => setMobileMenuOpen(false)}>
                                <span className="font-mono font-bold text-xl leading-none text-foreground">RK</span>
                                <span className="h-5 w-[2px] bg-[var(--accent)]"></span>
                            </a>
                            <button
                                className="text-[var(--text-muted)] p-2 hover:text-[var(--accent)] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-center gap-8">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-4xl font-display font-bold text-foreground hover:text-[var(--accent)] transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="p-8 flex flex-col items-center gap-4 font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)]">
                            <a href={`mailto:${resumeData.profile.contact.email}`} className="hover:text-[var(--accent)] transition-colors">
                                {resumeData.profile.contact.email}
                            </a>
                            <div className="flex items-center gap-6">
                                <a href={resumeData.profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
                                <a href={resumeData.profile.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">GitHub</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
