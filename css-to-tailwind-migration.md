# Task Plan: CSS to Tailwind Migration (Vite)

## Goal
Migrate KateringKing (`d:\Sahasra`) from custom CSS / inline styles to Tailwind CSS using Vite with 100% visual fidelity, zero regressions, and professional-grade code quality.

## Key Risk Analysis & Mitigation
1. **Preflight Headings Collapse**:
   - Risk: Tailwind Preflight resets `h1-h6` to inherited sizes/weights.
   - Mitigation: Base typography wrapped in `@layer base`, bound to `--font-serif` and fluid clamp tokens.
2. **Container Class Collision**:
   - Risk: Tailwind's `.container` utility overrides custom 1320px max-width, fluid clamp gutters, and auto-margins.
   - Mitigation: Custom `.container` preserved in `@layer components`.
3. **GSAP vs CSS Transitions Fight**:
   - Risk: Adding `transition-all` to GSAP-animated elements causes stuttering.
   - Mitigation: Prohibit CSS transition utilities on GSAP target refs.
4. **CardNav Intricate States**:
   - Risk: Rewriting complex cubic-bezier transitions, scroll-shrink, and hover loader bars into inline classes causes regressions.
   - Mitigation: Retain `CardNav.css` as a dedicated component stylesheet (or layer under `@layer components`).
5. **Runtime Geometry in Packages Carousel**:
   - Risk: Breaking orbital math coordinates.
   - Mitigation: Keep dynamic coordinates in `style={{ left, top }}` while migrating static wrappers to Tailwind.
6. **Token Fidelity**:
   - Risk: Visual drift in brand gold (`#C88A2E`), obsidian (`#0A0D12`), and typography clamps.
   - Mitigation: Full bridge of `tokens.css` into Tailwind `@theme`.
7. **JS Event Hover Mutators**:
   - Risk: Inline JS style mutations in `Footer.jsx` conflicting with Tailwind.
   - Mitigation: Convert to native Tailwind `hover:` variants.

## Tasks Breakdown
- [ ] Task 1: Create dedicated branch `feature/css-to-tailwind-migration`
- [ ] Task 2: Install `tailwindcss` & `@tailwindcss/vite`
- [ ] Task 3: Configure `vite.config.js` with `tailwindcss()`
- [ ] Task 4: Configure Tailwind `@theme` in `src/styles/tokens.css` / `global.css`
- [ ] Task 5: Configure `@layer base` and `@layer components` with `.container`, typography, custom scrollbars, and buttons
- [ ] Task 6: Migrate Common Components (`SectionHeading.jsx`, `MagneticButton.jsx`)
- [ ] Task 7: Migrate Navigation & Footer (`Navbar.jsx`, `CardNav.jsx`, `Footer.jsx`)
- [ ] Task 8: Migrate Modal Overlay (`EnquiryModal.jsx`)
- [ ] Task 9: Migrate Home Page Sections (`Hero`, `ProductionScale`, `Packages`, `AboutLegacy`, `EventReels`, `Gallery`, `Testimonials`)
- [ ] Task 10: Migrate Multi-Page Route Views (`AboutPage`, `PackagesPage`, `GalleryPage`, `ReelsPage`, `ReviewsPage`, `ContactPage`)
- [ ] Task 11: Execute automated build test (`npm run build`)
- [ ] Task 12: Perform cross-device visual verification (Desktop, Tablet, Mobile) in browser
