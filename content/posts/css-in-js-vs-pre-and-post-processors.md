---
title: "CSS-in-JS vs Pre & Post Processors in 2019"
date: "2019-12-21"
excerpt: "Uma análise comparativa profunda entre Styled Components e Sass sob 5 dimensões: Reusabilidade, Performance, Escalabilidade, Componibilidade e DX."
excerptEn: "An in-depth comparative study of CSS-in-JS (Styled Components) vs. Pre/Post Processors (Sass) across Reusability, Performance, Scalability, Composability, and DX."
tags: ["programming", "front-end-development", "sass", "css-in-js", "styled-components"]
readingTime: "7 min read"
coverImage: "https://cdn-images-1.medium.com/max/1024/1*eCSEe0u6Gh3F_Ff63pu89g.png"
canonicalUrl: "https://itnext.io/css-in-js-vs-pre-post-processors-in-2019-8b1e20c066ed"
featured: false
---

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*eCSEe0u6Gh3F_Ff63pu89g.png)

## Styled Components vs Sass in 2019

2019 is coming to an end but it’s still time to finish with a really cool post about styling. This post is based on a presentation that is the result of a study made about CSS in JS vs pre & post processors, under five different aspects: **Reusability**, **Performance, Escalability, Composability and Developer Experience (DX)**. Here, I will compare two most important tools of each way of writing CSS, the tools will be: **Styled Components and Sass**

