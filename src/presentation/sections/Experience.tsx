import { Container, Section } from "@/presentation/components/ui/Layout";

const experience = [
  ["B Pilot SARL", "Commercial terrain (Budget Pilot)", "Depuis juin 2026"],
  ["Darollo Technologies Corporation (DTC)", "Associé & Développeur produit", "Depuis janvier 2025"],
  ["Evee Engineering", "Développeur mobile freelance", "Octobre 2025 – Mars 2026"],
  ["CAGECFI SA", "Opérateur de saisie et contrôle qualité", "Mars – Juin 2025"],
];
const education = [
  ["Baccalauréat", "", "2021"],
  ["Licence Gestion de Projet Digital", "ESCEN", "En cours (L2)"],
  ["Licence Mathématiques", "", "Reprise en cours"],
];

export function Experience() {
  return (
    <Section id="experience" className="py-20 md:py-28">
      <Container>
        <p className="section-label text-[10px] uppercase tracking-[.2em] text-muted">Expérience &amp; éducation</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">My Resume</h2>
        <div className="mt-10 grid gap-14 md:grid-cols-2">
          <div><h3 className="mb-5 font-display text-xl font-semibold">Experience</h3><div className="divide-y divide-card-border border-y border-card-border">{experience.map(([company, role, period]) => <article key={company} className="flex items-start justify-between gap-4 py-4"><div><h4 className="text-sm font-semibold">{company}</h4><p className="mt-1 text-sm text-muted">{role}</p></div><span className="shrink-0 rounded border border-card-border px-2 py-1 text-right text-[10px] text-muted">{period}</span></article>)}</div></div>
          <div><h3 className="mb-5 font-display text-xl font-semibold">Education</h3><div className="divide-y divide-card-border border-y border-card-border">{education.map(([degree, school, period]) => <article key={degree} className="flex items-start justify-between gap-4 py-4"><div><h4 className="text-sm font-semibold">{degree}</h4>{school && <p className="mt-1 text-sm text-muted">{school}</p>}</div><span className="shrink-0 rounded border border-card-border px-2 py-1 text-right text-[10px] text-muted">{period}</span></article>)}</div></div>
        </div>
      </Container>
    </Section>
  );
}
