"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, ExternalLink, QrCode, X } from "lucide-react";

interface LinkEntry {
  label: string;
  url: string;
  icon: React.ReactNode;
}

interface ProjectLinksPanelProps {
  links: LinkEntry[];
}

function truncateUrl(url: string, max = 38): string {
  const clean = url.replace(/^https?:\/\//, "").split("?")[0];
  return clean.length > max ? clean.substring(0, max) + "…" : clean;
}

function QrPopover({ url, label, onClose }: { url: string; label: string; onClose: () => void }) {
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}&bgcolor=0a0a0a&color=f97316&margin=10`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 6 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute right-0 bottom-[calc(100%+10px)] z-50"
    >
      <div
        className="rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        style={{ background: "rgba(12,12,12,0.97)", backdropFilter: "blur(20px)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-white/[0.07]">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-white/40">
            QR Code — {label}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/10 transition-all"
          >
            <X className="w-3 h-3" />
          </button>
        </div>

        {/* QR Image */}
        <div className="p-4 flex flex-col items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qrSrc}
            alt={`QR Code — ${label}`}
            width={140}
            height={140}
            className="rounded-xl"
            style={{ imageRendering: "pixelated" }}
          />
          <p className="text-[10px] font-mono text-white/25 max-w-[140px] text-center break-all leading-relaxed">
            {truncateUrl(url, 50)}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <div
        className="absolute right-[18px] top-full w-0 h-0"
        style={{
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: "6px solid rgba(255,255,255,0.07)",
        }}
      />
    </motion.div>
  );
}

export function ProjectLinksPanel({ links }: ProjectLinksPanelProps) {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [openQr, setOpenQr] = useState<string | null>(null);

  if (links.length === 0) return null;

  const handleCopy = async (url: string) => {
    await navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => {
        const isCopied = copiedUrl === link.url;
        const isQrOpen = openQr === link.url;

        return (
          <div key={link.url} className="relative">
            <motion.div
              whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-white/[0.06] transition-colors"
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              {/* Label pill */}
              <div className="shrink-0 flex items-center gap-1.5">
                <span className="text-[var(--accent)] opacity-70 [&>svg]:w-3.5 [&>svg]:h-3.5">
                  {link.icon}
                </span>
                <span
                  className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border"
                  style={{
                    color: "var(--accent)",
                    background: "color-mix(in srgb, var(--accent) 8%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent) 18%, transparent)",
                  }}
                >
                  {link.label}
                </span>
              </div>

              {/* URL */}
              <p className="flex-1 min-w-0 text-[11px] font-mono text-white/30 truncate">
                {truncateUrl(link.url)}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-0.5 shrink-0">
                {/* Copy */}
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => handleCopy(link.url)}
                  title="Copier le lien"
                  className="p-1.5 rounded-lg text-white/35 hover:text-white hover:bg-white/10 transition-all"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isCopied ? (
                      <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </motion.div>
                    ) : (
                      <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Copy className="w-3.5 h-3.5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* QR Code */}
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setOpenQr(isQrOpen ? null : link.url)}
                  title="Afficher le QR code"
                  className="p-1.5 rounded-lg transition-all"
                  style={
                    isQrOpen
                      ? {
                          color: "var(--accent)",
                          background: "color-mix(in srgb, var(--accent) 15%, transparent)",
                        }
                      : { color: "rgba(255,255,255,0.35)" }
                  }
                >
                  <QrCode className="w-3.5 h-3.5" />
                </motion.button>

                {/* Open */}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ouvrir"
                  className="p-1.5 rounded-lg text-white/35 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* QR Popover */}
            <AnimatePresence>
              {isQrOpen && (
                <QrPopover
                  url={link.url}
                  label={link.label}
                  onClose={() => setOpenQr(null)}
                />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
