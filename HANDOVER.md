# Handover: Vidakai Studio redesign

Last updated: 2026-11-23. Nothing is committed; the owner reviews and commits. Work is on `main` (no branches).

## Status

The redesign is built and passes `pnpm check`, `pnpm test` and `pnpm build`. Every route is static. The copy is final (2026-11-23): every TODO is replaced, and no TODO markers remain in `src/`.

Direction: **The Drawing Set** (see `DESIGN.md`). The site is presented as a builder's set of drawings: sheets on one continuous line, a dimension line from brief to launch, near-black ink, off-white hairlines, one vermilion "redline" accent. The hero has a CSS 3D exploded view of a website being made, one labelled layer per process step: Brief, Design, Build, Launch (no WebGL). Product facts and brand rules are in `PRODUCT.md`.

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

**Structure:** Hero, Selected work, Process (From brief to launch: the four steps, then Templates: 10 cards with placeholder drawings), What's included, About the studio, Contact. The navbar links Work to the `/work` page (all projects as cards), Process to `/#process`, and About to `/#about`. Section title blocks were removed (2026-11-23). Content and copy live in `src/data/site.ts` and `src/data/projects.ts`. Everything is a server component except `Navbar` (mobile menu), `Tilt` (pointer tilt), `ProjectGallery` and `ContactForm`.

**Contact form:** zod validation of name, email and message (`src/lib/contact.ts`). All fields are HTML-escaped in the email, which fixes the injection. There is a hidden honeypot field (a filled honeypot gets a fake success). Rate limit: 5 per IP per 10 minutes, in memory. The header-injection risk in the subject is removed. Field errors show inline with `aria-invalid`. Tests are in `src/lib/contact.test.ts` (`pnpm test`).

**SEO and metadata:** `metadataBase`, generated `opengraph-image` and `twitter-image`, `robots.ts`, `sitemap.ts`, per-project metadata, `lang`/`dir` on `<html>`, a 404 page and a skip link.

**Accessibility:** labelled mobile menu button (`aria-expanded`/`aria-controls`, Escape closes it), labelled gallery controls, visible form labels, contrast fixed.

**Data:** tags trimmed and in a fixed order (cards show the first three, no shuffling). The invalid `bg-brown-600`/`bg-grey-600` classes are removed along with the per-project colour field. `/work/[id]` is statically generated with `dynamicParams = false`.

**Testing done:** Playwright screenshots at 375, 768 and 1280 px for home, `/work` and a case study, plus an RTL/Arabic pass at 375 and 1280. No horizontal overflow at any width. The mobile menu and form errors were checked.

## Voice

The voice changed from first person to a **neutral studio voice** (see `PRODUCT.md`). No "I", "me", "we" or "our team" anywhere on the site, no mention that one person runs the studio, and the owner is not named. Never claim a team, offices or a client count. Keep this rule for every future edit, including form messages and metadata.

## Before launch

1. **Vercel:** set `EMAIL_USER` and `EMAIL_PASS` (a Gmail app password) in Vercel's environment variables, so form messages reach ahmed.a.alhusaini@gmail.com. Without them the form shows "The form isn't working right now".
2. **Vercel:** connect the vidakai.com domain to the Vercel project.
3. **Hastory screenshot:** the first Hastory screenshot shows the owner's name ("Ahmed Alhusaini") inside the app, which breaks the rule of not naming the owner. Replace or blur it (`src/data/projects.ts`, `hastory`).
4. **Screenshots on UploadThing:** recommended before launch, see "Decisions and risks" below.

Done (2026-11-23): README rewritten in the studio voice (owner no longer named in the footer). The leftover lists of business types were removed from About, `site.description` and the link-preview image. Copy stays deliberately broad ("a wide range of businesses and organisations"); only the templates are named by business type.

## Next steps (recommended order)

**Biggest improvements**

1. **Real template previews.** All 10 cards say "Preview coming soon". Build 2–3 real ones first (for example restaurant, clinic, company) as live demos; they double as proof. Until then, consider showing fewer cards.
2. **Turkish and Arabic versions.** Turkish for local clients in Bursa; Arabic is already claimed as a strength. Layout and font are RTL-ready; only translations are missing.
3. **Make WhatsApp easier to reach.** A WhatsApp button in the hero or a small fixed button on mobile; small business owners on phones usually prefer it to a form.
4. **Better enquiries.** Add two quick choices to the contact form: type of business, and template or custom build.
5. **Testimonials.** One real line each from Winbrella and Hangflow. Real quotes only.

**Smaller improvements**

6. **Project pages:** a "Next project" link at the bottom and a short "What was built" list.
7. **Search setup:** structured business data (JSON-LD), a link-preview image per project from its screenshot, and a Google Business Profile for Bursa.
8. **Analytics:** Vercel Analytics or similar, to see which pages lead to enquiries.
9. **Re-check speed.** Project pages now load all 6 screenshots up front for the smooth gallery switch. Run Lighthouse on a project page to confirm LCP is still good.

## Decisions and risks for the owner

- **Screenshots on UploadThing**: `*.ufs.sh` did not load from this machine's network. Vercel's image optimizer fetches server-side, so visitors should be fine, but copying the 42 screenshots into `public/work/` would remove the dependency and speed up images. Recommended.
- **Rate limiting is per server instance** (see the `shortcut:` comment in `src/lib/contact.ts`). It's enough to stop casual abuse; use a shared store (e.g. Upstash) if spam gets through.
- **`sharp` build script is ignored by pnpm** ("Ignored build scripts: esbuild, msw, sharp, unrs-resolver"). This was already the case before. Vercel handles image optimization itself; for self-hosting, run `pnpm approve-builds`.
- **Scroll-fold animation** of the 3D view uses `animation-timeline: view()`. Browsers without it (Firefox today) show the view without the fold, which is fine.
- **Impeccable** v4.10.0 is available (installed v4.8.1); update with `npx impeccable update` when convenient.

## Not done yet

- The full impeccable `critique` / `audit` / `polish` / `harden` passes were done in-thread against the craft floor and the unslop checklist, not as separate reports. The finish-reviewer subagent was not run.
- Template previews and translations: see "Next steps" above.

## Files outside git

`.claude/skills/` (impeccable, unslop) and `.impeccable/` (decision-page sketches, surface brief) are listed in `.git/info/exclude` and never committed.
