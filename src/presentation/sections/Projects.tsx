"use client";

import { useState } from "react";
import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/presentation/components/ui/BrandIcons";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/presentation/components/ui/SectionHeader";

export function Projects() {
    const t = useTranslations('Projects');
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
                                onClick={() => setSelectedProject(idx)}
                                className="group relative bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(193,68,14,0.15)] h-full flex flex-col cursor-pointer"
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
                                                className="font-mono text-[11px] font-medium bg-[rgba(193,68,14,0.1)] text-[var(--accent)] px-[10px] py-[4px] rounded-[2px]"
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

            <AnimatePresence>
                {selectedProject !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                    >
                        <div 
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        />
                        
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-2xl bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl p-6 md:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="space-y-6 mt-2 md:mt-0">
                                <div className="space-y-4">
                                    <h3 className="font-display text-3xl font-bold text-foreground">
                                        {t(`items.item${selectedProject}.title`)}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {resumeData.projects[selectedProject].tags?.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="font-mono text-[11px] font-medium bg-[rgba(193,68,14,0.1)] text-[var(--accent)] px-[10px] py-[4px] rounded-[2px]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-[var(--text-muted)] leading-relaxed text-base md:text-lg">
                                    {t(`items.item${selectedProject}.fullDescription`)}
                                </p>

                                <div className="pt-6 flex flex-wrap gap-4 border-t border-[var(--border)]">
                                    {!resumeData.projects[selectedProject].hideLink && (
                                        <>
                                            {resumeData.projects[selectedProject].playStore && (
                                                <a 
                                                    href={resumeData.projects[selectedProject].playStore}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-6 py-3 rounded-[2px] bg-[var(--accent)] text-white font-bold hover:opacity-90 transition-all flex items-center gap-3 text-sm"
                                                >
                                                    {t('playStore')} <ArrowUpRight className="w-4 h-4" />
                                                </a>
                                            )}
                                            {resumeData.projects[selectedProject].website && (
                                                <a 
                                                    href={resumeData.projects[selectedProject].website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-6 py-3 rounded-[2px] bg-[var(--accent)] text-white font-bold hover:opacity-90 transition-all flex items-center gap-3 text-sm"
                                                >
                                                    {t('viewProject')} <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                            {resumeData.projects[selectedProject].github && (
                                                <a 
                                                    href={resumeData.projects[selectedProject].github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-6 py-3 rounded-[2px] border border-[var(--border)] hover:bg-white/5 transition-colors flex items-center gap-3 text-foreground text-sm"
                                                >
                                                    {t('viewCode')} <GithubIcon className="w-4 h-4" />
                                                </a>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
