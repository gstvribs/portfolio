"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Headphones,
  PenSquare,
  Play,
  X,
} from "lucide-react";
import { PROFILE, type ClientBrand } from "@/lib/profile";
import type { BlogPostMeta } from "@/lib/posts";
import { usePreferences } from "./PreferencesProvider";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Navbar";

function BrandLogo({ id, featured }: { id: ClientBrand["id"]; featured: boolean }) {
  switch (id) {
    case "uber":
      return (
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center font-sans font-black text-[11px] tracking-tighter">
            Uber
          </div>
          <span
            className={`font-semibold tracking-tight text-[var(--text-primary)] ${
              featured ? "text-base" : "text-sm"
            }`}
          >
            Uber
          </span>
        </div>
      );
    case "google":
      return (
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center p-1.5">
            <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
              />
            </svg>
          </div>
          <span
            className={`font-semibold tracking-tight text-[var(--text-primary)] ${
              featured ? "text-base" : "text-sm"
            }`}
          >
            Google
          </span>
        </div>
      );
    case "boticario":
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-serif-editorial italic font-bold text-xs">
            B
          </div>
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            Grupo Boticário
          </span>
        </div>
      );
    case "bradesco":
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="w-3.5 h-3.5"
            >
              <path
                d="M12 4v16M6 9c0-2.5 2.5-4 6-4s6 1.5 6 4M5 14c1.5-2 4-3 7-3s5.5 1 7 3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            Bradesco
          </span>
        </div>
      );
    case "mitsui":
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center font-mono-code font-bold text-[9px]">
            M&amp;C
          </div>
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            Mitsui &amp; Co.
          </span>
        </div>
      );
  }
}

