import { Container, Section } from "@/presentation/components/ui/Layout";
import { getTranslations } from "next-intl/server";

type TimelineItem = [string, string, string];

export async function Experience() {
  const t = await getTranslations("Experience");
  const experience = t.raw("resumeItems") as TimelineItem[];
  const education = t.raw("educationItems") as TimelineItem[];

  return (
    <Section id="experience" className="py-20 md:py-28">
      <Container>
        <p className="section-label text-[10px] uppercase tracking-[.2em] text-muted">{t("eyebrow")}</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">{t("title")}</h2>
        <div className="mt-10 grid gap-14 md:grid-cols-2">
          <div><h3 className="mb-5 font-display text-xl font-semibold">{t("experienceTitle")}</h3><div className="divide-y divide-card-border border-y border-card-border">{experience.map(([company, role, period]) => <article key={company} className="flex items-start justify-between gap-4 py-4"><div><h4 className="text-sm font-semibold">{company}</h4><p className="mt-1 text-sm text-muted">{role}</p></div><span className="shrink-0 rounded border border-card-border px-2 py-1 text-right text-[10px] text-muted">{period}</span></article>)}</div></div>
          <div><h3 className="mb-5 font-display text-xl font-semibold">{t("educationTitle")}</h3><div className="divide-y divide-card-border border-y border-card-border">{education.map(([degree, school, period]) => <article key={degree} className="flex items-start justify-between gap-4 py-4"><div><h4 className="text-sm font-semibold">{degree}</h4>{school && <p className="mt-1 text-sm text-muted">{school}</p>}</div><span className="shrink-0 rounded border border-card-border px-2 py-1 text-right text-[10px] text-muted">{period}</span></article>)}</div></div>
        </div>
      </Container>
    </Section>
  );
}
