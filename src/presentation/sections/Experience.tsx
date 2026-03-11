"use client";

import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/presentation/components/ui/SectionHeader";

export function Experience() {
    const t = useTranslations('Experience');

    return (
        <Section id="experience">
            <Container>
                <div className="space-y-12">
                    <SectionHeader number="02" title={t('title')} />

                    <div className="relative ml-2 md:ml-6 pb-12">
                        {/* Timeline Vertical Line Gradient */}
                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--accent)] to-transparent" />

                        <div className="space-y-12">
                            {resumeData.experience.map((_, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 md:pl-12 group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[4px] top-6 w-[9px] h-[9px] rounded-full border border-[var(--accent)] bg-[var(--bg)] group-hover:bg-[var(--accent)] transition-colors duration-300 ring-4 ring-[var(--bg)]" />

                                    <div className="p-6 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="font-display text-2xl font-bold text-foreground mb-1">{t(`items.item${idx}.role`)}</h3>
                                                <p className="font-mono text-[var(--accent)] text-sm">{t(`items.item${idx}.company`)}</p>
                                            </div>
                                            <div className="flex flex-col md:items-end font-mono text-xs text-[var(--text-muted)] space-y-1 pt-1 md:pt-0">
                                                <span>{t(`items.item${idx}.period`)}</span>
                                                <span>{t(`items.item${idx}.location`)} • {t(`items.item${idx}.type`)}</span>
                                            </div>
                                        </div>
                                        <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base">
                                            {t(`items.item${idx}.description`)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
