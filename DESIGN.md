---
version: alpha
name: Frollo Web UI
description: Vue 3 component library powering Frollo's financial-wellness products. Brand voice is a confident purple over near-black surfaces; UI is dense with money-context components — connected accounts, transactions, budgets, savings goals — built on Tailwind with CSS-custom-property theming so partner brands can reskin via `--color*` overrides.

colors:
  primary: "#512ABD"
  primary-dark: "#3A1E8A"
  primary-hover: "#854cff"
  primary-tertiary-fade: "#f5f3ff"
  secondary: "#141414"
  tertiary: "#FFFFFF"
  gradient-start: "#D327E7"
  gradient-mid: "#512ABD"
  gradient-end: "#00D19F"
  state-success: "#00C696"
  state-success-bg: "#D8FFF6"
  state-success-new: "#4BF0C8"
  state-error: "#E74C4C"
  state-error-bg: "#FEE0D9"
  state-warning: "#FB6340"
  state-info: "#0DCAF0"
  text-default: "#393C56"
  text-secondary: "#5F6489"
  text-tertiary: "#8B8FAC"
  text-accent: "#CDC3FF"
  text-on-dark: "#FFFFFF"
  background-app: "#F7F7F7"
  background-dark: "#292B3D"
  background-pink: "#FDDBFD"
  background-coral: "#FEE0D9"
  background-sky: "#D4EDF7"
  background-button-secondary: "#E6E1FF"
  border-default: "#AFB2C7"
  border-accent: "#CDC3FF"
  border-strong: "#8E7DFF"
  border-chart-guide: "#C6C7D5"
  grey-base: "#4B4B4B"
  grey-light: "#BCBCBC"
  grey-lightest: "#F5F5F5"
  grey-10: "#F8F8F8"
  grey-20: "#F2F2F2"
  grey-30: "#EEEFF1"
  grey-40: "#E4E4E4"
  grey-60: "#DEE0E3"
  grey-80: "#C9C9C9"
  grey-100: "#C8CBD0"


#semantic colors
border-ggr: "{colors.grey-40}"


typography:
  display:
    fontFamily: "Forma DJR Text"
    fontSize: "42px"
    lineHeight: "46px"
    letterSpacing: "0.84px"
    fontWeight: 400
  h1:
    fontFamily: "Forma DJR Text"
    fontSize: "42px"
    lineHeight: "46px"
    letterSpacing: "0.84px"
    fontWeight: 400
  h2:
    fontFamily: "Forma DJR Text"
    fontSize: "20px"
    lineHeight: "26px"
    letterSpacing: "0.4px"
    fontWeight: 500
  h3:
    fontFamily: "Forma DJR Text"
    fontSize: "20px"
    lineHeight: "26px"
    letterSpacing: "0.4px"
    fontWeight: 500
  h4:
    fontFamily: "Forma DJR Text"
    fontSize: "20px"
    lineHeight: "26px"
    letterSpacing: "0.4px"
    fontWeight: 400
  h5:
    fontFamily: "Forma DJR Text"
    fontSize: "20px"
    lineHeight: "26px"
    letterSpacing: "0.4px"
    fontWeight: 400
  h6:
    fontFamily: "Forma DJR Text"
    fontSize: "15px"
    lineHeight: "19px"
    letterSpacing: "0.4px"
    fontWeight: 400
  body-lg:
    fontFamily: "Forma DJR Text"
    fontSize: "20px"
    lineHeight: "26px"
    letterSpacing: "0.4px"
    fontWeight: 400
  body:
    fontFamily: "Forma DJR Text"
    fontSize: "16px"
    lineHeight: "19px"
    letterSpacing: "0.45px"
    fontWeight: 400
  body-sm:
    fontFamily: "Forma DJR Text"
    fontSize: "15px"
    lineHeight: "19px"
    letterSpacing: "0.45px"
    fontWeight: 400
  caption:
    fontFamily: "Forma DJR Text"
    fontSize: "14px"
    lineHeight: "19px"
    letterSpacing: "0.45px"
    fontWeight: 400
  micro:
    fontFamily: "Forma DJR Text"
    fontSize: "12px"
    lineHeight: "19px"
    letterSpacing: "0.4px"
    fontWeight: 400
  label-emphasis:
    fontFamily: "Forma DJR Text"
    fontSize: "20px"
    lineHeight: "26px"
    letterSpacing: "0.4px"
    fontWeight: 500

