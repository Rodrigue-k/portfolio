// Scroll recordings shown in the work gallery. Each slug has desktop and mobile
// clips in /assets/gallery/<slug>-<format>.{webm,mp4} plus a -poster.jpg.
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

export const galleryNames: Record<GallerySlug, string> = {
  malfakassa: "Malfakassa",
  kazilink: "KaziLink",
  isha: "ISHA Agency",
  ambassadrice: "Ambassadrice",
  corafric: "Corafric",
  tavalo: "Tavalo",
  kod8: "KOD8",
};
