# aga-pay Marketing Site

Modern marketing landing page for **aga-pay** — a payroll & HR platform.

**Aganox catalog**: [APP_CATALOG](https://github.com/Arun01-hub/aganox-standards/blob/main/docs/APP_CATALOG.md) · **Target org repo**: `aganox/pay-site`

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) icons

AI-assisted development: see [AGENTS.md](AGENTS.md) and [Aganox AI standards](https://github.com/Arun01-hub/aganox-standards/blob/main/docs/AI_DRIVEN_DEVELOPMENT.md).

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/                  # Next.js App Router pages & layout
components/
  layout/             # Header, Footer
  sections/           # Landing page sections
  ui/                 # Reusable UI components
lib/
  content.ts          # All marketing copy & config
  utils.ts            # Utility functions
public/               # Static assets
```

## Customization

Edit [`lib/content.ts`](lib/content.ts) to update:

- Navigation links
- Feature descriptions
- Pricing tiers
- FAQ items
- Testimonials
- CTA URLs (`siteConfig.links`)

Update color theme in [`app/globals.css`](app/globals.css).

Replace the CSS dashboard mockup in [`components/ui/DashboardMockup.tsx`](components/ui/DashboardMockup.tsx) with real product screenshots in `/public`.

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click Deploy

No environment variables required for the static marketing site.

## License

See [LICENSE](LICENSE).