[https://medium.com/media/6b93314bf06e8375e0ee0ef7ed78dc3c/href](https://medium.com/media/6b93314bf06e8375e0ee0ef7ed78dc3c/href)The activity of writing CSS over time becomes more natural and less complex, however, although it is not a relatively complex activity. The CSS language works on a global scope that does not have many logics, this over time means that there may be many conflicts depending on the way you write, especially if you’re not using any methodologies like OOCSS, SMACSS, BEM, DRY CSS, ITCSS.

Jeff Atwood explains in their blog post how to develop well-designed systems and that phrase is what guides this post. We need to create systems that direct people to the right path or, better said, direct people to the ‘pit of successes’.

> A well-designed system makes it easy to do the right things and annoying (but not impossible) to do the wrong things. Falling Into The Pit of Success

### **Styled Components**

Styled Components is a library for component styling React & React Native and today is the most popular implementation of what we call CSS-in-JS. This technology has gained increasing relevance with modern front-end development and especially in the React community.

### Sass

Between LESS, Stylus and PostCSS, the biggest preprocessor. Sass is already 12 years old and still, one of the preprocessors CSS most popular and highly used today.

### Reusability

When the systems are growing, we want to make sure that our CSS is flexible and reusable between components, below you will see how these two tools deal with this.

**Styled Components: advantages and disadvantages**

The main **advantages** are:

- Component-based architecture with changes controlled by props
- Styles are shared because the usage of components are shared

The main **disadvantages** are:

- The more generic your component is, the more likely it is to become complex and difficult to debug and read

**Sass: advantages and disadvantages**

The main **advantages** are:

- Reusability with SASS is extremely linked to the methodology used, either: BEM, OOCSS, ITCSS.
- Use the methodology that works well in your codebase/team

The main **disadvantages** are:

- Just as with styled-components is possible, there are cases where BEM generates components with unreadable HTML.

### Performance

When we are creating web apps, we still need to get some point of attention on this topic. With the growth of web apps, they are getting heavier and depending on how it is used, your css can be a big factor in why your web app’s performance isn’t doing so well, especially if you are using exclusively client-side rendering

**Styled Components: advantages and disadvantages**

The main **advantages** are:

- As with components, styles are rendered only if the component is on screen.
- Server-side rendering post React 16 through [Streaming Rendering API](https://www.zcfy.cc/original/zeit-streaming-server-side-rendering-and-caching-at-spectrum) and plugin ready if you’re using Next.js or Gatsby

The main **disadvantages** are:

- Related to its “competitors” styled-components, still not in the first place, [emotion is at the top](https://blog.primehammer.com/the-performance-of-styled-react-components/).
- [Pre-version 5](https://medium.com/styled-components/announcing-styled-components-v5-beast-mode-389747abd987) of styled-components, they had a problem with performance working with Context API, but after that, the React team improve it, you can follow this [issue here](https://github.com/styled-components/styled-components/issues/2215)

**Sass: advantages and disadvantages**

The main **advantages** are:

- You don’t have to worry about some common problems pre-version 5 of styled components like dirt components tree, usage of context API to pass styled through deep components.

The main **disadvantages** are:

- Flexibility to work with rendering components in DOM, your style will cost client processing even when it’s not rendered in your page, depending on logic you’re using
- There’s not own server-side rendering solution, or any plugin ready to work with app

### Scalability & Good Practices

This discussion for me is what drives this discussion and the data collected here gave us the answer what way we will go

**Styled Components: advantages and disadvantages**

The main **advantages** are:

- Guaranteed by framework design and a good component-based architecture

> BEM is safety through discipline. CSS-in-JS is safety through API design. The former works, but can be easily broken. The latter will always work. check this thread

The main **disadvantages** are:

- Vendor lock-in (Good support for React and Vue, if you’re using Angular you should try [**emotion**](https://emotion.sh/docs/introduction)**)**
- At first look, css in js could be difficult for your team, the learning curve is bigger than using sass

**Sass: advantages and disadvantages**

The main **advantages** are:

- Use what makes the most sense for your context BEM or OOCSS or ITCSS or something like Functional CSS

The main **disadvantages** are:

- Depending on the maturity of your team and a good code review pattern, instead of a good API design

### Composability

Design systems are growing, and in this item, we will compare how these two tools work when you’re trying to create and maintain a Design System or creating a White label product.

**Styled Components: advantages**

The main **advantages** are:

- Usage of [**ThemeProvider**](https://www.styled-components.com/docs/advanced)**, **this API will simplify how you use different themes for your apps
- Better documentation of component props, ie [better-defined scope](https://github-ds.now.sh/#44)

**Sass: advantages**

The main **advantages** are:

- Usage of [**SASS Variables**](https://sass-lang.com/documentation/variables)**, **to work with white label product

Both tools have good support for component libraries like Storybook, React Styleguist and Docz.

### Developer Experience

For this item, the two tools has good developer experience, both have a good tooling, that is, a good extension to the major IDE’s used today (VSCode, sublime and vim), sonar plugin to static analysis code, the community of css in js are growing and become more popular, they have a lot of tech articles, mainly in React community and for sass the community and technology still strong and solid.

### We have a winner?

It depends, as I said for this decision, we make a decision matrix following the topics used in this post: Reusability, Performance, Escalability, Composability and Developer Experience (DX). The winner (for us) is Sass because at that moment Styled Components did not release the version 5 and the performance issue is a real problem for us we want to make sure that we don’t have any problem with this topic because of framework internals. Our codebase is mainly Sass, that is, the knowledge of the team has an Angular background and we did not have any problem with Sass, before this research.

![Matrix decision made for this research](https://cdn-images-1.medium.com/max/1024/1*ZMji-TSHLZz8bnCHLPkLgg.png)
*Matrix decision made for this research*

### Alternatives?

Not necessarily you have to use these two tools, if something does not fit well in your application, you can evaluate the use of the following tools

- [**Emotion**](http://emotion.sh/)**:** No lock-in vendor, emotion can be used on any framework and even vanilla js
- [**CSS Modules**](https://css-tricks.com/css-modules-part-1-need/)**:** A mix of plain css in javascript without any framework, in which all class names are scoped locally by default

[CSS-in-JS vs Pre & Post Processors in 2019](https://itnext.io/css-in-js-vs-pre-post-processors-in-2019-8b1e20c066ed) was originally published in [ITNEXT](https://itnext.io) on Medium, where people are continuing the conversation by highlighting and responding to this story.
