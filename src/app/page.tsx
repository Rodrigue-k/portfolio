"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        const preferredLang = navigator.language?.startsWith('fr') ? 'fr' : 'en';
        router.replace(`/${preferredLang}`);
    }, [router]);

    return (
        <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center text-[var(--text-muted)] font-mono text-sm">
            Redirecting...
        </div>
    );
}
