import { Container, Section } from "@/presentation/components/ui/Layout";
import { getTranslations } from "next-intl/server";

type TimelineItem = {company: string; role: string; period: string; achievements: string[]};

export async function Experience() {
  const t = await getTranslations("Experience");
  const experience = t.raw("resumeItems") as TimelineItem[];

  return (
    <Section id="experience" className="py-20 md:py-28">
      <Container>
        <p className="section-label text-[10px] uppercase tracking-[.2em] text-muted">{t("eyebrow")}</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">{t("title")}</h2>
        <div className="mt-10 divide-y divide-card-border border-y border-card-border">
          {experience.map(({company, role, period, achievements}) => <article key={company} className="grid gap-6 py-8 md:grid-cols-[1fr_1.5fr]"><div><h3 className="text-xl font-semibold">{role}</h3><p className="mt-2 text-sm">{company}</p><p className="mt-3 font-mono text-xs leading-6 text-muted">{period}</p></div><ul className="space-y-3 text-sm leading-7 text-muted">{achievements.map(line => <li key={line}>{line}</li>)}</ul></article>)}
        </div>
      </Container>
    </Section>
  );
}
