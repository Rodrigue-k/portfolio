# CV

## Current versions

- French PDF: `public/cv/CV_Rodrigue_Koudakpo_Developpeur.pdf`, updated on 2026-10-16 and visually verified on one page.
- English PDF: `public/cv/CV_Rodrigue_Koudakpo_Developer_EN.pdf`, updated on 2026-10-16 and visually verified on one page.
- Title: **Développeur Flutter & Full Stack · Formateur** / **Flutter & Full Stack Developer · Trainer**.
- Includes individual Python tuition since 2025 and KOD8, the learning platform designed and developed by Rodrigue. No learner names or counts.
- Editable French source: `source/CV_Rodrigue_Koudakpo_Developpeur.docx`, updated. Its Word rendering could not be verified because LibreOffice is unavailable; use the verified PDFs for applications.
- Regeneration: run `source/update_trainer_cv.py` with the bundled Python runtime. It updates the French source and generates both PDFs; preview images are written to `tmp/cv-qa/`.
- English PDF generation source: `source/build_english_cv.py`. Uses the bundled Python runtime, ReportLab, Calibri fonts, pypdf and pypdfium2.

## Public downloads

The hero and contact use the French PDF on `/fr` and the English PDF on `/en`. Files are checked at build time. Missing files hide their links. Run `npm run build` after updating either PDF.

## Archive

`archive/2026-10-16-before-trainer/` preserves the exact French DOCX and both PDFs before the trainer/KOD8 update.

## Downloads folder

`C:\Users\kouda\Downloads\Documents\CV\Actuels` contains clearly named French and English copies. Previous developer CVs are in `Archives/2026-10-16`; the Business Developer CV is in `Autres-profils`. No files were deleted. `organize-downloads.ps1` records the organization operation; it refuses to overwrite archived originals.

The older HTML/TXT CV exports at the repository root are legacy files, not the current versions. Use the PDFs in `public/cv` as the reference.

`archive/2026-10-05/` preserves the five previous PDFs, including the business CV, older FR/EN versions and the developer PDF with outdated Koudatek wording. Archives are outside `public` and are not served by the website. Original filenames and SHA256 hashes are recorded in `manifest.json`.
