---
title: 圖示
section: 元件
href: /components/icons
date: 2026-06-01
description: 8 組圖示範例元件集——7 組單色工具圖示（i-01、i-03、i-05、i-06、i-19、i-24、i-67，綁定 gray/gray900）＋ 1 組品牌圖示 social-media（fb／youtube／linkedin／line，綁定 gray/gray400）。涵蓋 5 種尺寸（16–40px）。本頁為範例樣本，可依範本自行擴充所需圖示。
---

# Icon Set Guidelines

The icon system and how to re-create it. Written so designers and AI agents can
rebuild the exact same component sets in Figma, with all icon colors correctly
bound to the `Primitive` color variables.

Source: Figma file `kkyAx6QTTNF6ZyB9rSeN6W`, page **Icon-IconFont**.

> ⚠️ **Critical for AI agents — always pull paths from the source file.**
> Do NOT substitute paths from generic icon libraries (Material Design, Heroicons, etc.).
> Each icon's path data must be extracted directly from the source Figma file using the
> Plugin API: open `kkyAx6QTTNF6ZyB9rSeN6W`, switch to the `Icon-IconFont` page, find
> each icon's shape node (Union / Subtract / Vector), and call
> `await node.exportAsync({ format: 'SVG' })` to get the exact per-size artwork.
> See §10 for the full extraction script.

---

## 1. Overview

- **8 icon component sets** on the `Icon-IconFont` page — **7 monochrome utility
  sets** (`i-01`, `i-03`, `i-05`, `i-06`, `i-19`, `i-24`, `i-67`) plus **1 brand
  set** (`social-media`).
- **This page is a sample set** (an in-canvas note says so). Treat these as
  reference examples: reproduce them as-is, and build any *additional* icons you
  need by following the same template — line weight, the 5-size scale, and the
  colour-binding rule below.
- Each icon is a **Figma Component Set** with `Size` as a variant property (and
  optionally `Variant` or `Theme/Weight`; `social-media` uses `type` instead).
- **5 sizes:** 16, 20, 24, 32, 40 px — mapped directly to spacing scale tokens.
- **Utility icon fill / stroke colors are bound to `Primitive/gray/gray900`**
  (`#373737`). The **`social-media`** brand set is bound to
  `Primitive/gray/gray400` (`#A3A3A3`). Never hardcode a color value; always bind
  to the variable so theming works.

---

## 2. Icon catalogue

| Component Set  | Icon        | Variants                       | Total | Color |
| -------------- | ----------- | ------------------------------ | ----- | ----- |
| `i-01`         | Add (plus in circle)   | Size × Variant (outlined, filled) | 10 | `gray/gray900` |
| `i-03`         | Close (X in circle)    | Size × Variant (outlined, filled) | 10 | `gray/gray900` |
| `i-05`         | Chevron left (stroke)  | Size × Theme (stroke) × Weight    | 5  | `gray/gray900` |
| `i-06`         | Chevron right          | Size only                         | 5  | `gray/gray900` |
| `i-19`         | Close / X (stroke)     | Size × Theme (stroke) × Weight    | 5  | `gray/gray900` |
| `i-24`         | Search (magnifier)     | Size only                         | 5  | `gray/gray900` |
| `i-67`         | Checkmark (stroke)     | Size × Theme (stroke) × Weight    | 5  | `gray/gray900` |
| `social-media` | Brand icons (fb, youtube, linkedin, line) | `type` only    | 4  | `gray/gray400` |

> `i-05`, `i-19` and `i-67` share the same stroke-theme weight ladder
> (`Weight` = 1.3 / 1.5 / 1.5 / 1.5 / 2 for sizes 16 / 20 / 24 / 32 / 40). Note
> that `i-05` and `i-19` render their outline as a **filled `Union`** (bind the
> **fill**), whereas `i-67` is a true stroked `Vector` (bind the **stroke**).

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

### Frame size vs. glyph artwork size

The `Size` value is the **component frame** (bounding box). The visible icon glyph
(the Union / Subtract / Vector shape) is **inset** inside that frame, identically
across all icons:

| Frame (px) | Glyph artwork | Inset per side |
| ---------- | ------------- | -------------- |
| 16         | 14 × 14       | 1     |
| 20         | 18 × 18       | 1     |
| 24         | 21 × 21       | 1.5   |
| 32         | 28 × 28       | 2     |
| 40         | 35 × 35       | 2.5   |

> ⚠️ When rebuilding, draw the glyph at the **artwork** size (not the full frame
> size) and center it. Drawing at full frame size makes the icon look oversized.

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

