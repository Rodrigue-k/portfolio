"use client";

import { resumeData } from "@/core/data/resume";
import { Container } from "../../components/ui/Layout";
import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations('Footer');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-black border-t border-white/5">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>© {currentYear} {resumeData.profile.name}. {t('rights')}</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-foreground transition-colors">{t('links.privacy')}</a>
                    <a href="#" className="hover:text-foreground transition-colors">{t('links.terms')}</a>
                    <a href="#" className="hover:text-foreground transition-colors">{t('links.sitemap')}</a>
                </div>
            </Container>
        </footer>
    );
}
