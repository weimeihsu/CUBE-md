---
title: 選擇元件
section: 元件
href: /components/selections
date: 2026-06-20
description: 核取方塊、單選框與單選項目卡片元件（含圖標版與含標籤版），涵蓋啟用、已選、停用、錯誤等狀態；所有色彩、文字、間距與圓角均綁定至本地變數與樣式。
---

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
- Layout: Horizontal Auto Layout, 主軸靠左對齊、交叉軸居中對齊
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
| On | Disabled | `gray/gray500` | `gray/gray900` | `i-67`，`gray/gray900` | 50% |

> 文字內容預設為「選項」。

勾選圖標：
- Source: `i-67`（`5 Icons` 頁面，見 [icons.md](icons.md)）
- Size: 16 × 16px，stroke 風格
- 顏色：`Selected=On, State=Enabled` 為 `green/green500`；`Selected=On, State=Disabled` 為 `gray/gray900`（並隨 state-layer 套用 50% opacity）

Typography: `NotoSansTC/16px/Regular` → Noto Sans TC, Regular, 16px, lh 1.5

---

## 實作備註 Implementation Notes

- **色彩綁定狀態：** 五個元件的所有色彩皆綁定至本地 `Primitive` 色彩變數（`gray/*`、`green/*`、`red/*`），無 remote 發佈庫樣式、無舊版重複命名、無寫死 hex。原先頁面填色／描邊綁定至外部發佈庫的繪製樣式（`Gray/Gray800`、`Green/Green500`、`Red/Red700` 等），已全數改綁本地變數（沿用 [buttons.md](buttons.md) 以色彩變數綁定 fill／stroke 的作法）。
- **文字綁定狀態：** 標籤（`label-text`）與錯誤訊息（`error-text`）文字皆綁定本地文字樣式 `NotoSansTC/14px/Regular` 與 `NotoSansTC/16px/Regular`。原為外部 `Android/Noto Sans TC/*` 遠端樣式，已改綁本地同尺寸樣式。
- **間距／圓角綁定狀態：** padding／gap 綁定本地 `Spacing`（`sm`＝8、`md`＝12、`xxs`＝4）；圓角綁定本地 `Radius`（`s`＝4、`md`＝6、`full`＝100）。原外部 `Spacing`／`Radius` 集合（`Spacing - md・12`、`Radius - full・100` 等）已依數值改綁本地 Token。
- **展示裝飾不列入元件色：** 頁面的區塊標題（`Title`，`gray/gray800` ＋ `NotoSansTC/32px/Bold`）、示範列底板（`green/green100` 填色 ＋ `green/green150` 邊框）與外框卡片（`gray/gray150` 邊框）皆為版面展示用裝飾，**非元件本體色彩**；雖已綁定本地變數，但不納入上方元件色表，重建元件時可忽略。
- **變體命名修正：** `Radio Button`（含標籤版，`99:775`）的 `State` 變體原有 `DIsabled` 拼字錯誤，已更正為 `Disabled`（變體 `99:794`、`99:776`）。
- **重建須沿用變數：** 所有值均以本地變數／樣式綁定，重建時請沿用變數，勿寫死 hex 或像素值。
