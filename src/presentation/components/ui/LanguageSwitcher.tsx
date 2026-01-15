"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

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
                "px-2 py-1 rounded text-xs font-bold uppercase transition-colors",
                "bg-transparent hover:bg-muted text-muted-foreground hover:text-foreground",
                isPending && "opacity-50"
            )}
            aria-label="Toggle Language"
        >
            {locale === "en" ? "FR" : "EN"}
        </button>
    );
}
