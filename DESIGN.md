# Design & Style Rules

The visual and interaction conventions for this project. New pages and changes follow these rules unless there's a specific reason to deviate.

## Source of truth

> **`styles.css` is the source of truth.** It's what the browser reads. This document is a contract you keep aligned via review.
> When you change theme tokens here, update the matching block in `styles.css` in the same change. Mismatch is a bug.
> When the values disagree, **the CSS wins** — fix this doc, not the renderer.

There is no build step that reads this file.

## Token naming convention

- `--<role>` — base value (e.g., `--accent`, `--bg`, `--ink`, `--font-heading`)
- `--<role>-<state>` — variant of a base for a state (e.g., `--accent-dark`, `--accent-tint`, `--accent-ink`)
- `--<role>-<n>` — scale step (e.g., `--space-1`, `--fs-section`)
- `--bs-<role>` — Bootstrap CSS-variable bridge alias (Bootstrap-defined names; we override their values)

## Principles
1. **Bootstrap utilities first.** Reach for custom CSS only when utilities can't express the intent.
2. **Tokens, not literals.** Use CSS custom properties for colour, font, motion, spacing, radius. Never raw hex/rgba/font-family/px values in component rules.
3. **Bridge Bootstrap.** Map `--bs-*` to theme tokens so Bootstrap's own components (`.btn-primary`, `.alert-primary`, badges, `.text-bg-primary`, `.bg-primary`, `.link-primary`, etc.) become theme-aware automatically.
4. **Theme-aware by default.** Anything visual must work in both light and dark themes — never hard-code `#fff` or near-black.
5. **Minimal, professional, generous whitespace.** Clean / minimal direction (per `SPEC.md`).
6. **No frameworks, no build step.** Vanilla JS only. No npm, no bundler, no jQuery, no React/Vue (per `CLAUDE.md`).
7. **NO Tailwind utility classes** in HTML or component class attributes (`flex`, `bg-white`, `p-4`).
8. **NO inline styles.** Avoid `<div style="...">` except where dynamically set by JS.
9. **Structure:** Keep HTML clean; styles live in separate `.css` files.
10. **DO NOT overwrite Bootstrap CSS files** — change the Bootstrap variables that are intended to be updated, or write custom CSS to apply to an added class name on the element.

---

## Theme — `frollo`

**Identity:** Friendly, conventional, business-trust. Soft corners, deep purple accent, generous reading rhythm, weighty headlines.

The theme tokens live on `:root` (light mode) and `[data-theme="dark"]` (dark mode) in `styles.css`.

### Colors
| Token | Light | Dark | Use |
|---|---|---|---|
| `--accent` | `#512ABD` | `#B18BFF` | Primary actions, links, focus states |
| `--accent-dark` | `#3A1E8A` | `#9B6DFF` | Accent hover/active state |
| `--accent-tint` | `rgba(81,42,189,0.10)` | `rgba(177,139,255,0.18)` | Icon backgrounds, focus halos |
| `--accent-ink` | `#ffffff` | `#ffffff` | Text drawn on `--accent` (e.g., button labels) |
| `--secondary` | `#6c757d` | `#adb5bd` | Muted UI chrome, secondary fills |

### Semantic state colors
| Token | Value (light) | Use |
|---|---|---|
| `--success` | `#198754` | Validation success, positive alerts |
| `--warning` | `#ffc107` | Cautionary alerts |
| `--danger` | `#dc3545` | Errors, destructive actions, validation failures |
| `--info` | `#0dcaf0` | Informational alerts |
| `--valid` | `var(--success)` | Form-control valid state |
| `--invalid` | `var(--danger)` | Form-control invalid state |

(Each has a matching `*-tint` for backgrounds. Dark-mode values inherit from light unless explicitly overridden.)

### Typography
| Token | Value |
|---|---|
| `--font-heading` | `'Forma DJR Text', 'DM Sans', system-ui, sans-serif` ¹ |
| `--font-body` | `'Calibri', 'Inter', system-ui, sans-serif` ² |
| Weights loaded | 400, 500, 700, 900 |
| `--weight-section` | `700` |
| `--weight-body` | `400` |
| `--weight-label` | `500` |
| `--heading-tracking` | `-0.02em` |
| `--heading-transform` | `none` |
| `--body-line-height` | `1.6` |
| `--label-tracking` | `normal` |
| `--label-transform` | `none` |

