# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### LULULAND - Color Platform (`artifacts/lululand`)
- **Type**: React + Vite landing page (presentation-only, no backend)
- **Preview Path**: `/`
- **Description**: Korean color consulting platform connecting personal color diagnosis, interior color, digital branding, and gem services
- **Key Features**:
  - Animated gradient hero section
  - Smooth scroll navigation (Personal, Space, Digital, Gem)
  - Reservation modal with name/contact form and payment placeholder
  - Scroll-triggered fade-up animations (Framer Motion)
  - AI-generated section images
- **Key Files**:
  - `src/pages/home.tsx` — main landing page with all sections
  - `src/components/reservation-modal.tsx` — reservation popup dialog
  - `src/index.css` — theme variables and hero gradient animation

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
