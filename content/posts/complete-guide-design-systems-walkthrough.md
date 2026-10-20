---
title: "The complete guide about design systems: walkthrough"
date: "2020-07-06"
excerpt: "Um guia prático passo a passo construindo e distribuindo um Design System completo em monorepo com Lerna, Storybook, Commitizen, Conventional Commits e Design Tokens."
excerptEn: "A practical walkthrough detailing how to structure, document, and distribute a complete Design System monorepo using Lerna, Storybook, Commitizen, and Design Tokens."
tags: ["design", "design-systems", "style-guides", "components", "programming"]
readingTime: "9 min read"
coverImage: "https://cdn-images-1.medium.com/max/1024/1*N8SPZaRHcE3vEQH6RkN8Ew.png"
canonicalUrl: "https://medium.com/ci-t/the-complete-guide-about-design-systems-walkthrough-764f0b866bca"
featured: true
---

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*N8SPZaRHcE3vEQH6RkN8Ew.png)

## The complete guide about design systems: Walkthrough

*2 of 2 of the series: the complete guide about design systems*

[Engineering](https://medium.com/ci-t/the-complete-guide-about-design-systems-engineering-cd332cf520f2)** **| **Walkthrough**

As promised in the previous post, in this post I intend to show and detail the items in this repository.

[gstvribs/monorepo-angular-component-library](https://github.com/gstvribs/monorepo-angular-component-library)

To the project structure, we will use [Lerna](https://lerna.js.org/), [Commitzen](https://github.com/commitizen/cz-cli), and [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Also, for documentation we will use Storybook and Compodoc, although the main focus of this repository is to serve components for projects developed in Angular, I will show alternatives to create this same structure with other frameworks like React.

For projects using Android, iOS, and other technologies, some concepts can be reused, like package management, release tags, and source version management, but, for monorepo management, dependency sharing, and create bundles, some adaptations are required.

### Distributing as a monorepo

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*HeKt599U3iRQg1nsVCsuSw.png)

This is the basic structure for the entire design system that you are going to build and, to make this available to projects, we use the structure where, through a single monorepo, we will make a package containing all the building blocks a.k.a tokens of the project available: colors, fonts, typographies, etc.

And for the UI Library, we will publish many packages, such as components, modules, and services, as described in the image above.

And for the Rules, we will use a single location that will serve as the single source of truth for rules for design principles, implementation guides, and contribution guides.

For the rules, the most important thing is that it stays in a single place and that developers and designers use the same source of truth when searching for project resources. To do that, there are several good tools and a good one that I recommend is called [Zeroheight](https://zeroheight.com/); it allows that style guide, tokens, and principles are documented in the same place.

Distributing and managing packages is not as easy as it seems and in this scenario, we use monorepo to manage packages. The main advantages of this approach are:

- Sharing dependencies between packages
- [Hoisting](https://github.com/lerna/lerna/blob/master/doc/hoist.md)
- Sharing configurations
- Be able to distribute independent packages

[https://medium.com/media/4da7d0272424c8eebaaef3011671dc68/href](https://medium.com/media/4da7d0272424c8eebaaef3011671dc68/href)This file above is lerna.json, the main configuration file for Lerna. Important things to note in this file:

- version: independent versions of each package
- allowBranch: enables only the branches listed to be able to tag versions automatically via two commands: lerna publishand lerna version
- changelogPreset: this is preset of conventional commits, it is important to set this field so that the command lerna version will use the correct version of the packages based on the preset you use. In this project, we use the Angular conventional changelog used by the Angular team. There are many presets available that you could check [here](https://www.npmjs.com/search?q=conventional%20changelog%20preset).

### Conventional Commits

We have very precise rules on how our git commit messages can be formatted. This feature is used to achieve two goals: **more readable messages, **to help when you are analyzing the **project changelog **and generating the versions **major | minor | patch **following [semantic versioning](https://semver.org/)

So that we could use this, we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), following the standard [conventional-changelog-angular](https://www.npmjs.com/package/conventional-changelog-angular), which is used by the Angular core team on the [most @angular packages](https://github.com/angular/angular/commits/master) to standardize commit messages that define the next version of the package. If you want to know more [read here](https://github.com/angular/angular/blob /master/CONTRIBUTING.md#-commit-message-guidelines).

```
(): 

```

In summary, the **type **handles defining the package version. In other words, it must reflect the real changes being applied to the code. So, to upgrade a specific version based on the latest changes we need to use these types:

- **major:** BREAKING CHANGE
- **minor:** feat
- **patch**: build, chore, ci, fix, improvement, perf, refactor, style, test, docs, revert

### Structure for components

![Imagem do artigo](https://cdn-images-1.medium.com/max/318/1*CEBTqi6rRsxbtyGTvofksg.png)

For the project structure, we have the following directories being monitored by Lerna components and tokens. Each component has its package.json and follows the same standard file structure for the project, which are:

- component.html: template of the component
- component.scss: styles
- component.ts: component logic and bindings
- spec.ts: unit tests
- module.ts: module with the imports of the necessary angular libraries and exporting the component itself.
- sandbox.ts: component development and testing in the [Angular Playground](https://angularplayground.it/)
- stories.ts: storybook documentation
- README.md: a simple markdown telling to users how they install the module and component in some application

And a single index.ts, exporting the only two files that we need to generate the component build. This file is the entry point that [ng-packagr](https://github.com/ng-packagr/ng-packagr) looks at to create the bundle.

```
export * from './lib/button.component';
export * from './lib/button.module';
```

### Structure for tokens

![Imagem do artigo](https://cdn-images-1.medium.com/max/275/1*hU2fTgACPFMBx3QU63X0PQ.png)

This directory aims to put through variables, functions, and mixins all the tokens related to your design system; things like colors, typography, helpers, spacing, shadows, etc. This must be an automatic process, like there is a repository of tokens in Figma or Sketch, through an API it searches and transforms the tokens in the [style dictionary](https://amzn.github.io/style-dictionary/#/) format and can generate sass files compiled with the tokens automatically. This solution sometimes can be necessary, but mostly is an “overkill” solution in your project. In this scenario, it will depend more on how much the tokens are changing over time and remembering that this should not be happening so often.

Also, the output of this package contains the files: [bundle-soft.scss](https://github.com/gstvribs/monorepo-angular-component-library/blob/master/tokens/main-soft.scss)and [bundle-hard.scss](https://github.com/gstvribs/monorepo-angular-component-library/blob/master/tokens/main-hard.scss). Those two options are similar, but the difference is: **hard** is the implementation that changes styles directly in HTML elements like: h1, h2, h3,h4, panda; thus, **soft** is the implementation that only provides classes with the prefix **tokens-h1**,** tokens-h2, etc**…

### Automated releases

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*aGupuUa4vaai5TLBHSOzRw.png)

By using a single lerna publish command to publish packages, we were able to do three things:

- Analyze the change history in the components and identify only the packages that have been modified
- Use the correct version as based on the changelog preset used and consistent with the semantic versioning
- Git tag versions and create or update the current changelog of packages

### Step by step

So, let’s make a small change to the button component to show you how the whole process works.

![Imagem do artigo](https://cdn-images-1.medium.com/max/432/1*4sg8lIhEdZeAFktto9_oFQ.png)

The change is gonna be pretty simple, we add two new props to the component called ariaLabel and ariaPressed.

Before committing, to test these new props we will document that change.

And now we adapt our playground sandbox file

![Imagem do artigo](https://cdn-images-1.medium.com/max/963/1*rid3kk9zB9NfssZlIuInWw.png)

And run npm run start:playground, to check if it works!

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*xpIOsJtIVJjJqoxSWffEfg.gif)

Nice, now let’s document these new properties on stories files.

![Imagem do artigo](https://cdn-images-1.medium.com/max/563/1*0EqQtVEcB0jVZhLI7UvMwA.png)

And run npm run start:storybook, to check if it works!

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*oRLH4clK2yUaWSaMW90Tsw.png)

Awesome, now let’s commit.

git commit -m "feat(button): add new prop ariaLabel and ariaPressed"

The type that we will use is a **feat** because we add something new that does not break anything if you continue to pass nothing.

Generally, at this point, you would configure your CI/CD, but I created this shell script to represent the steps.

[https://medium.com/media/2dd75ca218bbc7f261290810c816e626/href](https://medium.com/media/2dd75ca218bbc7f261290810c816e626/href)And now we have two options: test the publishing to local npm in [verdaccio](https://verdaccio.org/) by running npm run publish:local or npm run publish:ci to the public npm. Here, I will publish it to the npm registry.

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*7EjU-47vkmuq0tH7XXedkg.gif)

As we saw in the gif above, lerna used the correct package version with the new features and created the tags and changelog, here are the [commit](https://github.com/gstvribs/monorepo-angular-component-library/commit/87f76870bdf3aa3cee61acace99bfc06633f8ffd).

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*vGfvue_RKEQqvNlL7UMU7w.png)

The last step is to create the release on Github, where we can just take the CHANGELOG.MD content created by lerna and use it on the [latest tag applied](https://github.com/gstvribs/monorepo-angular-component-library/releases/tag/%40thedesignsystem%2Fbutton%400.2.0).

![Imagem do artigo](https://cdn-images-1.medium.com/max/748/1*nz2mTIIVrWmC8ZfyKZxunw.png)

### Migrating to React

If your project does not use Angular, you can see the scenario down below of a possible migration to React and apply to the framework you use or if you use vanilla.

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*8_BH3Czv44CR6gi1kzIqbw.png)

The biggest changes for this same structure to also work for React focus on two things: bundler and lint. Unfortunately, in this migration, we lost Compodoc and Angular Playground, and, at the time we are writing this post, we still haven’t found a tool exactly comparable to both, there are some good alternatives such as [React Styleguidist](https://react-styleguidist.js.org/) and [Docz](https://www.docz.site/).

Thus, the main change of the whole project is the migration of ng-packagr to webpack. As React gives us more freedom, we have a unique configuration file for the applications and we can create aliases for the path of the components in case we need to import them into each other.

Also, you can check all the code on the repo

[gstvribs/monorepo-react-component-library](https://github.com/gstvribs/monorepo-react-component-library)

### My two cents

- For @angular, @react, @vue, etc. packages use these dependencies as peerDependencies; this is the most recommended approach for your package to become lighter and more compatible.

> Do I even need to specify angular/core as a dependency? If someone is using my library, they will already have an existing Angular project. Todd Palmer quote on npm peerDependencies

- When your component A needs component B, always put component B as a dependency of component A, do not import directly, ng-packagr and webpack does not support relative imports outside root folder of component and there is a reason for that. You can do some workarounds like aliases, but, for your “customer”, it’s good to be more explicit about dependencies.

### Conclusion

I hope this tutorial helps you to build your first design system or help you with some ideas about maintaining packages. Feel free to reach me out on [twitter](https://twitter.com/gstvribs) with any questions and please leave feedback, that helps me a lot!

Cheers to [Ivam Luz](https://medium.com/u/8f3c967e1c89) and [Marcelo Costa](https://medium.com/u/cefea92fdd20) for reviewing it!

[The complete guide about design systems: walkthrough](https://medium.com/ci-t/the-complete-guide-about-design-systems-walkthrough-764f0b866bca) was originally published in [CI&T](https://medium.com/ci-t) on Medium, where people are continuing the conversation by highlighting and responding to this story.
