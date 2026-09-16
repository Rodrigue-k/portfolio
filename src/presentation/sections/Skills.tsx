"use client";

import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

type SkillGroup = {
  title: string;
  items: string[];
};

export function Skills() {
  const t = useTranslations("Skills");
  const reduceMotion = useReducedMotion();
  const groups = ["commercial", "digital", "technical"].map((key) =>
    t.raw(`categories.${key}`)
  ) as SkillGroup[];

  return (
    <Section id="skills" className="py-20 md:py-28">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="section-label text-[10px] uppercase tracking-[.2em] text-muted"
        >
          {t("eyebrow")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-3 font-display text-4xl font-semibold tracking-tight"
        >
          {t("title")}
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-9 grid gap-8 md:grid-cols-3"
        >
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group border-t border-card-border pt-4"
            >
              <div className="mb-4 h-px w-0 bg-[var(--accent)] transition-all duration-700 group-hover:w-full" />
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item} className="transition-colors duration-300 group-hover:text-foreground">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
