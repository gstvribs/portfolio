"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  PenSquare,
  Search,
  Tag,
} from "lucide-react";
import type { BlogPostMeta } from "@/lib/posts";
import { usePreferences } from "./PreferencesProvider";

export function BlogListClient({
  initialPosts,
}: {
  initialPosts: BlogPostMeta[];
}) {
  const { lang, customPosts } = usePreferences();
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const allPosts = useMemo(() => {
    const map = new Map<string, BlogPostMeta>();
    for (const p of initialPosts) map.set(p.slug, p);
    for (const c of customPosts) map.set(c.slug, c);
    return Array.from(map.values()).sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [initialPosts, customPosts]);

  const allTags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of allPosts) {
      for (const t of post.tags) {
        counts.set(t, (counts.get(t) || 0) + 1);
      }
    }
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allPosts.filter((post) => {
      const matchesTag =
        selectedTag === "all" || post.tags.includes(selectedTag);
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.excerptEn.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesTag && matchesQuery;
    });
  }, [allPosts, search, selectedTag]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16 space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[var(--text-secondary)] hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>
            {lang === "pt" ? "Voltar para o Portfólio" : "Back to Portfolio"}
          </span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-emerald-400">
              <BookOpen className="w-3.5 h-3.5" />
              <span>
                {lang === "pt"
                  ? "Engenharia de Software, Arquitetura & Escala"
                  : "Software Engineering, Architecture & Scale"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              {lang === "pt" ? (
                <>
                  Artigos &{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    Notas Técnicas
                  </span>
                </>
              ) : (
                <>
                  Articles &{" "}
                  <span className="font-serif-editorial italic font-normal text-emerald-400">
                    Technical Notes
                  </span>
                </>
              )}
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
              {lang === "pt"
                ? "Reflexões práticas sobre engenharia de software em larga escala, arquitetura web, Feature Toggles, CI/CD, monorepos e aprendizados técnicos."
                : "Practical deep dives into large-scale software engineering, web architecture, Feature Toggles, CI/CD, monorepos, and technical lessons."}
            </p>
          </div>

          <Link
            href="/studio"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/15 self-start md:self-auto shrink-0"
          >
            <PenSquare className="w-4 h-4" />
            <span>
              {lang === "pt" ? "Criar Novo Post" : "Create New Post"}
            </span>
          </Link>
        </div>
      </div>

      {/* Search & Tag Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              lang === "pt"
                ? "Buscar por título, tema ou tecnologia (ex: design systems, redux, feature toggle)..."
                : "Search by title, topic, or technology (e.g., design systems, redux, feature toggle)..."
            }
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl surface-card text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-emerald-500/50"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
          <button
            type="button"
            onClick={() => setSelectedTag("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono-code transition-colors shrink-0 cursor-pointer ${
              selectedTag === "all"
                ? "bg-emerald-500 text-slate-950 font-semibold"
                : "surface-card text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            {lang === "pt"
              ? `Todos (${allPosts.length})`
              : `All (${allPosts.length})`}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() =>
                setSelectedTag(selectedTag === tag ? "all" : tag)
              }
              className={`px-3 py-1.5 rounded-xl text-xs font-mono-code transition-colors shrink-0 cursor-pointer ${
                selectedTag === tag
                  ? "bg-emerald-500 text-slate-950 font-semibold"
                  : "surface-card text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.length === 0 ? (
          <div className="surface-card rounded-3xl p-12 text-center space-y-3">
            <p className="text-base text-[var(--text-secondary)]">
              {lang === "pt"
                ? "Nenhum artigo encontrado para este filtro."
                : "No articles found matching your filter."}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedTag("all");
              }}
              className="text-xs font-mono-code text-emerald-400 underline cursor-pointer"
            >
              {lang === "pt" ? "Limpar filtros" : "Reset filters"}
            </button>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="surface-card rounded-3xl p-6 sm:p-8 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1.5 text-emerald-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readingTime}</span>
                    </span>
                    {post.featured && (
                      <>
                        <span>•</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] uppercase">
                          {lang === "pt" ? "Destaque" : "Featured"}
                        </span>
                      </>
                    )}
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-emerald-400 transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {lang === "pt"
                      ? post.excerpt
                      : post.excerptEn || post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono-code bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        <Tag className="w-2.5 h-2.5 text-emerald-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between gap-3 shrink-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all"
                  >
                    <span>
                      {lang === "pt" ? "Ler Artigo Completo" : "Read Full Post"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {post.canonicalUrl && (
                    <a
                      href={post.canonicalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono-code text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    >
                      <span>Medium / Original</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
