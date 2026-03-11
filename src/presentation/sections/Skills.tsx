"use client";

import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/presentation/components/ui/SectionHeader";

const mobileSkills = [
    { name: "Flutter", level: 90 },
    { name: "Dart", level: 85 },
    { name: "Firebase", level: 75 },
    { name: "Supabase", level: 70 },
    { name: "Android", level: 80 },
    { name: "iOS", level: 65 },
];

const languageSkills = [
    { name: "Python", level: 75 },
    { name: "C#", level: 60 },
    { name: "Java", level: 65 },
    { name: "JavaScript", level: 70 },
    { name: "TypeScript", level: 65 },
];

const otherSkills = [
    { name: "Next.js", level: 70 },
    { name: "Git", level: 80 },
    { name: "Figma", level: 60 },
    { name: "Unity", level: 55 },
    { name: "Blender", level: 50 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
    <div className="flex items-center gap-4 w-full group">
        <span className="font-mono text-[12px] text-foreground w-[120px] shrink-0 transition-colors group-hover:text-[var(--accent)]">
            {name}
        </span>
        <div className="flex-1 h-[2px] bg-[rgba(255,255,255,0.08)] relative overflow-hidden">
            <motion.div 
                className="absolute top-0 left-0 h-full bg-[var(--accent)]"
                initial={{ width: "0%" }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut", delay }}
                viewport={{ once: true }}
            />
        </div>
    </div>
);

export function Skills() {
    const t = useTranslations('Skills');

    return (
        <Section id="skills" className="bg-card-bg/20">
            <Container>
                <div className="space-y-16">
                    <SectionHeader number="01" title={t('title')} />

                    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                        {/* Left Column: Mobile & Languages */}
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <h4 className="font-mono text-[var(--accent)] text-[10px] tracking-widest uppercase">
                                    {t('categories.mobile')}
                                </h4>
                                <div className="space-y-5">
                                    {mobileSkills.map((skill, idx) => (
                                        <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={idx * 0.05} />
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="font-mono text-[var(--accent)] text-[10px] tracking-widest uppercase">
                                    {t('categories.languages')}
                                </h4>
                                <div className="space-y-5">
                                    {languageSkills.map((skill, idx) => (
                                        <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={(mobileSkills.length + idx) * 0.05} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Tools & Other */}
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <h4 className="font-mono text-[var(--accent)] text-[10px] tracking-widest uppercase">
                                    {t('categories.other')}
                                </h4>
                                <div className="space-y-5">
                                    {otherSkills.map((skill, idx) => (
                                        <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={idx * 0.05} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
