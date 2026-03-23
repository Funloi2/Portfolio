import CursorFollower from "@/components/CursorFollower";
import LanguageToggle from "@/components/LanguageToggle";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <CursorFollower />
            <LanguageToggle />

            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <main className="relative z-10">
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
            </main>

            <Footer />
        </div>
    );
}