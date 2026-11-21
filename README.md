# Meridian

An independent journal about design, engineering, product, and the culture of building software. Built with Next.js App Router as a fully static, frontend-only site — no backend, no database, no CMS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build and preview:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

## Configuration

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used for metadata, JSON-LD, sitemap, robots, and RSS | `https://meridianjournal.com` |

Set it in `.env.local` (or your host's environment) before building. It must be the full origin without a path, for example:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

The value is read at build time, so rebuild after changing it.

## Project structure

```
app/
  layout.tsx                     Root layout: fonts, global metadata, header/footer, Organization + WebSite JSON-LD
  page.tsx                       Home page: hero, featured essay, latest, topics, manifesto, newsletter
  globals.css                    Tailwind v4 theme, editorial typography, prose styles
  blog/
    page.tsx                     Journal index with client-side search and topic filters
    [slug]/
      page.tsx                   Essay page: article body, TOC, share links, author bio, related, prev/next
      opengraph-image.tsx        Per-essay 1200×630 social card (generated at build time)
  topics/
    page.tsx                     Department overview
    [slug]/page.tsx              Essays filtered by topic
  authors/
    page.tsx                     Masthead
    [slug]/page.tsx              Author profile with essays and at-a-glance details
  about/page.tsx                 Story, principles, editorial standards, team
  subscribe/page.tsx             Newsletter landing page
  not-found.tsx                  Custom 404 with recent essays
  opengraph-image.tsx            Site-wide social card
  icon.svg                       Favicon and app icon source
  apple-icon.png                 Apple touch icon
  favicon.ico                    Multi-size favicon
  sitemap.ts                     XML sitemap (static routes, essays, topics, authors)
  robots.ts                      robots.txt
  manifest.ts                    Web app manifest
  feed.xml/route.ts              RSS 2.0 feed
components/                      Presentational and interactive UI (all content comes from `lib/`)
lib/
  site.ts                        Brand, URL, navigation, social links, keywords
  posts.ts                       Ten essays plus sorting, related posts, reading time, outline helpers
  authors.ts                     Author records
  topics.ts                      Department records
  types.ts                       Shared content types
  seo.ts                         `createMetadata` helper (canonical, OpenGraph, Twitter, robots)
  jsonld.ts                      Structured data builders
  format.ts                      URL and date formatting
```

## Content

All content is local and typed:

- **Essays** — `lib/posts.ts`. Each post has `slug`, `title`, `dek`, `publishedAt`, optional `updatedAt`, `author`, `topic`, `tags`, cover `art`, and a structured `body` array of blocks (`h2`, `h3`, `p`, `quote`, `ul`, `ol`, `callout`, `code`, `hr`).
- **Authors** — `lib/authors.ts`, keyed by name (posts reference the author's display name).
- **Topics** — `lib/topics.ts`.

Adding a post automatically creates its page, sitemap entry, RSS item, and social card via `generateStaticParams`. Unknown slugs call `notFound()`.

## SEO

- Per-page titles, descriptions, canonical URLs, Open Graph, and Twitter card metadata via the Next.js Metadata API (`lib/seo.ts`).
- Article metadata includes published/modified times, author, section, and tags.
- JSON-LD structured data: `Organization`, `WebSite`, `Blog`, `BlogPosting`, `BreadcrumbList`, `CollectionPage`, `Person`, `ProfilePage`, and `AboutPage`. Output is sanitized in `components/json-ld.tsx`.
- `app/sitemap.ts` covers every route and attaches each essay's social image.
- `app/robots.ts` allows crawling and points to the sitemap.
- `app/feed.xml/route.ts` serves RSS 2.0.
- Generated Open Graph images (1200×630) for the site and every essay.
- Semantic landmarks, a single `h1` per page, skip link, visible focus states, and `prefers-reduced-motion` handling.

## Performance notes

- Every route is statically prerendered at build time.
- Cover art is inline SVG, so there are no image requests or layout shifts.
- Fonts are loaded with `next/font` and self-hosted at build time.
- Security headers (`nosniff`, referrer policy, frame options, permissions policy) are set in `next.config.ts`.

## Deploying

Any static-friendly Next.js host works (Vercel, Netlify, Cloudflare, a Node server). Set `NEXT_PUBLIC_SITE_URL` to the production origin, run `npm run build`, then serve the output with `npm start` or your platform's Next.js adapter.
