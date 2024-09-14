<p align="center">
  <img src="https://img.icons8.com/?size=512&id=55494&format=png" width="20%" alt="N3MO-BLOG_PORTFOLIO.GIT-logo">
</p>
<p align="center">
    <h1 align="center">N3MO-BLOG_PORTFOLIO.GIT</h1>
</p>
<p align="center">
    <em><code>A blog and portfolio built with Astro</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/leonardoo210399/N3mo-Blog_Portfolio.git?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/leonardoo210399/N3mo-Blog_Portfolio.git?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/leonardoo210399/N3mo-Blog_Portfolio.git?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/leonardoo210399/N3mo-Blog_Portfolio.git?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the following tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Astro-FF5D01.svg?style=flat&logo=Astro&logoColor=white" alt="Astro">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/sharp-99CC00.svg?style=flat&logo=sharp&logoColor=white" alt="sharp">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

##### 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔖 Prerequisites](#-prerequisites)
    - [📦 Installation](#-installation)
    - [🤖 Usage](#-usage)
    - [🧪 Tests](#-tests)
- [📌 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The **N3MO-BLOG_PORTFOLIO.GIT** is a modern blog and portfolio website built with [Astro](https://astro.build), designed to be fast, lightweight, and highly customizable. It features easy content management with markdown files and provides a developer-friendly environment with TypeScript and JavaScript for dynamic components.

---

## 👾 Features

- **Fast and Lightweight**: Built with Astro for optimized performance and minimal JavaScript.
- **Modular Components**: Easy to customize and extend with Astro and React components.
- **Markdown Content**: Create blog posts and portfolio items using markdown files.
- **Dark Mode**: Includes a theme switcher to toggle between dark and light mode.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop screens.
- **SEO Ready**: Pre-configured with SEO best practices and open graph metadata.

---

## 📂 Repository Structure

```sh
└── N3mo-Blog_Portfolio.git/
    ├── LICENSE
    ├── _astrosphere.jpg
    ├── _deploy_netlify.svg
    ├── _deploy_vercel.svg
    ├── _lighthouse.png
    ├── astro.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── pnpm-lock.yaml
    ├── public
    │   ├── brand.svg
    │   ├── favicon.svg
    │   ├── fonts
    │   │   ├── atkinson-bold.woff
    │   │   └── atkinson-regular.woff
    │   ├── js
    │   │   ├── animate.js
    │   │   ├── bg.js
    │   │   ├── scroll.js
    │   │   └── theme.js
    │   ├── open-graph.jpg
    │   ├── robots.txt
    │   ├── social.svg
    │   ├── stack.svg
    │   └── ui.svg
    ├── src
    │   ├── components
    │   │   ├── ArrowCard.tsx
    │   │   ├── BaseHead.astro
    │   │   ├── Blog.tsx
    │   │   ├── Container.astro
    │   │   ├── Counter.tsx
    │   │   ├── Drawer.astro
    │   │   ├── Footer.astro
    │   │   ├── Header.astro
    │   │   ├── MeteorShower.astro
    │   │   ├── Projects.tsx
    │   │   ├── Search.tsx
    │   │   ├── StackCard.astro
    │   │   └── TwinklingStars.astro
    │   ├── consts.ts
    │   ├── content
    │   │   ├── blog
    │   │   │   ├── leetcode-problem-1-:-two-sum
    │   │   │   │   └── index.md
    │   │   │   └── leetcode-problem-15
    │   │   │       └── index.md
    │   │   ├── config.ts
    │   │   ├── legal
    │   │   │   ├── privacy.md
    │   │   │   └── terms.md
    │   │   ├── projects
    │   │   │   ├── promptwhiz
    │   │   │   │   └── index.md
    │   │   │   └── tindog
    │   │   │       └── index.md
    │   │   └── work
    │   │       ├── Accenture.md
    │   │       ├── Shatam Technologies.md
    │   │       └── mcdonalds.md
    │   ├── env.d.ts
    │   ├── layouts
    │   │   ├── ArticleBottomLayout.astro
    │   │   ├── ArticleTopLayout.astro
    │   │   ├── BottomLayout.astro
    │   │   ├── PageLayout.astro
    │   │   └── TopLayout.astro
    │   ├── lib
    │   │   └── utils.ts
    │   ├── pages
    │   │   ├── blog
    │   │   │   ├── [...slug].astro
    │   │   │   └── index.astro
    │   │   ├── index.astro
    │   │   ├── legal
    │   │   │   └── [...slug].astro
    │   │   ├── projects
    │   │   │   ├── [...slug].astro
    │   │   │   └── index.astro
    │   │   ├── robots.txt.ts
    │   │   ├── rss.xml.ts
    │   │   ├── search
    │   │   │   └── index.astro
    │   │   └── work
    │   │       └── index.astro
    │   ├── styles
    │   │   └── global.css
    │   └── types.ts
    ├── tailwind.config.mjs
    └── tsconfig.json
```

---

Here is the updated version of the **🧩 Modules** section with the "REPLACE-ME" placeholders replaced by a description of what each file is responsible for:

---

## 🧩 Modules

<details closed><summary>Root Files</summary>

| File | Summary |
| --- | --- |
| [tsconfig.json](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/tsconfig.json) | Configuration for TypeScript, specifying compiler options and type checking. |
| [package.json](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/package.json) | Contains metadata about the project, including dependencies, scripts, and project version. |
| [astro.config.mjs](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/astro.config.mjs) | Astro configuration file defining project-level settings, like routes, integrations, and base settings. |
| [package-lock.json](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/package-lock.json) | Automatically generated file that locks the exact versions of dependencies used in the project. |
| [tailwind.config.mjs](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/tailwind.config.mjs) | Tailwind CSS configuration file that customizes the default theme and extends Tailwind's functionalities. |
| [pnpm-lock.yaml](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/pnpm-lock.yaml) | Lockfile for the pnpm package manager, ensuring reproducible builds by specifying exact dependency versions. |

</details>

<details closed><summary>Public Folder</summary>

| File | Summary |
| --- | --- |
| [robots.txt](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/public/robots.txt) | Directives for search engine crawlers on how to index the website. |

</details>

<details closed><summary>Public JS Files</summary>

| File | Summary |
| --- | --- |
| [animate.js](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/public/js/animate.js) | Contains custom animations and DOM interactions for UI elements. |
| [bg.js](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/public/js/bg.js) | Manages background effects like gradients or dynamic changes. |
| [scroll.js](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/public/js/scroll.js) | Implements smooth scrolling and scroll-triggered animations. |
| [theme.js](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/public/js/theme.js) | Handles theme switching logic, such as dark mode toggling. |

</details>

<details closed><summary>Source Files</summary>

| File | Summary |
| --- | --- |
| [types.ts](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/types.ts) | Defines TypeScript types for various data structures used across the project. |
| [consts.ts](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/consts.ts) | Holds constant values used throughout the project. |
| [env.d.ts](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/env.d.ts) | Type definitions for environment variables. |

</details>

<details closed><summary>Content Configuration</summary>

| File | Summary |
| --- | --- |
| [config.ts](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/content/config.ts) | Configuration for content, defining how blog posts and other content are handled. |

</details>

<details closed><summary>Global Styles</summary>

| File | Summary |
| --- | --- |
| [global.css](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/styles/global.css) | Global CSS styles applied throughout the site. |

</details>

<details closed><summary>Pages</summary>

| File | Summary |
| --- | --- |
| [index.astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/pages/index.astro) | The main homepage file, defines the structure and content of the home page. |
| [robots.txt.ts](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/pages/robots.txt.ts) | Script to dynamically generate the `robots.txt` file. |
| [rss.xml.ts](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/pages/rss.xml.ts) | Script to generate an RSS feed for the blog. |

</details>

<details closed><summary>Blog Pages</summary>

| File | Summary |
| --- | --- |
| [[...slug].astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/pages/blog/[...slug].astro) | Dynamic route file that renders individual blog posts based on the slug. |
| [index.astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/pages/blog/index.astro) | Lists all blog posts and handles pagination of posts on the blog landing page. |

</details>

<details closed><summary>Legal Pages</summary>

| File | Summary |
| --- | --- |
| [[...slug].astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/pages/legal/[...slug].astro) | Dynamic route to render various legal pages, such as terms of service or privacy policy. |

</details>

<details closed><summary>Work Pages</summary>

| File | Summary |
| --- | --- |
| [index.astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/pages/work/index.astro) | Lists projects or portfolio items under the "Work" section of the site. |

</details>

<details closed><summary>Search Page</summary>

| File | Summary |
| --- | --- |
| [index.astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/pages/search/index.astro) | The search page where users can search for blog posts or projects. |

</details>

<details closed><summary>Projects Pages</summary>

| File | Summary |
| --- | --- |
| [[...slug].astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/pages/projects/[...slug].astro) | Dynamic route file to render individual project details based on the slug. |
| [index.astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/pages/projects/index.astro) | Lists all projects in the portfolio. |

</details>

<details closed><summary>Components</summary>

| File | Summary |
| --- | --- |
| [TwinklingStars.astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/components/TwinklingStars.astro) | Component for a starry background effect on the site. |
| [Blog.tsx](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/components/Blog.tsx) | Component that renders a list of blog posts. |
| [Search.tsx](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/components/Search.tsx) | Component for the search functionality across the site. |
| [Footer.astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/components/Footer.astro) | Component for the footer section of the site. |
| [BaseHead.astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/components/BaseHead.astro) | Common head component for adding meta tags and title in HTML. |
| [Projects.tsx](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/components/Projects.tsx) | Component to list projects or portfolio items. |
| [Counter.tsx](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/components/Counter.tsx) | A counter component for incrementing or decrementing numbers. |
| [Header.astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/components/Header.astro) | Component for the header section of the site, including navigation. |
| [MeteorShower.astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/components/MeteorShower.astro) | Component for a meteor shower background effect. |
| [StackCard.astro](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/src/components/StackCard.astro) | Displays a card for tech stack items. |

---

## 🚀 Getting Started

### 🔖 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org) (v14 or higher)
- [npm](https://www.npmjs.com/) (or [pnpm](https://pnpm.io/))
- [Astro](https://astro.build)

### 📦 Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git
   cd N3mo-Blog_Portfolio.git
   ```

2. **Install dependencies**:

   If you're using `npm`:

   ```sh
   npm install
   ```

   If you're using `pnpm`:

   ```sh
   pnpm install
   ```

### 🤖 Usage

To run the site locally:

```sh
npm run dev
```

This will start a development server at `http://localhost:3000`. You can open this in your browser to see your changes.

---

### 🧪 Tests

Run the following command to execute unit tests:

```sh
npm test
```

---

## 📌 Project Roadmap

- [x] Setup Astro framework
- [x] Integrate Markdown for blog content
- [x] Create reusable components
- [ ] Implement search functionality
- [ ] Add pagination for blog posts
- [ ] Add support for tags/categories

---

## 🤝 Contributing

We welcome contributions! Please follow these steps to contribute:

1. **Fork the repository**: Click the "Fork" button at the top of this repository to create your own copy.
2. **Create a new branch**: Use a descriptive branch name for your feature or fix.

   ```sh
   git checkout -b feature-branch-name
   ```

3. **Make your changes**: Make your changes in the new branch.
4. **Commit your changes**: Write a clear commit message describing the change.

   ```sh
   git commit -m "Added new feature or fixed bug"
   ```

5. **Push to GitHub**: Push the branch to your forked repository.

   ```sh
   git push origin feature-branch-name
   ```

6. **Open a Pull Request**: Go to the original repository and open a new pull request. Describe your changes and submit the PR.

---

## 🎗 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/LICENSE) file for details.

---

## 🙌 Acknowledgments

- Astro for building such a fantastic framework.
- Shields.io for the badges.
- Font Awesome for the icons used in the project.
- [Your Name Here] for additional contributions and inspiration!

---

Let me know if you'd like any further changes or clarifications!
