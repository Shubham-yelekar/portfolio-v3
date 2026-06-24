# Portfolio — Step-by-Step Build Guide

> Follow top to bottom in a **fresh repo**. Each step has the exact command/file and a "✅ check" so you always know it worked. This builds **Phase 0** (the content pipeline — "drop a file → page") in full, then points to the timeline for Phases 1–2.
>
> Reference: [PORTFOLIO_BLUEPRINT.md](./PORTFOLIO_BLUEPRINT.md) · [EXECUTION_TIMELINE.md](./EXECUTION_TIMELINE.md)

---

## Step 0 — Prerequisites
```bash
node -v     # need 20+
```

## Step 1 — Scaffold the project
```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --eslint --no-src-dir --import-alias "@/*"
cd portfolio
npm run dev      # confirm it boots at http://localhost:3000, then Ctrl+C
git add -A && git commit -m "chore: scaffold next + tailwind"
```
**✅ check:** default Next page renders.

## Step 2 — Clean defaults & enable strict
1. In `tsconfig.json` confirm `"strict": true`.
2. Empty out `app/page.tsx` to a placeholder:
   ```tsx
   export default function Home() {
     return <main className="p-10">Portfolio</main>;
   }
   ```
3. Clear the boilerplate from `app/globals.css` (keep the `@import "tailwindcss";` line).

**✅ check:** `npm run dev` shows "Portfolio".

## Step 3 — Create the folder skeleton
```bash
mkdir -p content/blog content/projects content/lab
mkdir -p components/mdx components/motion components/lab components/three components/ui
mkdir -p lib docs
```

## Step 4 — Install dependencies
```bash
# content + mdx pipeline
npm i -D velite concurrently
npm i rehype-pretty-code shiki rehype-slug remark-gfm

# motion + transitions + theming
npm i motion next-view-transitions next-themes

# utils
npm i clsx tailwind-merge
```

## Step 5 — Velite config (the content source of truth)
Create `velite.config.ts` in the project root:
```ts
import { defineConfig, defineCollection, s } from "velite";

// shared base schema
const base = {
  title: s.string().max(120),
  summary: s.string().max(200),
  date: s.isodate(),
  status: s.enum(["draft", "live"]).default("draft"),
  tags: s.array(s.string()).default([]),
  cover: s.image().optional(),
  body: s.mdx(),
};

// derive slug from the folder name (content/blog/<slug>/index.mdx)
const withSlug = <T extends { path: string }>(data: T) => ({
  ...data,
  slug: data.path.split("/").slice(-2)[0] ?? data.path,
});

const blog = defineCollection({
  name: "Blog",
  pattern: "blog/**/*.mdx",
  schema: s.object({ ...base, path: s.path() }).transform(withSlug),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({ ...base, role: s.string().optional(), url: s.string().optional(), path: s.path() })
    .transform(withSlug),
});

const lab = defineCollection({
  name: "Lab",
  pattern: "lab/**/*.mdx",
  schema: s.object({ ...base, component: s.string().optional(), path: s.path() }).transform(withSlug),
});

export default defineConfig({
  root: "content",
  output: { data: ".velite", assets: "public/static", base: "/static/", clean: true },
  collections: { blog, projects, lab },
  mdx: {
    rehypePlugins: [],   // added in Phase 1 (shiki, slug)
    remarkPlugins: [],
  },
});
```

## Step 6 — Wire scripts, alias, gitignore
**`package.json`** scripts:
```json
"scripts": {
  "dev": "concurrently -k \"velite --watch\" \"next dev\"",
  "build": "velite && next build",
  "start": "next start",
  "lint": "next lint"
}
```
**`tsconfig.json`** → add to `compilerOptions.paths`:
```json
"paths": {
  "@/*": ["./*"],
  "#site/content": ["./.velite"]
}
```
**`.gitignore`** → add:
```
.velite
```

## Step 7 — First content + generate
Create `content/blog/hello-world/index.mdx`:
```mdx
---
title: "Hello World"
summary: "First post in the new pipeline."
date: "2026-01-01"
status: "live"
tags: ["meta"]
---

This is my first post. It validated, compiled, and rendered — with zero route edits.
```
Generate once:
```bash
npx velite
```
**✅ check:** a `.velite/` folder appears with `index.js` + types. Now try breaking it: change `date:` to `date: notadate` and run `npx velite` again → **it should error with the file + field.** Fix it back.

## Step 8 — MDX render component
Create `components/mdx/mdx-content.tsx`:
```tsx
import * as runtime from "react/jsx-runtime";
import type { MDXComponents } from "mdx/types";

function useMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

export function MDXContent({ code, components }: { code: string; components?: MDXComponents }) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
```
Create `lib/cn.ts`:
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...i: ClassValue[]) => twMerge(clsx(i));
```

## Step 9 — One generic content route
Create `app/(content)/[type]/[slug]/page.tsx`:
```tsx
import { blog, projects, lab } from "#site/content";
import { MDXContent } from "@/components/mdx/mdx-content";
import { notFound } from "next/navigation";

const collections = { notes: blog, projects, lab } as const;
type Type = keyof typeof collections;

