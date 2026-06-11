# Icon Set Guidelines

The icon system and how to re-create it. Written so designers and AI agents can
rebuild the exact same component sets in Figma, with all icon colors correctly
bound to the `Primitive` color variables.

Source: Figma file `kkyAx6QTTNF6ZyB9rSeN6W`, page **Icon-IconFont**.

---

## 1. Overview

- **5 icon component sets** on the `Icon-IconFont` page.
- Each icon is a **Figma Component Set** with `Size` as a variant property (and
  optionally `Variant` or `Theme/Weight`).
- **5 sizes:** 16, 20, 24, 32, 40 px — mapped directly to spacing scale tokens.
- **All icon fill / stroke colors are bound to `Primitive/gray/gray900`** (`#373737`).
  Never hardcode a color value; always bind to the variable so theming works.

---

## 2. Icon catalogue

| Component Set | Icon        | Variants                       | Total |
| ------------- | ----------- | ------------------------------ | ----- |
| `i-01`        | Add (plus in circle)   | Size × Variant (outlined, filled) | 10 |
| `i-03`        | Close (X in circle)    | Size × Variant (outlined, filled) | 10 |
| `i-06`        | Chevron right          | Size only                         | 5  |
| `i-24`        | Search (magnifier)     | Size only                         | 5  |
| `i-67`        | Checkmark (stroke)     | Size × Theme (stroke) × Weight    | 5  |

---

## 3. Size scale

Icon sizes map directly to spacing tokens:

| Size (px) | Spacing token |
| --------- | ------------- |
| 16        | `Spacing/lg`  |
| 20        | `Spacing/xl`  |
| 24        | `Spacing/2xl` |
| 32        | `Spacing/3xl` |
| 40        | `Spacing/4xl` |

Always reference icons by their token size name (`lg`, `xl`, `2xl` …) in design
specs and code, not the raw pixel value.

---

## 4. Variant properties

### i-01 · i-03 (Size × Variant)
Both `outlined` and `filled` variants at every size.

| Variant    | Description                         |
| ---------- | ----------------------------------- |
| `outlined` | Icon shape as a stroke/outline only |
| `filled`   | Icon shape as a solid filled form   |

Component name format: `Size=<px>, Variant=<outlined|filled>`
e.g. `Size=24, Variant=outlined`

### i-06 · i-24 (Size only)
Single visual style; no Variant property.

Component name format: `Size=<px>`
e.g. `Size=24`

### i-67 (Size × Theme × Weight)
Stroke-only icon with a stroke weight that scales with size.

| Size (px) | Theme    | Weight |
| --------- | -------- | ------ |
| 16        | `stroke` | 1.3    |
| 20        | `stroke` | 1.5    |
| 24        | `stroke` | 1.5    |
| 32        | `stroke` | 1.5    |
| 40        | `stroke` | 2      |

Component name format: `Size=<px>, Theme=stroke, Weight=<value>`

---

## 5. Color binding (critical)

**All icon shapes must have their fill (or stroke) color bound to the
`Primitive/gray/gray900 | #373737` variable.**

Rules:
- For **filled / outlined** icons (i-01, i-03, i-06, i-24): bind the **fill** of
  every `BOOLEAN_OPERATION` (Union / Subtract) and `VECTOR` that forms the icon
  shape to `gray/gray900`.
- For **stroke** icons (i-67): bind the **stroke color** of the icon's `VECTOR`
  to `gray/gray900`.
- Each component contains an **`Icon Grid` INSTANCE** (a construction guide with
  pink/red helper lines). **Do not bind that instance's colors** — it is
  invisible in production and acts only as an alignment reference.

Color variable:
- Collection: `Primitive`
- Variable name: `gray/gray900 | #373737`
- Resolved hex: `#373737`

---

## 6. Component structure

Every icon component follows this internal hierarchy:

```
Component (e.g. Size=24, Variant=outlined)
├── Icon Grid  [INSTANCE]          ← construction guide, not icon content
│   ├── Magins  [RECTANGLE]        ← margin indicator (red/pink, hidden in prod)
│   └── gride   [BOOLEAN_OPERATION] ← grid overlay (red/pink, hidden in prod)
└── <Icon shape>                   ← the actual icon
    ├── outlined/size-only:  Union  [BOOLEAN_OPERATION]  — fill → gray/gray900
    ├── filled:              Group → Subtract [BOOLEAN_OPERATION] — fill → gray/gray900
    └── stroke (i-67):       Vector [VECTOR] — stroke → gray/gray900
```

---

## 7. How to re-create

1. **Create a page** named `Icon-IconFont`.
2. **Create a Component Set** for each icon in §2, named `i-01` … `i-67`.
3. For each size (16, 20, 24, 32, 40) and each variant combination, **create a
   Component** variant named using the format in §4.
4. Draw the icon path inside each component (below the `Icon Grid` guide).
5. **Bind the color:**
   - Select the icon's shape node (Union / Subtract / Vector).
   - Bind its **fill color** (or **stroke color** for i-67) to
     `Primitive / gray / gray900 | #373737`.
   - Use `setBoundVariableForPaint(paint, 'color', variable)` when scripting.
6. **Never hard-code** a hex value — always reference the variable so colors
   respond to theme changes.

---

## 8. Dependencies

| Token / style | Source |
| ------------- | ------ |
| `gray/gray900 | #373737` | [color-palette.md](color-palette.md) |
| Spacing size tokens (`lg` → `4xl`) | [spacing-radius.md](spacing-radius.md) |

---

## 9. Machine-readable spec

```json
{
  "page": "Icon-IconFont",
  "colorBinding": {
    "collection": "Primitive",
    "variable": "gray/gray900 | #373737",
    "hex": "#373737",
    "applyTo": "fill (outlined/filled/size-only) or stroke (stroke-theme icons)"
  },
  "sizes": [
    { "px": 16, "spacingToken": "Spacing/lg"  },
    { "px": 20, "spacingToken": "Spacing/xl"  },
    { "px": 24, "spacingToken": "Spacing/2xl" },
    { "px": 32, "spacingToken": "Spacing/3xl" },
    { "px": 40, "spacingToken": "Spacing/4xl" }
  ],
  "icons": [
    { "id": "i-01", "description": "Add (plus in circle)",  "variantProps": { "Size": ["16","20","24","32","40"], "Variant": ["outlined","filled"] } },
    { "id": "i-03", "description": "Close (X in circle)",   "variantProps": { "Size": ["16","20","24","32","40"], "Variant": ["outlined","filled"] } },
    { "id": "i-06", "description": "Chevron right",         "variantProps": { "Size": ["16","20","24","32","40"] } },
    { "id": "i-24", "description": "Search (magnifier)",    "variantProps": { "Size": ["16","20","24","32","40"] } },
    { "id": "i-67", "description": "Checkmark (stroke)",    "variantProps": {
        "Size":   ["16","20","24","32","40"],
        "Theme":  ["stroke"],
        "Weight": { "16":"1.3", "20":"1.5", "24":"1.5", "32":"1.5", "40":"2" }
      }
    }
  ]
}
```
