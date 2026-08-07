---
title: 文字欄位
section: 元件
href: /components/text-field
date: 2026-06-22
description: 輸入框、浮動標籤輸入框與文字欄位群組元件，涵蓋啟用、聚焦、錯誤、停用狀態，支援前導／後置圖標、浮動標籤、輔助與計數文字；所有色彩、文字、間距與圓角均綁定至本地變數與樣式。
---

# 文字欄位規格 Text Field Components Spec

> **前置作業 Prerequisites**
> 請先完成以下匯入，再依本文件建立文字欄位元件庫：
> 1. 基礎設定 Base Settings
> 2. 色彩 Colors
> 3. 字體排版 Typography
> 4. 間距 Spacing
> 5. 圓角 Radius
> 6. `5 Icons` 頁面（引用 `i-24`、`i-03`；精確 SVG 幾何見 [icons.md](icons.md) §11）
> 7. Selections 頁面（引用 `Small Checkbox`）
> 8. 按鈕 Buttons 頁面（引用 `Small Text Link`）

---

## 變數對照表 Variable Reference

### 顏色 Colors

| Variable Name | Value | 用途 Usage |
|---|---|---|
| `gray/gray0` | `#FFFFFF` | 輸入框背景；浮動標籤背景 |
| `gray/gray500` | `#898989` | Enabled 邊框；Placeholder / 浮動標籤文字（Enabled）|
| `gray/gray600` | `#707070` | Placeholder 文字；標籤文字；Supporting text |
| `gray/gray900` | `#373737` | 已輸入文字；群組標題 |
| `green/green500` | `#1D9C58` | Focused 邊框（2px） |
| `green/green700` | `#0A6A36` | Focused 游標；浮動標籤文字（Focused） |
| `red/red500` | `#EC5555` | Error 邊框 |
| `red/red700` | `#BC0000` | 浮動標籤文字（Error） |

### 間距 Spacing

| Variable Name | Value | 用途 Usage |
|---|---|---|
| `xxs` | `4` | 計數文字左 padding |
| `sm` | `8` | 輸入框內 gap（圖標與文字）；Trailing icon 左 padding；Supporting text 上方 padding；群組標題右 padding |
| `md` | `12` | 輸入框上下左右 padding；群組標題上下 padding |

### 圓角 Radius

| Variable Name | Value | 用途 Usage |
|---|---|---|
| `md` | `6` | 輸入框外框圓角 |

### 字體 Typography

| Variable Name | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| `NotoSansTC/12px/Regular` | Noto Sans TC | 12 | Regular / 400 | 1.5 |
| `NotoSansTC/14px/Regular` | Noto Sans TC | 14 | Regular / 400 | 1.5 |
| `NotoSansTC/14px/Bold` | Noto Sans TC | 14 | Bold / 700 | 1.5 |
| `NotoSansTC/16px/Regular` | Noto Sans TC | 16 | Regular / 400 | 1.5 |
| `NotoSansTC/16px/Bold` | Noto Sans TC | 16 | Bold / 700 | 1.5 |
| `RobotoFlex/14px/Regular` | Roboto Flex | 14 | Regular / 400 | 1.5 |

---

## 元件 1 — 輸入框 Input

**Component name:** `Input`
**Node reference:** `28:3989`

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `State` | Variant | `Enabled` / `Focused` / `Error` / `Disabled` |
| `Text configurations` | Variant | `Placeholder text` / `Input text` / `Empty` |
| `leadingIcon` | Boolean | 預設 `true` |
| `trailingIcon` | Boolean | 預設 `false` |

> `Text configurations=Empty` 僅在 `State=Focused` 時使用（游標顯示，尚未輸入）。

### 版本規格 Variant Specs

外框 (container) 設定：
- Fill: `gray/gray0`
- Corner Radius: `md` = 6px
- Width: 296px

內層 state-layer 設定：
- Layout: Horizontal Auto Layout, 垂直居中對齊
- Padding 四邊: `md` = 12px
- Gap（圖標與文字）: `sm` = 8px

#### 邊框 Border

| State | Border Width | Border Color | Opacity |
|---|---|---|---|
| Enabled | 1px | `gray/gray500` | 100% |
| Focused | 2px | `green/green500` | 100% |
| Error | 1px | `red/red500` | 100% |
| Disabled | 1px | `gray/gray500` | 50% |

