# Portfolio assets and pending confirmations

The existing Next.js site keeps its EN/FR routing. Asset slots are centralized in `src/core/data/assets.ts`. Existing screenshots are reused; `null` slots do not render publicly.

- `[CV_PDF]`: export `docs/cv/source/CV_Rodrigue_Koudakpo_Developpeur.docx` to `public/cv/CV_Rodrigue_Koudakpo_Developpeur.pdf`, then rebuild. The French page uses this PDF; its link is automatically hidden if it is absent. Previous PDFs are preserved in `docs/cv/archive/2026-10-05/`.
- `[CV_PDF_EN]`: `public/cv/CV_Rodrigue_Koudakpo_Developer_EN.pdf` is the English translation. English pages use this PDF; rebuild after updating it.
- `[AWA_SCREENSHOT]`, `[KLAVIA_SCREENSHOT]`, `[TRAINING_IMAGE]`: named slots are reserved. Awa and Klavia cards are deferred at Rodrigue's request.
- `[À CONFIRMER: statut d’adoption par les clients Cahier]`: only the confirmed 2026 launch is displayed.
- `[À CONFIRMER: nombre de personnes formées]`: no count is displayed.
- `[À CONFIRMER: statut de publication EcoMap]`: the existing card is hidden until a public status is confirmed; no status is inferred from its GitHub repository.
- Tavalo was confirmed as **Prototype** during implementation; its existing screenshot and link remain visible.

The project exports static HTML (`output: 'export'`). Images use `next/image` with the existing `unoptimized: true` setting; supplied WebP assets and lazy loading are retained. A server image optimizer would require changing the hosting architecture.
