# BEM Puck Thang

A production-ready visual page-builder starter using Next.js 15, React 19, and Puck with strict BEM + SCSS Modules + Atomic Design.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- `@measured/puck`
- SCSS Modules
- BEM naming conventions

## Architecture

```txt
components/
  atoms/
  molecules/
  organisms/
  providers/
styles/
  abstracts/
  base/
  themes/
  utilities/
  vendors/
puck/
  fields/
  presets/
  config.tsx
  defaults.ts
```

## Design System Highlights

- Theme tokens via CSS custom properties (`light`, `dark`, `brand`)
- Layout controls from root props (`contentWidth`, `verticalSpacing`)
- Production-ready blocks with variant support and accessibility defaults
- Barrel exports for DX and discoverability

## Puck Blocks Included

- Atoms: `Heading`, `Text`, `Badge`, `Button`, `Card`
- Molecules: `CtaBanner`
- Organisms: `FeatureGrid`

## Local Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Fly.io deployment

### Prerequisites

- Install `flyctl`: https://fly.io/docs/hands-on/install-flyctl/
- Authenticate: `fly auth login`

### First-time launch

```bash
fly launch --no-deploy
fly deploy
```

### Ongoing deploys

- GitHub Actions deploys on pushes to `main` via `.github/workflows/deploy.yml`.
- Ensure `FLY_API_TOKEN` is set in repo secrets.

## Contributing

1. Build components with strict BEM element/modifier naming.
2. Keep styles scoped to SCSS Modules and tokenized CSS variables.
3. Register all new blocks in `puck/config.tsx` and add sensible defaults.
4. Run lint/build before opening a PR.
