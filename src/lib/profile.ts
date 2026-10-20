export type Language = "pt" | "en";

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  platform: "github" | "x" | "linkedin" | "medium" | "email";
}

export interface ClientBrand {
  id: "uber" | "google" | "boticario" | "bradesco" | "mitsui";
  name: string;
  featured: boolean;
  badge: { pt: string; en: string };
  description: { pt: string; en: string };
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
  previousBadge: "ex @CI&T",
  role: {
    pt: "Software Engineer na Uber",
    en: "Software Engineer at Uber",
  },
  headline: {
    pt: "Engenharia de software em escala global, arquitetura de plataformas e sistemas de alta performance.",
    en: "Global-scale software engineering, platform architecture, and high-performance systems.",
  },
  subheadline: {
    pt: "Construindo plataformas resilientes, produtos digitais críticos e arquiteturas escaláveis para milhões de usuários. Atualmente Software Engineer na Uber (ex @CI&T), com histórico de entregas para gigantes globais como Google, Grupo Boticário, Bradesco e Mitsui.",
    en: "Building resilient platforms, mission-critical digital products, and scalable architectures for millions of users. Currently Software Engineer at Uber (ex @CI&T), with a track record of delivering for global leaders including Google, Grupo Boticário, Bradesco, and Mitsui.",
  },
  about: {
    pt: [
      "Sou Gustavo Miranda (@gstvribs), engenheiro de software brasileiro focado em arquitetura de aplicações em larga escala, sistemas distribuídos, performance e produtividade de engenharia.",
      "Atualmente atuo como Software Engineer na Uber, desenvolvendo soluções globais de alta disponibilidade. Ao longo da minha carreira (incluindo minha jornada ex @CI&T), liderei e arquitetei projetos estratégicos para empresas como Google, Grupo Boticário, Bradesco e Mitsui.",
      "No passado, também atuei como especialista em Design Systems e monorepos, palestrando em conferências como ReactConf BR e TDC, além de participar de podcasts internacionais compartilhando aprendizados sobre arquitetura web, qualidade e engenharia de produto.",
    ],
    en: [
      "I'm Gustavo Miranda (@gstvribs), a Brazilian Software Engineer focused on large-scale application architecture, distributed systems, web performance, and engineering productivity.",
      "I currently work as a Software Engineer at Uber, building high-availability global solutions. Throughout my career (including my tenure ex @CI&T), I have architected and delivered strategic projects for industry leaders such as Google, Grupo Boticário, Bradesco, and Mitsui.",
      "In the past, I also focused deeply as a specialist in Design Systems and monorepo architectures, speaking at conferences like ReactConf BR and TDC, and joining international podcasts to share insights on web architecture, quality, and product engineering.",
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
      value: "Tier-1",
      label: {
        pt: "Projetos p/ Google, Uber & Líderes",
        en: "Delivered for Google, Uber & Leaders",
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
  clients: [
    {
      id: "uber",
      name: "Uber",
      featured: true,
      badge: {
        pt: "Atual • Global Tech",
        en: "Current • Global Tech",
      },
      description: {
        pt: "Engenharia de software e arquitetura de plataformas operando em escala global para milhões de usuários.",
        en: "Software engineering and platform architecture operating at global scale for millions of users.",
      },
    },
    {
      id: "google",
      name: "Google",
      featured: true,
      badge: {
        pt: "Destaque • Big Tech",
        en: "Featured • Big Tech",
      },
      description: {
        pt: "Desenvolvimento e arquitetura de soluções digitais de altíssimo padrão técnico e escala internacional.",
        en: "Engineering and architecture of digital solutions built to the highest technical standards and global reach.",
      },
    },
    {
      id: "boticario",
      name: "Grupo Boticário",
      featured: false,
      badge: {
        pt: "Enterprise • Retail & Tech",
        en: "Enterprise • Retail & Tech",
      },
      description: {
        pt: "Arquitetura de aplicações e ecossistemas digitais escaláveis para um dos maiores grupos de varejo do Brasil.",
        en: "Scalable application architecture and digital ecosystems for one of Brazil's largest retail groups.",
      },
    },
    {
      id: "bradesco",
      name: "Bradesco",
      featured: false,
      badge: {
        pt: "Enterprise • Banking",
        en: "Enterprise • Banking",
      },
      description: {
        pt: "Engenharia de plataformas críticas, segurança e alta disponibilidade no setor financeiro e bancário.",
        en: "Mission-critical platform engineering, security, and high availability in the financial and banking sector.",
      },
    },
    {
      id: "mitsui",
      name: "Mitsui & Co.",
      featured: false,
      badge: {
        pt: "Enterprise • Global Conglomerate",
        en: "Enterprise • Global Conglomerate",
      },
      description: {
        pt: "Soluções corporativas robustas e integração de sistemas para operações globais.",
        en: "Robust enterprise solutions and systems integration for global business operations.",
      },
    },
  ] as ClientBrand[],
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
        pt: "Arquitetura em Escala Global",
        en: "Global-Scale Architecture",
      },
      description: {
        pt: "Desenvolvimento de aplicações web e serviços distribuídos de alta performance, resiliência, observabilidade e baixa latência.",
        en: "Engineering high-performance web applications and distributed services with resilience, observability, and low latency.",
      },
      tags: ["Distributed Systems", "React", "Next.js", "TypeScript", "Performance"],
    },
    {
      title: {
        pt: "Plataformas & Developer Experience",
        en: "Platforms & Developer Experience",
      },
      description: {
        pt: "Estruturação de monorepos, automação de pipelines CI/CD, Feature Flags seguras e ferramentas que multiplicam a produtividade de engenharia.",
        en: "Monorepo tooling, automated CI/CD pipelines, safe Feature Flag rollouts, and developer workflows that multiply team velocity.",
      },
      tags: ["Monorepo", "Feature Toggles", "CI/CD", "Nx / Lerna", "Automation"],
    },
    {
      title: {
        pt: "Qualidade, Contratos & Cloud",
        en: "Quality, Contracts & Cloud DevOps",
      },
      description: {
        pt: "Testes de contrato de APIs (Consumer-Driven Contracts), containerização com Docker, pipelines distribuídos e entregas contínuas confiáveis.",
        en: "Consumer-driven API contract testing, Docker containerization, distributed cloud pipelines, and reliable continuous delivery.",
      },
      tags: ["Contract Testing", "Docker", "Node.js", ".NET Core", "Cloud"],
    },
    {
      title: {
        pt: "Design Systems (Background Especialista)",
        en: "Design Systems (Past Specialist Focus)",
      },
      description: {
        pt: "Experiência prévia como especialista arquitetando bibliotecas de componentes multi-marca, tokens semânticos e governança técnica em larga escala.",
        en: "Past specialist background architecting multi-brand component libraries, semantic tokens, and large-scale frontend governance.",
      },
      tags: ["Component Libraries", "Design Tokens", "Storybook", "Atomic Design"],
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
        pt: "Engenharia de software em escala global, atuando na construção e evolução de aplicações críticas, arquitetura de plataformas, performance e experiência de desenvolvimento.",
        en: "Global-scale software engineering, building and evolving mission-critical applications, platform architecture, performance optimization, and developer workflows.",
      },
      achievements: {
        pt: [
          "Desenvolvimento de sistemas e interfaces de alta confiabilidade operando em escala global na Uber.",
          "Foco em arquitetura modular, observabilidade, experimentação segura com Feature Flags e excelência operacional.",
          "Colaboração multidisciplinar com times globais de produto, engenharia e plataforma.",
        ],
        en: [
          "Engineering high-reliability systems and web interfaces operating at global scale at Uber.",
          "Focus on modular architecture, observability, safe experimentation via Feature Flags, and operational excellence.",
          "Cross-functional collaboration with global product, engineering, and platform teams.",
        ],
      },
      stack: ["React", "TypeScript", "Distributed Systems", "Platform Architecture", "Node.js"],
    },
    {
      company: "CI&T",
      companyUrl: "https://ciandt.com",
      role: {
        pt: "Software Engineer (ex @CI&T)",
        en: "Software Engineer (ex @CI&T)",
      },
      period: {
        pt: "Trajetória Sênior & Especialista",
        en: "Senior & Specialist Tenure",
      },
      location: "Campinas, SP • Brasil",
      highlight: "ex @CI&T",
      description: {
        pt: "Liderança técnica e arquitetura de software para grandes clientes globais e nacionais (incluindo projetos para Google, Grupo Boticário, Bradesco e Mitsui), além de atuação no passado como especialista em Design Systems e monorepos.",
        en: "Technical leadership and software architecture for major global and enterprise clients (including projects for Google, Grupo Boticário, Bradesco, and Mitsui), alongside a past specialist focus in Design Systems and monorepos.",
      },
      achievements: {
        pt: [
          "Arquitetura e entrega de plataformas críticas para clientes Tier-1 como Google, Grupo Boticário, Bradesco e Mitsui.",
          "Convidado internacional no podcast Real Talk JavaScript / Web Rush (Ep. 88) sobre evolução e refatoração de arquiteturas React modernas.",
          "Atuação como especialista em Design Systems e Monorepos, com artigos técnicos e palestras no TDC Future e ReactConf BR.",
        ],
        en: [
          "Architected and delivered mission-critical platforms for Tier-1 clients including Google, Grupo Boticário, Bradesco, and Mitsui.",
          "Featured international guest on Real Talk JavaScript / Web Rush Podcast (Ep. 88) discussing modern React architecture and hooks.",
          "Past specialist focus on Design Systems and Monorepos, authoring technical guides and speaking at TDC Future and ReactConf BR.",
        ],
      },
      stack: ["React", "TypeScript", "Angular", "Node.js", "Monorepo", "Cloud CI/CD"],
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
        pt: "Desenvolvimento de aplicações corporativas full-stack, automação de pipelines de artefatos privados (NuGet/npm), containerização Docker, testes de contrato de API e arquitetura web.",
        en: "Full-stack enterprise application development, private artifact pipeline automation (NuGet/npm), Docker containerization, API contract testing, and web architecture.",
      },
      achievements: {
        pt: [
          "Implementação de pipelines CI/CD com Docker, .NET Core e Azure Artifacts para distribuição segura de pacotes internos.",
          "Engenharia de qualidade com testes de contrato de APIs (Consumer-Driven Contracts) e automação de releases.",
          "Pesquisas e benchmarks técnicos sobre performance, escalabilidade e Developer Experience no ecossistema JavaScript.",
        ],
        en: [
          "Implemented CI/CD pipelines with Docker, .NET Core, and Azure Artifacts for secure internal package distribution.",
          "Quality engineering with Consumer-Driven API Contract Testing and automated release workflows.",
          "Technical benchmarks on performance, scalability, and Developer Experience across the JavaScript ecosystem.",
        ],
      },
      stack: ["JavaScript", "TypeScript", ".NET Core", "Docker", "Azure Pipelines", "REST / Contracts"],
    },
  ] as ExperienceItem[],
  projects: [
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
      tags: ["Contract Testing", "API", "Microservices", "Quality Engineering", "JavaScript"],
      featured: true,
    },
    {
      name: "monorepo-react-component-library",
      slug: "monorepo-react-component-library",
      tagline: {
        pt: "Arquitetura Monorepo para distribuição modular de pacotes React",
        en: "Monorepo architecture for modular React package distribution",
      },
      description: {
        pt: "Prova de conceito demonstrando estruturação de monorepo, documentação automatizada e publicação independente de pacotes usando Lerna, Commitizen e Conventional Commits.",
        en: "Proof of concept demonstrating monorepo structuring, automated documentation, and independent package publishing using Lerna, Commitizen, and Conventional Commits.",
      },
      repoUrl: "https://github.com/gstvribs/monorepo-react-component-library",
      liveUrl: "https://thedesignsystem.gustavoribeiro.dev/",
      stars: 38,
      language: "JavaScript / React",
      tags: ["React", "Monorepo", "Lerna", "Storybook", "Conventional Commits"],
      featured: true,
    },
    {
      name: "monorepo-angular-component-library",
      slug: "monorepo-angular-component-library",
      tagline: {
        pt: "Estrutura Monorepo multi-pacote com registro privado e CI/CD",
        en: "Multi-package Monorepo structure with private registry & CI/CD",
      },
      description: {
        pt: "Arquitetura modular em monorepo com integração a registro privado Verdaccio, versionamento semântico automatizado e documentação técnica.",
        en: "Modular monorepo architecture featuring private registry integration, automated semantic versioning, and technical documentation.",
      },
      repoUrl: "https://github.com/gstvribs/monorepo-angular-component-library",
      liveUrl: "https://thedesignsystem.gustavoribeiro.dev/",
      stars: 10,
      language: "TypeScript / SCSS",
      tags: ["Monorepo", "Lerna", "Private Registry", "Angular", "SCSS"],
      featured: true,
    },
    {
      name: "material-ui-currency-textfield",
      slug: "material-ui-currency-textfield",
      tagline: {
        pt: "Componente de input monetário formatado para React",
        en: "Formatted currency input component for React",
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
      id: "realtalk-js-ep88",
      type: "podcast",
      title: "Real Talk JavaScript (Web Rush) #88: Refactoring to React Hooks",
      event: "Hosts: John Papa, Ward Bell, Dan Wahlin & Craig Shoemaker",
      date: "Jun 2020",
      description: {
        pt: "Episódio internacional discutindo estratégias práticas de migração de componentes de classe legados para React Hooks, gerenciamento de estado moderno e arquitetura em grandes codebases.",
        en: "International podcast episode exploring practical strategies for migrating legacy class components to React Hooks, state management patterns, and architecture in production codebases.",
      },
      primaryUrl: "https://open.spotify.com/episode/2yplPmiiJ1x8YCJDj9hsT6",
      secondaryUrl: "https://dev.to/web_rush/episode-88-refactoring-to-react-hooks-with-gustavo-miranda",
      secondaryLabel: { pt: "Show Notes (DEV.to)", en: "Show Notes (DEV.to)" },
      badge: { pt: "Podcast Internacional • Spotify", en: "International Podcast • Spotify" },
    },
    {
      id: "reactconf-br-2020",
      type: "talk",
      title: "Monorepo + Design Systems = ❤",
      event: "ReactConf BR 2020 • Comunidade React Brasil",
      date: "2020",
      description: {
        pt: "Palestra na maior conferência de React da América Latina demonstrando na prática a arquitetura de Monorepo, mantendo versionamento semântico independente e Developer Experience fluida.",
        en: "Talk at Latin America's premier React conference demonstrating Monorepo architecture in practice, independent semantic versioning, and seamless Developer Experience.",
      },
      primaryUrl: "https://www.youtube.com/watch?v=xo57BjNlcxI",
      secondaryUrl: "https://docs.google.com/presentation/d/1JcBTYnxT6iX8clE52YU-8jhqTHA_IWBP17h-OvN_VzU/edit",
      secondaryLabel: { pt: "Ver Slides", en: "View Slides" },
      thumbnail: "https://i.ytimg.com/vi/xo57BjNlcxI/maxresdefault.jpg",
      badge: { pt: "Palestra • ReactConf BR", en: "Conference Talk • ReactConf BR" },
    },
    {
      id: "tdc-future-design-systems",
      type: "talk",
      title: "Eficiência e produtividade para equipes de produtos",
      event: "The Developer's Conference (TDC Future)",
      date: "TDC Future",
      description: {
        pt: "Apresentação no TDC Future detalhando como arquiteturas modulares e bibliotecas compartilhadas aceleram o ciclo de entrega de equipes de engenharia e produto.",
        en: "Presentation at TDC Future detailing how modular architectures and shared libraries accelerate delivery cycles for engineering and product teams.",
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
        pt: "Estudo técnico comparativo avaliando 5 pilares fundamentais de arquitetura de estilização: Reusabilidade, Performance, Escalabilidade, Componibilidade e Developer Experience (DX).",
        en: "Comparative technical study evaluating 5 fundamental styling architecture pillars: Reusability, Performance, Scalability, Composability, and Developer Experience (DX).",
      },
      primaryUrl: "https://docs.google.com/presentation/d/1dP8gN-vckKZ5EJhMe7QnwsiYPwC2fBfqvimPBRiJL8k/edit?usp=sharing",
      secondaryUrl: "https://itnext.io/css-in-js-vs-pre-post-processors-in-2019-8b1e20c066ed",
      secondaryLabel: { pt: "Artigo no ITNEXT", en: "ITNEXT Article" },
      badge: { pt: "Apresentação & Estudo", en: "Presentation & Study" },
    },
  ] as TalkAndMediaItem[],
};
