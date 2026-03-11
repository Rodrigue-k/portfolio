import { motion } from "framer-motion";

interface SectionHeaderProps {
    number: string;
    title: string;
    centeredMobile?: boolean;
}

export function SectionHeader({ number, title, centeredMobile = false }: SectionHeaderProps) {
    return (
        <div className="mb-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`font-mono text-[11px] tracking-[3px] text-[var(--accent)] mb-4 uppercase ${centeredMobile ? 'text-center md:text-left' : ''}`}
            >
                {number}. {title}
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={`font-display text-4xl md:text-5xl font-bold text-[var(--text)] ${centeredMobile ? 'text-center md:text-left' : ''}`}
            >
                {title}
            </motion.h2>

            <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className={`flex w-full origin-left mt-8 ${centeredMobile ? 'justify-center md:justify-start' : ''}`}
            >
                <div className="h-[1px] w-[60px] bg-[var(--accent)] shrink-0" />
                <div className="h-[1px] flex-grow bg-[var(--border)] max-w-[200px] md:max-w-none" />
            </motion.div>
        </div>
    );
}
