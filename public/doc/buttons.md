---
title: 按鈕
section: 元件
href: /components/buttons
date: 2026-06-15
description: 新增 5 種按鈕類型——動態按鈕、底部按鈕、圖示按鈕、文字連結與區塊按鈕，共 32 種變體，涵蓋填充、外框與文字樣式。所有色彩 Token 已綁定至 Figma 變數。
---

# 按鈕元件規格 Button Components Spec

> **前置作業 Prerequisites**
> 請先完成以下匯入，再依本文件建立按鈕元件庫：
> 1. 基礎設定 Base Settings
> 2. 色彩 Colors
> 3. 字體排版 Typography
> 4. 間距 Spacing
> 5. 圓角 Radius

---

## 變數對照表 Variable Reference

### 顏色 Colors

| Variable Name | Value |
|---|---|
| `gray/gray0` | `#FFFFFF` |
| `gray/gray150` | `#E7E7E7` |
| `gray/gray300` | `#BDBDBD` |
| `gray/gray500` | `#898989` |
| `gray/gray600` | `#707070` |
| `gray/gray800` | `#494949` |
| `gray/gray900` | `#373737` |
| `blue/blue1000` | `#02293D` |
| `green/green500` | `#1D9C58` |

### 間距 Spacing

| Variable Name | Value | 用途 Usage |
|---|---|---|
| `xxs` | `4` | Dynamic Button sm 上下 padding；Icon Button gap |
| `sm` | `8` | Block Button gap |
| `md` | `12` | Dynamic Button lg 上下 padding；Bottom Button state-layer 四邊 padding |
| `2xl` | `24` | Dynamic Button lg 左右 padding |
| `4xl` | `40` | Bottom Button、Icon Button 元件組外框 container padding |

### 圓角 Radius

| Variable Name | Value | 用途 Usage |
|---|---|---|
| `s` | `4` | 元件組排列外框圓角（component set wrapper，不隨 instance 匯入）|
| `md` | `6` | Dynamic Button 所有 variants；Bottom Button state-layer |
| `lg` | `12` | Block Button 外框 |

### 字體 Typography

| Variable Name | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| `NotoSansTC/16px/Bold` | Noto Sans TC | 16 | Bold / 700 | 1.5 |
| `NotoSansTC/14px/Bold` | Noto Sans TC | 14 | Bold / 700 | 1.5 |
| `NotoSansTC/32px/Bold` | Noto Sans TC | 32 | Bold / 700 | 1.5 |
| `NotoSansTC/14px/Bold` | Noto Sans TC | 14 | Bold / 700 | 1.5 |

### 懸浮效果 Hover Effect

所有 `State=Hover` variants 外觀與 `State=Enabled` 相同，額外加上陰影：

> Drop Shadow: `0px 8px 20px -5px rgba(0, 40, 61, 0.30)`

Icon Button、Text Link 與 Block Button 無 Hover 狀態。

---

## 元件 1 — 按鈕 Dynamic Button

**Component name:** `Dynamic Button`
**Node reference:** `1:3634`

### 使用說明