¹ `'Forma DJR Text'` is a commercial DJR Foundry font and must be self-hosted to render. Without it, the chain falls through to `DM Sans` (loaded from Google Fonts).
² `'Calibri'` is a Microsoft system font (Windows). On other OSes the chain falls through to `'Inter'` (loaded from Google Fonts), then to the platform sans.

### Shape
| Token | Value | Notes |
|---|---|---|
| `--radius` | `4px` | Soft corners across buttons, cards, inputs, thumbs |
| `--btn-weight` | `500` | Button labels (white-on-purple has good contrast at this weight) |
| `--service-icon-bg` | `var(--accent-tint)` | Light-purple wash behind the accent glyph |

### Focus
| Token | Value | Use |
|---|---|---|
| `--focus-ring-width` | `0.2rem` | Width of focus halo |
| `--focus-ring-color` | `var(--accent-tint)` | Color of focus halo (theme-tinted) |

---

## Bootstrap CSS-variable bridge

Bootstrap's own components use CSS variables, but they're spread across **two layers**, and only one of them is reachable from `:root`:

### Layer A — `:root` theme tokens (bridge from `:root`)

Used by Bootstrap's *utility classes* and a few component families that read straight from theme tokens.

| Bootstrap variable | Aliased to | Affected classes |
|---|---|---|
| `--bs-primary` / `-rgb` | `--accent` / `--accent-rgb` | `.text-primary`, `.bg-primary`, `.text-bg-primary`, `.border-primary`, `.link-primary` |
| `--bs-secondary/success/danger/warning/info` / `-rgb` | semantic state tokens | matching `.text-*`, `.bg-*`, `.border-*` utilities |
| `--bs-link-color` / `-hover-color` / `-rgb` companions | `--accent` / `--accent-dark` / rgb | `<a>` defaults |
| `--bs-border-radius` / `-sm` / `-lg` | `--radius` | every component that reads it |
| `--bs-body-font-family` / `-weight` / `-line-height` | type tokens | `<body>` defaults |
| `--bs-form-valid-color` / `-border-color` / `-invalid-*` | `--valid` / `--invalid` | `.is-valid` / `.is-invalid` |
| `--bs-focus-ring-color` / `-width` | `--focus-ring-color` / `-width` | `.focus-ring`, form focus |
| `--bs-{c}-text-emphasis` / `-bg-subtle` / `-border-subtle` | `--accent-emphasis` / `--accent-tint` / etc. | `.alert-{c}`, `.list-group-item-{c}`, `.accordion-button:not(.collapsed)` |

### Layer B — component-scoped tokens (need `.component {}` overrides)

Bootstrap declares many component variables on the *component class itself* with **hard-coded hex values**, ignoring `--bs-primary`. Overriding `--bs-primary` on `:root` does nothing for these. Each one needs a class-scoped override:

| Component | Pattern |
|---|---|
| Solid buttons | `.btn-primary { --bs-btn-bg: var(--accent); --bs-btn-hover-bg: var(--accent-dark); … }` (and the same for `secondary/success/danger/warning/info`) |
| Outline buttons | `.btn-outline-primary { --bs-btn-color: var(--accent); --bs-btn-hover-bg: var(--accent); … }` |
| Pagination | `.pagination { --bs-pagination-active-bg: var(--accent); --bs-pagination-color: var(--accent); … }` |
| Nav-pills active | `.nav-pills { --bs-nav-pills-link-active-bg: var(--accent); }` |
| Nav-underline active | `.nav-underline { --bs-nav-underline-link-active-color: var(--accent); }` + an explicit `border-bottom-color` (the underline itself reads from a different selector) |
| Dropdown active item | `.dropdown-menu { --bs-dropdown-link-active-bg: var(--accent); }` |
| List group active | `.list-group { --bs-list-group-active-bg: var(--accent); … }` |
| Accordion expanded | `.accordion { --bs-accordion-active-bg: var(--accent-tint); --bs-accordion-active-color: var(--accent-emphasis); … }` |
| Form-check `:checked` | `.form-check-input:checked { background-color: var(--accent); border-color: var(--accent); }` (Bootstrap 5.3 hard-codes the hex on the rule itself, not via a CSS var) |
| Form-range thumb | `.form-range::-webkit-slider-thumb { background-color: var(--accent); }` plus `::-moz-range-thumb` and the `:active` / `:focus` variants. Vendor pseudo-elements have no CSS-var hook — the colour is hard-coded on each one in Bootstrap's source. |
| Progress bar | `.progress { --bs-progress-bar-bg: var(--accent); }` |

