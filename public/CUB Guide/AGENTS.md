# CUBE Design System — Figma Rebuild Instructions

Each `.md` file in this folder is a spec doc for one component or foundation page.
Use it to rebuild the corresponding component set in the shared Figma file.

## 快速開始 Quick start

**首次安裝** — 貼給支援 Figma MCP 的 AI，並把 `[FIGMA_URL]` 換成你的**空白** Figma 檔案網址：

```text
請閱讀本資料夾中的 AGENTS.md，並將 CUBE 設計系統安裝到我的空白 Figma 檔案：[FIGMA_URL]
```

**中途停止後續建** — 貼給 AI（可開新對話）：

```text
請閱讀 AGENTS.md，檢查 Figma 檔案 [FIGMA_URL] 已建到哪一步，從中斷處接續完成剩下的。
```

> ⚠️ **對話可能中途停止——這是正常現象，進度不會遺失。** 部分頁面較耗 token（例如色彩
> 68 個變數、圖示 45 個元件），AI 可能在中途達到長度上限而停下；**已建立的內容都會保留
> 在你的 Figma 檔案裡**。此時開新對話、貼上上方「續建」Prompt 即可——AI 會先盤點 Figma
> 現況，再從中斷處接著往下做。建議讓 AI 一次只處理一個頁面，完成確認後再繼續下一個，以
> 降低中斷影響。

前置條件：AI 需已連接 **Figma MCP**（才能寫入 Figma）；`[FIGMA_URL]` 必須是**空白**檔案，非來源檔。

---

## Installation order — install ALL Base foundations first, then Components

Rebuild the files in the **exact order below**. Install **every Base foundation before
any Component**: components bind their fills, text, spacing, and radius to the Base
variables/styles, so a component built before its foundations will fail to bind.

Work through **one `.md` at a time** and confirm it is fully imported before moving to
the next.

### Base foundations (install all, in this order)

1. **Spacing & Radius** — `spacing-radius.md` — **install first.** Every other Figma
   page's auto-layout (padding, gap, corner radius) references these tokens, so they
   must exist before anything else is built.
2. **Typography** — `typography.md`
3. **Colors** — `color-palette.md`
4. **Logos** — `logos.md` — brand logo (完整/精簡) + `social-media` brand icons.
   Must precede **Header & Footer**, which places them.
5. **Icons** — `icons.md` — utility icon sets; must precede **Header & Footer** (its
   browser chrome uses `i-05`/`i-06`/`i-19`) and the other components that reference icons.
6. **Header & Footer** — `header-footer.md` — must precede **Device Layout**, which
   drops the header/footer into the device frames.
7. **Device Layout** — `device-layout.md` — **install last of the Base**; it references
   all of the foundations above (including Header & Footer).

> 🛑 **Checkpoint — after Step 7 (all 7 Base foundations done), STOP and ask the user**
> whether they want to install the three components — **Buttons**, **Selections**, and
> **Text Field**. Only continue to the Components section below once the user confirms
> (they may also choose to install just some of them).

### Components (install only after all Base foundations are done)

8. **Buttons** — `buttons.md`
9. **Selections** — `selections.md`
10. **Text Field** — `text-field.md`

> Binding rule (applies to every file): bind each color / spacing / radius / typography
> value to this file's **local** variables/styles — never hardcode hex/px, and never
> link remote/published-library values. Brand assets in `logos.md` are the sole
> exception: keep their literal brand colors, do **not** bind them to gray variables.

## How to read a spec doc

- **Variable Reference** — every color, spacing, radius, and typography token listed must be bound to the Figma file's **local** variables/styles, never hardcoded as hex, px, or remote library values.
- **Variant Specs** — describes every property combination that must exist; the matrix (e.g. 4 States × 3 Text configs = 12 variants) is the source of truth.
- **實作備註 Implementation Notes** — records binding decisions and known edge cases; read this section before writing any plugin script.

## 重建策略：複雜結構可分兩階段 Two-pass rebuild for complex structures

複雜元件（如 `header-footer.md` 的頁尾格線、`device-layout.md` 的五種畫板、`icons.md`／
`logos.md` 的大量 SVG）在單一回合內，agent 常因複雜度**壓縮或略過子節點**。這是可以接受
的——請採**兩階段**，不要為了塞進一回合而永久省略細節：

1. **第一階段（骨架草稿）：** 先建立**正確的容器結構、auto-layout 方向、尺寸模式（HUG／
   FIXED／FILL）與變數綁定**。重複或複雜的子節點（多個選單格、每個 icon／SVG 路徑、逐一
   文字）可先以佔位或最小數量帶過——**但結構與尺寸模式必須正確，不可簡化。**
