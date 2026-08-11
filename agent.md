# AGENT.MD — M S Computers & Laptop Repair Codebase Context & Technical Specification

> **Project Name**: M S Computers & Laptop Repair Website  
> **Tech Stack**: Vanilla HTML5, Vanilla CSS3 (Neo-Brutalist design language), Vanilla JavaScript (ES5/ES6 IIFE)  
> **Location / Client**: Kandivali East, Mumbai  
> **Repository Type**: Static Local Business Web Application  

---

## 1. Executive Summary

This project is a high-performance, responsive single-page marketing website for **M S Computers & Laptop Repair**, a local computer repair shop located in Kandivali East, Mumbai. 

The website uses a **Neo-Brutalist design system** characterized by high-contrast primary/accent colors, thick black borders (`4px`), crisp box shadows (`8px`/`12px` solid black offsets), geometric typography (`Archivo Black` and `Space Grotesk`), interactive SVG graphics, and smooth scroll micro-animations.

---

## 2. File & Directory Architecture

```
c:/Users/adity/OneDrive/Desktop/projects/
├── index.html          # Main HTML5 landing page document & SEO structure
├── css/
│   └── style.css       # Complete Neo-Brutalist stylesheet & design tokens
├── js/
│   └── main.js         # IIFE JavaScript module for UI interactions & observers
├── og-image.svg        # 1200x630 OpenGraph social media preview graphic
└── agent.md            # AI agent instructions & codebase technical map (this file)
```

---

## 3. Component & File Breakdown

### 3.1 [`index.html`](file:///c:/Users/adity/OneDrive/Desktop/projects/index.html)
- **SEO & Social Metadata**:
  - `title`, `description`, canonical link (`https://nfckit.in/ms-computers`).
  - OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`) & Twitter Card tags.
  - Embedded `JSON-LD` (`ComputerStore`) schema detailing business location, geo-coordinates (`19.2022, 72.8518`), opening hours (10:00 AM - 9:30 PM daily), 5.0-star rating (307 Google reviews), phone number (`+919619774458`), and offered services catalog.
- **Accessibility & Assets**:
  - Top `#main` skip link for keyboard navigation.
  - Hidden inline SVG icon sprite (`#i-laptop`, `#i-desktop`, `#i-screen`, `#i-keyboard`, `#i-board`, `#i-ssd`, `#i-ram`, `#i-hdd`, `#i-data`, `#i-windows`, `#i-virus`, `#i-software`, `#i-clean`, `#i-upgrade`, `#i-network`, `#i-printer`, `#i-amc`, `#i-home`, `#i-office`).
  - Google Fonts links (`Archivo Black`, `Space Grotesk`).
