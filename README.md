# AnonChat Landing Page

A production-oriented Next.js landing page for an anonymous Telegram chat product.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Motion for React (`motion/react`)
- Lucide React
- pnpm

## Architecture

The page is organized by feature rather than by generic UI folders:

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  features/
  hero/
  how-it-works/
  referral/
  roadmap/
  layout/
  ui/

content/
  features.ts
  steps.ts
  roadmap.ts

lib/
  cn.ts
  constants.ts
```

Static page sections are server components. Client components are limited to behavior that actually needs the browser:

- sticky navigation state + mobile menu
- reveal-on-scroll motion
- hero conversation motion

## Getting started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Telegram bot

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_TELEGRAM_BOT_USERNAME=your_bot_username
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Production checks

```bash
pnpm lint
pnpm build
pnpm start
```

## Design rules

The implementation intentionally avoids:

- custom/vanilla CSS beyond Tailwind's required entry directives
- large component files
- decorative particle systems
- generic glassmorphism
- purple AI-SaaS gradients
- unnecessary client components
- animation that is required for comprehension

The mint accent, dark charcoal foundation, restrained surfaces, and conversation simulation are the approved visual direction.
# chatbot-landing-page