rounded:
  none: "0px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "20px"
  full: "9999px"

spacing:
  "0": "0px"
  px: "1px"
  "0.5": "2px"
  "1": "4px"
  "1.5": "6px"
  "2": "8px"
  "2.5": "10px"
  "3": "12px"
  "3.5": "14px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "7": "28px"
  "8": "32px"
  "9": "36px"
  "10": "40px"
  "12": "48px"
  "14": "56px"
  "16": "64px"
  "20": "80px"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.tertiary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "8px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.tertiary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "8px 28px"
  button-secondary:
    backgroundColor: "{colors.background-button-secondary}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "8px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.border-accent}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "8px 28px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "8px 28px"
  button-tertiary-hover:
    backgroundColor: "{colors.primary-tertiary-fade}"
    textColor: "{colors.primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "8px 28px"
  button-quaternary:
    backgroundColor: "{colors.border-accent}"
    textColor: "{colors.background-dark}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "8px 28px"
  button-success:
    backgroundColor: "{colors.state-success}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "8px 28px"
  button-error:
    backgroundColor: "{colors.state-error}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "8px 28px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0px"
  card:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "16px"
  card-header:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.h3}"
    rounded: "{rounded.lg}"
    padding: "16px"
  modal:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "24px"
    width: "750px"
  modal-with-banner:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "24px"
    width: "800px"
  alert-success:
    backgroundColor: "{colors.state-success-bg}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  alert-error:
    backgroundColor: "{colors.state-error-bg}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  alert-warning:
    backgroundColor: "{colors.state-warning}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  alert-info:
    backgroundColor: "{colors.background-sky}"
    textColor: "{colors.text-default}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  input:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    height: "40px"
  input-placeholder:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    height: "40px"
  input-error:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.secondary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    height: "40px"
  dropdown:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  checkbox:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    size: "20px"
  checkbox-checked:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.tertiary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    size: "20px"
  switch:
    backgroundColor: "{colors.grey-40}"
    textColor: "{colors.text-default}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    height: "24px"
  switch-on:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.tertiary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    height: "24px"
  tag-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.tertiary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
  tag-secondary:
    backgroundColor: "{colors.background-button-secondary}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
  tag-tertiary:
    backgroundColor: "{colors.background-sky}"
    textColor: "{colors.secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
  tag-quaternary:
    backgroundColor: "{colors.background-coral}"
    textColor: "{colors.secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
  tag-alert:
    backgroundColor: "{colors.state-warning}"
    textColor: "{colors.secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
  tag-success:
    backgroundColor: "{colors.state-success-bg}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
  tag-error:
    backgroundColor: "{colors.state-error}"
    textColor: "{colors.secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
  navigation-menu:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0px 24px"
    height: "72px"
  sidebar-menu:
    backgroundColor: "{colors.background-dark}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "16px"
  table:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
  table-header:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  accordion:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "16px"
  accordion-expanded-header:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary-dark}"
    typography: "{typography.label-emphasis}"
    rounded: "{rounded.lg}"
    padding: "16px"
  toast:
    backgroundColor: "{colors.background-dark}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  popover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "12px"
  drawer:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.text-default}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "24px"
  progress-bar-active:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.full}"
    height: "4px"
  progress-bar-inactive:
    backgroundColor: "{colors.grey-40}"
    rounded: "{rounded.full}"
    height: "4px"
  button-gradient:
    backgroundColor: "{colors.gradient-start}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "8px 28px"
  button-gradient-stop-mid:
    backgroundColor: "{colors.gradient-mid}"
  button-gradient-stop-end:
    backgroundColor: "{colors.gradient-end}"
  bar-chart-active:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  bar-chart-inactive:
    backgroundColor: "{colors.grey-base}"
    rounded: "{rounded.sm}"
  bar-chart-axis:
    backgroundColor: "{colors.background-app}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.micro}"
  chart-axis-guide:
    backgroundColor: "{colors.border-chart-guide}"
    height: "1px"
  divider:
    backgroundColor: "{colors.border-default}"
    height: "1px"
  divider-strong:
    backgroundColor: "{colors.border-strong}"
    height: "2px"
  divider-subtle:
    backgroundColor: "{colors.grey-light}"
    height: "1px"
  page:
    backgroundColor: "{colors.background-app}"
    textColor: "{colors.text-default}"
    typography: "{typography.body}"
  callout-info:
    backgroundColor: "{colors.background-sky}"
    textColor: "{colors.text-default}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  callout-warm:
    backgroundColor: "{colors.background-pink}"
    textColor: "{colors.text-default}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  status-info:
    backgroundColor: "{colors.state-info}"
    textColor: "{colors.secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  sidebar-menu-item-active:
    backgroundColor: "{colors.background-dark}"
    textColor: "{colors.text-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  tag-new:
    backgroundColor: "{colors.state-success-new}"
    textColor: "{colors.secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
  input-disabled:
    backgroundColor: "{colors.grey-lightest}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    height: "40px"
