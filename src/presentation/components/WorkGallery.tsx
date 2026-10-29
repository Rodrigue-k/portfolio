"use client";

import { useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type GalleryFormat = "desktop" | "mobile";
export type GalleryPin = { slug: string; format: GalleryFormat };
export type GalleryProject = {
  name: string; kind: string; description: string; tags: string[]; website?: string;
  alt: Record<GalleryFormat, string>;
};
export type GalleryLabels = { open: string; close: string; visit: string };

// Height / width of each recording, used to balance the columns.
const ratio = { desktop: 600 / 960, mobile: 1168 / 540 };

function columnsFor(width: number) {
  return width >= 900 ? 3 : 2;
}

// Pinterest-style masonry: each tile drops into the currently shortest column.
function distribute(pins: GalleryPin[], count: number) {
  const cols: GalleryPin[][] = Array.from({ length: count }, () => []);
  const heights = new Array(count).fill(0);
  for (const pin of pins) {
    const i = heights.indexOf(Math.min(...heights));
    cols[i].push(pin);
    heights[i] += ratio[pin.format] + 0.08;
  }
  return cols;
}

function Clip({ base, alt, still, eager }: { base: string; alt: string; still: boolean; eager?: boolean }) {
  const poster = `${base.replace(/-hd$/, "")}-poster.jpg`;
  if (still) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt={alt} loading="lazy" />;
  }
  return (
    <video muted loop playsInline autoPlay={eager} preload={eager ? "auto" : "none"} poster={poster} aria-label={alt}>
      <source src={`${base}.webm`} type="video/webm" />
      <source src={`${base}.mp4`} type="video/mp4" />
    </video>
  );
}

export function WorkGallery({ featured, pins, projects, labels }: {
  featured: string; pins: GalleryPin[]; projects: Record<string, GalleryProject>; labels: GalleryLabels;
}) {
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [count, setCount] = useState(2);
  const [open, setOpen] = useState<string | null>(null);
  const [narrow, setNarrow] = useState(true);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setCount(columnsFor(entry.contentRect.width));
      setNarrow(entry.contentRect.width < 640);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Only clips on screen download and play; they pause as soon as they leave.
  useEffect(() => {
    const el = root.current;
    if (!el || reduceMotion) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          const video = target as HTMLVideoElement;
          if (isIntersecting && !dialog.current?.open) video.play().catch(() => {});
          else video.pause();
        }
      },
      { threshold: 0.35 },
    );
    el.querySelectorAll(".work-pin-media video").forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, [count, narrow, reduceMotion]);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const tiles = root.current?.querySelectorAll<HTMLVideoElement>(".work-pin-media video") ?? [];
    if (open) {
      if (!d.open) d.showModal();
      tiles.forEach((v) => v.pause()); // keep the decoder free for the large clips
      return;
    }
    if (d.open) d.close();
    if (reduceMotion) return;
    // The observer does not fire again on close, so restart the tiles still on screen.
    tiles.forEach((v) => {
      const r = v.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) v.play().catch(() => {});
    });
  }, [open, reduceMotion]);

  const project = open ? projects[open] : null;
  const hero = projects[featured];
  // On phones the featured mobile clip would be too narrow beside the desktop
  // one, so it joins the grid instead.
  const gridPins = pins.filter((pin) => pin.slug !== featured || (narrow && pin.format === "mobile"));

  return (
    <div ref={root} className="work-gallery-root">
      <figure className="work-feature">
        <div className="work-feature-media">
          <button type="button" className="work-pin-media is-desktop" onClick={() => setOpen(featured)}
            aria-label={`${labels.open} ${hero.name}`}>
            <Clip base={`/assets/gallery/${featured}-desktop-hd`} alt={hero.alt.desktop} still={reduceMotion} />
          </button>
          <button type="button" className="work-pin-media is-mobile" onClick={() => setOpen(featured)}
            aria-label={`${labels.open} ${hero.name}`}>
            <Clip base={`/assets/gallery/${featured}-mobile`} alt={hero.alt.mobile} still={reduceMotion} />
          </button>
        </div>
        <figcaption className="work-pin-caption">
          <b>{hero.name}</b>
          <span>{hero.kind}</span>
        </figcaption>
      </figure>
      <div className="work-gallery">
        {distribute(gridPins, count).map((col, i) => (
          <div key={i} className="work-gallery-col">
            {col.map((pin) => {
              const p = projects[pin.slug];
              return (
                <figure key={`${pin.slug}-${pin.format}`} className={`work-pin is-${pin.format}`}>
                  <button type="button" className="work-pin-media" onClick={() => setOpen(pin.slug)}
                    aria-label={`${labels.open} ${p.name}`}>
                    <Clip base={`/assets/gallery/${pin.slug}-${pin.format}`} alt={p.alt[pin.format]} still={reduceMotion} />
                  </button>
                  <figcaption className="work-pin-caption">
                    <b>{p.name}</b>
                    <span>{p.kind}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        ))}
      </div>

      <dialog ref={dialog} className="work-detail" aria-labelledby="work-detail-title"
        onClose={() => setOpen(null)}
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(null); }}>
        {project && open && (
          <div className="work-detail-body">
            <div className="work-detail-head">
              <div>
                <p className="section-label text-xs uppercase tracking-widest text-muted">{project.kind}</p>
                <h3 id="work-detail-title" className="mt-2 text-3xl font-semibold">{project.name}</h3>
              </div>
              <button type="button" className="work-detail-close" onClick={() => setOpen(null)} aria-label={labels.close}>
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="work-detail-media">
              <div className="work-detail-desktop">
                <Clip base={`/assets/gallery/${open}-desktop-hd`} alt={project.alt.desktop} still={reduceMotion} eager />
              </div>
              <div className="work-detail-mobile">
                <Clip base={`/assets/gallery/${open}-mobile-hd`} alt={project.alt.mobile} still={reduceMotion} eager />
              </div>
            </div>
            <p className="mt-6 max-w-3xl leading-7 text-muted">{project.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ul aria-label="Stack" className="flex flex-wrap gap-2">
                {project.tags.map((tag) => <li key={tag} className="tag border border-card-border px-2 py-1 text-[11px]">{tag}</li>)}
              </ul>
              {project.website && (
                <a className="project-link inline-flex border-b border-current pb-1 text-sm font-semibold" href={project.website}
                  target="_blank" rel="noopener noreferrer">
                  {labels.visit} <span aria-hidden="true" className="ml-2">↗</span>
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
