# Portfolio — Project Blueprint

> **One-line vision:** A robust, content-driven portfolio where I only ever touch Markdown — drop a `.mdx` file or a component, and the site builds, validates, animates, and ships itself. The site is itself a demonstration of design-engineering craft.

---

## 1. North Star

I want to **focus exclusively on producing content** — blog posts, notes, and interactive "lab" components — without re-touching plumbing, layouts, routing, or build config. Adding content is a one-step action. Everything else (typing, validation, transitions, SEO, OG images, dates) is automatic.

Secondary, but equally important: **the portfolio is the proof.** It must *look and feel* like it was built by a design engineer — fluid transitions, tasteful motion, an interactive lab, and (later) 3D/shader work — without sacrificing performance or accessibility.

### Success in one sentence
> "I wrote a post / built a component, committed it, and a polished page existed — I never edited a route, a loader, or a config."

---

## 2. Goals & Non-Goals

### Goals
- **Content-only workflow.** Publishing = add a file. No route edits, no manual registration where avoidable.
- **Typed, validated content.** A typo in frontmatter fails the build with a clear message — never silently ships broken.
- **Showcase design engineering.** Smooth page transitions, purposeful motion, an interactive component lab, room for 3D/shaders.
- **Static & fast.** Statically rendered (SSG); excellent Core Web Vitals; heavy/interactive bits isolated so they never slow content pages.
- **Robust & low-maintenance.** Reproducible builds, no source mutation, no fragile string-surgery, minimal moving parts.
- **Accessible by default.** Keyboard-navigable, `prefers-reduced-motion` respected, semantic HTML, good contrast.

### Non-Goals (for v1)
- No CMS / database / admin UI. Content is files in git.
- No comments, auth, or user accounts.
- No SSR/per-request rendering for content (OG image route is the only dynamic endpoint).
- No i18n (can be added later).

---

## 3. Core Principle — "Content as the only interface"

Everything is derived from one source of truth: the `content/` directory and a small registry for interactive components. Three things must be true:

1. **Adding a blog/note/project** = create one `.mdx` file. Typed, validated, auto-dated, auto-OG, auto-listed.
2. **Adding a lab component** = build the component + add one registry line. It auto-appears in the lab, the MDX component map, and is documentable in MDX.
3. **Adding a content *type*** = one config entry (rare).

If any content task requires editing a route file or a loader, the architecture has failed and must be corrected.

---

## 4. Architecture Overview

### Rendering model: **Static Site Generation (SSG)**
- All content pages are prerendered to static HTML at build time (`generateStaticParams`).
- No runtime data fetching, no `force-dynamic`, no `revalidate` for content.
- **Interactive islands** (theme toggle, table-of-contents, lab demos, 3D) hydrate on top of static HTML.
- The **only** dynamic endpoint is `/api/og` (edge) for social-card images.

```
┌─────────────────────────────────────────────────────────┐
│  BUILD TIME                                              │
│  content/**/*.mdx ──► Velite ──► typed, validated,      │
│                                  pre-compiled content    │
│                          │                               │
│                          ▼                               │
│  Next.js SSG ──► static HTML for every page             │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│  RUNTIME (client)                                       │
│  static HTML  +  hydrated islands:                      │
│    • View Transitions (page morphs)                     │
│    • Motion (entrance/stagger, reduced-motion aware)    │
│    • Lab component demos                                 │
│    • 3D / shader hero (lazy, ssr:false)  ← added later  │
└─────────────────────────────────────────────────────────┘
```

### The four layers
1. **Content layer** — Velite: build-time, typed, schema-validated MDX → importable data.
2. **Rendering layer** — One generic route per content collection; shared layout components.
3. **Motion layer** — View Transitions for pages + a small Motion primitive set for entrances.
4. **Island layer** — Isolated client components (lab demos, 3D) lazy-loaded so they never bloat content pages.

---

