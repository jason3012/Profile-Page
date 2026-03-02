# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This repository is currently empty. Update this file as the project is built out to include:

- Build, lint, and test commands
- Architecture overview and key design decisions
- Any non-obvious conventions or patterns used in the codebase

## 0) How to use this file

You (Claude) are working inside this repo as an agentic coding assistant.

**This file is the source of truth** for:

- product requirements + acceptance criteria
- UI/UX behavior (menu + animations)
- design system (cafe theme palette)
- tech stack + repo conventions
- build/test/deploy workflow

If anything in the repo conflicts with this file, call it out and propose a fix (don’t silently ignore).

---

## 1) Product summary

Build a personal profile site that showcases:

- **Projects** (primary interaction, menu-first)
- **Stats** (impact metrics, quick facts)
- **Experience** (timeline / roles)
- **Skills** (categorized badges)
- **Links** (GitHub, LinkedIn, resume)

### Success criteria (definition of “done”)

- Home page feels like a **stylized cafe menu** of projects
- **Every project is clickable**, triggers an animation, then routes to detail page
- Detail pages are clean, organized, and include **GitHub links** and optional demo links
- Responsive (mobile-first), keyboard accessible, and performant
- Production deploy works end-to-end with previews on PRs

### Non-goals (v1)

- No auth, no database, no CMS required
- No heavy 3D/WebGL effects by default

---

## 2) Tech stack (locked for v1)

Framework:

- **Next.js (App Router)** + **TypeScript (strict)**

Styling:

- **Tailwind CSS**
- Theme tokens via **CSS variables**

UI primitives:

- **shadcn/ui** (Radix-based components)

Animation:

- **Framer Motion**
  - Use shared-element transitions for menu → detail when feasible

Theme:

- Dark-only for v1 (optional light mode later)

Content:

- Local typed content modules in `src/content/*` (no hard-coded UI content in JSX)

Deployment:

- **Vercel**
  - Production on `main`
  - Preview deployments for PRs

Package manager:

- **pnpm**

---

## 3) Commands (expected)

- `pnpm install`
- `pnpm dev`
- `pnpm lint`
- `pnpm build`
- `pnpm start`

Rule: after meaningful UI changes, run **lint + build**.

---

## 4) Repo conventions

### Code style

- TypeScript strict; avoid `any`
- Prefer **Server Components** by default
- Add `"use client"` only where interaction is required (menu animations, filters, theme toggles)
- Use a single `cn()` helper for class merging (clsx + tailwind-merge pattern)

### Component guidelines

- Keep components small, composable
- Prefer semantic HTML (proper headings, lists, buttons)
- Every interactive element must have keyboard and focus behavior

---

## 5) Information architecture (routes)

### Routes (v1)

- `/` **Home = Project Menu** (primary entry)
- `/projects/[slug]` Project detail page

Optional later:

- `/about` (if we want a dedicated profile page, but v1 keeps profile info on `/`)

---

## 6) Home page requirement: “Cafe Menu” UI

The **first page must be a menu** where each menu item is a project.

### Home layout

- Header: Name + short tagline + quick links (GitHub, LinkedIn, Resume)
- Optional small stats strip near top (3–6 stats)
- Main section: **Project Menu List/Grid**
- Secondary section (can be below menu or in a drawer):
  - Experience timeline (condensed)
  - Skills categories (badges)

### Project menu item (“menu component”) must display

- Project name (prominent)
- Tagline (1 line)
- Tech badges (2–6)
- Visual affordance (arrow / “View”)
- Optional: 1 metric (e.g., “12k events processed”, “2-week build”)

---

## 7) Animation requirements (critical)

### Hover (menu item)

- Slight lift (translateY -2 to -4px)
- Border glow using Sand Storm at low opacity
- Arrow slides in slightly

### Click → route transition (must animate before navigation)

When a project menu item is clicked:

1. Run a click animation (200–450ms)
2. Then route to `/projects/[slug]`

Preferred implementation:

- Framer Motion shared element transition using `layoutId={slug}`
- Dims the background slightly while the selected item “activates”
- If user has `prefers-reduced-motion`, skip complex animation and navigate immediately (or use a minimal fade)

### Back navigation

Detail page includes a **Back to Menu** button.

- Label: “Back to Menu”
- Provide reverse-feeling transition if possible, otherwise a simple fade

---

## 8) Project detail page requirements

Route: `/projects/[slug]`

### Required content

Top hero:

- Project name + tagline
- 1–2 sentence summary
- Primary buttons (organized):
  - GitHub repo (required if available)
  - Live demo (optional)
  - Write-up/Devpost (optional)
- Tech stack chips

Body sections (recommended order):

1. Overview (what it is + audience)
2. Key features (bullets)
3. Results / metrics (if any; small table or cards)
4. Screenshots (optimized images)
5. Technical notes (architecture + interesting challenges)
6. Links (all external links grouped neatly)

---

## 9) Content model (single source of truth)

All content lives in `src/content/*` as typed exports. UI reads from content modules.

### `src/content/profile.ts`

- `name`
- `headline`
- `location?`
- `email?`
- `bioShort`
- `socials` { github, linkedin, email?, resumeUrl? }
- `stats` array (3–6): `{ label, value, subtext? }`