#### 文字 Text

| Text configurations | State | Text Content | Typography | Color |
|---|---|---|---|---|
| Placeholder text | Enabled / Error / Disabled | `請輸入內容`（預設） | `NotoSansTC/16px/Regular` | `gray/gray600` |
| Input text | Enabled / Error / Disabled | 已輸入的文字 | `NotoSansTC/16px/Regular` | `gray/gray900` |
| Input text | Focused | 已輸入的文字 + 游標 `\|` | `NotoSansTC/16px/Regular` + 游標 `green/green700` | `gray/gray900` |
| Empty | Focused | 游標 `\|` 僅顯示 | — | `green/green700` |

#### 圖標 Icons

| 位置 | Icon | Size | Source |
|---|---|---|---|
| Leading（左側，預設顯示） | `i-24`（搜尋）| 20 × 20px | `5 Icons` 頁面（`Size=20` 變體，`28:3963`）|
| Trailing（右側，選配） | `i-03`（清除）| 20 × 20px | `5 Icons` 頁面（`Size=20` 變體）|

> Trailing icon 容器有 `padding-left: sm = 8px`，與文字保持間距。

> ⚠️ **圖標尺寸攸關輸入框高度。** 輸入框高度為 HUG（內容高 ＋ 上下 padding `md`＝12＋12），由最高子元素決定。正常情況下文字（`16px`，行高 1.5 ＝ 24px）最高，故輸入框高 = 24 ＋ 24 = **48px**。若 `i-24`／`i-03` 圖標重建成**過大尺寸**（超過 24px），圖標會取代文字成為最高子元素，整排輸入框高度即被撐高、跑版。務必以 [icons.md](icons.md) §11 的 **`Size=20`（20 × 20）** 內嵌 SVG 重建這兩個圖標——SVG 的 `viewBox` 即為 `0 0 20 20`、字形已內縮定位，匯入後保持 20 × 20，即可維持 48px 標準高度。

---

## 元件 2 — 浮動標籤輸入框 Input-Label version

**Component name:** `Input-Label version`
**Node reference:** `31:4627`

### 使用說明

與 Input 相同，但於輸入框外框頂部增加浮動標籤（Floating Label）。標籤文字會在特定狀態下出現於邊框線上方，提供欄位名稱提示。

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `State` | Variant | `Enabled` / `Focused` / `Error` / `Disabled` |
| `Text configurations` | Variant | `Label` / `Placeholder text` / `Input text` / `Empty` |
| `leadingIcon` | Boolean | 預設 `true` |
| `trailingIcon` | Boolean | 預設 `false` |

> `Text configurations=Empty` 僅在 `State=Focused` 時使用。

### 文字配置說明 Text configurations

| Text configurations | 欄位內容 | 浮動標籤 |
|---|---|---|
| `Label` | 標籤文字顯示於欄位內（同 Placeholder 位置） | 無 |
| `Placeholder text` | Placeholder 文字顯示於欄位內 | 顯示 |
| `Input text` | 已輸入文字顯示於欄位內 | 顯示 |
| `Empty` | 僅顯示游標（Focused） | 顯示 |

> `Label` 為初始未互動狀態（標籤尚未上浮）；其餘配置為已互動後標籤上浮的狀態。

### 版本規格 Variant Specs

輸入框外框與 state-layer 設定與元件 1 相同（Fill、Radius、Padding、Gap、Border 規則一致）。

#### 浮動標籤 Floating Label

僅在 `Text configurations ≠ Label` 時顯示。

- 位置：絕對定位於外框頂部邊線上
  - Enabled / Disabled：`left: 7px`，`top: -1px`（1px 邊框）
  - Focused：`left: 6px`，`top: -2px`（2px 邊框）
- 背景：白色（`gray/gray0`），`padding: 0 4px`，高度 9px（遮蓋邊框線）
- Typography: `NotoSansTC/12px/Regular`

| State | 浮動標籤文字顏色 |
|---|---|
| Enabled | `gray/gray500` |
| Focused | `green/green700` |
| Error | `red/red700` |
| Disabled | `gray/gray500`，opacity 50% |

#### 欄位內文字 Field Text

`Label` 配置下的文字樣式：`NotoSansTC/16px/Regular`，`gray/gray600`（同 Placeholder）

