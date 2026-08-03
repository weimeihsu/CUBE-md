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

Source: Figma file `kkyAx6QTTNF6ZyB9rSeN6W`, page **Icons** (node `290:1438`).

> ⚠️ **Critical for AI agents — never substitute generic icon paths.**
> Do NOT use paths from generic icon libraries (Material Design, Heroicons, etc.).
> The **exact per-size SVG artwork for all 49 variants is embedded in §11** of this
> document, so this file is self-contained: another team can reproduce the icons
> pixel-for-pixel **without access to the source Figma file**. Only if you need to
> re-generate them from source (e.g. the icons changed), open `kkyAx6QTTNF6ZyB9rSeN6W`,
> switch to the **Icons** page, and re-run the extraction script in §10.

---

## 1. Overview

- **8 icon component sets** on the `Icons` page — **7 monochrome utility
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
> `Union`** (bind the **fill** to `gray/gray900`). Variant names are normalized to
> the canonical `Size=<px>, Theme=stroke, Weight=<value>` format (single space after
> each comma) across all three sets — keep this exact spacing when rebuilding.

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
- **No construction guides remain.** Earlier, 25 of the 49 variants carried a hidden
  `Icon Grid` instance (a pink/red alignment guide); these have been **deleted from
  every component** so each variant now contains only its icon shape. When rebuilding,
  do **not** add any grid — just the shape node.

Color variable:
- Collection: `Primitive`
- Variable name: `gray/gray900 | #373737`
- Resolved hex: `#373737`

---

## 6. Component structure

Every icon component follows this internal hierarchy:

```
Component (e.g. Size=24, Variant=outlined)
└── <Icon shape>                   ← the only child; the actual icon
    ├── outlined/size-only:  Union  [BOOLEAN_OPERATION]  — fill → gray/gray900
    ├── filled (i-01):       Subtract [BOOLEAN_OPERATION] — fill → gray/gray900   (bare, no Group)
    ├── filled (i-03):       Group → Subtract [BOOLEAN_OPERATION] — fill → gray/gray900
    └── stroke (i-67):       Vector [VECTOR] — stroke → gray/gray900
```

> ⚠️ **`filled` shape differs per icon:** `i-01` filled is a **bare `Subtract`** (no
> Group wrapper), while `i-03` filled wraps its `Subtract` in a **`Group`**. Don't
> assume a uniform structure across the two.
>
> The `Icon Grid` construction instances that some variants used to carry have been
> **removed** — each component now holds only the icon shape.

---

## 7. How to re-create

1. **Create a page** named `Icons`.
2. **Create a Component Set** for each icon in §2, named `i-01` … `i-67`.
3. For each size (16, 20, 24, 32, 40) and each variant combination, **create a
   Component** variant named using the format in §4.
4. Draw the icon path inside each component **using the exact embedded SVG for that
   variant from §11** (import the SVG, or create a `VECTOR` from its path `d`). Do not
   redraw or scale a single path across sizes — each size has its own optically-tuned
   artwork.
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
  "page": "Icons",
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

## 10. Source path extraction script (regeneration only)

You normally do **not** need this — the exact SVGs are already embedded in §11. Run
this only to **re-generate** the catalog from source if the icons change. Execute via
`use_figma` in the **source file** (`kkyAx6QTTNF6ZyB9rSeN6W`).

```javascript
// Step 1 — switch to the Icons page
const page = figma.root.children.find(p => p.name === "Icons");
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

---

## 11. Embedded SVG catalogue (source of truth for exact reproduction)

Every one of the 49 variants below is the **exact frame-sized SVG** exported from the
source components (`viewBox` = the component frame; the glyph is already positioned
inside it, so no manual insetting is needed). Keys are `icon → variant → size` (utility
icons with a single visual style use `_`; `social-media` is keyed by `type`).

> 🎨 **The hex in each SVG is a placeholder — the real colour is a local variable.**
> An SVG cannot carry a Figma binding, so the export bakes in the resolved hex. After
> importing each icon you **must** rebind its fill/stroke to the **local** colour
> variable below (the exact same one the source uses). Do **not** leave the raw hex,
> and do **not** bind to a `gray900`/`gray400` from a remote/published library —
> always the file's own `Primitive` collection.
>
> | SVG hex | Bind to (local variable) | Collection | Applies to |
> | ------- | ------------------------ | ---------- | ---------- |
> | `#373737` | `gray/gray900` | `Primitive` (local, not remote) | fill of `i-01/i-03/i-05/i-06/i-19/i-24`; **stroke** of `i-67` |
> | `#A3A3A3` | `gray/gray400` | `Primitive` (local, not remote) | fill of all `social-media` |
>
> Verified against source: all 49 shapes already bind to these local variables
> (`gray/gray900` and `gray/gray400` in the local `Primitive` collection) — 0 remote,
> 0 raw-hex, 0 legacy-duplicate bindings.

