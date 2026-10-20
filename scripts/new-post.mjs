#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const rawTitle = process.argv.slice(2).join(" ").trim();

if (!rawTitle) {
  console.error('❌ Uso: npm run new:post "Título do seu novo artigo"');
  process.exit(1);
}

const slug = rawTitle
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const today = new Date().toISOString().split("T")[0];
const postsDir = path.join(process.cwd(), "content", "posts");
fs.mkdirSync(postsDir, { recursive: true });

const filePath = path.join(postsDir, `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.error(`❌ O arquivo já existe: content/posts/${slug}.md`);
  process.exit(1);
}

const template = `---
title: "${rawTitle.replace(/"/g, '\\"')}"
date: "${today}"
excerpt: "Resumo do artigo em português para exibição nos cards do blog e SEO."
excerptEn: "English summary of the article for blog cards and SEO."
tags: ["engineering", "frontend", "architecture"]
readingTime: "5 min read"
coverImage: ""
canonicalUrl: ""
featured: true
---

## Introdução

Escreva a introdução do seu artigo aqui. Você pode usar **Markdown** completo, blocos de código, citações, listas e imagens.

\`\`\`typescript
export function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Principais Aprendizados

- Ponto importante de arquitetura ou engenharia
- Boas práticas de escalabilidade e Design Systems
- Conclusão prática para o leitor
`;

fs.writeFileSync(filePath, template, "utf8");
console.log(`✅ Novo post criado com sucesso em: content/posts/${slug}.md`);
console.log(`🔗 URL local: http://localhost:3000/blog/${slug}`);
