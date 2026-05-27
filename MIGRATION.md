# Migration Checklist

Two phases:

- **Phase 1 — Smoke-test the upgrade.** One-time gate after pulling the upgraded branch on a fresh machine. Confirms the Gatsby 5 / React 18 / TypeScript-scaffolded codebase actually runs in your hands, not just in the upgrade session.
- **Phase 2 — File-by-file TypeScript conversion.** Per-file `.js`/`.jsx` → `.ts`/`.tsx`. Do this at your own pace, one file per commit.

Don't start Phase 2 until Phase 1 is clean.

---

# Phase 1 — Post-upgrade smoke test

Approx 15 min. The upgrade ran on one machine — these checks prove it survives a fresh pull on another. Some things were never verified during the upgrade itself (most importantly: actually loading pages in a browser).

## 1.1 Setup on the new machine

- [ ] `nvm use` — should switch to Node 20 via the committed `.nvmrc`. If you're on a different platform (Apple Silicon ↔ Intel ↔ Linux), `sharp`'s native build may need extra love.
- [ ] Copy `.env.development` across — it's gitignored, won't come with the pull. Template is in [.env.development.example](.env.development.example). Needs valid `CONTENTFUL_SPACE_ID` + `CONTENTFUL_ACCESS_TOKEN`.
- [ ] `yarn install` — watch for `sharp` install errors specifically; everything else is deprecation noise. If sharp fails, try `npm rebuild sharp` or look at the prebuilt-binary fallback.
- [ ] `yarn typecheck` — should be instant, clean.
- [ ] `yarn lint` — should be clean except 2 pre-existing warnings in the excluded `breakoutGame/`.

## 1.2 Dev server smoke test

- [ ] `yarn dev` — wait for `You can now view vishpatel-gatsby-site in the browser`. Expect ~5s for the bundle on a warm cache.
- [ ] Open browser console. Keep it open throughout. **No red errors** is the bar; warnings are fine.

### Pages — visit each and confirm it renders

- [ ] `/` — homepage, featured image grid.
- [ ] `/about` — profile photo + biography markdown. **This exercises `react-markdown` v9** (it was rewritten in 1.3 — verify the bio paragraphs actually render).
- [ ] `/work` — full image grid. **This is the masonry grid** — confirm it tiles, doesn't stack as a single column. `react-masonry-component` is running outside its declared peer-dep range; this is the most likely thing to break.
- [ ] `/work/design`, `/work/development`, `/work/photography` — same masonry layout, filtered.
- [ ] Click any image on the homepage or work pages → image detail page renders with photo, caption, date, category, tags.
- [ ] `/tech-stack` — tech logos in a grid with star ratings.
- [ ] `/resume` — long page, multiple sections.
- [ ] `/nonsense-url-here` — confirm the 404 page renders.

### Behaviour

- [ ] **Toggle dark mode** (top right). Colours should flip. The sun-moon SVG should animate. Images get a brightness/sepia filter in dark mode.
- [ ] **Image placeholders are blurred, not traced.** This is the intended change from the upgrade — confirms the `TRACED_SVG → BLURRED` swap landed. If images load instantly with no placeholder at all, something's off with `gatsby-plugin-image`.

## 1.3 Production build (optional but recommended)

Catches SSR issues that dev mode hides. Needs `.env.production` — easiest is to copy `.env.development` to `.env.production`.

- [ ] `yarn build:app` — should complete in 30–60s, no errors.
- [ ] `npx serve public` (or any static server) — visit `http://localhost:3000` and repeat the page smoke tests above.
- [ ] Check that styled-components produced no SSR mismatch warnings in the browser console. `gatsby-plugin-styled-components` v6 handles this — if it didn't, you'll see "did not match" errors.

## 1.4 If something breaks

| Symptom | Likely cause | Fix |
|---|---|---|
| `/work` shows images stacked in one column instead of tiled | `react-masonry-component` finally gave up under React 18 | [FUTURE.md → "Drop react-masonry-component"](FUTURE.md) — swap to `react-masonry-css`, ~10-line diff |
| About page biography text doesn't render or shows `[object Object]` | `react-markdown` v9 API mismatch | Check `src/components/markdownRenderer.js` — should be `children` + `components.a`, not `source` + `renderers.link` |
| Sun-moon toggle animation broken or sun-moon SVG missing | `gatsby-plugin-react-svg` regression on inline SVGs | Check the plugin config in `gatsby-config.js` matches `\.inline\.svg$` and the file is `src/assets/svgs/sun-moon.inline.svg` |
| Production build hydration mismatch warnings | styled-components SSR config | Make sure `gatsby-plugin-styled-components` is in `gatsby-config.js`. May need to bump `babel-plugin-styled-components` config. |
| `yarn install` fails on sharp | Native build couldn't find a prebuilt for your platform | `npm rebuild sharp` first; if that fails, the [sharp install docs](https://sharp.pixelplumbing.com/install) cover libvips compilation |
| Contentful queries fail with field errors | Schema changed since the v5 plugin generated types | Open GraphiQL at `http://localhost:8000/___graphql` and check the field names. Update the affected query. |

## 1.5 Phase 1 sign-off

- [ ] All pages render without console errors
- [ ] Dark mode works
- [ ] Masonry tiles correctly
- [ ] Production build (if you ran it) is clean
- [ ] Ready to start Phase 2

---

# Phase 2 — TypeScript file conversion

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
