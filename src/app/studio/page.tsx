import React, { Suspense } from "react";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { BlogStudioClient } from "@/components/BlogStudioClient";

export const metadata: Metadata = {
  title: "Blog Studio — Criar & Editar Artigos",
  description:
    "Ambiente interativo em Markdown para criar e publicar artigos no portfólio de Gustavo Ribeiro Miranda (@gstvribs).",
};

export default function StudioPage() {
  const posts = getAllPosts();
  return (
    <Suspense fallback={<div className="p-12 text-center">Carregando Studio...</div>}>
      <BlogStudioClient existingPosts={posts} />
    </Suspense>
  );
}
