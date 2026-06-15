import { chapters } from "@/components/navigation/chapters";
import ChapterLayout from "@/components/ui/ChapterLayout";
import Chapter01 from "@/components/chapters/Chapter01";
import { notFound } from "next/navigation";

interface ChapterPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return chapters.map((c) => ({ slug: c.slug }));
}

const chapterComponents: Record<string, React.ComponentType> = {
    transformations: Chapter01,
};

export default async function ChapterPage({ params }: ChapterPageProps) {
    const { slug } = await params;
    const chapter = chapters.find((c) => c.slug === slug);
    if (!chapter) notFound();

    const ChapterContent = chapterComponents[slug];

    return (
        <ChapterLayout chapter={chapter}>
            {ChapterContent ? (
                <ChapterContent />
            ) : (
                <p className="font-mono text-sm text-zinc-400">
                    This chapter is coming soon.
                </p>
            )}
        </ChapterLayout>
    );
}