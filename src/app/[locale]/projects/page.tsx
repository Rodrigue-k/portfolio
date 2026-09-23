import type { Metadata } from "next";
import { Header } from "@/presentation/components/layout/Header";
import { Footer } from "@/presentation/components/layout/Footer";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { resumeData } from "@/core/data/resume";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

const businessProjectMeta = [
  { image: "/assets/projects/cahier-boulanger-dashboard.webp" },
  { image: "/assets/projects/cahier-opticien-dashboard.webp" },
  { image: "/assets/projects/ciforms-dashboard.webp", link: "https://ciforms-web.woez-app.com/" },
];

const productPresentationMeta = [
  { color: "#c02f7c" },
  { color: "#8c6a35" },
  { color: "#4664c8" },
  { color: "#2f7b65" },
  { color: "#f05b35" },
  { color: "#2567d8" },
  { color: "#20231f" },
  { color: "#d74838" },
];

type ProjectTranslator = {
  (key: string, values?: Record<string, string | number>): string;
  has(key: string): boolean;
  raw(key: string): unknown;
};

function getProjectLinks(
  project: (typeof resumeData.projects)[number],
  t: ProjectTranslator
) {
  return [
    project.website && { label: t("viewProject"), url: project.website },
    project.playStore && { label: t("playStore"), url: project.playStore },
    project.appStore && { label: t("appStore"), url: project.appStore },
    project.github && { label: t("viewCode"), url: project.github },
  ].filter(Boolean) as Array<{ label: string; url: string }>;
}

function isWebProject(project: (typeof resumeData.projects)[number]) {
  return project.tags.some((tag) => ["Next.js", "Site web", "Site vitrine", "Web app", "SaaS"].includes(tag));
}

