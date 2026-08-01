# CUBE Design System — Figma Rebuild Instructions

Each `.md` file in this folder is a spec doc for one component or foundation page.
Use it to rebuild the corresponding component set in the shared Figma file.

## How to read a spec doc

- **Variable Reference** — every color, spacing, radius, and typography token listed must be bound to the Figma file's **local** variables/styles, never hardcoded as hex, px, or remote library values.
- **Variant Specs** — describes every property combination that must exist; the matrix (e.g. 4 States × 3 Text configs = 12 variants) is the source of truth.
- **實作備註 Implementation Notes** — records binding decisions and known edge cases; read this section before writing any plugin script.

## Figma Plugin API — required coding rules

### Boolean component properties must be added before `combineAsVariants`

`addComponentProperty` only works on standalone `ComponentNode`s. Once variants are combined into a `COMPONENT_SET`, calling it throws `"Can only set component property definitions on a product component"`. The correct order:

```js
comps[0].addComponentProperty('leadingIcon', 'BOOLEAN', true);  // before combine
const cs = figma.combineAsVariants(comps, page);
// read actual key format from the set after combining:
const key = Object.keys(cs.componentPropertyDefinitions).find(k => k.startsWith('leadingIcon'));
```

### Always set auto-layout sizing modes AFTER `resize()`

`resize(w, h)` sets **both** axes to `FIXED`, silently overwriting any `primaryAxisSizingMode` / `counterAxisSizingMode` set earlier. Set sizing modes after the resize call:

```js
comp.resize(296, 10);
comp.primaryAxisSizingMode = 'AUTO';   // height auto  (VERTICAL layout)
comp.counterAxisSizingMode = 'FIXED';  // width stays 296
```

The same applies to `counterAxisSizingMode = 'AUTO'` on HORIZONTAL layouts (auto height). Setting it before `resize()` is silently lost.

### Absolute-positioned floating labels

Nodes that must visually overlap the parent border (e.g. floating labels) need `layoutPositioning = 'ABSOLUTE'` and explicit `x`/`y` — they are invisible to the parent's auto-layout flow:

```js
label.layoutPositioning = 'ABSOLUTE';
label.x = 7;   // 1px border offset
label.y = -1;
```
