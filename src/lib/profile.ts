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

export interface ExperienceItem {
  company: string;
  companyUrl: string;
  role: { pt: string; en: string };
  period: { pt: string; en: string };
  summary: { pt: string; en: string };
  stack: string[];
}

export interface ProjectItem {
  name: string;
  slug: string;
  description: { pt: string; en: string };
  repoUrl: string;
  liveUrl?: string;
  language: string;
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
  location: "Brasil",
  email: "gu_ribeiro@live.com",
  role: {
    pt: "Software Engineer @ Uber",
    en: "Software Engineer @ Uber",
  },
  previousBadge: "ex @CI&T",
  bio: {
    pt: [
      "Engenheiro de software na Uber (ex @CI&T), construindo aplicações e arquiteturas web em escala global. Ao longo da carreira, entreguei projetos críticos para empresas como Google, Grupo Boticário, Bradesco e Mitsui.",
      "No passado, também atuei como especialista em Design Systems e monorepos, compartilhando aprendizados em conferências como ReactConf BR, TDC e no podcast Real Talk JavaScript.",
    ],
    en: [
      "Software Engineer at Uber (ex @CI&T), building web applications and architectures at global scale. Throughout my career, I've delivered critical projects for Google, Grupo Boticário, Bradesco, and Mitsui.",
      "Previously, I also worked as a specialist in Design Systems and monorepos, sharing lessons at ReactConf BR, TDC, and on the Real Talk JavaScript podcast.",
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
        pt: "Software Engineer",
        en: "Software Engineer",
      },
      period: {
        pt: "Atual",
        en: "Present",
      },
      summary: {
        pt: "Desenvolvimento de aplicações web e sistemas em escala global.",
        en: "Building web applications and systems at global scale.",
      },
      stack: ["React", "TypeScript", "Node.js", "Distributed Systems"],
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
        pt: "Arquitetura e entrega para clientes globais (Google, Grupo Boticário, Bradesco, Mitsui) e especialista em Design Systems.",
        en: "Architecture and delivery for global clients (Google, Grupo Boticário, Bradesco, Mitsui) and Design Systems specialist.",
      },
      stack: ["React", "Angular", "TypeScript", "Monorepo", "CI/CD"],
    },
  ] as ExperienceItem[],
  projects: [
    {
      name: "dojo-contract-tests",
      slug: "dojo-contract-tests",
      description: {
        pt: "Exemplos práticos de testes de contrato para APIs.",
        en: "Practical examples of API contract testing.",
      },
      repoUrl: "https://github.com/gstvribs/dojo-contract-tests",
      language: "JavaScript",
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
    {
      name: "material-ui-currency-textfield",
      slug: "material-ui-currency-textfield",
      description: {
        pt: "Input monetário formatado para React Material UI.",
        en: "Formatted currency input for React Material UI.",
      },
      repoUrl: "https://github.com/gstvribs/material-ui-currency-textfield",
      liveUrl: "https://unicef.github.io/material-ui-currency-textfield/",
      language: "React",
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
