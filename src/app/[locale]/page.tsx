import { Header } from "@/presentation/components/layout/Header";
import { Footer } from "@/presentation/components/layout/Footer";
import { Hero } from "@/presentation/sections/Hero";
import { Skills } from "@/presentation/sections/Skills";
import { Experience } from "@/presentation/sections/Experience";
import { Projects } from "@/presentation/sections/Projects";
import { Contact } from "@/presentation/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
