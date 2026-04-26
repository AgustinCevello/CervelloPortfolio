---
name: i18n-translation
description: Adds or updates bilingual content (ES/EN) in the project's constants file and TypeScript definitions. Use whenever modifying textual content in the portfolio.
---

# Internationalization (i18n)

The portfolio supports two languages: Spanish (`ES`) and English (`EN`). State management for the current language lives in `App.tsx`, which selects the appropriate translation tree from `src/constants.tsx` and passes specific branches as the `t` prop to each section component.

## Architecture

1. **`src/types.ts`**: Defines the shape of the translation object for a specific component.
2. **`src/constants.tsx`**: Exports the `TRANSLATIONS` object containing `ES` and `EN` root keys.
3. **`src/App.tsx`**: Holds `const [language, setLanguage] = useState<'ES' | 'EN'>('ES')` and passes `t={TRANSLATIONS[language].sectionName}` to components.
4. **Component**: Receives `t` as a prop and renders `t.title`, `t.description`, etc.

## Workflow: Adding New Translations

### 1. Update the TypeScript Interface
First, define the structure of the new text in `src/types.ts`.

```typescript
// src/types.ts
export interface FooterTranslation {
  madeWith: string;
  rights: string;
  links: { label: string; url: string }[];
}
```

### 2. Update TRANSLATIONS in constants.tsx
Open `src/constants.tsx` and locate the `TRANSLATIONS` object. You **must** add the exact same structure to both the `ES` and `EN` objects.

```typescript
// src/constants.tsx
export const TRANSLATIONS = {
  ES: {
    // ... existing translations
    footer: {
      madeWith: 'Hecho con ❤️ por',
      rights: 'Todos los derechos reservados.',
      links: [
        { label: 'Privacidad', url: '/privacy' }
      ]
    }
  },
  EN: {
    // ... existing translations
    footer: {
      madeWith: 'Made with ❤️ by',
      rights: 'All rights reserved.',
      links: [
        { label: 'Privacy', url: '/privacy' }
      ]
    }
  }
};
```

### 3. Consume in the Component
Update the component to receive and use the translations.

```tsx
// src/components/Footer.tsx
import React from 'react';
import type { FooterTranslation } from '../types';

const Footer: React.FC<{ t: FooterTranslation }> = ({ t }) => {
  return (
    <footer>
      <p>{t.madeWith} Agustín</p>
      <p>{t.rights}</p>
      <ul>
        {t.links.map((link, idx) => (
          <li key={idx}><a href={link.url}>{link.label}</a></li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
```

### 4. Wire in App.tsx
Pass the correct branch to the component.

```tsx
// src/App.tsx
const t = TRANSLATIONS[language];

return (
  // ...
  <Footer t={t.footer} />
  // ...
);
```

## Handling Complex Content

### HTML Strings
If you need bold text or links within a translation string, write HTML in the string and render it using `dangerouslySetInnerHTML`. 

```typescript
// constants.tsx
about: {
  p1: 'Soy un <span class="text-lila-600 font-bold">Desarrollador Full-Stack</span> apasionado.'
}
```
```tsx
// Component
<p dangerouslySetInnerHTML={{ __html: t.p1 }} />
```

### Data without Translation Needs
If data does not need translation (e.g., a list of tech stack names like "React", "Node.js", or external URLs), **do not** put it in `TRANSLATIONS`. 
- For small data, define it directly in `constants.tsx` outside the `TRANSLATIONS` object (like `SKILLS_DATA`).
- For large data sets, create a dedicated file in `src/data/` (like `src/data/projects.ts`) and import it directly into `App.tsx` or the specific component.

## Validation Checklist

- [ ] I have added the exact same keys to both `ES` and `EN` inside `TRANSLATIONS`.
- [ ] I have updated `src/types.ts` to reflect any new or modified keys.
- [ ] The component correctly types the `t` prop using the interface from `types.ts`.
- [ ] No Spanish strings are accidentally left in the English translation block, and vice-versa.
- [ ] Non-translatable data (URLs, technical tags) is kept outside the `TRANSLATIONS` object where possible.
