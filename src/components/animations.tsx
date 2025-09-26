'use client';

import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export const AnimatedCard = ({ children, className = '', index = 0 }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const FadeIn = ({ children, className = '', delay = 0, direction = 'up' }: FadeInProps) => {
  const getDirectionVariant = () => {
    const directions = {
      up: { y: 30 },
      down: { y: -30 },
      left: { x: 30 },
      right: { x: -30 }
    };

    return {
      hidden: { opacity: 0, ...directions[direction] },
      visible: { opacity: 1, x: 0, y: 0 }
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, amount: 0.3 }}
      variants={getDirectionVariant()}
      className={className}
    >
      {children}
    </motion.div>
  );
};
