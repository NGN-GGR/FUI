# Colors

The palette is split into **Used** (tokens consumed via `var(--color-*)` somewhere in the cascade) and **Unused** (defined as primitives but not referenced). Two new entries have been added: `primary-dark` (the accordion-expanded emphasis colour, derived from `primary`) and `bank-yellow` (a third-party CommBank logo colour, isolated from the Frollo palette).

Audit surface: `frolloDemo/styles.css`, `frolloDemo/layout.css`, `frolloDemo/index.html` (inline SVG fills).

---

## Used

### Source palette (YAML)

```yaml
colors:
  # Brand
  primary: "#512ABD"
  primary-dark: "#3A1E8A"      # NEW — derived darker primary, used as --accent-emphasis
  secondary: "#141414"
  tertiary: "#ffffff"

  # State
  success: "#00C696"
  success-bg: "#D8FFF6"
  error: "#E74C4C"
  error-bg: "#FEE0D9"
  warning: "#FB6340"
  info: "#0dcaf0"

  # Text
  text-default: "#393C56"
  text-secondary: "#5F6489"
  text-accent: "#CDC3FF"

  # Backgrounds
  app-bg: "#F7F7F7"
  bg-dark: "#292B3D"

  # Borders
  border-default: "#AFB2C7"
  border-accent: "#CDC3FF"
  border-strong: "#8E7DFF"

  # Buttons
  button-primary-hover: "#854cff"

  # Greys
  grey-base: "#4b4b4b"
  grey-light: "#bcbcbc"
  grey-lightest: "#f5f5f5"

  # Third-party / logo (do not use as a Frollo brand colour)
  bank-yellow: "#FFCC00"       # NEW — CommBank logo glyph only, hard-coded in HTML SVG
```

### Grouped reference

#### Brand
| Token | Hex | Use |
|---|---|---|
| `primary` | `#512ABD` | Primary brand purple — primary actions, links, focus states |
| `primary-dark` | `#3A1E8A` | Emphasis variant of `primary` — accordion-expanded header text (`--accent-emphasis`) |
| `secondary` | `#141414` | Brand secondary — near-black surface (dark rail) |
| `tertiary` | `#ffffff` | White / inverse / text-on-accent |

#### State
| Token | Hex | Use |
|---|---|---|
| `success` | `#00C696` | Positive state — confirmation, valid form |
| `success-bg` | `#D8FFF6` | Tinted success surface |
| `error` | `#E74C4C` | Errors, destructive actions, invalid form |
| `error-bg` | `#FEE0D9` | Tinted error surface |
| `warning` | `#FB6340` | Cautionary state — coral-orange |
| `info` | `#0dcaf0` | Informational state — `.alert-info`, `.text-bg-info`, `.btn-info` |

#### Text
| Token | Hex | Use |
|---|---|---|
| `text-default` | `#393C56` | Body text (cool navy) |
| `text-secondary` | `#5F6489` | Muted body text |
| `text-accent` | `#CDC3FF` | Light-purple text for accent on dark surface (dark mode) |

#### Backgrounds
| Token | Hex | Use |
|---|---|---|
| `app-bg` | `#F7F7F7` | Page background, info-column background |
| `bg-dark` | `#292B3D` | Dark-mode page background |

#### Borders
| Token | Hex | Use |
|---|---|---|
| `border-default` | `#AFB2C7` | Default 1px border |
| `border-accent` | `#CDC3FF` | Light-purple border (same value as `text-accent`) — `--bs-primary-border-subtle` |
| `border-strong` | `#8E7DFF` | Stronger purple border / dark-mode accent-hover |

#### Buttons
| Token | Hex | Use |
|---|---|---|
| `button-primary-hover` | `#854cff` | Primary-button hover (intentionally lighter than `primary`) |

#### Greys
| Token | Hex | Use |
|---|---|---|
| `grey-base` | `#4b4b4b` | Dark-mode `--border` |
| `grey-light` | `#bcbcbc` | Stepper inactive label/border, dark-mode `--muted` and `--secondary` |
| `grey-lightest` | `#f5f5f5` | Dark-mode `--ink` |

#### Third-party / logo
| Token | Hex | Use |
|---|---|---|
| `bank-yellow` | `#FFCC00` | CommBank diamond logo glyph (inline in `index.html` SVG). **Not a Frollo palette colour** — never use as accent, fill, or border on Frollo elements. |

---

## Unused

These tokens are defined in `frolloDemo/styles.css` (and listed in the original palette) but no `var(--color-*)` reference consumes them anywhere in the current cascade. Keep, deprecate, or reuse — but be aware they are not currently load-bearing.