All of the above live in `styles.css` section **3. Bootstrap component-scoped overrides**.

### How to extend

1. When you reach for a Bootstrap component that doesn't visibly pick up the brand, the cause is almost always Layer B. Find the relevant `--bs-{component}-*` variables in Bootstrap's docs (or DevTools) and add a class-scoped override block in section 3 of `styles.css`.
2. `*-rgb` tokens must always be the integer-RGB form of their hex counterpart and updated alongside it.
3. Don't override on `:root` what should be overridden on a component class — it'll silently do nothing.

---

## Theme-Neutral Tokens

These describe the *page surface* and don't ride on any theme — they always exist on `:root` (light) and `[data-theme="dark"]` (dark).

### Surface
| Token | Light | Dark | Use |
|---|---|---|---|
| `--ink` | `#111418` | `#e6e8ec` | Primary body text |
| `--muted` | `#5b636e` | `#9aa3b1` | Secondary text |
| `--bg` | `#ffffff` | `#0f1216` | Page background |
| `--bg-alt` | `#f7f8fa` | `#161b22` | Alternating section backgrounds |
| `--border` | `#e6e8ec` | `#262c36` | Card / divider borders |
| `--card-bg` | `#ffffff` | `#161b22` | Card / quote surfaces |

### Spacing scale (8px base)
| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `24px` |
| `--space-6` | `32px` |
| `--space-7` | `48px` |
| `--space-8` | `64px` |

### Typography size scale
| Token | Value |
|---|---|
| `--fs-section` | `clamp(28px, 3vw, 36px)` |
| `--fs-lead` | `1.15rem` |
| `--fs-body` | `1rem` |
| `--fs-small` | `0.875rem` |

### Motion
| Token | Value | Use |
|---|---|---|
| `--motion-fast` | `150ms` | Hover affordances, fast state transitions |
| `--motion-base` | `200ms` | Default state changes (theme fade, nav border) |
| `--motion-slow` | `300ms` | Reserved upper bound — don't exceed |
| `--motion-exit` | `250ms` | Exit animations (typically `--motion-base + 50ms`) |
| `--easing-standard` | `ease` | Default easing curve |

When a new theme-neutral color is genuinely needed, add it to both the `:root` block and the `[data-theme="dark"]` block in `styles.css` — never one without the other.

---

## Instance Theming (light / dark)

Two attributes on `<html>` drive light / dark theme:
- `data-theme` — drives our custom CSS variables
- `data-bs-theme` — drives Bootstrap 5.3's component variants (navbar, cards, form-control, etc.)

A small inline `<script>` in `<head>` sets both before paint, using `localStorage.theme` then falling back to `prefers-color-scheme`. The JS toggle persists user choice; system-preference changes are honored only when there is no stored choice.

**Rule:** Don't add components that require theme-locked Bootstrap classes — see allowlist below.

### Bootstrap utility allowlist / denylist

| Use | Don't use | Why |
|---|---|---|
| `bg-body`, `bg-body-secondary`, `bg-body-tertiary` | `bg-white`, `bg-light`, `bg-dark` | Theme-locked, breaks dark mode |
| `text-body`, `text-body-secondary`, `text-body-emphasis` | `text-dark`, `text-black`, `text-white` | Same |
| Default `.navbar` (no light/dark variant) | `.navbar-light`, `.navbar-dark` | Bootstrap 5.3 derives from `data-bs-theme` |
| `.text-bg-primary` (uses bridged `--bs-primary`) | Hand-rolled `bg-blue` etc. | Aliased via the bridge |
| `.btn-primary`, `.btn-outline-primary` (theme-aware via bridge) | Custom `.btn-blue` / `.btn-purple` | One-stop primary |
| `.alert-primary/-success/-danger/...` | Hand-rolled alert styles | Bridged colors flow through |
| `.is-valid` / `.is-invalid` with bridged form tokens | Custom red/green inline styles | Theme-aware validation |

