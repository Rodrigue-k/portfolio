"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function ScrollAtmosphere() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "18%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 5]);
  const pathLength = useTransform(scrollYProgress, [0, 0.75], [0.22, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.86, 1], [0.35, 0.18, 0.18, 0.08]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block">
      <motion.svg
        viewBox="0 0 220 720"
        fill="none"
        className="absolute right-[-1.5rem] top-[12vh] h-[74vh] w-[220px] text-[var(--text)]"
        style={reduceMotion ? { opacity: 0.14 } : { y, rotate, opacity }}
      >
        <motion.path
          d="M126 28C84 74 76 123 103 176C137 241 121 287 76 330C33 371 42 427 96 462C165 506 174 577 112 672"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={reduceMotion ? undefined : { pathLength }}
        />
        <motion.path
          d="M151 83C125 122 126 158 153 191C189 236 188 284 153 322"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
          style={reduceMotion ? undefined : { pathLength }}
        />
        <motion.path
          d="M66 397C102 397 130 414 149 449C172 492 164 535 124 579"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
          style={reduceMotion ? undefined : { pathLength }}
        />
      </motion.svg>
    </div>
  );
}
