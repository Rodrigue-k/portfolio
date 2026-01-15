"use client";

import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <Section className="min-h-screen flex items-center justify-center pt-32 pb-16">
            <Container>
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Intro Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                            {t('greeting')}
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                            {resumeData.profile.name}
                        </h1>
                        <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                            {t('role')}
                        </p>
                    </motion.div>

                    {/* Bio/Summary with delay */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        {t('description')}
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-6 pt-4"
                    >
                        <a
                            href="#projects"
                            className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-white/80 transition-colors"
                        >
                            {t('actions.viewProjects')} <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href={`mailto:${resumeData.profile.contact.email}`}
                            className="px-6 py-3 rounded-full border border-card-border hover:bg-card-bg transition-colors flex items-center gap-2 text-foreground"
                        >
                            {t('actions.contact')}
                        </a>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex items-center justify-center gap-6 pt-8"
                    >
                        <SocialLink href={resumeData.profile.contact.github} icon={<Github className="w-6 h-6" />} label="GitHub" />
                        <SocialLink href={resumeData.profile.contact.linkedin} icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" />
                        <SocialLink href={`mailto:${resumeData.profile.contact.email}`} icon={<Mail className="w-6 h-6" />} label="Email" />
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    const validHref = href.startsWith('http') || href.startsWith('mailto') ? href : `https://${href}`;

    return (
        <a
            href={validHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
