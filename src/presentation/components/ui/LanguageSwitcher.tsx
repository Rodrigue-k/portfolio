"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "fr" : "en";
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            disabled={isPending}
            className={cn(
                "flex items-center gap-1.5 px-1 py-1 transition-colors group",
                "bg-transparent text-[var(--text-muted)] hover:text-[var(--accent)]",
                isPending && "opacity-50 pointer-events-none"
            )}
            aria-label="Toggle Language"
        >
            <Globe className="w-4 h-4 transition-colors group-hover:text-[var(--accent)]" />
            <span className="font-mono text-[11px] uppercase tracking-wider">
                {locale}
            </span>
        </button>
    );
}