### i-05 · i-19 · i-67 (Size × Theme × Weight)
Stroke-theme icons whose stroke weight scales with size (`i-05` = chevron left,
`i-19` = close/X, `i-67` = checkmark). All three share the same weight ladder:

| Size (px) | Theme    | Weight |
| --------- | -------- | ------ |
| 16        | `stroke` | 1.3    |
| 20        | `stroke` | 1.5    |
| 24        | `stroke` | 1.5    |
| 32        | `stroke` | 1.5    |
| 40        | `stroke` | 2      |

Component name format: `Size=<px>, Theme=stroke, Weight=<value>`

> ⚠️ Rendering differs: `i-67` is a genuine stroked `Vector` (bind the **stroke**
> to `gray/gray900`), while `i-05` and `i-19` bake the outline into a **filled
> `Union`** (bind the **fill** to `gray/gray900`). Variant-name spacing is
> inconsistent in the source (`Size=16,Theme=stroke,Weight=1.3` vs
> `Size=16, Theme=stroke, Weight=1.3`) — normalize when rebuilding.

### social-media (type only)
Brand glyph set — a single monochrome treatment (no size variants; every glyph is
`40 × 40`). The shape `Union` fill is bound to **`gray/gray400`** (`#A3A3A3`), not
`gray900`, so the brand marks read as neutral UI icons.

| type       | Brand    |
| ---------- | -------- |
| `fb`       | Facebook |
| `youtube`  | YouTube  |
| `linkedin` | LinkedIn |
| `line`     | LINE     |

Component name format: `type=<fb|youtube|linkedin|line>`

---

## 5. Color binding (critical)

**All icon shapes must have their fill (or stroke) color bound to the
`Primitive/gray/gray900 | #373737` variable.**

Rules:
- For **filled / outlined** icons (i-01, i-03, i-06, i-24) and the **filled-Union
  stroke-theme** icons (i-05, i-19): bind the **fill** of the icon's
  `BOOLEAN_OPERATION` (Union / Subtract) to `gray/gray900`.
- For genuinely **stroked** icons (i-67): bind the **stroke color** of the icon's
  `VECTOR` to `gray/gray900`.
- For the **`social-media`** brand set: bind the `Union` **fill** to
  **`gray/gray400`** (`#A3A3A3`) instead of `gray900`.
- Bind the visible top-level shape (the `Union` / `Subtract` / `Vector`); nested
  child `Vector`s inside a boolean operation don't need binding — the boolean op
  carries the rendered color.
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
    ├── filled (i-01):       Subtract [BOOLEAN_OPERATION] — fill → gray/gray900   (bare, no Group)
    ├── filled (i-03):       Group → Subtract [BOOLEAN_OPERATION] — fill → gray/gray900
    └── stroke (i-67):       Vector [VECTOR] — stroke → gray/gray900
```

> ⚠️ **`filled` shape differs per icon:** `i-01` filled is a **bare `Subtract`** (no
> Group wrapper), while `i-03` filled wraps its `Subtract` in a **`Group`**. Don't
> assume a uniform structure across the two.

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
  "sample": true,
  "colorBinding": {
    "collection": "Primitive",
    "utility": { "variable": "gray/gray900 | #373737", "hex": "#373737", "applyTo": "fill (outlined/filled/size-only/filled-Union stroke) or stroke (true stroked Vector, i-67)" },
    "brand":   { "variable": "gray/gray400 | #A3A3A3", "hex": "#A3A3A3", "applyTo": "fill of social-media Union" }
  },
  "sizes": [
    { "px": 16, "spacingToken": "Spacing/lg"  },
    { "px": 20, "spacingToken": "Spacing/xl"  },
    { "px": 24, "spacingToken": "Spacing/2xl" },
    { "px": 32, "spacingToken": "Spacing/3xl" },
    { "px": 40, "spacingToken": "Spacing/4xl" }
  ],
  "icons": [
    { "id": "i-01", "description": "Add (plus in circle)",  "color": "gray/gray900", "variantProps": { "Size": ["16","20","24","32","40"], "Variant": ["outlined","filled"] } },
    { "id": "i-03", "description": "Close (X in circle)",   "color": "gray/gray900", "variantProps": { "Size": ["16","20","24","32","40"], "Variant": ["outlined","filled"] } },
    { "id": "i-05", "description": "Chevron left (filled-Union stroke)", "color": "gray/gray900", "variantProps": {
        "Size":   ["16","20","24","32","40"], "Theme": ["stroke"],
        "Weight": { "16":"1.3", "20":"1.5", "24":"1.5", "32":"1.5", "40":"2" } } },
    { "id": "i-06", "description": "Chevron right",         "color": "gray/gray900", "variantProps": { "Size": ["16","20","24","32","40"] } },
    { "id": "i-19", "description": "Close / X (filled-Union stroke)", "color": "gray/gray900", "variantProps": {
        "Size":   ["16","20","24","32","40"], "Theme": ["stroke"],
        "Weight": { "16":"1.3", "20":"1.5", "24":"1.5", "32":"1.5", "40":"2" } } },
    { "id": "i-24", "description": "Search (magnifier)",    "color": "gray/gray900", "variantProps": { "Size": ["16","20","24","32","40"] } },
    { "id": "i-67", "description": "Checkmark (true stroke)", "color": "gray/gray900", "variantProps": {
        "Size":   ["16","20","24","32","40"],
        "Theme":  ["stroke"],
        "Weight": { "16":"1.3", "20":"1.5", "24":"1.5", "32":"1.5", "40":"2" }
      }
    },
    { "id": "social-media", "description": "Brand icons (monochrome)", "color": "gray/gray400", "variantProps": { "type": ["fb","youtube","linkedin","line"] } }
  ]
}
```

