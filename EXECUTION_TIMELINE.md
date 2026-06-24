# Portfolio — Execution Timeline (Build From Scratch)

> Companion to [PORTFOLIO_BLUEPRINT.md](./PORTFOLIO_BLUEPRINT.md). This is the **what / how / when** for a **fresh greenfield build** — new repo, clean architecture from line one. The old `portfolio-v3` and `sylph` repos are kept **only as reference** to copy proven pieces from (3D hero, content, component ideas).

---

## Assumptions & Pace

- **Approach:** **New repo, from scratch.** No migration of code — port content and re-implement components intentionally against the new architecture.
- **Reference repos (read-only):** `portfolio-v3` (3D hero, lab components, content) and `sylph` (MDX pipeline, OG, transitions). Copy *ideas and assets*, not the old plumbing.
- **Pace:** ~2–3 hrs/weekday evening + weekend blocks → **~10 hrs/week**.
- **Calendar estimate:** **~4 weeks** to v1 (Phases 0–2). A scratch build is ~1 week more than evolving, bought back as zero legacy debt.
- **Golden rule:** every task ends **green** (builds & runs). Commit per task. Trunk-based on a fresh repo; tag milestones.

### Prerequisites (do once, 30 min)
```bash
# new folder, NOT inside the old repos
npx create-next-app@latest portfolio --typescript --tailwind --app --eslint --src-dir=false
cd portfolio
git init && git add -A && git commit -m "chore: scaffold"
npm run dev   # confirm baseline boots
```
Decisions locked from the Blueprint: **Next App Router · SSG · TypeScript strict · Tailwind v4 · Velite · git-based dates · island-isolated 3D.**

---

## Timeline at a Glance

| Week | Phase | Theme | Outcome |
|---|---|---|---|
| **Week 1** | Phase 0 | Scaffold + content pipeline | Drop an `.mdx` → styled, validated, animated page |
| **Week 2** | Phase 1 | MDX set, lab registry, SEO | One-line publish for components; full SEO automation |
| **Week 3** | Phase 1.5 | Content & component port | All blogs/projects/lab re-created in the new system |
| **Week 4** | Phase 2 | 3D / shaders / polish | Homepage shows craft; ship v1 |

### Critical path
`scaffold → Velite → generic route → MDX set → lab registry → port content → SEO → 3D island → ship`
3D (Phase 2) depends on nothing in the content layer (by design) and can slip without blocking v1.

---

# PHASE 0 — Scaffold & Foundation (Week 1)

**Goal:** Publishing = adding a file. Exit when an `.mdx` dropped in `content/` renders as a styled, animated, validated page with no route/loader edits.

