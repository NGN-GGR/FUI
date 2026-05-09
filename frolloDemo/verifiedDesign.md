---
version: alpha
name: Frollo Consent
description: Visual identity for the Frollo CDR consent screen — a three-column desktop layout (dark rail · main · info) anchored by a sticky action bar. Soft 4px corners, deep purple accent on near-white surfaces, weighty headlines.
colors:
  primary: "#512ABD"
  primary-hover: "#854cff"
  primary-emphasis: "#3A1E8A"
  primary-tint: "#EDE9FB"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-alt: "#F7F7F7"
  surface-dark: "#141414"
  surface-dark-elevated: "#292B3D"
  ink: "#393C56"
  ink-muted: "#5F6489"
  ink-subtle: "#8B8FAC"
  on-dark: "#ffffff"
  on-dark-muted: "#bcbcbc"
  border: "#AFB2C7"
  border-strong: "#8E7DFF"
  border-accent: "#CDC3FF"
  success: "#00C696"
  danger: "#E74C4C"
  warning: "#FB6340"
  external-bank-yellow: "#FFCC00"
typography:
  page-title:
    fontFamily: "DM Sans"
    fontSize: 64px
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: -0.02em
  section-label:
    fontFamily: "DM Sans"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.5
  stepper-heading:
    fontFamily: "DM Sans"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-emphasis:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.6
  small:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
  link:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
rounded:
  none: 0px
  sm: 4px
  pill: 999px
  circle: 50%
spacing:
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 24px
  "6": 32px
  "7": 48px
  "8": 64px
components:
  page:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.ink}"
  rail:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    accentColor: "{colors.primary}"
    width: 240px
    padding: "{spacing.5}"
  topbar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border}"
    paddingX: "{spacing.5}"
    paddingY: "{spacing.3}"
  main:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    paddingX: "{spacing.7}"
    paddingY: "{spacing.7}"
  info-column:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.ink}"
    width: 320px
    gap: "{spacing.3}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border}"
    borderRadius: "{rounded.sm}"
  page-title:
    color: "{colors.ink}"
    typography: "{typography.page-title}"
  section-label:
    color: "{colors.ink}"
    typography: "{typography.section-label}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    hoverBackgroundColor: "{colors.primary-hover}"
    borderRadius: "{rounded.pill}"
    paddingX: "{spacing.5}"
    typography: "{typography.button}"
  button-outline-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink-muted}"
    borderColor: "{colors.ink-muted}"
    hoverBackgroundColor: "{colors.ink-muted}"
    hoverTextColor: "{colors.on-primary}"
    borderRadius: "{rounded.pill}"
    paddingX: "{spacing.5}"
    typography: "{typography.button}"
  button-duration:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    activeBackgroundColor: "{colors.primary}"
    activeTextColor: "{colors.on-primary}"
    borderRadius: "{rounded.pill}"
    paddingX: "{spacing.7}"
    minWidth: 180px
    typography: "{typography.button}"
  link:
    color: "{colors.primary}"
    hoverColor: "{colors.primary-hover}"
    typography: "{typography.link}"
  accordion-button:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    expandedTextColor: "{colors.primary-emphasis}"
    typography: "{typography.section-label}"
  bank-chip:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    logoColor: "{colors.external-bank-yellow}"
    typography: "{typography.body-emphasis}"
  avatar:
    backgroundColor: "{colors.primary-tint}"
    iconColor: "{colors.primary}"
    size: 40px
    borderRadius: "{rounded.circle}"
  stepper-num:
    size: 28px
    borderRadius: "{rounded.circle}"
    borderColor: "{colors.on-dark-muted}"
    textColor: "{colors.on-dark-muted}"
    doneBackgroundColor: "{colors.primary}"
    doneTextColor: "{colors.on-primary}"
    doneBorderColor: "{colors.primary}"
    currentBorderColor: "{colors.on-dark}"
    currentTextColor: "{colors.on-dark}"
    typography: "{typography.small}"
  horizontal-rule:
    color: "{colors.primary}"
    opacity: 0.5
    height: 1px
    marginY: "{spacing.6}"
  action-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border}"
    paddingX: "{spacing.7}"
    paddingY: "{spacing.4}"
---

## Overview

