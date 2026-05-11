# Bootstrap Design Reference

**Version:** Bootstrap **5.3.8** (latest stable, May 2026)
**Source of truth:** `getbootstrap.com/docs/5.3/`
**License:** MIT

A condensed design-system reference for Bootstrap 5.3.8. Not a project policy — a description of the framework's own design language, the variables it exposes, and the components it ships. Use this as a starting contract when building on top of Bootstrap, or as a reference when writing project-specific design rules that bridge to it.

## CDN

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JS bundle (includes Popper) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

<!-- Optional: Bootstrap Icons (separate package) -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
```

---

## Principles

1. **CSS-variable first.** Every styleable property is exposed as a `--bs-*` custom property. Override the variable, not the rule.
2. **Mobile-first.** All grid and utility variants scale up; `.col-md-6` means "6 columns at md and above".
3. **Utilities then components.** Reach for utility classes (`.d-flex`, `.p-3`, `.text-bg-primary`) before custom CSS or component overrides.
4. **Class-based theming, not selector-based.** State and contextual styling lives on classes (`.btn-primary`, `.alert-success`), not on element types.
5. **Color modes via `data-bs-theme`.** Light is the default; dark is a single attribute swap on `<html>` (or any subtree).
6. **Don't overwrite the framework.** Override CSS variables in your own stylesheet or a scoped `[data-bs-theme="..."]` block. Avoid editing `bootstrap.min.css`.

---

## Color Modes

Bootstrap 5.3 ships a built-in **light / dark / auto** color mode system.

```html
<!-- Light (default if attribute is omitted) -->
<html data-bs-theme="light">

<!-- Dark -->
<html data-bs-theme="dark">

