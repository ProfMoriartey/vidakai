# Vidakai Studio

**The website of Vidakai Studio. Websites for your business, designed, built and launched, with one point of contact from brief to launch.**

🔗 **Live:** [vidakai.com](https://vidakai.com)

Vidakai Studio designs and builds websites and web apps for a wide range of businesses and organisations. A site can start from a ready-made template or be a custom build, with design, build, hosting and launch handled in one place. Arabic and other right-to-left languages are built in from the start.

## Work

| Project | What it is |
|---|---|
| [Winbrella Fabrics](https://winbrellafabrics.com) | B2B fabric catalogue used by buyers in 53+ countries |
| [Menupedia](https://menu-pedia.com) | QR-code menu platform for restaurants, in 5 languages |
| [Hangflow](https://www.hangflow.org/en) | Official website of a Finnish youth organisation, built and maintained |
| [Tüzemen Group](https://www.tuzemengroup.com/en) | Corporate website for a textile exporter |
| [Hayat Göz Clinic](https://hayat-goz.vercel.app/en) *(demo)* | Online appointment booking for an eye clinic |
| [Hastory](https://hastory.vercel.app) *(demo)* | AI-assisted medical charting app |
| [QR Code Generator](https://code-cooker.vercel.app) | Editable QR codes with scan counts and link-in-bio pages |

## What a site can include

- Multilingual pages, including right-to-left Arabic
- Contact and booking forms that email you each request
- Instant Telegram notifications when a customer gets in touch
- An admin dashboard to update your own content
- SEO basics: metadata, sitemap and social share images

## About this site

- **Fast:** mobile Lighthouse scores of Performance 96+, Accessibility 100 and SEO 100, with 112 kB of first-load JavaScript. Every page is static.
- **Accessible:** WCAG AA contrast, keyboard navigation, a skip link, and support for reduced-motion settings
- **RTL-ready:** the layout is built so an Arabic version can be added without a redesign
- **Contact form:** Zod validation, HTML-escaped email content, a honeypot field and rate limiting, covered by tests
- **SEO:** generated Open Graph images, a sitemap, robots rules and per-project metadata

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Zod · Nodemailer · Vercel

## Run locally

```bash
pnpm install
cp .env.example .env   # EMAIL_USER and EMAIL_PASS for the contact form
pnpm dev
pnpm test              # contact-form tests
```

---

**Vidakai Studio** · [vidakai.com](https://vidakai.com) · [ahmed.a.alhusaini@gmail.com](mailto:ahmed.a.alhusaini@gmail.com)
