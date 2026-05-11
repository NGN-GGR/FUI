# frolloDemo — Frollo CDR Consent Page Replica — Design Spec

**Date:** 2026-05-07
**Project:** static-webpages-local (`/Users/gavingriffith/code/experiments`)
**Source:** screenshot of `https://my.frollo.com.au/consent/link/summary` (CommBank-flavoured CDR consent)

## Goal

A new self-contained page in `frolloDemo/index.html` that replicates the Frollo CDR consent page's layout and information architecture using **Bootstrap 5.3.8 components** styled by the project's existing brand bridge (`styles.css`). The point of the exercise is to demonstrate that the bridge is faithful enough to make Bootstrap components render as a recognisable Frollo product, with no per-component restyling beyond what's already in `styles.css`.

## Non-goals

- No real OAuth flow / no backend / no data fetching.
- Not a pixel-exact replica — a Bootstrap-idiomatic adaptation (option C from brainstorming): substitute Bootstrap components where they're a better fit, preserve the layout/content/identity.
- No new tokens or new Bootstrap-bridge work — `styles.css` as it stands today supplies everything needed.
- No light/dark toggle (the source page is light-only; bridge still respects `data-bs-theme` if set externally).
- No copy editing — text content matches the screenshot, including the partially-visible OTP paragraph at the bottom.

## File layout

```
frolloDemo/
  index.html           — the page
  styles.css           — verbatim copy of /styles.css (brand tokens + Bootstrap bridge)
  layout.css           — frolloDemo-only macro layout (CSS Grid shell, dark rail, stepper,
                          top bar, sticky action bar, brand-coloured dividers)
```

Inline SVGs for the FROL mark, CommBank diamond, and CDR spiral live directly inside `index.html`. No separate assets folder.

## Macro layout (CSS Grid)

```
┌──────────────┬─────────────────────────┬────────────────┐
│ rail (dark)  │ topbar-left             │ topbar-right   │
│ rows 1–3     │ (back link, bank chip)  │ (help / about  │
│              │                         │  / avatar)     │
│              ├─────────────────────────┼────────────────┤
│              │ main                    │ info-cards     │
│              │ (consent body)          │ (rows 2–3      │
│              │                         │  combined)     │
│              ├─────────────────────────┤                │
│              │ actionbar (sticky)      │                │
└──────────────┴─────────────────────────┴────────────────┘
```

Outer `<body>` is `display: grid; grid-template-columns: 240px 1fr 320px; grid-template-rows: auto 1fr auto; min-height: 100vh;`. Cell assignments:
- Column 1 (`.demo-rail`, dark): `grid-row: 1 / 4` — full height.
- Column 2: row 1 = `.demo-topbar-left`, row 2 = `.demo-main`, row 3 = `.demo-actionbar` (`position: sticky; bottom: 0;`).
- Column 3: row 1 = `.demo-topbar-right`, rows 2–3 combined = `.demo-info` (`grid-row: 2 / 4`).

The dark rail and the info column visually run the full page height; the centre column has its own three rows (top utility, main, sticky action).

## Component mapping

| Source element | Bootstrap |
|---|---|
| Top "← Back" link + bank chip | `<a class="link-accent">` + custom `.demo-bank-chip` (rounded-pill, border, brand-tinted bg) |
| Top-right Help / About / avatar | `<a class="nav-link">` × 2, `<button class="rounded-circle">` with `.bi-person` |
| "Your consent:" heading | `<h1 class="display-5">` (picks up brand heading family + weight) |
| "Who will collect…" card | `.card .card-body` |
| Purple horizontal divider | Custom `.demo-rule` (1px, `var(--accent)` at 0.5 opacity) |
| 3/6/12 Months pill selector | `.btn-group` of three `<input type="radio" class="btn-check">` + `<label class="btn btn-outline-primary">` (brand-aware via bridge; active state = solid brand purple) |
| "What we will collect and share:" rows | `.accordion .accordion-flush` (chevron + brand-purple toggle text via `.link-accent` style on the button) |
| Body paragraphs | `<p class="text-body">` |
| Sticky action bar | Custom `.demo-actionbar`: `.btn-outline-secondary` ("No, cancel") + `.btn-primary` ("Yes, continue to bank" with `.bi-box-arrow-up-right`) |
| Right-rail info cards | `.card .card-body` × 4 |
| `1 supporting party` emphasis | `<a class="link-primary">` (Layer A bridge → brand purple) |
| `cdr.gov.au` external link | `.link-primary` + `.bi-box-arrow-up-right` |
| Stepper (left rail) | Custom `.demo-stepper` `<ol>` — Bootstrap has no vertical stepper |
| FROL logo + brand mark | Inline SVG with `currentColor` so it follows `--accent` on dark surface |

