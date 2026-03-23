import { useTranslation } from "react-i18next";
import { experiencesMeta } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "./SectionHeading";

interface ExpTranslation {
    role: string;
    company: string;
    period: string;
    description: string;
}

export default function ExperienceSection() {
    const { t } = useTranslation();
    const items = t("experience.items", { returnObjects: true }) as ExpTranslation[];

    return (
        <section id="experience" className="px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto">
                <SectionHeading
                    title={t("experience.title")}
                    subtitle={t("experience.subtitle")}
                />

                <div className="relative border-l-2 border-border pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-10 sm:space-y-12">
                    {items.map((exp, i) => (
                        <div
                            key={i}
                            className="relative animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <span className="absolute -left-[29px] sm:-left-[33px] top-1 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-primary ring-4 ring-background" />

                            <p className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wide">
                                {exp.period}
                            </p>
                            <h3 className="mt-1 text-lg sm:text-xl font-semibold">{exp.role}</h3>
                            <p className="text-accent text-xs sm:text-sm">{exp.company}</p>
                            <p className="mt-2 sm:mt-3 text-muted-foreground text-sm sm:text-[15px] leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                                {experiencesMeta[i]?.technologies.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="bg-muted text-muted-foreground border-border text-[10px] sm:text-xs"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            {i < items.length - 1 && (
                                <Separator className="mt-8 sm:mt-10 bg-border/50" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}