---

## Common layout & rhythm

### Spacing
- Use the `--space-*` scale tokens (no raw px values in component rules).
- **Section vertical padding:** `var(--space-8)` (64px) desktop, `var(--space-7)` (48px) mobile.
- **Card padding:** `var(--space-5)` (24px).
- **Grid gutter:** Bootstrap `g-4` (1.5rem) for card/service rows; `g-5` for the two-column About layout.
- **Between section title and content:** `var(--space-2)` to `var(--space-5)` (8–24px).

### Typography scale
- **Section title:** `var(--fs-section)`, weight `var(--weight-section)`, transform `var(--heading-transform)`.
- **Body:** `var(--fs-body)`, color `var(--ink)`, line-height `var(--body-line-height)`.
- **Subtitles / supporting text:** `var(--fs-lead)`, color `var(--muted)`, max-width ~640px.
- **Labels (form):** weight `var(--weight-label)`, tracking `var(--label-tracking)`, transform `var(--label-transform)`.

Avoid more than two font weights in a single section.

### Iconography
- **Source:** Bootstrap Icons via CDN. Don't introduce a second icon set.
- **Sizing:** Inherits font-size from the parent unless an explicit size is required.

### Interaction
- **Smooth scroll** for in-page anchors (`scroll-behavior: smooth`).
- **Mobile nav** auto-collapses after an anchor link is tapped.
- **Theme transitions** fade `body` background and color over `var(--motion-base)`; do not animate everything.
- **Form validation** runs on `blur`, plus on `input` for fields already invalid (so errors clear as the user fixes them).

### Accessibility
- All interactive elements have visible focus via `--focus-ring-width` + `--focus-ring-color`.
- Buttons that toggle state expose `aria-pressed` and an `aria-label`.
- Form inputs have associated `<label>`s. Validation errors are inline and screen-reader-readable (Bootstrap `.invalid-feedback`).
- Decorative-only graphics carry `aria-hidden="true"`.
- Maintain WCAG AA contrast in both light and dark themes. When introducing a new color, check against `var(--bg)` and `var(--bg-alt)` in both modes.

---

## Light/dark QA checklist

Every component must be verified in both themes before merge:

| Theme | How to set |
|---|---|
| Light | `data-theme="light"` (or unset; defaults to system preference) |
| Dark | `data-theme="dark"` |

**Pre-merge checklist for a component change:**
- [ ] Renders correctly in both light and dark
- [ ] Uses tokens (no raw hex/rgba/font literals introduced)
- [ ] If a `--bs-*` bridge is missing for a Bootstrap component being used, adds it
- [ ] AA contrast verified against `--bg` and `--bg-alt` in both themes

---

## Layout
- **Container:** Bootstrap `.container` (no full-bleed sections by default).
- **Grids:** Bootstrap row/col. The number of contained columns CAN NOT exceed 12 (but does not need to use all 12 columns). e.g.: three-column rows use `col-md-4`. Always verify reflow at different viewport sizes.
- **Container queries:** Components may use them for responsive outcomes based on container size rather than viewport — e.g. a card grid that re-flows based on its container width regardless of overall viewport size.

| Component | Size / variant classes |
|---|---|
| Container | `.container`, `.container-fluid`, `.container-{sm\|md\|lg\|xl\|xxl}` |
| Grid | `.row`, `.col`, `.col-{n}`, `.col-{sm\|md\|lg\|xl\|xxl}-{n}`, `.col-{bp}-auto` |
| Gutters | `.g-{0–5}`, `.gx-{0–5}`, `.gy-{0–5}` |
| Stack | `.hstack`, `.vstack` (no size variants; spacing via `.gap-{0–5}`) |

