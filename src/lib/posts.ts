import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogPostMeta {
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
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  html: string;
  toc: TocItem[];
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function renderMarkdownWithToc(markdown: string): {
  html: string;
  toc: TocItem[];
} {
  const toc: TocItem[] = [];
  const renderer = new marked.Renderer();

  renderer.heading = ({ tokens, depth }) => {
    const rawText = tokens.map((t) => ("text" in t ? t.text : "")).join("");
    const id = slugifyHeading(rawText || `section-${toc.length + 1}`);
    if (depth === 2 || depth === 3) {
      toc.push({ id, text: rawText, level: depth });
    }
    const innerHtml = marked.Parser.parseInline(tokens);
    return `<h${depth} id="${id}" class="scroll-mt-28">${innerHtml}</h${depth}>`;
  };

  const html = marked.parse(markdown, {
    renderer,
    gfm: true,
    breaks: false,
  }) as string;

  return { html, toc };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const posts: BlogPostMeta[] = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(POSTS_DIR, fileName);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    const words = content.trim().split(/\s+/).length;
    const computedReadingTime = `${Math.max(2, Math.round(words / 190))} min read`;

    return {
      slug,
      title: String(data.title || slug),
      date: String(data.date || "2025-01-01"),
      excerpt: String(data.excerpt || ""),
      excerptEn: String(data.excerptEn || data.excerpt || ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      readingTime: String(data.readingTime || computedReadingTime),
      coverImage: data.coverImage ? String(data.coverImage) : undefined,
      canonicalUrl: data.canonicalUrl ? String(data.canonicalUrl) : undefined,
      featured: Boolean(data.featured),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(POSTS_DIR)) {
    return null;
  }

  const safeSlug = slug.replace(/[^a-z0-9-_]/gi, "");
  const mdPath = path.join(POSTS_DIR, `${safeSlug}.md`);
  if (!fs.existsSync(mdPath)) {
    return null;
  }

  const raw = fs.readFileSync(mdPath, "utf8");
  const { data, content } = matter(raw);
  const { html, toc } = renderMarkdownWithToc(content);

  const words = content.trim().split(/\s+/).length;
  const computedReadingTime = `${Math.max(2, Math.round(words / 190))} min read`;

  return {
    slug: safeSlug,
    title: String(data.title || safeSlug),
    date: String(data.date || "2025-01-01"),
    excerpt: String(data.excerpt || ""),
    excerptEn: String(data.excerptEn || data.excerpt || ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: String(data.readingTime || computedReadingTime),
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    canonicalUrl: data.canonicalUrl ? String(data.canonicalUrl) : undefined,
    featured: Boolean(data.featured),
    content,
    html,
    toc,
  };
}
