import { resumeData } from "@/core/data/resume";

export function JsonLd({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  const baseUrl = "https://rodriguekoudakpo.com";
  const currentUrl = `${baseUrl}/${locale}`;

  const personSchema = {
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Komi Rodrigue Koudakpo",
    alternateName: ["Rodrigue Koudakpo", "Komi Koudakpo", "Latex"],
    jobTitle: isFr
      ? "Développeur d'Applications Mobiles Flutter & Web"
      : "Flutter & Mobile Application Developer",
    description: isFr
      ? "Développeur spécialisé Flutter pour le mobile (iOS & Android) et Next.js pour le web. Concepteur de produits numériques de l'architecture à la publication sur les stores."
      : "Software Developer specialized in Flutter mobile development (iOS & Android) and Next.js web applications with end-to-end product delivery.",
    url: baseUrl,
    image: `${baseUrl}/images/komi-speaking-portrait-v1.webp`,
    email: resumeData.profile.contact.email,
    telephone: resumeData.profile.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lomé",
      addressRegion: "Maritime",
      addressCountry: "TG"
    },
    sameAs: [
      resumeData.profile.contact.linkedin,
      resumeData.profile.contact.github,
      "https://play.google.com/store/apps/details?id=com.grandvoyageur.grand_voyageur",
      "https://play.google.com/store/apps/details?id=com.koudatek.cherish",
      "https://play.google.com/store/apps/details?id=com.dtc.miabehackathon.public",
      "https://apps.apple.com/in/app/grand-voyageur-covoiturage/id6755688855"
    ],
    knowsAbout: [
      "Flutter",
      "Dart",
      "Mobile App Development",
      "Android Development",
      "iOS Development",
      "Next.js",
      "TypeScript",
      "Clean Architecture",
      "Firebase",
      "Supabase",
      "Cross-platform App Development",
      "Mobile Money Integration",
      "REST APIs"
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Darollo Technologies Corporation (DTC)"
      },
      {
        "@type": "Organization",
        name: "Evee Engineering"
      }
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "ESCEN Lomé"
      },
      {
        "@type": "EducationalOrganization",
        name: "Université de Lomé"
      }
    ]
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Komi Rodrigue Koudakpo — Portfolio",
    description: isFr
      ? "Portfolio officiel de Komi Rodrigue Koudakpo, Développeur Flutter et Mobile."
      : "Official portfolio of Komi Rodrigue Koudakpo, Flutter & Mobile Developer.",
    publisher: {
      "@id": `${baseUrl}/#person`
    },
    inLanguage: ["fr-FR", "en-US"]
  };

  const profilePageSchema = {
    "@type": "ProfilePage",
    "@id": `${currentUrl}/#webpage`,
    url: currentUrl,
    name: isFr
      ? "Komi Rodrigue Koudakpo — Développeur Flutter & Mobile"
      : "Komi Rodrigue Koudakpo — Flutter & Mobile Developer",
    isPartOf: {
      "@id": `${baseUrl}/#website`
    },
    about: {
      "@id": `${baseUrl}/#person`
    },
    mainEntity: {
      "@id": `${baseUrl}/#person`
    },
    inLanguage: isFr ? "fr-FR" : "en-US"
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema, profilePageSchema]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
