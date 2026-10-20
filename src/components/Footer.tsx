"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, PenSquare } from "lucide-react";
import { usePreferences } from "./PreferencesProvider";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Navbar";

export function Footer() {
  const { lang } = usePreferences();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          {/* Identity column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://avatars.githubusercontent.com/u/7907966?v=4"
                alt="Gustavo Ribeiro Miranda"
                className="w-10 h-10 rounded-full border border-[var(--border-strong)]"
              />
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Gustavo Ribeiro Miranda
                </h3>
                <p className="text-xs font-mono-code text-[var(--text-muted)]">
                  Software Engineer @ Uber • @gstvribs
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
              {lang === "pt"
                ? "Engenharia de software em escala global, Design Systems, monorepos e arquitetura frontend moderna."
                : "Global-scale software engineering, Design Systems, monorepos, and modern frontend architecture."}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="https://github.com/gstvribs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-emerald-500/40"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>github.com/gstvribs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </a>
              <a
                href="https://x.com/gstvribs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-emerald-500/40"
              >
                <XIcon className="w-3.5 h-3.5" />
                <span>x.com/gstvribs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </a>
              <a
                href="https://www.linkedin.com/in/gustavo-ribeiro-miranda/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-emerald-500/40"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
              {lang === "pt" ? "Navegação" : "Navigation"}
            </h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <Link
                  href="/#sobre"
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  {lang === "pt" ? "Sobre & Filosofia" : "About & Philosophy"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#experiencia"
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  {lang === "pt" ? "Carreira & Experiência" : "Career & Experience"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#projetos"
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  {lang === "pt" ? "Projetos Open Source" : "Open Source Projects"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#palestras"
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  {lang === "pt" ? "Palestras & Podcasts" : "Talks & Podcasts"}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  Blog ({lang === "pt" ? "Artigos" : "Articles"})
                </Link>
              </li>
              <li>
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  <PenSquare className="w-3.5 h-3.5" />
                  <span>Blog Studio ({lang === "pt" ? "Criar Post" : "New Post"})</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* External & Channels */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
              {lang === "pt" ? "Redes & Publicações" : "Channels & Writing"}
            </h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="https://github.com/gstvribs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>GitHub (@gstvribs)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/gstvribs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>X / Twitter (@gstvribs)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gustavo-ribeiro-miranda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@gstvribs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>Medium (@gstvribs)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=xo57BjNlcxI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>ReactConf BR Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/episode/2yplPmiiJ1x8YCJDj9hsT6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>Web Rush Podcast #88</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-mono-code">
          <p>
            © {new Date().getFullYear()} Gustavo Ribeiro Miranda (@gstvribs).{" "}
            {lang === "pt"
              ? "Construído com Next.js, TypeScript & Tailwind CSS."
              : "Built with Next.js, TypeScript & Tailwind CSS."}
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {lang === "pt"
                ? "Pressione ⌘K para navegação rápida"
                : "Press ⌘K for quick navigation"}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
