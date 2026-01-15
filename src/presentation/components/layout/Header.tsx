"use client";

import { useState, useEffect } from "react";
import { Container } from "../ui/Layout";
import { ThemeToggle } from "../ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];


export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass border-b border-card-border py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <a href="#" className="text-2xl font-bold tracking-tighter text-foreground">
                    RK<span className="text-muted-foreground">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle />
                    <a
                        href="mailto:koudakpo.rodrigue@gmail.com"
                        className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors"
                    >
                        Hire Me
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
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
                            {navItems.map((item) => (
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
