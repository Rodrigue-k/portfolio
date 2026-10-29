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

const GAP = 16;
const CAPTION = 34;

function columnsFor(width: number) {
  return width >= 900 ? 4 : width >= 640 ? 3 : 2;
}

// Pinterest-style masonry on a 1px-row grid: desktop clips span two columns so
// they stay readable, phone clips one column so they never outgrow the screen.
// Each tile spans as many rows as its height; dense flow fills the gaps.
function tileSpan(format: GalleryFormat, width: number) {
  const n = columnsFor(width);
  const colWidth = (width - (n - 1) * GAP) / n;
  const cols = format === "desktop" ? 2 : 1;
  const tileWidth = cols * colWidth + (cols - 1) * GAP;
  return { cols, rows: Math.ceil(tileWidth * ratio[format] + CAPTION + GAP) };
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
  const [width, setWidth] = useState(360);
  const [open, setOpen] = useState<string | null>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const count = columnsFor(width);
  const narrow = width < 640;

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
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
      <div className="work-gallery" style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}>
        {gridPins.map((pin) => {
          const p = projects[pin.slug];
          const span = tileSpan(pin.format, width);
          return (
            <figure key={`${pin.slug}-${pin.format}`} className={`work-pin is-${pin.format}`}
              style={{ gridColumn: `span ${span.cols}`, gridRow: `span ${span.rows}` }}>
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
