"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type GalleryPin = { slug: string; name: string; kind: string; format: "desktop" | "mobile"; alt: string };

// Height / width of each recording, used to balance the columns.
const ratio = { desktop: 600 / 960, mobile: 1168 / 540 };

function columnsFor(width: number) {
  return width >= 1000 ? 4 : width >= 640 ? 3 : 2;
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

export function WorkGallery({ pins }: { pins: GalleryPin[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(2);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setCount(columnsFor(entry.contentRect.width)));
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
          if (isIntersecting) video.play().catch(() => {});
          else video.pause();
        }
      },
      { threshold: 0.35 },
    );
    el.querySelectorAll("video").forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, [count, reduceMotion]);

  return (
    <div ref={root} className="work-gallery">
      {distribute(pins, count).map((col, i) => (
        <div key={i} className="work-gallery-col">
          {col.map((pin) => {
            const base = `/assets/gallery/${pin.slug}-${pin.format}`;
            return (
              <figure key={`${pin.slug}-${pin.format}`} className={`work-pin is-${pin.format}`}>
                <div className="work-pin-media">
                  {reduceMotion ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={`${base}-poster.jpg`} alt={pin.alt} loading="lazy" />
                  ) : (
                    <video muted loop playsInline preload="none" poster={`${base}-poster.jpg`} aria-label={pin.alt}>
                      <source src={`${base}.webm`} type="video/webm" />
                      <source src={`${base}.mp4`} type="video/mp4" />
                    </video>
                  )}
                </div>
                <figcaption className="work-pin-caption">
                  <b>{pin.name}</b>
                  <span>{pin.kind}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      ))}
    </div>
  );
}
