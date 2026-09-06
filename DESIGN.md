---
name: KateringKing Royal Culinary & Mega Banquet Production
version: 1.1.0
description: Design tokens and visual language specification for KateringKing.com, featuring high-contrast bold dark typography, huge display scales, and commercial catering production standards.
colors:
  primary: "#C88A2E"
  primary-hover: "#B37722"
  primary-active: "#9E6417"
  primary-glow: "rgba(200, 138, 46, 0.28)"
  secondary: "#0A0D12"
  secondary-surface: "#12161D"
  secondary-light: "#1A202A"
  accent-champagne: "#F5ECD9"
  accent-gold-soft: "#E2C799"
  accent-olive: "#243324"
  neutral-canvas: "#F8F6F0"
  surface-card: "#FFFFFF"
  surface-elevated: "#F1ECE2"
  surface-dark-card: "#151A22"
  border-subtle: "#DFD7C8"
  border-dark: "#272F3A"
  text-primary: "#0A0D12"
  text-secondary: "#262D37"
  text-muted: "#56606D"
  text-inverse: "#FFFFFF"
  text-gold: "#C88A2E"
  status-success: "#1E6B22"
  status-warning: "#D96200"
  status-error: "#C52222"
typography:
  headline-display:
    fontFamily: "Playfair Display, serif"
    fontSize: 84px
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline-lg:
    fontFamily: "Playfair Display, serif"
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline-md:
    fontFamily: "Playfair Display, serif"
    fontSize: 44px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline-sm:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 26px
    fontWeight: 800
    lineHeight: 1.25
  body-lead:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.65
  body-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.55
  label-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 14px
    fontWeight: 800
    letterSpacing: "0.06em"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 12px
    fontWeight: 800
    letterSpacing: "0.1em"
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 14px
  lg: 22px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 36px
  2xl: 56px
  3xl: 88px
  4xl: 120px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.full}"
    padding: "16px 36px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    padding: "15px 32px"
  card-package:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.lg}"
    padding: "36px 30px"
  badge:
    backgroundColor: "{colors.accent-champagne}"
    textColor: "#8C550A"
    rounded: "{rounded.full}"
    padding: "7px 18px"
---

# KateringKing — Design System Specification

## Overview

KateringKing.com represents sovereign culinary luxury combined with high-capacity commercial banquet production. The design rejects timid typography and faint colors in favor of **commanding, bold, huge, deep-dark typography** and razor-sharp typographic hierarchy.

- **Brand Personality**: Regal, industrial-scale, authoritative, culinary perfection, and white-glove hospitality.
- **Audience**: Royal wedding couples, luxury event planners, heads of corporate summits, and families hosting 1,000+ guest galas.
- **Visual Stance**: Deep obsidian slate (`#0A0D12`), warm alabaster canvas (`#F8F6F0`), high-contrast dark charcoal secondary typography (`#262D37`), and saturated royal amber gold (`#C88A2E`).

---

## Colors

| Token | Hex | Role & Context |
| :--- | :--- | :--- |
| `primary` | `#C88A2E` | Saturated royal gold. Primary interactive buttons, badges, key metrics. |
| `primary-hover` | `#B37722` | Darker gold for active states and micro-interactions. |
| `secondary` | `#0A0D12` | Ultra-deep obsidian black. High-impact dark headings and luxury backgrounds. |
| `secondary-surface` | `#12161D` | Deep slate container cards for dark banquet showcases and reel players. |
| `accent-champagne` | `#F5ECD9` | Soft champagne tint for high-contrast kicker pills and quotation marks. |
| `neutral-canvas` | `#F8F6F0` | Warm linen page canvas providing crisp contrast against dark typography. |
| `surface-card` | `#FFFFFF` | Crisp white elevated containers for menus and package pricing. |
| `surface-elevated` | `#F1ECE2` | Warm layered surface for testimonials and interactive tabs. |
| `border-subtle` | `#DFD7C8` | Crisp structural borders framing cards and imagery. |
| `text-primary` | `#0A0D12` | Ultra-bold deep obsidian black for commanding headlines. |
| `text-secondary` | `#262D37` | High-contrast dark charcoal for lead intros and descriptions. |
| `text-muted` | `#56606D` | Clear, legible meta text and guest indicators. |

