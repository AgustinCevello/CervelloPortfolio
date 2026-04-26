---
name: framer-animations
description: Implements smooth animations with Framer Motion matching the portfolio's existing animation patterns. Use when adding entrance animations, hover states, or complex layout transitions.
---

# Framer Motion Animations

This portfolio relies heavily on `framer-motion` to create a dynamic, fluid experience. The animations are designed to be smooth, slightly delayed for a cascade effect, and performant.

## Core Animation Principles

1. **Reveal on Scroll**: Most elements animate into view when the user scrolls to them using `whileInView`.
2. **Subtle Hover Effects**: Interactive elements lift up and scale slightly on hover.
3. **Staggered Children**: Lists and grids animate items one by one rather than all at once.
4. **Spring Physics**: Use `type: "spring"` for organic, bouncy interactions, but stick to `easeOut` for simple reveals.

## CSS Animations vs Framer Motion

Before reaching for `framer-motion`, check if a CSS utility from `index.css` is more appropriate:
- Use `className="animate-float"`, `animate-float-delayed`, or `animate-float-slow` for continuously floating background elements.
- Use `className="transition-all duration-500 hover:scale-105"` for very simple hover states that don't need spring physics.

## Standard Patterns

### 1. The Scroll Reveal (Fade Up)
Use this for cards, list items, or entire sections entering the viewport.

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }} // Triggers slightly before it enters the screen
  transition={{ duration: 0.6, delay: 0.1 }} // Adjust delay based on index for staggered effects
  className="your-classes"
>
  Content
</motion.div>
```

### 2. Staggered Grid Reveal
When mapping over an array of items, multiply the delay by the index to create a cascading entrance.

```tsx
<div className="grid grid-cols-2 gap-8">
  {items.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <Card content={item} />
    </motion.div>
  ))}
</div>
```

### 3. Interactive Buttons & Links
Add satisfying tactile feedback to interactive elements.

```tsx
<motion.a
  whileHover={{ scale: 1.05, y: -4 }}
  whileTap={{ scale: 0.95 }}
  href="/link"
  className="liquid-glass px-6 py-3 rounded-xl block"
>
  Click Me
</motion.a>
```

### 4. Advanced: Layout Animations (Tabs/Filters)
When elements change size or position (like the tabs in the `Skills.tsx` component), use `layoutId` to animate a background highlight smoothly between elements.

```tsx
{/* Container must handle relative positioning */}
<button className="relative px-4 py-2">
  <span className="relative z-10">Tab Name</span>
  {isActive && (
    <motion.div
      layoutId="activeTabIndicator" // Must be unique to this specific tab group
      className="absolute inset-0 bg-lila-500 rounded-lg"
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
    />
  )}
</button>
```

### 5. Progress Bars
Animating widths for skills or language proficiencies.

```tsx
<div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
  <motion.div 
    initial={{ width: 0 }}
    whileInView={{ width: "75%" }} // Or a dynamic value
    viewport={{ once: true }}
    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
    className="h-full bg-gradient-to-r from-lila-500 to-violet-600"
  />
</div>
```

## Performance Constraints

- **Viewport `once: true`**: Always use `viewport={{ once: true }}` for scroll reveals unless you specifically want the element to animate *every* time the user scrolls up and down. Repeated animations can be distracting and hurt performance.
- **Mobile Considerations**: CSS in `index.css` automatically disables continuous float animations on mobile. When using `framer-motion`, keep transitions reasonably fast (0.3s - 0.7s) so the UI doesn't feel sluggish on slower devices.
- **Animate Transforms, Not Layout**: Whenever possible, animate `x`, `y`, `scale`, `rotate`, or `opacity`. Avoid animating `width`, `height`, `top`, or `left` directly as these trigger browser reflows. Use `scale` or `clip-path` instead if needed.
