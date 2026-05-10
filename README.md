# Puck Atomic BEM – Next.js + Puck Editor Starter

**A clean, opinionated starter for Puck Editor with Atomic Design + Classic BEM + SCSS Modules.**

Built for developers who want **structural rigor** (atoms, molecules, organisms) and powerful visual flexibility through BEM modifiers and SCSS theming — while keeping Puck's drag-and-drop experience.

## Features

- Next.js 15 (App Router)
- Puck Editor v0.18+
- Strict Atomic Design folder structure
- Classic BEM naming convention with SCSS Modules
- Runtime theming via CSS custom properties + Puck root fields
- Component auto-generator script
- Ready for Fly.io and Netlify
- GitHub Actions CI + Deploy

## Quick Start

```bash
git clone https://github.com/lquessenberry/puck-bem-atomic-nextjs.git my-puck-app
cd my-puck-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to launch the Puck editor.

## Generate New Components

```bash
node scripts/generate-component.js MyNewComponent atoms
```

This creates a BEM-ready component with `.tsx` + `.module.scss`.

## Styling Philosophy

- **Primary**: Classic BEM + SCSS Modules (structural + theme modifiers)
- **Alternative**: Emotion / CSS-in-JS (official Puck support via plugin)

See `components/atoms/Button/` for example of BEM approach.

## Deploy Options

### Fly.io (recommended by you)
```bash
fly deploy
```

### Netlify
Connect this repo in Netlify dashboard → automatic deploys.

## Why This Starter?

Most Puck starters are Tailwind-heavy. This one gives you full control with classic methodologies while staying fast and maintainable.

Perfect for design systems, marketing sites, or any project that values component architecture.

---

⭐ Star if you find it useful!

Made with ❤️ for the Puck community.
