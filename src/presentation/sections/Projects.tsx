"use client";

import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Projects() {
    const t = useTranslations('Projects');

    return (
        <Section id="projects" className="bg-card-bg/20">
            <Container>
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{t('title')}</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {resumeData.projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group glass rounded-2xl overflow-hidden hover:border-muted-foreground/50 transition-all duration-300 h-full flex flex-col"
                            >
                                <div className="p-8 space-y-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {t(`items.item${idx}.title`)}
                                        </h3>
                                        {project.status && (
                                            <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30">
                                                {t(`items.item${idx}.status`)}
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed flex-1">
                                        {t(`items.item${idx}.description`)}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {project.tags?.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-muted-foreground hover:bg-white/20 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
