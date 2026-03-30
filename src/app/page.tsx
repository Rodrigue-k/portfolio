"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/en');
    }, [router]);

    return (
        <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center text-[var(--text-muted)] font-mono text-sm">
            Redirecting...
        </div>
    );
}
