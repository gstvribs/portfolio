---
title: "How Redux toolkit can reduce your setup of Redux in your React app"
date: "2020-03-08"
excerpt: "Como o Redux Toolkit (RTK) elimina o boilerplate tradicional do Redux com configureStore, createSlice e imutabilidade nativa via Immer."
excerptEn: "How Redux Toolkit (RTK) eliminates traditional Redux boilerplate using configureStore, createSlice, and built-in Immer immutability."
tags: ["react", "redux", "typescript", "javascript", "programming"]
readingTime: "3 min read"
coverImage: "https://cdn-images-1.medium.com/max/1024/0*WNwTbqjWR-zn4aYE"
canonicalUrl: "https://itnext.io/how-redux-toolkit-can-reduce-your-setup-of-redux-in-your-react-app-d87baab59268"
featured: false
---

![Photo by [Max Duzij](https://unsplash.com/@max_duz?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/1024/0*WNwTbqjWR-zn4aYE)
*Photo by [Max Duzij](https://unsplash.com/@max_duz?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

## How Redux Toolkit can reduce your setup of Redux in your next React app

Setup of state management in React application could be a complicated or a repetitive task. With that in mind, Redux Toolkit a.k.a “RTK” was created. React toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. As stated on the official website, toolkit was created in spirit of [create-react-app](https://create-react-app.dev/) or [apollo-bost](https://www.apollographql.com/docs/react/migrating/boost-migration/). From beginners to advanced Redux users, this tool was created to provide a set of tools for people who want to simplify their Redux code/setup.

### Using toolkit what kind of benefit will I get?

### Reduce boilerplates with useful functions

- **configureStore() -** Combine reducers, add redux middlewares you supply, that by default brings redux-thunk and useful middlewares for development stage, generate action creators and action types and then enable DevTools without any complicated configuration.
- **createSlice() -** A helper function that accepts a set of reducers functions, initial state and a name of slice, this function enforces the [slice reducer pattern](https://redux.js.org/recipes/structuring-reducers/splitting-reducer-logic/).
- **createSelector() **—Re-exported directly from [reselect](https://github.com/reduxjs/reselect) library, to facilitate create logic inside of [useSelector](https://react-redux.js.org/api/hooks) hook.
- You can see more functions [here](https://redux-toolkit.js.org/introduction/quick-start).

### Includes popular middlewares by default

By default, RTK includes these three middlewares.

- **redux-immutable-state-invariant:** Used in **development stage only**, this lib will throw an error if you try to mutate state directly**. **There is a particular case because RTK [uses immer.js internally](https://redux-toolkit.js.org/usage/usage-guide#considerations-for-using-createreducer) by default too, this is automatically done for you since the structures provided by that library don’t allow you to mutate them.
- **serializable-state-invariant-middleware:** Checks if your state tree and actions have non-serialized data, such as: Functions, Promises and non-plain JavaScript data values. If they have these a console.error will be printed.
- **redux-thunk:** A middleware recommended if you trying to side effects in you redux logic.

These three middlewares are added by default with the function getDefaultMiddleware() , unless you’d like to add additional middlewares or remove them.

### Set-up Redux DevTools

With RTK, Redux DevTools are supported by default and with a simple flag **true** or **false, **you could enable or disabled redux devtools, to ease debugging state in your application. The configuration is enabled in configureStore function.

### Github Repository

You can see all of these features in action in this react application using React, Redux Toolkit, React Router & MaterialUI, created by [**Jordan Winslow**](https://twitter.com/JordanDWinslow), please let me know if it helps you! All credits for Jordan and many thanks for sharing the repository.

[JordanWinslow/flash-cards](https://github.com/JordanWinslow/flash-cards)

[How Redux toolkit can reduce your setup of Redux in your React app](https://itnext.io/how-redux-toolkit-can-reduce-your-setup-of-redux-in-your-react-app-d87baab59268) was originally published in [ITNEXT](https://itnext.io) on Medium, where people are continuing the conversation by highlighting and responding to this story.
