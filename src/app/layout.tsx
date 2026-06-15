import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import ChapterNav from "@/components/navigation/ChapterNav";
import "./global.css";

const mono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

const serif = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "Eigenspace",
    description: "An interactive visual essay on eigenvectors and eigenvalues.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${mono.variable} ${serif.variable}`}>
        <body className="bg-white antialiased">
        <ChapterNav />
        <div className="ml-64">{children}</div>
        </body>
        </html>
    );
}