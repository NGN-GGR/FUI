# Colors

## Source palette (YAML)

```yaml
colors:
  primary: "#512ABD"
  secondary: "#141414"
  tertiary: "#ffffff"
  link: "#512ABD"
  app-bg: "#F7F7F7"
  success: "#00C696"
  success-bg: "#D8FFF6"
  success-new: "#4bf0c8"
  error: "#E74C4C"
  error-bg: "#FEE0D9"
  warning: "#FB6340"
  text-default: "#393C56"
  text-secondary: "#5F6489"
  text-tertiary: "#8B8FAC"
  text-accent: "#CDC3FF"
  bg-dark: "#292B3D"
  bg-pink: "#FDDBFD"
  bg-coral: "#FEE0D9"
  bg-sky: "#D4EDF7"
  border-default: "#AFB2C7"
  border-accent: "#CDC3FF"
  border-strong: "#8E7DFF"
  button-primary-hover: "#854cff"
  button-secondary-bg: "#E6E1FF"
  button-secondary-hover: "#CDC3FF"
  button-quaternary-bg: "#CDC3FF"
  button-quaternary-text: "#292B3D"
  off-white: "#F7F7F7"
  grey-base: "#4b4b4b"
  grey-light: "#bcbcbc"
  grey-lightest: "#f5f5f5"
  grey-10: "#f8f8f8"
  grey-20: "#f2f2f2"
  grey-30: "#EEEFF1"
  grey-40: "#E4E4E4"
  grey-60: "#DEE0E3"
  grey-80: "#C9C9C9"
  grey-100: "#C8CBD0"
```

---

## Grouped reference

### Brand
| Token | Hex | Use |
|---|---|---|
| `primary` | `#512ABD` | Primary brand purple — primary actions, links |
| `secondary` | `#141414` | Brand secondary — near-black surface / strong contrast |
| `tertiary` | `#ffffff` | White / inverse / text-on-accent |
| `link` | `#512ABD` | In-content link colour (same value as primary) |

### State
| Token | Hex | Use |
|---|---|---|
| `success` | `#00C696` | Positive state — confirmation, valid form |
| `success-bg` | `#D8FFF6` | Tinted success surface |
| `success-new` | `#4bf0c8` | Newer/lighter success variant |
| `error` | `#E74C4C` | Errors, destructive actions, invalid form |
| `error-bg` | `#FEE0D9` | Tinted error surface (also re-used as `bg-coral`) |
| `warning` | `#FB6340` | Cautionary state — coral-orange |

### Text
| Token | Hex | Use |
|---|---|---|
| `text-default` | `#393C56` | Body text (cool navy) |
| `text-secondary` | `#5F6489` | Muted body text |
| `text-tertiary` | `#8B8FAC` | Most-muted text |
| `text-accent` | `#CDC3FF` | Light-purple text for accent on dark surface |

### Backgrounds
| Token | Hex | Use |
|---|---|---|
| `app-bg` | `#F7F7F7` | Page background (light mode) |
| `bg-dark` | `#292B3D` | Dark surface (cards on dark, dark-mode bg) |
| `bg-pink` | `#FDDBFD` | Tinted callout (warm pink) |
| `bg-coral` | `#FEE0D9` | Tinted callout (warm coral; same value as `error-bg`) |
| `bg-sky` | `#D4EDF7` | Tinted callout (cool sky) |

### Borders
| Token | Hex | Use |
|---|---|---|
| `border-default` | `#AFB2C7` | Default 1px border |
| `border-accent` | `#CDC3FF` | Light-purple border (same value as `text-accent`) |
| `border-strong` | `#8E7DFF` | Stronger purple border / focus ring tint |

### Buttons
| Token | Hex | Use |
|---|---|---|
| `button-primary-hover` | `#854cff` | Primary-button hover (lighter than `primary`) |
| `button-secondary-bg` | `#E6E1FF` | Secondary-button background |
| `button-secondary-hover` | `#CDC3FF` | Secondary-button hover (same value as `border-accent`) |
| `button-quaternary-bg` | `#CDC3FF` | Quaternary-button background |
| `button-quaternary-text` | `#292B3D` | Quaternary-button text (same value as `bg-dark`) |

