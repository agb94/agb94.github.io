---
title: New Beginnings
date: "2022-04-26T13:40:32.169Z"
description: 👆 Check out my first blog post!
show: true
---

This is my first post on this new blog. How exciting! 😋

To make this blog, I used [Gatsby](https://www.gatsbyjs.com/).
It is pretty easy to make a website with Gatsby because there are plenty of
great starter packs. I used one of the most popular themes:
[`gatsby-starter-blog`](https://github.com/gatsbyjs/gatsby-starter-blog).

##### Brief Tutorial: How to make a blog with Gatsby
- Prerequisite: [Node.js](https://nodejs.org/en/)

###### 1. Enable [`corepack`](https://github.com/nodejs/corepack)

> Corepack is a zero-runtime-dependency Node.js script that comes
> with the installation of Node.js.
> If you enable corepack, you can use `Yarn`, a JavaScript package manager.

```shell
corepack enable
```

###### 2. Install `gatsby-cli` using `yarn`
```shell
yarn global add gatsby-cli
```

###### 3. Create a new project with a pre-made template.
```shell
gatsby new <your-blog-name> https://github.com/gatsbyjs/gatsby-starter-blog
cd <your-blog-name>
gatsby develop # run the development server
```
You can now check out your blog at http://localhost:8000/.

###### 4. Customize your website
Have no clue?
Here are [the changes](https://github.com/agb94/agb94.github.io/tree/develop) that I made to this website.

###### 5. Deploy your website with GitHub Pages
First, you need to create a new repository on GitHub.
The repository name should be `<your-github-id>.github.io` (this will be the url for your website).
```shell
git init .
git remote add origin https://github.com/<your-github-id>/<your-github-id>.github.io
npm install gh-pages --save-dev
```

Next, add the deploy command `gatsby build && gh-pages -d public -b main` to `package.json`.
You can use any branch name other than `main`.

```json
"scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "deploy": "gatsby build && gh-pages -d public -b main", # add this!
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "start": "gatsby develop",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
}
```

Finally, this command will automatically deploy your blog to GitHub Pages with
GitHub actions. This may take up a few minutes.
```shell
npm run deploy
```

Enjoy!