import { getLocale, getTranslations } from "next-intl/server";
import { galleryMeta, galleryProjects } from "@/core/data/gallery";
import { Container, Section } from "@/presentation/components/ui/Layout";
import { GalleryPin, GalleryProject, WorkGallery } from "@/presentation/components/WorkGallery";

export async function Work() {
  const t = await getTranslations("Work"), locale = await getLocale();
  // Each project's desktop and mobile clips follow each other; the order flips
  // every other project so the columns start staggered.
  const pins: GalleryPin[] = galleryProjects.flatMap((slug, i) =>
    (i % 2 ? (["mobile", "desktop"] as const) : (["desktop", "mobile"] as const)).map((format) => ({ slug, format })));
  const projects = Object.fromEntries(galleryProjects.map((slug): [string, GalleryProject] => {
    const { name, tags, website } = galleryMeta[slug];
    const alt = (format: "desktop" | "mobile") => t("alt", { name, format: t(`formats.${format}`) });
    return [slug, { name, tags, website, kind: t(`kinds.${slug}`), description: t(`descriptions.${slug}`), alt: { desktop: alt("desktop"), mobile: alt("mobile") } }];
  }));
  return <Section id="work" className="py-20 md:py-28"><Container><p className="section-label text-xs uppercase tracking-widest">{t("label")}</p><h2 className="mt-3 text-4xl font-semibold">{t("title")}</h2><p className="mt-4 max-w-2xl text-muted">{t("subtitle")}</p><div className="mt-12"><WorkGallery featured={galleryProjects[0]} pins={pins} projects={projects} labels={{ open: t("open"), close: t("close"), visit: t("visit") }}/></div><a className="project-link mt-10 inline-flex border-b border-current pb-2 text-sm font-semibold" href={`/${locale}/projects`}>{t("viewAll")} <span aria-hidden="true" className="ml-3">→</span></a></Container></Section>;
}
