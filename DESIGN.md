---
name: Vidakai Studio
description: Websites for your businesses, designed, built and launched.
colors:
  ink: "oklch(0.165 0.010 255)"
  ink-raised: "oklch(0.205 0.012 255)"
  ink-sheet: "oklch(0.235 0.012 255)"
  line: "oklch(0.96 0.005 255 / 0.10)"
  line-strong: "oklch(0.96 0.005 255 / 0.22)"
  text: "oklch(0.95 0.005 255)"
  text-secondary: "oklch(0.80 0.010 255)"
  text-muted: "oklch(0.68 0.012 255)"
  redline: "oklch(0.70 0.170 38)"
  redline-deep: "oklch(0.64 0.170 36)"
  on-redline: "oklch(0.165 0.010 255)"
  error: "oklch(0.76 0.140 15)"
  success: "oklch(0.80 0.120 155)"
typography:
  display:
    fontFamily: "Archivo, Readex Pro, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, Readex Pro, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    fontFeature: "'tnum'"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "6": "24px"
  "8": "32px"
  "12": "48px"
  "16": "64px"
  "24": "96px"
  "32": "128px"
components:
  button-primary:
    backgroundColor: "{colors.redline}"
    textColor: "{colors.on-redline}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.redline-deep}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
    height: "48px"
  sheet:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "24px"
  input:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    height: "48px"
---

# Design System: Vidakai Studio

> Source of truth for values: `src/styles/globals.css` (`@theme`). This file describes how to use them.

## Overview

**Creative North Star: "The Drawing Set"**

A builder hands a client a set of drawings before anything is built: numbered sheets, a title block naming who drew them, dimension lines that say how long and how big, and red marks where the builder made a decision. Vidakai Studio presents itself the same way. The site is a drawing set for a website: each section is a sheet on one continuous line, and the timeline is a dimension line from brief to launch. Per-section title blocks were removed on 2026-11-23: with the owner unnamed they only repeated the heading and the studio name.

It is a blackline print, not a blueprint: near-black drafting film with off-white linework, and one colour, the redline, reserved for the builder's own marks: the primary action, the "you are here" marks, and the one figure that matters on a sheet. The construction is the decoration. There is nothing on the page that is not either content or a line that measures, frames or labels content.

Density is calm. Sheets have wide margins and a lot of empty film, so a business owner on a phone reads one thing at a time.

**Key Characteristics:**
- Near-black ink ground, off-white hairline linework, one redline accent.
- Every section is a sheet with its heading first (no eyebrow labels, no per-section title block).
- One continuous hairline runs down the start side of the page; each sheet starts with a redline dot on it.
- Dimension lines carry real facts (timelines, steps), never decoration.
- Real project screenshots are the only rich images; they sit inside sheet frames with callouts.
- The hero carries one 3D moment: a CSS 3D exploded axonometric of a website being made, one layer per process step (Brief, Design, Build, Launch). No WebGL.
- Motion: the exploded view spreads apart once on load, tilts with the pointer and folds on scroll; wireframe lines draw in once. No continuous turning. Desktop only; nothing moves under reduced motion.

## Colors

Restrained strategy: tinted neutrals from one cool ink ramp plus one warm accent.

- **Ink** (`ink`): page ground. Near-black with a faint blue tint, never pure #000.
- **Ink raised / sheet** (`ink-raised`, `ink-sheet`): sheet and card surfaces. Depth comes from these steps and hairlines, not shadows.
- **Line** (`line`, `line-strong`): hairlines, frames, dimension lines, input borders.
- **Text roles** (`text`, `text-secondary`, `text-muted`): three roles only. Muted still meets 4.5:1 on ink.
- **Redline** (`redline`): the builder's mark. Primary buttons, active and focus marks, dimension end ticks, the one key figure per sheet. Never used for large surfaces or body text runs, never with a glow.
- **Error / success**: only for form feedback, always paired with words.

## Typography

**Display Font:** Archivo at 112 width (wide lettering of a drawing's title block), weight 600.
**Body Font:** Readex Pro, which covers Latin and Arabic in one family, so RTL text keeps the same voice.

- Display and headline: Archivo, tight tracking only at large sizes.
- Title, body, label: Readex Pro. Labels are sentence case, weight 500, tabular figures for sheet numbers and timelines. No wide-tracked uppercase labels.
- In Arabic (`:lang(ar)`), display falls back to Readex Pro 600 and letter spacing resets to 0.
- Two weights in practice: 400 and 500 for text, 600 for display.

## Layout

- Container max 1200px, side gutter 16px on phones, 24px tablet, 32px desktop.
- 12-column grid on desktop; sheets stack in reading order on phones.
- Section rhythm: 96px between sheets on desktop, 64px on phones.
- Hero: from 1024px, headline (7 of 12 columns) with one primary and one secondary action and the exploded view in the other 5; below 1024px they stack. A dimension line from Brief to Launch sits under both.
- Logical properties throughout (`ps-`, `pe-`, `start`, `end`) so the layout mirrors in RTL.

## Elevation & Depth

Flat. Tonal steps (`ink` → `ink-raised` → `ink-sheet`) and 1px hairlines. No drop shadows on dark surfaces, no glows, no blur backgrounds except a solid-ish navbar.

## Shapes

Square sheets (0 radius) with hairline frames; controls get a small 4px radius so they read as touchable. Corner registration ticks on sheet frames are the only ornament.

## Components

- **Sheet** (`src/components/Sheet.tsx`): section wrapper with heading and optional intro, starting with a redline dot on the continuous line.
- **Exploded view** (`ExplodedView.tsx`, `Tilt.tsx`, `.explode*` in globals.css): four layers at translateZ 0/70/140/210px, one per step in `steps`: Brief (notes, logo, photos, checklist), Design (column grid and outlined wireframe), Build (the same layout part filled, last card still dashed), Launch (browser bar and live screenshot). Each layer carries its label on a zero-size `.explode-pin` at its bottom-end corner; the pin applies the inverse of the stage rotation (`--rx`, `--rz`) so the label faces the viewer and stays attached through tilt and fold. Layers spread from 0.1 to 1 once on load (`.explode-assemble`); `--spread` animates to 0.15 on scroll-out via `animation-timeline: view()`; phones use `--spread: 0.5` and no animation. Pointer tilt on hover devices only.
- **sheet-frame** utility: hairline frame with two corner registration ticks. Used for cards, the gallery and the form.
- **Template card**: a sheet-frame with a line drawing from one of four layout families (menu, booking, catalogue, showcase), business type as title, "Preview coming soon" and a T-number anchor link.
- **Work card**: project screenshot in a sheet frame, project name, one honest line, three fixed tags.
- **Dimension line**: horizontal rule with end ticks and a label; used for the process timeline.
- **Buttons** (`btn btn-primary`, `btn btn-secondary` utilities): primary redline fill with ink text; secondary is an outlined hairline button. One primary per viewport, 48px tall.
- **Inputs**: ink fill, hairline border, redline focus ring 2px, visible labels above fields.

## Do's and Don'ts

- Do let real screenshots carry the colour on the page.
- Do write every label, timeline and claim as a fact the owner confirmed.
- Don't add glows, gradients, particles, WebGL, preloaders, marquees or count-ups. The exploded view is the only 3D.
- Don't put eyebrow labels above headings.
- Don't end headlines, labels or buttons with a period.
- Don't use the redline for more than one or two marks per screen.
- Don't use monospace for body or labels.
- Don't claim a team, offices, or any number that hasn't been confirmed.
