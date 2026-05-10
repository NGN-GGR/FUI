# Design2 — distilled from the showcase

A condensed design system, written as if reverse-engineered from `index.html` (the brand × Bootstrap component showcase). Pairs with `DESIGN.md` (the full contract) and `Token-Structure.md` (the architecture). This file is a high-density summary — read it to understand *what the page actually demonstrates*, in one pass.

## Identity

**Frollo** — professional, business-trust. The visual signal is a deep purple primary (`#512ABD`), soft 4px corners, weighty headlines (Forma DJR / DM Sans, weight 900 hero), generous reading rhythm (`line-height: 1.6`). State colours are vivid and palette-specific (lime success, coral error, orange warning) rather than the Bootstrap defaults. Buttons hover *lighter* not darker — a deliberate brand quirk.

The showcase makes this identity legible by rendering every Bootstrap component through the brand bridge so the same primary purple shows up in `.btn-primary`, `.alert-primary`, pagination active state, dropdown active items, accordion expanded panels, form-check checked, and progress bars — alongside the project's own `.btn-accent`, `.link-accent`, `.service-icon`, and `.work-card`.

---

## Tokens at a glance

Three layers in `styles.css`, in order of consumption distance:

```
Components   (.btn-accent, .work-card, etc.)         ← consume only semantic
   ↓
Semantic     (--accent, --bg, --space-5, --radius)   ← reference primitives
   ↓
Primitives   (--color-primary, --scale-8, …)         ← raw values, never themed
```

Plus a fourth layer that re-aliases Bootstrap's own variables onto the semantic layer (the *bridge*).

### Brand colours (light)

| Role | Token | Value |
|---|---|---|
| Primary | `--accent` | `#512ABD` |
| Hover | `--accent-dark` | `#854cff` (lighter — palette quirk) |
| Tint | `--accent-tint` | `rgba(81,42,189,0.10)` |
| Ink-on-accent | `--accent-ink` | `#ffffff` |
| Emphasis | `--accent-emphasis` | `#3A1E8A` (used as text on tints) |
| Secondary | `--secondary` | `#5F6489` (muted navy) |

Dark mode shifts `--accent` → `#CDC3FF` (light purple) and `--accent-emphasis` → `--accent`.

### State colours

| Role | Token | Value |
|---|---|---|
| Success | `--success` / `--success-tint` | `#00C696` / `#D8FFF6` |
| Danger (palette: error) | `--danger` / `--danger-tint` | `#E74C4C` / `#FEE0D9` |
| Warning | `--warning` / `--warning-tint` | `#FB6340` / 15% alpha |
| Info | `--info` / `--info-tint` | `#0dcaf0` / 15% alpha |
| Valid / Invalid | `--valid` / `--invalid` | aliases of success / danger |

### Surfaces

| Role | Light | Dark |
|---|---|---|
| `--bg` | `#ffffff` | `#292B3D` |
| `--bg-alt` | `#F7F7F7` | `#141414` |
| `--card-bg` | `#ffffff` | `#141414` |
| `--ink` | `#393C56` | `#f5f5f5` |
| `--muted` | `#5F6489` | `#bcbcbc` |
| `--border` | `#AFB2C7` | `#4b4b4b` |

### Spacing & typography

- **Spacing scale:** `--space-1` through `--space-8` = `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64px`
- **Type scale:** `--fs-hero` `clamp(36, 5vw, 56)` · `--fs-section` `clamp(28, 3vw, 36)` · `--fs-lead` `1.15rem` · `--fs-meta` `1.05rem` · `--fs-body` `1rem` · `--fs-small` `0.875rem` · `--fs-card-heading` `1.15rem`
- **Weights:** hero `900`, section `700`, emphasis `600`, label `500`, body `400`
- **Line-heights:** `--lh-hero` `1.1`, `--body-line-height` `1.6`
- **Heading tracking:** `-0.02em`
- **Heading family:** `'Forma DJR Text', 'DM Sans', system-ui, …`
- **Body family:** `'Calibri', 'Inter', system-ui, …`

### Motion