## 5. Tech Stack & Rationale

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router), SSG** | Static = fast, cheap, SEO-friendly; great MDX story |
| Language | **TypeScript (strict)** | Type safety end-to-end |
| Content | **Velite** | Build-time, typed, **validated** frontmatter; pre-compiles MDX (no per-request compile); the single biggest upgrade over a hand-rolled loader |
| Validation | **Zod-style schema (via Velite)** | Typos fail the build, not production |
| Styling | **Tailwind CSS v4** (native OKLCH tokens) | Fast iteration, accessible scales, theming — **no color-library dependency**; designing the palette is itself a design-engineering signal |
| Headless primitives (chrome only) | **Base UI** (`@base-ui-components/react`) | Modern successor to Radix Primitives (same lineage, actively maintained) for app chrome — dialog, menu, tooltip, command palette. **Not used in the Lab.** |
| Lab components | **Hand-built from scratch** | The Lab's purpose is to *prove* I can build accessible, animated primitives myself — using a component library here would undercut the showcase |
| Page transitions | **View Transitions API** (`next-view-transitions`) | Smooth shared-element morphs between routes |
| Animation | **Motion** (Framer) | Stagger/entrance, springs, `prefers-reduced-motion` |
| Code highlighting | **rehype-pretty-code + Shiki** | Dual light/dark themes, accurate tokenization |
| 3D (later) | **react-three-fiber + drei** | Component-based Three.js; isolated as islands |
| Shaders (later) | **GLSL via raw-loader / turbopack rule** | Custom visual effects |
| SEO | **Dynamic OG (`next/og`), `next-sitemap`, metadata API** | Auto social cards, sitemap, robots |
| Tooling | **Biome or ESLint + Prettier** | Consistent formatting/linting |
| Hosting | **Vercel** | Zero-config SSG + edge OG |

---

## 6. Content Model

### Collections
| Collection | Purpose | Route |
|---|---|---|
| `blog` (notes) | Long-form writing, articles | `/notes/[slug]` |
| `projects` | Case studies / work | `/projects/[slug]` |
| `lab` | Interactive UI experiments & components | `/lab/[slug]` |

### Single source of truth — `velite.config.ts`
```ts
const base = s.object({
  title:   s.string(),
  date:    s.isodate(),                 // validated, not a raw string
  summary: s.string().max(200),
  status:  s.enum(["draft", "live"]).default("draft"),
  tags:    s.array(s.string()).default([]),
  cover:   s.image().optional(),        // dimensions extracted + optimized
  body:    s.mdx(),                     // compiled at BUILD time
})

export default defineConfig({
  collections: {
    blog:     { pattern: "blog/**/*.mdx",     schema: base },
    projects: { pattern: "projects/**/*.mdx", schema: base.extend({ role: s.string().optional(), url: s.string().optional() }) },
    lab:      { pattern: "lab/**/*.mdx",       schema: base.extend({ component: s.string().optional() }) },
  },
})
```

### Frontmatter contract (what I write)
```yaml
---
title: "Building an Accessible Accordion"
summary: "A compound-component accordion with keyboard support."
tags: ["react", "a11y", "components"]
status: "live"            # draft | live  — drafts excluded from prod listings
cover: "./cover.png"      # optional, optimized automatically
# date is auto-managed (see §8); no manual upkeep
---
```

> **Validation guarantee:** any missing/misspelled/mistyped field stops the build with the file path and the exact problem. Broken content can never reach production.

---

## 7. Authoring Workflows (the whole point)

### ✍️ Add a blog post / note
1. `content/blog/my-post/index.mdx`
2. Write frontmatter + MDX.
3. Commit. **Done.** — typed, validated, dated, listed, OG image generated, transitions applied.

### 🧪 Add a lab component
1. Build it in `components/lab/<name>/`.
2. Add **one line** to `components/lab/registry.ts`:
   ```ts
   Accordion: { component: Accordion, title: "Accordion", category: "disclosure" },
   ```
3. Reference `<Accordion />` in an `.mdx` doc and/or let it auto-list in `/lab`.
4. Commit. **Done.** — the registry feeds the lab index, the MDX component map, and type-safety simultaneously.

