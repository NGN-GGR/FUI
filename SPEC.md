# SPEC: Brand × Bootstrap Component Showcase

## Goal
A single static HTML page (`index.html`) that demonstrates every Bootstrap 5.3 component rendered through the project's brand-token bridge. It's a living test page: anyone can scan it to verify that brand tokens (colors, typography, shape) flow into Bootstrap's components correctly, and that light/dark themes are coherent across all of them.

## Stack
Per `CLAUDE.md`:
- Static HTML, served by `python3 -m http.server`
- Bootstrap 5.3.x via CDN (CSS + bundle JS) for components and utilities
- Plain vanilla JavaScript (no frameworks, no build step) — minimal inline only
- DM Sans + Inter loaded from Google Fonts (per `DESIGN.md`)

## Files
- `index.html` — the showcase page
- `styles.css` — primitive → semantic → bridge token layers + the small set of project component classes the showcase demos
- `Colors.md` — source palette
- `DESIGN.md` — token contract and design rules
- `BootstrapDEsign.md` — Bootstrap 5.3 framework reference
- `Token-Structure.md` — three-layer token architecture rationale

## Page structure

### Toolbar
- Sticky top bar with project label, Bootstrap version, and a light/dark theme toggle.

### Sections (each scroll-targeted via TOC)
1. **Colors** — palette swatches (Brand / State / Text / Backgrounds / Borders / Buttons / Greys), plus a row showing the bridged Bootstrap state colors (`--bs-primary`, `--bs-success`, etc.) so the bridge can be verified visually.
2. **Typography** — display headings, h1–h6, lede, inline marks, blockquote.
3. **Buttons** — solid + outline variants for every state colour, sizes, states (active/disabled/loading), button group, plus the project's `.btn-accent`.
4. **Alerts** — all six states + dismissible.
5. **Badges** — solid, pill, in-context.
6. **Cards** — basic, header/footer, themed via `.text-bg-primary`, project work-card.
7. **Forms** — text inputs, select, textarea, file, range, checks, radios, switches, validation states, floating labels.
8. **Input groups** — prefix, suffix, button-trail, sm/md/lg.
9. **Navs** — tabs, pills, underline (5.3+), fill, justified.
10. **Breadcrumb**.
11. **Pagination** — sm / default / lg.
12. **Progress** — solid, coloured, striped, animated, plus stacked (5.3+).
13. **Spinners** — border + grow, multiple colours, sm.
14. **List group** — basic, numbered, action items + flush.
15. **Accordion**.
16. **Dropdown**.
17. **Modal** — trigger + working markup.
18. **Offcanvas** — start + end triggers + working markup.
19. **Toast** — trigger + working toast.
20. **Tooltip / Popover** — trigger buttons + explicit JS init.
21. **Placeholders** — glow + wave variants.
22. **Project components** — `.btn-accent`, `.link-accent`, `.service-icon`, `.section-title` + `.section-sub`, `.work-card` × 3, `.quote`.

## Behavior
- Theme toggle persists via `localStorage.theme`; falls back to `prefers-color-scheme` on first load. Sets both `data-theme` (project tokens) and `data-bs-theme` (Bootstrap variants) on `<html>`.
- Tooltips and popovers are explicitly initialised via the small inline `<script>` at the end of the page (Bootstrap requires this).
- Toast trigger button shows the toast in a fixed-position container.
- Modal, offcanvas, accordion, dropdown, tabs, dismissible alerts use Bootstrap's data-attribute API (no extra JS).

## Responsiveness
- Bootstrap grid / utilities handle reflow.
- Verify breakpoints: ≥1200px, ~768px, ≤576px.
- Toolbar wraps at narrow widths.

## Visual style
Driven entirely by `DESIGN.md` and `Colors.md`. Brand purple `--accent` resolves through `--bs-primary` to every Bootstrap `*-primary` consumer; same for state colours.

## Out of scope
- No backend, no real form submission.
- No analytics, no tracking pixels.
- No build tooling, no bundler, no JavaScript frameworks.
- No multi-page navigation.

## Acceptance criteria
- Page loads from `python3 -m http.server` and renders correctly in current Chrome / Safari / Firefox.
- All listed sections present and reachable via the TOC.
- Toggling light ↔ dark visibly shifts every coloured component (background, text, accent, borders) without breaking contrast.
- Every `.btn-{state}`, `.alert-{state}`, `.text-bg-{state}`, `.link-primary` etc. uses brand purple for primary or the project's chosen state colours for the rest — *not* Bootstrap's default blue/red/yellow.
- No console errors on load or on opening any modal / offcanvas / toast / tooltip / popover.
