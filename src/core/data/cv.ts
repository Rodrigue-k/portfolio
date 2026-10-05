import { existsSync } from "node:fs";
import path from "node:path";
import { assets } from "./assets";

// Each language uses its own developer CV, without exposing a missing file.
// Static export: availability is checked at build time. Rebuild after adding the PDF.
export function getAvailableCv(locale: string): string | null {
  const url = locale === "en" ? assets.CV_PDF_EN : assets.CV_PDF;
  return existsSync(path.join(process.cwd(), "public", url)) ? url : null;
}
