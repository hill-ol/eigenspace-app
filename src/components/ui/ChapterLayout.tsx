import { Chapter } from "@/components/navigation/chapters";

interface ChapterLayoutProps {
    chapter: Chapter;
    children: React.ReactNode;
}

export default function ChapterLayout({ chapter, children }: ChapterLayoutProps) {
    return (
        <main className="min-h-screen bg-white text-zinc-900">
            {/* Chapter header */}
            <header className="border-b border-zinc-200 px-8 py-12 md:px-24 lg:px-48">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-400">
                    Chapter {chapter.number}
                </p>
                <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight md:text-6xl">
                    {chapter.title}
                </h1>
                <p className="font-mono text-sm text-zinc-500">{chapter.subtitle}</p>
            </header>

            {/* Chapter body */}
            <article className="px-8 py-16 md:px-24 lg:px-48">
                <div className="prose-eigenspace max-w-3xl">{children}</div>
            </article>
        </main>
    );
}