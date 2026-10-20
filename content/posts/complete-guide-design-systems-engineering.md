---
title: "The complete guide about design systems: Engineering"
date: "2020-06-26"
excerpt: "Os pilares de arquitetura, engenharia, design tokens e governança essenciais para construir Design Systems escaláveis em múltiplos produtos."
excerptEn: "Core architectural pillars, design tokens, and governance strategies learned from building scalable Design Systems across engineering, design, and product teams."
tags: ["design", "design-systems", "components", "style-guides", "programming"]
readingTime: "5 min read"
coverImage: "https://cdn-images-1.medium.com/max/1024/1*_Pq9FzLY9Eq0aBbdylGDxw.png"
canonicalUrl: "https://medium.com/ci-t/the-complete-guide-about-design-systems-engineering-cd332cf520f2"
featured: true
---

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*_Pq9FzLY9Eq0aBbdylGDxw.png)

*1 of 2 of the series: the complete guide about design systems*

**Engineering **| [Walkthrough](https://medium.com/ci-t/the-complete-guide-about-design-systems-walkthrough-764f0b866bca)

After experiences in different projects and of different sizes, I intend to show in this series my main learnings as a developer in design systems projects from Engineering, Design, and Management aspects, in this blog post, I will cover the main aspects from an engineering perspective and build an entire design system from scratch.

Although Design Systems is a relatively new subject, in software development it is already a very old subject. In the past, when open source was a “world not yet explored”, companies and developers that worked with enterprise systems created their libraries to share code between projects, such as ORMs, queue managers, enterprise communication bus, etc. Also, frontend developers already built their “own design systems” a long time ago. The design system, as seen today, is the expression of all this in a unique language shared between design and development.

> After a long time of popularizing this practice, it was observed that design systems were much more than a “design trend”, but came to show something that happened over a long time and has grown a lot in recent times: the communication gap between designers and developers.

### The big picture

The first thing that helps us a lot in this type of project is to recognize what’s the big picture, what will be the next step, what’s the limitation of the client infrastructure for security (approval for the usage of new services for example), how many projects are affected by this design system etc.

For this, we use a technique called mind maps, and that helps us to recognize what will be the challenges, what’s its potential and to determine people who will be focused on finishing a certain type of activity.

![Mindmeister sample for design systems](https://cdn-images-1.medium.com/max/1024/1*TX-GMFQo4VMSui8D2Rs-7A.gif)
*Mindmeister sample for design systems*

### Migrate your mental model

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*VFMPVwkebM5YY1k3z54LQw.png)

Generally, people who come from “common projects” are on the left side of this picture above. You are responsible for a project that provides user interfaces, and when you need to ship a new feature you don’t care much about versioning. Generally, you have a project that has dependencies and now your project **is the dependency.**

And, in this migration path, you are not used to worrying about certain items that we need to be aware of when we develop a design system, such as package management, package deployment, standardization of commit messages for generating many versions of packages, tags, and versions in SCM, changelogs and massive [Documentation-Driven Development](https://opensource.com/article/17/8/doc-driven-development).

Imagine that you fell asleep, woke up, and are part of the Angular core team and need to push a bugfix in production; feels scary, no? haha. Thinking that way, we need to know the good practices used by these teams on a day-to-day basis and bring this to our reality.

### Mono package or multi package

![Imagem do artigo](https://cdn-images-1.medium.com/max/795/1*XF18aFRX99wfLx2lj-cdvQ.png)

One of the hardest decisions at the beginning of your project will be this. The idea behind it is to serve a single package or many packages for projects.

The ideal solution is to serve **multi-packages by one single monorepo** and to do this I recommend using [Lerna](https://lerna.js.org/). This tool will manage all the monorepo structure, also has great documentation and provides two commands that will make your job much easier: [Lerna Publish](https://github.com/lerna/lerna/tree/master/commands/publish) and [Lerna Version](https://github.com/lerna/lerna/tree/master/commands/version)

### Semantic versioning all the way up!

![Imagem do artigo](https://cdn-images-1.medium.com/max/641/1*gEhr9UUzfTXJ_BTcEKz-pA.png)

You can read more about semver [here](https://semver.org/), but, in summary, semantic versioning is a way to manage package versions in a way to tell the clients (projects) which type of features, bug fixes, or breaking changes they are getting by updating the package.

**Okay, that’s cool but all that process had to be manual?**

To solve this, big repositories like [Angular](https://github.com/angular/angular) use a standard called [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) which I will explain further in the topic below.

### Conventional Commits

As specified on the official website, the conventional commit is a *specification for adding human and machine-readable meaning to commit messages*.

![A sample last commit messages at Angular repository.](https://cdn-images-1.medium.com/max/1024/1*Yo4EkdAWYbw2g3lwV-VCiQ.png)
*A sample last commit messages at Angular repository.*

In summary, the commit message has a template like this

```
[optional scope]: 
```

```
[optional body]
```

```
[optional footer]
```

The types available help you to automatically define the next version of your package

- **major**: breaking change
- **minor:** feat
- **patch:** build, chore, ci, fix, improvement, perf, refactor, style, revert, test, docs

### Testing your packages out of the box

Before publishing your first component in production, it is interesting to be able to test it in a local proxy to check items such as bundle size, files inserted in the package, and compatibility with real projects.

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/0*ztdJa34fbhKhS03i)

The tool that can help you with this is [Verdaccio](https://verdaccio.org/). It creates a local npm proxy and enables you to publish packages in this repository, even before uploading them to your public or private definitive npm repository.

### Conclusion

These are the main aspects of the engineering area that you need to worry about before uploading your first design system, and also I have good news!

I have compiled all these good practices in a single boilerplate that provides a monorepo structure for your design system for Angular web apps and design tokens. In the next post, I will detail each tool used in this repository and walk through the project step by step.

The repository is here: (the same boilerplate using React is a work in progress)

[gstvribs/monorepo-angular-component-library](https://github.com/gstvribs/monorepo-angular-component-library)

The packages are in this organization here:

[npm](https://www.npmjs.com/org/thedesignsystem)

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*wq6kJfH_u8C_VSZxvIDLfg.gif)

You can check the Storybook and Compodoc generated by Netlify in [this link](https://thedesignsystem.gustavoribeiro.dev/).

Special thanks to [Ivam Luz](https://medium.com/u/8f3c967e1c89) and [Marcelo Costa](https://medium.com/u/cefea92fdd20) for reviewing it!

[The complete guide about design systems: Engineering](https://medium.com/ci-t/the-complete-guide-about-design-systems-engineering-cd332cf520f2) was originally published in [CI&T](https://medium.com/ci-t) on Medium, where people are continuing the conversation by highlighting and responding to this story.
