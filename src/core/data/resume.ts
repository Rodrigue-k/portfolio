import { PortfolioData } from "../entities/resume";

export const resumeData: PortfolioData = {
    profile: {
        name: "Komi Rodrigue Koudakpo",
        title: "Flutter Developer · Mobile Specialist",
        summary: "Développeur autodidacte depuis 2019, spécialisé Flutter mobile. Parti du développement de jeux vidéo avec Java et Unity, je me suis orienté vers les applications mobiles cross-platform. J'ai publié plusieurs applications sur le Play Store et l'App Store, développé des solutions pour des clients au Togo et en Côte d'Ivoire, et conduit des projets de bout en bout — de l'architecture à la publication.",
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
        other: ["Next.js", "Git", "Figma", "Unity", "Blender", "Clean Architecture", "System Design"],
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
            description: "Projet étatique de numérisation des titres fonciers du cadastre de Lomé. Contrôle qualité et analyse des données saisies."
        }
    ],
    projects: [
        {
            title: "Grand Voyageur",
            description: "Application de covoiturage pensée pour l'Afrique de l'Ouest. Trouvez un trajet ou proposez le vôtre, simplement.",
            tags: ["Flutter", "Dart", "Clean Architecture", "REST API", "Android", "iOS", "Freelance"],
            image: "/assets/projects/gv-main.png",
            gallery: [
                "/assets/projects/gv-main.png",
                "/assets/projects/gv-1.png",
                "/assets/projects/gv-2.png",
                "/assets/projects/gv-3.png"
            ],
            playStore: "https://play.google.com/store/apps/details?id=com.grandvoyageur.grand_voyageur&pcampaignid=web_share",
            appStore: "https://apps.apple.com/in/app/grand-voyageur-covoiturage/id6755688855",
            associatedCompany: "Evee Engineering",
            category: "professional"
        },
        {
            title: "Cherish",
            description: "Créez et envoyez des cartes de vœux personnalisées pour chaque occasion. Des templates soignés, un envoi en quelques secondes.",
            tags: ["Flutter", "Dart", "Firebase", "Micro-paiement", "Android", "iOS", "Solo"],
            website: "https://cherish-app.web.app/",
            playStore: "https://play.google.com/store/apps/details?id=com.koudatek.cherish&pcampaignid=web_share",
            image: "/assets/projects/cherish-main.png",
            category: "personal"
        },
        {
            title: "Ticketto",
            description: "Découvrez concerts, festivals et matchs près de chez vous. Réservez vos places et recevez vos billets directement sur votre téléphone.",
            tags: ["Flutter", "Dart", "Firebase", "Paiement", "Android", "Freelance"],
            playStore: "https://play.google.com/store/apps/details?id=com.eveeengineering.ticketto&pcampaignid=web_share",
            associatedCompany: "Evee Engineering",
            category: "professional",
            image: "/assets/projects/ticketto-main.png"
        },
        {
            title: "EcoMap",
            description: "Plateforme cartographique pour visualiser la santé environnementale des villes africaines — signalement de dépotoirs et qualité de l'air en temps réel.",
            tags: ["Flutter", "Dart", "Géolocalisation", "Cartographie", "Web", "Hackathon", "Équipe"],
            github: "https://github.com/Rodrigue-k/EcoMap",
            image: "/assets/projects/ecomap-main.png",
            category: "personal"
        },
        {
            title: "Miabé Hackathon",
            description: "L'app officielle de la plus grande compétition tech panafricaine pour étudiants. Toutes les infos sur la compétition 2026, sans inscription, dans 15 pays.",
            tags: ["Flutter", "Firebase", "Supabase"],
            website: "https://miabe-hackathon.web.app/",
            playStore: "https://play.google.com/store/apps/details?id=com.dtc.miabehackathon.public&pcampaignid=web_share",
            image: "/assets/projects/mbhackathon-main.png",
            associatedCompany: "Darollo Technologies Corporation (DTC)",
            category: "professional"
        },
        {
            title: "Woez",
            description: "Réservez des hébergements locaux avec des paiements adaptés à l'Afrique de l'Ouest. Une alternative à Booking.com pensée pour le terrain.",
            tags: ["Flutter", "Dart", "Supabase", "Géolocalisation"],
            website: "https://pro.woez-app.com/",
            image: "/assets/projects/woez-main.png",
            category: "personal"
        },
        {
            title: "S Contact",
            description: "Votre carte de visite numérique instantanée. Créez votre profil, générez un QR code et partagez vos coordonnées en 3 secondes.",
            tags: ["Flutter", "Dart", "QR Code", "vCard"],
            github: "https://github.com/Rodrigue-k/s_contact",
            playStore: "https://play.google.com/store/apps/details?id=com.koudatek.s_contact&pcampaignid=web_share",
            image: "/assets/projects/scontact-main.png",
            category: "personal"
        },
        {
            title: "Make 10!",
            description: "Un jeu de puzzle arithmétique — combinez des tuiles colorées pour obtenir exactement 10. Simple, addictif, fait maison.",
            tags: ["Unity", "C#", "Game Dev", "Android"],
            playStore: "https://play.google.com/store/apps/details?id=com.latex.make&pcampaignid=web_share",
            image: "/assets/projects/make10-main.png",
            category: "other"
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