# Token Structure

How the design tokens are organised, why there are two layers, and the rules that keep them honest.

## Goal

Decouple **raw values** from **what they mean**. A button shouldn't know it's purple — only that it's the accent. Change the brand, the theme, the brand-name itself, and components keep working without edits.

Three layers, top to bottom:

```
Components
    │  consume only…
    ▼
Semantic layer        ← --accent, --bg, --ink, --space-5, --motion-base, --radius
    │  references…
    ▼
Primitive layer       ← --color-purple-500, --gray-900, --scale-8, --duration-150
```

Plus a sideways bridge to Bootstrap (`--bs-*`), which aliases the **semantic** layer — never the primitive layer.

---

## Layer 1 — Primitives

**What they are:** raw values. The palette and the scales. They have no opinion about how they're used.

**Naming:** descriptive of *what* the value is. Never of *how* it's used.

| Category | Example | Bad alternative (semantic-flavoured) |
|---|---|---|
| Colour | `--color-purple-500`, `--gray-900`, `--white`, `--black-alpha-10` | `--brand-primary`, `--text-color` |
| Typography family | `--family-sans`, `--family-mono`, `--family-display` | `--font-heading`, `--font-body` |
| Type weight | `--weight-400`, `--weight-700`, `--weight-900` | `--weight-bold` |
| Type size | `--size-16`, `--size-24`, `--size-clamped-hero` | `--fs-hero`, `--fs-body` |
| Spacing | `--scale-4`, `--scale-8`, `--scale-16` | `--space-tight`, `--space-card` |
| Motion duration | `--duration-150`, `--duration-200`, `--duration-300` | `--motion-fast`, `--motion-base` |
| Motion easing | `--ease-standard`, `--ease-out`, `--ease-spring` | `--motion-easing` |
| Shape | `--radius-0`, `--radius-4`, `--radius-12` | `--radius-card`, `--radius-soft` |
| Elevation | `--shadow-sm`, `--shadow-md`, `--shadow-lg` (rarely brand-specific) | — |

**Properties of primitives:**
- Defined once on `:root` (or in a separate sheet)
- **Never overridden** by `[data-theme="dark"]`, brand selectors, or media queries — they're constants
- May be referenced by other primitives (e.g. `--gray-100: hsl(var(--gray-hue) 5% 96%)`), but never reference semantic tokens
- Generous: there can be more primitives than the project actively uses today (a palette is fine)

**Anti-pattern:** redefining a primitive in a theme block.
```css
/* DON'T — primitives are constants */
[data-theme="dark"] { --gray-900: #fff; }
```

---

## Layer 2 — Semantic tokens

**What they are:** the role each value plays in the UI. Components only ever read these.

**Naming:** descriptive of *how* the value is used. Never of *what* the value is.

| Category | Example | Common references |
|---|---|---|
| Colour role | `--accent`, `--accent-dark`, `--accent-tint`, `--accent-ink`, `--secondary`, `--success`, `--danger` | → primitives |
| Surface | `--bg`, `--bg-alt`, `--card-bg`, `--border` | → primitives |
| Text role | `--ink`, `--muted` | → primitives |
| Type role | `--font-heading`, `--font-body`, `--weight-hero`, `--weight-section`, `--fs-hero`, `--fs-body` | → primitives |
| Spacing role | `--space-1` through `--space-8` | → `--scale-*` primitives |
| Motion role | `--motion-fast`, `--motion-base`, `--motion-slow`, `--motion-exit` | → `--duration-*` primitives |
| Shape role | `--radius`, `--btn-weight`, `--service-icon-bg` | → primitive `--radius-*` etc. |
| Focus | `--focus-ring-color`, `--focus-ring-width` | → semantic `--accent-tint` |
| Form state | `--valid`, `--invalid` | → semantic `--success`, `--danger` |

