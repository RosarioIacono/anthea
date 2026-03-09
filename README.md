# Anthea — Astro + Tailwind site

Open-source seedling biotechnology for resilient European agriculture.

## Stack

- **[Astro](https://astro.build)** — static site generator with component-based pages
- **[Tailwind CSS](https://tailwindcss.com)** — utility-first styling with a custom earthy palette
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** — prose styling for blog posts
- **[Netlify](https://netlify.com)** — hosting + Netlify Forms for the contact form

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:4321

# 3. Build for production
npm run build

# 4. Preview the build
npm run preview
```

## Project structure

```
src/
├── content/
│   ├── config.ts          # Blog post schema (Zod validation)
│   └── posts/             # Markdown blog posts — add .md files here
├── layouts/
│   ├── BaseLayout.astro   # Shell for all pages (head, nav, footer)
│   └── BlogPostLayout.astro
├── components/
│   ├── Nav.astro
│   └── Footer.astro
├── pages/
│   ├── index.astro        # Homepage
│   ├── about.astro
│   ├── problem.astro
│   ├── solution.astro
│   ├── products.astro
│   ├── open-source-seeds.astro
│   ├── science.astro
│   ├── facility.astro
│   ├── press.astro
│   ├── contact.astro
│   └── posts/
│       ├── index.astro    # Blog listing
│       └── [...slug].astro # Dynamic individual post route
└── styles/
    └── global.css         # Tailwind imports + base styles + animations
```

## Adding a blog post

Create a `.md` file in `src/content/posts/` with this frontmatter:

```markdown
---
title: "Your Post Title"
description: "A one-sentence summary."
pubDate: 2025-03-01
author: "Dr. Rosario Iacono"
tags: ["AMF", "seedlings", "CEA"]
---

Your content here in Markdown...
```

The post will appear automatically in the blog listing and get its own URL at `/posts/your-filename/`.

## Customisation priorities

1. **Partner logos** — replace text placeholders in `index.astro` (Supported by section) with real `<img>` tags pointing to `/public/images/partners/`
2. **Photography** — replace grey placeholder divs with `<img>` tags throughout. Especially in `products.astro` and `facility.astro`
3. **Colour palette** — all colours are in `tailwind.config.mjs` under `theme.extend.colors`
4. **Fonts** — swap the Google Fonts import in `src/styles/global.css` if you want to change from Sora + Lora

## Netlify Forms

The contact form in `contact.astro` uses Netlify Forms (`data-netlify="true"`).
This works automatically once deployed to Netlify — no backend needed.
Submissions appear in your Netlify dashboard under Forms.

## Deployment

Push to GitHub and connect to Netlify. Use these settings:
- Build command: `npm run build`  
- Publish directory: `dist`
- Node version: 20 (set in netlify.toml)

The site URL in `astro.config.mjs` should be updated to your final domain.
