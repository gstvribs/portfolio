"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Language } from "@/lib/profile";

export interface LocalCustomPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  excerptEn: string;
  tags: string[];
  readingTime: string;
  coverImage?: string;
  canonicalUrl?: string;
  featured: boolean;
  content: string;
}

interface PreferencesContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
  commandOpen: boolean;
  setCommandOpen: (open: boolean) => void;
  customPosts: LocalCustomPost[];
  saveCustomPost: (post: LocalCustomPost) => void;
  deleteCustomPost: (slug: string) => void;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

const CUSTOM_POSTS_STORAGE_KEY = "gstvribs_custom_blog_posts_v1";

export function PreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Language>("pt");
  const [theme, setThemeState] = useState<"dark" | "light">("dark");
  const [commandOpen, setCommandOpen] = useState(false);
  const [customPosts, setCustomPosts] = useState<LocalCustomPost[]>([]);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("gstvribs_lang") as Language | null;
      if (savedLang === "pt" || savedLang === "en") {
        setLangState(savedLang);
      }

      const savedTheme = localStorage.getItem("gstvribs_theme") as
        | "dark"
        | "light"
        | null;
      if (savedTheme === "dark" || savedTheme === "light") {
        setThemeState(savedTheme);
        document.documentElement.dataset.theme = savedTheme;
      } else {
        document.documentElement.dataset.theme = "dark";
      }

      const rawPosts = localStorage.getItem(CUSTOM_POSTS_STORAGE_KEY);
      if (rawPosts) {
        const parsed = JSON.parse(rawPosts);
        if (Array.isArray(parsed)) {
          setCustomPosts(parsed);
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setCommandOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem("gstvribs_lang", next);
    } catch {
      // Ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "pt" ? "en" : "pt");
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("gstvribs_theme", next);
    } catch {
      // Ignore
    }
  };

  const saveCustomPost = (post: LocalCustomPost) => {
    setCustomPosts((prev) => {
      const filtered = prev.filter((p) => p.slug !== post.slug);
      const updated = [post, ...filtered].sort((a, b) =>
        a.date < b.date ? 1 : -1
      );
      try {
        localStorage.setItem(CUSTOM_POSTS_STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const deleteCustomPost = (slug: string) => {
    setCustomPosts((prev) => {
      const updated = prev.filter((p) => p.slug !== slug);
      try {
        localStorage.setItem(CUSTOM_POSTS_STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  return (
    <PreferencesContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        toggleTheme,
        commandOpen,
        setCommandOpen,
        customPosts,
        saveCustomPost,
        deleteCustomPost,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) {
    throw new Error("usePreferences must be used inside PreferencesProvider");
  }
  return ctx;
}
