---
title: 頁首與頁尾
section: 元件
href: /components/header-footer
date: 2026-07-01
description: 網頁 RWD 頁首與頁尾元件（桌機／平板／手機三斷點）及手機原生頭尾參考。所有色彩、文字與漸層均綁定至本地變數與樣式。
---

# 頁首與頁尾規格 Header & Footer Components Spec

> **前置作業 Prerequisites**
> 請先完成以下匯入，再依本文件建立頁首／頁尾元件庫：
> 1. 基礎設定 Base Settings
> 2. 色彩 Colors
> 3. 字體排版 Typography
> 4. 間距 Spacing
> 5. 圓角 Radius
> 6. 漸層樣式 Gradient Styles（`漸層色 Gradients_Cathay/Cathay-Green`）
> 7. 品牌 Logo 資產（國泰世華銀行 × cube 鎖定圖）

Source: Figma file `kkyAx6QTTNF6ZyB9rSeN6W`, page **Header n Footer**（`148:428`）。

---

## 變數對照表 Variable Reference

### 顏色 Colors

| Variable Name | Value | 用途 Usage |
|---|---|---|
| `gray/gray0` | `#FFFFFF` | 頁首／頁尾背景；綠色橫幅文字 |
| `gray/gray150` | `#E7E7E7` | 頁尾上緣分隔線；行動裝置瀏覽器列邊框；手機尾選單格線 |
| `gray/gray600` | `#707070` | 行動裝置瀏覽器列網址文字 |
| `gray/gray700` | `#5C5C5C` | 頁尾選單連結文字 |

### 漸層與樣式 Styles

| Style Name | Value | 用途 Usage |
|---|---|---|
| `漸層色 Gradients_Cathay/Cathay-Green` | 線性漸層 `#72C361 → #4FB980` | 頁尾綠色橫幅背景 |
| `Icon/color/90` | `#333333` | 行動裝置瀏覽器列圖標（i-05／i-06／i-19）|

### 間距 Spacing

以本地 `Spacing` 集合的 Token 表示（依像素值對應）：

| Variable Name | Value | 用途 Usage |
|---|---|---|
| `xxs` | `4` | 瀏覽器列上下 padding |
| `xs` | `6` | 頁尾 logo 與選單列間距（桌機／平板）|
| `sm` | `8` | 手機尾選單格子 padding 與列間距；手機 Nav Bar 項目間距 |
| `md` | `12` | 瀏覽器列左右 padding |
| `lg` | `16` | 頁首 Wrap 上下 padding；平板頁尾選單項目間距 |
| `xl` | `20` | 頁尾左右 padding；社群圖標間距；平板頁首 Wrap 左右 padding |
| `2xl` | `24` | 頁尾上下 padding；綠色橫幅 padding 與連結間距 |
| `3xl` | `32` | 桌機頁尾上緣 padding；桌機選單項目間距 |
| `4xl` | `40` | 手機頁尾上下 padding；手機主內容區間距 |


### 字體 Typography

| Variable Name | Font | Size | Weight | Line Height | 用途 |
|---|---|---|---|---|---|
| `NotoSansTC/14px/Regular` | Noto Sans TC | 14 | Regular / 400 | 1.5 | 頁尾選單、綠色橫幅連結、版權文字 |
| `RobotoFlex/16px/Regular` | Roboto Flex | 16 | Regular / 400 | 1.5 | 平板瀏覽器列網址 |

> 手機瀏覽器列網址使用系統字 `SF Pro 16px`（模擬原生瀏覽器 UI，非 CUBE 文字樣式）。

---

## Logo 資產

品牌鎖定圖：**國泰世華銀行 + Cathay United Bank ＋ 分隔線 ＋ cube**。

| 版本 | 尺寸 | 使用位置 |
|---|---|---|
| 完整版 | `323 × 34px` | 桌機／平板頁首 |
| 精簡版 | `187.5 × 34px` | 手機頁首、所有頁尾 |

> Logo 以影像／向量資產置入。其品牌色（`#00994E` 綠、`#040000` 黑等）屬品牌資產，**刻意不綁定**至灰階變數。

---

## 元件 1 — 網頁頁首 WebHeader

