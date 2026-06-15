"use client";
import katex from "katex";
import "katex/dist/katex.min.css";

interface InlineMathProps {
    math: string;
}

export default function InlineMath({ math }: InlineMathProps) {
    const html = katex.renderToString(math, {
        displayMode: false,
        throwOnError: false,
    });

    return (
        <span
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}