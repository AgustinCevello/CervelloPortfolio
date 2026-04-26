---
name: react-component-creation
description: Creates new React components for the Cervello portfolio following established architecture patterns, TypeScript interfaces, and prop-drilling conventions. Use when adding a new section, card, or reusable UI element to the portfolio.
---

# React Component Creation

This skill codifies the exact patterns used across every component in this portfolio. Every new component must follow these conventions — no exceptions.

## Architecture Overview

The portfolio is a single-page app where `App.tsx` owns all state (dark mode, language) and passes translated content as `t` props to each section component. Components live flat in `src/components/`, import types from `src/types.ts`, and receive their data through typed props rather than fetching or importing translations directly.

```
src/
├── App.tsx              # State owner, passes t={TRANSLATIONS[language].section}
├── constants.tsx         # TRANSLATIONS object (ES/EN) + SKILLS_DATA
├── types.ts             # All TypeScript interfaces
├── data/                # Separated data (e.g., projects.ts)
└── components/
    ├── Hero.tsx          # Section components — flat, no nesting
    ├── Experience.tsx
    └── ...
```

## Step-by-Step Workflow

### 1. Define the TypeScript interface

Add the translation type to `src/types.ts`. Follow the existing naming pattern: `{SectionName}Translation`.

```typescript
// src/types.ts — append to existing interfaces
export interface TestimonialsTranslation {
  title: string;
  subtitle: string;
  items: { name: string; role: string; quote: string }[];
}
```

### 2. Create the component file

Place it in `src/components/{SectionName}.tsx`. The component must be a typed `React.FC` that destructures a `t` prop matching your new interface.

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { TestimonialsTranslation } from '../types';

const Testimonials: React.FC<{ t: TestimonialsTranslation }> = ({ t }) => {
  return (
    <section id="testimonios" className="scroll-mt-32">
      {/* Section header — reuse this exact pattern */}
      <div className="flex items-center gap-5 mb-20">
        <div className="p-4 rounded-2xl bg-lila-500/15 text-lila-600 dark:text-lila-400">
          <Quote size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100">
          {t.title}
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {t.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="liquid-glass p-8 rounded-[2.5rem] border border-lila-500/10 hover:border-lila-500/40 transition-all duration-700 shadow-xl"
          >
            <p className="text-slate-700 dark:text-slate-400 text-lg font-medium mb-6 italic">
              "{item.quote}"
            </p>
            <p className="font-black text-slate-900 dark:text-white">{item.name}</p>
            <p className="text-lila-600 dark:text-lila-400 text-sm font-bold">{item.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
```

### 3. Add translations to constants.tsx

Add entries under both `ES` and `EN` keys in `src/constants.tsx`, inside the `TRANSLATIONS` object. Keep both languages in sync — same structure, different text.

```typescript
// Inside TRANSLATIONS.ES
testimonials: {
  title: 'Testimonios',
  subtitle: 'Lo que dicen quienes trabajaron conmigo.',
  items: [
    { name: 'Cliente', role: 'CTO', quote: 'Excelente trabajo...' }
  ]
},

// Inside TRANSLATIONS.EN — mirror the same keys
testimonials: {
  title: 'Testimonials',
  subtitle: 'What people I worked with say.',
  items: [
    { name: 'Client', role: 'CTO', quote: 'Excellent work...' }
  ]
}
```

### 4. Wire it into App.tsx

Import the component and render it inside `<main>`, passing the translated prop. Maintain the section order that makes narrative sense.

```tsx
import Testimonials from './components/Testimonials';

// Inside <main> — between existing sections
<Testimonials t={t.testimonials} />
```

### 5. Add navbar link (if needed)

Update the `nav` keys in both `ES` and `EN` inside `TRANSLATIONS`, then update the `Navbar.tsx` links array to include the new section ID.

## Mandatory Conventions

**Section header pattern** — every section uses the same header block: a Lucide icon inside a `bg-lila-500/15` pill, followed by an `h2` with `font-black`. Copy it verbatim from any existing component.

**Section ID** — use a lowercase, URL-friendly Spanish slug matching the navbar anchor (e.g., `id="testimonios"`). Add `className="scroll-mt-32"` for proper scroll offset below the fixed navbar.

**Card styling** — all cards use `liquid-glass p-8 rounded-[2.5rem] border border-lila-500/10 hover:border-lila-500/40 transition-all duration-700 shadow-xl`. Do not invent new card patterns.

**Dark mode** — always provide both light and dark variants. Use `text-slate-900 dark:text-white` for headings, `text-slate-700 dark:text-slate-400` for body text, and `text-lila-600 dark:text-lila-400` for accent text.

**No internal state for data** — components receive all displayable content through the `t` prop. The only local state allowed is for UI interactions (active tabs, open/close toggles). See `Skills.tsx` for the correct pattern with `useState`.

**Imports** — always use `import type { ... }` for TypeScript interfaces (not bare `import`). Use named Lucide icon imports, never the full library.

## Separated Data Pattern

When a section's data is complex or doesn't need translation (e.g., project URLs, tech stacks), extract it to `src/data/{section}.ts` and import it directly in `App.tsx`. The `Projects` component demonstrates this: `App.tsx` imports `projectsData` from `src/data/projects.ts` and passes it as the `t` prop, bypassing the `TRANSLATIONS` object entirely.

```typescript
// src/data/certifications.ts
import type { CertificationsData } from '../types';

export const certificationsData: CertificationsData = {
  title: 'Certificaciones',
  items: [/* ... */]
};
```

## Validation Checklist

Before finishing, verify:

1. Interface exists in `types.ts` with the `{Name}Translation` naming pattern
2. Component uses `React.FC<{ t: YourInterface }>` signature
3. Both `ES` and `EN` translations added with identical structure
4. Component imported and rendered in `App.tsx` with the correct `t` prop
5. Section has a unique `id` attribute and `scroll-mt-32` class
6. All text uses the dark mode color pairs listed above
7. Cards use the `liquid-glass` + `rounded-[2.5rem]` pattern
8. Lucide icon imported by name, displayed in the section header
