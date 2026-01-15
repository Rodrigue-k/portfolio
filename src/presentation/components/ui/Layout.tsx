import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
            {children}
        </div>
    );
}

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 md:py-32", className)}>
            {children}
        </section>
    );
}
