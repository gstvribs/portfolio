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
}

export interface ExperienceSubRole {
  team: { pt: string; en: string };
  period: { pt: string; en: string };
  bullets: { pt: string[]; en: string[] };
}

export interface ExperienceItem {
  company: string;
  companyUrl: string;
  role: { pt: string; en: string };
  period: { pt: string; en: string };
  summary: { pt: string; en: string };
  subRoles?: ExperienceSubRole[];
  stack: string[];
}

export interface ProjectItem {
  name: string;
  slug: string;
  description: { pt: string; en: string };
  repoUrl: string;
  liveUrl?: string;
  language: string;
  badge?: { pt: string; en: string };
}

export interface TalkAndMediaItem {
  id: string;
  type: "talk" | "podcast" | "slides";
  title: string;
  event: string;
  date: string;
  primaryUrl: string;
  secondaryUrl?: string;
  secondaryLabel?: { pt: string; en: string };
}

export const PROFILE = {
  name: "Gustavo Miranda",
  shortName: "Gustavo Miranda",
  handle: "@gstvribs",
  avatar: "https://avatars.githubusercontent.com/u/7907966?v=4",
  location: "São Paulo, Brasil",
  email: "gu_ribeiro@live.com",
  role: {
    pt: "Backend Engineer @ Uber",
    en: "Backend Engineer @ Uber",
  },
  previousBadge: "ex @CI&T",
  bio: {
    pt: [
      "Backend Engineer na Uber em São Paulo, atuando no time de Rider Growth para ativar usuários até a primeira viagem. Gosto de liderar features de ponta a ponta: do design doc e arquitetura backend ao experimento A/B e dashboards de impacto, além de criar ferramentas internas e AI skills usadas semanalmente pelo time e liderança.",
      "Antes da Uber (ex @CI&T), entreguei projetos críticos para empresas como Google, Grupo Boticário, Bradesco e Mitsui, e atuei como especialista em Design Systems e monorepos.",
    ],
    en: [
      "Backend Engineer at Uber in São Paulo working on Rider Growth, helping activate riders and get them to their first trip. I like owning features end-to-end: from the design doc and backend to the experiment and metrics dashboards, while building internal tools and AI skills used weekly by my team and leadership.",
      "Prior to Uber (ex @CI&T), I delivered critical projects for Google, Grupo Boticário, Bradesco, and Mitsui, and worked as a specialist in Design Systems and monorepos.",
    ],
  },
  clients: [
    { id: "uber", name: "Uber", featured: true },
    { id: "google", name: "Google", featured: true },
    { id: "boticario", name: "Grupo Boticário", featured: false },
    { id: "bradesco", name: "Bradesco", featured: false },
    { id: "mitsui", name: "Mitsui & Co.", featured: false },
  ] as ClientBrand[],
  socials: [
    {
      name: "GitHub",
      handle: "@gstvribs",
      url: "https://github.com/gstvribs",
      platform: "github",
    },
    {
      name: "X",
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
  ] as SocialLink[],
  experiences: [
    {
      company: "Uber",
      companyUrl: "https://www.uber.com",
      role: {
        pt: "Backend Engineer · São Paulo",
        en: "Backend Engineer · São Paulo",
      },
      period: {
        pt: "Mar 2025 – Atual",
        en: "Mar 2025 – Present",
      },
      summary: {
        pt: "Liderança de features ponta a ponta (design doc, backend, experimentação A/B e observabilidade), ferramentas de dados/dashboards-as-code e automações com IA.",
        en: "End-to-end feature ownership (design doc, backend, A/B experimentation, and metrics), dashboards-as-code tooling, and AI workflow automation.",
      },
      subRoles: [
        {
          team: {
            pt: "Rider Growth Americas · Rider Activation",
            en: "Rider Growth Americas · Rider Activation",
          },
          period: {
            pt: "Jan 2026 – Atual",
            en: "Jan 2026 – Present",
          },
          bullets: {
            pt: [
              "Dono do backend ponta a ponta para promo countdown timer no seletor de produtos, promoções e mensagens de segurança na home focadas em ativação de passageiros.",
              "Um dos primeiros engenheiros a rodar experimentos guiados por IA, construindo o ferramental completo (prompts, decks de análise automatizados, dashboards-as-code de 30+ métricas e AI skills para os reviews semanais de liderança).",
            ],
            en: [
              "Owned the backend end-to-end for the promo countdown timer on the product selector, plus home-screen promos and safety messaging to activate riders.",
              "One of the first engineers to run AI-driven experiments, building the tooling for prompts, auto-generated readout decks, dashboards-as-code covering 30+ rider metrics, and team AI skills used in weekly leadership growth reviews.",
            ],
          },
        },
        {
          team: {
            pt: "Trip Experience",
            en: "Trip Experience",
          },
          period: {
            pt: "Mar 2025 – Jan 2026",
            en: "Mar 2025 – Jan 2026",
          },
          bullets: {
            pt: [
              "Projetou e lançou globalmente a plataforma que alerta passageiros quando o motorista está atrasado ou sem progresso (~5M de alertas/dia), reduzindo cancelamentos em 0,38% e adicionando ~$200M/ano em Gross Bookings (+0,22% Mobility GB).",
            ],
            en: [
              "Designed and launched globally a platform that alerts riders when their driver is running late or not making progress (~5M alerts/day), cutting cancellations by 0.38% and adding ~$200M/year in gross bookings (+0.22% Mobility GB).",
            ],
          },
        },
      ],
      stack: [
        "Go",
        "Java",
        "Python",
        "Kafka",
        "Flink",
        "Spark",
        "Presto",
        "A/B Testing",
        "Claude Code",
      ],
    },
    {
      company: "CI&T",
      companyUrl: "https://ciandt.com",
      role: {
        pt: "Software Engineer (ex @CI&T)",
        en: "Software Engineer (ex @CI&T)",
      },
      period: {
        pt: "Anterior",
        en: "Previous",
      },
      summary: {
        pt: "Arquitetura e entrega para clientes globais (Google, Grupo Boticário, Bradesco, Mitsui) e atuação como especialista em Design Systems.",
        en: "Architecture and delivery for global clients (Google, Grupo Boticário, Bradesco, Mitsui) and Design Systems specialist.",
      },
      stack: ["React", "TypeScript", "Node.js", "Angular", "Monorepo", "CI/CD"],
    },
  ] as ExperienceItem[],
  projects: [
    {
      name: "SOPH — Sabedoria para Empreender",
      slug: "soph-sabedoria-para-empreender",
      description: {
        pt: "Plataforma e comunidade de empreendedorismo com episódios do SOPH Cast, cursos, eventos e networking para impulsionar negócios com propósito.",
        en: "Entrepreneurship platform and community featuring SOPH Cast podcast episodes, courses, events, and networking to empower purpose-driven businesses.",
      },
      repoUrl: "https://soph-site.lovable.app/",
      liveUrl: "https://soph-site.lovable.app/",
      language: "React · TypeScript · Tailwind",
      badge: { pt: "Projeto Pessoal · Live", en: "Personal Project · Live" },
    },
    {
      name: "monorepo-react-component-library",
      slug: "monorepo-react-component-library",
      description: {
        pt: "PoC de monorepo para bibliotecas React com Lerna, Storybook e Conventional Commits.",
        en: "Monorepo PoC for React libraries using Lerna, Storybook, and Conventional Commits.",
      },
      repoUrl: "https://github.com/gstvribs/monorepo-react-component-library",
      liveUrl: "https://thedesignsystem.gustavoribeiro.dev/",
      language: "React",
    },
    {
      name: "monorepo-angular-component-library",
      slug: "monorepo-angular-component-library",
      description: {
        pt: "Estrutura monorepo para pacotes e tokens em Angular.",
        en: "Monorepo structure for Angular packages and tokens.",
      },
      repoUrl: "https://github.com/gstvribs/monorepo-angular-component-library",
      liveUrl: "https://thedesignsystem.gustavoribeiro.dev/",
      language: "Angular / SCSS",
    },
  ] as ProjectItem[],
  talksAndMedia: [
    {
      id: "realtalk-js-ep88",
      type: "podcast",
      title: "Refactoring to React Hooks — Real Talk JS (Web Rush #88)",
      event: "Podcast c/ John Papa, Ward Bell, Dan Wahlin & Craig Shoemaker",
      date: "2020",
      primaryUrl: "https://open.spotify.com/episode/2yplPmiiJ1x8YCJDj9hsT6",
      secondaryUrl:
        "https://dev.to/web_rush/episode-88-refactoring-to-react-hooks-with-gustavo-miranda",
      secondaryLabel: { pt: "Show Notes", en: "Show Notes" },
    },
    {
      id: "reactconf-br-2020",
      type: "talk",
      title: "Monorepo + Design Systems = ❤",
      event: "ReactConf BR 2020",
      date: "2020",
      primaryUrl: "https://www.youtube.com/watch?v=xo57BjNlcxI",
      secondaryUrl:
        "https://docs.google.com/presentation/d/1JcBTYnxT6iX8clE52YU-8jhqTHA_IWBP17h-OvN_VzU/edit",
      secondaryLabel: { pt: "Slides", en: "Slides" },
    },
    {
      id: "tdc-future-design-systems",
      type: "talk",
      title: "Eficiência e produtividade para equipes de produtos",
      event: "TDC Future (The Developer's Conference)",
      date: "2020",
      primaryUrl: "https://promo.thedevconf.com/future-ciandt",
    },
    {
      id: "css-in-js-vs-preprocessors",
      type: "slides",
      title: "CSS in JS vs Pre and Post Processors",
      event: "Tech Talk",
      date: "2019",
      primaryUrl:
        "https://docs.google.com/presentation/d/1dP8gN-vckKZ5EJhMe7QnwsiYPwC2fBfqvimPBRiJL8k/edit?usp=sharing",
      secondaryUrl:
        "https://itnext.io/css-in-js-vs-pre-post-processors-in-2019-8b1e20c066ed",
      secondaryLabel: { pt: "Artigo", en: "Article" },
    },
  ] as TalkAndMediaItem[],
};
