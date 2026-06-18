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
  "i67-16":"31:3358","i67-20":"31:3361","i67-24":"31:3364","i67-32":"31:3367","i67-40":"31:3370"
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
