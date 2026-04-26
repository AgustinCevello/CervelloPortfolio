---
name: tailwind-styling
description: Applies Tailwind classes and custom CSS utilities following the project's glassmorphism aesthetic and dark mode conventions. Use when styling any new UI element or modifying existing layouts.
---

# Tailwind Styling and Glassmorphism

This portfolio relies on a combination of Tailwind CSS utility classes and custom CSS defined in `src/index.css`. The design language is characterized by "glassmorphism", deep shadows, organic shapes, and a signature "lila" (purple) color palette.

## The Core Design System

### Custom CSS Utilities (from `index.css`)
Always use these classes instead of manually writing backdrop-blur or gradient utilities:

- `liquid-glass`: The fundamental card and container background. Applies a translucent background with blur and a subtle border.
- `text-gradient`: A linear gradient text effect using the lila palette.
- `organic-shape`: A custom border-radius shape that morphs on hover. Perfect for decorative elements or avatars.
- `shadow-glass`: A deep, soft shadow for glassmorphism elements.
- `shadow-glow`: A subtle purple glow effect, often used on active elements.

### The "Lila" Color Palette (from `tailwind.config.js`)
The primary color is a custom `lila` palette ranging from `lila-50` to `lila-900`. 
- Primary accents: `text-lila-600` (light mode) / `dark:text-lila-400` (dark mode)
- Primary backgrounds: `bg-lila-500`
- Subtle backgrounds: `bg-lila-500/10` or `bg-lila-500/15`
- Borders: `border-lila-500/10` or `border-lila-500/20`

## Dark Mode Conventions

The portfolio uses Tailwind's `class` dark mode strategy. The `.dark` class is applied to the `<html>` element by `App.tsx`. Every component must explicitly define both light and dark mode styles.

**Standard Color Pairs:**
- **Headings**: `text-slate-900 dark:text-slate-100` (or `dark:text-white`)
- **Body Text**: `text-slate-700 dark:text-slate-400`
- **Subtle Text/Icons**: `text-slate-500 dark:text-slate-500`
- **Accents**: `text-lila-600 dark:text-lila-400`
- **Glass Borders**: `border border-lila-500/10 dark:border-lila-500/20`

## Layout and Responsive Patterns

### Standard Container
Sections typically use a wrapper to handle max-width and spacing:
```tsx
<section id="my-section" className="scroll-mt-32">
  {/* Header... */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Content... */}
  </div>
</section>
```

### Building a Standard Card
To create a card that matches the portfolio's aesthetic, combine `liquid-glass`, borders, and hover effects:

```tsx
<div className="liquid-glass p-8 rounded-[2.5rem] border border-lila-500/10 hover:border-lila-500/40 transition-all duration-700 shadow-xl group">
  {/* Icon wrapper inside card */}
  <div className="p-4 rounded-2xl bg-lila-500/10 text-lila-600 dark:text-lila-400 mb-6 w-fit group-hover:scale-110 transition-transform">
    <Icon size={24} />
  </div>
  
  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">
    Card Title
  </h3>
  
  <p className="text-slate-700 dark:text-slate-400 font-medium">
    Card content goes here. Use medium font weight for readability.
  </p>
</div>
```

### Badges and Tags
For small tags (like technologies or categories):
```tsx
<span className="text-xs font-black px-4 py-2 rounded-xl bg-lila-500/10 text-lila-600 dark:text-lila-400 border border-lila-500/20 uppercase tracking-tighter">
  Tag Name
</span>
```

## Anti-Patterns to Avoid

- ❌ **Hardcoded colors**: Do not use `text-[#a78bfa]`. Use `text-lila-400`.
- ❌ **Missing dark mode**: Never write a text or background color without its `dark:` counterpart, unless it's explicitly meant to look identical in both modes (like a solid colored button).
- ❌ **Square corners**: Avoid sharp corners. Use `rounded-2xl`, `rounded-3xl`, or `rounded-[2.5rem]` for large cards.
- ❌ **Flat design**: Avoid completely flat designs. Use `liquid-glass` and `shadow-xl` to create depth.
- ❌ **Inline CSS**: Never use the `style={{}}` prop for static styling. Always use Tailwind classes or index.css utilities.

## Typography
- Font Family: `font-sans` (Inter)
- Font Weights: Heavy use of `font-black` for headings and `font-medium` for body text.
- Tracking: Use `tracking-tight` for large headings and `tracking-widest` for uppercase labels.