**Properties of semantic tokens:**
- Defined on `:root` for light, **re-aliased** on `[data-theme="dark"]` (and on any future `[data-brand="..."]` block)
- Always reference a primitive — *never* a raw literal
- May reference *other semantic tokens* when one role is composed from another (e.g. `--valid: var(--success);`, `--focus-ring-color: var(--accent-tint);`)
- The full set of semantic tokens is the project's "public API" — adding/removing one is a contract change

**Theme switching is a semantic-layer operation.** Going light→dark re-binds `--ink` from `--gray-900` to `--gray-50`. The primitives don't move; only the aliases do.

**Anti-pattern:** consuming a primitive in a component.
```css
/* DON'T */
.btn { color: var(--color-purple-500); }
/* DO */
.btn { color: var(--accent-ink); }
```

---

## Layer 3 — Bootstrap bridge (`--bs-*`)

A horizontal aliasing layer. `--bs-*` variables are defined by Bootstrap; we override their values to point at our semantic tokens, so Bootstrap's own components (`.btn-primary`, `.alert-danger`, badges, the form-control focus ring, etc.) become theme-aware automatically.

**Critical rules:**
- The bridge **always reads from the semantic layer**, never from primitives.
  ```css
  --bs-primary: var(--accent);            /* yes */
  --bs-primary: var(--color-purple-500);  /* no */
  ```
- `--bs-*-rgb` integer-form pairs must be updated alongside their hex counterparts. Bootstrap composes alphas via `rgba(var(--bs-primary-rgb), 0.5)` and will silently fall back to its default blue if the rgb pair is wrong.
- The bridge lives in the same selector blocks as the semantic layer (`:root`, `[data-theme="dark"]`), not as a separate `:root` declaration. They have to move together.

The bridge is documented in `DESIGN.md` (Bootstrap CSS-variable bridge). This file describes *why* it sits where it sits in the stack.

---

## Rules

### What components are allowed to consume

| Layer | Components may consume? |
|---|---|
| Bootstrap utility classes | yes (preferred over custom CSS) |
| Semantic tokens (`var(--accent)`, `var(--space-5)`, …) | **yes — always** |
| Bootstrap CSS variables (`var(--bs-primary)`) | yes, but rare — semantic equivalents exist |
| Primitives (`var(--color-purple-500)`) | **no** |
| Raw literals (`#512ABD`, `8px`, `200ms`) | **no** |

### Where each kind of value can change

| Where | What can change |
|---|---|
| Primitive layer (`:root`) | Adding new raw values. Renaming for clarity. |
| Semantic layer (`:root`, `[data-theme="dark"]`, future `[data-brand="..."]`) | Re-aliasing roles to different primitives. Adding new roles. |
| Bootstrap bridge | Adding more `--bs-*` aliases when reaching for a Bootstrap component that needs them. |
| Components | Reading semantic tokens. Defining new components. |

A change at one layer should not require an edit at a layer above it. If swapping a brand requires touching component CSS, the semantic layer is incomplete.

### Adding a new token

1. **Is it a new raw value?** Add a primitive first. Pick a name that says what it *is*.
2. **Is it a new role in the UI?** Add a semantic token. Alias it to an existing primitive (or add a primitive in step 1 if needed).
3. **Does Bootstrap have an equivalent `--bs-*`?** Bridge it. (See the Bootstrap CSS-variable bridge section in `DESIGN.md`.)
4. **Update `DESIGN.md`** so the contract reflects the new role.
5. **Components only ever consume the semantic token from step 2.**

Skipping step 1 — putting a raw hex straight into a semantic token — is the most common drift, and the hardest to walk back later.

---

## Worked example

