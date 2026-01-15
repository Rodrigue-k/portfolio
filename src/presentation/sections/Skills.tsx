"use client";

import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion } from "framer-motion";

export function Skills() {
    const categories = [
        { title: "Mobile Development", skills: resumeData.skills.mobile },
        { title: "Programming Languages", skills: resumeData.skills.languages },
        { title: "Other Skills", skills: resumeData.skills.other },
    ];

    return (
        <Section id="skills" className="bg-card-bg/20">
            <Container>
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Technical Expertise</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Specialized in high-performance mobile applications and interactive digital experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {categories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="glass p-8 rounded-2xl space-y-6 hover:border-muted-foreground/30 transition-colors"
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-3 py-1 rounded-md bg-white/5 text-sm font-medium text-muted-foreground border border-white/5"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