2. **第二階段（補齊＋自我檢查）：** 回頭把第一階段略過／壓縮的子節點**全部補齊**，並逐項
   比對規格文件（文字內容、child count、邊框、綁定、HUG／FIXED 尺寸），修正差異後才算完成。

> ⚠️ 不要因為「第一階段已能看出大致外觀」就當作完成——**第二階段補齊細節是必要步驟**，
> 尤其是被壓縮的重複子節點與內嵌 SVG。凡標有 🔁 的文件（如 `header-footer.md`、
> `device-layout.md`）務必執行第二階段的自我檢查清單。

## Page layout convention (every rebuilt page)

Wrap each page's content in **one top-level auto-layout FRAME** so all rebuilt pages
share the same layout:

1. **Title** — first child is a text node using the **local `NotoSansTC/32px/Bold`**
   text style (from `2 Typography`). Bind the style; never hardcode the font/size.
2. **White background** — the wrapper frame's fill is **bound to `gray/gray0`**
   (`#FFFFFF`). Do **not** use a raw white literal (`{r:1,g:1,b:1}`) or `gray/gray100`.
3. **80px padding on all four sides** — bound to **`Spacing/5xl`** (= 80px), not a raw `80`.

Structure:

```
Page
└── <wrapper> FRAME — VERTICAL auto-layout
    • fill        → bind gray/gray0
    • padding ×4  → bind Spacing/5xl (80)
    ├── Title     [TEXT]  — style NotoSansTC/32px/Bold
    └── …page content…
```

**Exceptions — pages that present device / native OS chrome.** These intentionally
simulate a real device or browser context (device-width frames, their own
backgrounds), so they do **not** use the white-background wrapper or `5xl` page
padding:

- **`6 Header & Footer`** — the mobile-native / web-RWD header & footer mockups.
- **`7 Device Layout`** — the five device artboards (iOS / Android / MB / TB / DESK).

A 32px-Bold Title is still fine on these pages; just skip the `gray/gray0` background
frame and the `5xl` padding. Every other page follows the wrapper rule above.

## Figma Plugin API — required coding rules

### Boolean component properties must be added before `combineAsVariants`

`addComponentProperty` only works on standalone `ComponentNode`s. Once variants are combined into a `COMPONENT_SET`, calling it throws `"Can only set component property definitions on a product component"`. The correct order:

```js
comps[0].addComponentProperty('leadingIcon', 'BOOLEAN', true);  // before combine
const cs = figma.combineAsVariants(comps, page);
// read actual key format from the set after combining:
const key = Object.keys(cs.componentPropertyDefinitions).find(k => k.startsWith('leadingIcon'));
```

### `createNodeFromSvg` may silently drop complex paths

When a `<path d="…">` attribute is very long (e.g. Chinese character outlines, compound
logos), the SVG importer can truncate it without throwing an error. **Always verify the
resulting frame's `children.length` and call `await frame.screenshot()` before moving
children to a Component.** If the count is wrong, retry — the import is atomic and safe
to re-run.

### No overlapping variants inside a component set

Every variant in a component set must be **spaced apart — never stacked on top of one
another**. After `combineAsVariants`, variants that share the same position overlap;
they still work as instances, but the library looks broken. Lay them out with spacing —
e.g. give the set an auto-layout (`HORIZONTAL`/`GRID`) with `itemSpacing`, or set explicit
non-overlapping `x`/`y` before combining.

### Always set auto-layout sizing modes AFTER `resize()`

`resize(w, h)` sets **both** axes to `FIXED`, silently overwriting any `primaryAxisSizingMode` / `counterAxisSizingMode` set earlier. **Symptom: components end up stuck at the height passed to `resize()` (often `10px`) instead of hugging their content.** Always set sizing modes after the resize call:

```js
// ❌ WRONG — primaryAxisSizingMode is silently lost when resize() runs
comp.primaryAxisSizingMode = 'AUTO';
comp.resize(296, 10);   // ← resets BOTH axes to FIXED; AUTO is gone

// ✅ CORRECT — set sizing modes after resize()
comp.resize(296, 10);
comp.primaryAxisSizingMode = 'AUTO';   // height hugs content (VERTICAL layout)
comp.counterAxisSizingMode = 'FIXED';  // width stays 296
```

The same applies to `counterAxisSizingMode = 'AUTO'` on HORIZONTAL layouts. Setting either mode before `resize()` is silently discarded.

### Absolute-positioned floating labels

Nodes that must visually overlap the parent border (e.g. floating labels) need `layoutPositioning = 'ABSOLUTE'` and explicit `x`/`y` — they are invisible to the parent's auto-layout flow:

```js
label.layoutPositioning = 'ABSOLUTE';
label.x = 7;   // 1px border offset
label.y = -1;
```
