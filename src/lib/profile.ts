export type Language = "pt" | "en";

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  platform: "github" | "x" | "linkedin" | "medium" | "email";
}

export interface ExperienceItem {
  company: string;
  companyUrl: string;
  role: { pt: string; en: string };
  period: { pt: string; en: string };
  location: string;
  highlight: string;
  description: { pt: string; en: string };
  achievements: { pt: string[]; en: string[] };
  stack: string[];
}

export interface ProjectItem {
  name: string;
  slug: string;
  tagline: { pt: string; en: string };
  description: { pt: string; en: string };
  repoUrl: string;
  liveUrl?: string;
  stars: number;
  language: string;
  tags: string[];
  featured: boolean;
}

export interface TalkAndMediaItem {
  id: string;
  type: "talk" | "podcast" | "slides";
  title: string;
  event: string;
  date: string;
  description: { pt: string; en: string };
  primaryUrl: string;
  secondaryUrl?: string;
  secondaryLabel?: { pt: string; en: string };
  thumbnail?: string;
  badge: { pt: string; en: string };
}

export const PROFILE = {
  name: "Gustavo Miranda",
  shortName: "Gustavo Miranda",
  handle: "@gstvribs",
  pronouns: "he/him",
  avatar: "https://avatars.githubusercontent.com/u/7907966?v=4",
  location: "Brasil",
  email: "gu_ribeiro@live.com",
  currentCompany: "Uber",
  role: {
    pt: "Software Engineer na Uber",
    en: "Software Engineer at Uber",
  },
  headline: {
    pt: "Engenharia de software em escala global, Design Systems e arquitetura frontend moderna.",
    en: "Global-scale software engineering, Design Systems, and modern frontend architecture.",
  },
  subheadline: {
    pt: "Construindo plataformas resilientes, bibliotecas de componentes distribuídas em monorepo e experiências digitais de alta precisão. Atualmente Software Engineer na Uber, palestrante na ReactConf BR e TDC, e autor técnico.",
    en: "Building resilient platforms, monorepo-distributed component libraries, and high-precision digital experiences. Currently Software Engineer at Uber, speaker at ReactConf BR & TDC, and technical author.",
  },
  about: {
    pt: [
      "Sou Gustavo Miranda (@gstvribs), engenheiro de software brasileiro apaixonado por arquitetura de interfaces, produtividade de engenharia e sistemas distribuídos em larga escala.",
      "Atualmente atuo como Software Engineer na Uber, desenvolvendo soluções robustas para milhões de usuários. Antes disso, atuei como Master Software Engineer e especialista em Design Systems na CI&T, liderando a arquitetura de bibliotecas de componentes multi-marca, estratégias de Feature Toggles e monorepos em ecossistemas React e Angular.",
      "Acredito que grandes produtos nascem na interseção entre excelência técnica e design intencional — onde tokens semânticos, testes de contrato, automação de releases e Developer Experience (DX) permitem que times inteiros entreguem com velocidade e consistência.",
    ],
    en: [
      "I'm Gustavo Miranda (@gstvribs), a Brazilian Software Engineer passionate about frontend architecture, engineering productivity, and large-scale systems.",
      "I currently work as a Software Engineer at Uber, building mission-critical web experiences at scale. Previously, I served as a Master Software Engineer & Design Systems Specialist at CI&T, leading multi-brand component libraries, Feature Toggle architectures, and monorepo ecosystems across React and Angular.",
      "I believe exceptional software lives at the intersection of engineering rigor and intentional design — where semantic tokens, contract testing, automated release pipelines, and Developer Experience (DX) empower product teams to ship with speed and confidence.",
    ],
  },
  stats: [
    {
      value: "10+",
      label: {
        pt: "Anos em Engenharia de Software",
        en: "Years in Software Engineering",
      },
    },
    {
      value: "Uber",
      label: {
        pt: "Atuação Atual em Escala Global",
        en: "Current Global-Scale Engineering",
      },
    },
    {
      value: "50+ ★",
      label: {
        pt: "Estrelas em PoCs de Design Systems",
        en: "Stars on Design System Monorepos",
      },
    },
    {
      value: "7+",
      label: {
        pt: "Artigos & Palestras Internacionais",
        en: "Articles, Talks & Podcasts",
      },
    },
  ],
  socials: [
    {
      name: "GitHub",
      handle: "@gstvribs",
      url: "https://github.com/gstvribs",
      platform: "github",
    },
    {
      name: "X (Twitter)",
      handle: "@gstvribs",
      url: "https://x.com/gstvribs",
      platform: "x",
    },
    {
      name: "LinkedIn",
      handle: "in/gustavo-ribeiro-miranda",
      url: "https://www.linkedin.com/in/gustavo-ribeiro-miranda/",
      platform: "linkedin",
    },
    {
      name: "Medium",
      handle: "@gstvribs",
      url: "https://medium.com/@gstvribs",
      platform: "medium",
    },
    {
      name: "Email",
      handle: "gu_ribeiro@live.com",
      url: "mailto:gu_ribeiro@live.com",
      platform: "email",
    },
  ] as SocialLink[],
  pillars: [
    {
      title: {
        pt: "Design Systems & Tokens",
        en: "Design Systems & Tokens",
      },
      description: {
        pt: "Arquitetura ponta a ponta de Design Systems: tokens agnósticos, Atomic Design, documentação viva em Storybook/Zeroheight e governança entre Design e Engenharia.",
        en: "End-to-end Design System architecture: framework-agnostic tokens, Atomic Design, living documentation in Storybook/Zeroheight, and cross-functional governance.",
      },
      tags: ["Design Tokens", "Storybook", "Atomic Design", "Radix / shadcn", "Zeroheight"],
    },
    {
      title: {
        pt: "Monorepos & Developer Experience",
        en: "Monorepos & Developer Experience",
      },
      description: {
        pt: "Versionamento semântico independente de pacotes, Conventional Commits, Lerna/Nx, publicação automatizada em registries privados e automação de CI/CD.",
        en: "Independent semantic package versioning, Conventional Commits, Lerna/Nx, automated private registry publishing, and CI/CD pipelines.",
      },
      tags: ["Monorepo", "Lerna", "Nx", "Conventional Commits", "CI/CD"],
    },
    {
      title: {
        pt: "Arquitetura Frontend em Escala",
        en: "Large-Scale Frontend Architecture",
      },
      description: {
        pt: "Aplicações web de alta performance com React, Next.js e TypeScript. Gerenciamento de estado previsível, Feature Flags resilientes e testes de contrato.",
        en: "High-performance web applications with React, Next.js, and TypeScript. Predictable state management, resilient Feature Flags, and API contract testing.",
      },
      tags: ["React 19", "Next.js", "TypeScript", "Redux Toolkit", "Feature Toggles"],
    },
    {
      title: {
        pt: "Qualidade, Contratos & Cloud",
        en: "Quality, Contracts & Cloud DevOps",
      },
      description: {
        pt: "Testes de contrato de APIs (Consumer-Driven Contracts), containerização com Docker, pipelines distribuídos no Azure DevOps e entregas contínuas seguras.",
        en: "Consumer-driven API contract testing, Docker containerization, distributed Azure DevOps artifact pipelines, and safe continuous delivery.",
      },
      tags: ["Contract Testing", "Docker", "Azure Pipelines", "Vitest / Jest", "Node.js"],
    },
  ],
  experiences: [
    {
      company: "Uber",
      companyUrl: "https://www.uber.com",
      role: {
        pt: "Software Engineer",
        en: "Software Engineer",
      },
      period: {
        pt: "Atual",
        en: "Present",
      },
      location: "Brasil",
      highlight: "@uber",
      description: {
        pt: "Engenharia de software em escala global, atuando na construção e evolução de aplicações web críticas, arquitetura de plataformas, performance e experiência de desenvolvimento.",
        en: "Global-scale software engineering, building and evolving mission-critical web applications, platform architecture, performance optimization, and developer workflows.",
      },
      achievements: {
        pt: [
          "Desenvolvimento de interfaces e sistemas distribuídos de alta confiabilidade operando em escala global na Uber.",
          "Foco em arquitetura modular, observabilidade, experimentação segura com Feature Flags e excelência operacional.",
          "Colaboração multidisciplinar com times globais de produto, design e plataforma.",
        ],
        en: [
          "Engineering high-reliability web interfaces and distributed systems operating at global scale at Uber.",
          "Focus on modular architecture, observability, safe experimentation via Feature Flags, and operational excellence.",
          "Cross-functional collaboration with global product, design, and platform engineering teams.",
        ],
      },
      stack: ["React", "TypeScript", "Monorepo", "Design Systems", "Distributed Systems", "Node.js"],
    },
    {
      company: "CI&T",
      companyUrl: "https://ciandt.com",
      role: {
        pt: "Master Software Engineer & Design Systems Specialist",
        en: "Master Software Engineer & Design Systems Specialist",
      },
      period: {
        pt: "Trajetória Sênior / Especialista",
        en: "Senior / Master Engineering Tenure",
      },
      location: "Campinas, SP • Brasil",
      highlight: "Design Systems & Architecture",
      description: {
        pt: "Liderança técnica em arquitetura frontend e Design Systems para clientes globais de grande porte, definindo padrões de monorepo, versionamento de pacotes, refatoração para React Hooks e entregas contínuas.",
        en: "Technical leadership in frontend architecture and Design Systems for enterprise global clients, defining monorepo standards, package versioning, React Hooks migrations, and continuous delivery.",
      },
      achievements: {
        pt: [
          "Autor da série de referência 'The Complete Guide About Design Systems' (Engineering & Walkthrough) publicada no canal oficial da CI&T e destacada no Design Systems Repo.",
          "Palestrante no TDC Future (The Developer's Conference) apresentando 'Design System: Eficiência e produtividade para equipes de produtos'.",
          "Convidado internacional no podcast Real Talk JavaScript / Web Rush (Ep. 88) com John Papa, Ward Bell, Dan Wahlin e Craig Shoemaker sobre refatoração para React Hooks e Atomic Design.",
        ],
        en: [
          "Author of the acclaimed series 'The Complete Guide About Design Systems' (Engineering & Walkthrough) published on CI&T's publication and featured on Design Systems Repo.",
          "Speaker at TDC Future (The Developer's Conference) presenting 'Design System: Efficiency and productivity for product teams'.",
          "Featured international guest on Real Talk JavaScript / Web Rush Podcast (Ep. 88) with John Papa, Ward Bell, Dan Wahlin, and Craig Shoemaker discussing React Hooks and Atomic Design.",
        ],
      },
      stack: ["React", "Angular", "Lerna", "Storybook", "Redux Toolkit", "Design Tokens", "Azure DevOps"],
    },
    {
      company: "Full-Stack & Platform Engineering",
      companyUrl: "https://github.com/gstvribs",
      role: {
        pt: "Software Engineer",
        en: "Software Engineer",
      },
      period: {
        pt: "Fundação & Evolução Técnica",
        en: "Engineering Foundation",
      },
      location: "Brasil",
      highlight: "Web & Cloud",
      description: {
        pt: "Desenvolvimento de aplicações corporativas full-stack, automação de pipelines de artefatos privados (NuGet/npm), containerização Docker e estudos de arquitetura CSS-in-JS vs Pre/Post-Processors.",
        en: "Full-stack enterprise application development, private artifact pipeline automation (NuGet/npm), Docker containerization, and CSS-in-JS vs Pre/Post-Processors architectural studies.",
      },
      achievements: {
        pt: [
          "Implementação de pipelines CI/CD com Docker, .NET Core e Azure Artifacts para distribuição segura de pacotes internos.",
          "Pesquisa e apresentações técnicas comparando Styled Components e Sass sob critérios de performance, componibilidade e escalabilidade.",
          "Contribuições open-source em bibliotecas de componentes React (Material UI) e suítes de testes de contrato de API.",
        ],
        en: [
          "Implemented CI/CD pipelines with Docker, .NET Core, and Azure Artifacts for secure internal package distribution.",
          "Conducted comparative engineering benchmarks on Styled Components vs. Sass across performance, composability, and scalability.",
          "Open-source contributions to React Material UI component libraries and API contract testing suites.",
        ],
      },
      stack: ["JavaScript", "TypeScript", ".NET Core", "Docker", "Styled Components", "Sass/SCSS"],
    },
  ] as ExperienceItem[],
  projects: [
    {
      name: "monorepo-react-component-library",
      slug: "monorepo-react-component-library",
      tagline: {
        pt: "Arquitetura Monorepo de referência para Design Systems em React",
        en: "Reference Monorepo architecture for React Design Systems",
      },
      description: {
        pt: "Prova de conceito completa demonstrando como estruturar, documentar com Storybook e publicar componentes React de forma independente (`@thedesignsystem/button`, etc.) usando Lerna, Commitizen e Conventional Commits.",
        en: "Comprehensive proof of concept demonstrating how to structure, document with Storybook, and independently publish React components (`@thedesignsystem/button`, etc.) using Lerna, Commitizen, and Conventional Commits.",
      },
      repoUrl: "https://github.com/gstvribs/monorepo-react-component-library",
      liveUrl: "https://thedesignsystem.gustavoribeiro.dev/",
      stars: 38,
      language: "JavaScript / React",
      tags: ["React", "Monorepo", "Lerna", "Storybook", "Design Systems", "Conventional Commits"],
      featured: true,
    },
    {
      name: "monorepo-angular-component-library",
      slug: "monorepo-angular-component-library",
      tagline: {
        pt: "Monorepo de Design Tokens e Componentes Angular com Compodoc & Storybook",
        en: "Design Tokens & Angular Component Library Monorepo with Compodoc & Storybook",
      },
      description: {
        pt: "Arquitetura modular separando `@thedesignsystem/tokens` (cores, tipografia, iconografia) e `@thedesignsystem/components`, com registro privado Verdaccio, Angular Playground e documentação automatizada.",
        en: "Modular architecture separating `@thedesignsystem/tokens` (colors, typography, iconography) and `@thedesignsystem/components`, featuring private registry integration, Angular Playground, and automated documentation.",
      },
      repoUrl: "https://github.com/gstvribs/monorepo-angular-component-library",
      liveUrl: "https://thedesignsystem.gustavoribeiro.dev/",
      stars: 10,
      language: "SCSS / Angular",
      tags: ["Angular", "Design Tokens", "SCSS", "Lerna", "Storybook", "Compodoc"],
      featured: true,
    },
    {
      name: "dojo-contract-tests",
      slug: "dojo-contract-tests",
      tagline: {
        pt: "Laboratório prático de Testes de Contrato para APIs modernas",
        en: "Practical laboratory for API Contract Testing",
      },
      description: {
        pt: "Repositório de referência para validação de contratos entre serviços e consumidores, prevenindo quebras de integração em arquiteturas orientadas a microsserviços e frontends desacoplados.",
        en: "Reference repository for validating API contracts between providers and consumers, preventing integration regressions in microservice and decoupled frontend architectures.",
      },
      repoUrl: "https://github.com/gstvribs/dojo-contract-tests",
      stars: 1,
      language: "JavaScript",
      tags: ["Contract Testing", "API", "Quality Engineering", "JavaScript", "Automated Tests"],
      featured: true,
    },
    {
      name: "material-ui-currency-textfield",
      slug: "material-ui-currency-textfield",
      tagline: {
        pt: "Componente de input monetário formatado para React Material UI",
        en: "Formatted currency input component for React Material UI",
      },
      description: {
        pt: "Componente React especializado em entrada e formatação de valores monetários integrado ao ecossistema Material UI com suporte a máscaras e localização.",
        en: "Specialized React component for currency input and formatting integrated into the Material UI ecosystem with locale and mask support.",
      },
      repoUrl: "https://github.com/gstvribs/material-ui-currency-textfield",
      liveUrl: "https://unicef.github.io/material-ui-currency-textfield/",
      stars: 1,
      language: "JavaScript / React",
      tags: ["React", "Material UI", "UI Component", "Open Source"],
      featured: false,
    },
  ] as ProjectItem[],
  talksAndMedia: [
    {
      id: "reactconf-br-2020",
      type: "talk",
      title: "Monorepo + Design Systems = ❤",
      event: "ReactConf BR 2020 • Comunidade React Brasil",
      date: "2020",
      description: {
        pt: "Palestra na maior conferência de React da América Latina demonstrando na prática como unir a arquitetura de Monorepo à distribuição de Design Systems escaláveis, mantendo versionamento semântico independente e DX fluida.",
        en: "Talk at Latin America's premier React conference demonstrating how to combine Monorepo architecture with scalable Design System distribution, independent semantic versioning, and seamless DX.",
      },
      primaryUrl: "https://www.youtube.com/watch?v=xo57BjNlcxI",
      secondaryUrl: "https://docs.google.com/presentation/d/1JcBTYnxT6iX8clE52YU-8jhqTHA_IWBP17h-OvN_VzU/edit",
      secondaryLabel: { pt: "Ver Slides", en: "View Slides" },
      thumbnail: "https://i.ytimg.com/vi/xo57BjNlcxI/maxresdefault.jpg",
      badge: { pt: "Palestra • ReactConf BR", en: "Conference Talk • ReactConf BR" },
    },
    {
      id: "realtalk-js-ep88",
      type: "podcast",
      title: "Real Talk JavaScript (Web Rush) #88: Refactoring to React Hooks",
      event: "Hosts: John Papa, Ward Bell, Dan Wahlin & Craig Shoemaker",
      date: "Jun 2020",
      description: {
        pt: "Episódio internacional discutindo estratégias práticas de migração de componentes de classe legados para React Hooks, gerenciamento de estado moderno e aplicação de Atomic Design em grandes codebases.",
        en: "International podcast episode exploring practical strategies for migrating legacy class components to React Hooks, state management patterns, and applying Atomic Design in production codebases.",
      },
      primaryUrl: "https://open.spotify.com/episode/2yplPmiiJ1x8YCJDj9hsT6",
      secondaryUrl: "https://dev.to/web_rush/episode-88-refactoring-to-react-hooks-with-gustavo-miranda",
      secondaryLabel: { pt: "Show Notes (DEV.to)", en: "Show Notes (DEV.to)" },
      badge: { pt: "Podcast Internacional • Spotify", en: "International Podcast • Spotify" },
    },
    {
      id: "tdc-future-design-systems",
      type: "talk",
      title: "Design System: Eficiência e produtividade para equipes de produtos",
      event: "The Developer's Conference (TDC Future) • Trilha Design & Experiência (CI&T)",
      date: "TDC Future",
      description: {
        pt: "Apresentação no TDC Future detalhando como Design Systems bem arquitetados reduzem o atrito entre design e engenharia e aceleram o ciclo de entrega de equipes de produto.",
        en: "Presentation at TDC Future detailing how well-architected Design Systems bridge the gap between design and engineering and accelerate product delivery cycles.",
      },
      primaryUrl: "https://promo.thedevconf.com/future-ciandt",
      secondaryUrl: "https://medium.com/ci-t/the-complete-guide-about-design-systems-engineering-cd332cf520f2",
      secondaryLabel: { pt: "Ler Artigo Base", en: "Read Companion Article" },
      badge: { pt: "Palestra • TDC Future", en: "Conference Talk • TDC Future" },
    },
    {
      id: "css-in-js-vs-preprocessors",
      type: "slides",
      title: "CSS in JS vs Pre and Post Processors",
      event: "Tech Talk & Benchmark Study",
      date: "2019",
      description: {
        pt: "Estudo técnico comparativo entre Styled Components e Sass avaliando 5 pilares fundamentais: Reusabilidade, Performance, Escalabilidade, Componibilidade e Developer Experience (DX).",
        en: "Comparative technical study between Styled Components and Sass evaluating 5 fundamental pillars: Reusability, Performance, Scalability, Composability, and Developer Experience (DX).",
      },
      primaryUrl: "https://docs.google.com/presentation/d/1dP8gN-vckKZ5EJhMe7QnwsiYPwC2fBfqvimPBRiJL8k/edit?usp=sharing",
      secondaryUrl: "https://itnext.io/css-in-js-vs-pre-post-processors-in-2019-8b1e20c066ed",
      secondaryLabel: { pt: "Artigo no ITNEXT", en: "ITNEXT Article" },
      badge: { pt: "Apresentação & Estudo", en: "Presentation & Study" },
    },
  ] as TalkAndMediaItem[],
};