function ProjectCard({
  project,
  index,
  originalIndex,
  t,
}: {
  project: (typeof resumeData.projects)[number];
  index: number;
  originalIndex: number;
  t: ProjectTranslator;
}) {
  const presentation = productPresentationMeta[index % productPresentationMeta.length];
  const projectLinks = getProjectLinks(project, t);
  const webProject = isWebProject(project);

  const title = t.has(`items.item${originalIndex}.title`)
    ? t(`items.item${originalIndex}.title`)
    : project.title;

  const description = t.has(`items.item${originalIndex}.description`)
    ? t(`items.item${originalIndex}.description`)
    : project.description;

  const presentationLabels = t.raw("page.presentationLabels") as string[];
  const presentationLabel = presentationLabels[index % presentationLabels.length] || "";

  const screenshotAlt = t("page.projectScreenshotAlt", { title });

  return (
    <article className="overflow-hidden border border-card-border bg-card-bg">
      <div className="relative aspect-[16/11] overflow-hidden bg-[#f5f3ef]">
        {project.image ? (
          webProject ? (
            <div className="relative flex h-full items-center justify-center p-5">
              <div className="pointer-events-none absolute -left-12 top-10 size-40 rounded-full bg-[#c0461c]/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-14 -right-10 size-44 rounded-full bg-[#263b32]/10 blur-2xl" />
              <div className="relative w-full overflow-hidden rounded-[6px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(32,35,31,.16)]">
                <div className="flex h-6 items-center gap-1.5 border-b border-black/10 bg-[#f8f6f3] px-3">
                  <span className="size-1.5 rounded-full bg-[#d25b35]" />
                  <span className="size-1.5 rounded-full bg-[#d2a05d]" />
                  <span className="size-1.5 rounded-full bg-[#6f8f75]" />
                </div>
                <img src={project.image} alt={screenshotAlt} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover object-top" />
              </div>
            </div>
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(32,35,31,.09),transparent_38%)]" />
              <div className="absolute left-6 top-1/2 z-10 max-w-[42%] -translate-y-1/2">
                <p className="font-display text-2xl font-semibold leading-none tracking-[-.04em] sm:text-3xl" style={{ color: presentation.color }}>{title}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[.18em] text-muted">{presentationLabel}</p>
              </div>
              <div className="pointer-events-none absolute bottom-7 right-5 h-8 w-[58%] rounded-full bg-black/16 blur-2xl" />
              <div className="absolute inset-y-5 right-3 flex w-[68%] items-center justify-end">
                <img src={project.image} alt={screenshotAlt} loading="lazy" decoding="async" className="h-full w-full object-contain object-right drop-shadow-[0_20px_30px_rgba(32,35,31,.22)]" />
              </div>
            </>
          )
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-xs text-muted">[SCREENSHOT_{title.toUpperCase().replace(/[^A-Z0-9]+/g, "_")}]</div>
        )}
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => {
            const tagKey = tag.replace(/\./g, '_');
            return (
              <span key={tag} className="rounded-full border border-card-border px-2.5 py-1 font-mono text-[10px] text-muted">
                {t.has(`tags.${tagKey}`) ? t(`tags.${tagKey}`) : tag}
              </span>
            );
          })}
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
        {project.associatedCompany && <p className="mt-1 text-xs uppercase tracking-[.16em] text-muted">{project.associatedCompany}</p>}
        <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        {projectLinks.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {projectLinks.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer" style={{ color: "#fff" }} className="inline-flex items-center rounded-full bg-[var(--text)] px-3.5 py-2 text-xs font-semibold tracking-normal transition-transform hover:scale-[1.02]">
                {link.label} <span aria-hidden="true" className="ml-1">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function generateStaticParams() { return routing.locales.map((locale) => ({ locale })); }

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  const title = isFr
    ? "Projets & Réalisations — Applications Mobiles & Web"
    : "Projects & Portfolio — Mobile Apps & Web Platforms";

  const description = isFr
    ? "Découvrez les projets conçus et déployés par Komi Rodrigue Koudakpo : Grand Voyageur, Cherish, Ticketto, EcoMap, Miabé Hackathon, Corafric, Tavalo."
    : "Explore apps and digital products engineered by Komi Rodrigue Koudakpo: Grand Voyageur, Cherish, Ticketto, EcoMap, Miabé Hackathon, Corafric, Tavalo.";

  const canonicalUrl = `https://rodriguekoudakpo.com/${locale}/projects`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: "https://rodriguekoudakpo.com/fr/projects",
        en: "https://rodriguekoudakpo.com/en/projects",
        "x-default": "https://rodriguekoudakpo.com/fr/projects"
      }
    },
    openGraph: {
      title: `${title} · Komi Rodrigue Koudakpo`,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · Komi Rodrigue Koudakpo`,
      description,
      images: ["/og-image.png"]
    }
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Projects");

  const projectsWithIndices = resumeData.projects.map((project, originalIndex) => ({
    project,
    originalIndex
  }));

  const mobileProjects = projectsWithIndices.filter(({ project }) => !isWebProject(project));
  const webProjects = projectsWithIndices.filter(({ project }) => isWebProject(project));

  const businessProjectsData = t.raw("page.businessProjects") as Array<{
    name: string;
    client: string;
    need: string;
    solution: string;
    result: string;
  }>;

  const businessProjects = businessProjectsData.map((item, idx) => ({
    ...item,
    ...businessProjectMeta[idx]
  }));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Section className="pt-40 md:pt-48">
        <Container>
          <p className="section-label text-[10px] uppercase tracking-[.2em] text-muted">{t("page.eyebrow")}</p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight">{t("page.title")}</h1>

          <section className="mt-16">
            <p className="section-label text-[10px] uppercase tracking-[.2em] text-muted">{t("page.caseStudiesEyebrow")}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">{t("page.caseStudiesTitle")}</h2>
            <div className="mt-8 space-y-6">
              {businessProjects.map((project) => (
                <article key={project.name} className="grid overflow-hidden border border-card-border bg-card-bg lg:grid-cols-[430px_1fr]">
                  <div className="flex min-h-64 items-center justify-center bg-[#f2eee9] p-5 text-center font-mono text-xs text-muted">
                    {project.image.startsWith("/") ? (
                      <div className="relative w-full overflow-hidden rounded-[6px] border border-black/10 bg-[#ede6df] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.55)]">
                        <div className="pointer-events-none absolute -left-16 -top-16 size-40 rounded-full bg-[#c0461c]/10 blur-2xl" />
                        <div className="pointer-events-none absolute -bottom-20 -right-16 size-44 rounded-full bg-[#263b32]/10 blur-2xl" />
                        <div className="relative overflow-hidden rounded-[5px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(32,35,31,.18)]">
                          <div className="flex h-7 items-center gap-1.5 border-b border-black/10 bg-[#f8f6f3] px-3">
                            <span className="size-2 rounded-full bg-[#d25b35]" />
                            <span className="size-2 rounded-full bg-[#d2a05d]" />
                            <span className="size-2 rounded-full bg-[#6f8f75]" />
                          </div>
                          <img src={project.image} alt={t("page.dashboardScreenshotAlt", { title: project.name })} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover object-left-top" />
                        </div>
                      </div>
                    ) : (
                      project.image
                    )}
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-xs uppercase tracking-widest text-muted">{project.client}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{project.name}</h3>
                    <dl className="mt-5 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-3">
                      <div>
                        <dt className="font-semibold">{t("page.need")}</dt>
                        <dd className="mt-1 leading-6 text-muted">{project.need}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">{t("page.solution")}</dt>
                        <dd className="mt-1 leading-6 text-muted">{project.solution}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">{t("page.result")}</dt>
                        <dd className="mt-1 leading-6 text-muted">{project.result}</dd>
                      </div>
                    </dl>
                    {"link" in project && project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" style={{ color: "#fff" }} className="mt-6 inline-flex items-center rounded-full bg-[var(--text)] px-4 py-2 text-xs font-semibold transition-transform hover:scale-[1.02]">
                        {t("page.viewProject")} <span aria-hidden="true" className="ml-1">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <p className="section-label text-[10px] uppercase tracking-[.2em] text-muted">{t("page.mobileEyebrow")}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">{t("page.mobileTitle")}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {mobileProjects.map(({ project, originalIndex }, index) => (
                <ProjectCard key={project.title} project={project} index={index} originalIndex={originalIndex} t={t} />
              ))}
            </div>
          </section>

          <section className="mt-20">
            <p className="section-label text-[10px] uppercase tracking-[.2em] text-muted">{t("page.webEyebrow")}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">{t("page.webTitle")}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {webProjects.map(({ project, originalIndex }, index) => (
                <ProjectCard key={project.title} project={project} index={index} originalIndex={originalIndex} t={t} />
              ))}
            </div>
          </section>
        </Container>
      </Section>
      <Footer />
    </main>
  );
}
