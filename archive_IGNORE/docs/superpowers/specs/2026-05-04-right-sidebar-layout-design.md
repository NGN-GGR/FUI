# Right-Sidebar Layout — Design Spec

**Date:** 2026-05-04
**Project:** static-webpages-local (`/Users/gavingriffith/code/experiments`)
**Theme at time of write:** onelim (lime `#1afb05`, dark-gray `#333333`, 0px radius)

## Goal

Restructure the existing single-page freelance landing (`index.html`) to use a fixed right-side sidebar containing brand, nav, CTA, theme toggle, and social links. Section content stays unchanged. The current top navbar pattern is retained as the mobile (`< 768px`) fallback.

## Non-goals

- No changes to section copy, services, work, testimonials, contact form, or form validation logic
- No theme changes (onelim stays applied)
- No new dependencies; Bootstrap 5.3 + Bootstrap Icons + vanilla JS only (per `CLAUDE.md`)

## Layout

### Desktop (≥ 768px)
- `<aside class="sidebar">` `position: fixed; top: 0; right: 0;`, 280px wide, full viewport height. Fixed (not sticky) so it always occupies the right gutter regardless of scroll position; doesn't need to participate in flow.
- `<main class="main-pane">` consumes remaining width; reserves space for the sidebar via `padding-right: 280px` on `<body>` (or equivalent margin on `.main-pane`). Content within `.main-pane` capped at `max-width: 760px` with `padding-left: clamp(24px, 6vw, 96px)` so reading column doesn't slam the screen edge.
- Top navbar `#siteNav` hidden on desktop (`d-md-none` on the navbar element)
- Page-bottom `<footer>` hidden on desktop (`d-md-none`); social + copyright move into sidebar

### Mobile (< 768px)
- Sidebar hidden (`d-none d-md-flex` on the `<aside>`)
- Existing top navbar with hamburger collapse takes over (no changes from current behavior)
- Page-bottom `<footer>` visible

## Sidebar structure (top → bottom)

```
<aside class="sidebar d-none d-md-flex flex-column">
  <div class="sidebar-brand">
    <a class="sidebar-brand-name" href="#top">Alex Rivera</a>
    <p class="sidebar-tagline">Freelance Web Developer</p>
  </div>

  <nav class="sidebar-nav" id="sidebarNav">
    <a class="sidebar-link" href="#services">Services</a>
    <a class="sidebar-link" href="#work">Work</a>
    <a class="sidebar-link" href="#about">About</a>
    <a class="sidebar-link" href="#testimonials">Testimonials</a>
    <a class="sidebar-link" href="#contact">Contact</a>
  </nav>

  <a class="btn btn-accent sidebar-cta" href="#contact">Contact me</a>

  <div class="sidebar-foot mt-auto">
    <button class="theme-toggle" id="themeToggle" ...>...</button>
    <div class="sidebar-social">
      <a href="#" aria-label="GitHub"><i class="bi bi-github"></i></a>
      <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
    </div>
    <small class="sidebar-copyright">© <span id="year"></span> Alex Rivera</small>
  </div>
</aside>
```

## Scrollspy

Use Bootstrap 5.3 native scrollspy. On `<body>`:

```html
<body data-bs-spy="scroll" data-bs-target="#sidebarNav" data-bs-offset="80" tabindex="0">
```

Bootstrap toggles `.active` on the matching `<a>` inside `#sidebarNav` as the user scrolls. CSS targets `.sidebar-link.active`:
- 2px left border in `var(--accent)` (lime)
- `font-weight: 600`
- `color: var(--ink)` (so the lime bar carries the brand cue, not the text)

## CSS additions (`styles.css`)

New blocks added under existing component section. No token changes. Approximate scope:

```css
.sidebar {
  position: fixed; top: 0; right: 0;
  width: 280px; height: 100vh;
  border-left: 1px solid var(--border);
  background: var(--bg);
  padding: 32px 24px;
  display: flex; flex-direction: column;
  z-index: 1030; /* above sticky-top navbar's stacking context if any */
}
.sidebar-brand-name { color: var(--ink); font-weight: 600; font-size: 1.1rem; text-decoration: none; }
.sidebar-tagline { color: var(--muted); font-size: .9rem; margin: 4px 0 0; }
.sidebar-nav { display: flex; flex-direction: column; gap: 4px; margin-top: 32px; }
.sidebar-link {
  color: var(--muted);
  text-decoration: none;
  padding: 8px 12px;
  border-left: 2px solid transparent;
  transition: color .15s, border-color .15s;
}
.sidebar-link:hover { color: var(--ink); }
.sidebar-link.active {
  color: var(--ink);
  font-weight: 600;
  border-left-color: var(--accent);
}
.sidebar-cta { margin-top: 24px; }
.sidebar-foot { display: flex; flex-direction: column; gap: 12px; }
.sidebar-social { display: flex; gap: 16px; }
.sidebar-social a { color: var(--muted); font-size: 1.2rem; }
.sidebar-social a:hover { color: var(--accent-dark); }
.sidebar-copyright { color: var(--muted); }

/* Reserve right gutter for the fixed sidebar */
@media (min-width: 768px) {
  body { padding-right: 280px; }
}
.main-pane > * { max-width: 760px; padding-left: clamp(24px, 6vw, 96px); padding-right: 24px; }

@media (max-width: 767.98px) {
  .main-pane > * { padding-left: 16px; padding-right: 16px; }
}
```

## JS additions (`main.js`)

- Re-target the existing theme-toggle wiring at the new `#themeToggle` id (id is preserved; no JS change needed for the toggle)
- Bootstrap scrollspy is data-attribute-driven — no JS code needed to enable it
- Existing footer-year, mobile-nav-collapse-on-click, and form-validation logic is unchanged
- One small addition: when a `.sidebar-link` is clicked, no extra logic is required (smooth-scroll already handled by CSS `scroll-behavior: smooth`)

## Accessibility

- `<aside>` carries an implicit `complementary` role; add `aria-label="Site navigation"` to the inner `<nav>`
- Active scrollspy link gets `aria-current="true"` (Bootstrap sets this automatically)
- Theme toggle keeps `aria-pressed` and `aria-label` from current implementation
- WCAG AA contrast: lime accent only used as decorative left border + button background (with deep-green `--accent-ink` text), not as text on white — preserves the contrast adjustments already in onelim CSS

## Files touched

| File | Change |
|---|---|
| `index.html` | Add `<aside class="sidebar">` after nav, wrap section content in `<main class="main-pane">`, add `data-bs-spy` attrs on `<body>`, hide top nav + page footer on `d-md-none` |
| `styles.css` | Append `.sidebar`, `.sidebar-*`, `.main-pane` rules; no token changes |
| `main.js` | No required changes (data-attribute scrollspy; existing IDs reused) |

## Verification

1. Start server (already running on `:8000`)
2. Load `http://localhost:8000/index.html` in browser at desktop width — sidebar visible on right, main column on left
3. Scroll through sections — active sidebar link updates
4. Click each sidebar link — smooth-scrolls to section
5. Resize to < 768px — sidebar hides, top navbar appears, mobile flow works
6. Toggle theme — sidebar adapts (border, link colors, active accent bar all theme-aware)
7. Submit contact form invalid → valid → success → confirm flow unbroken