### 🗂️ Add a new content type (rare)
1. One entry in `velite.config.ts` + (optionally) one layout variant.

---

## 8. Automation (so I never maintain plumbing)
- **Dates:** derived from **git history** at build (first commit = created, last commit = updated). *No source mutation, no manual dates, correct in CI.* (Explicitly avoiding the "write back into MDX during build" anti-pattern.)
- **Reading time:** computed at render from content.
- **OG images:** generated per page from title/summary via `next/og`.
- **Sitemap & robots:** generated on build.
- **Listings, tags, related posts:** derived from the typed content set.
- **Drafts:** `status: draft` auto-excluded from production listings, viewable in dev.

---

## 9. Design-Engineering Showcase (how the site proves the skill)

The portfolio must *demonstrate*, not just *claim*, design-engineering ability:

- **Page transitions** — View Transitions morphing shared elements (cover image → hero, title → heading) between list and detail. This is the signature "feel."
- **Purposeful motion** — entrance stagger (opacity + blur + slight `y`, spring easing), micro-interactions on hover/press, never gratuitous. All gated by `prefers-reduced-motion`.
- **The Lab** — a living gallery of interactive components (accordion, tabs, toasts, keyboard, etc.), each **hand-built from scratch** (no headless component library) with a real demo + documented build, full keyboard support, and motion. This is the strongest proof of craft — the value is in *building* the primitive, not styling someone else's. (App chrome like the theme menu/command palette uses **Base UI** — that's plumbing, not showcase.)
- **3D / shader hero (phase 2)** — an interactive WebGL centerpiece, lazy-loaded as an island so it dazzles without hurting content performance.
- **Typography & restraint** — strong type scale, generous spacing, light/dark parity — the discipline that separates design engineers from "devs who add animations."

---

## 10. Motion & Transition System

- **Global:** wrap app in `<ViewTransitions>`; assign `view-transition-name` to shared elements for cross-route morphs.
- **Primitive:** one `<FadeIn.Container>` / `<FadeIn.Item>` (Motion variants) for staggered entrances; reused everywhere.
- **Accessibility:** a single `useReducedMotion` gate disables/loosens motion globally.
- **Performance:** animate only `transform`/`opacity`/`filter`; no layout-thrashing properties.

---

## 11. 3D / Shader Strategy (future, non-disruptive)

The single most important architectural rule for longevity:

> **3D and shaders live in isolated client islands — never in the content pipeline.**

- `components/three/*` are `"use client"` and loaded via `dynamic(() => import(...), { ssr: false })`.
- Three.js (~500KB) is **never** bundled into content pages — only the route(s) that use it.
- Shaders load through a `raw-loader` / Turbopack rule as raw strings.
- Because content and 3D are decoupled, the WebGL hero can be added in phase 2 **without touching the content layer.**

---

## 12. Directory Structure

```
content/                      # ← the ONLY thing I edit day-to-day
  blog/<slug>/index.mdx
  projects/<slug>/index.mdx
  lab/<slug>/index.mdx
components/
  mdx/                        # element overrides, Shiki, embeds
  motion/                     # FadeIn, transitions, reduced-motion gate
  lab/                        # interactive components + registry.ts
  three/                      # 3D islands (phase 2, lazy)
  ui/                         # buttons, container, primitives
lib/
  cn.ts  formatter.ts  og.ts  content.ts   # typed access helpers
app/
  (content)/[type]/[slug]/page.tsx         # ONE generic content route
  (content)/[type]/page.tsx                # ONE generic listing route
  api/og/route.tsx                         # dynamic OG (edge)
  layout.tsx  page.tsx  icon.tsx
velite.config.ts                           # content source of truth
```

---

## 13. Requirements

### Functional
- [ ] Three content collections: `blog`, `projects`, `lab`.
- [ ] One generic dynamic route renders any collection's detail page.
- [ ] One generic listing route per collection with tag filtering.
- [ ] MDX supports custom components (callouts, image compare, embeds) + interactive lab components.
- [ ] Code blocks: syntax-highlighted, dual light/dark, copy button.
- [ ] Light/dark/system theme toggle with no flash.
- [ ] Per-page dynamic OG images.
- [ ] Sitemap, robots, full metadata, RSS (nice-to-have).
- [ ] Draft support (excluded from prod listings).
- [ ] Lab registry drives both the lab index and the MDX component map.

