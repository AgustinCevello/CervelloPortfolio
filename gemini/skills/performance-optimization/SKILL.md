---
name: performance-optimization
description: Analyzes and optimizes React performance, image sizes, layout shifts, and bundle sizes for the Vite/React portfolio. Use when auditing the site for speed, Lighthouse scores, or smooth rendering.
---

# Performance Optimization

The Cervello Portfolio uses React 19, Vite, Tailwind CSS, and Framer Motion. While this stack is modern and generally fast, heavy use of animations (`blur`, `backdrop-filter`, `framer-motion`) and large assets can impact performance, particularly on mobile devices.

## Core Optimization Areas

### 1. Cumulative Layout Shift (CLS)
Prevent the UI from jumping around as resources load or state changes.
- **Reserved Space**: Ensure image containers have a defined aspect ratio or fixed height before the image loads.
- **Scrollbar Shifts**: When opening modals or mobile menus that lock `body` scroll, calculate the scrollbar width and add it as `padding-right` to the `body` to prevent the background content from shifting horizontally.

### 2. Image Optimization
- **Formats**: Convert `.png` and `.jpg` files to `.webp` or `.avif` for massive size reductions without quality loss.
- **Lazy Loading**: Add `loading="lazy"` to images below the fold (e.g., Project screenshots, Experience avatars).
- **Sizing**: Do not load a 2000px wide image into a 300px container. Resize images appropriately before adding them to `public/images/`.

```tsx
<img 
  src="/images/project-optimized.webp" 
  alt="Project title"
  loading="lazy"
  width="800"
  height="450"
  className="w-full h-full object-cover"
/>
```

### 3. Rendering Performance (CSS & Animations)
Heavy CSS properties like `backdrop-filter` (used in `.liquid-glass`) and `filter: blur()` can cause massive GPU bottlenecks, especially on mobile.

- **Mobile Fallbacks**: The `index.css` file uses media queries to reduce blur intensity and disable complex CSS animations (`animate-float`) on screens smaller than `768px`. If you add new heavy CSS effects, always wrap them in a desktop media query or simplify them for mobile.
- **Will-Change**: Use `will-change: transform` (or `opacity`) on elements that animate continuously, but use it sparingly as it consumes GPU memory.
- **Hardware Acceleration**: Use `transform: translateZ(0)` to force hardware acceleration on elements with complex transitions.

### 4. React Optimization
For a simple single-page portfolio, aggressive memoization is rarely needed. However, consider the following if performance degrades:
- **Avoid Unnecessary State**: Do not put data in `useState` if it doesn't change. Use constants.
- **Code Splitting (React.lazy)**: If a specific heavy component (like a complex 3D viewer or a massive library) is added later, lazy load it:
  ```tsx
  import React, { Suspense, lazy } from 'react';
  const HeavyComponent = lazy(() => import('./components/HeavyComponent'));
  
  // Render inside Suspense
  <Suspense fallback={<div>Loading...</div>}>
    <HeavyComponent />
  </Suspense>
  ```
- *Note: For the current flat structure, standard chunking by Vite during `npm run build` is sufficient. Do not over-engineer lazy loading for standard components like `About.tsx` or `Contact.tsx`.*

### 5. Vite Build Analysis
To understand what is taking up space in the bundle:
1. Temporarily install `rollup-plugin-visualizer` (as a dev dependency).
2. Add it to `vite.config.ts`.
3. Run `npm run build` and open the generated `stats.html` to identify large dependencies.

## Workflow: Optimization Audit

1. **Analyze**: Identify the bottleneck. Is it a slow initial load (bundle size/images)? Is it stuttering during scroll (CSS/GPU)? Is it layout shift (CLS)?
2. **Optimize Assets**: Compress images in `public/`.
3. **Refine CSS**: Check `index.css` for heavy effects. Ensure `backdrop-filter` is optimized for mobile breakpoints.
4. **Refine Framer Motion**: Ensure `viewport={{ once: true }}` is used on scroll reveals so animations don't replay and consume CPU constantly while scrolling up and down.
5. **Test**: Run `npm run build` and `npm run preview` to test performance in an environment closer to production. Do not rely solely on the dev server for performance metrics.