- 當 Touch Area 或 Focus Area 須預留左右 padding，且建議尺寸大於 48 時，使用 Text Button 而非 Text Link。

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Style` | Variant | `Filled` / `Outlined` / `Ghost` |
| `Type` | Variant | `Default` / `Green` |
| `Size` | Variant | `lg` / `sm` |
| `State` | Variant | `Enabled` / `Hover` / `Disabled` |

> `Style=Ghost` 為無填色、無外框的**文字樣式按鈕**（Figma 變體值為 `Ghost`，即設計上所稱的 Text Button）。`Type=Green` 僅在 `Style=Ghost` 時使用；Hover 僅適用於 `Style=Filled` 與 `Style=Outlined`。

### 版本規格 Variant Specs

#### Size = `lg`（大按鈕）

Frame 設定：
- Layout: Horizontal Auto Layout, 主軸居中對齊
- Padding 左右: `2xl` = 24
- Padding 上下: `md` (spacing) = 12
- Corner Radius: `md` (radius) = 6
- Min Width: 由文字撐開

| Style | Type | State | Fill | Stroke | Text Color | Opacity |
|---|---|---|---|---|---|---|
| Filled | Default | Enabled | `blue/blue1000` | — | `gray/gray0` | 100% |
| Filled | Default | Hover | `blue/blue1000` | — | `gray/gray0` | 100% |
| Filled | Default | Disabled | `gray/gray150` | — | `gray/gray300` | 100% |
| Outlined | Default | Enabled | `gray/gray0` | `blue/blue1000` / 1px | `blue/blue1000` | 100% |
| Outlined | Default | Hover | `gray/gray0` | `blue/blue1000` / 1px | `blue/blue1000` | 100% |
| Outlined | Default | Disabled | `gray/gray0` | `gray/gray900` / 1px | `gray/gray900` | 50% |
| Ghost | Default | Enabled | — | — | `blue/blue1000` | 100% |
| Ghost | Default | Disabled | — | — | `gray/gray900` | 50% |
| Ghost | Green | Enabled | — | — | `green/green500` | 100% |

Typography: `NotoSansTC/16px/Bold` → Noto Sans TC, Bold, 16px, lh 1.5

---

#### Size = `sm`（小按鈕）

Frame 設定：
- Layout: Horizontal Auto Layout, 主軸居中對齊
- Padding 左右: `md` (spacing) = 12
- Padding 上下: `xxs` = 4
- Width: Hug（由文字撐開）
- Corner Radius: `md` (radius) = 6

| Style | Type | State | Fill | Stroke | Text Color | Opacity |
|---|---|---|---|---|---|---|
| Filled | Default | Enabled | `blue/blue1000` | — | `gray/gray0` | 100% |
| Filled | Default | Hover | `blue/blue1000` | — | `gray/gray0` | 100% |
| Filled | Default | Disabled | `gray/gray150` | — | `gray/gray300` | 100% |
| Outlined | Default | Enabled | `gray/gray0` | `blue/blue1000` / 1px | `blue/blue1000` | 100% |
| Outlined | Default | Hover | `gray/gray0` | `blue/blue1000` / 1px | `blue/blue1000` | 100% |
| Outlined | Default | Disabled | `gray/gray0` | `gray/gray900` / 1px | `gray/gray900` | 50% |
| Ghost | Default | Enabled | — | — | `blue/blue1000` | 100% |
| Ghost | Default | Disabled | — | — | `gray/gray900` | 50% |
| Ghost | Green | Enabled | — | — | `green/green500` | 100% |

Typography: `NotoSansTC/14px/Bold` → Noto Sans TC, Bold, 14px, lh 1.5

---

## 元件 2 — 底部按鈕 Bottom Button

**Component name:** `Bottom Button`
**Node reference:** `1:3486`

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Style` | Variant | `Filled` / `Outlined` |
| `State` | Variant | `Enabled` / `Hover` / `Disabled` |

### 版本規格 Variant Specs

外框 (component set container，變體排列用外框，不隨 instance 匯入) 設定：
- Layout: Vertical Auto Layout
- Padding: `4xl` = 40（四邊，含 itemSpacing）

內層 state-layer 設定：
- Layout: Horizontal Auto Layout, 主軸居中對齊
- Padding: `md` (spacing) = 12（四邊）
- Corner Radius: `md` (radius) = 6
- Width: **Fill Container** — 寬度填滿父層容器，不設固定寬度

> 使用情境：單一按鈕時佔滿全寬；兩個按鈕並排時各自 Fill，等分共享寬度（間距 `md` = 12）。

| Style | State | Fill | Stroke | Text Color | Opacity |
|---|---|---|---|---|---|
| Filled | Enabled | `blue/blue1000` | — | `gray/gray0` | 100% |
| Filled | Hover | `blue/blue1000` | — | `gray/gray0` | 100% |
| Filled | Disabled | `gray/gray150` | — | `gray/gray300` | 100% |
| Outlined | Enabled | `gray/gray0` | `blue/blue1000` / 1px | `blue/blue1000` | 100% |
| Outlined | Hover | `gray/gray0` | `blue/blue1000` / 1px | `blue/blue1000` | 100% |
| Outlined | Disabled | `gray/gray0` | `gray/gray900` / 1px | `gray/gray900` | 50% |

Typography: `NotoSansTC/16px/Bold` → Noto Sans TC, Bold, 16px, lh 1.5, 居中對齊

---

## 元件 3 — 圖標按鈕 Icon Button

**Component name:** `Icon Button`
**Node reference:** `1:3760`

### 使用說明

**圖標在前 (Primary) — Icon First：**
- 簡化 UI，讓使用者快速找到並執行所需操作。
- 資訊強度較強，通常為動作按鈕，使用綠色。
- Icon 可替換：新增、下載、分享、刪除、複製、搜尋 等。