### Responsive behavior
- Always create with responsiveness in mind.
- Either allow page layout components to reflow, or have a show/hide strategy for different viewports.
- Always test new components and layout in different viewport sizes.

### Depth and elevation
| Level | Usage | Shadow |
|---|---|---|
| 0 | Background | none |
| 1 | Cards, panels | `0 1px 3px rgba(0,0,0,0.2)` |
| 2 | Modals, popovers | `0 8px 24px rgba(0,0,0,0.3)` |

---

## Bootstrap 5.3 Component Reference

Canonical list of components and size / responsive variants available in Bootstrap 5.3.3 (the version pinned via CDN). Use this as a reference when reaching for a Bootstrap component — prefer these over rolling custom UI.

All components consume theme tokens via the `--bs-*` bridge (see Bootstrap CSS-variable bridge above).

Use native HTML when possible — with Bootstrap contextual classes applied. Try to use Bootstrap styling where possible; if not, use overrides to Bootstrap class styling. Any custom components are to be created with their styles co-located. Style changes are applied to the component class — NOT to individual instances.

| Component | Size / variant classes |
|---|---|
| Typography | Headings `.h1`–`.h6`, display `.display-1`–`.display-6`, `.lead`, `.small` |
| Images | `.img-fluid`, `.img-thumbnail` |
| Tables | `.table`, `.table-sm`; responsive: `.table-responsive`, `.table-responsive-{sm\|md\|lg\|xl\|xxl}` |
| Figures | `.figure`, `.figure-img`, `.figure-caption` |

### Forms

| Component | Size / variant classes |
|---|---|
| Form control | `.form-control`, `.form-control-sm`, `.form-control-lg`, `.form-control-plaintext`, `.form-control-color` |
| Form select | `.form-select`, `.form-select-sm`, `.form-select-lg` |
| Checks & radios | `.form-check`, `.form-check-inline`, `.form-switch`, `.form-check-reverse` |
| Range | `.form-range` |
| Input group | `.input-group`, `.input-group-sm`, `.input-group-lg` |
| Floating labels | `.form-floating` |
| Validation | `.is-valid`, `.is-invalid`, `.was-validated`, `.valid-feedback`, `.invalid-feedback` |

- Bootstrap form-control with `border-radius: var(--radius)` (via `--bs-border-radius` bridge).
- Focus ring: `var(--accent)` border + `var(--focus-ring-width)` × `var(--focus-ring-color)` halo (bridged to `--bs-focus-ring-*`).
- Validation uses Bootstrap's `.is-valid` / `.is-invalid` classes; colors come from the bridged `--bs-form-valid-*` / `--bs-form-invalid-*` tokens, so they shift with theme.
- Validation occurs on value change (possibly debounced) or on blur.
- Validation issues only show on form controls that have been touched / dirty.
- Validation states control disabled state of submit buttons etc.
- Fieldsets wrap groups of related form controls (e.g. address details).
- Fieldsets MUST contain a `<legend>` for accessibility (can be hidden via CSS but must exist for screen readers).

### Components

