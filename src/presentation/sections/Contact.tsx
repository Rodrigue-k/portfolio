"use client";

import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion } from "framer-motion";
import { Mail, Briefcase, UserPlus } from "lucide-react";
import { useTranslations } from "next-intl";

export function Contact() {
    const t = useTranslations('Contact');

    return (
        <Section id="contact" className="bg-gradient-to-t from-black to-card-bg/20">
            <Container>
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            {t('title')}
                        </h2>
                        <p className="text-xl text-muted-foreground text-balance">
                            {t('subtitle')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href={`mailto:${resumeData.profile.contact.email}`}
                            className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:bg-white/90 transition-colors flex items-center gap-3"
                        >
                            {t('email')} <Mail className="w-5 h-5" />
                        </a>
                        <a
                            href={resumeData.profile.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full border border-card-border hover:bg-card-bg transition-colors flex items-center gap-3 text-foreground"
                        >
                            {t('linkedin')} <Briefcase className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
