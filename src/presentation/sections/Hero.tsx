"use client";

import { useState, useEffect } from "react";
import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations('Hero');
    const [typedName, setTypedName] = useState("");
    const [typingComplete, setTypingComplete] = useState(false);
    const fullName = resumeData.profile.name;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < fullName.length) {
                setTypedName(fullName.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
                setTypingComplete(true);
            }
        }, 60);
        return () => clearInterval(interval);
    }, [fullName]);

    return (
        <Section className="min-h-screen flex items-center justify-center pt-32 pb-16">
            <Container>
                <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
                    {/* Prefix and typed name */}
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="font-mono text-sm md:text-base text-[var(--accent)] mb-4"
                        >
                            &gt;_ {t('greeting')}
                        </motion.div>
                        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight text-foreground font-display flex items-center justify-center">
                            {typedName}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="text-[var(--accent)] ml-1"
                            >
                                |
                            </motion.span>
                        </h1>
                    </div>

                    <AnimatePresence>
                        {typingComplete && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-center space-y-8 w-full"
                            >
                                <p className="text-2xl md:text-3xl font-light text-[var(--text-muted)]">
                                    {t('role')}
                                </p>
                                
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed"
                                >
                                    {t('description')}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="flex flex-wrap items-center justify-center gap-6 pt-4"
                                >
                                    <a
                                        href="#projects"
                                        className="flex items-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors"
                                    >
                                        {t('actions.viewProjects')} <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={`mailto:${resumeData.profile.contact.email}`}
                                        className="px-8 py-4 rounded-full border border-[var(--border)] hover:bg-[var(--bg-2)] transition-colors flex items-center gap-2 text-white"
                                    >
                                        {t('actions.contact')}
                                    </a>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </Section>
    );
}

