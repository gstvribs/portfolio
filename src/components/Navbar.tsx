"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Command,
  Globe,
  Moon,
  PenSquare,
  Sun,
  Terminal,
} from "lucide-react";
import { usePreferences } from "./PreferencesProvider";

export function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function LinkedInIcon({
  className = "w-4 h-4",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, theme, toggleTheme, setCommandOpen } =
    usePreferences();

  const navItems = [
    {
      href: "/#sobre",
      label: lang === "pt" ? "Sobre" : "About",
    },
    {
      href: "/#experiencia",
      label: lang === "pt" ? "Carreira" : "Career",
    },
    {
      href: "/#projetos",
      label: lang === "pt" ? "Projetos" : "Projects",
    },
    {
      href: "/#palestras",
      label: lang === "pt" ? "Palestras & Media" : "Talks & Media",
    },
    {
      href: "/blog",
      label: "Blog",
      active: pathname.startsWith("/blog"),
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
        {/* Brand Identity */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="relative w-8 h-8 shrink-0">
            <img
              src="https://avatars.githubusercontent.com/u/7907966?v=4"
              alt="Gustavo Miranda"
              className="w-full h-full rounded-full object-cover border border-[var(--border-strong)] bg-[var(--bg-elevated)] group-hover:border-violet-500/60 transition-colors"
            />
            <span
              className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-violet-500 ring-2 ring-[var(--bg-primary)]"
              title="Software Engineer @ Uber"
            />
          </div>
          <span className="font-mono-code text-xs font-medium tracking-tight text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
            @gstvribs
          </span>
        </Link>

        {/* Primary Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                item.active
                  ? "text-[var(--text-primary)] bg-[var(--bg-elevated)] font-medium"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions: Studio, Socials, Command Palette, Lang, Theme */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/studio"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              pathname === "/studio"
                ? "bg-violet-500 text-white border-violet-400 shadow-sm"
                : "bg-violet-500/10 text-violet-400 border-violet-500/25 hover:bg-violet-500/20"
            }`}
          >
            <PenSquare className="w-3.5 h-3.5" />
            <span>{lang === "pt" ? "Novo Post" : "Write Post"}</span>
          </Link>

          <a
            href="https://github.com/gstvribs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub @gstvribs"
            title="GitHub (@gstvribs)"
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://x.com/gstvribs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) @gstvribs"
            title="X / Twitter (@gstvribs)"
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
          >
            <XIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://www.linkedin.com/in/gustavo-ribeiro-miranda/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Gustavo Miranda"
            title="LinkedIn (in/gustavo-ribeiro-miranda)"
            className="hidden sm:inline-flex p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            title={lang === "pt" ? "Menu rápido (⌘K)" : "Quick command (⌘K)"}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono-code text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-elevated)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
          >
            <Command className="w-3.5 h-3.5" />
            <span>K</span>
          </button>

          <button
            type="button"
            onClick={toggleLang}
            title={
              lang === "pt" ? "Switch to English" : "Mudar para Português"
            }
            className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-mono-code uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang}</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            title={
              theme === "dark"
                ? lang === "pt"
                  ? "Modo Claro"
                  : "Light Mode"
                : lang === "pt"
                ? "Modo Escuro"
                : "Dark Mode"
            }
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Secondary Nav */}
      <div className="flex md:hidden items-center gap-1 overflow-x-auto px-4 py-2 border-t border-[var(--border-subtle)] text-xs">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-2.5 py-1 rounded-md whitespace-nowrap text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
