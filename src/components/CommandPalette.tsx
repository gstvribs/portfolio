"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Code2,
  FolderGit2,
  Globe,
  Mic,
  Moon,
  PenSquare,
  Search,
  Sun,
  X,
} from "lucide-react";
import { usePreferences } from "./PreferencesProvider";
import type { BlogPostMeta } from "@/lib/posts";

export function CommandPalette({ posts }: { posts: BlogPostMeta[] }) {
  const router = useRouter();
  const {
    lang,
    toggleLang,
    theme,
    toggleTheme,
    commandOpen,
    setCommandOpen,
    customPosts,
  } = usePreferences();
  const [query, setQuery] = useState("");

  const mergedPosts = useMemo(() => {
    const map = new Map<string, BlogPostMeta>();
    for (const p of posts) map.set(p.slug, p);
    for (const c of customPosts) map.set(c.slug, c);
    return Array.from(map.values()).sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [posts, customPosts]);

  if (!commandOpen) return null;

  const actions = [
    {
      category: lang === "pt" ? "Navegação & Blog Studio" : "Navigation & Studio",
      items: [
        {
          label:
            lang === "pt"
              ? "Criar Novo Post no Blog Studio"
              : "Create New Post in Blog Studio",
          hint: "/studio",
          icon: <PenSquare className="w-4 h-4 text-emerald-400" />,
          onSelect: () => {
            setCommandOpen(false);
            router.push("/studio");
          },
        },
        {
          label:
            lang === "pt"
              ? "Explorar Todos os Artigos do Blog"
              : "Browse All Blog Articles",
          hint: "/blog",
          icon: <BookOpen className="w-4 h-4 text-sky-400" />,
          onSelect: () => {
            setCommandOpen(false);
            router.push("/blog");
          },
        },
        {
          label: lang === "pt" ? "Carreira & Trajetória (Uber, CI&T)" : "Career & Experience (Uber, CI&T)",
          hint: "#experiencia",
          icon: <Briefcase className="w-4 h-4 text-[var(--text-secondary)]" />,
          onSelect: () => {
            setCommandOpen(false);
            router.push("/#experiencia");
          },
        },
        {
          label: lang === "pt" ? "Projetos Open Source" : "Open Source Projects",
          hint: "#projetos",
          icon: <FolderGit2 className="w-4 h-4 text-[var(--text-secondary)]" />,
          onSelect: () => {
            setCommandOpen(false);
            router.push("/#projetos");
          },
        },
        {
          label: lang === "pt" ? "Palestras & Podcasts" : "Talks & Podcasts",
          hint: "#palestras",
          icon: <Mic className="w-4 h-4 text-[var(--text-secondary)]" />,
          onSelect: () => {
            setCommandOpen(false);
            router.push("/#palestras");
          },
        },
      ],
    },
    {
      category: lang === "pt" ? "Redes Sociais & Links" : "Social Profiles",
      items: [
        {
          label: "GitHub (@gstvribs)",
          hint: "github.com/gstvribs",
          icon: <Code2 className="w-4 h-4 text-[var(--text-secondary)]" />,
          onSelect: () => {
            window.open("https://github.com/gstvribs", "_blank");
            setCommandOpen(false);
          },
        },
        {
          label: "X / Twitter (@gstvribs)",
          hint: "x.com/gstvribs",
          icon: <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)]" />,
          onSelect: () => {
            window.open("https://x.com/gstvribs", "_blank");
            setCommandOpen(false);
          },
        },
        {
          label: "LinkedIn (Gustavo Ribeiro Miranda)",
          hint: "linkedin.com/in/gustavo-ribeiro-miranda",
          icon: <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)]" />,
          onSelect: () => {
            window.open(
              "https://www.linkedin.com/in/gustavo-ribeiro-miranda/",
              "_blank"
            );
            setCommandOpen(false);
          },
        },
        {
          label: "Medium (@gstvribs)",
          hint: "medium.com/@gstvribs",
          icon: <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)]" />,
          onSelect: () => {
            window.open("https://medium.com/@gstvribs", "_blank");
            setCommandOpen(false);
          },
        },
      ],
    },
    {
      category: lang === "pt" ? "Preferências" : "Preferences",
      items: [
        {
          label:
            lang === "pt" ? "Mudar idioma para Inglês (EN)" : "Switch language to Português (PT)",
          hint: lang.toUpperCase(),
          icon: <Globe className="w-4 h-4 text-[var(--text-secondary)]" />,
          onSelect: () => {
            toggleLang();
            setCommandOpen(false);
          },
        },
        {
          label:
            theme === "dark"
              ? lang === "pt"
                ? "Ativar Modo Claro"
                : "Switch to Light Mode"
              : lang === "pt"
              ? "Ativar Modo Escuro"
              : "Switch to Dark Mode",
          hint: theme,
          icon:
            theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            ),
          onSelect: () => {
            toggleTheme();
            setCommandOpen(false);
          },
        },
      ],
    },
    {
      category: lang === "pt" ? "Artigos Publicados" : "Published Articles",
      items: mergedPosts.map((p) => ({
        label: p.title,
        hint: p.readingTime,
        icon: <BookOpen className="w-4 h-4 text-emerald-400/80" />,
        onSelect: () => {
          setCommandOpen(false);
          router.push(`/blog/${p.slug}`);
        },
      })),
    },
  ];

  const q = query.trim().toLowerCase();

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm"
      onClick={() => setCommandOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-2xl surface-card border border-[var(--border-strong)] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-subtle)]">
          <Search className="w-4 h-4 text-[var(--text-muted)]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === "pt"
                ? "Buscar artigos, projetos, redes sociais ou ações..."
                : "Search articles, projects, social links, or actions..."
            }
            className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setCommandOpen(false)}
            className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-2 space-y-4">
          {actions.map((group) => {
            const filtered = group.items.filter(
              (item) =>
                !q ||
                item.label.toLowerCase().includes(q) ||
                item.hint.toLowerCase().includes(q)
            );
            if (filtered.length === 0) return null;

            return (
              <div key={group.category}>
                <div className="px-3 py-1 text-[11px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                  {group.category}
                </div>
                <div className="space-y-0.5 mt-1">
                  {filtered.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={item.onSelect}
                      className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-left text-sm text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {item.icon}
                        <span className="truncate">{item.label}</span>
                      </div>
                      <span className="text-xs font-mono-code text-[var(--text-muted)] shrink-0">
                        {item.hint}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
