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

| Variable Name | Value |
|---|---|
| `Spacing - xs・4` | `4` |
| `Spacing - md・12` | `12` |
| `sm` | `8` |
| `2xl` | `24` |

### 圓角 Radius

| Variable Name | Value |
|---|---|
| `md` | `6` |
| `lg` | `12` |

### 字體 Typography

| Variable Name | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| `NotoSansTC/16px/Bold` | Noto Sans TC | 16 | Bold / 700 | 1.5 |
| `NotoSansTC/14px/Bold` | Noto Sans TC | 14 | Bold / 700 | 1.5 |
| `NotoSansTC/32px/Bold` | Noto Sans TC | 32 | Bold / 700 | 1.5 |
| `RobotoFlex/14px/Bold` | Roboto Flex | 14 | Bold / 700 | 1.5 |

---

## 元件 1 — 按鈕 Dynamic Button

**Component name:** `Dynamic Button`
**Node reference:** `1:3634`

### 使用說明

- 當 Touch Area 或 Focus Area 須預留左右 padding，且建議尺寸大於 48 時，使用 Text Button 而非 Text Link。

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Style` | Variant | `Filled` / `Outlined` / `Text` |
| `Type` | Variant | `Default` / `Green` |
| `Size` | Variant | `lg` / `sm` |
| `State` | Variant | `Enabled` / `Disabled` |

> `Type=Green` 僅在 `Style=Text` 時使用。

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
| Filled | Default | Disabled | `gray/gray150` | — | `gray/gray300` | 100% |
| Outlined | Default | Enabled | — | `blue/blue1000` / 1px | `blue/blue1000` | 100% |
| Outlined | Default | Disabled | — | `gray/gray900` / 1px | `gray/gray900` | 50% |
| Text | Default | Enabled | — | — | `blue/blue1000` | 100% |
| Text | Default | Disabled | — | — | `gray/gray900` | 50% |
| Text | Green | Enabled | — | — | `green/green500` | 100% |

Typography: `NotoSansTC/16px/Bold` → Noto Sans TC, Bold, 16px, lh 1.5

---

#### Size = `sm`（小按鈕）

Frame 設定：
- Layout: Horizontal Auto Layout, 主軸居中對齊
- Padding 左右: `Spacing - md・12` = 12
- Padding 上下: `Spacing - xs・4` = 4
- Width: 固定 52px
- Corner Radius: `md` (radius) = 6

| Style | Type | State | Fill | Stroke | Text Color | Opacity |
|---|---|---|---|---|---|---|
| Filled | Default | Enabled | `blue/blue1000` | — | `gray/gray0` | 100% |
| Filled | Default | Disabled | `gray/gray150` | — | `gray/gray300` | 100% |
| Outlined | Default | Enabled | — | `blue/blue1000` / 1px | `blue/blue1000` | 100% |
| Outlined | Default | Disabled | — | `gray/gray900` / 1px | `gray/gray900` | 50% |
| Text | Default | Enabled | — | — | `blue/blue1000` | 100% |
| Text | Default | Disabled | — | — | `gray/gray900` | 50% |
| Text | Green | Enabled | — | — | `green/green500` | 100% |

Typography: `RobotoFlex/14px/Bold` → Roboto Flex, Bold, 14px, lh 1.5

---

## 元件 2 — 底部按鈕 Bottom Button

**Component name:** `Bottom Button`
**Node reference:** `1:3486`

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Style` | Variant | `Filled` / `Outlined` |
| `State` | Variant | `Enabled` / `Disabled` |

### 版本規格 Variant Specs

外框 (wrapper) 設定：
- Width: 260px
- Layout: Vertical Auto Layout

內層 state-layer 設定：
- Layout: Horizontal Auto Layout, 主軸居中對齊
- Padding: `Spacing - md・12` = 12（四邊）
- Corner Radius: `md` (radius) = 6
- Width: Fill (100%)

| Style | State | Fill | Stroke | Text Color | Opacity |
|---|---|---|---|---|---|
| Filled | Enabled | `blue/blue1000` | — | `gray/gray0` | 100% |
| Filled | Disabled | `gray/gray150` | — | `gray/gray300` | 100% |
| Outlined | Enabled | — | `blue/blue1000` / 1px | `blue/blue1000` | 100% |
| Outlined | Disabled | — | `gray/gray900` / 1px | `gray/gray900` | 50% |

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
- Gap: `Spacing - xs・4` = 4
- Min Height: 48px
- Width: Hug

| Variant | State | Icon Color | Text Color | Opacity |
|---|---|---|---|---|
| Primary | Enabled | `green/green500` | `green/green500` | 100% |
| Primary | Disabled | `gray/gray600` | `gray/gray600` | 50% |
| Secondary | Enabled | `gray/gray600` | `gray/gray600` | 100% |
| Secondary | Disabled | `gray/gray600` | `gray/gray600` | 50% |

圖標 Icon：
- Size: 16 × 16
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
- Icon: 16 × 16（`gray/gray600` 色調）
- Label: 文字 `新增區塊`，顏色 `gray/gray600`

Typography: `NotoSansTC/16px/Bold` → Noto Sans TC, Bold, 16px, lh 1.5

> Block Button 無 State 或 Variant 屬性，為單一靜態版本。