export function generateStaticParams() {
  return (Object.keys(collections) as Type[]).flatMap((type) =>
    collections[type].map((e) => ({ type, slug: e.slug })),
  );
}

export default async function Page({ params }: { params: Promise<{ type: Type; slug: string }> }) {
  const { type, slug } = await params;          // Next 15/16: params is async
  const collection = collections[type];
  if (!collection) notFound();

  const entry = collection.find((e) => e.slug === slug);
  if (!entry) notFound();

  return (
    <article className="prose mx-auto max-w-2xl px-4 py-24">
      <h1>{entry.title}</h1>
      <p className="text-neutral-500">{entry.summary}</p>
      <MDXContent code={entry.body} />
    </article>
  );
}
```
**✅ check:** visit `http://localhost:3000/notes/hello-world` → your post renders. **This is the Phase 0 milestone.**

## Step 10 — One generic listing route
Create `app/(content)/[type]/page.tsx`:
```tsx
import { blog, projects, lab } from "#site/content";
import Link from "next/link";
import { notFound } from "next/navigation";

const collections = { notes: blog, projects, lab } as const;
type Type = keyof typeof collections;

export function generateStaticParams() {
  return (Object.keys(collections) as Type[]).map((type) => ({ type }));
}

export default async function ListPage({ params }: { params: Promise<{ type: Type }> }) {
  const { type } = await params;
  const collection = collections[type];
  if (!collection) notFound();

  const items = collection
    .filter((e) => e.status === "live")
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <main className="mx-auto max-w-2xl px-4 py-24">
      <h1 className="mb-8 text-xl capitalize">{type}</h1>
      <ul className="flex flex-col gap-4">
        {items.map((e) => (
          <li key={e.slug}>
            <Link href={`/${type}/${e.slug}`} className="hover:underline">{e.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
```
**✅ check:** `/notes` lists "Hello World".

## Step 11 — Motion + page transitions
Create `components/motion/fade.tsx`:
```tsx
"use client";
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 150, damping: 20 } },
};

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div variants={container} initial={reduce ? false : "hidden"} animate="show" className={className}>
      {children}
    </motion.div>
  );
}
export function Item({ children }: { children: ReactNode }) {
  return <motion.div variants={item}>{children}</motion.div>;
}
```
Wrap the app: in `app/layout.tsx`, import `ViewTransitions` from `next-view-transitions` and wrap `{children}` with `<ViewTransitions>…</ViewTransitions>`. Use the package's `Link` for in-app navigation so routes morph.

**✅ check:** navigating list → post animates smoothly; OS "reduce motion" disables it.

## Step 12 — Theme + layout shell
1. `components/providers.tsx` → `"use client"` wrapping `ThemeProvider` (`next-themes`, `attribute="class"`, `defaultTheme="system"`).
2. Add it inside `<ViewTransitions>` in `app/layout.tsx`, with a `<body className="...">` and `suppressHydrationWarning` on `<html>`.
3. Build a minimal `components/ui/navbar.tsx` + a theme toggle button.

**✅ check:** light/dark toggle works with no flash on reload.

---

## 🎉 Phase 0 complete
You can now **add a post by creating one `.mdx` file** — typed, validated, listed, animated. Commit:
```bash
git add -A && git commit -m "feat: content pipeline (velite + generic routes + motion)"
```

---

## Next: Phase 1 (follow the timeline)
From here, work through [EXECUTION_TIMELINE.md](./EXECUTION_TIMELINE.md):

- **Day 6 — MDX component set:** fill `mdx/` with typed `h1–p–a–ul–table` overrides + code blocks. Add Shiki to `velite.config.ts` `rehypePlugins`: `rehypePrettyCode` (dual light/dark) + `rehypeSlug`, and `remarkGfm` to `remarkPlugins`. Pass your component map into `<MDXContent components={…} />`.
- **Day 7 — Lab registry:** `components/lab/registry.ts` (`Name → { component, title, category }`); MDX map = `{ ...elements, ...fromRegistry }`; `/lab` index derives from it. **One line to publish a component.**
- **Day 8 — SEO:** `app/api/og/route.tsx` (dynamic OG), `next-sitemap`, metadata API, git-based dates.

## Then: Phase 2
- **3D hero** as a lazy island: `components/three/`, loaded via `dynamic(() => import(...), { ssr:false })` — Three.js only on the homepage bundle.
- **Shaders** via a raw-loader / Turbopack rule.
- **Polish:** shared-element transitions, Lighthouse ≥ 95, ship to Vercel (set `NEXT_PUBLIC_SITE_URL`).

---

## Quick reference — daily authoring loop (the goal)
```bash
# new blog post
mkdir -p content/blog/my-post && $EDITOR content/blog/my-post/index.mdx
# new lab component
$EDITOR components/lab/my-thing/MyThing.tsx
# + one line in components/lab/registry.ts
npm run dev   # velite --watch revalidates on save
```

## Gotchas
- **First run:** run `npx velite` once before the first `npm run dev` so `.velite` exists.
- **Turbopack:** Velite runs as a separate `--watch` process (via `concurrently`), *not* a webpack plugin — that's why the dev script has two commands.
- **`params` is async** in Next 15/16 — always `await params` (the routes above already do).
- **Restart dev** if you add a new collection to `velite.config.ts`.