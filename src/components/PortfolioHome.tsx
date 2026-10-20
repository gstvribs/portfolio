"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  ExternalLink,
  FileCode2,
  FolderGit2,
  Headphones,
  Layers,
  Mic,
  PenSquare,
  Play,
  Sparkles,
  Star,
  Terminal,
  Video,
  X,
} from "lucide-react";
import { PROFILE } from "@/lib/profile";
import type { BlogPostMeta } from "@/lib/posts";
import { usePreferences } from "./PreferencesProvider";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Navbar";

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

  const featuredPosts = allPosts.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-12 space-y-28">
      {/* HERO SECTION */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Socials */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full surface-card text-xs font-mono-code">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {PROFILE.role[lang]}
              </span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="text-[var(--text-secondary)]">
                {PROFILE.location} ({PROFILE.pronouns})
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.55rem] font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]">
              {lang === "pt" ? (
                <>
                  Arquitetura de software em{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    escala global
                  </span>
                  , Design Systems & excelência em frontend.
                </>
              ) : (
                <>
                  Software architecture at{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    global scale
                  </span>
                  , Design Systems & frontend craft.
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              {PROFILE.subheadline[lang]}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/15"
              >
                <BookOpen className="w-4 h-4" />
                <span>
                  {lang === "pt"
                    ? `Ler Artigos (${allPosts.length})`
                    : `Read Articles (${allPosts.length})`}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/studio"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium surface-card text-[var(--text-primary)] hover:border-emerald-500/40"
              >
                <PenSquare className="w-4 h-4 text-emerald-400" />
                <span>
                  {lang === "pt"
                    ? "Criar Post no Blog"
                    : "Create Blog Post"}
                </span>
              </Link>

              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium surface-card text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>
                  {lang === "pt" ? "Ver Projetos" : "View Projects"}
                </span>
              </a>
            </div>

            {/* Social Links Strip */}
            <div className="pt-3 border-t border-[var(--border-subtle)]">
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-[var(--text-muted)] mb-3">
                {lang === "pt"
                  ? "Conecte-se nas redes oficiais"
                  : "Connect on official channels"}
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://github.com/gstvribs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-emerald-500/50 group"
                >
                  <GitHubIcon className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-emerald-400 transition-colors" />
                  <span>GitHub</span>
                  <span className="font-mono-code text-[var(--text-muted)]">
                    @gstvribs
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://x.com/gstvribs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-emerald-500/50 group"
                >
                  <XIcon className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-emerald-400 transition-colors" />
                  <span>X (Twitter)</span>
                  <span className="font-mono-code text-[var(--text-muted)]">
                    @gstvribs
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://www.linkedin.com/in/gustavo-ribeiro-miranda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-emerald-500/50 group"
                >
                  <LinkedInIcon className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-emerald-400 transition-colors" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://medium.com/@gstvribs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-emerald-500/50 group"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-emerald-400 transition-colors" />
                  <span>Medium</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Profile Card & Terminal Telemetry */}
          <div className="lg:col-span-5">
            <div className="surface-card rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-2xl">
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

              {/* Profile Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-[var(--border-subtle)]">
                <div className="relative shrink-0">
                  <img
                    src={PROFILE.avatar}
                    alt={PROFILE.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-[var(--border-strong)] shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-emerald-500 text-slate-950 font-mono-code text-[10px] font-bold">
                    UBER
                  </span>
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    {PROFILE.name}
                  </h2>
                  <p className="text-xs font-mono-code text-emerald-400 mt-0.5">
                    {PROFILE.role[lang]}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    ex-Master Software Engineer @ CI&T
                  </p>
                </div>
              </div>

              {/* Engineering Telemetry Code Box */}
              <div className="my-5 rounded-2xl bg-[#090b10] border border-white/10 p-4 font-mono-code text-xs leading-relaxed text-slate-300">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>gstvribs.profile.ts</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500/70" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                  </span>
                </div>
                <div className="space-y-1">
                  <div>
                    <span className="text-sky-400">const</span>{" "}
                    <span className="text-emerald-300">engineer</span> = {"{"}
                  </div>
                  <div className="pl-4">
                    company:{" "}
                    <span className="text-amber-300">&quot;@uber&quot;</span>,
                  </div>
                  <div className="pl-4">
                    focus: [
                    <span className="text-amber-300">
                      &quot;Design Systems&quot;
                    </span>
                    ,{" "}
                    <span className="text-amber-300">&quot;Monorepos&quot;</span>
                    , <span className="text-amber-300">&quot;React&quot;</span>
                    ],
                  </div>
                  <div className="pl-4">
                    speaker: [
                    <span className="text-amber-300">
                      &quot;ReactConf BR&quot;
                    </span>
                    , <span className="text-amber-300">&quot;TDC&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;Web Rush&quot;</span>
                    ],
                  </div>
                  <div>{"};"}</div>
                </div>
              </div>

              {/* 4 Key Stats Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {PROFILE.stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl p-3.5 bg-[var(--bg-elevated)]/80 border border-[var(--border-subtle)]"
                  >
                    <div className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-[var(--text-secondary)] mt-0.5 leading-snug">
                      {stat.label[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & ARCHITECTURAL PILLARS */}
      <section id="sobre" className="scroll-mt-24 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {lang === "pt"
                  ? "01 / Sobre & Visão de Engenharia"
                  : "01 / About & Engineering Vision"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              {lang === "pt" ? (
                <>
                  Onde rigor técnico encontra{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    design sistemático
                  </span>
                  .
                </>
              ) : (
                <>
                  Where engineering rigor meets{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    systematic design
                  </span>
                  .
                </>
              )}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pt-2">
              {PROFILE.about[lang].map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROFILE.pillars.map((pillar, i) => (
              <div
                key={i}
                className="surface-card rounded-2xl p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono-code text-xs font-bold">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {pillar.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {pillar.description[lang]}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono-code bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER & EXPERIENCE TIMELINE */}
      <section id="experiencia" className="scroll-mt-24 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-emerald-400">
              <Briefcase className="w-3.5 h-3.5" />
              <span>
                {lang === "pt"
                  ? "02 / Trajetória Profissional"
                  : "02 / Career & Experience"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              {lang === "pt" ? (
                <>
                  Impacto em{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    grandes ecossistemas
                  </span>
                </>
              ) : (
                <>
                  Impact across{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    global ecosystems
                  </span>
                </>
              )}
            </h2>
          </div>

          <a
            href="https://www.linkedin.com/in/gustavo-ribeiro-miranda/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-emerald-500/40 self-start sm:self-auto"
          >
            <LinkedInIcon className="w-4 h-4 text-sky-400" />
            <span>
              {lang === "pt"
                ? "Ver perfil completo no LinkedIn"
                : "View full profile on LinkedIn"}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="space-y-5">
          {PROFILE.experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="surface-card rounded-3xl p-6 sm:p-8 relative overflow-hidden"
            >
              {idx === 0 && (
                <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-emerald-500/15 border-b border-l border-emerald-500/30 text-emerald-400 font-mono-code text-[11px] font-semibold">
                  {lang === "pt" ? "ATUAL • @UBER" : "CURRENT • @UBER"}
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-[var(--text-primary)] hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{exp.company}</span>
                      <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
                    </a>
                  </div>
                  <div className="text-sm font-medium text-emerald-400">
                    {exp.role[lang]}
                  </div>
                  <div className="text-xs font-mono-code text-[var(--text-muted)]">
                    {exp.period[lang]} • {exp.location}
                  </div>
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono-code bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {exp.description[lang]}
                  </p>
                  <ul className="space-y-2.5">
                    {exp.achievements[lang].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN SOURCE & REPOSITORIES */}
      <section id="projetos" className="scroll-mt-24 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-emerald-400">
              <Code2 className="w-3.5 h-3.5" />
              <span>
                {lang === "pt"
                  ? "03 / Open Source & Arquitetura"
                  : "03 / Open Source & Architecture"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              {lang === "pt" ? (
                <>
                  Repositórios &{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    Design Systems
                  </span>
                </>
              ) : (
                <>
                  Repositories &{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    Design Systems
                  </span>
                </>
              )}
            </h2>
          </div>

          <a
            href="https://github.com/gstvribs?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-emerald-500/40 self-start sm:self-auto"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>github.com/gstvribs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROFILE.projects.map((project) => (
            <div
              key={project.slug}
              className="surface-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-mono-code font-semibold text-base text-[var(--text-primary)] group-hover:text-emerald-400 transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                        {project.language}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono-code bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{project.stars}</span>
                  </div>
                </div>

                <div className="text-sm font-medium text-[var(--text-primary)]">
                  {project.tagline[lang]}
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description[lang]}
                </p>
              </div>

              <div className="space-y-4 pt-3 border-t border-[var(--border-subtle)]">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono-code bg-[var(--bg-elevated)] text-[var(--text-secondary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>
                      {lang === "pt" ? "Ver Código no GitHub" : "View Source on GitHub"}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Docs / Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TALKS, PODCASTS & COMMUNITY */}
      <section id="palestras" className="scroll-mt-24 space-y-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-emerald-400">
            <Mic className="w-3.5 h-3.5" />
            <span>
              {lang === "pt"
                ? "04 / Palestras, Podcasts & Comunidade"
                : "04 / Talks, Podcasts & Community"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            {lang === "pt" ? (
              <>
                Compartilhando conhecimento no{" "}
                <span className="font-serif-editorial italic font-normal text-emerald-400">
                  palco e no microfone
                </span>
              </>
            ) : (
              <>
                Sharing insights on{" "}
                <span className="font-serif-editorial italic font-normal text-emerald-400">
                  stage and airwaves
                </span>
              </>
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROFILE.talksAndMedia.map((item) => (
            <div
              key={item.id}
              className="surface-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.type === "talk" && <Video className="w-3.5 h-3.5" />}
                    {item.type === "podcast" && (
                      <Headphones className="w-3.5 h-3.5" />
                    )}
                    {item.type === "slides" && (
                      <Layers className="w-3.5 h-3.5" />
                    )}
                    <span>{item.badge[lang]}</span>
                  </span>
                  <span className="text-xs font-mono-code text-[var(--text-muted)]">
                    {item.date}
                  </span>
                </div>

                {item.thumbnail && (
                  <div
                    onClick={() => setActiveVideoModal(true)}
                    className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] group cursor-pointer aspect-video bg-black"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono-code text-[var(--text-muted)] mt-1">
                    {item.event}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description[lang]}
                </p>

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

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                {item.id === "reactconf-br-2020" && (
                  <button
                    type="button"
                    onClick={() => setActiveVideoModal(true)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-slate-950" />
                    <span>
                      {lang === "pt" ? "Assistir Palestra" : "Watch Talk"}
                    </span>
                  </button>
                )}

                {item.id === "realtalk-js-ep88" && (
                  <button
                    type="button"
                    onClick={() => setShowSpotifyEmbed((v) => !v)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer"
                  >
                    <Headphones className="w-3.5 h-3.5" />
                    <span>
                      {showSpotifyEmbed
                        ? lang === "pt"
                          ? "Ocultar Player"
                          : "Hide Player"
                        : lang === "pt"
                        ? "Ouvir Aqui (Spotify)"
                        : "Listen Here (Spotify)"}
                    </span>
                  </button>
                )}

                <a
                  href={item.primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-emerald-500/40"
                >
                  <span>
                    {item.type === "talk"
                      ? lang === "pt"
                        ? "Abrir Link Oficial"
                        : "Open Official Link"
                      : item.type === "podcast"
                      ? "Spotify"
                      : lang === "pt"
                      ? "Abrir Apresentação"
                      : "Open Presentation"}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {item.secondaryUrl && item.secondaryLabel && (
                  <a
                    href={item.secondaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-secondary)] hover:text-emerald-400"
                  >
                    <span>{item.secondaryLabel[lang]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG & WRITING SECTION */}
      <section id="blog" className="scroll-mt-24 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-emerald-400">
              <BookOpen className="w-3.5 h-3.5" />
              <span>
                {lang === "pt"
                  ? "05 / Blog & Artigos Técnicos"
                  : "05 / Technical Blog & Writing"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              {lang === "pt" ? (
                <>
                  Publicações sobre{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    arquitetura, React & Design Systems
                  </span>
                </>
              ) : (
                <>
                  Writings on{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    architecture, React & Design Systems
                  </span>
                </>
              )}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              <PenSquare className="w-3.5 h-3.5" />
              <span>
                {lang === "pt" ? "Escrever Novo Post" : "Write New Post"}
              </span>
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-emerald-500/40"
            >
              <span>
                {lang === "pt"
                  ? `Ver todos os ${allPosts.length} artigos`
                  : `View all ${allPosts.length} articles`}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="surface-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs font-mono-code text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{post.date}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-emerald-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                  {lang === "pt" ? post.excerpt : post.excerptEn || post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono-code bg-[var(--bg-elevated)] text-[var(--text-secondary)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 group-hover:translate-x-1 transition-transform shrink-0">
                  <span>{lang === "pt" ? "Ler artigo" : "Read post"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Authoring Callout Banner */}
        <div className="surface-card rounded-3xl p-6 sm:p-8 border border-emerald-500/25 bg-gradient-to-r from-emerald-500/10 via-transparent to-sky-500/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-emerald-400">
              <FileCode2 className="w-4 h-4" />
              <span>
                {lang === "pt"
                  ? "MOTOR DE BLOG INTEGRADO (MARKDOWN + STUDIO VISUAL)"
                  : "BUILT-IN BLOG ENGINE (MARKDOWN + VISUAL STUDIO)"}
              </span>
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              {lang === "pt"
                ? "Publique novos posts pelo navegador ou via CLI em segundos"
                : "Publish new blog posts from your browser or via CLI in seconds"}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {lang === "pt"
                ? 'Use o Blog Studio interativo (/studio) com preview em tempo real para salvar direto em content/posts/*.md, ou rode npm run new:post "Título do Artigo" no terminal.'
                : 'Use the interactive Blog Studio (/studio) with live Markdown preview to save directly into content/posts/*.md, or run npm run new:post "Article Title" in your terminal.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              <PenSquare className="w-4 h-4" />
              <span>
                {lang === "pt" ? "Abrir Blog Studio" : "Open Blog Studio"}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* YOUTUBE TALK MODAL */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveVideoModal(false)}
        >
          <div
            className="w-full max-w-4xl rounded-3xl overflow-hidden surface-card border border-[var(--border-strong)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border-subtle)]">
              <div>
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                  Monorepo + Design Systems = ❤ — Gustavo Miranda (ReactConf BR
                  2020)
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(false)}
                className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
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
