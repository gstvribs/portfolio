import type { Metadata } from "next";
import {
  Instrument_Serif,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { PreferencesProvider } from "@/components/PreferencesProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { getAllPosts } from "@/lib/posts";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Gustavo Miranda (@gstvribs) — Software Engineer @ Uber",
    template: "%s | Gustavo Miranda (@gstvribs)",
  },
  description:
    "Personal portfolio, engineering architecture hub, talks, and blog of Gustavo Miranda (@gstvribs) — Software Engineer at Uber, Design Systems & Monorepo specialist.",
  keywords: [
    "Gustavo Miranda",
    "gstvribs",
    "Software Engineer Uber",
    "Design Systems",
    "Monorepo",
    "Frontend Architecture",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Gustavo Miranda", url: "https://github.com/gstvribs" }],
  openGraph: {
    title: "Gustavo Miranda (@gstvribs) — Software Engineer @ Uber",
    description:
      "Global-scale software engineering, Design Systems, monorepo architectures, talks, and technical writing.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@gstvribs",
    title: "Gustavo Miranda (@gstvribs) — Software Engineer @ Uber",
    description:
      "Global-scale software engineering, Design Systems, monorepo architectures, talks, and technical writing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getAllPosts();

  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-architectural-grid antialiased selection:bg-emerald-500/30">
        {/* Ambient radial spotlights */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[440px] rounded-full bg-emerald-500/8 blur-[130px]" />
          <div className="absolute top-[28%] -right-48 w-[520px] h-[520px] rounded-full bg-sky-500/6 blur-[140px]" />
        </div>

        <PreferencesProvider>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <CommandPalette posts={posts} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </PreferencesProvider>
      </body>
    </html>
  );
}