---

# Overview

Frollo Web UI is a Vue 3 component library that ships finished, brand-applied widgets for the embedded financial-wellness surfaces Frollo builds for banking partners. Twenty-eight components cover the hot path: account-connection forms, transaction lists, savings-goal cards, budgets, alerts, and modal-driven enrolment flows. The system is implemented in Tailwind CSS over a layer of CSS custom properties (`--color*`, `--fontFamily`) so the same components can be re-themed by a partner brand without rebuilding the library.

The default theme — what this document describes — is Frollo's own purple-over-near-black identity: confident primary purple (`{colors.primary}`) sits on an off-white app surface (`{colors.background-app}`), with state colour reserved for status tags, alerts, and validation. The system intentionally avoids decorative gradient or shadow flourishes outside one feature gradient; depth is carried by tone, weight, and tag colour rather than elevation.

# Colors

## Brand
The brand palette is built around a single primary purple. `primary-dark` is reserved for emphasis when an accordion or focused card needs a heavier weight than the regular primary. `primary-hover` is intentionally *lighter* than `primary` (`#854cff` vs `#512ABD`) — Frollo's hover gesture brightens, it does not deepen.

- `{colors.primary}` — primary actions, links, focused tabs, progress fill, sidebar accents.
- `{colors.primary-dark}` — emphasis variant on light surfaces (e.g. expanded accordion header).
- `{colors.primary-hover}` — primary-button hover state.
- `{colors.primary-tertiary-fade}` — tertiary-button hover wash, a near-white lilac.
- `{colors.secondary}` — near-black for high-contrast text on light, or as a dense surface (sidebar shoulder).
- `{colors.tertiary}` — pure white, used for surfaces and text-on-accent.

The Frollo gradient (`{colors.gradient-start}` → `{colors.primary}` → `{colors.gradient-end}`) is reserved for the single hero/CTA "gradient button" variant; never apply it to surfaces, borders, or other components.

## State
State colours signal status only — they do not appear as decoration. Each pair (text + bg) is designed to compose: e.g. an error alert uses `state.error-bg` for fill and `state.error` for the text/icon.

- `{colors.state-success}` / `{colors.state-success-bg}` — confirmation, valid form, positive deltas.
- `{colors.state-success-new}` — a brighter mint reserved for "new" success badges or animations.
- `{colors.state-error}` / `{colors.state-error-bg}` — destructive actions, validation failures.
- `{colors.state-warning}` — cautionary state. Note: warning has *no* paired tinted background — it uses the same hex for surface and text, applied as a coloured tag.
- `{colors.state-info}` — informational alerts, non-blocking notices.

## Text
Four text tints set the body hierarchy. `text.default` is the cool navy used for sustained reading; lower tiers move progressively cooler and lighter for metadata and tertiary labels.

