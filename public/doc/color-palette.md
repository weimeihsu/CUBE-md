# Color Palette Guidelines

The primitive color palette and how to re-create it. This is the single source of
truth for the base color tokens. It is written so designers and AI agents can
rebuild the exact same system: **import the colors into the Variables panel**
*and* **create a `Color` page that renders the swatch grid**.

Source: Figma file `kkyAx6QTTNF6ZyB9rSeN6W`, Variables collection **Primitive**.

---

## 1. Overview

- All base colors live in one variable collection named **`Primitive`** (single mode).
- **68 color variables** across **6 color sets**: `blue`, `green`, `purple`,
  `red`, `orange` (11 steps each) and `gray` (13 steps).
- Variables are named with a `group/groupWeight | #HEX` path so Figma nests them as
  `blue ▸ blue100 …` in the Variables panel, and the suffix shows the color at a glance.
- The hex values in the name suffix and in the tables below are in sync and authoritative.

---

## 2. Color tokens

Weight steps per set: `100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 1000`
(gray additionally has `0` and `1100`). Lower = lighter, higher = darker.

### blue
| Token | Hex |
| ----- | --- |
| `blue100`  | `#E9F6FE` |
| `blue150`  | `#CAECFF` |
| `blue200`  | `#AAE1FF` |
| `blue300`  | `#67C7FB` |
| `blue400`  | `#35ADED` |
| `blue500`  | `#1890D2` |
| `blue600`  | `#0C76B0` |
| `blue700`  | `#076193` |
| `blue800`  | `#044D75` |
| `blue900`  | `#033A59` |
| `blue1000` | `#02293D` |

### green
| Token | Hex |
| ----- | --- |
| `green100`  | `#E9F8F0` |
| `green150`  | `#CBEFDC` |
| `green200`  | `#ADE6C7` |
| `green300`  | `#6ED09B` |
| `green400`  | `#3BB875` |
| `green500`  | `#1D9C58` |
| `green600`  | `#0F8144` |
| `green700`  | `#0A6A36` |
| `green800`  | `#06542A` |
| `green900`  | `#044020` |
| `green1000` | `#032C16` |

### purple
| Token | Hex |
| ----- | --- |
| `purple100`  | `#F3F4FF` |
| `purple150`  | `#E3E6FF` |
| `purple200`  | `#D3D7FF` |
| `purple300`  | `#B2B8FF` |
| `purple400`  | `#929BFE` |
| `purple500`  | `#757EEC` |
| `purple600`  | `#5E66CC` |
| `purple700`  | `#4C53AC` |
| `purple800`  | `#3C418A` |
| `purple900`  | `#2D3169` |
| `purple1000` | `#1F2249` |

### red
| Token | Hex |
| ----- | --- |
| `red100`  | `#FDF2F2` |
| `red150`  | `#FCE1E1` |
| `red200`  | `#FACFCF` |
| `red300`  | `#F7A9A9` |
| `red400`  | `#F38282` |
| `red500`  | `#EC5555` |
| `red600`  | `#DD1B1B` |
| `red700`  | `#BC0000` |
| `red800`  | `#970000` |
| `red900`  | `#750000` |
| `red1000` | `#550000` |

### orange
| Token | Hex |
| ----- | --- |
| `orange100`  | `#FFF3E6` |
| `orange150`  | `#FFE2C2` |
| `orange200`  | `#FFD19D` |
| `orange300`  | `#FFAB50` |
| `orange400`  | `#F28815` |
| `orange500`  | `#D56C00` |
| `orange600`  | `#B25700` |
| `orange700`  | `#944600` |
| `orange800`  | `#763700` |
| `orange900`  | `#592A00` |
| `orange1000` | `#3F1D00` |

### gray
| Token | Hex |
| ----- | --- |
| `gray0`    | `#FFFFFF` |
| `gray100`  | `#F5F5F5` |
| `gray150`  | `#E7E7E7` |
| `gray200`  | `#D9D9D9` |
| `gray300`  | `#BDBDBD` |
| `gray400`  | `#A3A3A3` |
| `gray500`  | `#898989` |
| `gray600`  | `#707070` |
| `gray700`  | `#5C5C5C` |
| `gray800`  | `#494949` |
| `gray900`  | `#373737` |
| `gray1000` | `#262626` |
| `gray1100` | `#000000` |

---

## 3. Step 1 — Import into the Variables panel

1. Create a variable collection named **`Primitive`** with a single mode.
2. For every token in §2, create a **COLOR** variable named
   `<group>/<group><weight> | #HEX` (e.g. `blue/blue100 | #E9F6FE`) and set its
   value to the hex. The suffix doubles as a human-readable label in the panel.
