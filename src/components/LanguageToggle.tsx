import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
    const { i18n } = useTranslation();
    const current = i18n.language;

    const toggle = () => {
        const next = current === "en" ? "fr" : "en";
        i18n.changeLanguage(next);
        localStorage.setItem("lang", next);
    };

    return (
        <button
            onClick={toggle}
            className="fixed top-4 right-4 z-40 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide rounded-full border border-border bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
        >
            {current === "en" ? "FR" : "EN"}
        </button>
    );
}