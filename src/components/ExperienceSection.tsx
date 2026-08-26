import { useTranslation } from "react-i18next";
import { educationMeta, experiencesMeta } from "@/data/portfolio";
import TimelineColumn, { type TimelineItem } from "./TimelineColumn";

export default function ExperienceSection() {
    const { t } = useTranslation();
    const experience = t("experience.items", { returnObjects: true }) as TimelineItem[];
    const education = t("education.items", { returnObjects: true }) as TimelineItem[];

    return (
        <section className="px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto grid gap-16 lg:gap-12 lg:grid-cols-2">
                <TimelineColumn
                    id="education"
                    title={t("education.title")}
                    subtitle={t("education.subtitle")}
                    items={education}
                    meta={educationMeta}
                    side="right"
                    className="order-2 lg:order-1"
                />

                <TimelineColumn
                    id="experience"
                    title={t("experience.title")}
                    subtitle={t("experience.subtitle")}
                    items={experience}
                    meta={experiencesMeta}
                    className="order-1 lg:order-2"
                />
            </div>
        </section>
    );
}