- `{colors.text-default}` — body and primary headings.
- `{colors.text-secondary}` — subtitles, hint text, muted labels.
- `{colors.text-tertiary}` — least-emphasised labels; use sparingly.
- `{colors.text-accent}` — light-purple text reserved for accent on dark surfaces (e.g. sidebar, dark-mode bodies).
- `{colors.text-on-dark}` — white, for any text directly on a dark surface (sidebar, toasts, modal banners).

## Background
Surfaces are split between a single neutral app background and four tinted callout surfaces used for low-frequency emphasis. Tinted backgrounds are *never* used for primary content — they're for short-form callouts (one-off cards, badges, banners).

- `{colors.background-app}` — page background.
- `{colors.background-dark}` — dark-mode surface, sidebar shoulder, toast.
- `{colors.background-pink}` — soft callout (warm).
- `{colors.background-coral}` — soft callout (warm), shares hex with `state.error-bg`.
- `{colors.background-sky}` — soft callout (cool).
- `{colors.background-button-secondary}` — secondary-button surface; only consume here.

## Border
Three border tones, separated by purpose:

- `{colors.border-default}` — neutral 1px border (cards, inputs, table dividers).
- `{colors.border-accent}` — light-purple border that doubles as quaternary-button surface.
- `{colors.border-strong}` — heavier purple border / dark-mode accent-hover.
- `{colors.border-chart-guide}` — bar-chart axis guide overlays only.

## Grey
Greys are the inert scale — used for skeleton states, disabled UI, and borders where the brand greys feel too cool. `grey.base`, `grey.light`, and `grey.lightest` are the three actively consumed in components; the numbered greys (`10`–`100`) are provisioned for finer steps but are currently unused in the cascade.

# Typography

## Family

The single typeface is **Forma DJR Text**, served self-hosted from `https://content.frollo.us/fonts/`. Three weights are loaded:
- 400 (Regular) — body, headings, default UI text.
- 500–600 (Medium) — emphasis, h2/h3 weight, button label.
- 700 (Bold) — used sparingly for high-emphasis labels.

Italic is available at weight 400 only. Forma DJR Text has no real "Light" or "Hairline" — fall back to 400 on any consumer that requests <400.

## Scale

Frollo uses a compressed scale: nine sizes from 12px (micro) to 42px (display). The scale collapses several Tailwind tokens (`xl`, `2xl`, `p`) onto the same 20px size — they differ only in semantic role (heading vs paragraph), not in rendered output.

| Token | Size / line | Letter-spacing | Weight | Use |
|---|---|---|---|---|
| `{typography.display}` | 42 / 46 | 0.84px | 400 | Hero numerals (balance, savings amount), `h1`. |
| `{typography.h2}` | 20 / 26 | 0.4px | 500 | Section headings, modal titles. |
| `{typography.h3}` | 20 / 26 | 0.4px | 500 | Card titles, subsection headings. |
| `{typography.h4}` / `{typography.h5}` | 20 / 26 | 0.4px | 400 | Sub-subsection — read as emphasised body, not heading. |
| `{typography.h6}` | 15 / 19 | 0.4px | 400 | Smallest heading; collapses with `body-sm`. |
| `{typography.body-lg}` | 20 / 26 | 0.4px | 400 | Default paragraph in dense flows (forms, cards). |
| `{typography.body}` | 16 / 19 | 0.45px | 400 | Compact body / table cells / dropdown items. |
| `{typography.body-sm}` | 15 / 19 | 0.45px | 400 | Small body — alert text, toast, tag-md. |
| `{typography.caption}` | 14 / 19 | 0.45px | 400 | Captions, helper text, tag-sm. |
| `{typography.micro}` | 12 / 19 | 0.4px | 400 | Micro labels, tag-xs. |
| `{typography.label-emphasis}` | 20 / 26 | 0.4px | 500 | Used by `accordion-expanded-header`, dropdown selected value. |

# Layout

## Spacing scale
Frollo uses Tailwind's default spacing scale unmodified, with one custom size (`min-w-banner: 420px`) for the modal-with-banner variant. The scale is 4px-based with halves and quarters available for fine adjustments:

