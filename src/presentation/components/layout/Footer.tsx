"use client";

import { resumeData } from "@/core/data/resume";
import { Container } from "../../components/ui/Layout";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-black border-t border-white/5">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>© {currentYear} {resumeData.profile.name}. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                    <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                    <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
                </div>
            </Container>
        </footer>
    );
}
