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

## 🧩 Modules

<details closed><summary>Click to expand</summary>

| File | Summary |
| --- | --- |
| [tsconfig.json](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/tsconfig.json) | TypeScript

 configuration file |
| [package.json](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/package.json) | Defines project metadata and dependencies |
| [public](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/tree/main/public) | Contains static assets like images and fonts |
| [src/components](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/tree/main/src/components) | Reusable UI components |
| [src/layouts](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/tree/main/src/layouts) | Layout components for different pages |
| [src/pages](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/tree/main/src/pages) | Page components for the site |
| [src/styles](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/tree/main/src/styles) | Global CSS styles |
| [tests](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/tree/main/tests) | Automated test files |
| [astro.config.mjs](https://github.com/leonardoo210399/N3mo-Blog_Portfolio.git/blob/main/astro.config.mjs) | Configuration for the Astro framework |

</details>

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
