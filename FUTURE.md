# Future Work / Backlog

Things deliberately descoped from the Gatsby 5 / TypeScript upgrade. Pick off in whatever order suits — most are independent. Each item lists the goal, motivation, and rough approach so a future you (or future Claude) doesn't have to rediscover the context.

---

## After-Phase-2 TypeScript

### Flip strict-mode flags one at a time
**Goal:** turn on the strict-mode dials in `tsconfig.json` that are currently commented out.
**Why:** caught at compile-time, not at 2am.
**Approach:** uncomment one flag in `tsconfig.json`, run `yarn typecheck`, fix the errors, commit. Recommended order: `noImplicitAny` → `strictNullChecks` → `strictFunctionTypes` → `strict: true` (which subsumes the rest) → `noUnusedLocals` / `noUnusedParameters`. Expect `strictNullChecks` to be the heaviest — most of the GraphQL data is potentially null in the generated types.

### Re-introduce a real test suite
**Goal:** there are currently zero tests. The Jest plumbing is still in place (jest 26.x, jest-styled-components, react-test-renderer). Add some.
**Why:** the migration moved a lot of code with no safety net beyond eyeballing the dev server. Component snapshots + a couple of GraphQL query smoke tests would catch regressions cheaply.
**Approach:** bump Jest 26 → 29, add `jest-environment-jsdom@29`, write tests for the leaf components first (`Button`, `Icon`, `Link`, `Rating`). React Testing Library is the modern default — `@testing-library/react@^16` for React 18.

---

## Image pipeline