`0`, `px (1)`, `0.5 (2)`, `1 (4)`, `1.5 (6)`, `2 (8)`, `2.5 (10)`, `3 (12)`, `3.5 (14)`, `4 (16)`, `5 (20)`, `6 (24)`, `7 (28)`, `8 (32)`, `9 (36)`, `10 (40)`, `12 (48)`, `14 (56)`, `16 (64)`, `20 (80)`.

In practice, components cluster around four anchors:
- **4–8px** — internal padding for tags, micro chips, icon-button slots.
- **12–16px** — card body padding, alert padding, table-cell padding.
- **24px** — modal padding, drawer padding, hero card.
- **28–48px** — button horizontal padding (size-dependent), modal max width step.

## Breakpoints

Tailwind defaults: `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`. The library is built mobile-first; the `md` breakpoint (768) is the canonical desktop/mobile divide and triggers navigation-menu collapse.

## Fixed dimensions

- Navigation menu height: **72px**.
- Modal max width: **750px** (default), **800px** (with-banner variant).
- Banner min width: **420px**.
- Icon scale: 24 / 36 / 48 px (paired with sm / md / lg button sizes).

# Elevation & Depth

Frollo deliberately uses a thin elevation language. Four shadow tokens cover the entire system; surfaces that don't fit one of these stay flat.

| Token | Value | Use |
|---|---|---|
| `shadow-card` | `0px 4px 4px rgba(0, 0, 0, 0.1714)` | Cards, popovers — the single "lifted" tier. |
| `shadow-top` | `0 -1px 0 0 rgba(20, 20, 20, 0.25)` | Hairline above sticky bottom bars. |
| `shadow-bottom` | `0px 1px 0px rgba(20, 20, 20, 0.25)` | Hairline below the navigation menu when scrolled. |
| `shadow-dropdown` | `0 4px 4px 0 rgba(0, 0, 0, 0.25)` | Dropdown panels, select menus. |

There is no "shadow-md" / "shadow-lg" hierarchy beyond these. If a component needs more separation than `shadow-card` provides, add a tinted background or a `border.default` instead.

# Shapes

Six radii cover the system. Most shapes resolve to either `lg` (large containers) or `full` (pills), with `md` reserved for alerts and `sm` for inputs.

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Edge-to-edge surfaces (sidebar, navigation menu, table rows). |
| `{rounded.sm}` | 4px | Inputs, dropdown rows, small buttons. |
| `{rounded.md}` | 6px | Alerts, popovers, toasts. |
| `{rounded.lg}` | 8px | Cards, modals, accordions, drawers. |
| `{rounded.xl}` | 20px | Marketing/hero containers (rare). |
| `{rounded.full}` | 9999px | Buttons, badges, tags, avatars, progress fills. |

Buttons are always `rounded.full` — Frollo has no rectangular button variant. Tags are always `rounded.full`. Cards are always `rounded.lg`.

# Components

The library exports 28 SFCs (`Fw…`). The canonical components and their token bindings are declared in the frontmatter `components:` map; this section explains the patterns *between* them.

## Button (`FwButton`)
Ten variants × five sizes. Every variant is a pill (`rounded.full`) with horizontal padding that scales with size (sm `12px` → 2xl `64px`). Variants:

- **`button-primary`** — purple-on-white. Default CTA.
- **`button-secondary`** — purple text on lilac background. Use when there is already a primary on the same row.
- **`button-tertiary`** — purple text on transparent. The "ghost" variant; hover wash is `primary-tertiary-fade`.
- **`button-quaternary`** — dark-text on lilac border-accent surface. Used for selected-item affordances on dark sidebars.
- **`button-success`** / **`button-error`** — colour-coded confirmation / destructive variants.
- **`button-link`** — no surface, underline on hover; for in-content links that need button semantics.
- **`button-text`** / **`button-transparent`** — neutral fallbacks.
- **`button-gradient`** — single hero/feature variant using the brand gradient. Reserve for one CTA per screen at most.

## Card (`FwCard`)
A white surface with `rounded.lg`, internal padding `16px`, optional header. Cards either carry `shadow-card` *or* a `border.default` 1px outline — never both.

## Modal (`FwModal`)
Centered dialog, `rounded.lg`, max-width `750px` (`800px` with banner image). Modal padding is `24px` regardless of size.

