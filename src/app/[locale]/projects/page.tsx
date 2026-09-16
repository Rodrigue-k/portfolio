import { Header } from "@/presentation/components/layout/Header";
import { Footer } from "@/presentation/components/layout/Footer";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { resumeData } from "@/core/data/resume";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

const businessProjects = [
  { name: "Cahier Boulanger", client: "Boulangerie", need: "Suivre l’activité et organiser la gestion quotidienne d’une boulangerie.", solution: "Un logiciel de gestion conçu pour les besoins métier d’une boulangerie.", result: "Solution développée pour structurer les opérations de l’établissement.", image: "[SCREENSHOT_CAHIER_BOULANGER]" },
  { name: "Cahier Opticien", client: "Eye Fashion Wear", need: "Disposer d’un outil adapté à la gestion d’une lunetterie.", solution: "Un logiciel de gestion conçu pour Eye Fashion Wear et son activité d’opticien.", result: "Solution métier dédiée à la gestion de la lunetterie.", image: "[SCREENSHOT_CAHIER_OPTICIEN]" },
  { name: "Dashboard de suivi commercial", client: "B Pilot SARL", need: "Donner à l’équipe commerciale un outil interne pour suivre son activité.", solution: "Un tableau de bord de suivi commercial, de type CRM, développé pour l’équipe.", result: "Outil interne de suivi conçu autour des besoins de l’équipe commerciale.", image: "[SCREENSHOT_DASHBOARD_COMMERCIAL]" },
];

export function generateStaticParams() { return routing.locales.map((locale) => ({ locale })); }

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <main className="min-h-screen bg-background text-foreground"><Header/><Section className="pt-32"><Container>
    <p className="section-label text-[10px] uppercase tracking-[.2em] text-muted">Sélection de projets</p><h1 className="mt-3 font-display text-5xl font-semibold tracking-tight">Projets</h1>
    <section className="mt-16"><p className="section-label text-[10px] uppercase tracking-[.2em] text-muted">Études de cas</p><h2 className="mt-2 font-display text-3xl font-semibold">Solutions métier pour entreprises</h2><div className="mt-8 space-y-6">{businessProjects.map(project=><article key={project.name} className="grid overflow-hidden border border-card-border bg-card-bg md:grid-cols-[260px_1fr]"><div className="flex min-h-48 items-center justify-center bg-[#e9e9e6] p-6 text-center font-mono text-xs text-muted">{project.image}</div><div className="p-6 md:p-8"><p className="text-xs uppercase tracking-widest text-muted">{project.client}</p><h3 className="mt-2 font-display text-2xl font-semibold">{project.name}</h3><dl className="mt-5 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-3"><div><dt className="font-semibold">Besoin</dt><dd className="mt-1 leading-6 text-muted">{project.need}</dd></div><div><dt className="font-semibold">Solution</dt><dd className="mt-1 leading-6 text-muted">{project.solution}</dd></div><div><dt className="font-semibold">Résultat</dt><dd className="mt-1 leading-6 text-muted">{project.result}</dd></div></dl></div></article>)}</div></section>
    <section className="mt-20"><p className="section-label text-[10px] uppercase tracking-[.2em] text-muted">Applications &amp; produits</p><h2 className="mt-2 font-display text-3xl font-semibold">Applications produits</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{resumeData.projects.map((project,index)=><article key={project.title} className="overflow-hidden border border-card-border bg-card-bg"><div className="aspect-[16/10] bg-[#ececea]">{project.image ? <img src={project.image} alt={`Capture d’écran de ${project.title}`} className="h-full w-full object-cover"/> : <div className="flex h-full items-center justify-center font-mono text-xs text-muted">[SCREENSHOT_{project.title.toUpperCase().replace(/[^A-Z0-9]+/g,"_")}]</div>}</div><div className="p-5"><div className="flex flex-wrap gap-2">{project.tags?.map(tag=><span key={tag} className="rounded-full border border-card-border px-2.5 py-1 font-mono text-[10px] text-muted">{tag}</span>)}</div><h3 className="mt-4 font-display text-xl font-semibold">{project.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{project.description}</p></div></article>)}</div></section>
  </Container></Section><Footer/></main>;
}
