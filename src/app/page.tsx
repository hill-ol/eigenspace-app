import Link from "next/link";
import { chapters } from "@/components/navigation/chapters";

export default function Home() {
    return (
        <main className="min-h-screen px-8 py-20 md:px-24 lg:px-48">
            <div className="max-w-3xl">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-400">
                    A visual essay
                </p>
                <h1 className="mb-6 font-serif text-6xl font-bold tracking-tight text-zinc-900 md:text-8xl">
                    Eigen­space
                </h1>
                <p className="mb-16 max-w-xl text-xl leading-8 text-zinc-600">
                    Eigenvectors are the vectors a transformation cannot rotate — only
                    stretch or compress. They show up in Google's PageRank, machine
                    learning, quantum mechanics, and graph theory. This is their story.
                </p>

                <ol className="space-y-4">
                    {chapters.map((chapter) => (
                        <li key={chapter.slug}>
                            <Link
                                href={`/chapters/${chapter.slug}`}
                                className="group flex items-start gap-6 rounded-lg border border-zinc-200 px-6 py-5 transition-colors hover:border-zinc-900 hover:bg-zinc-50"
                            >
                <span className="mt-1 font-mono text-sm text-zinc-400 w-6 shrink-0">
                  {String(chapter.number).padStart(2, "0")}
                </span>
                                <div>
                                    <p className="font-serif text-xl font-semibold text-zinc-900 group-hover:text-zinc-900">
                                        {chapter.title}
                                    </p>
                                    <p className="mt-1 font-mono text-xs text-zinc-500">
                                        {chapter.subtitle}
                                    </p>
                                    <p className="mt-2 text-sm text-zinc-500 leading-6">
                                        {chapter.description}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </main>
    );
}