> **Rebuild rule:** import the SVG for each variant verbatim (or create a `VECTOR`
> from its `d`), keep the frame at the `Size` px, then bind the colour variable. Do
> **not** derive one size from another — each size is drawn separately.

```json
{
  "i-01": {
    "outlined": {
      "16": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_25_1897)\"><path d=\"M8.00039 0.85C11.949 0.850211 15.1508 4.05168 15.1508 8.00039C15.1506 11.9489 11.9489 15.1506 8.00039 15.1508C4.05168 15.1508 0.85021 11.949 0.849998 8.00039C0.849998 4.05155 4.05155 0.85 8.00039 0.85ZM8.00039 2.15078C4.76952 2.15078 2.15078 4.76952 2.15078 8.00039C2.15099 11.2311 4.76965 13.85 8.00039 13.85C11.2309 13.8498 13.8498 11.2309 13.85 8.00039C13.85 4.76965 11.2311 2.15099 8.00039 2.15078ZM8.63027 7.35H11.4604V8.65078H8.63027V11.4799H7.32949V8.65078H4.50039V7.35H7.32949V4.51992H8.63027V7.35Z\" fill=\"#373737\"/></g><defs><clipPath id=\"clip0_25_1897\"><rect width=\"16\" height=\"16\" fill=\"white\"/></clipPath></defs></svg>",
      "20": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 1.25C14.8325 1.25 18.75 5.16751 18.75 10C18.75 14.8325 14.8325 18.75 10 18.75C5.16751 18.75 1.25 14.8325 1.25 10C1.25 5.16751 5.16751 1.25 10 1.25ZM10 2.75C5.99594 2.75 2.75 5.99594 2.75 10C2.75 14.0041 5.99594 17.25 10 17.25C14.0041 17.25 17.25 14.0041 17.25 10C17.25 5.99594 14.0041 2.75 10 2.75ZM10.7402 9.25H14.5898V10.75H10.7402V14.6006H9.24023V10.75H5.38965V9.25H9.24023V5.40039H10.7402V9.25Z\" fill=\"#373737\"/></svg>",
      "24": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12.75 11.25H17.5098V12.75H12.75V17.5098H11.25V12.75H6.5V11.25H11.25V6.49023H12.75V11.25Z\" fill=\"#373737\"/></svg>",
      "32": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM16 3.5C9.09644 3.5 3.5 9.09644 3.5 16C3.5 22.9036 9.09644 28.5 16 28.5C22.9036 28.5 28.5 22.9036 28.5 16C28.5 9.09644 22.9036 3.5 16 3.5ZM16.75 15.2002H23.4199V16.7002H16.75V23.3701H15.25V16.7002H8.57031V15.2002H15.25V8.53027H16.75V15.2002Z\" fill=\"#373737\"/></svg>",
      "40": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 2.5C29.665 2.5 37.5 10.335 37.5 20C37.5 29.665 29.665 37.5 20 37.5C10.335 37.5 2.5 29.665 2.5 20C2.5 10.335 10.335 2.5 20 2.5ZM20 4.5C11.4396 4.5 4.5 11.4396 4.5 20C4.5 28.5604 11.4396 35.5 20 35.5C28.5604 35.5 35.5 28.5604 35.5 20C35.5 11.4396 28.5604 4.5 20 4.5ZM21 18.9502H29.3701V20.9502H21V29.3203H19V20.9502H10.6299V18.9502H19V10.5801H21V18.9502Z\" fill=\"#373737\"/></svg>"
    },
    "filled": {
      "16": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM7.33008 4.52051V7.35059H4.5V8.65137H7.33008V11.4805H8.63086V8.65137H11.46V7.35059H8.63086V4.52051H7.33008Z\" fill=\"#373737\"/></svg>",
      "20": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.99997 1.25C14.8325 1.25 18.75 5.16751 18.75 10C18.75 14.8325 14.8325 18.75 9.99997 18.75C5.16748 18.75 1.24997 14.8325 1.24997 10C1.24997 5.16751 5.16748 1.25 9.99997 1.25ZM9.24021 5.40039V9.25098H5.38962V10.751H9.24021V14.6006H10.7402V10.751H14.5898V9.25098H10.7402V5.40039H9.24021Z\" fill=\"#373737\"/></svg>",
      "24": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5ZM11.25 6.49023V11.25H6.49997V12.75H11.25V17.5098H12.75V12.75H17.5097V11.25H12.75V6.49023H11.25Z\" fill=\"#373737\"/></svg>",
      "32": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 2C23.7319 2 30 8.26801 30 16C30 23.732 23.7319 30 16 30C8.26798 30 1.99996 23.732 1.99996 16C1.99996 8.26801 8.26798 2 16 2ZM15.25 8.53027V15.2002H8.57027V16.7002H15.25V23.3701H16.75V16.7002H23.4199V15.2002H16.75V8.53027H15.25Z\" fill=\"#373737\"/></svg>",
      "40": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 2.5C29.665 2.5 37.5 10.335 37.5 20C37.5 29.665 29.665 37.5 20 37.5C10.335 37.5 2.5 29.665 2.5 20C2.5 10.335 10.335 2.5 20 2.5ZM19 10.5801V18.9502H10.6299V20.9502H19V29.3203H21V20.9502H29.3701V18.9502H21V10.5801H19Z\" fill=\"#373737\"/></svg>"
    }
  },
  "i-03": {
    "outlined": {
      "16": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_28_3845)\"><path d=\"M8.0004 0.850098C11.9491 0.850309 15.1508 4.05178 15.1508 8.00049C15.1506 11.949 11.9489 15.1507 8.0004 15.1509C4.05169 15.1509 0.850217 11.9491 0.850006 8.00049C0.850006 4.05165 4.05156 0.850098 8.0004 0.850098ZM8.0004 2.15088C4.76953 2.15088 2.15079 4.76962 2.15079 8.00049C2.151 11.2312 4.76966 13.8501 8.0004 13.8501C11.231 13.8499 13.8498 11.231 13.85 8.00049C13.85 4.76975 11.2311 2.15109 8.0004 2.15088ZM10.8998 6.00049L8.89981 8.00049L10.8998 10.0005L9.97989 10.9204L7.97989 8.92041L5.97989 10.9204L5.05997 10.0005L7.05997 8.00049L5.05997 6.00049L5.97989 5.08057L7.97989 7.08057L9.97989 5.08057L10.8998 6.00049Z\" fill=\"#373737\"/></g><defs><clipPath id=\"clip0_28_3845\"><rect width=\"16\" height=\"16\" fill=\"white\"/></clipPath></defs></svg>",
      "20": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 1.25C14.8325 1.25 18.75 5.16751 18.75 10C18.75 14.8325 14.8325 18.75 10 18.75C5.16751 18.75 1.25 14.8325 1.25 10C1.25 5.16751 5.16751 1.25 10 1.25ZM10 2.75C5.99594 2.75 2.75 5.99594 2.75 10C2.75 14.0041 5.99594 17.25 10 17.25C14.0041 17.25 17.25 14.0041 17.25 10C17.25 5.99594 14.0041 2.75 10 2.75ZM13.7705 7.28027L11.0508 10L13.7705 12.7197L12.71 13.7803L9.99023 11.0605L7.27051 13.7803L6.20996 12.7197L8.92969 10L6.20996 7.28027L7.27051 6.21973L9.99023 8.93945L12.71 6.21973L13.7705 7.28027Z\" fill=\"#373737\"/></svg>",
      "24": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM16.4307 8.64062L13.0664 12L16.4307 15.3594L15.9004 15.8906L15.3701 16.4209L12.0049 13.0596L8.64062 16.4209L8.11035 15.8906L7.58008 15.3594L10.9434 12L7.58008 8.64062L8.64062 7.58008L12.0049 10.9395L15.3701 7.58008L16.4307 8.64062Z\" fill=\"#373737\"/></svg>",
      "32": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM16 3.5C9.09644 3.5 3.5 9.09644 3.5 16C3.5 22.9036 9.09644 28.5 16 28.5C22.9036 28.5 28.5 22.9036 28.5 16C28.5 9.09644 22.9036 3.5 16 3.5ZM21.2402 10.7002L21.7705 11.2305L17.0547 15.9502L21.7705 20.6699L21.2402 21.2002L20.709 21.7305L15.9941 17.0107L11.2803 21.7305L10.2197 20.6699L14.9346 15.9502L10.2197 11.2305L11.2803 10.1699L15.9941 14.8887L20.709 10.1699L21.2402 10.7002Z\" fill=\"#373737\"/></svg>",
      "40": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 2.5C29.665 2.5 37.5 10.335 37.5 20C37.5 29.665 29.665 37.5 20 37.5C10.335 37.5 2.5 29.665 2.5 20C2.5 10.335 10.335 2.5 20 2.5ZM20 4.5C11.4396 4.5 4.5 11.4396 4.5 20C4.5 28.5604 11.4396 35.5 20 35.5C28.5604 35.5 35.5 28.5604 35.5 20C35.5 11.4396 28.5604 4.5 20 4.5ZM27.3369 14.0273L21.4141 19.9502L27.3369 25.873L25.9229 27.2871L20 21.3643L14.0771 27.2871L12.6631 25.873L18.5859 19.9502L12.6631 14.0273L14.0771 12.6133L20 18.5361L25.9229 12.6133L27.3369 14.0273Z\" fill=\"#373737\"/></svg>"
    },
    "filled": {
      "16": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM7.98047 7.08008L5.98047 5.08008L5.06055 6L7.06055 8L5.06055 10L5.98047 10.9199L7.98047 8.91992L9.98047 10.9199L10.9004 10L8.90039 8L10.9004 6L9.98047 5.08008L7.98047 7.08008Z\" fill=\"#373737\"/></svg>",
      "20": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 1.25C14.8325 1.25 18.75 5.16751 18.75 10C18.75 14.8325 14.8325 18.75 10 18.75C5.16751 18.75 1.25 14.8325 1.25 10C1.25 5.16751 5.16751 1.25 10 1.25ZM9.99023 8.93945L7.27051 6.21973L6.20996 7.28027L8.92969 10L6.20996 12.7197L7.27051 13.7803L9.99023 11.0605L12.71 13.7803L13.7705 12.7197L11.0508 10L13.7705 7.28027L12.71 6.21973L9.99023 8.93945Z\" fill=\"#373737\"/></svg>",
      "24": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5ZM12.0049 10.9385L8.64062 7.5791L7.58008 8.63965L10.9434 11.999L7.58008 15.3584L8.11035 15.8896L8.64062 16.4199L12.0049 13.0586L15.3701 16.4199L15.9004 15.8896L16.4307 15.3584L13.0664 11.999L16.4307 8.63965L15.3701 7.5791L12.0049 10.9385Z\" fill=\"#373737\"/></svg>",
      "32": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM15.9941 14.8887L11.2803 10.1699L10.2197 11.2305L14.9346 15.9502L10.2197 20.6699L11.2803 21.7305L15.9941 17.0107L20.709 21.7305L21.2402 21.2002L21.7705 20.6699L17.0547 15.9502L21.7705 11.2305L21.2402 10.7002L20.709 10.1699L15.9941 14.8887Z\" fill=\"#373737\"/></svg>",
      "40": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 2.5C29.665 2.5 37.5 10.335 37.5 20C37.5 29.665 29.665 37.5 20 37.5C10.335 37.5 2.5 29.665 2.5 20C2.5 10.335 10.335 2.5 20 2.5ZM20 18.5361L14.0771 12.6133L12.6631 14.0273L18.5859 19.9502L12.6631 25.873L14.0771 27.2871L20 21.3643L25.9229 27.2871L27.3369 25.873L21.4141 19.9502L27.3369 14.0273L25.9229 12.6133L20 18.5361Z\" fill=\"#373737\"/></svg>"
    }
  },
  "i-06": {
    "_": {
      "16": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.7105 7.54033C11.964 7.7942 11.9642 8.20653 11.7105 8.46025L6.21051 13.9603L5.29059 13.0403L10.3306 8.00029L5.29059 2.96025L6.21051 2.04033L11.7105 7.54033Z\" fill=\"#373737\"/></svg>",
      "20": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.1301 9.4637C15.2707 9.6042 15.3496 9.79521 15.3498 9.99397C15.3499 10.1929 15.2707 10.3835 15.1301 10.5242L8.1301 17.5301L7.06955 16.4696L13.5393 9.99495L7.06955 3.5301L8.1301 2.46956L15.1301 9.4637Z\" fill=\"#373737\"/></svg>",
      "24": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.6016 11.3703C17.8932 11.6629 17.8932 12.1371 17.6016 12.4298L9.07129 20.9894L8.00879 19.9308L16.0107 11.8996L8.00879 3.86928L9.07129 2.81069L17.6016 11.3703Z\" fill=\"#373737\"/></svg>",
      "32": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23.3413 15.4897C23.6331 15.7823 23.6328 16.2565 23.3413 16.5492L11.9614 27.9496L11.4302 27.4193L10.8989 26.89L21.7505 16.019L10.8989 5.13907L11.9614 4.08048L23.3413 15.4897Z\" fill=\"#373737\"/></svg>",
      "40": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M29.3369 19.2929C29.5244 19.4804 29.6298 19.7348 29.6298 19.9999C29.6298 20.2651 29.5244 20.5194 29.3369 20.707L14.9169 35.1269L13.5029 33.7128L27.2158 19.9999L13.5029 6.28703L14.9169 4.87297L29.3369 19.2929Z\" fill=\"#373737\"/></svg>"
    }
  },
  "i-24": {
    "_": {
      "16": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.20007 1.32998C10.3754 1.33019 12.9499 3.90465 12.9501 7.07998C12.95 8.43819 12.4769 9.68502 11.6893 10.6688L14.58 13.5604L14.12 14.0194L13.661 14.4794L10.7675 11.5868C9.78701 12.364 8.54831 12.8299 7.20007 12.83C4.02475 12.8298 1.45028 10.2553 1.45007 7.07998C1.45028 3.90465 4.02475 1.33019 7.20007 1.32998ZM7.20007 2.63076C4.74272 2.63097 2.75107 4.62262 2.75085 7.07998C2.75107 9.53734 4.74272 11.53 7.20007 11.5302C9.65743 11.53 11.6501 9.53734 11.6503 7.07998C11.6501 4.62262 9.65743 2.63097 7.20007 2.63076Z\" fill=\"#373737\"/></svg>",
      "20": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.11011 1.71997C13.1362 1.71999 16.4001 4.98387 16.4001 9.01001C16.4001 10.7609 15.7815 12.3665 14.7527 13.6233L18.5115 17.3909L17.9802 17.9202L17.449 18.4504L13.6882 14.6809C12.4366 15.6926 10.8448 16.3 9.11011 16.3C5.08396 16.3 1.82009 13.0361 1.82007 9.01001C1.82007 4.98385 5.08395 1.71997 9.11011 1.71997ZM9.11011 3.21997C5.91238 3.21997 3.32007 5.81228 3.32007 9.01001C3.32009 12.2077 5.91239 14.8 9.11011 14.8C12.3078 14.8 14.9001 12.2077 14.9001 9.01001C14.9001 5.81229 12.3078 3.21999 9.11011 3.21997Z\" fill=\"#373737\"/></svg>",
      "24": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.8203 2C15.6251 2.00011 19.5205 5.89538 19.5205 10.7002C19.5205 12.8402 18.7456 14.7981 17.4639 16.3135L22.1504 20.999L21.6201 21.5303L21.0889 22.0605L16.4014 17.3721C14.8905 18.6373 12.9449 19.4003 10.8203 19.4004C6.0155 19.4004 2.12022 15.505 2.12012 10.7002C2.12012 5.89532 6.01544 2 10.8203 2ZM10.8203 3.5C6.84386 3.5 3.62012 6.72375 3.62012 10.7002C3.62022 14.6766 6.84393 17.9004 10.8203 17.9004C14.7966 17.9003 18.0204 14.6765 18.0205 10.7002C18.0205 6.72381 14.7967 3.50011 10.8203 3.5Z\" fill=\"#373737\"/></svg>",
      "32": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.1704 2.62988C20.4884 2.63011 25.6099 7.75232 25.6099 14.0703C25.6098 16.9724 24.5265 19.6199 22.7456 21.6367L29.2104 28.1094L28.6802 28.6396L28.1489 29.1699L21.6812 22.6934C19.6713 24.4454 17.0461 25.5097 14.1704 25.5098C7.85242 25.5098 2.73021 20.3883 2.72998 14.0703C2.72998 7.75217 7.85227 2.62988 14.1704 2.62988ZM14.1704 4.12988C8.6807 4.12988 4.22998 8.5806 4.22998 14.0703C4.23021 19.5598 8.68084 24.0098 14.1704 24.0098C19.6598 24.0095 24.1096 19.5597 24.1099 14.0703C24.1099 8.58075 19.6599 4.13011 14.1704 4.12988Z\" fill=\"#373737\"/></svg>",
      "40": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.9404 3.56006C25.8269 3.56021 32.2197 9.9538 32.2197 17.8403C32.2197 21.4413 30.8858 24.7299 28.6865 27.2417L36.668 35.2231L35.2539 36.6372L27.2676 28.6509C24.7654 30.8117 21.506 32.1196 17.9404 32.1196C10.0539 32.1196 3.6603 25.7268 3.66016 17.8403C3.66016 9.95371 10.0538 3.56006 17.9404 3.56006ZM17.9404 5.56006C11.1584 5.56006 5.66016 11.0583 5.66016 17.8403C5.6603 24.6223 11.1585 30.1196 17.9404 30.1196C24.7223 30.1195 30.2196 24.6222 30.2197 17.8403C30.2197 11.0584 24.7224 5.56021 17.9404 5.56006Z\" fill=\"#373737\"/></svg>"
    }
  },
  "i-67": {
    "_": {
      "16": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.52 3.29L5.64002 12.21L1.52002 8.11\" stroke=\"#373737\" stroke-width=\"1.3\" stroke-linejoin=\"round\"/></svg>",
      "20": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.27 4.34L6.99002 15.66L1.77002 10.46\" stroke=\"#373737\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>",
      "24": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.01 5.14L8.35001 18.86L2.01001 12.56\" stroke=\"#373737\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>",
      "32": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M29.5 6.52L11.05 25.05L2.5 16.53\" stroke=\"#373737\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>",
      "40": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M36.75 8.5L13.86 31.5L3.25 20.93\" stroke=\"#373737\" stroke-width=\"2\" stroke-linejoin=\"round\"/></svg>"
    }
  },
  "i-05": {
    "_": {
      "16": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.7102 2.96025L5.67012 8.00029L10.7102 13.0403L9.79024 13.9603L4.29024 8.46025C4.16842 8.33843 4.0999 8.17256 4.09981 8.00029C4.09981 7.8279 4.16834 7.66223 4.29024 7.54033L9.79024 2.04033L10.7102 2.96025Z\" fill=\"#373737\"/></svg>",
      "20": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.9302 3.53046L6.46045 10.0041L12.9302 16.4699L11.8696 17.5305L4.86963 10.5363C4.72899 10.3958 4.65006 10.2049 4.6499 10.006C4.64983 9.80717 4.72908 9.61647 4.86963 9.47577L11.8696 2.46991L12.9302 3.53046Z\" fill=\"#373737\"/></svg>",
      "24": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.4606 3.56032L15.9909 4.09059L7.98993 12.1004L15.9909 20.1101L15.4606 20.6404L14.9294 21.1707L6.40008 12.6306C6.10761 12.3378 6.10761 11.8629 6.40008 11.5701L14.9294 3.03004L15.4606 3.56032Z\" fill=\"#373737\"/></svg>",
      "32": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.5799 4.58026L21.1112 5.11053L10.2499 15.9797L21.1112 26.8498L20.5799 27.3801L20.0497 27.9103L8.66002 16.5099C8.3675 16.2171 8.36746 15.7432 8.66002 15.4504L20.0497 4.04999L20.5799 4.58026Z\" fill=\"#373737\"/></svg>",
      "40": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M26.4971 6.28703L12.7842 19.9989L26.4971 33.703L25.083 35.1171L10.6631 20.707C10.4756 20.5195 10.3702 20.265 10.3701 19.9999C10.3702 19.7348 10.4756 19.4804 10.6631 19.2929L25.083 4.87297L26.4971 6.28703Z\" fill=\"#373737\"/></svg>"
    }
  },
  "i-19": {
    "_": {
      "16": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.9999 2.91698L8.91882 8.00096L13.9999 13.0849L13.5399 13.5439L13.08 14.0039L8.00085 8.91991L2.92175 14.0039L2.46179 13.5439L2.00183 13.0849L7.08191 8.00096L2.00183 2.91698L2.92175 1.99901L8.00085 7.08104L13.08 1.99901L13.9999 2.91698Z\" fill=\"#373737\"/></svg>",
      "20": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.519 3.54054L11.0601 9.99953L17.519 16.4595L16.9888 16.9907L16.4585 17.521L9.99951 11.0611L3.54053 17.521L3.01025 16.9907L2.47998 16.4595L8.93799 9.99953L2.47998 3.54054L3.54053 2.48L9.99951 8.93898L16.4585 2.48L17.519 3.54054Z\" fill=\"#373737\"/></svg>",
      "24": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.0198 3.84883L13.0618 11.9846L21.1985 19.9387L20.6741 20.4748L20.1506 21.0109L12.0129 13.0568L4.05005 21.1984L2.97778 20.1496L10.9407 12.008L2.80005 4.05098L3.84888 2.97871L11.9885 10.9357L19.9475 2.8L21.0198 3.84883Z\" fill=\"#373737\"/></svg>",
      "32": "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.0015 5.05916L17.0601 15.9996L28.0015 26.941L26.941 28.0015L15.9996 17.0601L5.05914 28.0015L3.9986 26.941L14.939 15.9996L3.9986 5.05916L5.05914 3.99861L15.9996 14.939L26.941 3.99861L28.0015 5.05916Z\" fill=\"#373737\"/></svg>",
      "40": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M35.0029 6.41406L21.415 20.001L35.0029 33.5889L33.5889 35.0029L20.001 21.415L6.41406 35.0029L5 33.5889L18.5869 20.001L5 6.41406L6.41406 5L20.001 18.5869L33.5889 5L35.0029 6.41406Z\" fill=\"#373737\"/></svg>"
    }
  },
  "social-media": {
    "fb": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM20 1C9.50659 1 1 9.50659 1 20C1 30.4934 9.50659 39 20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1ZM19.1982 8.04395C20.7067 6.63125 22.5934 6.47381 26.667 6.82715V11.085H23.6865C22.7496 11.0852 21.9905 11.8749 21.9902 12.8496V16.4404H26.4785L25.9316 21.1494H21.9902V33.333H17.2939V21.1494H13.333V16.4404H17.2754V12.791C17.2755 10.8296 17.997 9.1687 19.1982 8.04395Z\" fill=\"#A3A3A3\"/></svg>",
    "youtube": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM20 1C9.50659 1 1 9.50659 1 20C1 30.4934 9.50659 39 20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1ZM19.7461 10.667C23.1255 10.667 26.4361 10.8197 29.6533 11.1123C31.3458 11.2662 32.7071 12.5603 32.9434 14.2383C33.1955 16.0301 33.333 17.9719 33.333 20C33.333 22.0279 33.1954 23.9697 32.9434 25.7617C32.7071 27.4397 31.3459 28.7338 29.6533 28.8877C26.4361 29.1805 23.1255 29.333 19.7461 29.333C16.5509 29.333 13.4175 29.1967 10.3662 28.9346C8.66956 28.7884 7.30236 27.4922 7.06348 25.8115C6.80675 24.0058 6.66699 22.0466 6.66699 20C6.667 17.9533 6.80696 15.9943 7.06348 14.1885C7.30258 12.5077 8.66971 11.2113 10.3662 11.0654C13.4176 10.8031 16.5509 10.667 19.7461 10.667ZM17.3359 24.0293L24.2617 20.0381L17.3359 16.0469V24.0293Z\" fill=\"#A3A3A3\"/></svg>",
    "linkedin": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM20 1C9.50659 1 1 9.50659 1 20C1 30.4934 9.50659 39 20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1ZM14.3682 30.958H9.39453V14.9551H14.3682V30.958ZM27.0361 14.5566C32.072 14.5566 33.0009 17.8698 33.001 22.1797L32.999 30.958H28.0293V23.1768C28.0293 21.3198 27.9961 18.9317 25.4453 18.9316C22.8563 18.9316 22.4609 20.954 22.4609 23.041V30.958H17.4922V14.9551H22.2617V17.1416H22.3291C23.3021 15.4787 25.1102 14.4847 27.0361 14.5566ZM11.8828 7C13.4758 7 14.7666 8.29079 14.7666 9.88379C14.7675 11.4757 13.4767 12.7676 11.8838 12.7676C10.291 12.7675 9.00014 11.4766 9 9.88477C8.999 8.29183 10.2899 7.0011 11.8828 7Z\" fill=\"#A3A3A3\"/></svg>",
    "line": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM20 1C9.50659 1 1 9.50659 1 20C1 30.4934 9.50659 39 20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1ZM20 8C27.3516 8 33.3328 12.8396 33.333 18.7881C33.333 21.1684 32.4074 23.313 30.4756 25.4258C27.6778 28.6363 21.423 32.5458 20 33.1436C18.5773 33.7416 18.7866 32.764 18.8447 32.4277C18.8786 32.2277 19.0352 31.2891 19.0352 31.2891C19.0801 30.9493 19.1264 30.4237 18.9922 30.0879C18.8428 29.7175 18.2515 29.525 17.8174 29.4316C11.4102 28.5874 6.66699 24.1208 6.66699 18.7881C6.66718 12.8396 12.6484 8.00001 20 8ZM11.3008 15.9131C11.1574 15.9131 11.0402 16.029 11.04 16.1719V21.9648C11.0401 22.0342 11.0681 22.0975 11.1123 22.1436L11.1201 22.1514C11.1667 22.1956 11.2301 22.2226 11.2998 22.2227H15.0361C15.1793 22.2227 15.2959 22.1069 15.2959 21.9639V21.0312C15.2958 20.8886 15.1792 20.7725 15.0361 20.7725H12.4951V16.1719C12.4949 16.029 12.3784 15.9131 12.2354 15.9131H11.3008ZM16.3555 15.9141C16.212 15.9141 16.0957 16.0295 16.0957 16.1719V21.9648C16.0959 22.1074 16.2122 22.2226 16.3555 22.2227H17.291C17.4337 22.2227 17.5506 22.1074 17.5508 21.9648V16.1719C17.5508 16.0295 17.4339 15.9141 17.291 15.9141H16.3555ZM18.7197 15.9141C18.5762 15.9141 18.46 16.0295 18.46 16.1719V21.9648C18.4602 22.1074 18.5764 22.2227 18.7197 22.2227H19.6543C19.7973 22.2227 19.9148 22.1074 19.915 21.9648V18.5244L22.5801 22.1133C22.5983 22.139 22.6217 22.1608 22.6465 22.1777L22.6494 22.1797C22.6545 22.1835 22.66 22.1866 22.665 22.1895L22.6846 22.1992C22.6888 22.2008 22.693 22.2035 22.6973 22.2051C22.7 22.206 22.7029 22.2064 22.7051 22.207C22.7112 22.2093 22.7169 22.2113 22.7227 22.2129C22.7239 22.2129 22.7253 22.2135 22.7266 22.2139C22.7474 22.2197 22.7699 22.2226 22.793 22.2227H23.7285C23.8718 22.2225 23.9881 22.1073 23.9883 21.9648V16.1719C23.9883 16.0296 23.8719 15.9142 23.7285 15.9141H22.793C22.6496 15.9142 22.5332 16.0295 22.5332 16.1719V19.6133L19.8711 16.0283C19.8649 16.0189 19.8578 16.0104 19.8506 16.002L19.8486 16.001C19.8434 15.9954 19.8382 15.9893 19.833 15.9844C19.8315 15.9832 19.8296 15.9823 19.8281 15.9805C19.8236 15.9766 19.8197 15.9726 19.8145 15.9688C19.8126 15.9669 19.8102 15.9656 19.8086 15.9639C19.8041 15.9606 19.7991 15.957 19.7949 15.9541L19.7871 15.9492C19.7825 15.9466 19.777 15.9447 19.7725 15.9424C19.7696 15.9411 19.7675 15.9397 19.7646 15.9385C19.7599 15.9359 19.7554 15.933 19.75 15.9316C19.7471 15.9303 19.7438 15.9294 19.7412 15.9287C19.736 15.9268 19.7304 15.9254 19.7256 15.9238C19.7225 15.9232 19.7199 15.9218 19.7168 15.9209C19.7119 15.9196 19.7064 15.9193 19.7012 15.918C19.698 15.9174 19.6939 15.9173 19.6904 15.917C19.6863 15.9164 19.6815 15.9154 19.6768 15.915L19.6641 15.9141H18.7197ZM25.1562 15.9131C25.0864 15.9131 25.0238 15.9414 24.9766 15.9863C24.9759 15.9873 24.974 15.9883 24.9736 15.9893C24.9721 15.9908 24.971 15.9926 24.9697 15.9941C24.9251 16.0406 24.8976 16.1028 24.8975 16.1719V21.9648C24.8976 22.0343 24.9251 22.0975 24.9697 22.1436C24.971 22.1448 24.9724 22.1459 24.9736 22.1475C24.9743 22.1484 24.9762 22.1494 24.9775 22.1504C25.0241 22.1949 25.0866 22.2226 25.1562 22.2227H28.8926C29.0361 22.2227 29.1523 22.1069 29.1523 21.9639V21.0312C29.1522 20.8886 29.036 20.7725 28.8926 20.7725H26.3516V19.7939H28.8926C29.0361 19.7939 29.1523 19.6773 29.1523 19.5342V18.6025C29.1523 18.4591 29.0361 18.3428 28.8926 18.3428H26.3516V17.3643H28.8926C29.036 17.3643 29.1522 17.2481 29.1523 17.1055V16.1729C29.1523 16.0295 29.0361 15.9131 28.8926 15.9131H25.1562Z\" fill=\"#A3A3A3\"/></svg>"
  }
}
```