### Source palette (YAML)

```yaml
colors:
  # Brand
  link: "#512ABD"                 # alias of `primary`; superseded by --bs-link-color → var(--accent)

  # State
  success-new: "#4bf0c8"

  # Text
  text-tertiary: "#8B8FAC"

  # Backgrounds
  bg-pink: "#FDDBFD"
  bg-coral: "#FEE0D9"             # same hex as `error-bg`
  bg-sky: "#D4EDF7"
  off-white: "#F7F7F7"            # alias of `app-bg`; never directly referenced

  # Buttons
  button-secondary-bg: "#E6E1FF"
  button-secondary-hover: "#CDC3FF"
  button-quaternary-bg: "#CDC3FF"
  button-quaternary-text: "#292B3D"

  # Greys
  grey-10: "#f8f8f8"
  grey-20: "#f2f2f2"
  grey-30: "#EEEFF1"
  grey-40: "#E4E4E4"
  grey-60: "#DEE0E3"
  grey-80: "#C9C9C9"
  grey-100: "#C8CBD0"
```

### Grouped reference (unused)

#### Brand (unused)
| Token | Hex | Original use |
|---|---|---|
| `link` | `#512ABD` | In-content link colour. Currently bypassed: Bootstrap reads `--bs-link-color`, which is bridged to `var(--accent)`, so `--color-link` is never read. |

#### State (unused)
| Token | Hex | Original use |
|---|---|---|
| `success-new` | `#4bf0c8` | Newer/lighter success variant — never adopted. |

#### Text (unused)
| Token | Hex | Original use |
|---|---|---|
| `text-tertiary` | `#8B8FAC` | Most-muted text. Defined as a primitive but no semantic-layer alias maps to it. |

#### Backgrounds (unused)
| Token | Hex | Original use |
|---|---|---|
| `bg-pink` | `#FDDBFD` | Tinted callout (warm pink) |
| `bg-coral` | `#FEE0D9` | Tinted callout (warm coral; same value as `error-bg`) |
| `bg-sky` | `#D4EDF7` | Tinted callout (cool sky) |
| `off-white` | `#F7F7F7` | Page-bg alias (same as `app-bg`); only `app-bg` is consumed |

#### Buttons (unused)
| Token | Hex | Original use |
|---|---|---|
| `button-secondary-bg` | `#E6E1FF` | Secondary-button background |
| `button-secondary-hover` | `#CDC3FF` | Secondary-button hover (same value as `border-accent`) |
| `button-quaternary-bg` | `#CDC3FF` | Quaternary-button background |
| `button-quaternary-text` | `#292B3D` | Quaternary-button text (same value as `bg-dark`) |

#### Greys (unused)
| Token | Hex | Original use |
|---|---|---|
| `grey-10` | `#f8f8f8` | Very light fill |
| `grey-20` | `#f2f2f2` | Light fill |
| `grey-30` | `#EEEFF1` | Light cool fill |
| `grey-40` | `#E4E4E4` | Mid-light fill |
| `grey-60` | `#DEE0E3` | Mid cool fill |
| `grey-80` | `#C9C9C9` | Mid fill |
| `grey-100` | `#C8CBD0` | Cool mid fill (note: not the dark-mode-style "100") |

---

## Notable aliases (same hex, multiple roles)

- `#512ABD` → `primary`, `link` *(link unused)*
- `#F7F7F7` → `app-bg`, `off-white` *(off-white unused)*
- `#FEE0D9` → `error-bg`, `bg-coral` *(bg-coral unused)*
- `#CDC3FF` → `text-accent`, `border-accent`, `button-secondary-hover` *(unused)*, `button-quaternary-bg` *(unused)*
- `#292B3D` → `bg-dark`, `button-quaternary-text` *(button-quaternary-text unused)*

---

## CSS variables (`:root`)

Drop this into `styles.css` as the primitive layer. Naming convention: `--color-{palette-name}`. Used and unused tokens are kept together so the primitive layer remains a complete reference; `[unused]` comments flag the ones that no `var(--color-*)` consumer reads.

