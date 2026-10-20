import React from "react";
import { getAllPosts } from "@/lib/posts";
import { PortfolioHome } from "@/components/PortfolioHome";

export default function HomePage() {
  const posts = getAllPosts();
  return <PortfolioHome initialPosts={posts} />;
}