export function PortfolioHome({
  initialPosts,
}: {
  initialPosts: BlogPostMeta[];
}) {
  const { lang, customPosts } = usePreferences();
  const [activeVideoModal, setActiveVideoModal] = useState<boolean>(false);
  const [showSpotifyEmbed, setShowSpotifyEmbed] = useState<boolean>(false);

  const allPosts = useMemo(() => {
    const map = new Map<string, BlogPostMeta>();
    for (const p of initialPosts) map.set(p.slug, p);
    for (const c of customPosts) map.set(c.slug, c);
    return Array.from(map.values()).sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [initialPosts, customPosts]);

  const featuredPosts = allPosts.slice(0, 5);
  const featuredClients = PROFILE.clients.filter((c) => c.featured);
  const otherClients = PROFILE.clients.filter((c) => !c.featured);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 space-y-16">
      {/* INTRO */}
      <section id="sobre" className="space-y-6">
        <div className="flex items-center gap-4">
          <img
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="w-14 h-14 rounded-full object-cover border border-[var(--border-strong)]"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {PROFILE.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-[var(--text-secondary)] mt-0.5">
              <span className="text-emerald-400 font-medium">
                {PROFILE.role[lang]}
              </span>
              <span className="text-[var(--text-muted)]">•</span>
              <span>{PROFILE.previousBadge}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          {PROFILE.bio[lang].map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono-code">
          <a
            href="https://github.com/gstvribs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </a>

          <a
            href="https://x.com/gstvribs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <XIcon className="w-3.5 h-3.5" />
            <span>X / Twitter</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </a>

          <a
            href="https://www.linkedin.com/in/gustavo-ribeiro-miranda/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </a>

          <a
            href="https://medium.com/@gstvribs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Medium</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </a>
        </div>
      </section>

      {/* COMPANIES & CLIENTS */}
      <section className="space-y-3 pt-2 border-t border-[var(--border-subtle)]">
        <div className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
          {lang === "pt"
            ? "Empresas & Projetos Entregues"
            : "Companies & Past Clients"}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {featuredClients.map((client) => (
            <div
              key={client.id}
              className="px-4 py-2.5 rounded-xl surface-card border border-emerald-500/30 bg-emerald-500/5"
            >
              <BrandLogo id={client.id} featured />
            </div>
          ))}

          {otherClients.map((client) => (
            <div
              key={client.id}
              className="px-3.5 py-2.5 rounded-xl surface-card"
            >
              <BrandLogo id={client.id} featured={false} />
            </div>
          ))}
        </div>
      </section>

      {/* CAREER (COMPACT) */}
      <section id="experiencia" className="scroll-mt-24 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
            {lang === "pt" ? "Carreira" : "Career"}
          </h2>
          <a
            href="https://www.linkedin.com/in/gustavo-ribeiro-miranda/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono-code text-[var(--text-secondary)] hover:text-emerald-400 transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
          {PROFILE.experiences.map((exp) => (
            <div
              key={exp.company}
              className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sm text-[var(--text-primary)] hover:text-emerald-400 transition-colors"
                  >
                    {exp.company}
                  </a>
                  <span className="text-[var(--text-muted)]">·</span>
                  <span className="text-xs font-mono-code text-[var(--text-secondary)]">
                    {exp.role[lang]}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  {exp.summary[lang]}
                </p>
              </div>
              <span className="text-xs font-mono-code text-[var(--text-muted)] shrink-0">
                {exp.period[lang]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG POSTS */}
      <section id="blog" className="scroll-mt-24 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
            {lang === "pt" ? "Escrita & Blog" : "Writing & Blog"}
          </h2>

          <div className="flex items-center gap-3">
            <Link
              href="/studio"
              className="inline-flex items-center gap-1 text-xs font-mono-code text-emerald-400 hover:text-emerald-300"
            >
              <PenSquare className="w-3.5 h-3.5" />
              <span>{lang === "pt" ? "Novo post" : "New post"}</span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-xs font-mono-code text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <span>
                {lang === "pt"
                  ? `Todos (${allPosts.length})`
                  : `All (${allPosts.length})`}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 group"
            >
              <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-emerald-400 transition-colors">
                {post.title}
              </span>
              <span className="text-xs font-mono-code text-[var(--text-muted)] shrink-0">
                {post.date} · {post.readingTime}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* TALKS & PODCASTS */}
      <section id="palestras" className="scroll-mt-24 space-y-4">
        <h2 className="text-sm font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
          {lang === "pt" ? "Palestras & Podcasts" : "Talks & Podcasts"}
        </h2>

        <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
          {PROFILE.talksAndMedia.map((item) => (
            <div key={item.id} className="py-3.5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <a
                    href={item.primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--text-primary)] hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                  </a>
                  <div className="text-xs text-[var(--text-muted)]">
                    {item.event}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono-code shrink-0">
                  {item.id === "reactconf-br-2020" && (
                    <button
                      type="button"
                      onClick={() => setActiveVideoModal(true)}
                      className="inline-flex items-center gap-1 text-emerald-400 hover:underline cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-emerald-400" />
                      <span>{lang === "pt" ? "Vídeo" : "Video"}</span>
                    </button>
                  )}

                  {item.id === "realtalk-js-ep88" && (
                    <button
                      type="button"
                      onClick={() => setShowSpotifyEmbed((v) => !v)}
                      className="inline-flex items-center gap-1 text-emerald-400 hover:underline cursor-pointer"
                    >
                      <Headphones className="w-3 h-3" />
                      <span>{showSpotifyEmbed ? "Fechar" : "Ouvir"}</span>
                    </button>
                  )}

                  {item.secondaryUrl && item.secondaryLabel && (
                    <a
                      href={item.secondaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                      {item.secondaryLabel[lang]}
                    </a>
                  )}
                  <span className="text-[var(--text-muted)]">{item.date}</span>
                </div>
              </div>

              {item.id === "realtalk-js-ep88" && showSpotifyEmbed && (
                <div className="pt-2">
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/episode/2yplPmiiJ1x8YCJDj9hsT6?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Real Talk JavaScript Episode 88"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* OPEN SOURCE PROJECTS */}
      <section id="projetos" className="scroll-mt-24 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
            {lang === "pt" ? "Projetos Open Source" : "Open Source"}
          </h2>
          <a
            href="https://github.com/gstvribs?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono-code text-[var(--text-secondary)] hover:text-emerald-400 transition-colors"
          >
            <span>github.com/gstvribs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PROFILE.projects.map((project) => (
            <a
              key={project.slug}
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card rounded-2xl p-4 flex flex-col justify-between gap-2 group"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono-code text-xs font-semibold text-[var(--text-primary)] group-hover:text-emerald-400 transition-colors truncate">
                    {project.name}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {project.description[lang]}
                </p>
              </div>
              <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                {project.language}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* YOUTUBE TALK MODAL */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveVideoModal(false)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl overflow-hidden surface-card border border-[var(--border-strong)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-subtle)]">
              <h4 className="text-sm font-medium text-[var(--text-primary)]">
                Monorepo + Design Systems = ❤ — Gustavo Miranda (ReactConf BR
                2020)
              </h4>
              <button
                type="button"
                onClick={() => setActiveVideoModal(false)}
                className="p-1 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xo57BjNlcxI?autoplay=1"
                title="Monorepo + Design Systems = ❤ (Gustavo Miranda)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