```css
:root {
  /* Brand */
  --color-primary: #512ABD;
  --color-primary-dark: #3A1E8A;          /* NEW */
  --color-secondary: #141414;
  --color-tertiary: #ffffff;
  --color-link: #512ABD;                  /* [unused] */

  /* State */
  --color-success: #00C696;
  --color-success-bg: #D8FFF6;
  --color-success-new: #4bf0c8;           /* [unused] */
  --color-error: #E74C4C;
  --color-error-bg: #FEE0D9;
  --color-warning: #FB6340;
  --color-info: #0dcaf0;

  /* Text */
  --color-text-default: #393C56;
  --color-text-secondary: #5F6489;
  --color-text-tertiary: #8B8FAC;         /* [unused] */
  --color-text-accent: #CDC3FF;

  /* Backgrounds */
  --color-app-bg: #F7F7F7;
  --color-bg-dark: #292B3D;
  --color-bg-pink: #FDDBFD;               /* [unused] */
  --color-bg-coral: #FEE0D9;              /* [unused] */
  --color-bg-sky: #D4EDF7;                /* [unused] */

  /* Borders */
  --color-border-default: #AFB2C7;
  --color-border-accent: #CDC3FF;
  --color-border-strong: #8E7DFF;

  /* Buttons */
  --color-button-primary-hover: #854cff;
  --color-button-secondary-bg: #E6E1FF;       /* [unused] */
  --color-button-secondary-hover: #CDC3FF;    /* [unused] */
  --color-button-quaternary-bg: #CDC3FF;      /* [unused] */
  --color-button-quaternary-text: #292B3D;    /* [unused] */

  /* Greys */
  --color-off-white: #F7F7F7;             /* [unused] */
  --color-grey-base: #4b4b4b;
  --color-grey-light: #bcbcbc;
  --color-grey-lightest: #f5f5f5;
  --color-grey-10: #f8f8f8;               /* [unused] */
  --color-grey-20: #f2f2f2;               /* [unused] */
  --color-grey-30: #EEEFF1;               /* [unused] */
  --color-grey-40: #E4E4E4;               /* [unused] */
  --color-grey-60: #DEE0E3;               /* [unused] */
  --color-grey-80: #C9C9C9;               /* [unused] */
  --color-grey-100: #C8CBD0;              /* [unused] */

  /* Third-party / logo */
  --color-bank-yellow: #FFCC00;           /* NEW — CommBank logo only; currently inline in HTML SVG */
}
```

### RGB companions (for Bootstrap bridge)

Bootstrap composes alphas via `rgba(var(--bs-primary-rgb), 0.5)`. Any palette colour bridged into a `--bs-*-rgb` token needs an integer-RGB companion primitive:

```css
:root {
  --color-primary-rgb: 81, 42, 189;
  --color-primary-dark-rgb: 58, 30, 138;       /* NEW */
  --color-secondary-rgb: 20, 20, 20;
  --color-success-rgb: 0, 198, 150;
  --color-error-rgb: 231, 76, 76;
  --color-warning-rgb: 251, 99, 64;
  --color-info-rgb: 13, 202, 240;
  --color-text-default-rgb: 57, 60, 86;
  --color-text-secondary-rgb: 95, 100, 137;
  --color-text-accent-rgb: 205, 195, 255;
  --color-button-primary-hover-rgb: 133, 76, 255;
  --color-border-strong-rgb: 142, 125, 255;
}
```

### Notes & gaps

- **`info` is canonical at `#0dcaf0`** (Bootstrap's default cyan). Drives `.alert-info`, `.text-bg-info`, `.btn-info`, etc. Tint is a 15% alpha (`--color-info-a15`) rather than a separate solid surface — same pattern as `warning`.
- **Dark-mode surface coverage is thin.** Palette has `bg-dark` and `secondary` (`#292B3D` and `#141414`) but no full dark-mode set for borders, alt-bg, etc. Components that need a dark-mode equivalent for `--border`, `--bg-alt`, etc. either reuse `grey-base` / `grey-light` / `secondary` or compose a derived value.
- **`button-primary-hover` is lighter than `primary`**, not darker. The semantic role `--accent-dark` (used for hover states elsewhere in the system) aliases to it, accepting that "dark" is a misnomer for this brand.
- **`primary-dark` (NEW) is genuinely darker than `primary`** (`#3A1E8A` vs `#512ABD`). It powers `--accent-emphasis` only — currently a single consumer (the expanded-accordion header).
- **`bank-yellow` (NEW) is third-party.** It belongs to CommBank, not Frollo, and is currently hard-coded inline in `index.html`'s SVG `<rect fill="#FFCC00">`. Promote to a CSS variable if the bank glyph ever moves out of inline markup; do not reuse this value for any Frollo-branded element.
- **Unused-list audit cadence.** Re-run the `var(--color-*)` consumption check whenever a major component lands. Tokens like `bg-pink`, `bg-coral`, `bg-sky`, and the `button-secondary-*` / `button-quaternary-*` cluster were originally provisioned for callouts and a four-tier button system that the current cascade doesn't surface.
