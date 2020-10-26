---
title: 'Handling application data with NextJS'
excerpt: 'In this post you will learn how to handle the data inside your application using NextJS. There are three opstions: Client Side Fetching | Server Side Rendering | Satic Site Generation'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Caio Yoshida
  picture: '/assets/blog/authors/profile.jpg'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

# Next JS

## Handling application data with NextJS

### Client Side Fetching (CSF)
-	Usual data handling with ReactJS
-	Creating state with useState()
-	Charging data with useEffect()
-	It's better to use CSF if you don't need to index the API data

### Server Side Rendering
- Browser <--> Next <--> Back-end (data) - The page will be rendered after charging the API data
- It's an interesting option if you need to index your API data
- But be careful, if your API data is very large, your page will take longer to be rendered and it's NOT good.

### Static Site Generation
- This is other option if you like to index your API data as well
- The data is put on cache memory, so it calls API data only once, and then your page gets a static page behavior

## GetStaticPaths
If you want to create dinamic static pages on NextJS you must use getStaticPaths.

```js
export const getStaticPaths: GetStaticPaths = async() => {
	paths: [],
	fallback: false,
}
```

For example, if you want to pre-render all paths of an API like this: *http://someapi/categories/[category]*, you need to pass all categories into **paths** array.
