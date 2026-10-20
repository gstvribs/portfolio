import React from "react";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { BlogListClient } from "@/components/BlogListClient";

export const metadata: Metadata = {
  title: "Blog & Artigos Técnicos",
  description:
    "Artigos sobre Design Systems, Monorepos, React, Feature Toggles e Arquitetura de Software por Gustavo Miranda (@gstvribs).",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return <BlogListClient initialPosts={posts} />;
}