---

## 10. Source path extraction script (for AI agents)

Run this in the **source file** (`kkyAx6QTTNF6ZyB9rSeN6W`) to get every icon's exact SVG path data per size. Execute via `use_figma` before rebuilding icons in the target file.

```javascript
// Step 1 — switch to the Icon-IconFont page
const page = figma.root.children.find(p => p.name === "Icon-IconFont");
await figma.setCurrentPageAsync(page);

// Step 2 — map icon shape node IDs (shape child of each component, not the component itself)
// Update these IDs if the source file changes; discover them with:
//   page.children.forEach(cs => cs.children.forEach(c =>
//     console.log(cs.name, c.name, c.children.map(ch => ch.name+' '+ch.id))))
const shapeNodes = {
  // i-01 outlined: Union nodes
  "i01-out-16":"25:1899","i01-out-20":"25:1906","i01-out-24":"25:1913","i01-out-32":"25:1920","i01-out-40":"25:1927",
  // i-01 filled: Subtract nodes
  "i01-fil-16":"25:1934","i01-fil-20":"25:1942","i01-fil-24":"25:1950","i01-fil-32":"25:1958","i01-fil-40":"25:1965",
  // i-03 outlined: Union nodes
  "i03-out-16":"28:3847","i03-out-20":"28:3854","i03-out-24":"28:3861","i03-out-32":"28:3868","i03-out-40":"28:3875",
  // i-03 filled: Group nodes (contain Subtract)
  "i03-fil-16":"28:3882","i03-fil-20":"28:3890","i03-fil-24":"28:3898","i03-fil-32":"28:3906","i03-fil-40":"28:3914",
  // i-06 chevron: Union nodes
  "i06-16":"25:2022","i06-20":"25:2026","i06-24":"25:2030","i06-32":"25:2034","i06-40":"25:2038",
  // i-24 search: Union nodes
  "i24-16":"28:3959","i24-20":"28:3965","i24-24":"28:3971","i24-32":"28:3977","i24-40":"28:3983",
  // i-67 checkmark: Vector nodes (stroke-based)
  "i67-16":"31:3358","i67-20":"31:3361","i67-24":"31:3364","i67-32":"31:3367","i67-40":"31:3370",
  // i-05 chevron left: filled-Union nodes
  "i05-16":"179:3292","i05-20":"179:3296","i05-24":"179:3300","i05-32":"179:3304","i05-40":"179:3308",
  // i-19 close/X: filled-Union nodes
  "i19-16":"179:3335","i19-20":"179:3340","i19-24":"179:3345","i19-32":"179:3350","i19-40":"179:3355",
  // social-media brand: Union nodes (40px only)
  "sm-fb":"248:722","sm-youtube":"248:723","sm-linkedin":"248:724","sm-line":"248:725"
};

// Step 3 — export each shape node as SVG
function bytesToStr(b) { let s=''; for(let i=0;i<b.length;i++) s+=String.fromCharCode(b[i]); return s; }

const results = {};
for (const [key, id] of Object.entries(shapeNodes)) {
  const node = await figma.getNodeByIdAsync(id);
  if (!node) { results[key] = "NOT FOUND"; continue; }
  const bytes = await node.exportAsync({ format: 'SVG' });
  results[key] = bytesToStr(bytes); // full SVG string — parse viewBox + path d from this
}
return results;
```

The returned SVG strings contain the exact `viewBox`, `d` (path data), and stroke attributes
needed to recreate each icon at pixel-perfect fidelity in the target file.
