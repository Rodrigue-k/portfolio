import { Header } from "@/presentation/components/layout/Header";
import { Footer } from "@/presentation/components/layout/Footer";
import { Hero } from "@/presentation/sections/Hero";
import { Skills } from "@/presentation/sections/Skills";
import { Experience } from "@/presentation/sections/Experience";
import { Contact } from "@/presentation/sections/Contact";
import { ScrollAtmosphere } from "@/presentation/components/motion/ScrollAtmosphere";
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen text-foreground selection:bg-white selection:text-black">
      <ScrollAtmosphere />
      <div className="relative z-10 w-full h-full">
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
