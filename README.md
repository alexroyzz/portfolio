# Deepak — MERN Stack Developer · Portfolio

Premium dark-mode personal portfolio built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + GSAP ScrollTrigger + Lenis + Lucide**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

Deploy on Vercel: push to GitHub → Import Project → default Next.js settings work as-is.

## Project structure

```
app/
  layout.tsx        # fonts, SEO metadata, Open Graph, nav/footer shell
  page.tsx          # section composition (the page journey)
  globals.css       # design tokens, typography scale, component classes
  robots.ts         # robots.txt
  sitemap.ts        # sitemap.xml
  icon.svg          # favicon
components/
  Nav, Hero, Marquee, Impact, ProjectSection, Statement, Services,
  Process, Experience, Certifications, MoreProjects, Contact, Footer
  Reveal, Magnetic, Counter, BrowserFrame     # reusable primitives
  SmoothScroll, ScrollProgress, CursorGlow    # global motion layer
data/
  site.ts           # profile, nav, stats, services, process, experience, certs
  projects.ts       # all project content (typed)
public/assets/      # optimised .webp product screenshots
```

## Editing content

All copy lives in `data/`. **No content is hardcoded inside components.**

- Add or edit a project → `data/projects.ts` (title, subtitle, description, technologies, features, gallery, liveUrl, githubUrl, result).
- Change stats, services, process steps, experience, certifications → `data/site.ts`.
- New screenshots → drop a `.webp` in `public/assets/` and reference it as `/assets/name.webp`.

## Motion system

| Layer | Used for |
| --- | --- |
| Framer Motion | entrance animations, scroll reveals, statement words, scroll progress |
| GSAP + ScrollTrigger | the process timeline line that fills on scroll |
| Lenis | smooth scrolling (auto-disabled for reduced motion) |
| CSS | marquee, ambient orbs, hover/magnetic transitions |

Every animation checks `prefers-reduced-motion`, and pointer effects (cursor glow, magnetic buttons) only run on fine-pointer desktop devices.

## Performance & accessibility

- `next/image` with lazy loading everywhere except the first project shot (`priority`).
- Screenshots pre-compressed to 1600px `.webp`.
- Semantic landmarks, skip link, visible focus rings, 44px touch targets, alt text on every screenshot, WCAG AA contrast.

## Before going live

1. Replace `https://deepak-portfolio.vercel.app` in `app/layout.tsx`, `app/robots.ts` and `app/sitemap.ts` with your real domain.
2. Optionally add `public/og.png` (1200×630) and reference it in `metadata.openGraph.images`.