| Component | Valid size / variant classes |
|---|---|
| Accordion | `.accordion`, `.accordion-flush` |
| Alerts | `.alert`, `.alert-{primary\|secondary\|success\|danger\|warning\|info\|light\|dark}`, `.alert-dismissible` |
| Badge | `.badge`, `.text-bg-{color}`, `.rounded-pill` |
| Breadcrumb | `.breadcrumb`, `.breadcrumb-item` |
| Buttons | `.btn`, `.btn-sm`, `.btn-lg`; styles `.btn-{color}`, `.btn-outline-{color}`; `.btn-link` |
| Button group | `.btn-group`, `.btn-group-sm`, `.btn-group-lg`, `.btn-group-vertical` |
| Card | `.card`, `.card-body`, `.card-title`, `.card-img-{top\|bottom\|overlay}`, `.card-group` |
| Carousel | `.carousel`, `.carousel-fade`, `.carousel-dark` |
| Close button | `.btn-close`, `.btn-close-white` |
| Collapse | `.collapse`, `.collapsing` |
| Dropdowns | `.dropdown`, `.dropdown-menu`; alignment + direction modifiers |
| List group | `.list-group`, `.list-group-flush`, `.list-group-numbered`, `.list-group-horizontal` |
| Modal | `.modal`, `.modal-sm/lg/xl`, `.modal-fullscreen`, `.modal-dialog-centered/scrollable` |
| Navbar | `.navbar`, `.navbar-expand-{sm\|md\|lg\|xl\|xxl}`, `.fixed-top/bottom`, `.sticky-top` |
| Navs & tabs | `.nav`, `.nav-tabs`, `.nav-pills`, `.nav-underline`, `.nav-fill`, `.nav-justified` |
| Offcanvas | `.offcanvas`, `.offcanvas-{start\|end\|top\|bottom}`, responsive variants |
| Pagination | `.pagination`, `.pagination-sm`, `.pagination-lg` |
| Placeholders | `.placeholder`, size variants, `.placeholder-glow`, `.placeholder-wave` |
| Popovers | `data-bs-toggle="popover"` |
| Progress | `.progress`, `.progress-bar`, `.progress-stacked` |
| Scrollspy | `data-bs-spy="scroll"` (behavioral) |
| Spinners | `.spinner-border`, `.spinner-grow`; `-sm` modifiers |
| Toasts | `.toast`, `.toast-container`, `.toast-header`, `.toast-body` |
| Tooltips | `data-bs-toggle="tooltip"` |

### Component-specific notes
- **Accordions** show / hide extra details. Header area + content area. Aria attributes on the trigger button. Can be grouped; multiple may be open at once depending on configuration.
- **Alerts** indicate inline information. Coloured background with an accent left border. Severity icon in the body.
- **Badges** indicate counts of associated items. Most commonly on buttons or tabs.
- **Breadcrumbs** are page-structure navigation (not user-journey). Only use when the page is more than two levels deep. May be concatenated to show first / last with an expanding middle.
- **Buttons** are the primary action trigger. Indicate hover / pressed / focused states. Have a tab index — usable from the keyboard. Can have icon-only / icon-before-text / icon-after-text. Icon-only buttons need a tooltip on hover. Disabled state is visually obvious.
  - Add a base class `.btn` to a HTML button that sets up basic styles such as padding and content alignment. By default, `.btn` controls have a transparent border and background color, and lack any explicit focus and hover styles.
  - Primary: `.btn .btn-accent` — `var(--accent)` background, `var(--accent-ink)` text, `var(--btn-weight)` weight, `var(--radius)` corners.
  - Hover/focus: shifts to `var(--accent-dark)`.
  - Reserve `.btn-accent` for the page's primary actions (primary CTA, form submit). Don't sprinkle.
  - Primary buttons should only be used once in a given context / container.
  - Button labels MUST be verbs (e.g. *Continue*, *Save*, *Update*, *Withdraw*).
