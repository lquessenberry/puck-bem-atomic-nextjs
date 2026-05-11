# AtomicPuck — Premium Subatomic Visual Builder Starter

AtomicPuck is a production-ready Next.js 15 + Puck starter built for premium visual page building with strict architecture discipline.

**Tagline:** _Subatomic tokens + strict BEM + Puck editor power for teams that ship real products._

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- `@measured/puck`
- SCSS Modules
- Strict BEM naming
- Atomic Design + Subatomic Design Universes

## Architecture

```txt
components/
  atoms/
    Badge/
    Button/
    Card/
    Heading/
    Icon/
    InputField/
    Text/
  molecules/
    CtaBanner/
    FeatureCard/
    SwipeableCard/
  organisms/
    BottomNavigation/
    FeatureGrid/
    Hero/
    MobileHeader/
    PricingTier/
    StatsSection/
    Testimonial/
  providers/
styles/
  tokens/
    base/
    semantic/
    universes/
    _index.scss
  abstracts/
  base/
  utilities/
  vendors/
puck/
  fields/
  presets/
  config.tsx
  defaults.ts
```

## Design System Highlights

- **Subatomic token system** with universe-scoped maps (`light`, `dark`, `brand`, `high-contrast`)
- **Theme runtime** driven by `data-theme`/`data-universe` + CSS custom properties
- **Token-only components**: no hard-coded colors in component styles
- **Touch-friendly interactions** with minimum 48px targets
- **Expanded Puck block library** with categories, rich fields, and premium defaults

## Puck Blocks Included

- **Atoms:** `Heading`, `Text`, `Badge`, `Icon`, `Button`, `InputField`, `Card`
- **Molecules:** `CtaBanner`, `FeatureCard`, `SwipeableCard`
- **Organisms:** `Hero`, `FeatureGrid`, `BottomNavigation`, `Testimonial`, `PricingTier`, `MobileHeader`, `StatsSection`

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

## Barrel Export Strategy

- `components/atoms/index.ts`
- `components/molecules/index.ts`
- `components/organisms/index.ts`
- `components/index.ts` as the single import surface for app + Puck config

## Next-Step Roadmap

1. Add section composition patterns (pricing tables, multi-testimonial carousels, FAQ stacks).
2. Add content analytics hooks for CTA interactions.
3. Introduce visual token documentation and a live token inspector in-editor.
4. Add persistence/publish adapters for real CMS workflows.
5. Migrate to `@puckeditor/core` when ecosystem migration is complete.

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

- GitHub Actions deploy on pushes to `main` via `.github/workflows/deploy.yml`
- Ensure `FLY_API_TOKEN` is set in repo secrets
