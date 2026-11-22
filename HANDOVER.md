# Handover: Vidakai Studio redesign

Last updated: 2026-11-23. Nothing is committed; the owner reviews and commits. Work is on `main` (no branches).

## Status

The redesign is built and passes `pnpm check`, `pnpm test` and `pnpm build`. Every route is static. The copy still has TODO placeholders that only the owner can fill (see below).

Direction: **The Drawing Set** (see `DESIGN.md`). The site is presented as a builder's set of drawings: numbered sheets, a title block naming the owner, a dimension line from brief to launch, near-black ink, off-white hairlines, one vermilion "redline" accent. The hero has a CSS 3D exploded view of a website (no WebGL). Product facts and brand rules are in `PRODUCT.md`.

Decisions so far: dark only; English only, RTL-safe layout; Work before Templates; CSS 3D, not three.js.

## Lighthouse (mobile, home page, local production build, 3 runs)

| | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS | First-load JS |
|---|---|---|---|---|---|---|---|---|
| Before | 81 / 83 / 83 | 90 | 96 | 100 | 3.2–3.5 s | 340–490 ms | 0.024 | 409 kB |
| After | 97 / 96 / 96 | 100 | 96 | 100 | 2.4–2.6 s | 20–40 ms | 0 | 112 kB |

Both runs share one condition: UploadThing (`*.ufs.sh`) does not respond from the dev machine's network, so remote screenshots failed to load in both measurements. Best practices stays at 96 only because of those failed image requests in the console.

## What changed

**Removed:** Preloader, global WebGL particle background, wireframe icosahedron, ParticleField, Lenis smooth scroll, tech marquee, mouse parallax, rotating text, the EN/AR/RU switcher, the shadcn UI components, the unused `src/server/db` (drizzle and postgres), `drizzle.config.ts`, `start-database.sh`, `components.json`, the `db:*` scripts and `DATABASE_URL`.

**Removed packages:** three, @react-three/fiber, @react-three/drei, @types/three, @studio-freight/react-lenis, framer-motion, drizzle-orm, postgres, drizzle-kit, eslint-plugin-drizzle, @phosphor-icons/react, radix-ui, shadcn, tw-animate-css, class-variance-authority, clsx, tailwind-merge.

**Design system:** tokens in `src/styles/globals.css` (`@theme`). Fonts are Archivo (wide display) and Readex Pro (body, covers Arabic), loaded with next/font. The old `font-mono` and every `bg-white`, `text-black`, `gray-*` utility are gone. Browser surfaces are themed: selection, caret, focus ring and scrollbar.

**Structure:** Hero, Selected work, Templates (10 placeholder cards), How it works, What's included, Who you'll work with, Contact. Content and copy live in `src/data/site.ts` and `src/data/projects.ts`. Everything is a server component except `Navbar` (mobile menu), `Tilt` (pointer tilt), `ProjectGallery` and `ContactForm`.

**Contact form:** zod validation of name, email and message (`src/lib/contact.ts`). All fields are HTML-escaped in the email, which fixes the injection. There is a hidden honeypot field (a filled honeypot gets a fake success). Rate limit: 5 per IP per 10 minutes, in memory. The header-injection risk in the subject is removed. Field errors show inline with `aria-invalid`. Tests are in `src/lib/contact.test.ts` (`pnpm test`).

**SEO and metadata:** `metadataBase`, generated `opengraph-image` and `twitter-image`, `robots.ts`, `sitemap.ts`, per-project metadata, `lang`/`dir` on `<html>`, a 404 page and a skip link.

**Accessibility:** labelled mobile menu button (`aria-expanded`/`aria-controls`, Escape closes it), labelled gallery controls, visible form labels, contrast fixed.

**Data:** tags trimmed and in a fixed order (cards show the first three, no shuffling). The invalid `bg-brown-600`/`bg-grey-600` classes are removed along with the per-project colour field. `/work/[id]` is statically generated with `dynamicParams = false`.

**Testing done:** Playwright screenshots at 375, 768 and 1280 px for home, `/work` and a case study, plus an RTL/Arabic pass at 375 and 1280. No horizontal overflow at any width. The mobile menu and form errors were checked.

## TODO for the owner

All of these are marked `TODO` in code (`grep -rn TODO src`):

1. **Case studies** (`src/data/projects.ts`): one or two true lines (`summary`) and a short paragraph (`content`) for Winbrella Fabrics, Hayat Goz Clinic, Tuzemen Group, Hangflow and QR Code Generator. Menupedia and Hastory kept their old paragraphs, reworded to first person; confirm the wording.
2. **Your name and about text**: `site.owner` in `src/data/site.ts` (used in About and every title block), and the last paragraph in `src/components/About.tsx`.
3. **Contact**: `site.email`, `site.whatsapp` (digits only, international format), and `site.social` (leave empty to hide). Email and WhatsApp links appear in Contact once set.
4. **Domain**: confirm `site.url` (`https://vidakai.com`). It drives `metadataBase`, the sitemap and robots.
5. **Timelines**: `steps[].duration` and `timelines` in `site.ts`. They show in the hero dimension line, How it works and What's included. No prices are shown anywhere.
6. **Tenth template**: name and one line (`templates`, last entry).
7. **What's included**: confirm every item in `included`, especially domain and hosting setup.
8. **Template summaries**: the one-liners per template describe intended sections. Confirm or edit them.
9. **Env vars**: set `EMAIL_USER` and `EMAIL_PASS` (Gmail app password) wherever the site is hosted. Without them the form shows "The form isn't working right now".

## Decisions and risks for the owner

- **Screenshots on UploadThing**: `*.ufs.sh` did not load from this machine's network. Vercel's image optimizer fetches server-side, so visitors should be fine, but copying the 42 screenshots into `public/work/` would remove the dependency and speed up images. Recommended.
- **Rate limiting is per server instance** (see the `shortcut:` comment in `src/lib/contact.ts`). It's enough to stop casual abuse; use a shared store (e.g. Upstash) if spam gets through.
- **`sharp` build script is ignored by pnpm** ("Ignored build scripts: esbuild, msw, sharp, unrs-resolver"). This was already the case before. Vercel handles image optimization itself; for self-hosting, run `pnpm approve-builds`.
- **Scroll-fold animation** of the 3D view uses `animation-timeline: view()`. Browsers without it (Firefox today) show the view without the fold, which is fine.
- **README** is still the T3 boilerplate; not touched.
- **Impeccable** v4.10.0 is available (installed v4.8.1); update with `npx impeccable update` when convenient.

## Not done yet

- The full impeccable `critique` / `audit` / `polish` / `harden` passes were done in-thread against the craft floor and the unslop checklist, not as separate reports. The finish-reviewer subagent was not run.
- Real template previews (the cards are line-drawing placeholders).
- Arabic content (layout and font are ready; no translations exist).

## Files outside git

`.claude/skills/` (impeccable, unslop) and `.impeccable/` (decision-page sketches, surface brief) are listed in `.git/info/exclude` and never committed.
