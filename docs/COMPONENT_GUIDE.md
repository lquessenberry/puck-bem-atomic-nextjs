# AtomicPuck Component Guide  
**Identifying with BEM + Structuring with Atomic Design**

AtomicPuck combines two battle-tested systems:

- **BEM** → for **identifying** and **naming** components (so you can instantly find them in the codebase).
- **Atomic Design** → for **structuring** components (so the library stays scalable and maintainable).

Together they make every component predictable, searchable, and easy to extend.

---

## 1. BEM – Your Search & Identification System

BEM stands for **Block — Element — Modifier**.

### BEM Naming Rules (AtomicPuck Style)

| Part       | Syntax                          | Example                              | Meaning |
|------------|---------------------------------|--------------------------------------|---------|
| **Block**  | `block-name`                    | `hero`, `feature-card`, `bottom-nav` | The standalone component |
| **Element**| `block-name__element`           | `hero__title`, `button__icon`        | A part of the block |
| **Modifier**| `block-name--modifier`          | `button--primary`, `card--featured`  | A variation |

**Full class example**:
```scss
// Inside Button.module.scss
.button { ... }
.button__icon { ... }
.button--primary { ... }
.button--primary.button--large { ... }
```

### How to Search & Identify Components Using BEM

1. **Global search** (recommended):
   - Search for `.button`, `.hero`, `.swipeable-card`, etc.
   - The filename always matches the block name: `Button.tsx` + `Button.module.scss` 

2. **Folder structure mirrors BEM**:
   ```
   components/
   ├── atoms/
   │   └── Button/
   │       ├── Button.tsx
   │   └── Icon/
   │       ├── Icon.tsx
   ├── molecules/
   │   └── FeatureCard/
   │       ├── FeatureCard.tsx
   ├── organisms/
   │   └── Hero/
   │       ├── Hero.tsx
   ```

   → The folder name = the **Block** name.

3. **Quick identification checklist**:
   - Look for the **block** class in the root element of the `.tsx` file.
   - All child elements use `__element`.
   - Variants use `--modifier`.
   - If you see a class that starts with the component's folder name, you've found it.

---

## 2. Atomic Design – Your Structuring System

We use Brad Frost's Atomic Design hierarchy, extended with our **Subatomic** layer:

| Level          | Name              | Purpose                              | Folder                  | Examples in AtomicPuck |
|----------------|-------------------|--------------------------------------|-------------------------|------------------------|
| **Subatomic**  | Design Tokens     | Raw values & universes               | `styles/tokens/`        | `--color-primary`, `--spacing-24` |
| **Atom**       | Atom              | Smallest reusable building block     | `components/atoms/`     | Button, Icon, InputField, Heading |
| **Molecule**   | Molecule          | Group of atoms working together      | `components/molecules/` | FeatureCard, SwipeableCard |
| **Organism**   | Organism          | Complex, self-contained UI section   | `components/organisms/` | Hero, PricingTier, BottomNavigation, Testimonial, MobileHeader, StatsSection |
| **Template**   | Template          | Page-level layout (rarely in Puck)   | (future)                | — |
| **Page**       | Page              | Final assembled pages                | Puck editor             | Landing page preset |

### Decision Tree – Where Does This Component Belong?

Ask these questions in order:

1. **Is it a single, reusable UI piece that can't be broken down further?** → **Atom**
2. **Does it combine 2+ atoms to form a distinct unit?** → **Molecule**
3. **Does it contain multiple molecules/atoms and represent a full UI section?** → **Organism**

**Examples**:
- `Button` + `Icon` → **Atom**
- `Button` + `Icon` + `Text` inside a card → **Molecule** (`FeatureCard`)
- Entire hero with headline, subheadline, CTA buttons, and background → **Organism** (`Hero`)

---

## 3. Practical Workflow: How to Find Any Component

**Step-by-step search process:**

1. Open the repo → `components/` 
2. Decide the level (Atom / Molecule / Organism) using the decision tree above.
3. Go to the matching folder.
4. Look for a folder whose name matches the block you expect (e.g. `Hero/`).
5. Open `Hero.tsx` — the root element will have `className={styles.hero}`.
6. Search the whole codebase for `.hero` to see everywhere it's used.

**Pro tip**: Use your editor's "Find in Files" with the pattern `\.block-name` (e.g. `\.hero`).

---

## 4. How to Add a New Component (Step-by-Step)

1. **Decide the level** using the decision tree.
2. **Create the folder**:
   - `components/atoms/NewThing/` or `molecules/` or `organisms/` 
3. **Create the files**:
   - `NewThing.tsx` 
   - `NewThing.module.scss` 
4. **Follow BEM strictly** in the SCSS file.
5. **Use only design tokens** in your styles:
   ```scss
   .new-thing {
     background: var(--color-surface);
     padding: var(--spacing-24);
     border-radius: var(--radius-lg);
   }
   ```
6. **Export** from the barrel file:
   - `components/atoms/index.ts` 
   - `components/molecules/index.ts` 
   - `components/organisms/index.ts` 
7. **Register in Puck** (`puck/config.tsx`) under the correct category.
8. **Add to a preset** if it makes sense (e.g. landing page).

---

## 5. Quick Examples from the Current Library

| Component            | Level       | BEM Block Name       | Folder Path |
|----------------------|-------------|----------------------|-------------|
| Icon                 | Atom        | `icon`               | `atoms/Icon` |
| InputField           | Atom        | `input-field`        | `atoms/InputField` |
| SwipeableCard        | Molecule    | `swipeable-card`     | `molecules/SwipeableCard` |
| FeatureCard          | Molecule    | `feature-card`       | `molecules/FeatureCard` |
| Hero                 | Organism    | `hero`               | `organisms/Hero` |
| BottomNavigation     | Organism    | `bottom-navigation`  | `organisms/BottomNavigation` |
| PricingTier          | Organism    | `pricing-tier`       | `organisms/PricingTier` |

---

**You now have a complete, searchable, and scalable component system.**

This guide is living — update it whenever we add new patterns or levels.

