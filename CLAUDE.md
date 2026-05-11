# Project: Static Webpages (Local)

## Overview
Building static webpages served locally for development and experimentation.

<!-- GGR - chk this -->
# CLAUDE.md Instructions
When generating UI, always refer to `@DESIGN.md`.
1.  **Context:** Determine the active theme from project files (e.g., tailwind.config.js or CSS variables).
2.  **Application:** Apply the specific theme rules within `<theme>` tags in `@DESIGN.md`.
3.  **Defaulting:** If no theme is specified, use "frollo".

## Tech Stack
- **Local web server:** Python 3 (`python3 -m http.server`)
- **UI framework:** Bootstrap 5 via CDN
- **JavaScript:** Plain vanilla JavaScript only

## Conventions## Design System
Always refer to DESIGN.md when generating UI components.
- Use only colors, fonts, and spacing defined in DESIGN.md
- Match component states to the patterns described there
- Never introduce values outside the documented scale
- Validate accessibility against the Do's and Don'ts section

### HTML
- Each page is self-contained and servable as a static file.
- Load Bootstrap 5 CSS/JS from the official CDN — do not vendor or bundle.
- Include the `<meta name="viewport">` tag for responsive layouts.

### CSS
- Prefer Bootstrap 5 utility classes and components before writing custom CSS.
- Custom CSS goes in a separate `.css` file or a `<style>` block — never inline `style=` unless dynamically required.

### JavaScript
- **Plain vanilla JavaScript only.** No frameworks, no libraries, no build step.
- No jQuery, React, Vue, or any other framework.
- No `npm`, `package.json`, `node_modules`, bundlers, or TypeScript.
- Use ES modules (`<script type="module">`) when splitting JS across files.

### Serving Locally
Run from the project root:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000/<page>.html`.

## CDN References
- Bootstrap 5 CSS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`
- Bootstrap 5 JS Bundle: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`
- Bootstrap Icons: `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css`

### Fonts
Fonts come from the theme tokens in `styles.css` and are documented in `DESIGN.md`. Don't hard-code a font family — read `var(--font-heading)` / `var(--font-body)`. The page loads `DM Sans` (heading fallback) and `Inter` (body fallback) from Google Fonts.

## What Not to Do
- No build tooling or package managers.
- No JavaScript frameworks or libraries beyond Bootstrap's own JS bundle.
- No backend logic — pages must work as flat static files.
