import { useTranslation } from "react-i18next";
import { socials } from "@/data/portfolio";
import {  Mail, FolderGit2, Link  } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const links = [
    { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
    { icon: FolderGit2, href: `https://github.com/Funloi2`, label: "Github" },
    { icon: Link, href: `https://www.linkedin.com/in/charles-edouard-marguerite/`, label: "LinkedIn" },
];

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="px-4 sm:px-6 pb-8 sm:pb-10 pt-12 sm:pt-16">
            <Separator className="mb-8 sm:mb-10 bg-border/40 max-w-4xl mx-auto" />

            <div className="flex flex-col items-center gap-5 sm:gap-6">
                <div className="flex gap-8 sm:gap-6">
                    {links.map(({ icon: Icon, href, label }) => (
                        <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="p-2 -m-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                        <Icon className="h-5 w-5" />
                        </a>
                        ))}
                </div>

                <p className="text-[10px] sm:text-xs text-muted-foreground/60 tracking-wide">
                    © {new Date().getFullYear()} — {t("footer.builtWith")}
                </p>
            </div>
        </footer>
    );
}