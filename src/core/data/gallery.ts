// Scroll recordings shown in the work gallery. Each slug has desktop and mobile
// clips in /assets/gallery/<slug>-<format>.{webm,mp4} plus a -poster.jpg, and a
// larger <slug>-<format>-hd version loaded only in the detail view.
export const galleryProjects = [
  "malfakassa",
  "kazilink",
  "isha",
  "ambassadrice",
  "corafric",
  "tavalo",
  "kod8",
] as const;

export type GallerySlug = (typeof galleryProjects)[number];

// website is set only for sites that are online today.
export const galleryMeta: Record<GallerySlug, { name: string; tags: string[]; website?: string }> = {
  malfakassa: { name: "Malfakassa", tags: ["Next.js", "GSAP", "WhatsApp"] },
  kazilink: { name: "KaziLink", tags: ["Next.js", "Flutter", "Prisma", "API"], website: "https://getkazilink.com/" },
  isha: { name: "ISHA Agency", tags: ["Next.js", "Motion design", "DTC"] },
  ambassadrice: { name: "Ambassadrice", tags: ["Next.js", "Site vitrine"] },
  corafric: { name: "Corafric", tags: ["Next.js", "IA", "Voix"], website: "https://corafric.com/" },
  tavalo: { name: "Tavalo", tags: ["Next.js", "Fintech", "Marketplace"] },
  kod8: { name: "KOD8", tags: ["Web app", "Python", "Formation"], website: "https://kod8.rodriguekoudakpo.com/" },
};
