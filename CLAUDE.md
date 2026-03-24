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
- Business name: FullerOps
- Tagline: "AI-Powered Business Operations"
- Target: Small businesses and solo professionals (real estate, lawn care, restaurants, coaches, insurance)
- Tone: Confident, direct, specific — not salesy or corporate
- Owner: Jonathan Fuller
- Domain: fullerops.com
- Email: jonathan@fullerops.com
- Location: Louisville, KY (serving nationwide)

## Infrastructure
- **Hosting:** Vercel (domain purchased through Vercel, DNS managed there)
- **Email:** Google Workspace on fullerops.com
- **Booking:** Cal.com (cal.com/fullerops) — strategy-call (15min), discovery-call (30min)
- **Contact Form API:** Cloudflare Workers at ~/fullerops-api/ → https://fullerops-api.jonathan-067.workers.dev/api/contact
- **Form Email:** Resend (sends notifications to jonathan@fullerops.com)
- **Analytics:** Vercel Analytics (@vercel/analytics/next)
- **Google Business Profile:** Created, pending postcard verification

## DNS Records (Vercel)
- MX: SMTP.GOOGLE.COM (priority 1) — Gmail
- TXT: google-site-verification=... — Domain ownership
- TXT: v=spf1 include:_spf.google.com ~all — SPF for email deliverability
- DKIM: Pending (needs 24-72hrs after Gmail activation)

## Key Architecture Decisions
- **Contact form uses Cloudflare Workers + Resend** (same pattern as Mobile Bar Finder) — no submission limits, full control over email formatting, reply-to set to submitter's email
- **Cal.com over Calendly** — free tier allows unlimited event types (Calendly limits to 1)
- **Testimonials are placeholders** — marked for replacement with real client testimonials as they come in
- **OG image auto-generated** via Next.js opengraph-image.tsx (edge runtime, no static file needed)

## Content Data
- All site copy centralized in src/lib/constants.ts (SITE, NAV_LINKS, INDUSTRIES, SERVICES, STEPS, FAQ_ITEMS, TESTIMONIALS)
- Industry pages generated dynamically from INDUSTRY_DETAILS in src/app/services/[slug]/page.tsx

## Deployment
- `npx vercel --prod` from project root
- Form API: `cd ~/fullerops-api && npm run deploy`
- Resend API key stored as Cloudflare Worker secret (not in code)
