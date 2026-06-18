# 間距 Spacing & 圓角 Radius Guidelines

Spacing and radius tokens combined — matching the layout of the reference page
in Figma. Both sections follow the same pattern: import into the Variables panel,
then build a visual scale on the shared `Spacing & Radius` page.

Source: Figma file `kkyAx6QTTNF6ZyB9rSeN6W`, page **Spacing & Radius**,
Variable collections **Spacing** and **Radius**.

---

## 間距 Spacing

### Tokens

10 FLOAT variables in the **`Spacing`** collection (single mode), in pixels:

| Token | Value (px) |
| ----- | ---------- |
| `xxs` | 4   |
| `xs`  | 6   |
| `sm`  | 8   |
| `md`  | 12  |
| `lg`  | 16  |
| `xl`  | 20  |
| `2xl` | 24  |
| `3xl` | 32  |
| `4xl` | 40  |
| `5xl` | 80  |

### Step 1 — Import into the Variables panel

1. Create a variable collection named **`Spacing`** with a single mode.
2. For every token above, create a **FLOAT** variable with that exact name and value.
3. Scope to `GAP` and padding-related properties so they appear only in the
   relevant pickers.

### Step 2 — Build the spacing scale

On the `Spacing & Radius` page, build a row of swatches under the heading
**「間距 Spacing」**, one swatch per token, ordered by ascending value.

**Row** — `spacing scale`, HORIZONTAL auto layout, padding `0`,
cross-axis align `MIN` (top-aligned), **item spacing bound to `Spacing/md` (12px)**.

**Swatch** (per token) — VERTICAL auto layout:
- Item spacing **bound to `Spacing/sm` (8px)**; primary-axis align `MIN`,
  cross-axis align `CENTER`.
- Children top → bottom:
  1. **Label** — token name (e.g. `xxs`). Text style `RobotoFlex/12px/Regular`,
     fill bound to `gray/gray600`, center-aligned.
  2. **Block** — square `value × value` (e.g. `md` → `12 × 12`), corner radius `0`,
     fill bound to `gray/gray150`.
  3. **Value** — `"<value>px"` (e.g. `12px`). Same text style and fill as the label.

Because the row is top-aligned, labels line up across the top and blocks grow
downward into a staircase from `4 × 4` up to `80 × 80`.

---

## 圓角 Radius

### Tokens

4 FLOAT variables in the **`Radius`** collection (single mode), in pixels:

| Token  | Value (px) | Notes |
| ------ | ---------- | ----- |
| `s`    | 4   | Subtle rounding (default) |
| `md`   | 6   | Medium rounding |
| `lg`   | 12  | Large rounding |
| `full` | 100 | Fully rounded — renders as a pill / circle on blocks ≤ 200 px |

### Step 1 — Import into the Variables panel

1. Create a variable collection named **`Radius`** with a single mode.
2. For every token above, create a **FLOAT** variable with that exact name and value.
3. Scope to `CORNER_RADIUS` so they appear only in the corner-radius picker.

### Step 2 — Build the radius scale

On the same `Spacing & Radius` page, build a row of swatches under the heading
**「圓角 Radius」**, one swatch per token, ordered by ascending value, placed to the
right of the spacing scale.

**Row** — `radius scale`, HORIZONTAL auto layout, padding `0`,
cross-axis align `MIN`, **item spacing bound to `Spacing/md` (12px)**.

**Swatch** (per token) — VERTICAL auto layout:
- Item spacing **bound to `Spacing/sm` (8px)**; primary-axis align `MIN`,
  cross-axis align `CENTER`.
- Children top → bottom:
  1. **Label** — token name (e.g. `s`). Text style `RobotoFlex/12px/Regular`,
     fill bound to `gray/gray600`, center-aligned.
  2. **Block** — fixed **`80 × 80`**, fill bound to `gray/gray150`, all four corner
     radii **bound to that radius variable** (the rounding shown equals the token).
  3. **Value** — `"<value>px"` (e.g. `4px`). Same text style and fill as the label.

All blocks are the same `80 × 80` size; only the corner rounding changes, from a
slight `4 px` on `s` to a full circle on `full`.

---

## Dependencies

Both scales reuse shared tokens — create these first:

| Token | Source |
| ----- | ------ |
| `gray/gray150`, `gray/gray600` | [color-palette.md](color-palette.md) |
| `Spacing/sm`, `Spacing/md`     | Spacing section above |
| `RobotoFlex/12px/Regular`      | [typography-guidelines.md](typography-guidelines.md) |

> Build order: **typography → colors → spacing → radius → scales**.

---

## Machine-readable spec

```json
{
  "spacing": {
    "collection": "Spacing",
    "type": "FLOAT",
    "unit": "px",
    "tokens": { "xxs":4, "xs":6, "sm":8, "md":12, "lg":16, "xl":20, "2xl":24, "3xl":32, "4xl":40, "5xl":80 },
    "scalePage": {
      "page": "Spacing & Radius",
      "sectionHeading": "間距 Spacing",
      "row": { "name": "spacing scale", "layout": "HORIZONTAL", "counterAxisAlign": "MIN", "itemSpacingToken": "Spacing/md" },
      "swatch": {
        "layout": "VERTICAL", "itemSpacingToken": "Spacing/sm",
        "label":  { "textStyle": "RobotoFlex/12px/Regular", "fillToken": "gray/gray600" },
        "block":  { "size": "<value> x <value>", "cornerRadius": 0, "fillToken": "gray/gray150" },
        "value":  { "text": "<value>px", "textStyle": "RobotoFlex/12px/Regular", "fillToken": "gray/gray600" }
      }
    }
  },
  "radius": {
    "collection": "Radius",
    "type": "FLOAT",
    "unit": "px",
    "tokens": { "s":4, "md":6, "lg":12, "full":100 },
    "scalePage": {
      "page": "Spacing & Radius",
      "sectionHeading": "圓角 Radius",
      "row": { "name": "radius scale", "layout": "HORIZONTAL", "counterAxisAlign": "MIN", "itemSpacingToken": "Spacing/md" },
      "swatch": {
        "layout": "VERTICAL", "itemSpacingToken": "Spacing/sm",
        "label":  { "textStyle": "RobotoFlex/12px/Regular", "fillToken": "gray/gray600" },
        "block":  { "size": 80, "fillToken": "gray/gray150", "cornerRadiusToken": "<the radius variable>" },
        "value":  { "text": "<value>px", "textStyle": "RobotoFlex/12px/Regular", "fillToken": "gray/gray600" }
      }
    }
  }
}
```
