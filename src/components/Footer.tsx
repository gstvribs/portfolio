"use client";

import React from "react";
import Link from "next/link";
import { usePreferences } from "./PreferencesProvider";

export function Footer() {
  const { lang } = usePreferences();

  return (
    <footer className="border-t border-[var(--border-subtle)] mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-mono-code">
        <p>© {new Date().getFullYear()} Gustavo Miranda (@gstvribs)</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/gstvribs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://x.com/gstvribs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            X / Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-ribeiro-miranda/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            LinkedIn
          </a>
          <Link
            href="/blog"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/studio"
            className="text-violet-400 hover:text-violet-300 transition-colors"
          >
            {lang === "pt" ? "Novo Post" : "New Post"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
