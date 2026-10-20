"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Edit3,
  List,
  Share2,
} from "lucide-react";
import type { BlogPost } from "@/lib/posts";
import { usePreferences } from "./PreferencesProvider";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Navbar";

export function BlogPostClient({
  serverPost,
  slug,
}: {
  serverPost: BlogPost | null;
  slug: string;
}) {
  const { lang, customPosts } = usePreferences();
  const [post, setPost] = useState<BlogPost | null>(serverPost);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!serverPost) {
      const localMatch = customPosts.find((p) => p.slug === slug);
      if (localMatch) {
        fetch("/api/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: localMatch.content,
            previewOnly: true,
          }),
        })
          .then((r) => r.json())
          .then((data) => {
            setPost({
              ...localMatch,
              html: data.html || `<p>${localMatch.content}</p>`,
              toc: data.toc || [],
            });
          })
          .catch(() => {
            setPost({
              ...localMatch,
              html: `<p>${localMatch.content}</p>`,
              toc: [],
            });
          });
      }
    } else {
      setPost(serverPost);
    }
  }, [serverPost, slug, customPosts]);

  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (total <= 0) {
        setScrollProgress(0);
        return;
      }
      setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center space-y-5">
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">
          {lang === "pt" ? "Artigo não encontrado" : "Article not found"}
        </h1>
        <p className="text-sm text-[var(--text-secondary)]">
          {lang === "pt"
            ? "O post solicitado não foi localizado. Que tal criar um novo artigo no Blog Studio?"
            : "The requested post was not found. Would you like to create it in the Blog Studio?"}
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/blog"
            className="px-4 py-2.5 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)]"
          >
            {lang === "pt" ? "Voltar ao Blog" : "Back to Blog"}
          </Link>
          <Link
            href="/studio"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950"
          >
            {lang === "pt" ? "Abrir Blog Studio" : "Open Blog Studio"}
          </Link>
        </div>
      </div>
    );
  }

  const shareText = encodeURIComponent(`${post.title} — by @gstvribs`);

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-sky-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <article className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-20">
        {/* Top Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[var(--text-secondary)] hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>
              {lang === "pt" ? "Todos os Artigos" : "All Articles"}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href={`/studio?edit=${post.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium surface-card text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <Edit3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {lang === "pt" ? "Editar no Studio" : "Edit in Studio"}
              </span>
            </Link>

            {post.canonicalUrl && (
              <a
                href={post.canonicalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium surface-card text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <span>{lang === "pt" ? "Ver no Medium" : "View on Medium"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Article Header */}
        <header className="max-w-3xl space-y-6 pb-10 border-b border-[var(--border-subtle)]">
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
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {lang === "pt" ? post.excerpt : post.excerptEn || post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            {/* Author Pill */}
            <div className="flex items-center gap-3">
              <img
                src="https://avatars.githubusercontent.com/u/7907966?v=4"
                alt="Gustavo Miranda"
                className="w-10 h-10 rounded-full border border-[var(--border-strong)]"
              />
              <div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  Gustavo Miranda
                </div>
                <div className="text-xs font-mono-code text-[var(--text-muted)]">
                  Software Engineer @ Uber • @gstvribs
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono-code bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Main Content + Sidebar TOC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">
          <div className="lg:col-span-8">
            <div
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {/* Bottom Author & Share Card */}
            <div className="mt-16 surface-card rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-4">
                  <img
                    src="https://avatars.githubusercontent.com/u/7907966?v=4"
                    alt="Gustavo Miranda"
                    className="w-14 h-14 rounded-2xl border border-[var(--border-strong)]"
                  />
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)]">
                      Gustavo Miranda
                    </h3>
                    <p className="text-xs font-mono-code text-emerald-400">
                      Software Engineer @ Uber • ex @CI&amp;T • @gstvribs
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      Global-Scale Software Engineering &amp; Platform Architecture
                    </p>
                  </div>
                </div>

                <a
                  href={`https://x.com/intent/tweet?text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors self-start sm:self-auto"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>
                    {lang === "pt" ? "Compartilhar no X" : "Share on X"}
                  </span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                <a
                  href="https://github.com/gstvribs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>github.com/gstvribs</span>
                </a>
                <span className="text-[var(--text-muted)]">•</span>
                <a
                  href="https://x.com/gstvribs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  <span>x.com/gstvribs</span>
                </a>
                <span className="text-[var(--text-muted)]">•</span>
                <a
                  href="https://www.linkedin.com/in/gustavo-ribeiro-miranda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sticky Table of Contents Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {post.toc.length > 0 && (
                <div className="surface-card rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-emerald-400">
                    <List className="w-3.5 h-3.5" />
                    <span>
                      {lang === "pt" ? "Neste Artigo" : "On This Page"}
                    </span>
                  </div>
                  <nav className="space-y-1.5 text-xs">
                    {post.toc.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block py-1 text-[var(--text-secondary)] hover:text-emerald-400 transition-colors ${
                          heading.level === 3 ? "pl-3 text-[11px]" : "font-medium"
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              <div className="surface-card rounded-2xl p-5 space-y-3">
                <div className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                  {lang === "pt" ? "Quer publicar outro artigo?" : "Write another post?"}
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {lang === "pt"
                    ? "Crie ou edite artigos em Markdown com preview em tempo real diretamente no Blog Studio."
                    : "Create or edit Markdown articles with real-time preview directly in the Blog Studio."}
                </p>
                <Link
                  href="/studio"
                  className="inline-flex items-center justify-center w-full gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 transition-colors"
                >
                  <span>
                    {lang === "pt" ? "Abrir Blog Studio" : "Open Blog Studio"}
                  </span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