---

## 12. 實作備註 Implementation Notes

- **綁定狀態已驗證（全部本地、非外部來源）：** 逐一檢查 49 個變體，全部綁定至**本地** `Primitive` 集合的色彩變數——`gray/gray900 | #373737`（`VariableID:1:895`，`remote:false`）與 `gray/gray400 | #A3A3A3`（`VariableID:1:890`，`remote:false`）；**0 個**綁定至 remote／發佈庫變數、**0 個**寫死 hex、**0 個**舊版重複命名。工具圖示（`i-01`、`i-03`、`i-06`、`i-19`、`i-24`、`i-67`、`i-05`）的 `Union`／`Subtract`／`Vector`（`i-03` filled 為 `Group → Subtract`）綁定 `gray/gray900`；`i-67` 為真描邊 `Vector`，綁定 **stroke** 並帶 `stroke-width` 1.3／1.5／1.5／1.5／2；`social-media` 四個品牌圖示綁定 `gray/gray400`。**§11 內嵌 SVG 的 hex 僅為佔位，重建時務必改綁上述本地變數，切勿綁定任何遠端／發佈庫的 gray900／gray400。**
- **來源頁面為 `Icons`：** 本檔原記載的 `Icon-IconFont` 頁面並不存在，已更正為實際頁面名稱 `Icons`（node `290:1438`）。
- **Icon Grid 已全數刪除：** 原本 49 個變體中有 25 個（如全部 `i-03`）內含 `Icon Grid` 對齊輔助 instance，現已從所有元件**刪除**，每個變體僅保留圖示本體，檔案更乾淨。重建時請勿再加入 grid。
- **變體命名已正規化：** `i-05`、`i-19`、`i-67` 三組描邊圖示的變體名稱原有不一致的逗號間距（如 `Size=16,Theme=stroke,Weight=1.3` 與 `Size=40, Theme=stroke,Weight=2`），已統一為 `Size=<px>, Theme=stroke, Weight=<value>`（逗號後單一空格），共修正 7 個變體。
- **§11 為離線重建的唯一來源：** 由於這些圖示是**同一本地檔案內其他元件的實際依賴**（如 Buttons 用 `i-01`、TextField 用 `i-24`／`i-03`、Selections 用 `i-67`），§11 已內嵌每個變體的**精確 frame 尺寸 SVG**。安裝端**無需存取來源 Figma 檔**即可 1:1 重建：逐一匯入對應 SVG、維持 `Size` px、再依 §5 綁定色彩變數。切勿以單一路徑跨尺寸縮放——每個尺寸皆為獨立微調的圖形。
- **重建須沿用變數：** 匯入 SVG 後，務必以本地色彩變數取代 SVG 內的 hex（`#373737` → `gray/gray900`、`#A3A3A3` → `gray/gray400`），勿保留寫死 hex。