3. The `group/` prefix makes Figma group them as `blue ▸ blue100 …` in the panel.
4. Scope: backgrounds/fills (`FRAME_FILL`, `SHAPE_FILL`) plus `TEXT_FILL` is fine
   for a primitive palette.

---

## 4. Step 2 — Create the `Color` page and build the swatch grid

Create a page named **`Color`** and build a grid of swatches, one row per color set.

**Container** — `Primitive Colors`, VERTICAL auto layout, item spacing `24`,
padding `0`, cross-axis align `MIN`.

**Rows** — one per set in this order: `blue, green, purple, red, orange, gray`.
Each row is a HORIZONTAL auto layout, padding `0`, cross-axis align `MIN`, and its
**item spacing is bound to `Spacing/md` (12px)** — this is the gap between swatches.

**Swatch** (one per token, ordered by ascending weight) — VERTICAL auto layout:
- Item spacing **bound to `Spacing/sm` (8px)**; primary-axis align `MIN`,
  cross-axis align `CENTER`.
- **Uniform fixed width** sized to the widest label (~`66px`) so all columns line up.
- Children, top to bottom:
  1. **Label** text = the token name (e.g. `blue100`). Text style
     `RobotoFlex/12px/Regular`, fill **bound to `gray/gray600`**, center-aligned,
     single line (hug width).
  2. **Rectangle** `56 × 56`. Fill **bound to that color variable**; all four
     corner radii **bound to `Radius/s` (4px)**.
  3. **Hex** text = the color's hex (e.g. `#E9F6FE`). Same text style and fill as
     the label, center-aligned, hug width.

Result: 6 rows (blue→gray), 11–13 swatches each, 12px gaps, aligned columns.

---

## 5. Dependencies

Building the grid in §4 reuses tokens from the other systems — create those first:
- `Spacing/md`, `Spacing/sm`, `Radius/s` — see [spacing-radius.md](spacing-radius.md)
- `gray/gray600` — this palette (§2)
- Text style `RobotoFlex/12px/Regular` — see [typography-guidelines.md](typography-guidelines.md)

---

## 6. Machine-readable spec

```json
{
  "collection": "Primitive",
  "type": "COLOR",
  "naming": "<group>/<group><weight> | #HEX",
  "groupOrder": ["blue", "green", "purple", "red", "orange", "gray"],
  "tokens": {
    "blue": {"100":"#E9F6FE","150":"#CAECFF","200":"#AAE1FF","300":"#67C7FB","400":"#35ADED","500":"#1890D2","600":"#0C76B0","700":"#076193","800":"#044D75","900":"#033A59","1000":"#02293D"},
    "green": {"100":"#E9F8F0","150":"#CBEFDC","200":"#ADE6C7","300":"#6ED09B","400":"#3BB875","500":"#1D9C58","600":"#0F8144","700":"#0A6A36","800":"#06542A","900":"#044020","1000":"#032C16"},
    "purple": {"100":"#F3F4FF","150":"#E3E6FF","200":"#D3D7FF","300":"#B2B8FF","400":"#929BFE","500":"#757EEC","600":"#5E66CC","700":"#4C53AC","800":"#3C418A","900":"#2D3169","1000":"#1F2249"},
    "red": {"100":"#FDF2F2","150":"#FCE1E1","200":"#FACFCF","300":"#F7A9A9","400":"#F38282","500":"#EC5555","600":"#DD1B1B","700":"#BC0000","800":"#970000","900":"#750000","1000":"#550000"},
    "orange": {"100":"#FFF3E6","150":"#FFE2C2","200":"#FFD19D","300":"#FFAB50","400":"#F28815","500":"#D56C00","600":"#B25700","700":"#944600","800":"#763700","900":"#592A00","1000":"#3F1D00"},
    "gray": {"0":"#FFFFFF","100":"#F5F5F5","150":"#E7E7E7","200":"#D9D9D9","300":"#BDBDBD","400":"#A3A3A3","500":"#898989","600":"#707070","700":"#5C5C5C","800":"#494949","900":"#373737","1000":"#262626","1100":"#000000"}
  },
  "swatchGrid": {
    "page": "Color",
    "container": {"name": "Primitive Colors", "layout": "VERTICAL", "itemSpacing": 24},
    "row": {"layout": "HORIZONTAL", "itemSpacingToken": "Spacing/md"},
    "swatch": {
      "layout": "VERTICAL", "itemSpacingToken": "Spacing/sm", "fixedWidth": 66,
      "label": {"textStyle": "RobotoFlex/12px/Regular", "fillToken": "gray/gray600"},
      "rect": {"size": 56, "cornerRadiusToken": "Radius/s", "fillToken": "<the color variable>"},
      "hex": {"textStyle": "RobotoFlex/12px/Regular", "fillToken": "gray/gray600"}
    }
  }
}
```
