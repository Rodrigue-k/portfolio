# CV

## Current versions

- French PDF: `public/cv/CV_Rodrigue_Koudakpo_Developpeur.pdf`, supplied by Rodrigue.
- English PDF: `public/cv/CV_Rodrigue_Koudakpo_Developer_EN.pdf`, translated from the supplied French version and visually verified on one page.
- Editable French source: `source/CV_Rodrigue_Koudakpo_Developpeur.docx`, preserved unchanged.
- English PDF generation source: `source/build_english_cv.py`. Uses the bundled Python runtime, ReportLab, Calibri fonts, pypdf and pypdfium2.

## Public downloads

The hero and contact use the French PDF on `/fr` and the English PDF on `/en`. Files are checked at build time. Missing files hide their links. Run `npm run build` after updating either PDF.

## Archive

`archive/2026-10-05/` preserves the five previous PDFs, including the business CV, older FR/EN versions and the developer PDF with outdated Koudatek wording. Archives are outside `public` and are not served by the website. Original filenames and SHA256 hashes are recorded in `manifest.json`.
