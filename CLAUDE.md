# FullerOps — AI-Powered Business Operations

## Tech Stack
- Next.js 16 with App Router
- TypeScript (strict: true)
- Tailwind CSS v4 (config in CSS file, NOT tailwind.config.ts)
- React 19
- Vercel deployment

## Directory Structure
- src/app/ — Pages and layouts (App Router)
- src/app/(marketing)/ — Marketing/landing pages
- src/components/ — Reusable components
- src/components/ui/ — Base UI components
- src/lib/ — Utilities, helpers, types, constants
- public/ — Static assets (images, icons)

## Code Conventions
- Functional components with React hooks
- Import order: React > Next.js > third-party > local
- Use "use client" directive only when needed
- Prefer server components by default
- TypeScript strict mode, no any types
- Component files: PascalCase (Button.tsx)
- Utility files: camelCase (formatDate.ts)

## Tailwind CSS v4
- Config lives in the CSS file via @theme, NOT in tailwind.config.ts
- Do NOT create tailwind.config.ts

## Design Requirements
- Mobile-first responsive design
- Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
- All images: explicit width/height, WebP format preferred
- JSON-LD schema markup on all pages
- Semantic HTML with proper heading hierarchy
- Color scheme: dark navy/charcoal primary, bright accent for CTAs

## Brand
- Business name: Fuller Ops
- Tagline: "Your AI-powered operations partner"
- Target: Small businesses and solo professionals
- Tone: Confident, direct, specific — not salesy or corporate
- Owner: Jonathan Fuller