## Alert (`FwAlert`)
One-line status message with leading icon. `rounded.md`, padding `12px 16px`. The four state variants are described in the frontmatter `components.alert-*`.

## Input / Dropdown / Checkbox / Switch / Date-picker / Slider
Form controls share a single visual language: white surface, `border.default` 1px outline, `rounded.sm`, internal padding `8px 12px`, height `40px`. Validation uses `state.error` for both border and message text. Placeholder text is `grey.light`.

## Tag (`FwTag`)
Pills (`rounded.full`) at three sizes (`xs 12px`, `sm 14px`, `md 16px` text). Seven variants combine state hue with surface tint (`tag-success`, `tag-error`, `tag-alert`, etc.).

## Navigation menu (`FwNavigationMenu`) / Sidebar menu (`FwSidebarMenu`)
Top navigation is `72px` high, white surface, `shadow-bottom` when scrolled. Sidebar uses the dark `background.dark` surface with `text.on-dark`; selected items take `primary` accent.

## Table (`FwTable`)
Rows are flat (`rounded.none`); the table container is `rounded.lg`. Column headers use `caption` typography in `text.secondary`; cells use `body-sm` in `text.default`. Skeleton state is rendered by `FwLoadingTable`.

## Loading (`FwLoadingBar`, `FwLoadingCard`, `FwLoadingTable`, `FwLoadingDots`)
Skeletons use `grey.40` for the placeholder fill with a `grey.20` shimmer animation (200–300ms duration). Dots loader uses `primary`.

## Toast (`FwToast`) / Popover (`FwPopover`) / Drawer (`FwDrawer`)
Three overlay surfaces. Toast uses dark surface; popover uses white with `shadow-dropdown`; drawer is full-height white slide-in with `padding 24px`.

## Bar chart (`FwBarChart`)
Wraps Chart.js. Bars use `primary` for active/highlighted, `grey.base` at 80% opacity (`#4b4b4bcc`) for inactive. Axis guides use `border.chart-guide`.

# Do's and Don'ts

## Do
- **Drive everything through the CSS custom properties.** A partner brand should be able to override the system by setting `--colorPrimary`, `--colorSecondary`, etc. Do not hard-code hex values inside components.
- **Use `state.*` colours only for status.** Validation, alerts, badges, and money-direction (positive / negative deltas) are valid; decorative use is not.
- **Pair `text.*` colours with the semantic level.** `text.default` for sustained reading; step down to `text.secondary`/`text.tertiary` only for metadata.
- **Pick `body-lg` for forms and dense flows; `body` for compact UI** (table cells, dropdown items). The two sizes are deliberately differentiated.
- **Make buttons pills.** Every button is `rounded.full`. There is no rectangular button.

## Don't
- **Don't introduce new shadow tiers.** The four shadow tokens cover the system. Add tone or border for separation, not depth.
- **Don't apply the brand gradient to surfaces.** It is reserved for the single feature `button-gradient` and the gradient hero. No gradient cards, no gradient backgrounds.
- **Don't pair `state.warning` with a tinted background.** Warning has no `warning-bg` token; it's used as a saturated tag/alert surface, not a soft callout.
- **Don't reuse `bank-yellow`** (the CommBank glyph colour, hard-coded inline in the host app's SVG, `#FFCC00`) — it is third-party and not part of the Frollo palette.
- **Don't mix tag variants in a single row.** Tag colour is information-bearing; multiple variants in close proximity dilute the signal.
- **Don't render text directly on tinted callout backgrounds without raising contrast.** `background.pink` / `background.sky` are tints — use `text.default` or stronger; never `text.tertiary`.

---

## Notes & provenance

- **Source:** `/Users/gavingriffith/Downloads/FUI-main/frollo-web-ui-copy` — primarily `tailwind-base.config.js`, `src/styles/web-components.scss`, `src/styles/tailwind.css`, and the `*.stories.ts` files for variant coverage.
- **Reconciled against:** `Colors.md` in the parent project. All overlapping tokens use the Colors.md hex verbatim. The Frollo Vue codebase exposes a few additional values not currently catalogued in Colors.md — these are flagged below.