```css
/* ─── Primitives ─────────────────────────────────────── */
:root {
  /* Colour palette */
  --color-purple-500: #512ABD;
  --color-purple-700: #3A1E8A;
  --color-purple-300: #B18BFF;
  --color-purple-200: #9B6DFF;
  --color-purple-alpha-10: rgba(81, 42, 189, 0.10);
  --color-purple-alpha-18: rgba(177, 139, 255, 0.18);
  --color-gray-900: #111418;
  --color-gray-700: #5b636e;
  --color-gray-200: #e6e8ec;
  --color-gray-50:  #f7f8fa;
  --color-white:    #ffffff;
  --color-near-black: #0f1216;

  /* Scale primitives */
  --scale-4: 4px;
  --scale-8: 8px;
  --scale-12: 12px;
  --scale-16: 16px;
  /* …etc */
  --duration-150: 150ms;
  --duration-200: 200ms;
  --duration-300: 300ms;
  --duration-250: 250ms;
  --ease-standard: ease;
  --radius-0: 0px;
  --radius-4: 4px;
}

/* ─── Semantic (light) ───────────────────────────────── */
:root {
  --accent:      var(--color-purple-500);
  --accent-dark: var(--color-purple-700);
  --accent-tint: var(--color-purple-alpha-10);
  --accent-ink:  var(--color-white);

  --ink:    var(--color-gray-900);
  --muted:  var(--color-gray-700);
  --bg:     var(--color-white);
  --border: var(--color-gray-200);

  --space-1: var(--scale-4);
  --space-2: var(--scale-8);
  --motion-fast: var(--duration-150);
  --motion-base: var(--duration-200);
  --radius: var(--radius-4);

  /* Bridge */
  --bs-primary: var(--accent);
  /* …rest of bridge */
}

/* ─── Semantic (dark) — only re-aliases, no new primitives ─── */
[data-theme="dark"] {
  --accent:      var(--color-purple-300);
  --accent-dark: var(--color-purple-200);
  --accent-tint: var(--color-purple-alpha-18);
  --ink:         var(--color-gray-50);
  --bg:          var(--color-near-black);

  --bs-primary: var(--accent);
}

/* ─── Component (semantic only) ──────────────────────── */
.btn-accent {
  background: var(--accent);
  color: var(--accent-ink);
  border-radius: var(--radius);
  transition: background var(--motion-fast) var(--ease-standard);
}
```

The component reads exclusively from layer 2. The dark-mode override happens exclusively at layer 2. The primitives are write-once.

---

## Current state

The project's `styles.css` implements all three layers as described above:

1. **Primitives** live in the first `:root` block (palette: `--color-purple-500`, `--color-gray-900`, etc.; scales: `--scale-8`, `--duration-200`, `--radius-4`; type stacks: `--family-forma-djr`, `--family-calibri`; etc.). They're never overridden by theme.
2. **Semantic tokens** live in subsequent `:root` and `[data-theme="dark"]` blocks (`--accent`, `--ink`, `--space-5`, `--motion-base`, `--shadow-card-hover`, etc.). Each one is `var(--some-primitive)`. Dark mode re-aliases the same semantic names to different primitives.
3. **Bootstrap bridge** (`--bs-*`) reads exclusively from semantic tokens.

Components consume only the semantic layer — `grep -E 'var\(--(color-|scale-|duration-|family-|weight-[0-9]|size-[0-9]|size-clamp|tracking-(tight\|normal)|lh-(tight\|base\|relaxed)|ease-standard|radius-[0-9]|width-ring)'` against everything below the *Components* section is empty.

When this drifts again — and it will, the moment somebody pastes a hex into a component rule — that grep is the cheap drift-detector.

---

## Relationship to other docs

- **`DESIGN.md`** — *what* the tokens are: the actual values, the contract, what each role means in the UI.
- **`Token-Structure.md`** (this file) — *how* the tokens are organised: the layer model, the rules, the rationale.
- **`styles.css`** — the only place tokens are actually defined and consumed. Source of truth for values; this doc is the source of truth for structure.

If `DESIGN.md` and this file disagree, this file describes the architecture and `DESIGN.md` describes the values — they answer different questions and shouldn't conflict. If they do, fix whichever is wrong.