## Brand bridge / token deltas

**None.** The page builds entirely on the existing `styles.css`:
- Buttons/badges/cards/accordion/btn-group/links → already brand-aware.
- Dark rail → `background: var(--color-secondary)` (palette `#141414`).
- Page bg → `background: var(--bg-alt)` (light) which equals `--color-app-bg` (`#F7F7F7`).
- Body text → `--ink` / `--muted`.
- Active pill → bridged `.btn-primary` colours.
- Info-card emphasis phrases → `.text-primary` (Layer A) → brand purple.

One trivial new class added in `layout.css`: `.demo-rule` for the brand-tinted horizontal dividers. Does not touch `styles.css`.

## Behaviour

All interactivity is Bootstrap-native via data attributes — no project JS:
- Duration `.btn-check` radio inputs (Bootstrap handles toggle / active state).
- Accordion expand/collapse (`data-bs-toggle="collapse"`).
- `← Back`, `Help`, `About`, `No, cancel`, `Yes, continue to bank` are anchor / button placeholders with `href="#"` or `type="button"` and no handlers.
- Avatar button is a placeholder (no menu).

`bootstrap.bundle.min.js` from CDN is loaded so accordion + button-radio toggle work.

## Responsive

- **≥1200px** — three-column as drawn.
- **768–1199px** —
  - Dark rail shrinks to a 60px icon strip: brand mark + numbered step circles, labels hidden.
  - Right info-rail moves *under* `.demo-main` as a horizontal `.card`-row above the action bar.
  - Top bar stays in place.
- **<768px** —
  - Dark rail collapses entirely.
  - Stepper renders horizontally as a strip across the top of `.demo-main` (3 numbered circles connected by lines, current = brand purple).
  - Top bar stays.
  - Info cards stack underneath main content above the sticky action bar.
  - Sticky action bar full-width.

Implemented with media queries in `layout.css` modifying the grid template and individual element rules. No JS for responsive.

## Inline SVGs

Three small SVGs hand-authored inline in `index.html`:

- **FROL mark** — 2×2 grid of letterforms (`F`, `R` top row; `O`, `L` bottom row) inside rounded squares. Single colour (`currentColor`) so it inherits `--accent` on the dark rail and `var(--accent)` purple inline.
- **CommBank diamond** — yellow rounded square (~`#FFB800`) tilted 45° with a slightly darker inner triangle for depth.
- **CDR mark** — concentric arcs forming a spiral motif. Approximation only; not the official asset. Can be swapped for the real asset later by replacing the inline SVG.

## Verification

1. Page serves from `python3 -m http.server 8000`, opens at `/frolloDemo/index.html`.
2. Visual check at desktop, tablet, and mobile widths (per Responsive above).
3. Buttons, accordion, btn-group toggle work without console errors.
4. The "Yes, continue to bank" button renders **brand purple** (proves Layer B bridge), the "No, cancel" outline button renders with brand-purple-on-hover, the active duration pill renders brand-purple-filled.
5. Theme: page renders correctly when `data-bs-theme` is unset (light) and remains coherent if a developer sets `data-bs-theme="dark"` on `<html>` (dark rail still dark, surfaces shift to dark equivalents).
6. No project-level JS file imported (no `main.js`); only Bootstrap bundle JS from CDN.

## Out of scope

- Real OAuth, backend, or routing.
- Animation polish beyond Bootstrap defaults.
- Pixel-exact recreation of every spacing / radius detail in the source.
- Replication of the partially-visible OTP/SMS-input form below the action bar (the screenshot crops it; the visible content above is sufficient for the demo).
- Any change to the project root's existing files (`index.html`, `styles.css`, etc.). `frolloDemo/` is an independent page that *copies* `styles.css`.
