# Portfolio

A single-page personal site, built with [Astro](https://astro.build). Themed as a
status page — your projects render as "services" with operational status, which
mirrors the Pipeline Status API you actually built.

## The only file you edit for content

```
src/data/site.ts
```

Name, links, projects, stack, about — all there, with `// TODO` markers for the
bits to fill in (GitHub/LinkedIn/email, your last name, repo links). Don't touch
layout or CSS unless you want to re-theme; in that case the color/type tokens are
all at the top of `src/styles/global.css`.

Drop your résumé in `public/resume.pdf` and the hero button just works.

## See it right now (no install)

Open `preview.html` in a browser. It's a standalone snapshot of the current
content — handy for a quick look before you set anything up.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321 — live reload as you edit site.ts
```

```bash
npm run build    # outputs static site to dist/
npm run preview  # preview the production build
```

## Deploy

**Vercel (recommended, ~2 min):**
1. Push this folder to a GitHub repo.
2. Import it at vercel.com → it auto-detects Astro → Deploy.
3. Add your domain (e.g. `firstnamelastname.com`) under Project → Domains.

**GitHub Pages (free, no Vercel):**
1. If you're NOT using a custom domain, set in `astro.config.mjs`:
   `site: "https://<user>.github.io"`, `base: "/<repo-name>"`.
2. Use the official `withastro/action` in a GitHub Actions workflow, or run
   `npm run build` and publish `dist/`.
   With a custom domain, leave `base` unset and add a `CNAME` file.

A custom domain (~$12/yr) reads far better than a `*.github.io` URL — worth it.

## Notes

- Project cards marked `demo: ""` show an "internal" tag instead of a link —
  fine for work projects whose repos are private. Add a link to flip it to "view".
- Status values: `operational` · `stable` · `shipped` · `archived`.
- Fonts load from Google Fonts. Everything else is static — no tracking, no JS
  framework runtime.
