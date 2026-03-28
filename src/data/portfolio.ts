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
        "image": "/HRProo.png",
        repoUrl: "https://github.com/Funloi2/RH-Proo",
    },
    {
        technologies: ["PHP", "Symfony", "Docker", "CI/CD"],
        image: "/obs.png",
        repoUrl: "https://github.com/Funloi2/obs-saisons.fr",
    },
    {
        technologies: ["Java", "JavaFX", "Maven"],
        "image": "/valentine.png",
        repoUrl: "https://github.com/Funloi2/Valentine-project",
    },
    {
        technologies: ["Java"],
        image: "/rpg.png",
        repoUrl: "https://github.com/Funloi2/RPG_Platformer",
    },
];


export const socials = {
    github: "https://github.com/Funloi2",
    linkedin: "https://www.linkedin.com/in/charles-edouard-marguerite/",
    email: "charlesmarguerite11@gmail.com",
};