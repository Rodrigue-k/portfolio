import { PortfolioData } from "../entities/resume";

export const resumeData: PortfolioData = {
    profile: {
        name: "Komi Rodrigue Koudakpo",
        title: "Senior Application Developer",
        summary: "Autodidacte depuis 2019 et passionné par l'univers des jeux vidéo, spécialisé dans le développement mobile avec Flutter depuis 2022. Fort d'une expérience acquise dans des environnements complexes (gaming et mobile), capable de mener à bien des projets de toutes tailles.",
        location: "Agoe Cacaveli, Lomé, Togo",
        contact: {
            phone: "+228 97385173",
            email: "koudakporodrigue03@gmail.com",
            linkedin: "rodrigue Koudakpo",
            github: "@Rodrigue-k"
        }
    },
    skills: {
        mobile: ["Flutter", "Dart", "iOS", "Android"],
        languages: ["C# (Unity)", "Python", "JavaScript", "TypeScript"],
        other: ["Gestion de projet", "Résolution de problèmes techniques", "Clean Architecture", "System Design"],
        languagesSpoken: ["Français", "Anglais", "Ewe"]
    },
    experience: [
        {
            role: "Développeur d'Applications",
            company: "Darollo Technologies Corporation (DTC)",
            location: "Togo",
            type: "Remote",
            period: "Déc 2024 - Présent",
            description: "Participation à la conception et au développement de solutions mobiles avec Flutter au sein d'une équipe."
        },
        {
            role: "Opérateur de Traitement de Données",
            company: "CAGECFI SA",
            location: "Lomé, Togo",
            type: "On-site",
            period: "Mars 2025 - Juin 2025",
            description: "Projet de numérisation des livres fonciers."
        },
        {
            role: "Développeur Mobile Freelance",
            company: "Evee Engineering",
            location: "Côte d'Ivoire",
            type: "Freelance",
            period: "Projets déployés",
            description: "Développement et publication d'applications iOS et Android (Grand Voyageur, Ticketto)."
        }
    ],
    projects: [
        {
            title: "Woez (ex-ToRent)",
            period: "Oct. 2024 – Janv. 2025",
            description: "Ensemble d'applications pour la gestion et la location d'hébergements et de voitures. Comprend une application mobile et plusieurs sites de gestion.",
            tags: ["Flutter", "Mobile", "Web"]
        },
        {
            title: "DukoaVote",
            status: "En cours",
            description: "Plateforme de sondages et votes numériques.",
            tags: ["Web", "Sondage"]
        },
        {
            title: "H-Time",
            description: "Application de gestion d'emplois du temps hebdomadaire.",
            tags: ["Productivity"]
        },
        {
            title: "I Fashion Wear",
            description: "Site vitrine et site de gestion pour une boutique de vente de lunettes.",
            tags: ["E-commerce", "Web"]
        },
        {
            title: "Secteur BTP",
            description: "Création d'un site web pour une entreprise de bâtiment et travaux publics.",
            tags: ["Web", "BTP"]
        }
    ],
    education: [
        {
            degree: "Gestion de projet numérique",
            institution: "ESCEN"
        },
        {
            degree: "Mathématiques",
            institution: "Université de Lomé"
        },
        {
            degree: "Baccalauréat Série C",
            institution: "Lycée de Kpodzi",
            year: "2021"
        }
    ],
    certifications: [
        "Certificat de Programmeur Junior en Unity (Unity Technologies, 2024)",
        "CS50 Certificat Python (Harvard, Oct. 2024)",
        "Expert Junior en Restauration des Paysages Forestiers (JVE, 2022)"
    ],
    interests: ["Développement de jeux vidéo", "IA", "Robotique", "Lecture (Mangas/Webtoons)", "Basketball"]
};
