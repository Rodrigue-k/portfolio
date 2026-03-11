import { Header } from "@/presentation/components/layout/Header";
import { Footer } from "@/presentation/components/layout/Footer";
import { Hero } from "@/presentation/sections/Hero";
import { Skills } from "@/presentation/sections/Skills";
import { Experience } from "@/presentation/sections/Experience";
import { Projects } from "@/presentation/sections/Projects";
import { Contact } from "@/presentation/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground selection:bg-white selection:text-black">
      {/* Animated Fixed Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: 'var(--bg)',
          backgroundImage: `
            radial-gradient(circle 600px at top right, rgba(193, 68, 14, 0.03), transparent),
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px'
        }}
      />

      <div className="relative z-10 w-full h-full">
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