### Re-implement traced-SVG placeholder
**Goal:** restore the dark-mode-aware traced SVG that Gatsby 3 generated. Currently using `BLURRED` everywhere, which is fine but blander.
**Why:** the original `getImageWithTracedSVG` util in [src/utils/index.js](src/utils/index.js) (now removed) rewrote the placeholder SVG colour at render time to match the dark/light theme. `gatsby-plugin-image` v2+ removed `TRACED_SVG` entirely.
**Approach:** two routes —
1. Community plugin: [`gatsby-transformer-traced-svg`](https://www.npmjs.com/package/gatsby-transformer-traced-svg) (verify it still installs cleanly against Gatsby 5 — last I looked it was lightly maintained).
2. Custom build-time pipeline: pre-process Contentful assets with `sharp` + `potrace`, emit a data-URI SVG per image, store on the node, query alongside `gatsbyImageData`. ~½ day of work.

Either way, restore the colour-rewrite step (was 5 lines in the old util) so dark mode still gets the right tint.

### Drop `moment`
**Goal:** moment.js is in maintenance mode — slow, large, with timezone bugs.
**Why:** currently only used via Contentful's `formatString` arg on `dateCreated` fields. The arg is processed inside `gatsby-source-contentful` (which still pulls moment as a transitive dep) — so dropping it from our direct deps may not actually shrink the bundle until they switch.
**Approach:** lowest-effort win is to query `dateCreated` raw (ISO string) and format client-side with `Intl.DateTimeFormat` (zero-dep) or `date-fns` (tree-shakeable). Touches the date display in: `templates/category-grid.js`, `templates/image-post.js`, `pages/resume.js`. Remove `moment` from `package.json`.

---

## Component / library upgrades

### styled-components v6 migration
**Goal:** bump styled-components 5.3 → 6.x.
**Why:** v6 has better TS types, stricter prop handling, less runtime overhead.
**Approach:** the blocker is **transient props**. v6 forbids unknown DOM props more aggressively. Codebase currently passes `dark`, `hoverText`, `x`, `y`, `size`, `white`, `edge`, `content` as props on styled components — these need prefixing with `$`:

```jsx
// old (v5)
const Box = styled.div`background: ${({ dark }) => dark ? "black" : "white"};`;
<Box dark />

// new (v6)
const Box = styled.div`background: ${({ $dark }) => $dark ? "black" : "white"};`;
<Box $dark />
```

Files affected (~10): `darkModeToggle.js`, `imageGridItem.js`, `container.js`, `header.js`, `layout.js`, and a few others — grep for `styled.` files with non-DOM props. Mechanical refactor, ~1–2 hrs once you start.

### Drop `react-masonry-component`
**Goal:** swap to something maintained that officially supports React 18+.
**Why:** `react-masonry-component@6.3.0` declared peer `react@<=17` — install succeeded but it's running outside its supported range. Uses `findDOMNode` and unsafe lifecycles internally. Will eventually break.
**Approach:** verify the grid still works in the browser at `localhost:8000/work/photography` (or any category route). If it does, low priority. When it breaks, options:
1. **`react-masonry-css`** — tiny, CSS-driven, actively maintained. ~10-line diff in `imageGrid.js`.
2. **CSS columns** — even simpler, no JS library, but doesn't pack items as tightly:
   ```css
   columns: 3;
   column-gap: 1rem;
   & > * { break-inside: avoid; }
   ```
3. **`masonic`** — virtualised, faster for big lists, more setup.

Recommend `react-masonry-css` for parity, CSS columns for minimum deps.

### Drop `typography` / `react-typography`
**Goal:** remove `gatsby-plugin-typography` + `typography` + `react-typography` from deps.
**Why:** `typography.js` last published 2021. `react-typography` is just a SSR wrapper. They generate ~30 lines of CSS that could trivially live in a stylesheet.
**Approach:**
1. Run the dev server, copy the injected `<style>` block from the document head.
2. Paste it into a new `src/styles/global.css` (or styled-components global).
3. Use `gatsby-plugin-google-fonts-v2` (or just a `<link>` in `gatsby-ssr.js`) for the Raleway/Open Sans imports.
4. Remove all three deps + the plugin config from `gatsby-config.js`.

~30 min, frees the project from three unmaintained packages.

---

## Gatsby

### Migrate to Gatsby Head API
**Goal:** replace `react-helmet` + `gatsby-plugin-react-helmet` with Gatsby's native `<Head>` export.
**Why:** Gatsby logs `gatsby-plugin-react-helmet: Gatsby now has built-in support for modifying the document head` on every dev boot. Head API is SSR-safer and ships with Gatsby.
**Approach:** the trick is that `SiteHead` is currently called from `Layout`, not directly per-page. Head API requires the Head component to be exported from each page/template file. Three changes:
1. Convert `SiteHead` to render its content using plain JSX (no `react-helmet`).
2. Export `Head` from each page / template that needs it: `pages/index.js`, `pages/about.js`, `pages/resume.js`, `pages/tech-stack.js`, `pages/work.js`, `pages/404.js`, `templates/category-grid.js`, `templates/image-post.js`.
3. Remove `react-helmet`, `gatsby-plugin-react-helmet`, `@types/react-helmet` from `package.json` and `gatsby-config.js`.

Touches 8 page/template files but each change is small. ~1 hr.

### Move to flat-config ESLint 9
**Goal:** ESLint 9's `eslint.config.js` flat config.
**Why:** ESLint 8 is in maintenance mode. Airbnb config is also showing its age — many of its rules duplicate or contradict modern @typescript-eslint defaults.
**Approach:** bigger than it sounds because `eslint-config-airbnb-typescript@18` and friends haven't fully migrated to flat config yet. Alternatives:
1. Wait for the ecosystem to catch up (Q2 2026-ish).
2. Drop airbnb in favour of a leaner config: `@typescript-eslint/recommended` + `eslint-plugin-react/recommended` + `eslint-config-prettier`. Loses the airbnb opinions but gains forward-compat.

I'd defer until you actually feel pain with the current setup.

---

## Comments / Lambda

### Re-enable comments
**Goal:** the Netlify Functions–backed comment system was disabled before this upgrade. Currently the lambda code in [src/lambda/post-comment.js](src/lambda/post-comment.js) is excluded from TS, and the `<CommentForm>` / `<CommentList>` JSX is commented out in [templates/image-post.js](src/templates/image-post.js).
**Why:** the old approach used `netlify-lambda` (deprecated). Modern Netlify Functions live under `netlify/functions/` and use `@netlify/functions`.
**Approach:**
1. Move `src/lambda/post-comment.js` → `netlify/functions/post-comment.ts`. Rewrite as a `Handler` from `@netlify/functions`.
2. Reinstall `contentful-management` (was removed in 1.2).
3. Update `netlify.toml` to declare the functions directory.
4. Uncomment the comments-related blocks in `templates/image-post.js` and the related component imports.
5. Add the `CONTENTFUL_MANAGEMENT_ACCESS_TOKEN` env var to Netlify deploy settings (.env.production.example already lists it).

Bigger piece. ~½ day if the Contentful schema for `postComment` is still in place.

---

## Notes from the upgrade

These came up during Phase 1 — not action items in themselves, but useful context for any of the above:

- The Contentful sort syntax migrated from `sort: { fields: [x], order: DESC }` to `sort: { x: DESC }` (single) or `sort: [{ x: ASC }, { y: DESC }]` (multi). All 5 affected queries already updated.
- `BLURRED` placeholder replaces `TRACED_SVG` everywhere. Visually duller but renders faster.
- `react-icons` v5 changed a few icon names compared to v4. None of the icons we use seem affected, but if a missing-icon warning appears at runtime, that's why — check the [v5 migration list](https://react-icons.github.io/react-icons/).
- `react-markdown` v9 uses `children` + `components` (not `source` + `renderers`). Only one consumer in the codebase: `src/components/markdownRenderer.js`.
- The `process/browser` polyfill and `node: { fs: "empty" }` config in `gatsby-node.js` were webpack 4–era. Removed; Gatsby 5 / webpack 5 doesn't need them.
