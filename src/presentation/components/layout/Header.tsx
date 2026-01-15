"use client";

import { useState, useEffect } from "react";
import { Container } from "../ui/Layout";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass border-b border-card-border py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-2">
                    <img src="/logo.png" alt="RK Logo" className="w-10 h-10 rounded-lg object-cover" />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-2 border-l border-white/10 pl-6 ml-2">
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>
                    <a
                        href="mailto:koudakpo.rodrigue@gmail.com"
                        className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors ml-2"
                    >
                        {t('nav.hireMe')}
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <LanguageSwitcher />
                    <button
                        className="text-foreground p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-card-border overflow-hidden"
                    >
                        <Container className="py-8 flex flex-col gap-6">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