### Non-Functional
- **Performance:** Lighthouse ≥ 95 (Perf/SEO/Best Practices/A11y) on content pages. LCP < 2.0s, CLS < 0.05, INP < 200ms.
- **Bundle:** content pages ship minimal JS; Three.js only on routes that use it.
- **Accessibility:** WCAG AA contrast, full keyboard nav, focus states, reduced-motion support, semantic landmarks.
- **Build:** reproducible, no source mutation, fast (< ~60s), fails loudly on bad content.
- **Maintainability:** zero duplicated route logic; adding content never touches infra.
- **SEO:** static HTML, canonical URLs, structured metadata, sitemap.

---

## 14. Performance Budget

| Metric | Target |
|---|---|
| LCP (content pages) | < 2.0s |
| CLS | < 0.05 |
| INP | < 200ms |
| JS on a blog page (no 3D) | < ~120KB gzipped |
| Lighthouse (all categories) | ≥ 95 |
| 3D route extra payload | Lazy; never on content pages |

---

## 15. Roadmap

### Phase 0 — Foundation (week 1)
- Scaffold Next + TS strict + Tailwind v4 + theming.
- Stand up **Velite** with schemas; validate a sample of each collection.
- One generic content route + one generic listing route.
- Motion primitives + View Transitions wired.
- **Exit criteria:** dropping an `.mdx` file produces a styled, animated, validated page with zero other edits.

### Phase 1 — Content & Lab (week 2)
- MDX component set (callouts, images, embeds, code blocks w/ copy).
- **Lab registry** pattern; migrate/author interactive components.
- Dynamic OG, sitemap, robots, metadata, git-based dates.
- Migrate existing content (blogs, projects, lab) into the new pipeline.
- **Exit criteria:** all existing content lives in the new system; adding a lab component is a one-line registry change.

### Phase 2 — Design-engineering flourish (week 3+)
- WebGL/shader hero as a lazy client island.
- Refine shared-element transitions (cover → hero morphs).
- Polish micro-interactions, dark-mode parity, type scale.
- **Exit criteria:** the homepage demonstrates 3D/motion craft with no Lighthouse regression on content pages.

---

## 16. Definition of Done (v1)
- I can publish a blog post or lab component **by adding files only.**
- Bad frontmatter **fails the build** with a clear message.
- Every page is **static**, scores **≥ 95 Lighthouse**, and respects **reduced motion**.
- Page navigation uses **smooth view transitions**.
- The **lab** showcases interactive components, each documented in MDX.
- 3D can be added later **without touching the content pipeline.**

---

## 17. Risks & Mitigations
| Risk | Mitigation |
|---|---|
| Velite + Turbopack integration friction | Run `velite` as a parallel watch/build step (not the webpack plugin) |
| 3D bloating content pages | Strict island isolation: `dynamic(..., { ssr:false })`, route-scoped |
| Motion hurting a11y/perf | Global `prefers-reduced-motion` gate; transform/opacity only |
| Frontmatter drift over time | Schema-validated build; CI fails on violation |
| Over-engineering / scope creep | Phase gates; v1 non-goals are explicit |

---

## 18. Future Extensions (post-v1)
- RSS feed + email digest.
- Full-text search (static index).
- View counters / likes (edge KV) — optional, breaks pure-static if added.
- MDX "playground" with live-editable code in the lab.
- Component registry published as an installable package (shadcn-style).

---

### TL;DR
A **statically rendered**, **Velite-powered**, **type-safe** portfolio where **publishing = adding a file**. Smooth **view transitions** and **tasteful motion** make it feel hand-crafted; an **interactive lab** and a future **3D/shader hero** prove design-engineering skill — all kept in **isolated islands** so the content stays blazing fast. I focus on content; the system handles everything else.