<!-- Scope to a subtree -->
<div data-bs-theme="dark">…</div>
```

Dark-mode rules are defined under `[data-bs-theme=dark]` selectors and re-alias the relevant CSS variables (body color, body bg, secondary/tertiary, border, primary-bg-subtle, etc.). Components that read `--bs-body-bg` or `--bs-border-color` automatically follow.

Add your own modes the same way:

```css
[data-bs-theme="brand-x"] {
  --bs-primary: #...;
  --bs-primary-rgb: ...;
  --bs-body-bg: #...;
}
```

---

## CSS Variables

Bootstrap exposes ~150 CSS variables on `:root`. Below are the categories that matter when theming or extending.

### Theme colors
| Variable | Purpose |
|---|---|
| `--bs-primary`, `--bs-primary-rgb` | Primary actions, links |
| `--bs-secondary`, `--bs-secondary-rgb` | Muted UI chrome |
| `--bs-success`, `--bs-success-rgb` | Positive state |
| `--bs-info`, `--bs-info-rgb` | Informational state |
| `--bs-warning`, `--bs-warning-rgb` | Cautionary state |
| `--bs-danger`, `--bs-danger-rgb` | Errors, destructive actions |
| `--bs-light`, `--bs-light-rgb` | Light surface |
| `--bs-dark`, `--bs-dark-rgb` | Dark surface |

Each `*-rgb` companion is the integer-form RGB triple of its hex counterpart. Bootstrap composes alphas via `rgba(var(--bs-primary-rgb), 0.5)` patterns — both must move together.

### Theme color subtle variants
Each state color also exposes a `*-bg-subtle`, `*-border-subtle`, and `*-text-emphasis` variant for alerts, badges, and other tinted surfaces:

| Variable family | Use |
|---|---|
| `--bs-{color}-bg-subtle` | Light tinted background |
| `--bs-{color}-border-subtle` | Tinted border |
| `--bs-{color}-text-emphasis` | Darker text colour for tinted surfaces |

### Body / surface
| Variable | Purpose |
|---|---|
| `--bs-body-color`, `--bs-body-color-rgb` | Default text colour |
| `--bs-body-bg`, `--bs-body-bg-rgb` | Default background |
| `--bs-body-font-family` | Default font stack |
| `--bs-body-font-size` | Base size (`1rem`) |
| `--bs-body-font-weight` | `400` |
| `--bs-body-line-height` | `1.5` |
| `--bs-secondary-color`, `--bs-secondary-bg` | Muted text and surface |
| `--bs-tertiary-color`, `--bs-tertiary-bg` | Most-muted text and surface |
| `--bs-emphasis-color` | High-contrast text variant |
| `--bs-link-color`, `--bs-link-color-rgb` | Default link colour |
| `--bs-link-hover-color`, `--bs-link-hover-color-rgb` | Link hover |

### Greys & brand colours (raw palette)
- Greys: `--bs-gray-100` through `--bs-gray-900`
- Named brand hues: `--bs-blue`, `--bs-indigo`, `--bs-purple`, `--bs-pink`, `--bs-red`, `--bs-orange`, `--bs-yellow`, `--bs-green`, `--bs-teal`, `--bs-cyan`

These are the *primitives* behind the theme colours above. Theme variables map onto them by default (e.g. `--bs-primary` is `--bs-blue`).

### Borders & shape
| Variable | Default |
|---|---|
| `--bs-border-width` | `1px` |
| `--bs-border-style` | `solid` |
| `--bs-border-color` | greyscale |
| `--bs-border-color-translucent` | semi-transparent |
| `--bs-border-radius` | `0.375rem` |
| `--bs-border-radius-sm` | `0.25rem` |
| `--bs-border-radius-lg` | `0.5rem` |
| `--bs-border-radius-xl` | `1rem` |
| `--bs-border-radius-xxl` | `2rem` |
| `--bs-border-radius-pill` | `50rem` |

### Shadows
| Variable | Use |
|---|---|
| `--bs-box-shadow` | Default elevation |
| `--bs-box-shadow-sm` | Subtle |
| `--bs-box-shadow-lg` | Modal / popover |
| `--bs-box-shadow-inset` | Inset (form fields) |

### Focus ring
| Variable | Default |
|---|---|
| `--bs-focus-ring-width` | `0.25rem` |
| `--bs-focus-ring-opacity` | `0.25` |
| `--bs-focus-ring-color` | `rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity))` |

Apply with the `.focus-ring` utility or via component focus states.

### Form validation
| Variable | Use |
|---|---|
| `--bs-form-valid-color` | `.is-valid` text |
| `--bs-form-valid-border-color` | `.is-valid` border |
| `--bs-form-invalid-color` | `.is-invalid` text |
| `--bs-form-invalid-border-color` | `.is-invalid` border |

### Code & content
| Variable | Use |
|---|---|
| `--bs-code-color` | Inline `<code>` text |
| `--bs-highlight-color` | `<mark>` text |
| `--bs-highlight-bg` | `<mark>` background |
| `--bs-heading-color` | Override for h1–h6 |

> Bootstrap exposes grid breakpoint values as CSS variables (`--bs-breakpoint-sm` etc.) but they **cannot be used in media queries** due to a CSS spec limitation. Media queries must use the literal pixel values.

---

## Breakpoints

| Token | Min width | CSS suffix |
|---|---|---|
| `xs` | `0` | (none — implicit) |
| `sm` | `≥ 576px` | `-sm-` |
| `md` | `≥ 768px` | `-md-` |
| `lg` | `≥ 992px` | `-lg-` |
| `xl` | `≥ 1200px` | `-xl-` |
| `xxl` | `≥ 1400px` | `-xxl-` |

Most utilities and grid classes accept a breakpoint suffix that means "at this breakpoint and above". The `-down` suffix on a few utilities (e.g. `.modal-fullscreen-md-down`) means "at this breakpoint and below".

---

## Spacing

Bootstrap's spacing scale is multiplicative on `$spacer` (default `1rem` / 16px):

| Step | Value | rem | px |
|---|---|---|---|
| `0` | `$spacer * 0` | `0` | 0 |
| `1` | `$spacer * .25` | `0.25rem` | 4 |
| `2` | `$spacer * .5` | `0.5rem` | 8 |
| `3` | `$spacer * 1` | `1rem` | 16 |
| `4` | `$spacer * 1.5` | `1.5rem` | 24 |
| `5` | `$spacer * 3` | `3rem` | 48 |

Used by: `.m-{0–5}`, `.mt/me/mb/ms-{0–5}`, `.mx/my-{0–5}`, `.p-{0–5}` etc. (and the `auto` variant for margins). Also used for **gutters** via `.g-{0–5}`, `.gx-{0–5}`, `.gy-{0–5}` and **gaps** via `.gap-{0–5}`.

---

## Typography

### Defaults
- **Family:** native system stack (`system-ui, -apple-system, ...`).
- **Size:** `1rem` (`--bs-body-font-size`).
- **Line-height:** `1.5`.
- **Headings:** `<h1>`–`<h6>` with declining sizes; matched by class `.h1`–`.h6`.

### Display headings
For oversized hero copy:

| Class | Approx size |
|---|---|
| `.display-1` | ~5rem |
| `.display-2` | ~4.5rem |
| `.display-3` | ~4rem |
| `.display-4` | ~3.5rem |
| `.display-5` | ~3rem |
| `.display-6` | ~2.5rem |

### Helper text
- `.lead` — larger lede paragraph
- `.small` — `0.875em`
- `.text-muted` / `.text-body-secondary` — muted body text
- `.text-emphasis` — emphasised body text
- `.text-truncate` — single-line ellipsis
- `<mark>` / `.mark` — highlighted text

---

## Color Utilities

- **Text:** `.text-{primary|secondary|success|info|warning|danger|light|dark|body|body-secondary|body-tertiary|body-emphasis|muted|black|white}`
- **Background:** `.bg-{primary|secondary|...}`, `.bg-body`, `.bg-body-secondary`, `.bg-body-tertiary`
- **Subtle pairings:** `.bg-{color}-subtle`, `.text-{color}-emphasis`, `.border-{color}-subtle` — designed to combine for tinted callouts
- **Combined `.text-bg-{color}`:** sets foreground + background together with WCAG-aware pairing
- **Border:** `.border`, `.border-{0–5}`, `.border-{color}`, `.border-{top|end|bottom|start}`, `.border-{0–5}` (width)

> **Theme-locked classes to avoid in dark-mode-aware layouts:** `.bg-white`, `.bg-light`, `.bg-dark`, `.text-white`, `.text-black`, `.text-dark`, `.navbar-light`, `.navbar-dark`. Use `.bg-body`, `.text-body`, default `.navbar` instead.

---

## Layout

### Container
`.container` (responsive max-width), `.container-fluid` (always 100%), `.container-{sm|md|lg|xl|xxl}` (fluid below the named breakpoint, fixed above).

### Grid
12-column flexbox grid with optional gutters.

| Class family | Purpose |
|---|---|
| `.row`, `.col` | Wrappers and fluid columns |
| `.col-{1-12}` | Fixed column count (xs+) |
| `.col-{sm-xxl}-{1-12}` | Column count from breakpoint up |
| `.col-{bp}-auto` | Auto-width column |
| `.offset-{bp}-{n}`, `.order-{bp}-{n}` | Offset and reorder |
| `.g-{0-5}`, `.gx-{0-5}`, `.gy-{0-5}` | Gutters |
| `.row-cols-{n}`, `.row-cols-{bp}-{n}` | Equal-width column count |

### Flex / stack
`.d-flex`, `.flex-{row|column|wrap|nowrap}`, `.justify-content-*`, `.align-items-*`, `.align-self-*`, `.gap-{0-5}`. Plus `.hstack` and `.vstack` shortcuts.

### Display
`.d-{none|inline|inline-block|block|grid|table|table-row|table-cell|flex|inline-flex}` with breakpoint suffixes. `.d-print-*` for print. `.visually-hidden` for screen-reader-only content.

### Position
`.position-{static|relative|absolute|fixed|sticky}` with `.top-{0|50|100}`, `.start-{0|50|100}`, etc., and `.translate-middle*` to centre on coordinates.

---

## Components

Canonical list with available size / variant / responsive modifiers. (`{c}` = state colour; `{bp}` = `sm|md|lg|xl|xxl`; `{n}` = step.)

### Forms
| Component | Modifiers |
|---|---|
| Form control | `.form-control`, `.form-control-sm`, `.form-control-lg`, `.form-control-plaintext`, `.form-control-color` |
| Form select | `.form-select`, `.form-select-sm`, `.form-select-lg` |
| Checks & radios | `.form-check`, `.form-check-inline`, `.form-switch`, `.form-check-reverse` |
| Range | `.form-range` |
| Input group | `.input-group`, `.input-group-sm`, `.input-group-lg` |
| Floating labels | `.form-floating` |
| Validation | `.is-valid`, `.is-invalid`, `.was-validated`, `.valid-feedback`, `.invalid-feedback` |

### Components
| Component | Modifiers |
|---|---|
| Accordion | `.accordion`, `.accordion-flush` |
| Alert | `.alert`, `.alert-{c}`, `.alert-dismissible` |
| Badge | `.badge`, `.text-bg-{c}`, `.rounded-pill` |
| Breadcrumb | `.breadcrumb`, `.breadcrumb-item` |
| Button | `.btn`, `.btn-sm`, `.btn-lg`; styles `.btn-{c}`, `.btn-outline-{c}`; `.btn-link`; `.btn-close` |
| Button group | `.btn-group`, `.btn-group-sm`, `.btn-group-lg`, `.btn-group-vertical` |
| Card | `.card`, `.card-body`, `.card-title`, `.card-img-{top\|bottom\|overlay}`, `.card-group` |
| Carousel | `.carousel`, `.carousel-fade`, `.carousel-dark` |
| Collapse | `.collapse`, `.collapsing` |
| Dropdown | `.dropdown`, `.dropdown-menu`, `.dropdown-menu-end`, `.dropdown-menu-{bp}-{start\|end}`, `.dropup`, `.dropend`, `.dropstart` |
| List group | `.list-group`, `.list-group-flush`, `.list-group-numbered`, `.list-group-horizontal`, `.list-group-horizontal-{bp}` |
| Modal | `.modal`, `.modal-sm`, `.modal-lg`, `.modal-xl`, `.modal-fullscreen`, `.modal-fullscreen-{bp}-down`, `.modal-dialog-centered`, `.modal-dialog-scrollable` |
| Navbar | `.navbar`, `.navbar-expand-{bp}`, `.fixed-top`, `.fixed-bottom`, `.sticky-top` |
| Navs & tabs | `.nav`, `.nav-tabs`, `.nav-pills`, `.nav-underline`, `.nav-fill`, `.nav-justified` |
| Offcanvas | `.offcanvas`, `.offcanvas-{start\|end\|top\|bottom}`, `.offcanvas-{bp}` |
| Pagination | `.pagination`, `.pagination-sm`, `.pagination-lg` |
| Placeholder | `.placeholder`, `.placeholder-{xs\|sm\|lg}`, `.placeholder-glow`, `.placeholder-wave` |
| Popover | `data-bs-toggle="popover"` |
| Progress | `.progress`, `.progress-bar`, `.progress-stacked` |
| Scrollspy | `data-bs-spy="scroll"` (behavioural) |
| Spinner | `.spinner-border`, `.spinner-grow`; `.spinner-border-sm`, `.spinner-grow-sm` |
| Toast | `.toast`, `.toast-container`, `.toast-header`, `.toast-body` |
| Tooltip | `data-bs-toggle="tooltip"` |

### Interactivity
Most interactive components are JS-driven via `data-bs-*` attributes. The bundle (`bootstrap.bundle.min.js`) includes Popper for tooltips, popovers, and dropdowns. Programmatic API:

```js
const collapse = bootstrap.Collapse.getOrCreateInstance(el, { toggle: false });
collapse.hide();
```

---

## Utility API

Bootstrap 5.3 ships an *extensible* utility API. You can:

- Use shipped utilities (`.text-*`, `.bg-*`, `.p-*`, `.m-*`, `.d-*`, `.flex-*`, `.gap-*`, etc.)
- Generate your own via the `$utilities` Sass map (build-time only)
- Override CSS variables to retune utilities at runtime

Common utility families:

- **Spacing:** `.m{x|y|t|e|b|s}-{0–5|auto}`, `.p{...}-{0–5}`, `.g{x|y}-{0–5}`, `.gap-{0–5}`
- **Sizing:** `.w-{25|50|75|100|auto}`, `.h-{...}`, `.mw-100`, `.mh-100`, `.vw-100`, `.vh-100`, `.min-vw-100`, `.min-vh-100`
- **Borders & radius:** `.border`, `.border-0`, `.rounded`, `.rounded-{0–5}`, `.rounded-{top|bottom|start|end}`, `.rounded-circle`, `.rounded-pill`
- **Display & flex:** `.d-*`, `.flex-*`, `.justify-content-*`, `.align-items-*`, `.align-self-*`
- **Typography:** `.fs-{1–6}` (responsive), `.fw-{light|normal|medium|semibold|bold|bolder}`, `.fst-{italic|normal}`, `.text-{start|center|end}`, `.text-{lowercase|uppercase|capitalize}`, `.text-decoration-{underline|line-through|none}`, `.lh-{1|sm|base|lg}`, `.font-monospace`
- **Position:** `.position-*`, `.top-*`, `.start-*`, `.translate-middle`, `.translate-middle-{x|y}`
- **Z-index:** `.z-{0|1|2|3|n1}`
- **Object fit:** `.object-fit-{contain|cover|fill|scale|none}` plus breakpoint variants
- **Overflow:** `.overflow-{auto|hidden|visible|scroll|x-*|y-*}`
- **Visibility / interaction:** `.visible`, `.invisible`, `.user-select-{all|auto|none}`, `.pe-{none|auto}`
- **Shadows:** `.shadow`, `.shadow-{none|sm|lg}`
- **Focus ring:** `.focus-ring`, `.focus-ring-{c}`

---

## Accessibility

- Use semantic HTML; Bootstrap classes don't replace correct structure.
- Form inputs need `<label>`s. Use `.visually-hidden` (or `.visually-hidden-focusable`) when a label must be visually omitted.
- All interactive components ship with sensible ARIA defaults (`role`, `aria-expanded`, `aria-current`, etc.). Don't strip them.
- Colour alone never communicates state — pair `--bs-{color}` with an icon, text, or label.
- The colour-mode system respects `prefers-color-scheme` when `data-bs-theme` is unset on `<html>` (use `data-bs-theme="auto"` to opt-in explicitly).
- Focus states use `--bs-focus-ring-*` and the `.focus-ring` utility — don't suppress with `outline: none` without an equivalent replacement.

---

## Theming Bootstrap to a Custom Brand

> ⚠️ **Two-layer trap.** Bootstrap CSS variables live on two layers, and overriding only the `:root` layer leaves several major components looking *exactly the same as default Bootstrap*. Read the whole section before assuming you're done.

### Layer A — `:root` overrides (covers utilities + a subset of components)

```css
:root {
  /* Re-aim the theme colours at brand tokens */
  --bs-primary: #512ABD;
  --bs-primary-rgb: 81, 42, 189;
  --bs-link-color: var(--bs-primary);
  --bs-link-color-rgb: var(--bs-primary-rgb);
  --bs-link-hover-color: #3A1E8A;
  --bs-link-hover-color-rgb: 58, 30, 138;

  /* Subtle/emphasis variants drive .alert-*, .list-group-item-*, .accordion-button */
  --bs-primary-text-emphasis: #3A1E8A;
  --bs-primary-bg-subtle: rgba(81, 42, 189, 0.10);
  --bs-primary-border-subtle: #CDC3FF;

  /* Reshape corners */
  --bs-border-radius: 4px;
  --bs-border-radius-sm: 4px;
  --bs-border-radius-lg: 4px;

  /* Re-type */
  --bs-body-font-family: 'Inter', system-ui, sans-serif;
}
```

This alone makes the following adopt the brand:

- **Utilities:** `.text-primary`, `.bg-primary`, `.text-bg-primary`, `.border-primary`, `.link-primary`
- **Subtle/emphasis-driven components:** `.alert-primary`, `.list-group-item-primary`, `.accordion-button:not(.collapsed)`
- **Body chrome:** `<a>` defaults, body font, default border radius
- **Spinner colour:** `.spinner-border.text-primary` (uses `currentColor`)

### Layer B — component-scoped overrides (required for the rest)

These components define their colour in *per-component* CSS variables on the component class itself (`.btn-primary`, `.pagination`, etc.) using **hard-coded hex values**. `--bs-primary` is never read. Override at the component-class scope:

```css
.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: var(--bs-primary);
  --bs-btn-border-color: var(--bs-primary);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #3A1E8A;
  --bs-btn-hover-border-color: #3A1E8A;
  --bs-btn-focus-shadow-rgb: var(--bs-primary-rgb);
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #3A1E8A;
  --bs-btn-active-border-color: #3A1E8A;
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: var(--bs-primary);
  --bs-btn-disabled-border-color: var(--bs-primary);
}
.btn-outline-primary {
  --bs-btn-color: var(--bs-primary);
  --bs-btn-border-color: var(--bs-primary);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: var(--bs-primary);
  --bs-btn-hover-border-color: var(--bs-primary);
  --bs-btn-active-bg: var(--bs-primary);
  /* …etc */
}
.pagination {
  --bs-pagination-color: var(--bs-primary);
  --bs-pagination-active-bg: var(--bs-primary);
  --bs-pagination-active-border-color: var(--bs-primary);
}
.nav-pills { --bs-nav-pills-link-active-bg: var(--bs-primary); }
.nav-underline { --bs-nav-underline-link-active-color: var(--bs-primary); }
.dropdown-menu { --bs-dropdown-link-active-bg: var(--bs-primary); }
.list-group { --bs-list-group-active-bg: var(--bs-primary); --bs-list-group-active-border-color: var(--bs-primary); }
.accordion {
  --bs-accordion-active-bg: var(--bs-primary-bg-subtle);
  --bs-accordion-active-color: var(--bs-primary-text-emphasis);
  --bs-accordion-btn-focus-border-color: var(--bs-primary);
}
.progress { --bs-progress-bar-bg: var(--bs-primary); }

