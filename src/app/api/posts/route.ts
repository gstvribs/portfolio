import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { getAllPosts, getPostBySlug, renderMarkdownWithToc } from "@/lib/posts";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const post = getPostBySlug(slug);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ post });
  }

  const posts = getAllPosts();
  return NextResponse.json({ posts });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      slug: rawSlug,
      date,
      excerpt,
      excerptEn,
      tags,
      coverImage,
      canonicalUrl,
      featured,
      content,
      previewOnly,
    } = body;

    if (previewOnly) {
      const { html, toc } = renderMarkdownWithToc(String(content || ""));
      return NextResponse.json({ html, toc });
    }

    if (!title || !content) {
      return NextResponse.json(
        { error: "Título e conteúdo em Markdown são obrigatórios." },
        { status: 400 }
      );
    }

    const slug = (rawSlug || title)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const pubDate = date || new Date().toISOString().split("T")[0];
    const parsedTags = Array.isArray(tags)
      ? tags
      : String(tags || "engineering, frontend")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);

    const words = String(content).trim().split(/\s+/).length;
    const readingTime = `${Math.max(2, Math.round(words / 190))} min read`;

    const fileContent = `---
title: "${String(title).replace(/"/g, '\\"')}"
date: "${pubDate}"
excerpt: "${String(excerpt || title).replace(/"/g, '\\"')}"
excerptEn: "${String(excerptEn || excerpt || title).replace(/"/g, '\\"')}"
tags: ${JSON.stringify(parsedTags)}
readingTime: "${readingTime}"
coverImage: "${String(coverImage || "").replace(/"/g, '\\"')}"
canonicalUrl: "${String(canonicalUrl || "").replace(/"/g, '\\"')}"
featured: ${Boolean(featured)}
---

${String(content).trim()}
`;

    const postsDir = path.join(process.cwd(), "content", "posts");
    try {
      fs.mkdirSync(postsDir, { recursive: true });
      const filePath = path.join(postsDir, `${slug}.md`);
      fs.writeFileSync(filePath, fileContent, "utf8");
      return NextResponse.json({
        savedToDisk: true,
        slug,
        filePath: `content/posts/${slug}.md`,
        fileContent,
      });
    } catch {
      // Read-only filesystem (e.g., serverless production); return fileContent for client download/localStorage
      return NextResponse.json({
        savedToDisk: false,
        slug,
        filePath: `content/posts/${slug}.md`,
        fileContent,
      });
    }
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erro ao processar post" },
      { status: 500 }
    );
  }
}
