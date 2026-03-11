"use client";

import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion } from "framer-motion";
import { Mail, Briefcase, UserPlus } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/presentation/components/ui/SectionHeader";

export function Contact() {
    const t = useTranslations('Contact');

    return (
        <Section id="contact" className="bg-gradient-to-t from-black to-card-bg/20">
            <Container>
                <div className="max-w-3xl space-y-8 flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">
                    <SectionHeader number="04" title={t('title')} centeredMobile />

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="font-display text-2xl md:text-3xl font-bold text-foreground"
                    >
                        Un projet en tête ? Parlons-en.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-center md:items-start gap-4"
                    >
                        <a
                            href={`mailto:${resumeData.profile.contact.email}`}
                            className="px-8 py-4 rounded-[2px] bg-[var(--accent)] text-white font-bold hover:opacity-90 transition-all flex items-center gap-3"
                        >
                            {t('email')} <Mail className="w-5 h-5" />
                        </a>
                        <a
                            href={resumeData.profile.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-[2px] border border-[var(--border)] hover:bg-white/5 transition-colors flex items-center gap-3 text-foreground"
                        >
                            {t('linkedin')} <Briefcase className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
