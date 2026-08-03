---
title: 裝置版面
section: 基礎建設
href: /base/device-layout
date: 2026-07-07
description: 五種裝置的基礎版面／網格模板（iOS、Android、手機網頁、平板、桌機），定義安全內容區、左右留白與垂直間距。所有輔助色均綁定至本地變數。
---

# 裝置版面規格 Device Layout Spec

> **前置作業 Prerequisites**
> 請先完成以下匯入，再依本文件建立版面模板：
> 1. 基礎設定 Base Settings
> 2. 色彩 Colors
> 3. 間距 Spacing
> 4. 頁首與頁尾 Header & Footer（提供 `WebHeader` / `WebFooter` 元件與原生頭尾）

Source: Figma file `kkyAx6QTTNF6ZyB9rSeN6W`, page **7 Device Layout**（`179:186`）。

本頁提供五種裝置的**基礎版面骨架**，用以規範內容安全區、左右留白（gutter）與區塊垂直間距。它**不是可放入設計稿的元件**，而是設計／開發時對齊的量測參考。

---

## 版面總表 Layout Overview

| 裝置 Device | 畫板 Artboard | 頁首 Header | 左右留白 Gutter | 內容寬度 Content Width | 頁首→內容 | 內容→頁尾 |
|---|---|---|---|---|---|---|
| **iOS**（原生）| `375 × 812` | StatusBar `44` + Home Indicator `34` | `20` | `335` | — | — |
| **Android**（原生）| `360 × 800` | StatusBar `24` + Bottom Button `48` | `20` | `320` | — | — |
| **MB**（手機網頁 375）| `375` 寬 | `WebHeader` `83` | `20` | `335` | `20` | `40` |
| **TB**（平板 768）| `768` 寬 | `WebHeader` `100` | `20` | `728` | `20` | `40` |
| **DESK**（桌機 1280）| `1280` 寬 | `WebHeader` `68` | `40`（最小）| `≤ 1200`（置中）| `20` | `100` |

> 內容寬度 = 畫板寬度 − 左右留白 ×2（行動裝置與平板）。DESK 改為**最大寬度 1200px 置中**，兩側留白隨視窗放大，最小 `40px`。

---

## 變數對照表 Variable Reference

本頁僅使用**量測輔助色**（Design annotation），非產品 UI 色。所有輔助色均已綁定本地 `Primitive` 變數。

### 顏色 Colors

| Variable Name | Value | 用途 Usage |
|---|---|---|
| `gray/gray100` | `#F5F5F5` | 裝置畫板背景底色（frame backdrop）|
| `blue/blue150` | `#CAECFF` | 安全內容區（container）填色 |
| `orange/orange150` | `#FFE2C2` | 留白／間距量測區塊底色 |
| `orange/orange400` | `#F28815` | 垂直留白／間距量測標記線與端點（DesignMark ticks）|
| `blue/blue500` | `#1890D2` | DESK 內容最大寬度（1200px）水平量測標記線與文字 |

### 間距 Spacing

本頁的留白（gutter）與垂直間距屬**量測參考骨架**，以固定尺寸的 `DesignMark` 標註框呈現。標註框本身**不進行變數綁定**（屬設計參考而非產品元件），其像素值對應下列本地 `Spacing` Token 的**數值**：

| Token | 對應 px | 用途 Usage |
|---|---|---|
| `xl` | `20` | 行動裝置／平板左右留白；頁首→內容垂直間距 |
| `4xl` | `40` | 桌機左右最小留白；MB／TB 內容→頁尾垂直間距 |

> ⚠️ DESK 內容→頁尾的 `100px` 大區塊間距**不在本地間距刻度上**（刻度最大為 `4xl`＝40），屬版面級離散值，實作時以原始 `100px` 處理。
>
> ℹ️ 五種畫板中，響應式網頁裝置的寬度（MB `375`／TB `768`／DESK `1280`）綁定至本地 `Device/Breakpoint` 變數；其餘留白／間距標註框則為固定尺寸，未綁定變數。

---

## 各裝置細節 Per-Device Detail

### iOS（`179:267`，`375 × 812`）
- 原生頭尾：頂部 `StatusBar` `44px`、底部 `iOS Home Indicator` `34px`（皆為原生模擬，刻意不綁定 CUBE 變數）。
- 安全內容區 `container`：`x = 20`、寬 `335`（左右各 `xl` 留白）。

### Android（`179:266`，`360 × 800`）
- 原生頭尾：頂部 `StatusBar` `24px`、底部 `Android Bottom Button` `48px`（原生模擬，不綁定）。
- 安全內容區 `container`：`x = 20`、寬 `320`（左右各 `xl` 留白）。

### MB（手機網頁 375，`272:905`）
- `WebHeader`（含瀏覽器列）高 `83`。
- 頁首下方 `xl`（20）間距 → 內容區。
- `container`：寬 `335`，左右各 `xl` 留白。
- 內容下方 `4xl`（40）間距 → `WebFooter`。

### TB（平板 768，`272:1810`）
- `WebHeader` 高 `100`。
- 頁首下方 `xl`（20）間距 → 內容區。
- `container`：寬 `728`，左右各 `xl` 留白。
- 內容下方 `4xl`（40）間距 → `WebFooter`。

### DESK（桌機 1280，`272:2101`）
- `WebHeader` 高 `68`。
- 內容以 `max1200` 容器置中：**最大寬度 `1200px`**，兩側最小留白 `4xl`（40）。
- 頁首下方 `xl`（20）間距 → 內容區。
- 內容下方 `100px` 大間距 → `WebFooter`。

---

## 實作備註 Implementation Notes

- **輔助色綁定狀態：** 本頁所有量測輔助色（`gray/gray100`、`blue/blue150`、`orange/orange150`、`orange/orange400`、`blue/blue500`）皆已綁定本地 `Primitive` 變數，無外部集合、無舊版重複、無寫死 hex。此頁為**設計參考骨架**，量測標記（`DesignMark` / `measurement`）不應輸出至產品 UI。
- **量測標記配色：** 垂直留白／間距標記使用 `orange/orange400`；DESK 內容最大寬度（1200px）水平標記使用 `blue/blue500`；裝置畫板背景為 `gray/gray100`。
- **間距未變數綁定：** 留白／間距標註框為固定尺寸的量測參考，**未**綁定 `Spacing` 變數；僅響應式網頁畫板寬度（375／768／1280）綁定至 `Device/Breakpoint`。重建產品 UI（非本骨架）時，仍應以本地 `Spacing` Token 綁定實際留白。
- **留白統一為 `xl`（20）：** iOS、Android、MB、TB 四種裝置左右留白一致為 `20px`（`Spacing/xl`）。桌機改為 `1200px` 置中、最小留白 `40px`（`Spacing/4xl`）。
- **垂直節奏：** 頁首→內容固定 `xl`（20）；內容→頁尾在 MB／TB 為 `4xl`（40），DESK 為 `100px`（無對應 Token，見上）。
- **原生頭尾不綁定：** iOS／Android 的 `StatusBar`、`Home Indicator`、`Bottom Button` 為作業系統外觀模擬，顏色**刻意不綁定** CUBE 變數（沿用 [header-footer.md](header-footer.md) 的原生頭尾參考）。
- **頁首／頁尾為 instance：** 各網頁裝置的 `WebHeader` / `WebFooter` 皆為 [header-footer.md](header-footer.md) 元件的 instance，版面模板僅引用、不改動其內部。
