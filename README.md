# j27avier.github.io

Personal site for Javier Sales-Ortiz — portfolio, blog, and live WebAssembly demos. Built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS v4](https://tailwindcss.com/), deployed to GitHub Pages.

Live at **[j27avier.github.io](https://j27avier.github.io)**.

## Stack

- **Eleventy 3** (ESM config, Nunjucks templating) — static site generation
- **Tailwind CSS v4** — CLI build, no config file; design tokens live in `@theme`
- **Self-hosted variable fonts** — Source Serif 4 + JetBrains Mono (latin subset, ~82 KB total)
- **GitHub Actions** → GitHub Pages

## Development

Requires Node 20+ (Tailwind v4).

```bash
npm install
npm run dev      # Eleventy --serve + Tailwind --watch, concurrently
npm run build    # minified CSS + static build into _site/
```

## Structure

```
src/
├── _data/            site.json (global) · projects.js (portfolio grid)
├── _includes/
│   ├── layouts/      base.njk (shell) · post.njk
│   ├── components/   toasts.njk (reusable click-to-reveal macro)
│   └── icons/        inline social SVGs
├── css/main.css      Tailwind entry + @font-face + @theme tokens
├── fonts/            self-hosted variable woff2
├── img/              profile, portfolio thumbnails, favicons
├── posts/            blog posts (Markdown)
├── index.njk         home: hero, socials, project grid + modals
├── blog/ · demos/    section index pages
eleventy.config.js    input src/ → output _site/, passthrough img + fonts
.github/workflows/    deploy.yml (build on push to master → Pages)
```

## Design language

A modern-LaTeX serif over a Manjaro-dark, brutalism-lite shell — academic typography meets hard edges.

**Palette (Manjaro dark).** Near-black page (`#18181b`), panels one step up (`#212127`), soft off-white text, with a single **Manjaro green** accent (`#35bf5c`) and a deeper teal (`#16a085`) for secondary detail. Used sparingly so the green carries weight. Dark mode only — the light-mode toggle is a joke (see below).

**Type.** Serif everywhere for that paper/LaTeX feel (**Source Serif 4**, chosen for holding up on dark screens), paired with **JetBrains Mono** for metadata, dates, tech tags, and nav labels — the mono is what sells the developer + brutalist read.

**Brutalism-lite.** Sharp corners, visible borders, and one signature move: a **hard green offset drop-shadow** (`shadow-[10px_10px_0_0_…]`, no blur) on the profile photo and project cards, which extends further on hover. No soft grays, no rings, no rounded blur — just weight, edges, and one accent.

**Tokens.** Everything flows through Tailwind v4 `@theme` variables in `src/css/main.css`, so the whole look is driven by a handful of custom utilities — `bg-bg`, `text-ink`, `text-muted`, `text-accent`, `border-line`, `font-serif`, `font-mono`. Change one hex and the site follows.

**Easter eggs.** The "light mode" toggle only trolls — it pops a *Back to the Future* toast ("Where we're going, we don't need light mode.") with a green-screened DeLorean. The footer's `hello there.` answers with `General Kenobi!`. Both share the `toasts.njk` macro and a single `[data-toast]` handler.

## Editing content

- **Projects** — edit the array in `src/_data/projects.js` (title, image, date, category, tech, description). Each entry renders a grid card and an expanding `<dialog>` modal.
- **Blog posts** — drop a Markdown file in `src/posts/`; front matter/layout defaults come from `src/posts/posts.11tydata.json`.
- **Site metadata** — `src/_data/site.json`.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`: builds with Node 20 and publishes `_site/` to GitHub Pages. No manual step.

## License

MIT
