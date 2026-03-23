import { useTranslation, Trans } from "react-i18next";
import { about } from "@/data/portfolio";

export default function AboutSection() {
    const { t } = useTranslation();
    const bio = t("about.bio", { returnObjects: true }) as string[];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24"
        >
            <div className="max-w-5xl w-full flex flex-col items-center md:flex-row md:items-center gap-8 md:gap-12 animate-fade-in-up">
                <div className="shrink-0">
                    <div className="relative group">
                        <div className="absolute -inset-2 rounded-full border border-primary/30 group-hover:border-primary/60 transition-colors duration-500" />
                        <img
                            src={about.photo}
                            alt={about.name}
                            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-2 border-border"
                        />
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <p className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 animate-fade-in-up delay-100">
                        {t("about.greeting")}
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight animate-fade-in-up delay-200">
                        {about.name}
                    </h1>
                    <p className="mt-2 text-lg sm:text-xl text-accent font-light animate-fade-in-up delay-300">
                        {about.title}
                    </p>

                    <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-[15px] animate-fade-in-up delay-400">
                        {bio.map((_, i) => (
                            <p key={i}>
                                <Trans
                                    i18nKey={`about.bio.${i}`}
                                    components={{
                                        sudalys: (
                                            <a
                                            href="https://sudalys.fr"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-accent hover:text-primary underline underline-offset-2 decoration-accent/40 hover:decoration-primary transition-colors duration-300"
                                        />
                                        ),
                                    }}
                                />
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}