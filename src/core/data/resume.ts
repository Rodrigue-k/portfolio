import { PortfolioData } from "../entities/resume";

export const resumeData: PortfolioData = {
    profile: {
        name: "Komi Rodrigue Koudakpo",
        title: "Flutter Developer · Mobile & Web",
        summary: "Développeur autodidacte depuis 2019, spécialisé Flutter pour le mobile et Next.js pour le web. Parti du développement de jeux vidéo avec Java et Unity, je me suis orienté vers les applications mobiles cross-platform. J'ai publié plusieurs applications sur le Play Store et l'App Store, développé des solutions pour des clients au Togo et en Côte d'Ivoire, et conduit des projets de bout en bout — de l'architecture à la publication.",
        location: "Agoe Cacaveli, Lomé, Togo",
        contact: {
            phone: "+228 97385173",
            email: "koudakporodrigue03@gmail.com",
            linkedin: "https://www.linkedin.com/in/rodrigue-koudakpo",
            github: "https://github.com/Rodrigue-k"
        }
    },
    skills: {
        mobile: ["Flutter", "Dart", "Firebase", "Supabase", "Android", "iOS"],
        languages: ["Python", "C#", "Java", "JavaScript", "TypeScript"],
        other: ["Next.js", "Git", "Figma", "Unity", "Clean Architecture", "System Design"],
        languagesSpoken: ["Français", "Anglais", "Ewe"]
    },
    experience: [
        {
            role: "Développeur d'Applications Mobiles & Web",
            company: "Darollo Technologies Corporation (DTC)",
            location: "Togo",
            type: "Freelance",
            period: "Jan. 2025 - Présent",
            description: "Développement et maintenance d'applications mobiles Flutter. Prise en charge autonome d'un projet client complexe — architecture Flutter mobile + intégration backend C#. Projets livrés : Application & Site Web Miabé Hackathon."
        },
        {
            role: "Développeur d'Applications Mobiles",
            company: "Evee Engineering",
            location: "Côte d'Ivoire",
            type: "Freelance",
            period: "Oct. 2025 - Présent",
            description: "Reprise et finalisation d'une codebase existante jusqu'à la publication sur App Store & Play Store. Refonte complète d'une application après analyse UX — livrée en une semaine. 2 apps publiées sur les stores."
        },
        {
            role: "Opérateur de Traitement de Données",
            company: "CAGECFI SA — Cadastre de Lomé",
            location: "Lomé, Togo",
            type: "On-site",
            period: "Mars 2025 - Juin 2025",
            description: "Projet étatique de numérisation des titres fonciers du cadastre national de Lomé. Contrôle qualité et analyse des données saisies."
        }
    ],
    projects: [
        {
            title: "Cherish",
            description: "Application de cartes de vœux personnalisées pour toutes les occasions. Notifications de rappel avant chaque événement. Modèle micro-paiement 0,99€ par carte.",
            tags: ["Flutter", "Android", "iOS"]
        },
        {
            title: "S Contact",
            description: "Partage de contacts instantané par QR code. Saisie des infos, génération QR et enregistrement direct dans les contacts du téléphone.",
            tags: ["Flutter", "Android"]
        },
        {
            title: "Woez",
            description: "Plateforme de location — app mobile Flutter + site admin + site de facturation + documentation backend Supabase.",
            tags: ["Flutter", "Next.js", "Supabase", "TypeScript"]
        },
        {
            title: "EcoMap",
            description: "Cartographie collaborative des dépotoirs en Heat Map. Signalement citoyen et outil pour organisations environnementales locales.",
            tags: ["Flutter", "Android", "Maps"]
        },
        {
            title: "I Fashion Wear",
            description: "Site vitrine et outil de gestion pour une boutique de lunettes.",
            tags: ["Next.js", "TypeScript", "Supabase"]
        },
        {
            title: "Make 10!",
            description: "Jeu mobile de puzzle mathématique développé avec Unity. Publié sur Play Store en 2023.",
            tags: ["Unity", "Android"]
        }
    ],
    education: [
        {
            degree: "Management de Projet Numérique",
            institution: "ESCEN, Lomé"
        },
        {
            degree: "Études de Mathématiques",
            institution: "Université de Lomé",
            year: "2021 — 2025"
        },
        {
            degree: "Baccalauréat Série C",
            institution: "Lycée de Kpodzi",
            year: "2021"
        }
    ],
    certifications: [
        "CS50P — Python (Harvard University, Oct. 2024)",
        "Programmeur Junior Unity (Unity Technologies, 2024)"
    ],
    interests: ["Développement de jeux vidéo", "IA & systèmes embarqués", "Open source", "Lecture (Mangas/Webtoons)", "Basketball"]
};