**圖標在後 (Secondary) — Icon Behind：**
- 用於改變單頁內資訊呈現的操作。
- 資訊強度較弱，使用灰色。
- Icon 可替換：展開、收合、篩選、排序 等（不建議使用右箭頭）。
- 部分重點按鈕較少的頁面，可開放使用綠色，例如「重新整理」。

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Variant` | Variant | `Primary` / `Secondary` |
| `State` | Variant | `Enabled` / `Disabled` |

### 版本規格 Variant Specs

Frame 設定：
- Layout: Horizontal Auto Layout, 垂直居中對齊
- Gap: `xxs` = 4
- Min Height: 48px
- Width: Hug
- Component set container Padding: `4xl` = 40（含 itemSpacing；變體排列用外框，不隨 instance 匯入）

| Variant | State | Icon Color | Text Color | Opacity |
|---|---|---|---|---|
| Primary | Enabled | `green/green500` | `green/green500` | 100% |
| Primary | Disabled | `gray/gray600` | `gray/gray600` | 50% |
| Secondary | Enabled | `gray/gray600` | `gray/gray600` | 100% |
| Secondary | Disabled | `gray/gray600` | `gray/gray600` | 50% |

圖標 Icon：
- Size: 16 × 16
- Source: `i-01` from `Icon-IconFont` page
- Icon 排列：Primary = 圖標在前（Icon → Text）；Secondary = 圖標在後（Text → Icon）

Typography: `NotoSansTC/14px/Bold` → Noto Sans TC, Bold, 14px, lh 1.5

---

## 元件 4 — 文字連結 Text Link

**Component name:** `Small Text Link`
**Node reference:** `1:3809`

### 使用說明

- 當 Touch Area 或 Focus Area 不用預留左右 padding 時，使用 Text Link 而非 Text Button。

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Size` | Variant | `sm` / `lg` |
| `State` | Variant | `Enabled` / `Disabled` |

### 版本規格 Variant Specs

Frame 設定：
- Layout: Horizontal Auto Layout, 垂直居中對齊
- Min Height: 48px
- Width: Hug（文字自然展開，無左右 padding）

| Size | State | Text Color | Opacity |
|---|---|---|---|
| sm (14px) | Enabled | `green/green500` | 100% |
| sm (14px) | Disabled | `gray/gray600` | 50% |
| lg (16px) | Enabled | `green/green500` | 100% |
| lg (16px) | Disabled | `gray/gray600` | 50% |

Typography:
- Size `sm`: `NotoSansTC/14px/Bold` → Noto Sans TC, Bold, 14px, lh 1.5
- Size `lg`: `NotoSansTC/16px/Bold` → Noto Sans TC, Bold, 16px, lh 1.5

---

## 元件 5 — 區塊按鈕 Block Button

**Component name:** `Block Button`
**Node reference:** `1:3860`

### 版本規格 Variant Specs

Frame 設定：
- Layout: Horizontal Auto Layout, 主軸與交叉軸均居中對齊
- Width: 320px（固定）
- Height: 72px（固定）
- Gap: `sm` = 8
- Border: 1px Dashed，顏色 `gray/gray500`
- Corner Radius: `lg` (radius) = 12

內容層：
- Icon: 16 × 16，顏色 `gray/gray600`，Source: `i-01` from `Icon-IconFont` page
- Label: 文字 `新增區塊`，顏色 `gray/gray600`

Typography: `NotoSansTC/16px/Bold` → Noto Sans TC, Bold, 16px, lh 1.5

> Block Button 無 State 或 Variant 屬性，為單一靜態版本。

---

## 實作備註 Implementation Notes

- **綁定狀態（已驗證）：** 五組按鈕（Dynamic / Bottom / Icon / Text Link / Block）的所有填色、外框、文字色、圖標色皆綁定至本地 `Primitive` 色彩變數（`gray/*`、`blue/blue1000`、`green/green500`），所有文字皆綁定本地文字樣式（`NotoSansTC/14px/Bold`、`NotoSansTC/16px/Bold`），無遠端樣式、無寫死 hex。
- **間距／圓角綁定：** 所有 padding、gap、圓角皆綁定本地 `Spacing` 與 `Radius` 集合 Token。原始檔案中 **Dynamic Button `sm` 尺寸 padding、Bottom Button `state-layer` padding、Icon Button gap** 曾誤綁至一套外部（非本地）Spacing 集合（變數名如 `Spacing - md・12`、`Spacing - xs・4`），已全數改綁本地 Token（`md`＝12、`xxs`＝4）。重建時務必使用本地集合。
- **變體命名（重要）：** Dynamic Button 的文字樣式按鈕，其 `Style` 變體值為 **`Ghost`**（非 `Text`）；`Type=Green` 僅於 `Ghost` 出現。重建變體時請完全比照 Figma 變體字串，以確保 instance 對應正確。
- **Ghost/Disabled 外框一致性：** `lg` 與 `sm` 的 `Ghost/Disabled` 變體皆為無外框的文字樣式按鈕（先前 `lg` 誤帶 1px `gray/gray900` 外框，已移除）。
- **元件組外框：** 各 COMPONENT_SET 的外框（padding `4xl`、圓角 `s`）為變體排列用容器，不隨 instance 匯入，非產品屬性。