### `src/content/experience.ts`

Array (newest → oldest):

- `company`
- `title`
- `location?`
- `start`
- `end` (or `"Present"`)
- `highlights` (3–6 impact bullets)
- `tech` (string[])

### `src/content/projects.ts`

Array:

- `slug`
- `name`
- `tagline`
- `summary` (1–2 sentences)
- `description` (paragraphs or string[])
- `highlights` (bullets)
- `tech` (string[])
- `links` { `github?`, `demo?`, `writeup?` }
- `featured` boolean
- `images` (paths in `/public`)
- `metrics?` (key/value pairs)

### `src/content/skills.ts`

- categories: `{ name, items: string[] }[]`

---

## 10) Visual design system — Cafe Theme (locked)

**Text color:** white (`#FFFFFF`) for headings and body.

### Palette (from provided reference)

- Espresso: `#482E1D`
- Caramel: `#895D2B`
- Leafy: `#A3966A`
- Sand Storm: `#F0DAAE`
- Cinnamon: `#90553C`
- Text: `#FFFFFF`

### Usage rules (must follow)

- Background: **Espresso**
- Main surfaces/cards: **Cinnamon**
- Primary interactive/CTA: **Caramel**
- Borders/dividers: Caramel at low opacity
- Highlights/glows/underlines: **Sand Storm** (sparingly)
- Secondary highlights: **Leafy** (sparingly)

Important constraint:

- White text on **Sand Storm / Leafy** is not readable as a full background.
- Therefore: Sand Storm + Leafy are **accents**, not large text surfaces.

### Theme token mapping (CSS variables)

Define in `globals.css` as CSS variables; then map to shadcn tokens.

Base tokens:

- `--espresso: #482E1D`
- `--caramel: #895D2B`
- `--leafy: #A3966A`
- `--sand: #F0DAAE`
- `--cinnamon: #90553C`
- `--text: #FFFFFF`

App tokens:

- `--background: var(--espresso)`
- `--foreground: var(--text)`
- `--card: var(--cinnamon)`
- `--card-foreground: var(--text)`
- `--primary: var(--caramel)`
- `--primary-foreground: var(--text)`
- `--border: rgba(240, 218, 174, 0.18)` (sand-based border)
- `--ring: rgba(240, 218, 174, 0.45)` (sand-based focus ring)
- `--highlight: var(--sand)`

---

## 11) Typography + layout rules

### Layout

- Max content width: 1100–1200px
- Section padding: 72–96px desktop, 48–64px mobile
- Card radius: 16–20px
- Use consistent vertical rhythm (8px baseline)

### Typography

- Prefer a clean modern font: `Inter` (or `Geist Sans` if installed)
- Type scale guideline:
  - H1: 48–64
  - H2: 32–40
  - H3: 22–28
  - Body: 16–18
  - Caption: 13–14

---

## 12) Components (expected)

Core:

- `Navbar` (sticky, subtle blur, minimal)
- `MenuProjectItem` (the clickable menu component)
- `StatsStrip` (3–6 cards)
- `ExperienceTimeline` (condensed)
- `SkillsGrid` (categories + badges)
- `Footer`

Project pages:

- `ProjectHero`
- `ProjectSection`
- `ProjectGallery`
- `ProjectLinks`

Primitives:

- `Container`, `Section`, `Badge`, `Button`, `Card` (shadcn)

---

## 13) Accessibility requirements

Must:

- Full keyboard navigation
- Visible focus states (no removing outlines without replacement)
- Correct heading hierarchy (single H1 per page)
- Respect `prefers-reduced-motion` (reduce or remove scroll/click animations)

---

## 14) Performance + SEO requirements

Performance:

- Use `next/image` for images
- Keep client components scoped (avoid making entire pages client unnecessarily)
- Lazy-load non-critical sections when reasonable

SEO:

- Use Next.js Metadata API:
  - title template
  - description
  - OG + Twitter card
- Provide `robots.txt` and `sitemap.xml` (simple static versions are fine)
- Add a static OG image in `/public/og.png`

---

## 15) Deployment (Vercel)

- Production: deploy from `main`
- Preview: deploy from PRs
- Domain: <YOUR DOMAIN>
- Secrets: only in Vercel env vars + `.env.local` (never commit)

Optional analytics:

- Vercel Analytics (lightweight)

---

## 16) Suggested repo structure

- `src/app/` routes (App Router)
- `src/components/` feature components
- `src/components/ui/` shadcn components
- `src/content/` typed content modules
- `src/lib/` helpers (cn, formatters)
- `public/` images, `resume.pdf`, `og.png`, icons

---

## 17) Quality gates

A change is acceptable only if:

- UI matches cafe theme tokens and menu-first behavior
- Works on mobile + desktop
- Keyboard + focus works
- `pnpm lint` passes
- `pnpm build` passes

---

## 18) Open questions (don’t block implementation; assume sensible defaults)

- Resume: store as `/public/resume.pdf` and link it in header
- Light mode: not required for v1
- Blog: not required for v1
- Filters on menu: optional (add if project count is high)

END.
