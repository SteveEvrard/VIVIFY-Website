# Vivify Website - Project Instructions

This project is the official website for Vivify Clean Energy, built with a modern React stack and a custom SSR/Prerendering setup.

## Project Overview

- **Core Tech:** React 19, TypeScript, Vite.
- **Styling:** Tailwind CSS 4 (using the Vite plugin).
- **Routing:** `wouter` for lightweight client-side routing.
- **Backend:** Express server (Node.js) used for serving the application and potentially other API needs.
- **Build & Deployment:** Custom build process including RSS generation and static prerendering.

## Architecture & Structure

- `client/`: All frontend code.
    - `src/components/`: React components. `ui/` contains low-level primitives (Radix-based).
    - `src/pages/`: Main page components mapping to routes.
    - `src/contexts/`: React contexts (e.g., Theme).
    - `src/hooks/`: Custom React hooks.
    - `src/lib/`: Utilities and library-specific configurations.
- `server/`: Express backend code.
- `shared/`: Shared types and constants used by both client and server.
- `scripts/`: Build-time scripts for RSS and Prerendering.

## Path Aliases

- `@/*`: Maps to `client/src/*`
- `@shared/*`: Maps to `shared/*`
- `@assets/*`: Maps to `attached_assets/*` (if applicable)

## Key Workflows

### Development
- Run `pnpm dev` to start the Vite development server on port 3000.
- The server supports HMR and is configured to allow various hosts for remote access/testing.

### Build Process
The build is complex and runs several steps:
1. `vite build`: Compiles the frontend assets to `dist/public`.
2. `tsx scripts/generate-rss.ts`: Generates the RSS feed.
3. `tsx scripts/prerender.ts`: Performs static prerendering for SEO and performance.
4. `esbuild server/index.ts ...`: Bundles the Express server to `dist/index.js`.

### Prerendering & Hydration
- The site uses a hybrid approach. `client/src/main.tsx` checks for existing child nodes in `#root` to decide between `hydrateRoot` and `createRoot`.
- SEO is managed via `Seo.tsx` component (utilizing standard meta tags).

## Coding Standards & Conventions

- **Components:** Prefer functional components with hooks. Use Radix UI primitives for accessible UI.
- **Styling:** Use Tailwind CSS 4 utility classes. Keep styles local to components where possible, or use the centralized `index.css` for global theme variables.
- **Routing:** Define routes in `client/src/App.tsx` using `wouter`'s `Route` and `Switch`.
- **State Management:** Use standard React state/context or specialized hooks.
- **Form Handling:** Use `react-hook-form` with `zod` for validation.
- **Icons:** Use `lucide-react`.

### Testing & Validation
- **Unit Testing:** Use `vitest` for running tests.
- **Type Checking:** Run `pnpm check` (which runs `tsc --noEmit`) to verify types.
- **Formatting:** Use `pnpm format` (which runs `prettier --write .`) to ensure consistent code style.

## Important Notes

- **Scroll Management:** `App.tsx` contains a `Router` component that handles scroll-to-top on navigation while respecting hash anchors.
- **Theme:** The project uses `next-themes` and a custom `ThemeContext`. Default theme is "light".
- **External Scripts:** The project includes `vite-plugin-manus-runtime` which may be specific to the hosting/runtime environment.
