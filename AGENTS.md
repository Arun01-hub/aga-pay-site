# Aga Pay marketing site — agent guide

**Catalog**: `aga-pay-site` → target `aganox/pay-site`

## Purpose

Next.js 15 marketing landing page; copy and structure in `lib/content.ts`.

## Stack

- Next.js App Router, TypeScript, Tailwind v4, Framer Motion.

## Commands

| Task | Command |
|------|---------|
| Dev | `npm install && npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |

## Configuration

| File | Notes |
|------|-------|
| `.env.local` | Optional — copy from `.env.local.example` |

## Agent notes

- Edit marketing text in `lib/content.ts` before scattering strings in components.
- Wrangler/Cloudflare deploy is manual; follow `no-billable-cloud-actions` rule in Cursor.