- **Page Sections**:
  1. **Header & Navigation (`.site-header`, `.nav`)**: Brand logo mark, navigation links (`#services`, `#why-us`, `#reviews`, `#process`, `#contact`), Call Now CTA, and responsive hamburger toggle.
  2. **Hero Section (`.hero`)**: Main headlines (`LAPTOP BROKEN? WE FIX IT.`), CTAs, shop status chips, and a redesigned Neo-Brutalist vector laptop illustration featuring a system diagnostics window bar (`REPAIR OK ✓`, `100% BOOT SPEED` progress bar), realistic hinge notch, balanced keyboard deck with trackpad, animated screwdriver tool (`.tool-tilt`), spark star effects, repositioned non-overlapping tape badges, and a 5.0-star rating badge.
  3. **Marquee Banner (`.marquee`)**: Infinite horizontal scrolling text tape showcasing core repair services.
  4. **Services Grid (`.services`)**: 19 service cards highlighting Laptop Repair, Screen Replacement, Motherboard Repair, SSD Upgrade, Data Recovery, Virus Removal, AMC, etc.
  5. **Why Us Section (`.why`)**: Google rating badge (5.0★ / 307+ reviews), benefit statistics, customer trust points.
  6. **Process Section (`.process`)**: 4-step repair workflow: `01 DIAGNOSE` → `02 EXPLAIN` → `03 REPAIR` → `04 DELIVER`.
  7. **Featured Hardware Breakdown (`.featured`)**: Vector hardware diagram (`viewBox 0 0 1100 580`) detailing authentic laptop component architecture (15.6" IPS Display Screen, Keyboard Deck, Motherboard & Copper Heatpipe Fan Cooling, SODIMM DDR RAM, M.2 NVMe SSD, and Lithium-Ion Battery Pack) with zero-collision dashed leader lines and containerized callout badges.
  8. **Google Reviews (`.reviews`)**: Real client testimonials with Google rating summary badge and direct Google Maps review link.
  9. **Contact Section (`.contact`)**: Address details, business hours, quick call/WhatsApp buttons, and embedded responsive Google Maps iframe.
  10. **Floating Mobile Bar (`.float-actions`)**: Sticky bottom Call & WhatsApp quick action buttons for mobile visitors.
  11. **Footer (`.site-footer`)**: Brand identity, quick navigation menu, service summary links, contact information, and dynamic copyright year.

### 3.2 [`css/style.css`](file:///c:/Users/adity/OneDrive/Desktop/projects/css/style.css)
- **Design Tokens (`:root`)**:
  - Cream Background: `--cream: #F5F1E6`
  - Solid Black Border/Text: `--black: #111111`
  - Yellow Accent: `--yellow: #FFD53D`
  - Electric Blue: `--blue: #2B4EFF`
  - Neon Lime: `--lime: #C6FF3D`
  - Hot Pink: `--pink: #FF4FA0`
  - Standard White: `--white: #FFFFFF`
  - Borders: `--border: 4px solid var(--black)`
  - Hard Shadows: `--shadow: 8px 8px 0 var(--black)`, `--shadow-lg: 12px 12px 0 var(--black)`, `--shadow-sm: 4px 4px 0 var(--black)`
  - Typography: Display font `--font-display: 'Archivo Black'`, Body font `--font-body: 'Space Grotesk'`
- **Responsive System & Mobile Rules**:
  - **Services Section**: Enforces a strict 2-column grid (`grid-template-columns: repeat(2, 1fr) !important`) on all mobile screens (`≤768px` and `≤480px`). Cards use compact padding (`14px 10px`), scaled icons (`38px-44px`), and adapted typography (`12.5px-13.5px` headers).
  - **Process Steps**: Converts into a balanced 2x2 grid on mobile screens (`≤768px`).
  - **Why Us Stats**: 2-column grid layout with 5th stat spanning full width (`grid-column: 1 / -1`).
  - **Floating Action Bar**: Fixed bottom sticky bar (`.float-actions`) for phone screens with iOS `safe-area-inset-bottom` support and safe `body` padding (`78px`).
- **Key Utility Classes & Animations**:
  - `.btn`, `.btn-yellow`, `.btn-pink`, `.btn-blue`, `.btn-lime`: Neo-brutalist tactile button styles with hover translate & active click states.
  - `.sticker`, `.chip`, `.section-tag`: Rotated badge tags giving an edgy handmade aesthetic.
  - `.line-outline`: Webkit text stroke outlining effect for heavy titles.
  - `.marquee-track`: Infinite keyframe scroll (`@keyframes marquee`).
  - `.reveal` & `.reveal.in`: Scroll entrance animation (fade-in & slide-up using CSS transitions).

### 3.3 [`js/main.js`](file:///c:/Users/adity/OneDrive/Desktop/projects/js/main.js)
- **IIFE Structure**: Scoped execution preventing global namespace pollution.
- **Mobile Menu Drawer**: Toggles `.open` on `#nav-links`, updates `aria-expanded` and `aria-label` on `#hamburger`, listens for clicks outside navigation and `Escape` key press.
- **Header Elevation**: Adds `.scrolled` class on `#site-header` when window scroll offset `scrollY > 10`.
- **Marquee Duplication**: Dynamically duplicates `.marquee-track` inner HTML to ensure continuous marquee scrolling without blank gaps.
- **Dynamic Year**: Automatically updates `#year` element to the active calendar year.
- **Scroll Entrance Observer**: Employs `IntersectionObserver` (threshold `0.12`, margin `0px 0px -40px 0px`) to attach the `.in` class to `.reveal` elements when scrolled into view. Includes fallback for legacy browsers.

### 3.4 [`og-image.svg`](file:///c:/Users/adity/OneDrive/Desktop/projects/og-image.svg)
- Vector graphic for OpenGraph social preview tags (`1200x630`). Built with Neo-Brutalist branding tokens, yellow header strip, laptop illustration, star rating badge, location, and call to action.

---

## 4. Development & Editing Guidelines for AI Agents

When interacting with or extending this codebase, adhere to the following rules:

### 4.1 Styling & Aesthetic Consistency
1. **Preserve Neo-Brutalism**: Maintain high contrast, 4px solid black borders, and hard 4px/8px/12px black box-shadows. Do not introduce smooth blurred drop-shadows (`box-shadow: 0 4px 10px rgba(0,0,0,0.1)` is strictly forbidden).
2. **Color Palette Enforcement**: Strictly use the CSS design token variables (`var(--cream)`, `var(--yellow)`, `var(--blue)`, `var(--lime)`, `var(--pink)`, `var(--black)`, `var(--white)`).
3. **No External Build Tools**: The project is intentionally lightweight zero-dependency vanilla code. Do not introduce webpack, vite, tailwind, or npm dependencies unless explicitly requested by the user.

### 4.2 Accessibility & SEO Maintenance
1. **Semantic HTML**: Keep headings strictly hierarchical (`h1` -> `h2` -> `h3`).
2. **ARIA Attributes**: When adding interactive elements, ensure proper `aria-label`, `aria-expanded`, `aria-hidden`, and focusable indicators (`:focus-visible`).
3. **LocalBusiness JSON-LD**: If phone numbers, addresses, opening hours, or business services change, update both the HTML DOM content and the JSON-LD `<script type="application/ld+json">` block in `index.html`.

### 4.3 JavaScript Practices
1. **Browser Compatibility**: Keep script lightweight and vanilla JS. Maintain defensive DOM checks (`if (el) ...`).
2. **Event Listeners**: Use passive event listeners for scroll handlers.

---

## 5. Local Development & Verification

To run and inspect the project locally:
- Simply serve the root directory using any local web server (e.g., Python `python -m http.server 8000`, VS Code Live Server, or `npx serve`).
- Open `http://localhost:8000/index.html` in browser.
