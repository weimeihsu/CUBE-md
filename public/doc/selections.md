# 選擇元件規格 Selection Components Spec

> **前置作業 Prerequisites**
> 請先完成以下匯入，再依本文件建立選擇元件庫：
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
| `gray/gray100` | `#F5F5F5` |
| `gray/gray300` | `#BDBDBD` |
| `gray/gray500` | `#898989` |
| `gray/gray600` | `#707070` |
| `gray/gray900` | `#373737` |
| `green/green500` | `#1D9C58` |
| `red/red500` | `#EC5555` |
| `red/red700` | `#BC0000` |

### 間距 Spacing

| Variable Name | Value | 用途 Usage |
|---|---|---|
| `xxs` | `4` | Selection Item 圖標與文字間距 |
| `sm` | `8` | Checkbox / Radio Button 含標籤左 padding 填充；錯誤訊息上方間距；Selection Item 勾選後左 padding |
| `md` | `12` | Selection Item 上下 padding 及未選中左右 padding |

### 圓角 Radius

| Variable Name | Value | 用途 Usage |
|---|---|---|
| `s` | `4` | Checkbox 勾選框圓角 |
| `md` | `6` | Selection Item 圓角 |
| `full` | `100` | Radio Button 圓角（完整圓形） |

### 字體 Typography

| Variable Name | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| `NotoSansTC/14px/Regular` | Noto Sans TC | 14 | Regular / 400 | 1.5 |
| `NotoSansTC/16px/Regular` | Noto Sans TC | 16 | Regular / 400 | 1.5 |

---

## 元件 1 — 核取方塊（圖標）Checkbox

**Component name:** `Checkbox`
**Node reference:** `27:12274`

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Selected` | Variant | `On` / `Off` |
| `State` | Variant | `Enabled` / `Disabled` / `Error` |

> `State=Error` 僅適用於 `Selected=Off`。

### 版本規格 Variant Specs

Frame 設定：
- Size: 20 × 20px
- Corner Radius: `s` = 4px

| Selected | State | Fill | Stroke | Checkmark | Opacity |
|---|---|---|---|---|---|
| Off | Enabled | `gray/gray0` | `gray/gray500` / 1px | — | 100% |
| Off | Disabled | `gray/gray100` | `gray/gray300` / 1px | — | 50% |
| Off | Error | `gray/gray0` | `red/red500` / 1px | — | 100% |
| On | Enabled | `green/green500` | `green/green500` / 1px | `ic_a11y_tick`，白色 | 100% |
| On | Disabled | `gray/gray600` | `gray/gray600` / 1px | `ic_a11y_tick`，白色 | 50% |

勾選圖標 Checkmark Icon：
- Source: `ic_a11y_tick`
- Size: 16 × 16px，居中於方框內

---

## 元件 2 — 核取方塊（含標籤）Small Checkbox

**Component name:** `Small Checkbox`
**Node reference:** `27:11977`

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Selected` | Variant | `true` / `false` |
| `State` | Variant | `Enabled` / `Selected` / `Disabled` / `Error` |
| `Size` | Variant | `s` / `lg` |

> `State=Selected` 代表已勾選狀態（`Selected=true`）；`State=Error` 僅適用於 `Selected=false`。

### 版本規格 Variant Specs

Frame 設定：
- Layout: Horizontal Auto Layout, 垂直居中對齊
- Padding Left: 28px（勾選框絕對定位於左側；20px 框 + 8px 間距）
- 勾選框絕對定位：`left: 0`；`top: 0.5px`（Size=s）/ `top: 2px`（Size=lg）
- 勾選框外觀與元件 1 相同

| Selected | State | Box Fill | Box Stroke | Label Color | Opacity |
|---|---|---|---|---|---|
| false | Enabled | `gray/gray0` | `gray/gray500` / 1px | `gray/gray600` | 100% |
| false | Disabled | `gray/gray100` | `gray/gray300` / 1px | `gray/gray600` | 50% |
| false | Error | `gray/gray0` | `red/red500` / 1px | `gray/gray600` | 100% |
| true | Selected | `green/green500` | `green/green500` / 1px | `gray/gray600` | 100% |
| true | Disabled | `gray/gray600` | `gray/gray600` / 1px | `gray/gray600` | 50% |

錯誤訊息（State=Error 時顯示於元件下方）：
- Typography: `NotoSansTC/14px/Regular`
- Color: `red/red700` = `#BC0000`
- Padding top: `sm` = 8px

