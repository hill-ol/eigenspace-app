import { chapters } from "@/components/navigation/chapters";
import ChapterLayout from "@/components/ui/ChapterLayout";
import { notFound } from "next/navigation";

interface ChapterPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return chapters.map((c) => ({ slug: c.slug }));
}

export default async function ChapterPage({ params }: ChapterPageProps) {
    const { slug } = await params;
    const chapter = chapters.find((c) => c.slug === slug);

    if (!chapter) notFound();

    return (
        <ChapterLayout chapter={chapter}>
            <p className="text-zinc-400 font-mono text-sm">
                Content for this chapter is coming soon.
            </p>
        </ChapterLayout>
    );
}