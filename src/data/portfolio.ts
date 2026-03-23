export interface Experience {
    technologies: string[];
}

export interface Project {
    technologies: string[];
    image?: string;
    liveUrl?: string;
    repoUrl?: string;
}

export const about = {
    name: "Charles-Edouard MARGUERITE",
    title: "Dev Full Stack",
    photo: "/profile.jpg",
};

export const experiencesMeta: Experience[] = [
    { technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"] },
    { technologies: ["React", "Python", "Django", "Docker"] },
    { technologies: ["JavaScript", "Express", "MongoDB", "CSS"] },
];

export const projectsMeta: Project[] = [
    {
        technologies: ["React", "Socket.io", "Node.js", "Redis"],
        liveUrl: "https://example.com",
        repoUrl: "https://github.com/yourusername/project-alpha",
    },
    {
        technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
        repoUrl: "https://github.com/yourusername/project-beta",
    },
    {
        technologies: ["TypeScript", "Node.js", "Commander.js"],
        repoUrl: "https://github.com/yourusername/project-gamma",
    },
    {
        technologies: ["React", "Tailwind", "Storybook", "Vitest"],
        liveUrl: "https://example.com",
        repoUrl: "https://github.com/yourusername/project-delta",
    },
];

export const socials = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "you@example.com",
};