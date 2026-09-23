"use client";

import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const portraitY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : 42]);

  return (
    <Section id="about" className="flex min-h-svh items-center pb-8 pt-28 md:pb-16 md:pt-32">
      <Container className="w-full">
        <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(360px,.85fr)] md:gap-10 lg:gap-14 xl:grid-cols-[minmax(0,1.08fr)_520px] xl:gap-20">
          <div className="max-w-[700px] md:py-8">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
              className="font-display text-[clamp(2.35rem,4.1vw,4.6rem)] font-semibold leading-[1.04] tracking-[-.045em]"
            >
              {[t("headline.line1"), t("headline.line2")].map((line) => (
                <motion.span
                  key={line}
                  variants={{
                    hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base leading-7 text-muted md:mt-7"
            >
              {t("description")}
            </motion.p>
            <motion.a
              href={`mailto:${resumeData.profile.contact.email}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ delay: 0.48, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:opacity-90 md:mt-8"
            >
              {t("actions.contact")}
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: portraitY }}
            className="relative mx-auto translate-y-6 aspect-[4/5] w-[min(76vw,285px)] overflow-visible sm:w-[min(64vw,340px)] md:mt-0 md:w-full md:max-w-[500px] md:translate-y-0 md:justify-self-end xl:max-w-[540px]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-4 bottom-6 top-8 rounded-[45%_55%_48%_52%/34%_38%_62%_66%] bg-[var(--text)]/[0.055] ring-1 ring-[var(--text)]/10 md:inset-x-7 md:bottom-8 md:top-10"
            />
            <Image
              src="/images/komi-speaking-portrait-v1.webp"
              alt={t("portraitAlt")}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-contain object-bottom"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
