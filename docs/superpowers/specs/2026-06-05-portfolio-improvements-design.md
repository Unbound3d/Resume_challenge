# Portfolio Improvements Design

**Date:** 2026-06-05

## Overview

Six improvements to make the resume/portfolio site more modern and professional. All changes are in the static HTML/CSS/JS stack — no build system.

---

## 1. Certifications — Own Nav Anchor

The second `id="skill"` div (Certifications & Awards section) is renamed to `id="certifications"`. A **"Certs"** nav link is added between Skills and Portfolio in the navbar. The existing smooth-scroll JS handles navigation with no additional code.

Add the new **Certified DevSecOps Professional (CDP) – Practical DevSecOps** cert to the top of the certifications list.

---

## 2. Skills Section — Grouped Pill Tags

Replace the two-column bulleted list with color-coded pill tags in three semantic groups:

| Group | Color | Skills |
|---|---|---|
| Offensive Security | Green (`#dcfce7` / `#166534`) | Red/Purple Team Ops, VAPT, Cloud Pen Testing |
| AppSec & DevSecOps | Blue (`#dbeafe` / `#1e40af`) | Application Security, DevSecOps, Secure Code Review |
| GRC & Defensive | Amber (`#fef3c7` / `#92400e`) | Incident Response, Threat Intelligence, Security Audit, Security Policies & Measures, Implementing Security Solutions |

CSS uses `.skill-pill`, `.pill-offensive`, `.pill-appsec`, `.pill-defensive`. Dark mode overrides invert the palette.

---

## 3. Portfolio Cards — Hover Overlay

The existing `.cc-effect` system already animates `p` and `button` elements inside `<figcaption>` on hover. Each card's figcaption is extended with:

1. Title (`.h4`) — already present
2. Short description (`<p>`) — 1-sentence project summary (placeholder; user will fill in)
3. Tech tag chips (`.cc-tags` div) — coloured chips per technology
4. GitHub / Live link (`<a class="btn">`) — opens in new tab

New CSS in `main2.css` handles `.cc-tags` layout and positioning; the rest piggybacks on existing `cc-effect` hover transitions.

---

## 4. Active Nav Highlighting

An `IntersectionObserver` in `main.js` watches all `[id]` sections. When a section crosses the top 40% of the viewport, its matching nav link receives `.nav-active`. CSS adds a green underline to the active link. The observer uses `rootMargin: '-60px 0px -60% 0px'` to account for the fixed navbar.

---

## 5. Dark Mode Toggle — Navbar

A moon icon (`fa-moon-o`) button is the last item in the navbar `<ul>`. Clicking it:
- Toggles `data-theme="dark"` on `<html>`
- Swaps the icon to `fa-sun-o`
- Persists preference to `localStorage`
- On load: restores saved preference, falling back to `prefers-color-scheme`

Dark theme CSS in `main2.css` uses `[data-theme="dark"]` selectors:
- Backgrounds: `#0f172a` (page), `#1e293b` (cards)
- Text: `#e2e8f0` / `#94a3b8` (muted)
- Borders: `#334155`
- Accent green unchanged

---

## 6. SEO & Performance

- `<meta name="description">` — one sentence bio
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`)
- Twitter card meta
- `loading="lazy"` on all below-fold images (banner, all portfolio screenshots); hero image stays eager
- `.superpowers/` added to `.gitignore`

---

## Files Modified

| File | Changes |
|---|---|
| `website/index.html` | Nav link, certifications anchor + CDP cert, skills pills HTML, portfolio figcaption content, dark mode toggle button, SEO meta tags, lazy loading attributes |
| `website/css/main2.css` | Skills pill CSS, `.cc-tags` CSS, `.nav-active` CSS, dark mode toggle button CSS, full dark theme ruleset |
| `website/scripts/main.js` | IntersectionObserver for active nav, dark mode toggle + localStorage logic |
| `.gitignore` | Add `.superpowers/` |