- `--motion-fast` `150ms` (hover, fast state changes)
- `--motion-base` `200ms` (default, theme fade)
- `--motion-slow` `300ms` (upper bound)
- `--motion-exit` `250ms` (entry + 50ms convention)
- `--easing-standard` `ease`

### Shape

- `--radius` `4px` (soft corners on buttons, cards, inputs, thumbs)
- `--btn-weight` `500` (default button label weight)
- `--width-ring` / `--focus-ring-color` — focus halo (`0.2rem` × `--accent-tint`)

---

## Theming

Two attributes drive themes:

- `data-theme` — flips project tokens (semantic layer re-aliases primitives)
- `data-bs-theme` — flips Bootstrap's own component variants (navbar, cards, form-control, etc.)

A pre-paint inline `<script>` reads `localStorage.theme` (falling back to `prefers-color-scheme`) and sets both attributes on `<html>` before first paint. The toolbar toggle persists user choice.

Brand selection isn't an attribute — there's only one brand. The architecture supports adding one (re-introduce a `[data-brand="..."]` block in `styles.css` and re-alias the brand tokens), but the current project ships single-brand.

---

## Bootstrap bridge — the two-layer reality

This is the highest-leverage rule in the system, and the place that's easiest to get wrong.

### Layer A — `:root` overrides

Reach Bootstrap's *utilities* and the theme-colour *subtle/emphasis* tokens.

```css
:root {
  --bs-primary: var(--accent);
  --bs-primary-rgb: var(--accent-rgb);
  --bs-primary-text-emphasis: var(--accent-emphasis);
  --bs-primary-bg-subtle: var(--accent-tint);
  --bs-primary-border-subtle: var(--color-border-accent);
  /* …and equivalent for secondary/success/danger/warning/info,
     plus link, border-radius, body type, form validation, focus ring */
}
```

This makes brand-aware: `.text-primary`, `.bg-primary`, `.text-bg-primary`, `.border-primary`, `.link-primary`, `.alert-primary`, `.list-group-item-primary`, `.accordion-button:not(.collapsed)`.

### Layer B — component-scoped overrides

Bootstrap declares per-component CSS variables (e.g. `--bs-btn-bg`, `--bs-pagination-active-bg`) on the component class itself with **hard-coded hex values**. `--bs-primary` is never read for these. They need class-scoped overrides:

```css
.btn-primary {
  --bs-btn-bg: var(--accent);
  --bs-btn-hover-bg: var(--accent-dark);
  --bs-btn-active-bg: var(--accent-dark);
  /* …and the matching color/border/disabled variables */
}
```

Same pattern for: `.btn-{secondary,success,danger,warning,info}`, all six `.btn-outline-*`, `.pagination`, `.nav-pills`, `.nav-underline`, `.dropdown-menu`, `.list-group`, `.accordion`, `.progress`. Special case: `.form-check-input:checked` hard-codes background-colour on the rule itself (not via a CSS var) — must override the property directly.

All of this lives in `styles.css` section **3. Bootstrap component-scoped overrides**.

---

## Component catalogue

Everything the showcase renders, with where it gets its styling from.

### Bootstrap-driven (via the bridge)

| Component | Brand-aware via | Demoed variants |
|---|---|---|
| Buttons | Layer B | solid + outline × {primary, secondary, success, danger, warning, info}; sizes sm/lg; states active/disabled/loading; button group |
| Alerts | Layer A subtle/emphasis | all six states, dismissible |
| Badges | Layer A | solid, pill, in-context |
| Cards | Layer A radius | basic, header/footer, themed (`.text-bg-primary`) |
| Forms | Layer A focus + Layer B form-check | inputs, select, textarea, file, range, checks/radios/switches, valid/invalid, floating labels, input groups |
| Navs | Layer B (pills, underline) | tabs, pills, underline (5.3+), fill, justified |
| Breadcrumb | Layer A link colour | basic |
| Pagination | Layer B | sm / default / lg, active page |
| Progress | Layer B | solid, coloured, striped, animated, stacked (5.3+) |
| Spinners | currentColor → `.text-*` | border + grow, sm |
| List group | Layer A subtle + Layer B active | basic, numbered, action items, flush |
| Accordion | Layer A subtle + Layer B active | three panels |
| Dropdown | Layer B active item | basic + outline triggers |
| Modal | Layer A radius | trigger + working markup |
| Offcanvas | Layer A radius | start + end |
| Toast | Layer A radius | trigger + container |
| Tooltip / Popover | (init via JS) | top, bottom, click-popover |
| Placeholders | currentColor | glow + wave |

