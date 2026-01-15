"use client";

import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Experience() {
    const t = useTranslations('Experience');

    return (
        <Section id="experience">
            <Container>
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{t('title')}</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>

                    <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-12">
                        {resumeData.experience.map((_, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-foreground ring-4 ring-background" />

                                <div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground">{t(`items.item${idx}.role`)}</h3>
                                            <p className="text-primary font-medium">{t(`items.item${idx}.company`)}</p>
                                        </div>
                                        <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                                            <span>{t(`items.item${idx}.period`)}</span>
                                            <span>{t(`items.item${idx}.location`)} • {t(`items.item${idx}.type`)}</span>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t(`items.item${idx}.description`)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
