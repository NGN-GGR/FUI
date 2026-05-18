
---
title: FUI Design Token Guide
description: Taxonomy of the NextGen FUI design tokens
format: markdown
version: 1.0
---

# Design Token Structure s

This document details the design token structure.  This is a superset that any design.md document should refer to. 

---

## Layer Model

We have 4 layers 
```text
Primitive → Semantic → Component → Context
```

Illustrated:

```text
┌─────────────────────────────────────────────┐
│ Context Layer                               │
│ theme.dark,  density.tight │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│ Component Layer                             │
│ button.primary.background.hover             │
│ input.border.focus                          │
│ card.padding                                │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│ Semantic Layer                              │
│ color.intent.action.primary                 │
│ color.text.primary                          │
│ space.inset.md                              │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│ Primitive Layer                             │
│ color.blue.600, space.4, radius.md          │
└─────────────────────────────────────────────┘
```

## Key Concept
Semantics are always compoosed of primitives
The UI should consume semantic and component tokens, never raw primitive values.

---

## 2. Naming Pattern

Our naming pattern is:

```text
<domain>.<layer>.<category>.<concept>.<role>.<state>
```

Examples:

```text
color.semantic.text.primary
color.semantic.text.secondary
color.semantic.intent.action.primary
color.component.button.primary.background.default
color.component.button.primary.background.hover
space.semantic.stack.md
radius.semantic.control.md
```

A shorter variant can omit the explicit layer when the directory or file already implies it:

```text
color.text.primary
color.intent.action.primary
button.primary.background.hover
space.stack.md
radius.control.md
```

For machine-readable tokens, the explicit layer is often clearer. For authoring ergonomics, the shorter version can be easier to read.

---


# Primitives

## Colour

The primitive colour palette is drawn directly from Bootstrap 5's built-in colour
system. Bootstrap defines ten hues — `blue`, `indigo`, `purple`, `pink`, `red`,
`orange`, `yellow`, `green`, `teal`, and `cyan` — plus a neutral ramp of grays and
the absolute values `white` and `black`.

Each hue runs from `100` (lightest tint) to `900` (darkest shade) in nine steps.
The midpoint `500` is the base colour Bootstrap uses for its default theme variables
(`$primary`, `$danger`, etc.). Steps below `500` are progressively mixed with white;
steps above `500` are progressively mixed with black.

Token names follow the `color.{hue}.{shade}` pattern. Semantic tokens
reference these via DTCG alias syntax — e.g. `{color.blue.500}` — so
changing a primitive value propagates automatically to every semantic token that
aliases it.

```text
# Blues
color.blue.100
color.blue.200
color.blue.300
color.blue.400
color.blue.500
color.blue.600
color.blue.700
color.blue.800
color.blue.900

# Indigos
color.indigo.100
color.indigo.200
color.indigo.300
color.indigo.400
color.indigo.500
color.indigo.600
color.indigo.700
color.indigo.800
color.indigo.900

# Purples
color.purple.100
color.purple.200
color.purple.300
color.purple.400
color.purple.500
color.purple.600
color.purple.700
color.purple.800
color.purple.900

# Pinks
color.pink.100 = #f7d6e6
color.pink.200 = #efadce
color.pink.300 = #e685b5
color.pink.400 = #de5c9d
color.pink.500 = #d63384
color.pink.600 = #ab296a
color.pink.700 = #801f4f
color.pink.800 = #561435
color.pink.900 = #2b0a1a

# Reds
color.red.100
color.red.200
color.red.300
color.red.400
color.red.500
color.red.600
color.red.700
color.red.800
color.red.900

# Oranges
color.orange.100
color.orange.200
color.orange.300
color.orange.400
color.orange.500
color.orange.600
color.orange.700
color.orange.800
color.orange.900

# Yellows
color.yellow.100
color.yellow.200
color.yellow.300
color.yellow.400
color.yellow.500
color.yellow.600
color.yellow.700
color.yellow.800
color.yellow.900

# Greens
color.green.100
color.green.200
color.green.300
color.green.400
color.green.500
color.green.600
color.green.700
color.green.800
color.green.900

# Teals
color.teal.100
color.teal.200
color.teal.300
color.teal.400
color.teal.500
color.teal.600
color.teal.700
color.teal.800
color.teal.900

# Cyans
color.cyan.100
color.cyan.200
color.cyan.300
color.cyan.400
color.cyan.500
color.cyan.600
color.cyan.700
color.cyan.800
color.cyan.900

# Neutrals
color.white
color.gray.100
color.gray.200
color.gray.300
color.gray.400 
color.gray.500
color.gray.600
color.gray.700
color.gray.800
color.gray.900
color.black
```

## Radius

The primitive radius palette is drawn from Bootstrap 5's border-radius scale. Unlike
colour, radius primitives use named stops rather than a numeric shade ramp — there is
no 100–900 progression. The names map directly to Bootstrap's SCSS variables
(`$border-radius-sm`, `$border-radius`, `$border-radius-lg`, etc.).

Values are expressed in `rem` so they scale with the base font size (typically 16px).
`none` (0) is included as an explicit primitive so semantic tokens can alias it cleanly
rather than hardcoding `0`. `pill` uses `50rem` — large enough to guarantee a fully
rounded capsule shape regardless of element height.

Token names follow the `radius.{name}` pattern.

```text
radius.none = 0
radius.sm   = 0.25rem
radius.base = 0.375rem
radius.lg   = 0.5rem
radius.xl   = 1rem
radius.xxl  = 2rem
radius.pill = 50rem
```


space (aka units, dimension, spacing)
size (aka sizing)
elevation (aka z-index, layer, layering)
breakpoints (aka media-query, responsive)
shadow (aka depth)
touch
time (aka animation, duration)
---

## 4. Semantic Tokens

Semantic tokens describe meaning and usage. They are the most important layer because they create a stable design API that can survive palette, theme, and brand changes.

### Semantic color tokens