### Project-custom

| Class | Purpose | Tokens consumed |
|---|---|---|
| `.btn-accent` | Project primary CTA | `--accent`, `--accent-ink`, `--accent-dark`, `--radius`, `--btn-weight` |
| `.link-accent` | In-content emphasised link | `--accent`, `--accent-dark`, `--weight-label` |
| `.section-title` | Standalone section heading | `--fs-section`, `--weight-section`, `--heading-tracking`, `--heading-transform` |
| `.section-sub` | Section subtitle | `--fs-meta`, `--muted` |
| `.service-icon` | 44 × 44 icon tile | `--service-icon-bg`, `--accent`, `--radius` |
| `.work-card` + `.work-thumb-{1\|2\|3}` | Project card with gradient thumbnail | `--border`, `--radius`, `--card-bg`, `--accent-tint`, `--accent`, `--bg-alt`, `--secondary` |
| `.quote` / `.quote-attr` | Testimonial card | `--card-bg`, `--border`, `--radius`, `--ink`, `--muted` |

---

## Page structure (the showcase itself)

- **Toolbar** (sticky top): title, version blurb, light/dark toggle. Stays visible while scrolling.
- **TOC** (first scroll-into-view section): pill-style anchor links to all 22 sections.
- **22 component sections**, alternating `--bg` / `--bg-alt` for visual rhythm. Each begins with an `<h2>` styled by `.showcase-section h2` (which uses `--fs-section` + `--weight-section`), a lede paragraph in `--muted`, and a label-cased subhead inside.
- Page-level styles for the showcase chrome (`.showcase-*`, `.swatch`, `.toc`, `.label`) live inline in `<head>` — they're test-page utilities, not part of the design system.

---

## Verifying the bridge works

Open the showcase. The buttons row at the top of *Buttons* should show:

- `.btn-primary` — **brand purple** background, white text
- `.btn-outline-primary` — **brand purple** text + border, fills purple on hover
- `.btn-success` — brand-palette green (`#00C696`), white text
- `.btn-danger` — brand-palette coral-red (`#E74C4C`), white text
- `.btn-warning` — brand-palette orange (`#FB6340`), dark text
- `.btn-info` — cyan (`#0dcaf0`), dark text

If any of those shows Bootstrap's default blue / red / yellow, the bridge is broken — find the relevant `--bs-{component}-*` variable in DevTools and add a class-scoped override to `styles.css` section 3.

The same purple should appear in: pagination active page, accordion expanded panel border, dropdown active item, list-group active item, form checkboxes when checked, progress bar default fill.

---

## Don'ts

- Don't put a hex / rgba / pixel literal in a component rule. Always go through a token.
- Don't override `--bs-primary` on `:root` and assume `.btn-primary` will follow. It won't (Layer B trap).
- Don't use theme-locked Bootstrap classes (`.bg-white`, `.text-dark`, `.navbar-light`, `.navbar-dark`). Use `.bg-body`, `.text-body`, default `.navbar`.
- Don't suppress focus outline without providing an equivalent visible indicator.
- Don't paste a screenshot in lieu of a token name — the showcase is the live truth.

---

## See also

- `DESIGN.md` — the long-form contract (sections include source-of-truth rule, naming convention, full token tables, allowlist/denylist, Bootstrap bridge two-layer breakdown)
- `Colors.md` — palette source-of-truth (YAML + grouped tables + `:root` block ready to drop in)
- `Token-Structure.md` — three-layer architecture (primitives → semantic → bridge) with naming and consumption rules
- `BootstrapDEsign.md` — Bootstrap 5.3.8 framework reference
- `SPEC.md` — page spec for the showcase
