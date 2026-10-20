# Gustavo Ribeiro Miranda (`@gstvribs`) — Personal Portfolio & Blog

Portfólio pessoal, hub de engenharia e motor de blog em Markdown de **Gustavo Ribeiro Miranda** — **Software Engineer @ Uber**.

[![GitHub](https://img.shields.io/badge/GitHub-@gstvribs-181717?style=flat-square&logo=github)](https://github.com/gstvribs)
[![X (Twitter)](https://img.shields.io/badge/X-@gstvribs-000000?style=flat-square&logo=x)](https://x.com/gstvribs)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Gustavo_Ribeiro_Miranda-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/gustavo-ribeiro-miranda/)
[![Medium](https://img.shields.io/badge/Medium-@gstvribs-000000?style=flat-square&logo=medium)](https://medium.com/@gstvribs)

---

## ✨ Destaques Visuais & Arquitetura

- **Design Editorial de Alta Precisão**: Estética arquitetural Dark/Light com tipografia combinando `Plus Jakarta Sans`, `Instrument Serif` e `JetBrains Mono`.
- **Bilíngue (PT-BR / EN)**: Alternância instantânea entre Português e Inglês em toda a interface.
- **Command Palette (`⌘K` / `Ctrl+K`)**: Navegação rápida entre seções, artigos do blog, palestras, redes sociais e preferências.
- **Palestras & Podcasts Interativos**: Player integrado para a palestra na **ReactConf BR 2020** (*Monorepo + Design Systems = ❤*) e para o episódio #88 do podcast internacional **Real Talk JavaScript / Web Rush** (*Refactoring to React Hooks*).
- **Motor de Blog Duplo (Markdown + Blog Studio Visual)**:
  - Todos os artigos ficam em [`content/posts/*.md`](./content/posts) com frontmatter YAML, índice automático (`Table of Contents`), barra de progresso de leitura e busca por tags.
  - **Blog Studio (`/studio`)**: Editor visual com preview lado a lado em tempo real que salva diretamente em `content/posts/<slug>.md` (ou exporta o arquivo `.md`).
  - **CLI Generator**: Crie novos posts via terminal com `npm run new:post "Título do Artigo"`.

---

## 🚀 Como Rodar Localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

---

## ✍️ Como Criar Novos Blog Posts

### Opção 1 — Pelo Navegador (Blog Studio)
1. Acesse [`http://localhost:3000/studio`](http://localhost:3000/studio) (ou clique em **Novo Post** no topo do site).
2. Escreva o artigo em Markdown acompanhando o **Live Preview** ao lado.
3. Clique em **Publicar Artigo** — o arquivo `.md` será salvo automaticamente em `content/posts/<slug>.md`!

### Opção 2 — Pelo Terminal (CLI)
```bash
npm run new:post "Arquitetura de Micro-Frontends em Escala"
```
Isso gerará automaticamente o arquivo `content/posts/arquitetura-de-micro-frontends-em-escala.md` já com o frontmatter configurado.