Typography:
- Size `s`: `NotoSansTC/14px/Regular` → Noto Sans TC, Regular, 14px, lh 1.5
- Size `lg`: `NotoSansTC/16px/Regular` → Noto Sans TC, Regular, 16px, lh 1.5

---

## 元件 3 — 單選框（圖標）Radio Button

**Component name:** `Radio Button`
**Node reference:** `99:844`

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Selected` | Variant | `On` / `Off` |
| `State` | Variant | `Enabled` / `Disabled` / `Error` |

> `State=Error` 僅適用於 `Selected=Off`。

### 版本規格 Variant Specs

Frame 設定：
- Size: 20 × 20px
- Corner Radius: `full` = 100px（完整圓形）

| Selected | State | Fill | Stroke | Inner Dot | Opacity |
|---|---|---|---|---|---|
| Off | Enabled | `gray/gray0` | `gray/gray500` / 1px | — | 100% |
| Off | Disabled | `gray/gray100` | `gray/gray300` / 1px | — | 50% |
| Off | Error | `gray/gray0` | `red/red500` / 1px | — | 100% |
| On | Enabled | `green/green500` | — | `gray/gray0`，8 × 8px，Corner Radius `full`，居中 | 100% |
| On | Disabled | `gray/gray600` | — | `gray/gray0`，8 × 8px，Corner Radius `full`，居中 | 50% |

> 50% opacity 套用於 `container` 圓形底板（Disabled 狀態），而非整個元件層級。

---

## 元件 4 — 單選框（含標籤）Radio Button with Label

**Component name:** `Radio Button`（含標籤版本）
**Node reference:** `99:775`

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Selected` | Variant | `On` / `Off` |
| `State` | Variant | `Enabled` / `Disabled` / `Error` |

> `State=Error` 僅適用於 `Selected=Off`。

### 版本規格 Variant Specs

Frame 設定：
- Layout: Horizontal Auto Layout, 垂直居中對齊
- Padding Left: 28px（單選框絕對定位於左側；`left: 0`、`top: 2px`）
- 單選框外觀與元件 3 相同

標籤文字：

| State | Label Color | Opacity |
|---|---|---|
| Enabled | `gray/gray600` | 100% |
| Disabled | `gray/gray600` | 50% |
| Error | `gray/gray600` | 100% |

> Disabled 狀態：`label-text` 設為 50% opacity；`Selected=On` 時，內嵌的 `Radio Button` instance 同樣設為 50% opacity。

錯誤訊息（State=Error 時顯示於元件下方）：
- Typography: `NotoSansTC/14px/Regular`
- Color: `red/red700` = `#BC0000`
- Padding top: `sm` = 8px

Typography: `NotoSansTC/16px/Regular` → Noto Sans TC, Regular, 16px, lh 1.5

---

## 元件 5 — 單選項目 Selection Item

**Component name:** `Selection Item`
**Node reference:** `28:4229`

### 使用說明

單一可點擊選項卡片，供使用者從多個並排選項中擇一。

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Selected` | Variant | `On` / `Off` |
| `State` | Variant | `Enabled` / `Disabled` / `Error` |

> `State=Error` 僅適用於 `Selected=Off`。

### 版本規格 Variant Specs

外框 (container) 設定：
- Fill: `gray/gray0`
- Corner Radius: `md` = 6px
- Width: 142px（固定）
- Height: 48px

內層 state-layer 設定：
- Layout: Horizontal Auto Layout, 主軸與交叉軸均居中對齊
- Border: 1px solid（顏色依狀態）
- Corner Radius: `md` = 6px
- Padding 上下: `md` = 12px
- Padding 左右（未選中）: `md` = 12px
- Padding 左（已選中）: `sm` = 8px；Padding 右（已選中）: `md` = 12px
- Gap（圖標與文字）: `xxs` = 4px

| Selected | State | Border | Text Color | Checkmark | Opacity |
|---|---|---|---|---|---|
| Off | Enabled | `gray/gray500` | `gray/gray600` | — | 100% |
| Off | Disabled | `gray/gray500` | `gray/gray600` | — | 50% |
| Off | Error | `red/red500` | `gray/gray600` | — | 100% |
| On | Enabled | `green/green500` | `green/green500` | `i-67`，`green/green500` | 100% |
| On | Disabled | `gray/gray500` | `gray/gray900` | `i-67`，gray | 50% |

勾選圖標：
- Source: `i-67`（Icon-IconFont 頁面）
- Size: 16 × 16px，stroke 風格

Typography: `NotoSansTC/16px/Regular` → Noto Sans TC, Regular, 16px, lh 1.5
