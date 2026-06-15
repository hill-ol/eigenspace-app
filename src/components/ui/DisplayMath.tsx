"use client";
import katex from "katex";
import "katex/dist/katex.min.css";

interface DisplayMathProps {
    math: string;
    className?: string;
}

export default function DisplayMath({ math, className = "" }: DisplayMathProps) {
    const html = katex.renderToString(math, {
        displayMode: true,
        throwOnError: false,
    });

    return (
        <div
            className={`my-8 overflow-x-auto text-center ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}