### Greys
| Token | Hex | Use |
|---|---|---|
| `off-white` | `#F7F7F7` | Page-bg alias (same as `app-bg`) |
| `grey-lightest` | `#f5f5f5` | Near-white |
| `grey-10` | `#f8f8f8` | Very light fill |
| `grey-20` | `#f2f2f2` | Light fill |
| `grey-30` | `#EEEFF1` | Light cool fill |
| `grey-40` | `#E4E4E4` | Mid-light fill |
| `grey-60` | `#DEE0E3` | Mid cool fill |
| `grey-80` | `#C9C9C9` | Mid fill |
| `grey-100` | `#C8CBD0` | Cool mid fill (note: not the dark-mode-style "100") |
| `grey-light` | `#bcbcbc` | Mid-dark fill |
| `grey-base` | `#4b4b4b` | Dark grey |

### Notable aliases (same hex, multiple roles)
- `#512ABD` → `primary`, `link`
- `#F7F7F7` → `app-bg`, `off-white`
- `#FEE0D9` → `error-bg`, `bg-coral`
- `#CDC3FF` → `text-accent`, `border-accent`, `button-secondary-hover`, `button-quaternary-bg`
- `#292B3D` → `bg-dark`, `button-quaternary-text`

---

## CSS variables (`:root`)

Drop this into `styles.css` as the primitive layer. Naming convention: `--color-{palette-name}`.

```css
:root {
  /* Brand */
  --color-primary: #512ABD;
  --color-secondary: #141414;
  --color-tertiary: #ffffff;
  --color-link: #512ABD;

  /* State */
  --color-success: #00C696;
  --color-success-bg: #D8FFF6;
  --color-success-new: #4bf0c8;
  --color-error: #E74C4C;
  --color-error-bg: #FEE0D9;
  --color-warning: #FB6340;

  /* Text */
  --color-text-default: #393C56;
  --color-text-secondary: #5F6489;
  --color-text-tertiary: #8B8FAC;
  --color-text-accent: #CDC3FF;

  /* Backgrounds */
  --color-app-bg: #F7F7F7;
  --color-bg-dark: #292B3D;
  --color-bg-pink: #FDDBFD;
  --color-bg-coral: #FEE0D9;
  --color-bg-sky: #D4EDF7;

  /* Borders */
  --color-border-default: #AFB2C7;
  --color-border-accent: #CDC3FF;
  --color-border-strong: #8E7DFF;

  /* Buttons */
  --color-button-primary-hover: #854cff;
  --color-button-secondary-bg: #E6E1FF;
  --color-button-secondary-hover: #CDC3FF;
  --color-button-quaternary-bg: #CDC3FF;
  --color-button-quaternary-text: #292B3D;

  /* Greys */
  --color-off-white: #F7F7F7;
  --color-grey-base: #4b4b4b;
  --color-grey-light: #bcbcbc;
  --color-grey-lightest: #f5f5f5;
  --color-grey-10: #f8f8f8;
  --color-grey-20: #f2f2f2;
  --color-grey-30: #EEEFF1;
  --color-grey-40: #E4E4E4;
  --color-grey-60: #DEE0E3;
  --color-grey-80: #C9C9C9;
  --color-grey-100: #C8CBD0;
}
```

### RGB companions (for Bootstrap bridge)

Bootstrap composes alphas via `rgba(var(--bs-primary-rgb), 0.5)`. Any palette colour bridged into a `--bs-*-rgb` token needs an integer-RGB companion primitive:

```css
:root {
  --color-primary-rgb: 81, 42, 189;
  --color-secondary-rgb: 20, 20, 20;
  --color-success-rgb: 0, 198, 150;
  --color-error-rgb: 231, 76, 76;
  --color-warning-rgb: 251, 99, 64;
  --color-text-default-rgb: 57, 60, 86;
  --color-text-secondary-rgb: 95, 100, 137;
  --color-text-accent-rgb: 205, 195, 255;
  --color-button-primary-hover-rgb: 133, 76, 255;
  --color-border-strong-rgb: 142, 125, 255;
}
```

### Notes & gaps
- **No `info` colour in palette.** Bootstrap's bridge needs one for `.alert-info`, `.text-bg-info`, etc. Keep `#0dcaf0` as a fallback or pick `bg-sky` (`#D4EDF7`) and a darker companion for the foreground.
- **Dark-mode surface coverage is thin.** Palette has `bg-dark` and `secondary` (`#292B3D` and `#141414`) but no full dark-mode set for borders, alt-bg, etc. Components that need a dark-mode equivalent for `--border`, `--bg-alt`, etc. either reuse `grey-base` / `grey-light` / `secondary` or compose a derived value.
- **`button-primary-hover` is lighter than `primary`**, not darker. The semantic role `--accent-dark` (used for hover states elsewhere in the system) aliases to it, accepting that "dark" is a misnomer for this brand.