/* Form-check is a special case: Bootstrap 5.3 hard-codes the hex on the rule
   itself, not via a CSS var. Override the property directly. */
.form-check-input:checked {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

/* Form-range is a worse special case: vendor pseudo-elements (no CSS-var
   hook on the thumb at all). Override per-vendor. */
.form-range::-webkit-slider-thumb        { background-color: var(--bs-primary); }
.form-range::-webkit-slider-thumb:active { background-color: var(--bs-link-hover-color); }
.form-range::-moz-range-thumb            { background-color: var(--bs-primary); }
.form-range::-moz-range-thumb:active     { background-color: var(--bs-link-hover-color); }
/* The :active value must be a *solid* colour, not a low-alpha tint —
   otherwise the thumb goes transparent during drag. */
```

Repeat the button overrides for the other states (`.btn-secondary`, `.btn-success`, `.btn-danger`, `.btn-warning`, `.btn-info`) and their outline variants — each pulls from a different state colour.

**Dark mode:** because the component-scoped overrides reference `var(--bs-primary)` (which itself shifts under `[data-bs-theme="dark"]`), they cascade automatically — you only need to re-alias the `:root` layer for dark.

### Diagnosing "the bridge isn't working"

If a Bootstrap component still looks default-blue after a `:root` override, it's almost certainly Layer B. Inspect the component in DevTools, find which `--bs-{component}-*` variable controls the colour, and add a class-scoped override block.

---

## What Not to Do

- Don't edit `bootstrap.min.css` directly. Override variables in your own sheet.
- Don't use `.bg-white` / `.text-dark` / `.navbar-light` / `.navbar-dark` in dark-mode-aware layouts — they're locked to one mode. Use `.bg-body` / `.text-body` / default `.navbar`.
- Don't update a hex variable without updating its `*-rgb` companion.
- Don't suppress `outline` without providing an equivalent focus indicator.
- Don't fight Bootstrap's specificity with `!important`. Override variables instead, or pick a more specific class.
- Don't compose ad-hoc colour classes when `.text-bg-{c}` is what you want.

---

## What's New in 5.3 (highlights)

- **Color modes** (`data-bs-theme`) and full dark-mode CSS-variable system.
- **Subtle background / text-emphasis / border-subtle** variants per state colour.
- **`.text-bg-{color}`** utility for paired foreground / background.
- **`.focus-ring`** utility and `--bs-focus-ring-*` variables.
- **`.nav-underline`** style.
- **Stacked progress** bars (`.progress-stacked`).
- **CSS variables for grid breakpoints** (informational; not usable in media queries).
- **Form validation tokens** (`--bs-form-valid-*`, `--bs-form-invalid-*`).

---

## References

- Docs: <https://getbootstrap.com/docs/5.3/>
- Customise → CSS variables: <https://getbootstrap.com/docs/5.3/customize/css-variables/>
- Customise → Color modes: <https://getbootstrap.com/docs/5.3/customize/color-modes/>
- Migration to 5.3: <https://getbootstrap.com/docs/5.3/migration/>