### Colours added beyond Colors.md
These hexes are present in the Frollo Vue source (`web-components.scss` / `tailwind-base.config.js`) but absent from `Colors.md`. They are inferred directly from code, not from a rendered preview.

| Token | Hex | Source | Suggested Colors.md home |
|---|---|---|---|
| `brand.primary-tertiary-fade` | `#f5f3ff` | `--colorButtonTertiaryFade` | Brand / Buttons (tertiary-button hover wash) |
| `brand.gradient-start` | `#D327E7` | `--colorButtonGradient` start stop | Brand / Gradient |
| `brand.gradient-end` | `#00D19F` | `--colorButtonGradient` end stop (distinct from `success #00C696`) | Brand / Gradient |
| `border.chart-guide` | `#C6C7D5` | inline in `fw-bar-chart.vue` | Borders (chart-only) |

### Re-categorised vs. Colors.md
- `text-tertiary (#8B8FAC)` is listed as **unused** in Colors.md but is actively consumed in the Frollo Vue cascade as `text3`. Promoted to `colors.text.tertiary` here.
- `bg-pink (#FDDBFD)`, `bg-coral (#FEE0D9)`, `bg-sky (#D4EDF7)` are listed as **unused** in Colors.md; the Frollo Vue codebase uses them as `bg2`, `bg3`, `bg4` respectively. Promoted to `colors.background.{pink, coral, sky}`.
- `button-secondary-bg (#E6E1FF)` is listed as **unused** in Colors.md but is actively consumed as `--colorButtonSecondary`. Promoted to `colors.background.button-secondary`.
- `info` is canonical at `#0DCAF0` per Colors.md and included for cross-system parity, although the Frollo Vue codebase has no `state.info` consumer in the component matrix.

### Conformance to the DESIGN.md spec (alpha)
- ✅ `npx @google/design.md lint DESIGN.md` exits 0 — zero errors.
- ✅ Flat `colors:` map (the spec doesn't accept nested groups; original sub-groups `brand` / `state` / `text` / `background` / `border` / `grey` flattened to `GROUP-NAME` or to bare role names where the group prefix was redundant).
- ✅ Required `colors.primary` present (renamed from `brand.primary`).
- ✅ YAML frontmatter with `name` (required), `version`, `description`, `colors`, `typography`, `rounded`, `spacing`, `components`.
- ✅ Colour values are sRGB hex (`#RRGGBB`).
- ✅ Dimension values carry a unit (`px`).
- ✅ Token references use the `{path.to.token}` syntax in components and prose; all 51 prose references and every component binding resolve to a defined token.
- ✅ No duplicate section headings.
- ✅ Every `components.*.backgroundColor` + `textColor` pair passes WCAG AA (≥ 4.5:1) — verified by the linter's `contrast-ratio` check.
- ✅ Components use only the spec's recognised sub-token vocabulary (`backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`). Borders, accents, and multi-stop gradients — design intents the alpha spec doesn't model — are represented via auxiliary 1px-`height` "divider" components and discrete `*-stop` components so the underlying tokens stay consumed.

### Intentional palette completeness (advisory orphans)

The alpha linter emits seven `orphaned-tokens` warnings. They are kept deliberately and are not errors:

| Token | Why retained |
|---|---|
| `text-tertiary` (#8B8FAC) | A muted text hue that fails WCAG AA on every defined surface in this palette (white = 3.2:1, `background-dark` = 4.3:1). Kept for partner brands that override surfaces; no spec-compliant component binding is possible without changing the value. |
| `grey-10` … `grey-100` (6 tokens) | Numbered greys provisioned for finer skeleton/disabled-state steps. Currently unused in the cascade (see Grey section above). Retained so partner themes can override individual steps via `--color-grey-{N}` without altering this contract. |

All other previously-orphan tokens (`gradient-mid`, `gradient-end`, `border-default`, `border-strong`, `border-chart-guide`, `grey-light`, `state-info`, `state-success-new`, `background-app`, `background-pink`, `text-accent`, `grey-base`, `grey-lightest`) are now bound by recognised-slot components above.
