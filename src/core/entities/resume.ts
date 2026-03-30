export interface Profile {
    name: string;
    title: string;
    summary: string;
    location: string;
    contact: {
        phone: string;
        email: string;
        linkedin: string;
        github: string;
    };
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface Experience {
    role: string;
    company: string;
    location: string;
    type: string;
    period: string;
    description: string;
}

export interface Project {
    title: string;
    period?: string;
    status?: string;
    description: string;
    descriptionFr?: string;
    tags: string[];
    image?: string;
    gallery?: string[];
    website?: string;
    github?: string;
    playStore?: string;
    appStore?: string;
    hideLink?: boolean;
    associatedCompany?: string;
    category?: 'professional' | 'personal' | 'other';
}

export interface PortfolioData {
    profile: Profile;
    skills: {
        mobile: string[];
        languages: string[];
        other: string[];
        languagesSpoken: string[];
    };
    experience: Experience[];
    projects: Project[];
    education: Array<{
        degree: string;
        institution: string;
        year?: string;
    }>;
    certifications: string[];
    interests: string[];
}
