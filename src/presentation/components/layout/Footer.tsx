"use client";

import { resumeData } from "@/core/data/resume";
import { Container } from "../../components/ui/Layout";
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export function Footer() {
    const t = useTranslations('Footer');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-[var(--bg-2)] border-t border-[var(--border)] relative z-10 w-full">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
                <div className="font-mono text-[10px] text-[var(--text-muted)] order-3 md:order-1">
                    © {currentYear} {resumeData.profile.name}
                </div>
                
                <div className="font-mono text-[11px] text-[var(--text-muted)] order-2 text-center">
                    {t('builtBy')}
                </div>

                <div className="flex items-center gap-4 order-1 md:order-3">
                    <a href={resumeData.profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                        <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a href={resumeData.profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                        <GithubIcon className="w-4 h-4" />
                    </a>
                    <a href={`mailto:${resumeData.profile.contact.email}`} className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                        <Mail className="w-4 h-4" />
                    </a>
                </div>
            </Container>
        </footer>
    );
}