### Day 1 — Project setup & tooling
**What:** A clean, opinionated base.
**How:**
1. `create-next-app` (above). Set `tsconfig` to `strict`.
2. Tailwind v4 with **native OKLCH design tokens** (color scales, type scale, spacing) in `globals.css` — no color-library dependency. (Optionally seed scales from Radix Colors *values*, copied as tokens, but don't add the package.)
3. Tooling: Prettier (+ tailwind plugin), ESLint or Biome. Add `paths` alias `@/*`.
4. Folder skeleton from Blueprint §12 (`content/`, `components/{mdx,motion,lab,three,ui}`, `lib/`, `app/`).
**When:** Day 1 (~2–3 hrs).
**Done when:** `npm run build` clean; tokens + fonts render; lint/format pass.

### Day 2 — Velite content layer
**What:** Typed, validated, build-time content.
**How:**
```bash
npm i -D velite
```
1. `velite.config.ts` with `blog`, `projects`, `lab` collections + base schema (Blueprint §6).
2. `#site/content` alias in `tsconfig`; `.velite/` in `.gitignore`.
3. Turbopack-safe scripts: `"dev": "velite --watch & next dev"`, `"build": "velite && next build"` (use `concurrently` on Windows).
4. Add 1 sample `.mdx` per collection; run `npx velite`.
**When:** Day 2 (~3 hrs).
**Done when:** Typed collections generate; a broken frontmatter field **fails with file + field name**.

### Day 3 — Generic content + listing routes
**What:** One route handles every collection (no duplication, ever).
**How:**
1. `app/(content)/[type]/[slug]/page.tsx` — `generateStaticParams` across collections; look up by `(type, slug)`; render `entry.body`.
2. `app/(content)/[type]/page.tsx` — listing with tag filter (client island).
3. `<ContentLayout type meta>` for per-type headers (projects: tags; blog: date; lab: minimal).
**When:** Day 3 (~3 hrs).
**Done when:** All three sample pages + listings render through the single route pair.

### Day 4 — Motion & transitions
**What:** The "smooth" baseline.
**How:**
1. `npm i motion next-view-transitions`; wrap app in `<ViewTransitions>`.
2. `components/motion/FadeIn.tsx` (`Container`/`Item` variants: opacity + blur + y, spring).
3. Global `useReducedMotion` gate.
4. `view-transition-name` on shared elements (cover, title) for list→detail morphs.
**When:** Day 4 (~2–3 hrs).
**Done when:** List→detail morphs smoothly; reduced-motion users get a calm experience.

### Day 5 — Layout shell & buffer
**What:** App chrome.
**How:** `npm i @base-ui-components/react` for chrome primitives (menu/dialog/tooltip). Build navbar, footer, theme toggle (`next-themes`, no-flash) and a Base-UI-powered theme/command menu; container/primitive `ui/` components. **Lab components are NOT built here — they're hand-rolled in Phase 1.5.** Buffer for slippage.
**When:** Day 5 (~2 hrs).
**✅ Phase 0 exit demo:** add `content/blog/hello-world/index.mdx` → a styled, animated, validated page exists with zero other edits.

---

# PHASE 1 — MDX, Lab & SEO (Week 2)

**Goal:** Adding a lab component is one registry line; full SEO/OG automation.

### Day 6 — MDX component set
**What:** Rich authoring primitives.
**How:**
1. `components/mdx/` typed element overrides (`h1–h6`, `p`, `a`, lists, `blockquote`, `table`).
2. Code blocks: `rehype-pretty-code` + Shiki (dual light/dark) + copy button.
3. Embeds: callout, image, image-compare, video, YouTube.
**When:** Day 6 (~3 hrs).
**Done when:** A post using every component renders correctly in light & dark.

### Day 7 — Lab registry
**What:** One-line-to-publish-a-component.
**How:**
1. `components/lab/registry.ts` → `Name → { component, title, category }`.
2. MDX map = `{ ...markdownElements, ...fromRegistry }`.
3. `/lab` index derives from the registry.
**When:** Day 7 (~3 hrs).
**Done when:** Adding a dummy registry line surfaces it in `/lab` + makes it usable in MDX — no other edits.

### Day 8 — SEO & automation
**What:** Set-and-forget metadata.
**How:**
1. Dynamic OG via `app/api/og/route.tsx` (`next/og`), per page (fonts fetched from origin, **not** `/public`).
2. `next-sitemap` postbuild, robots, metadata API, `metadataBase` from env with fallback.
3. **Git-based dates** build step (first/last commit per file; no source mutation).
**When:** Day 8 (~3 hrs).
**Done when:** Unique OG per page; sitemap/robots generated; dates correct without manual upkeep.

### Day 9–10 — Buffer & hardening
**What:** Catch up + accessibility/perf baseline.
**How:** Keyboard nav, focus states, semantic landmarks, first Lighthouse run. Fix anything < 90.
**When:** Days 9–10 (~4 hrs).
**✅ Phase 1 exit:** the system is fully functional and empty-but-correct, ready to be filled with real content.

---

# PHASE 1.5 — Content & Component Port (Week 3)

**Goal:** All real content re-created in the new system. (This is the bulk of a scratch build — re-authoring, not migrating code.)

### Day 11–12 — Re-create lab components
**What:** Rebuild the interactive components against the new architecture.
**How:** Port accordion, tabs, toasts, keyboard, buttons, etc. from `portfolio-v3` — **hand-built, no headless component library** (this is the design-engineering showcase). Clean them up, type them, add full keyboard support + motion, register each in `lab/registry.ts`, document each in an `.mdx`.
**When:** Days 11–12 (~5 hrs).
**Done when:** Each lab component has a live demo + MDX doc, one registry line each.

### Day 13–14 — Port written content
**What:** Move blogs, notes, projects into the new pipeline.
**How:** Re-author frontmatter to the schema; fix Velite validation errors; move/optimize assets (images, videos); verify each page light/dark/mobile.
**When:** Days 13–14 (~5 hrs).
**✅ Phase 1.5 exit:** every piece of existing content lives in the new system; nothing references the old repos.

---

# PHASE 2 — Design-Engineering Flourish (Week 4)

**Goal:** Homepage demonstrates 3D/motion craft with **no perf regression** on content pages.

### Day 15–16 — 3D hero as an isolated island
**What:** Rebuild the WebGL hero, cleanly.
**How:**
1. `npm i three @react-three/fiber @react-three/drei`.
2. `components/three/Hero.tsx` (`"use client"`), loaded via `dynamic(() => import(...), { ssr:false })`.
3. Port the model/textures from `portfolio-v3`; fix the old issues (double video preload, `any` types, eager texture loads).
4. Verify Three.js ships **only** on the homepage bundle (`next build` output).
**When:** Days 15–16 (~5 hrs).
**Done when:** Homepage 3D works; a blog page's JS payload is unaffected.

### Day 17 — Shaders + transition polish
**What:** Custom visual flair + signature feel.
**How:** Add a GLSL shader (raw-loader/turbopack rule); refine `view-transition-name` morphs (cover → hero, title → heading); tune easing/timing.
**When:** Day 17 (~3 hrs).
**Done when:** Navigation feels continuous; shader runs smoothly.

### Day 18 — Final polish & ship
**What:** Production readiness.
**How:** Lighthouse pass (fix < 95), dark-mode parity, focus/keyboard review, type-scale polish. Push to GitHub, deploy to Vercel, set `NEXT_PUBLIC_SITE_URL`.
**When:** Day 18 (~3 hrs).
**✅ v1 shipped.**

---

## Weekly Checkpoints
- **End Week 1:** "Drop a file → page exists." (Phase 0 exit demo)
- **End Week 2:** "System complete & accessible; lab = one-line publish." (Phase 1 exit)
- **End Week 3:** "All my real content is live in the new site." (Phase 1.5 exit)
- **End Week 4:** "Homepage dazzles; content pages ≥95 Lighthouse." (v1 ship)

---

## Dependency Map

```
Day1 scaffold ─► Day2 Velite ─► Day3 routes ─► Day6 MDX set ─► Day7 lab registry ─► Day11-12 components ─┐
                                   │                                                                      │
Day4 motion ───────────────────────┤                              Day13-14 content ─────────────────────┤─► Day18 ship
                                   └─► Day5 shell      Day8 SEO/OG ─────────────────────────────────────┘
Day15-16 3D island ──(independent, parallel-safe)──► Day17 shaders/transitions ─► Day18 ship
```

---

## Risk Buffers
- Buffers built into Days 5 and 9–10.
- If a week slips, **ship Phases 0–1.5 without Phase 2** — the content system is the value; 3D is decoupled flourish.
- Velite + Turbopack is the only integration risk; front-loaded to Day 2 so it surfaces before real content goes in.
- Keep the old repos untouched until v1 ships — they're your fallback reference.

---

## Why from-scratch (and the trade-off)
- **Pro:** zero legacy debt — every line is built against the right architecture; no half-migrated states.
- **Con:** ~1 extra week vs evolving, because lab components and the 3D hero are **re-implemented**, not moved.
- **Mitigation:** the old repos are read-only reference — copy assets (models, textures, MDX prose) freely; just don't carry the old plumbing.

---

## Definition of Done (per the Blueprint)
- [ ] Publish a blog/lab component by **adding files only**.
- [ ] Bad frontmatter **fails the build** with a clear message.
- [ ] Every page **static**, **≥95 Lighthouse**, **reduced-motion aware**.
- [ ] **Smooth view transitions** between pages.
- [ ] **Lab** showcases interactive components documented in MDX.
- [ ] 3D can be extended later **without touching the content pipeline**.
