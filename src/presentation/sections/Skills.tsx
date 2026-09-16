import { Container, Section } from "@/presentation/components/ui/Layout";

const groups = [
  ["Commercial", ["Prospection terrain", "Négociation tarifaire", "Gestion des objections", "Vente de solutions récurrentes"]],
  ["Digital", ["Publicité payante (Meta Ads)", "Notions SEO", "Tunnels de conversion", "Gestion de projet"]],
  ["Technique", ["Flutter", "Dart", "Next.js", "Firebase", "Supabase", "Python", "C#"]],
];

export function Skills() {
  return <Section id="skills" className="py-20 md:py-28"><Container>
    <p className="section-label text-[10px] uppercase tracking-[.2em] text-muted">À mon sujet</p>
    <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">Skills.</h2>
    <div className="mt-9 grid gap-8 md:grid-cols-3">{groups.map(([heading, items]) => <div key={heading as string} className="border-t border-card-border pt-4"><h3 className="font-display text-lg font-semibold">{heading as string}</h3><ul className="mt-4 space-y-3 text-sm text-muted">{(items as string[]).map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
  </Container></Section>;
}
