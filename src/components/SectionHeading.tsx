interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {title}
                <span className="text-primary">.</span>
            </h2>
            {subtitle && (
                <p className="mt-2 sm:mt-3 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="mt-3 sm:mt-4 mx-auto h-[2px] w-12 sm:w-16 bg-primary rounded-full" />
        </div>
    );
}