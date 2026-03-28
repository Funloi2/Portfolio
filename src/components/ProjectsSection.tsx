import { useTranslation } from "react-i18next";
import { projectsMeta } from "@/data/portfolio";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

interface ProjTranslation {
    title: string;
    description: string;
}

export default function ProjectsSection() {
    const { t } = useTranslation();
    const items = t("projects.items", { returnObjects: true }) as ProjTranslation[];

    return (
        <section id="projects" className="px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title={t("projects.title")}
                    subtitle={t("projects.subtitle")}
                />

                <div className="flex flex-col gap-5 md:flex-row md:gap-6 md:overflow-x-auto md:pb-4 md:scrollbar-hide md:snap-x md:snap-mandatory">
                    {items.map((project, i) => {
                        const meta = projectsMeta[i];
                        return (
                            <Card
                                key={i}
                                className="card-glow w-full md:min-w-[300px] md:max-w-[340px] md:shrink-0 md:snap-start bg-card border-border flex flex-col animate-fade-in-up"
                                style={{ animationDelay: `${i * 0.12}s` }}
                            >
                                {meta?.image && (
                                    <div className="h-36 sm:h-40 overflow-hidden rounded-t-lg">
                                        <img
                                            src={meta.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                <CardHeader className="pb-2 sm:pb-3">
                                    <CardTitle className="text-base sm:text-lg">{project.title}</CardTitle>
                                    <CardDescription className="text-muted-foreground text-[13px] sm:text-[14px] leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                                    {meta?.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="outline"
                                            className="text-[10px] sm:text-xs border-border text-muted-foreground"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </CardContent>

                                <CardFooter className="gap-3 pt-0">
                                    {meta?.repoUrl && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            asChild
                                            className="text-muted-foreground hover:text-foreground text-xs sm:text-sm"
                                        >
                                            <a href={meta.repoUrl} target="_blank" rel="noreferrer">
                                                {/*<Github className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />*/}
                                                Code
                                            </a>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}