---

## Typography & Hierarchy

The typographic hierarchy is engineered to be unmistakable and commanding:

### 1. Level 0: The Micro-Kicker
- **Specs**: `Plus Jakarta Sans`, 11px–12px, **ExtraBold 800/900**, uppercase, `letter-spacing: +0.1em`.
- **Styling**: Enclosed in a pill badge (`--color-accent-champagne`) with crisp 1.5px gold border.
- **Example**: `COMMERCIAL-GRADE ROYAL BANQUETING • EST. 1999`

### 2. Level 1: Display H1 (Hero)
- **Specs**: `Playfair Display`, **clamp(46px, 6.8vw, 84px)**, **Black 900 weight**, `line-height: 1.04`, `letter-spacing: -0.03em`.
- **Color**: Deep obsidian `#0A0D12` with italicized royal gold accent words.

### 3. Level 2: Section Titles (H2)
- **Specs**: `Playfair Display`, **clamp(38px, 5.2vw, 62px)**, **Black 900 weight**, `line-height: 1.08`, `letter-spacing: -0.025em`.
- **Separation**: Flanked by royal ornamental gold divider line with center diamond.

### 4. Level 3: Card & Feature Titles (H3/H4)
- **Specs**: `Playfair Display` or `Plus Jakarta Sans`, 22px–36px, **Bold 800 weight**, `line-height: 1.2`.

### 5. Level 4: Lead Paragraphs (.text-lead)
- **Specs**: `Plus Jakarta Sans`, 18px–20px, **Medium 500 weight**, `color: #262D37`, `line-height: 1.65`.

### 6. Level 5: Body & Micro-Copy
- **Specs**: `Plus Jakarta Sans`, 14px–16px, `color: #262D37` or `#56606D`, `line-height: 1.68`.

---

## Description of the Production

The landing page features a dedicated **Production Scale & Infrastructure** section ([`ProductionScale.jsx`](file:///d:/Sahasra/src/components/sections/ProductionScale.jsx)) detailing the industrial engineering behind royal catering:

1. **Central Base Facility**:
   - 12,000 Sq.Ft. commercial kitchen with segregated sanitized wings (Pure-Veg / Jain cleanroom, Awadhi copper deg chambers, confectionery lab).
2. **Peak Production Capacity**:
   - 5,000+ covers per day across up to 5 simultaneous mega-banquets with synchronized 90-minute service windows.
3. **Cold-Chain Logistics**:
   - Fleet of 14 temperature-monitored refrigerated transport vehicles and on-site mobile induction staging units.
4. **Food Safety Certifications**:
   - ISO 22000:2018, HACCP, and FSSAI Central License compliant with 5-stage RO+UV water filtration and microbiological batch testing.
5. **Standard Operating Protocol**:
   - 4-Phase execution countdown: T-48h Farm Procurement, T-24h Commercial Prep, T-6h On-Site Staging, Live Banquet Synchronized Butler Execution.

---

## Do's and Don'ts

### Do's
- **DO** use huge, bold, 900-weight deep obsidian headlines (`#0A0D12`).
- **DO** maintain high contrast between text and canvas (`#262D37` on `#F8F6F0`).
- **DO** clearly showcase the scale and industrial infrastructure of the catering production.
- **DO** pair classic Michelin editorial serifs with razor-sharp geometric sans-serif numbers and badges.

### Don'ts
- **DON'T** use low-contrast washed out gray text.
- **DON'T** use small, timid headings on section titles.
- **DON'T** use generic purple or neon AI gradients.
