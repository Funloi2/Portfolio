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
    name: "Charles-Edouard Marguerite",
    title: "Software Architect",
    photo: "/PhotoPortfolio.jpg",
};

export const experiencesMeta = [
    { technologies: ["PHP", "Symfony", "Flutter", "Docker", "CI/CD"] },
    { technologies: ["PHP", "Symfony", "Docker", "CI/CD"] },
    { technologies: ["C#", "ASP.NET"] },
    { technologies: ["C#", "ASP.NET"] },
    { technologies: ["PHP", "Symfony", "Angular"] },
];

export const projectsMeta = [
    {
        technologies: ["TypeScript", "Svelte", "Docker"],
        "image": "/Portfolio/HRProo.png",
        repoUrl: "https://github.com/Funloi2/RH-Proo",
    },
    {
        technologies: ["PHP", "Symfony", "Docker", "CI/CD"],
        image: "/Portfolio/obs.png",
        repoUrl: "https://github.com/Funloi2/obs-saisons.fr",
    },
    {
        technologies: ["Java", "JavaFX", "Maven"],
        "image": "/Portfolio/valentine.png",
        repoUrl: "https://github.com/Funloi2/Valentine-project",
    },
    {
        technologies: ["Java"],
        image: "/Portfolio/rpg.png",
        repoUrl: "https://github.com/Funloi2/RPG_Platformer",
    },
];


export const socials = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "you@example.com",
};