Frollo Consent is a regulated-finance consent screen rendered with the calm of a long-form reading surface and the discipline of a banking app. The brand wants the user to feel they are not being rushed: the page is wide, generous, and quiet, with a single weighty headline ("Your consent:") setting the emotional register and a sticky action bar making the choice obvious without ever shouting. The audience is an adult Australian banking customer mid-flow in a Consumer Data Right handover — they are nervous, scanning for trust signals, and need legibility above all else.

The differentiator is the **dark rail**: a near-black vertical column carrying the brand mark and a vertical stepper, balanced against a near-white reading surface and a soft-grey info column on the right. That tonal split — `surface-dark` next to `surface` next to `surface-alt` — is what the page leans on instead of shadow or gradient.

## Colors

The palette is a single deep purple accent (`primary` `#512ABD`) sitting on a tonal three-step surface system: white `surface`, near-white `surface-alt`, and near-black `surface-dark`. Purple appears only on intent — primary action, links, the accordion glyph, the active stepper node, the brand mark — never as a decorative wash.

| Role | Token | Hex | Where it appears |
|---|---|---|---|
| Brand action | `primary` | `#512ABD` | Continue button, links, active duration pill, expanded accordion glyph (lighter), avatar icon, accordion divider |
| Hover / lift | `primary-hover` | `#854cff` | `primary` on hover (intentionally *lighter* — see Don'ts) |
| Emphasis | `primary-emphasis` | `#3A1E8A` | Expanded accordion header text — derived from `primary`, not in the source palette |
| Accent wash | `primary-tint` | `#EDE9FB` | Avatar background, focus halo basis (10% alpha of primary in CSS) |
| Text on accent | `on-primary` | `#ffffff` | Button label, on-dark text, stepper-done numeral |
| Surface | `surface` | `#ffffff` | Topbar, main column, action bar, cards |
| Surface alt | `surface-alt` | `#F7F7F7` | Page background, right info column |
| Surface dark | `surface-dark` | `#141414` | Left rail |
| Surface dark elevated | `surface-dark-elevated` | `#292B3D` | Reserved for dark-mode card surface (not used on the light screenshot) |
| Body ink | `ink` | `#393C56` | Body text, page title, section labels |
| Muted ink | `ink-muted` | `#5F6489` | Secondary copy, outline-secondary button text/border |
| Subtle ink | `ink-subtle` | `#8B8FAC` | Most-quiet text — meta lines |
| On-dark | `on-dark` | `#ffffff` | Stepper heading, current-step label on the rail |
| On-dark muted | `on-dark-muted` | `#bcbcbc` | Future-step labels and ring on the rail |
| Border | `border` | `#AFB2C7` | Card border, topbar bottom rule, action-bar top rule |
| Border strong | `border-strong` | `#8E7DFF` | Reserved for focus-ring tint |
| Border accent | `border-accent` | `#CDC3FF` | Light-purple border on accent-tinted surfaces |
| Success | `success` | `#00C696` | Reserved (not surfaced on this screen) |
| Danger | `danger` | `#E74C4C` | Reserved (not surfaced on this screen) |
| Warning | `warning` | `#FB6340` | Reserved (not surfaced on this screen) |
| External logo | `external-bank-yellow` | `#FFCC00` | CommBank diamond logo only — third-party brand colour, never used elsewhere |

All foreground/background pairs in the components block clear WCAG AA for normal text:

- `ink` on `surface` ≈ 10.6:1
- `ink-muted` on `surface` ≈ 5.5:1
- `on-primary` on `primary` ≈ 7.6:1
- `on-dark` on `surface-dark` ≈ 18.5:1
- `primary` on `surface` ≈ 7.5:1

## Typography

The page uses a two-family system. **DM Sans** (with `'Forma DJR Text'` as the licensed first-choice in the project's CSS) carries every heading and label — its slightly geometric, slightly humanist character suits a finance brand that wants to feel modern but not cold. **Inter** (with `'Calibri'` as the Windows-system first-choice) carries body copy and link/button labels — chosen for legibility at 16px on long consent paragraphs.

Hierarchy is deliberately wide: the page-title at 64px / weight 900 is the only heading on the page, so it can pull the eye without competing with `h2`–`h6`. Section labels then drop straight to 18px weight 600 — there is no in-between scale, which is the point: the page is one decision, not a long taxonomy.

| Role | Family | Size | Weight | Tracking | Used on |
|---|---|---|---|---|---|
| `page-title` | DM Sans | 64px (clamp 40–64) | 900 | -0.02em | "Your consent:" |
| `section-label` | DM Sans | 18px | 600 | normal | "How long can your data be accessed?", "What we will collect and share:", "Who will collect and use your data:" |
| `stepper-heading` | DM Sans | 18px | 600 | normal | "Connect your account" on the rail |
| `body` | Inter | 16px | 400 | normal | Body paragraphs, accordion body |
| `body-emphasis` | Inter | 16px | 600 | normal | "Frollo" name in the who-collects card, bank-chip name, info-card link emphasis |
| `small` | Inter | 14px | 400 | normal | Info-column body, stepper numerals |
| `button` | Inter | 16px | 500 | normal | All button labels |
| `link` | Inter | 16px | 500 | normal | "Back", "1 supporting party", "cdr.gov.au", regulator references |

Body line-height is 1.6 — generous for the long compliance paragraphs the screen has to carry. Heading line-height is 1.1 to keep the title vertically tight.

## Layout

The desktop layout is a **CSS Grid shell** with three columns and three rows.

- **Columns:** `240px | 1fr | 320px` — fixed dark rail, fluid main column, fixed info column.
- **Rows:** `auto | 1fr | auto` — topbar, main body, sticky action bar.

The grid is the page. The rail spans rows 1–3, the topbar spans columns 2–3, the main column lives in (col 2, row 2), the action bar is sticky at (col 2, row 3), and the info column spans rows 2–3 in column 3.

Spacing is an 8-point scale (with 4px and 12px steps for fine work) — one of `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`. Page-level chrome (rail padding, topbar padding, action-bar padding) uses `24` and `48`. Inside the main column, vertical rhythm between sections uses `32` (the rule's marginY) and `24` (between a label and its control).

### Responsive

- **≥1200px:** three-column grid as described.
- **768–1199px:** the rail collapses to a 64px icon strip — the brand letterforms hide and the stepper shows numerals only. The info column reflows under the main column as a horizontal row of cards.
- **<768px:** the rail is removed entirely. A horizontal stepper appears between the topbar and the main column. The action bar stacks its buttons full-width.

## Elevation & Depth

Depth is communicated **tonally, not with shadows**. The three surfaces — `surface` (white) / `surface-alt` (warm-cool grey `#F7F7F7`) / `surface-dark` (`#141414`) — sit beside each other in the grid, and that tonal contrast is what carries the visual hierarchy. Cards on `surface-alt` (in the info column) are plain white with a 1px `border` rule; they do not lift.

Hover lift exists on `.work-card` (defined in the project stylesheet but not used on this screen) as a `translateY(-2px)` plus a soft `0 6px 24px rgba(17,20,24,0.06)` shadow. **For the consent screen itself, no element has a resting shadow.** The action bar sits flush against the bottom of the main column with a 1px `border` top rule — depth via line, not blur.

## Shapes

Two corner-radius values, used purposefully:

- **`sm` 4px** — the default for cards, the topbar avatar's parent button (overridden), accordion items, and form controls. Soft enough to feel modern, tight enough to feel engineered.
- **`pill` 999px** — every button on the screen. The primary "Yes, continue to bank" button, the "No, cancel" outline, and each of the three duration toggles ("3 / 6 / 12 Months") are pills. This is the page's strongest shape signature: rectangles for surfaces, pills for actions.
- **`circle` 50%** — the avatar in the topbar and every numeral in both steppers (vertical and horizontal).

The horizontal rule between sections (`<hr class="demo-rule">`) is a 1px solid `primary`-coloured line at 50% opacity, with 32px margin above and below. It is the only purple line on the page that is not text or border.

## Components

### Rail (left column)
Near-black `surface-dark` background. Carries (1) the Frollo brand mark in `primary`, (2) the stepper-heading, (3) the vertical stepper. The rail is `position: sticky`, full viewport height, and only re-flows below 1200px.

### Stepper (vertical, in the rail)
Three steps. Each item is a 28px circle (`stepper-num`) plus a label.
- **Done step:** filled `primary`, white check glyph, `primary` border.
- **Current step:** transparent fill, white border, white numeral, white label.
- **Future step:** transparent fill, `on-dark-muted` border, `on-dark-muted` numeral and label.

### Stepper (horizontal, mobile-only)
Same three nodes laid horizontally with thin 1px connector lines (`border` colour) between them. Visible only `<768px`.

### Topbar
White `surface`, with a 1px `border` bottom rule. Left side: a "← Back" link (`primary` colour) and the bank-chip ("CommBank" with the yellow diamond). Right side: "Help", "About" muted nav links, and a 40px circular `avatar` (primary-tinted background, primary icon).

### Page title
Single occurrence. Uses `page-title` typography in `ink`. Bottom-margin 32px.

### Card
White `surface`, 1px `border`, 4px corner radius, no shadow. Used four times in the info column and once in the main column ("Who will collect and use your data:").

### Duration selector (button group)
Three pill buttons at 180px min-width with 48px horizontal padding. Each is a `button-duration` — `primary` outline + text in the inactive state, solid `primary` fill with `on-primary` text in the active state. The "12 Months" option is checked by default.

### Accordion ("What we will collect and share:")
Flush variant — no outer border, no fill. Each header button uses `primary` text at 600 weight and shows a `+`/`−` chevron in `primary`. When expanded, the header text deepens to `primary-emphasis` (`#3A1E8A`) — the only place this token is used.

### Action bar (sticky bottom)
White `surface` with a 1px `border` top rule. Holds an introductory question ("Do you consent to these terms?" in `body-emphasis`) on the left, then two pill buttons on the right:
- **`button-outline-secondary`** — "No, cancel". Transparent fill, `ink-muted` border and text. Hover fills with `ink-muted` and switches text to `on-primary`.
- **`button-primary`** — "Yes, continue to bank" + an external-link icon. Solid `primary`, `on-primary` text, hover lifts to `primary-hover`.

### Info column (right)
`surface-alt` background. Stack of four small cards — supporting-party count, withdraw-consent reminder, CDR regulator block (with a circular CDR logo glyph in `primary`), and CDR-accreditation number. All copy is `small`. Links inside use the standard `link` style.

### Bank chip (CommBank)
Inline-flex group: a 22px yellow `external-bank-yellow` rotated-square SVG followed by the bank name in `body-emphasis`. The yellow is the only non-Frollo brand colour on the screen and is permitted **only** for the third-party logo glyph.

## Do's and Don'ts

**Do**
- Use `primary` (`#512ABD`) only on intentional, brand-driven elements: the continue action, links, the accordion glyph, the brand mark, and the active stepper node.
- Pair every button as a pill (`rounded.pill`) and every surface as `rounded.sm` (4px). Mixing the two on the same component breaks the rhythm.
- Lead with the tonal split (white / off-white / near-black) for hierarchy. Reach for borders before reaching for shadow.
- Use `primary-emphasis` (`#3A1E8A`) only for the expanded-accordion header. It is a derived token and earns its place through the open/closed state contrast.
- Treat `external-bank-yellow` (`#FFCC00`) as belonging to CommBank, not to Frollo. If a different bank is in scope, swap the glyph and its colour together.
- Keep body copy at 16px / 1.6 line-height. The screen carries dense compliance language — generous leading is the readability budget.

**Don't**
- Don't introduce a fourth surface tone. Three (white, off-white, near-black) is the system.
- Don't darken `primary` for a hover state. The hover token (`primary-hover` `#854cff`) is intentionally *lighter* — accept this even though "darker on hover" is the web's default reflex.
- Don't put `primary` on `surface-dark`. On the rail, the brand mark uses `primary`, but body labels and stepper text must stay in `on-dark` / `on-dark-muted` for AA contrast.
- Don't add resting shadows to cards. Shadow is reserved for hover lift on interactive cards (`.work-card`), and the consent screen has none.
- Don't use `ink-subtle` (`#8B8FAC`) for normal-weight body text — it only clears AA for large text. Reserve it for meta lines.
- Don't swap the headline to a different weight. Page-title is 900; section-label is 600; there is nothing in between, and that absence is the design.
- Don't introduce a second accent colour for emphasis. State colours (`success`, `warning`, `danger`) exist as tokens but are deliberately absent on this screen — the consent flow is a single decision, not a status display.
