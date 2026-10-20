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
          <div className="w-7 h-7 rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] flex items-center justify-center p-1.5">
            <svg
              viewBox="0 0 926.906 321.777"
              fill="currentColor"
              className="w-full h-full"
              aria-label="Uber"
            >
              <path d="M53.328,229.809c3.917,10.395,9.34,19.283,16.27,26.664c6.93,7.382,15.14,13.031,24.63,16.948c9.491,3.917,19.81,5.875,30.958,5.875c10.847,0,21.015-2.034,30.506-6.102s17.776-9.792,24.856-17.173c7.08-7.382,12.579-16.194,16.496-26.438c3.917-10.244,5.875-21.692,5.875-34.347V0h47.453v316.354h-47.001v-29.376c-10.545,11.147-22.974,19.734-37.285,25.761c-14.312,6.025-29.752,9.038-46.323,9.038c-16.873,0-32.615-2.938-47.228-8.813c-14.612-5.875-27.267-14.235-37.962-25.082S15.441,264.006,9.265,248.79C3.088,233.575,0,216.628,0,197.947V0h47.453v195.236C47.453,207.891,49.411,219.414,53.328,229.809z" />
              <path d="M332.168,0v115.243c10.545-10.545,22.748-18.905,36.607-25.082s28.924-9.265,45.193-9.265c16.873,0,32.689,3.163,47.453,9.49c14.763,6.327,27.567,14.914,38.414,25.761s19.434,23.651,25.761,38.414c6.327,14.764,9.49,30.431,9.49,47.002c0,16.57-3.163,32.162-9.49,46.774c-6.327,14.613-14.914,27.343-25.761,38.188c-10.847,10.847-23.651,19.434-38.414,25.761c-14.764,6.327-30.581,9.49-47.453,9.49c-16.27,0-31.409-3.088-45.419-9.265c-14.01-6.176-26.288-14.537-36.833-25.082v28.924h-45.193V0H332.168z M337.365,232.746c4.067,9.642,9.717,18.078,16.948,25.309c7.231,7.231,15.667,12.956,25.308,17.174c9.642,4.218,20.036,6.327,31.184,6.327c10.847,0,21.09-2.109,30.731-6.327s18.001-9.942,25.083-17.174c7.08-7.23,12.729-15.667,16.947-25.309c4.218-9.641,6.327-20.035,6.327-31.183c0-11.148-2.109-21.618-6.327-31.41s-9.867-18.303-16.947-25.534c-7.081-7.23-15.441-12.88-25.083-16.947s-19.885-6.102-30.731-6.102c-10.846,0-21.09,2.034-30.731,6.102s-18.077,9.717-25.309,16.947c-7.23,7.231-12.955,15.742-17.173,25.534c-4.218,9.792-6.327,20.262-6.327,31.41C331.264,212.711,333.298,223.105,337.365,232.746z" />
              <path d="M560.842,155.014c6.025-14.462,14.312-27.191,24.856-38.188s23.049-19.659,37.511-25.986s30.129-9.49,47.001-9.49c16.571,0,31.937,3.013,46.098,9.038c14.16,6.026,26.362,14.387,36.606,25.083c10.244,10.695,18.229,23.35,23.952,37.962c5.725,14.613,8.587,30.506,8.587,47.68v14.914H597.901c1.507,9.34,4.52,18.002,9.039,25.985c4.52,7.984,10.168,14.914,16.947,20.789c6.779,5.876,14.462,10.471,23.049,13.784c8.587,3.314,17.7,4.972,27.342,4.972c27.418,0,49.563-11.299,66.435-33.896l32.991,24.404c-11.449,15.366-25.609,27.418-42.481,36.155c-16.873,8.737-35.854,13.106-56.944,13.106c-17.174,0-33.217-3.014-48.131-9.039s-27.869-14.462-38.866-25.309s-19.659-23.576-25.986-38.188s-9.491-30.506-9.491-47.679C551.803,184.842,554.817,169.476,560.842,155.014z M624.339,137.162c-12.805,10.696-21.316,24.932-25.534,42.708h140.552c-3.917-17.776-12.278-32.012-25.083-42.708c-12.805-10.695-27.794-16.043-44.967-16.043C652.133,121.119,637.144,126.467,624.339,137.162z" />
              <path d="M870.866,142.359c-9.641,10.545-14.462,24.856-14.462,42.934v131.062h-45.646V85.868h45.193v28.472c5.725-9.34,13.182-16.722,22.371-22.145c9.189-5.424,20.111-8.136,32.766-8.136h15.817v42.482h-18.981C892.86,126.542,880.507,131.814,870.866,142.359z" />
            </svg>
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
        <div className="flex items-center gap-2.5">
          {/* Official O Boticário / Grupo Boticário emblem & wordmark */}
          <div className="w-7 h-7 rounded-lg bg-[#007a53] text-white flex items-center justify-center p-1">
            <svg viewBox="0 0 125 65" fill="currentColor" className="w-full h-full" aria-hidden="true">
              <path d="m107.96 31.118c5.2609-2.776 9.1028-7.5303 9.1028-13.843 0-10.983-8.4816-17.275-23.257-17.275h-27.94v64.763h30.16c14.491 0 23.499-7.0134 23.499-18.286 0.0115-7.6151-5.0294-12.671-11.565-15.359zm-13.912-2.4528h-17.372v-23.288h16.374c9.2186 0 13.144 3.5611 13.144 11.897 0 8.0461-3.631 11.391-12.145 11.391zm-17.364 30.719v-25.342h17.207c5.4408 0 14.576 1.6344 14.576 12.585 0 8.9492-3.9577 12.757-13.238 12.757zm-76.483-22.35c0-15.437 11.775-27.966 26.308-27.966 14.501 0 26.308 12.53 26.308 27.966 0 15.434-11.817 27.965-26.308 27.965-14.491-0.001146-26.309-12.531-26.309-27.968zm10.196 0c0 14.132 6.0196 22.586 16.112 22.586v-0.02063c10.05 0 16.049-8.4335 16.049-22.567 0-14.133-5.9566-22.587-16.049-22.587-10.092 0-16.112 8.4541-16.112 22.586z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-[var(--text-primary)]">
            Grupo Boticário
          </span>
        </div>
      );
    case "bradesco":
      return (
        <div className="flex items-center gap-2.5">
          {/* Official Banco Bradesco emblem */}
          <div className="w-7 h-7 rounded-lg bg-[#CC092F] text-white flex items-center justify-center p-1.5">
            <svg viewBox="0 0 25 23.1" fill="currentColor" className="w-full h-full" aria-hidden="true">
              <path d="M11.6,16.4l-1.4.8c-.2.1-.2.2-.2.4v5.1c0,.2.1.3.2.3h1.4V16.4ZM14.2,14.9l-1.8,1h-.1v6.9h2a.4.4,0,0,0,.4-.4V15.2A.3.3,0,0,0,14.2,14.9Zm-2.8-10A22.5,22.5,0,0,0,7,5.3a8.2,8.2,0,0,1,6.6-3.2A9,9,0,0,1,19,3.9c.2.2.4.3.6.1a.4.4,0,0,0,0-.6A9.3,9.3,0,0,0,12.2,0,9.5,9.5,0,0,0,3.5,6.1L.3,7.4q-.4.3-.3.6a.4.4,0,0,0,.6.2,18.3,18.3,0,0,1,2.5-.6A6.1,6.1,0,0,0,3,9a9.3,9.3,0,0,0,4.3,8c.2.1.5.1.6-.1s.1-.4-.1-.6a7.9,7.9,0,0,1-2.6-6,6.4,6.4,0,0,1,.7-3.1L8.7,7c6.8,0,12.6,2.3,12.6,5.2s-1.9,3-4.2,4c-.5.2-.5.4-.5.6s.3.3.6.2c4-1.2,6.9-3.4,6.9-5.9S18.5,4.9,11.4,4.9Z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-[var(--text-primary)]">
            Bradesco
          </span>
        </div>
      );
    case "mitsui":
      return (
        <div className="flex items-center gap-2.5">
          {/* Official Mitsui & Co. crest */}
          <div className="w-7 h-7 rounded-lg bg-[#004098] text-white flex items-center justify-center p-1.5">
            <svg viewBox="0 0 28 28" fill="currentColor" className="w-full h-full" aria-hidden="true">
              <path d="M 13.8,23.0975 L 4.5,13.79875 L 13.8,4.4975 L 23.1,13.79875 L 13.8,23.0975 z M 27.585,12.305 L 26.09,10.80875 L 24.595,12.305 L 15.295,3.0025 L 16.80375,1.49375 L 15.30875,0 L 13.8,1.50875 L 12.30375,0.0125 L 10.81,1.50875 L 12.305,3.0025 L 3.00375,12.305 L 1.49625,10.79625 L 0,12.28875 L 1.51,13.79875 L 0.03,15.28 L 1.52375,16.7725 L 3.00375,15.29375 L 12.30375,24.5925 L 10.81,26.09 L 12.30375,27.58375 L 13.8,26.09 L 15.28,27.5675 L 16.775,26.07375 L 15.295,24.5925 L 24.595,15.29375 L 26.09,16.78875 L 27.585,15.29375 L 26.09,13.79875 L 27.585,12.305" />
              <path d="M 9.64875,18.705 L 9.64875,16.51412 L 18.08162,16.51412 L 18.08162,18.705 L 9.64875,18.705 z" />
              <path d="M 9.5375,14.9125 L 9.5375,12.72787 L 18.00125,12.72787 L 18.00125,14.9125 L 9.5375,14.9125 z" />
              <path d="M 9.555,11.04375 L 9.555,8.85912 L 18.01887,8.85912 L 18.01887,11.04375 L 9.555,11.04375 z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-[var(--text-primary)]">
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-2">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full surface-card text-xs font-mono-code">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[var(--text-primary)] font-medium">
                {PROFILE.role[lang]}
              </span>
              <span className="text-[var(--text-muted)]">·</span>
              <span className="text-[var(--text-secondary)]">
                {PROFILE.previousBadge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-[var(--text-primary)] leading-[1.08]">
              Gustavo{" "}
              <span className="font-serif-editorial italic font-normal text-emerald-400">
                Miranda
              </span>
            </h1>
          </div>

          <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 order-first sm:order-last">
            <img
              src={PROFILE.avatar}
              alt={PROFILE.name}
              className="w-full h-full rounded-2xl object-cover border border-[var(--border-strong)] shadow-lg"
            />
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
            <div key={exp.company} className="py-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-base text-[var(--text-primary)] hover:text-emerald-400 transition-colors"
                  >
                    {exp.company}
                  </a>
                  <span className="text-[var(--text-muted)]">·</span>
                  <span className="text-xs font-mono-code text-emerald-400">
                    {exp.role[lang]}
                  </span>
                </div>
                <span className="text-xs font-mono-code text-[var(--text-muted)] shrink-0">
                  {exp.period[lang]}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {exp.summary[lang]}
              </p>

              {exp.subRoles && (
                <div className="space-y-3 pl-3 border-l border-[var(--border-strong)] mt-2">
                  {exp.subRoles.map((sub) => (
                    <div key={sub.team.en} className="space-y-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="text-xs font-semibold text-[var(--text-primary)]">
                          {sub.team[lang]}
                        </span>
                        <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                          {sub.period[lang]}
                        </span>
                      </div>
                      <ul className="space-y-1 text-xs text-[var(--text-secondary)] leading-relaxed list-disc pl-4">
                        {sub.bullets[lang].map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.stack.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono-code bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
