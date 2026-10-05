// Named asset slots: reuse supplied screenshots; null slots stay hidden publicly.
export const assets = {
  HERO_IMAGE: "/images/komi-speaking-portrait-v1.webp",
  CIFORMS_SCREENSHOT: "/assets/projects/ciforms-dashboard.webp",
  CAHIER_SCREENSHOT_BOULANGER: "/assets/projects/cahier-boulanger-dashboard.webp",
  CAHIER_SCREENSHOT_OPTICIEN: "/assets/projects/cahier-opticien-dashboard.webp",
  CORAFRIC_SCREENSHOT: "/assets/projects/corafric-main.webp",
  MIABE_WEBSITE_SCREENSHOT: "/assets/projects/miabe-hackathon-web.webp",
  TAVALO_SCREENSHOT: "/assets/projects/tavalo-main.webp",
  ISHA_SCREENSHOT: "/assets/projects/isha-main.webp",
  MAKE10_SCREENSHOT: "/assets/projects/make10-main.webp",
  SCONTACT_SCREENSHOT: "/assets/projects/scontact-main.webp",
  // [À CONFIRMER: fournir [AWA_SCREENSHOT], [KLAVIA_SCREENSHOT], [TRAINING_IMAGE]]
  AWA_SCREENSHOT: null as string | null,
  KLAVIA_SCREENSHOT: null as string | null,
  TRAINING_IMAGE: null as string | null,
  // [CV_PDF] — supplied French developer CV.
  CV_PDF: "/cv/CV_Rodrigue_Koudakpo_Developpeur.pdf",
  // [CV_PDF_EN] — English translation of the supplied French CV.
  CV_PDF_EN: "/cv/CV_Rodrigue_Koudakpo_Developer_EN.pdf",
};

// [À CONFIRMER: statut d'adoption par les clients Cahier ; ne pas écrire "used by"]
// Tavalo: Prototype — confirmed by Rodrigue during implementation.
// [À CONFIRMER: nombre de personnes formées]