- **Button groups** present a number of buttons in a single context. Each button uses standard rules; the size class is added to the parent element.
- **Cards** are presentational containers without semantic meaning (like a div). Use a header / body / footer pattern when content has structure. 1px `var(--border)` outline, `var(--radius)` corners, `var(--card-bg)` surface. Work cards lift on hover (`translateY(-2px)` + soft shadow). Other cards are static.
- **Figures:** consist of `<img>` and `<figcaption>`. Both elements and the host `<figure>` can be styled. The figcaption describes the image and acts as a heading. The figcaption MUST be either the first or last child.
- **Headings:** respect the hierarchy (don't skip levels for visual styling).
- **Images:** must have `alt` text representing the *intent* of the image (NOT a textual version of the content — e.g. NOT 'logo'). Should have explicit `width`/`height` to prevent DOM reflow. Should be lazy-loaded (except for brand/logo images needed on page load).
- **Links:** in-content links use `.link-accent` — accent-coloured, weight 500, underline on hover only.
  - MUST contain a valid `href` attribute.
  - MUST contain a `target` attribute when leaving the document.
  - DO NOT use `<a>` to trigger functions (e.g. `href="javascript:void"`) — use a `<button>`.
  - Can use an `<a>` when navigating to a different section/tab on the same document.
- **Modals:**
  - Size class variants apply max-height to the entire modal.
  - Use the common header / body / footer structure.
  - The header has the heading (usually H3) on the left and a close button on the right.
  - The body has the modal content — overflow lives on the body, not the entire modal, so header and footer stay visible.
  - The footer has a primary action button on the right, secondary actions to the left of the primary, and a cancel button furthest left.
  - Clicking outside the modal may or may not close it — depending on instance needs.
  - DO NOT trigger another modal from within a visible modal.
- **Navigation:** primary nav highlights the active page; breadcrumbs for nested layers; secondary nav for tabs / sub-sections; tertiary nav (anchors) within a single page.
- **Section:** use `<section>` HTML elements; sections MUST have a heading (H element of appropriate scale), which can be hidden with CSS if not desired visible but must exist for screen readers.
- **Tables:** distinct `<th>` styling; optional zebra-striping on rows; hover state on rows; restore-focus blur after editing a cell; visible borders, padding on `<td>`; `<caption>` when a heading is required; accessibility — `scope`, `colspan`, `rowspan` correctly applied.

### Notes
- **No size class ≠ unstylable.** Components without `-sm`/`-lg` modifiers (alerts, badges, popovers, etc.) still adapt via parent font-size, padding utilities (`.py-*`, `.px-*`), or a custom class.
- **Responsive `-{breakpoint}` suffixes** (e.g., `.navbar-expand-md`, `.offcanvas-lg`, `.modal-fullscreen-md-down`) toggle the variant at and above (or below, where the suffix is `-down`) the named breakpoint: `sm` ≥ 576px, `md` ≥ 768px, `lg` ≥ 992px, `xl` ≥ 1200px, `xxl` ≥ 1400px.
- **Color variants** (`.btn-primary`, `.alert-danger`, etc.) are not size variants. Pull from the standard Bootstrap palette and prefer the project accent (`var(--accent)`) for primary actions — the bridge ensures `.btn-primary` already does this.

---

## Do's and don'ts
**Do:**
- Verify every component visually in both light and dark.
- Keep animations subtle (≤`var(--motion-slow)`).
- Reduce timing of *exit* animations vs *entry* animations (e.g. entry `--motion-base`, exit `--motion-exit`).
- Test regularly to ensure customisations don't have unintended side-effects.
- Use the `--bs-*` bridge for any Bootstrap component you reach for; don't hand-roll a theme override that the bridge could provide.

**Don't:**
- Don't use heavy shadows on surfaces (prefer borders).
- Don't mix warm and cool accents in the same view.
- Don't write CSS that hard-codes a colour or font — always read tokens.
- Don't use inline `style=` attributes (except where dynamically set by JS).
- Don't use raw color, font, motion, or pixel literals in component rules — always go through a token.
- Don't use theme-locked Bootstrap classes (`bg-white`, `text-dark`, `navbar-light`, `navbar-dark`).
- Don't add new dependencies, npm, or build tools.
- Don't use JavaScript frameworks. Vanilla JS only.
- Don't use animation for animation's sake. Transitions soften state changes, not entertain.




TypeScript Best Practices
- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the any type; use unknown when type is uncertain

Angular Best Practices
- Always use standalone components over NgModules
- Don't use explicit standalone: true (it is implied by default)
- Use signals for state management
- Implement lazy loading for feature routes
- Use NgOptimizedImage for all static images.

Components
- Keep components small and focused on a single responsibility
- Use input() and output() functions instead of decorators
- Use computed() for derived state
- Set changeDetection: ChangeDetectionStrategy.OnPush in @Component decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use ngClass, use class bindings instead
- DO NOT use ngStyle, use style bindings instead

State Management
- Use signals for local component state
- Use computed() for derived state
- Keep state transformations pure and predictable

Templates
- Keep templates simple and avoid complex logic
- Use native control flow (@if, @for, @switch) instead of *ngIf, *ngFor, *ngSwitch
- Use the async pipe to handle observables

Services
- Design services around a single responsibility
- Use the providedIn: 'root' option for singleton services
- Use the inject() function instead of constructor injection
