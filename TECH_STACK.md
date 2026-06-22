# Zorine Exports — Complete Tech Stack

---

## Core Framework

| Technology | Version | Role |
|---|---|---|
| **Next.js** | 16.2.6 | App Router, SSG, file-based routing, image optimization |
| **React** | 19.2.6 | UI component model |
| **TypeScript** | 6.0.3 | Full type safety across the entire codebase |

---

## Styling

| Technology | Version | Role |
|---|---|---|
| **TailwindCSS** | 4.3.0 | Utility-first CSS with v4 `@import "tailwindcss"` syntax |
| **PostCSS** | latest | CSS processing pipeline |
| **CSS Custom Properties** | — | Design tokens (`--forest`, `--gold`, `--cream`, `--ink`, etc.) |
| **CSS `clamp()`** | — | Fluid typography that scales smoothly across all breakpoints |

---

## Animation & Motion

| Technology | Version | Role |
|---|---|---|
| **Framer Motion** | 12.40.0 | Page transitions, scroll reveals (`whileInView`), hero entrance (`animate`) |
| **GSAP** | 3.15.0 | ScrollTrigger counter animations, hero orb float effects |
| **@gsap/react** | latest | React hooks integration for GSAP (`useGSAP`) |
| **Lenis** | 1.0.42 | Momentum-based smooth scroll (`lerp: 0.12`, `touchMultiplier: 1.8`) |

---

## UI Utilities

| Technology | Version | Role |
|---|---|---|
| **Lucide React** | 1.17.0 | Icon library (ArrowUpRight, Globe2, ShieldCheck, Sparkles, etc.) |
| **class-variance-authority** | latest | Type-safe button/component variant system |
| **clsx** | latest | Conditional className utility |
| **tailwind-merge** | latest | Merges conflicting Tailwind classes safely |

---

## Typography (Google Fonts via Next.js)

| Font | Style | Role |
|---|---|---|
| **Marcellus** | Serif, 400 | Display headings — elegant, editorial, premium |
| **Manrope** | Sans-serif, variable | Body text — modern, clean, highly legible |

---

## Deployment & Infrastructure

| Technology | Role |
|---|---|
| **Vercel** | Hosting, global CDN, automatic deploys on every GitHub push |
| **GitHub** | Source control (`prabindersinghh/zorineexports`) |
| **Next.js Image Optimization** | Automatic WebP/AVIF conversion, lazy loading, responsive `sizes` |
| **Static Site Generation (SSG)** | All pages pre-rendered at build time via `generateStaticParams` |

---

## Key Architectural Decisions

### Animation Strategy
- **Above-fold content** uses `animate` (fires on mount) via `HeroReveal` — ensures hero text always appears on SSR hydration
- **Below-fold content** uses `whileInView` (fires on scroll) via `Reveal` with directional variants (`up`, `left`, `right`)

### Button Color System
Explicit `.btn-primary`, `.btn-cream`, `.btn-outline`, `.btn-ghost` CSS classes with `color: var(--cream) !important` override the global `a { color: inherit }` cascade — correct text colors on all link-buttons in all contexts

### Fluid Typography Scale
```css
h1 (interior pages)  : clamp(2.2rem, 4.5vw, 4.8rem)
h1 (hero section)    : clamp(3.2rem, 7.2vw, 7.4rem)
h1 (page heroes)     : clamp(2.4rem, 5vw, 5.4rem)
h2                   : clamp(2rem, 4.2vw, 4.6rem)
h3                   : clamp(1.2rem, 1.8vw, 1.8rem)
```

### Ticker Strip
Dark green horizontal marquee between nav and hero — pure CSS `@keyframes` infinite scroll, zero JavaScript, pauses on hover

### Mobile & iOS
- Collapsed grids at 768px and 480px
- `env(safe-area-inset-*)` for notch and home bar on iOS
- Minimum 44px tap targets on all interactive elements
- `overflow-x: hidden` + `max-width: 100vw` on `html, body`

---

## Design System Tokens

| Token | Value | Usage |
|---|---|---|
| `--forest` | `#234b2a` | Primary dark green — headers, buttons, nav |
| `--forest-2` | `#2f6a38` | Hover state green |
| `--leaf` | `#7aa33d` | Accent green |
| `--gold` | `#d5a642` | Accent gold — separators, highlights |
| `--cream` | `#f7f0df` | Primary light background |
| `--cream-2` | `#efe2c4` | Secondary cream |
| `--paper` | `#fffaf0` | Page background |
| `--ink` | `#172016` | Body text |
| `--muted` | `#687361` | Secondary / caption text |

---

## Project Structure

```
zorineexports.com/
├── app/
│   ├── layout.tsx               # Root layout — fonts, metadata, Header/TickerStrip/Footer
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Design tokens, component CSS, animations
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── products/
│   │   ├── page.tsx             # Products index
│   │   └── [slug]/page.tsx      # Dynamic product pages (SSG)
│   └── insights/
│       ├── page.tsx
│       └── [slug]/page.tsx      # Dynamic insight pages (SSG)
├── components/
│   ├── reveal.tsx               # HeroReveal, Reveal, RevealText animation wrappers
│   ├── hero-aura.tsx            # GSAP-animated background orbs
│   ├── scroll-effects.tsx       # GSAP ScrollTrigger counter strip
│   ├── smooth-scroll-provider.tsx
│   ├── page-transition.tsx      # Framer Motion page transitions
│   ├── site-shell.tsx           # Header, TickerStrip, Footer
│   └── sections/
│       └── home-sections.tsx    # All home page section components
├── data/
│   └── site.ts                  # Products, insights, process steps, contact data
└── public/
    └── img/                     # Product, banner, slideshow photography
```

---

*Built by Prabinder Singh · Deployed on Vercel · 2026*
