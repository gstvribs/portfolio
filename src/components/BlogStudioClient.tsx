"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Code,
  Copy,
  Download,
  Eye,
  FileCode2,
  Heading2,
  List,
  PenSquare,
  Quote,
  Save,
  Sparkles,
  Terminal,
} from "lucide-react";
import type { BlogPostMeta } from "@/lib/posts";
import { usePreferences } from "./PreferencesProvider";

const DEFAULT_MARKDOWN = `## Contexto & Motivação

Ao construir aplicações web e **Design Systems** em larga escala, decisões de arquitetura tomadas no início do projeto determinam a velocidade e a resiliência de dezenas de times.

> Boas abstrações reduzem a carga cognitiva e transformam boas práticas no caminho mais fácil para o desenvolvedor.

## Arquitetura Proposta

Aqui está um exemplo prático de implementação em TypeScript:

\`\`\`typescript
export interface DesignToken<T = string> {
  name: string;
  value: T;
  category: "color" | "spacing" | "typography";
}

export function resolveToken(token: DesignToken): string {
  return \`var(--ds-\${token.category}-\${token.name}, \${token.value})\`;
}
\`\`\`

## Principais Aprendizados

- **Versionamento semântico independente** facilita adoção incremental.
- **Testes de contrato** garantem segurança entre fronteiras de serviços e pacotes.
- **Documentação viva** aproxima engenharia e design no dia a dia.
`;

