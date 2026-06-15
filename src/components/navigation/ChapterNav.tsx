"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapters } from "./chapters";

export default function ChapterNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-zinc-200 bg-white px-6 py-10">
            <Link href="/" className="mb-10 font-serif text-xl font-bold tracking-tight">
                Eigenspace
            </Link>
            <ol className="space-y-1">
                {chapters.map((chapter) => {
                    const href = `/chapters/${chapter.slug}`;
                    const active = pathname === href;

                    return (
                        <li key={chapter.slug}>
                            <Link
                                href={chapter.status === "available" ? href : "#"}
                                className={`flex items-start gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                                    active
                                        ? "bg-zinc-900 text-white"
                                        : chapter.status === "coming-soon"
                                            ? "cursor-default text-zinc-300"
                                            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                                }`}
                            >
                <span className="mt-0.5 font-mono text-xs text-zinc-400 w-4 shrink-0">
                  {String(chapter.number).padStart(2, "0")}
                </span>
                                <span>{chapter.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}