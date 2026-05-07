# Ahsan Waqas — Premium Personal Brand & SEO Agency Website

A fully responsive, conversion-focused personal brand website for Ahsan Waqas, Senior WordPress Developer & SEO Specialist with 15+ years experience.

## Run & Operate

- `pnpm --filter @workspace/ahsan-waqas run dev` — run the frontend (port auto-assigned via PORT env)
- `pnpm --filter @workspace/api-server run dev` — run the API server
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, Framer Motion, wouter (routing)
- UI: shadcn/ui components, lucide-react icons, react-icons
- SEO: react-helmet-async (OG meta on all 8 pages)
- Carousel: embla-carousel-react
- Forms: react-hook-form + zod
- API: Express 5 (api-server artifact, used for health checks only)

## Where things live

- `artifacts/ahsan-waqas/` — main frontend website
- `artifacts/ahsan-waqas/src/pages/` — all 8 pages (home, about, services, case-studies, pricing, blog, blog-post, contact)
- `artifacts/ahsan-waqas/src/components/layout/` — Header, Footer, FloatingWhatsApp, Layout, ConsultationPopup
- `artifacts/ahsan-waqas/src/index.css` — design tokens (dark navy theme, blue primary)
- `artifacts/ahsan-waqas/public/` — ahsan-photo.png, og-image.png, 4 service images, 2 case study images, robots.txt, sitemap.xml
- `artifacts/api-server/` — Express API server (health check only)

## Architecture decisions

- Frontend-only site (no backend needed for personal brand site)
- Dark-mode-always design (no light/dark toggle — site is permanently dark themed)
- react-helmet-async for per-page SEO meta tags (title, description, OG, Twitter Card, canonical)
- Framer Motion used for scroll-triggered reveals (whileInView), staggered entrances, and animated counters
- wouter for lightweight client-side routing (no Next.js needed)
- ConsultationPopup fires after 8s, sessionStorage key `ahsan_popup_dismissed` prevents repeat shows

## Product

8-page premium personal brand site: Homepage (10 sections), About, Services (with AI-generated service images), Case Studies (with AI-generated images), Pricing, Blog archive, Blog post template, Contact. Features floating WhatsApp button, sticky glassmorphism header, animated stat counters, testimonials carousel, FAQ accordion, pricing tiers, contact form with validation, and consultation popup.

## User preferences

- Primary color: #2563EB (blue)
- Background: #030712 (near-black)
- Font: Inter (Google Fonts)
- No emojis in UI
- Conversion-focused, premium agency aesthetic
- Social links: WhatsApp +923463256941, Instagram ahsan142p, LinkedIn ahsan142p, Upwork ahsan1, Fiverr ahsan142p, Linktree ahsanwaqas
- Email: contactahsanwaqas@gmail.com (NOT ahsanwaqas142@gmail.com)

## Gotchas

- react-helmet-async v2 has a peer dep warning with React 19 but works fine
- SiAhrefs and SiSemrush do NOT exist in react-icons/si — use text badges instead
- Floating hero badges use `hidden sm:flex` to prevent overflow on small screens
- Always restart workflow after adding new npm packages

## Pointers

- See the `react-vite` skill for frontend conventions
- See `.local/skills/react-vite/references/seo.md` for SEO implementation guide