**Component name:** `WebHeader`
**Node reference:** `191:442`

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Device` | Variant | `DESK` / `TB` / `MB` |

共同設定：容器背景 `gray/gray0`；底部 1px 分隔線；logo 靠左（手機置中）。

### DESK（桌機，`191:439`）

- 無瀏覽器列。
- `nav-content`：max-width `1200px`，height `68px`，上下 padding `lg`（16px），完整 logo 靠左。
- 容器底部 1px 分隔線。
- 下方 `bottom-spacer` 空白間距 `30px`。

### TB（平板 768px，`191:440`）

- `browser-chrome`（瀏覽器列）：白底，底部 1px `gray/gray150`；左右 padding `md`（12px）、上下 `xxs`（4px）。
  - `nav-left`：返回／前進圖標 `i-05`・`i-06`（16px，`Icon/color/90`）
  - `url-bar`：網址「cathay.com」`RobotoFlex/16px/Regular`，`gray/gray600`
  - 右：關閉圖標 `i-19`（16px）
- `nav-content`：height `68px`，max-width `1024px`，左右 padding `xl`（20px）、上下 `16px`，完整 logo。
- 下方 `bottom-spacer` 空白 `20px`。

### MB（手機 375px，`191:441`）

- `browser-chrome`：結構同 TB，但 `url-bar` 網址文字使用系統字 `SF Pro 16px`（原生模擬）。
- `nav-bar`：height `56px`，白底，底部 1px 分隔線，精簡 logo（187.5×34）置中。
- 下方 `bottom-spacer` 空白 `20px`。

---

## 元件 2 — 網頁頁尾 WebFooter

**Component name:** `WebFooter`
**Node reference:** `191:476`

### 元件屬性 Properties

| Property | Type | Options |
|---|---|---|
| `Device` | Variant | `DESK` / `TB` / `MB` |

共同設定：兩段式結構——

1. **footer 上段**：白底，上緣 1px `gray/gray150`。含 logo、關係企業選單、社群圖標。
2. **綠色橫幅下段**：`漸層色 Gradients_Cathay/Cathay-Green` 漸層背景，文字 `gray/gray0`。含次要連結與版權。

選單文字：`NotoSansTC/14px/Regular`，`gray/gray700`。
社群圖標：`40 × 40px`，使用本地元件集 `social-media`（`251:282`，頁面 **Icon-IconFont**），`type` 變體：`fb`、`line`、`youtube`、`linkedin`。

### DESK（桌機，`191:477`）

- `footer`：padding 上 `3xl`（32）、下 `2xl`（24）、左右 `xl`（20）；`1200-container`（max-width `1200px`），gap `xs`（6）。
- logo `187.5 × 34`。
- `links-and-social`（space-between）：左 `menu-links` 為 6 個關係企業連結（gap `3xl`＝32），右 `social-icons` 為社群圖標（gap `xl`＝20）。
- `legal-bar`（綠色橫幅）：左右 padding `xl`（20）、上下 `2xl`（24）；`1200-container` space-between：左 `legal-links`（gap `2xl`＝24），右版權靠右。

### TB（平板 768px，`191:506`）

- 結構同 DESK，差異：
  - `footer-body` 上下 padding 皆為 `2xl`（24）。
  - `menu-links` 連結 gap 縮為 `lg`（16）。
  - `legal-bar` 連結改為 `flex-wrap` 換行、置中（gap `2xl`＝24）。

### MB（手機 375px，`191:535`）

- `footer-body`：左右 padding `xl`（20）、上下 `4xl`（40），區塊 gap `2xl`（24）；max-width `556px`。
- logo `187.5` 置中。
- `menu-links`（尾選單）：**2 欄格線**佈局（`menu-col-1` ／ `menu-col-2` ／ `menu-col-3`），每格 1px `gray/gray150` 邊框、padding `sm`（8）、文字置中；列間距 `sm`（8）、欄間距 `xl`（20）。
- `social-icons` 置中（gap `xl`＝20）。
- `legal-bar`（綠色橫幅）：`legal-links` 2 欄堆疊（`legal-col-1` ／ `legal-col-2` ／ `legal-col-3` ／ `legal-col-4`），gap `2xl`（24），版權置中。

---

## 手機原生頭尾 Mobile Native（參考用）

**Node reference:** `231:693`

用於展示 App 在原生環境的頭尾脈絡，**非可重建的 CUBE 元件**：

| 元素 | 尺寸 | 說明 |
|---|---|---|
| StatusBar（iOS）| `375 × 44px` | 模擬 iOS 狀態列 |
| StatusBar（Android）| `360 × 24px` | 模擬 Android 狀態列 |
| iOS Home Indicator | `375 × 34px` | iOS 底部指示條 |
| Android Bottom Button | `360 × 48px` | 底部導覽按鈕，label「按鈕」，色 `#02293D` |

> 這些原生元素的顏色（黑色系統圖標、`#02293D` 等）**刻意不綁定** CUBE 變數，用以忠實模擬作業系統外觀。

---

## 實作備註 Implementation Notes

- **色彩／文字綁定狀態：** 頁尾主要色彩（`gray/gray0`、`gray/gray150`、`gray/gray700`）與所有文字樣式皆已綁定至本地變數／樣式。重建時務必沿用變數，勿寫死 hex。
- **綠色橫幅漸層：** 頁尾三斷點的 `legal-bar` 綠色漸層（線性 `#72C361 → #4FB980`）皆綁定至**本地**繪製樣式 `漸層色 Gradients_Cathay/Cathay-Green`。此樣式原為外部發佈庫的遠端樣式，已於本地重建同名副本以確保檔案自包含；重建時請沿用本地樣式，勿連結外部庫。
- **頁首底部分隔線：** 桌機／平板 `nav-content` 與手機 `nav-bar` 的底部分隔線（`strokeAlign=INSIDE`，1px）已綁定至 `gray/gray150`，容器填色綁定 `gray/gray0`，與頁尾上緣分隔線一致。
- **間距集合：** 頁首／頁尾所有 padding 與 gap 間距皆已綁定至本地 `Spacing` 集合 Token（無殘留外部間距集合）。重建時請綁定本地 Token，勿沿用外部集合。
- **社群圖標元件：** 頁尾三斷點的 `social-icons` 內的圖標已改為本地元件集 `social-media`（`251:282`，頁面 **Icon-IconFont**）。以 `type` 屬性切換四個變體（`fb`、`line`、`youtube`、`linkedin`），尺寸 `40 × 40px`。重建時直接使用本地元件，勿連結外部圖示庫。