其餘文字樣式與元件 1 相同。

---

## 元件 3 — 文字欄位群組 Text Field Group

**Component name:** `Text Field Group`
**Node reference:** `1:4126`

### 使用說明

組合元件，由群組標題列、輸入框（元件 1 或 2）、下方說明文字列構成。每層皆可依情境調換子元件。

### 版本規格 Variant Specs

> 無 State 或 Variant 屬性，為固定組合版本。子元件各自維護狀態。

#### 群組標題列 Group Title（頂部）

- Layout: Horizontal Auto Layout, 垂直居中對齊
- Gap: `md` = 12px

| 區塊 | 內容 | Typography | Color | Source |
|---|---|---|---|---|
| 標題文字 | 欄位群組名稱 | `NotoSansTC/16px/Bold` | `gray/gray900` | — |
| 動作連結 | 文字連結按鈕 | `NotoSansTC/14px/Bold` | `green/green500` | `Small Text Link`（Buttons 頁面，`1:3809`） |
| 勾選框 | 附加勾選項目 | — | — | `Small Checkbox` Size=s（Selections 頁面，`27:11977`） |

> 標題文字區塊 padding：`py: md = 12px`，`pr: sm = 8px`。Min-height: 48px（觸控高度）。

#### 輸入框 Input Field

使用元件 1（`Input`）或元件 2（`Input-Label version`），依情境替換。預設：`leadingIcon=false`，`Text configurations=Placeholder text`，placeholder = `標題`。

#### 下方列 Bottom

- Layout: Horizontal Auto Layout

| 區塊 | 內容 | Typography | Color |
|---|---|---|---|
| Supporting text（左側，flex-1）| 輔助說明文字（可被錯誤訊息取代） | `NotoSansTC/14px/Regular` | `gray/gray600` |
| Counting text（右側，固定）| 字數計數，格式 `(0/20)` | `RobotoFlex/14px/Regular` | `gray/gray600` |

- 兩欄均有 `padding-top: sm = 8px`
- Counting text `padding-left: xxs = 4px`（與 supporting text 的間距）

---

## 實作備註 Implementation Notes

- **色彩綁定狀態：** 三個元件的所有色彩皆綁定至本地 `Primitive` 色彩變數（`gray/*`、`green/*`、`red/*`），無 remote 發佈庫樣式、無寫死 hex。原先部分填色／描邊綁定至外部發佈庫的繪製樣式（`Gray/Gray900`、`Gray/Gray0`、`Green/Green700`、`Gray/Gray600` 等），已全數改綁本地變數。
- **文字綁定狀態（含字體修正）：** 標籤、placeholder、輸入文字、輔助與計數文字皆綁定本地文字樣式（`NotoSansTC/12px`・`14px`・`16px` 與 `RobotoFlex/14px/Regular`）。原先部分文字綁定至**非 CUBE 字體**的遠端樣式——含 `iOS/PingFang TC/md｜16・Regular`（蘋方）與 `Android/Noto Sans TC`／`Android/Roboto` 系列——已依 CUBE 排版規範（中文＝Noto Sans TC、數字＝Roboto Flex）改綁本地同尺寸樣式，使 Figma 與本文件的字體規格一致。
- **間距／圓角綁定狀態：** padding／gap 綁定本地 `Spacing`（`xxs`＝4、`sm`＝8、`md`＝12）；輸入框外框圓角綁定本地 `Radius/md`＝6。原外部 `Spacing`／`Radius` 集合（`Spacing - md・12`、`Radius - md・6` 等）已依數值改綁本地 Token。
- **展示裝飾不列入元件色：** 頁面的區塊標題（`Title`，`gray/gray800` ＋ `NotoSansTC/32px/Bold`）為版面展示用裝飾，**非元件本體色彩**，不納入上方元件色表。
- **子元件為 instance：** 文字欄位群組（`Text Field Group`）內的 `Small Text Link`（Buttons 頁面 `1:3809`）與 `Small Checkbox`（Selections 頁面 `27:11977`）皆為 instance，本文件僅引用、不改動其內部；其變數綁定由各自來源元件維護。
- **重建須沿用變數：** 所有值均以本地變數／樣式綁定，重建時請沿用變數，勿寫死 hex 或像素值。