export function BlogStudioClient({
  existingPosts,
}: {
  existingPosts: BlogPostMeta[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editSlug = searchParams.get("edit");
  const { lang, saveCustomPost } = usePreferences();

  const [title, setTitle] = useState(
    "Escalando Design Systems e Monorepos no Mundo Real"
  );
  const [slug, setSlug] = useState(
    "escalando-design-systems-e-monorepos-no-mundo-real"
  );
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [tags, setTags] = useState(
    "design-systems, monorepo, frontend, architecture"
  );
  const [excerpt, setExcerpt] = useState(
    "Estratégias práticas para arquitetar, versionar e escalar Design Systems e bibliotecas de componentes em grandes organizações."
  );
  const [excerptEn, setExcerptEn] = useState(
    "Practical strategies for architecting, versioning, and scaling Design Systems and component libraries across large engineering organizations."
  );
  const [featured, setFeatured] = useState(true);
  const [content, setContent] = useState(DEFAULT_MARKDOWN);
  const [previewHtml, setPreviewHtml] = useState("");
  const [activeTab, setActiveTab] = useState<"split" | "write" | "preview">(
    "split"
  );
  const [saving, setSaving] = useState(false);
  const [saveResult, setSaveResult] = useState<{
    slug: string;
    filePath: string;
    savedToDisk: boolean;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Load post if ?edit=slug is present
  useEffect(() => {
    if (!editSlug) return;
    fetch(`/api/posts?slug=${encodeURIComponent(editSlug)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data?.post) {
          setTitle(data.post.title);
          setSlug(data.post.slug);
          setSlugManuallyEdited(true);
          setDate(data.post.date);
          setTags((data.post.tags || []).join(", "));
          setExcerpt(data.post.excerpt || "");
          setExcerptEn(data.post.excerptEn || data.post.excerpt || "");
          setFeatured(Boolean(data.post.featured));
          setContent(data.post.content || "");
        }
      })
      .catch(() => {
        // Ignore
      });
  }, [editSlug]);

  // Auto-update slug when title changes unless edited manually
  useEffect(() => {
    if (!slugManuallyEdited && title) {
      const nextSlug = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setSlug(nextSlug);
    }
  }, [title, slugManuallyEdited]);

  // Live Markdown preview rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, previewOnly: true }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.html) setPreviewHtml(data.html);
        })
        .catch(() => {
          // Ignore
        });
    }, 150);
    return () => clearTimeout(timer);
  }, [content]);

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const readingTime = `${Math.max(2, Math.round(wordCount / 190))} min read`;

  const buildFullMarkdownFile = () => {
    const parsedTags = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    return `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
excerptEn: "${(excerptEn || excerpt).replace(/"/g, '\\"')}"
tags: ${JSON.stringify(parsedTags)}
readingTime: "${readingTime}"
coverImage: ""
canonicalUrl: ""
featured: ${featured}
---

${content.trim()}
`;
  };

  const handlePublish = async () => {
    setSaving(true);
    setSaveResult(null);
    try {
      const parsedTags = tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          date,
          excerpt,
          excerptEn: excerptEn || excerpt,
          tags: parsedTags,
          featured,
          content,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        saveCustomPost({
          slug: data.slug,
          title,
          date,
          excerpt,
          excerptEn: excerptEn || excerpt,
          tags: parsedTags,
          readingTime,
          featured,
          content,
        });
        setSaveResult({
          slug: data.slug,
          filePath: data.filePath,
          savedToDisk: Boolean(data.savedToDisk),
        });
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDownloadMd = () => {
    const md = buildFullMarkdownFile();
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug || "novo-post"}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyMd = async () => {
    const md = buildFullMarkdownFile();
    await navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const insertSnippet = (snippet: string) => {
    setContent((prev) => `${prev}\n${snippet}\n`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
        <div className="space-y-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[var(--text-secondary)] hover:text-violet-400"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>
              {lang === "pt" ? "Voltar para o Blog" : "Back to Blog"}
            </span>
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
              <PenSquare className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Blog Studio{" "}
                <span className="font-serif-editorial italic font-normal text-violet-400">
                  Markdown
                </span>
              </h1>
              <p className="text-xs text-[var(--text-secondary)]">
                {lang === "pt"
                  ? "Crie ou edite artigos com preview em tempo real. Salva direto em content/posts/*.md."
                  : "Create or edit articles with live preview. Saves directly to content/posts/*.md."}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <select
            value={editSlug || ""}
            onChange={(e) => {
              if (e.target.value) {
                router.push(`/studio?edit=${e.target.value}`);
              } else {
                router.push("/studio");
              }
            }}
            className="px-3 py-2 rounded-xl text-xs font-mono-code surface-card text-[var(--text-secondary)] focus:outline-none cursor-pointer"
          >
            <option value="">
              {lang === "pt"
                ? "+ Novo Artigo em Branco"
                : "+ New Blank Article"}
            </option>
            {existingPosts.map((p) => (
              <option key={p.slug} value={p.slug}>
                ✎ {p.title.slice(0, 42)}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={handleCopyMd}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-violet-500/40 cursor-pointer"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-violet-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            <span>
              {copied
                ? lang === "pt"
                  ? "Copiado!"
                  : "Copied!"
                : lang === "pt"
                ? "Copiar .md"
                : "Copy .md"}
            </span>
          </button>

          <button
            type="button"
            onClick={handleDownloadMd}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium surface-card text-[var(--text-primary)] hover:border-violet-500/40 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>
              {lang === "pt" ? "Baixar .md" : "Download .md"}
            </span>
          </button>

          <button
            type="button"
            onClick={handlePublish}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-violet-500 text-white hover:bg-violet-400 transition-all shadow-lg shadow-violet-500/20 cursor-pointer disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>
              {saving
                ? lang === "pt"
                  ? "Salvando..."
                  : "Saving..."
                : lang === "pt"
                ? "Publicar Artigo"
                : "Publish Article"}
            </span>
          </button>
        </div>
      </div>

      {/* Save Notification Banner */}
      {saveResult && (
        <div className="rounded-2xl p-4 bg-violet-500/15 border border-violet-500/35 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-violet-300">
            <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
            <span>
              {saveResult.savedToDisk
                ? lang === "pt"
                  ? `Artigo gravado com sucesso em ${saveResult.filePath}!`
                  : `Article saved directly to ${saveResult.filePath}!`
                : lang === "pt"
                ? `Artigo publicado no navegador! Baixe o arquivo ${saveResult.filePath} para commitar no Git.`
                : `Article published in browser! Download ${saveResult.filePath} to commit to Git.`}
            </span>
          </div>
          <Link
            href={`/blog/${saveResult.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-violet-500 text-white hover:bg-violet-400 shrink-0"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>
              {lang === "pt" ? "Ver Artigo Publicado" : "View Published Post"}
            </span>
          </Link>
        </div>
      )}

      {/* Frontmatter Metadata Form */}
      <div className="surface-card rounded-3xl p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6 space-y-1.5">
            <label className="text-xs font-mono-code text-[var(--text-muted)]">
              {lang === "pt" ? "Título do Artigo" : "Article Title"}
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-violet-500/50"
            />
          </div>

          <div className="md:col-span-4 space-y-1.5">
            <label className="text-xs font-mono-code text-[var(--text-muted)]">
              Slug (`content/posts/{slug || "..."}.md`)
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => {
                setSlugManuallyEdited(true);
                setSlug(e.target.value);
              }}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-sm font-mono-code text-violet-400 focus:outline-none focus:border-violet-500/50"
            />
          </div>

          <div className="md:col-span-2 space-y-1.5">
            <label className="text-xs font-mono-code text-[var(--text-muted)]">
              {lang === "pt" ? "Data" : "Date"}
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-sm font-mono-code text-[var(--text-primary)] focus:outline-none focus:border-violet-500/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5 space-y-1.5">
            <label className="text-xs font-mono-code text-[var(--text-muted)]">
              {lang === "pt" ? "Resumo (Português)" : "Excerpt (Portuguese)"}
            </label>
            <input
              type="text"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-violet-500/50"
            />
          </div>

          <div className="md:col-span-4 space-y-1.5">
            <label className="text-xs font-mono-code text-[var(--text-muted)]">
              {lang === "pt" ? "Resumo (Inglês)" : "Excerpt (English)"}
            </label>
            <input
              type="text"
              value={excerptEn}
              onChange={(e) => setExcerptEn(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-violet-500/50"
            />
          </div>

          <div className="md:col-span-3 space-y-1.5">
            <label className="text-xs font-mono-code text-[var(--text-muted)]">
              Tags (vírgula)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono-code text-[var(--text-primary)] focus:outline-none focus:border-violet-500/50"
            />
          </div>
        </div>
      </div>

      {/* Editor Toolbar & Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => insertSnippet("## Novo Tópico")}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs surface-card text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            <Heading2 className="w-3.5 h-3.5" />
            <span>H2</span>
          </button>
          <button
            type="button"
            onClick={() =>
              insertSnippet("```typescript\n// Seu código aqui\n```")
            }
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs surface-card text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Code</span>
          </button>
          <button
            type="button"
            onClick={() => insertSnippet("> Citação ou destaque arquitetural")}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs surface-card text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            <Quote className="w-3.5 h-3.5" />
            <span>Quote</span>
          </button>
          <button
            type="button"
            onClick={() => insertSnippet("- Item 1\n- Item 2")}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs surface-card text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            <List className="w-3.5 h-3.5" />
            <span>List</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono-code text-[var(--text-muted)]">
            {wordCount} words • {readingTime}
          </span>
          <div className="inline-flex rounded-xl p-1 surface-card">
            {(["split", "write", "preview"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-mono-code capitalize cursor-pointer ${
                  activeTab === tab
                    ? "bg-violet-500 text-white font-semibold"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Split Editor & Live Preview */}
      <div
        className={`grid gap-6 ${
          activeTab === "split" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {(activeTab === "split" || activeTab === "write") && (
          <div className="surface-card rounded-3xl overflow-hidden flex flex-col">
            <div className="px-4 py-2.5 border-b border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono-code text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <FileCode2 className="w-3.5 h-3.5 text-violet-400" />
                <span>MARKDOWN EDITOR</span>
              </span>
              <span>content/posts/{slug}.md</span>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={22}
              className="w-full flex-1 p-5 bg-transparent font-mono-code text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed focus:outline-none resize-y"
              placeholder="Escreva seu artigo em Markdown..."
            />
          </div>
        )}

        {(activeTab === "split" || activeTab === "preview") && (
          <div className="surface-card rounded-3xl overflow-hidden flex flex-col">
            <div className="px-4 py-2.5 border-b border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono-code text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>LIVE PREVIEW</span>
              </span>
              <span>{readingTime}</span>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[640px]">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
                {title}
              </h2>
              <div
                className="article-prose"
                dangerouslySetInnerHTML={{ __html: previewHtml }}
              />
            </div>
          </div>
        )}
      </div>

      {/* CLI Workflow Tip */}
      <div className="surface-card rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono-code text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-violet-400 shrink-0" />
          <span>
            {lang === "pt"
              ? "Prefere criar pelo terminal? Execute:"
              : "Prefer terminal workflow? Run:"}
          </span>
        </div>
        <code className="px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] text-violet-400 border border-[var(--border-subtle)]">
          npm run new:post &quot;{title || "Meu Novo Artigo"}&quot;
        </code>
      </div>
    </div>
  );
}
