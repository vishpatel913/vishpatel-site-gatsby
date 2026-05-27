# Migration Checklist

- **File-by-file TypeScript conversion.** Per-file `.js`/`.jsx` → `.ts`/`.tsx`. Do this at your own pace, one file per commit.

---

# TypeScript file conversion

Per-file `.js`/`.jsx` → `.ts`/`.tsx`.

## How to do each step

```bash
git mv src/path/file.js src/path/file.tsx   # .ts for non-JSX, .tsx for JSX

# add types — props get an inline interface; GraphQL data uses Queries.* (from
# Gatsby's generated types in src/gatsby-types.d.ts) where useful, else `any`.
# `any` liberally. strict mode is off.

yarn typecheck
yarn lint src/path/file.tsx
yarn dev          # eyeball the affected feature

git commit -am "ts: convert <file>"
```

If a file fights you, slap `any` on it and move on.

## Order (low-risk first)

### Block A — Utils & styles (no JSX, no React)
- [ ] `src/utils/index.js` → `.ts`
- [ ] `src/utils/config.js` → `.ts`
- [ ] `src/styles/theme.js` → `.ts`
- [ ] `src/styles/typography.js` — **leave as `.js`** (typography lib types are awful)

### Block B — Context & leaf components
- [ ] `src/context/darkMode.js` → `.tsx`
- [ ] `src/components/button.js` → `.tsx`
- [ ] `src/components/icon.js` → `.tsx`
- [ ] `src/components/link.js` → `.tsx`
- [ ] `src/components/container.js` → `.tsx`
- [ ] `src/components/rating.js` → `.tsx`
- [ ] `src/components/tabMenu.js` → `.tsx`
- [ ] `src/components/notFoundMessage.js` → `.tsx`

### Block C — Composed components
- [ ] `src/components/header.js` → `.tsx`
- [ ] `src/components/footer.js` → `.tsx`
- [ ] `src/components/darkModeToggle.js` → `.tsx`
- [ ] `src/components/siteHead.js` → `.tsx`
- [ ] `src/components/techItem.js` → `.tsx`
- [ ] `src/components/markdownRenderer.js` → `.tsx`
- [ ] `src/components/layout.js` → `.tsx`

### Block D — Image grid (uses GraphQL data)
- [ ] `src/components/imageGridItem.js` → `.tsx`
- [ ] `src/components/imageGrid.js` → `.tsx`

### Block E — Comments (kept commented-out, but typed for future re-enable)
- [ ] `src/components/comment.js` → `.tsx`
- [ ] `src/components/commentForm.js` → `.tsx`
- [ ] `src/components/commentList.js` → `.tsx`

### Block F — Templates
- [ ] `src/templates/category-grid.js` → `.tsx`
- [ ] `src/templates/image-post.js` → `.tsx`

### Block G — Pages
- [ ] `src/pages/404.js` → `.tsx`
- [ ] `src/pages/about.js` → `.tsx`
- [ ] `src/pages/resume.js` → `.tsx`
- [ ] `src/pages/tech-stack.js` → `.tsx`
- [ ] `src/pages/work.js` → `.tsx`
- [ ] `src/pages/index.js` → `.tsx`

### Block H — Gatsby root files
- [ ] `gatsby-browser.js` → `.tsx`
- [ ] `gatsby-ssr.js` → `.tsx`
- [ ] `gatsby-config.js` — **leave as `.js`** (less ceremony)
- [ ] `gatsby-node.js` — **leave as `.js`** (same)

### Block I — Index barrel
- [ ] `src/components/index.js` → `.ts`

### Excluded (do not convert)
- `src/components/breakoutGame/` — excluded via tsconfig
- `src/lambda/post-comment.js` — excluded via tsconfig

## When done

- [ ] All boxes ticked
- [ ] `yarn typecheck` passes
- [ ] `yarn lint` passes
- [ ] `yarn build:app` produces working output
- [ ] Delete this file
- [ ] Pick from [FUTURE.md](FUTURE.md) — strict-mode flags, styled-components v6, Head API, traced-SVG re-impl, dropping moment/typography, re-enabling comments, etc.
