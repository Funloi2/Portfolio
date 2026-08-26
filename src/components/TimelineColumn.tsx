import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

export interface TimelineItem {
    role: string;
    company: string;
    period: string;
    description: string;
}

interface TimelineColumnProps {
    id: string;
    title: string;
    subtitle?: string;
    items: TimelineItem[];
    meta?: { technologies: string[] }[];
    /** Which side the vertical bar sits on. "right" mirrors the whole column. */
    side?: "left" | "right";
    className?: string;
}

export default function TimelineColumn({
    id,
    title,
    subtitle,
    items,
    meta,
    side = "left",
    className,
}: TimelineColumnProps) {
    const mirrored = side === "right";

    return (
        <div id={id} className={cn("scroll-mt-24", className)}>
            <SectionHeading title={title} subtitle={subtitle} />

            <div
                className={cn(
                    "relative border-border space-y-10 sm:space-y-12",
                    mirrored
                        ? "border-r-2 pr-6 sm:pr-8 mr-2 sm:mr-4 text-right"
                        : "border-l-2 pl-6 sm:pl-8 ml-2 sm:ml-4",
                )}
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="relative animate-fade-in-up"
                        style={{ animationDelay: `${i * 0.15}s` }}
                    >
                        <span
                            className={cn(
                                "absolute top-1 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-primary ring-4 ring-background",
                                mirrored
                                    ? "-right-[29px] sm:-right-[33px]"
                                    : "-left-[29px] sm:-left-[33px]",
                            )}
                        />

                        <p className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wide">
                            {item.period}
                        </p>
                        <h3 className="mt-1 text-lg sm:text-xl font-semibold">{item.role}</h3>
                        <p className="text-accent text-xs sm:text-sm">{item.company}</p>
                        <p className="mt-2 sm:mt-3 text-muted-foreground text-sm sm:text-[15px] leading-relaxed">
                            {item.description}
                        </p>

                        <div
                            className={cn(
                                "mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2",
                                mirrored && "justify-end",
                            )}
                        >
                            {meta?.[i]?.technologies.map((tech) => (
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
    );
}
