"use client";

import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/presentation/components/ui/SectionHeader";

export function Projects() {
    const t = useTranslations('Projects');

    return (
        <Section id="projects" className="bg-card-bg/20">
            <Container>
                <div className="space-y-12">
                    <SectionHeader number="03" title={t('title')} />

                    <div className="grid md:grid-cols-2 gap-8">
                        {resumeData.projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group relative bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(193,68,14,0.15)] h-full flex flex-col"
                            >
                                <div className="p-8 space-y-6 flex-1 flex flex-col relative z-10">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-display text-2xl font-bold text-foreground">
                                            {t(`items.item${idx}.title`)}
                                        </h3>
                                        {project.status && (
                                            <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30">
                                                {t(`items.item${idx}.status`)}
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-[var(--text-muted)] leading-relaxed flex-1">
                                        {t(`items.item${idx}.description`)}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4 pr-8">
                                        {project.tags?.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="font-mono text-[10px] bg-[rgba(193,68,14,0.1)] text-[var(--accent)] px-[8px] py-[3px] rounded-[2px]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <ArrowUpRight className="absolute bottom-6 right-6 w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
