---
title: 裝置版面
section: 基礎建設
href: /base/device-layout
date: 2026-07-07
description: 五種裝置的基礎版面／網格模板（iOS、Android、手機網頁、平板、桌機），定義安全內容區、左右留白與垂直間距。所有輔助色均綁定至本地變數。
---

# 裝置版面規格 Device Layout Spec

> 🔁 **重建後必做「自我檢查」——不需使用者要求，AI agent 完成本頁 rebuild 後請立即自行比對來源並逐項檢查、修正，再回報完成。** 本頁 rebuild 時特別容易出錯，重點檢查：
> 1. **畫板尺寸**：MB／TB／DESK 為 VERTICAL auto-layout、**高度 HUG**（隨內容）、寬度固定——**勿設固定高度**；iOS／Android 為固定螢幕高度（`812`／`800`）。
> 2. **原生頭尾為 instance**：iOS／Android 的 `StatusBar`（`148:9211`／`148:9210`）、`iOS Home Indicator`（`148:9195`）、`Android Bottom Button`（`148:9227`）務必**連結** `6 Header & Footer` 元件，**勿留空白條**。
> 3. **WebHeader／WebFooter**：連結對應 `Device=*` 變體，高度保持 HUG。
> 4. **量測輔助**：`DesignMark`／`measurement` 為參考骨架，不輸出至產品 UI；輔助色綁本地變數。
>
> 📷 **參考截圖**（同資料夾）：`DeviceLayout/{iOS,Android,MB,TB,DESK}.jpg`。重建後請逐一裝置截圖比對結構與完整度；**但數值、變數、尺寸模式（HUG／FIXED）一律以本文件為準——勿從圖片讀取數值或文字**（圖片僅供對照外觀）。

> **前置作業 Prerequisites**
> 請先完成以下匯入，再依本文件建立版面模板：
> 1. 基礎設定 Base Settings
> 2. 色彩 Colors
> 3. 間距 Spacing
> 4. 頁首與頁尾 Header & Footer（提供 `WebHeader` / `WebFooter`，以及原生頭尾元件 **`StatusBar`（`148:9212`，iOS `148:9211`／Android `148:9210`）、`iOS Home Indicator`、`Android Bottom Button`（`148:9227`）**；iOS／Android 版面會連結這些 StatusBar）

Source: Figma file `kkyAx6QTTNF6ZyB9rSeN6W`, page **7 Device Layout**（`179:186`）。

本頁提供五種裝置的**基礎版面骨架**，用以規範內容安全區、左右留白（gutter）與區塊垂直間距。它**不是可放入設計稿的元件**，而是設計／開發時對齊的量測參考。

---

## 版面總表 Layout Overview

| 裝置 Device | 畫板 Artboard | 頁首 Header | 左右留白 Gutter | 內容寬度 Content Width | 頁首→內容 gap | 內容→頁尾 gap |
|---|---|---|---|---|---|---|
| **iOS**（原生）| `375 × 812` | StatusBar `44` ＋ DesignMark `20` ＋ Home Indicator `34` | `20` | `335` | — | — |
| **Android**（原生）| `360 × 800` | StatusBar `24` ＋ DesignMark `60` ＋ Bottom Button `48` | `20` | `320` | — | — |
| **MB**（手機網頁 375）| `375` 寬 | `WebHeader` `63`（`mb=false`）| `20` | `335` | `20`（`orange/orange150`）| `40`（`orange/orange150`）|
| **TB**（平板 768）| `768` 寬 | `WebHeader` `80`（`mb=false`）| `20` | `728` | `20`（`orange/orange150`）| `40`（`orange/orange150`）|
| **DESK**（桌機 1280）| `1280` 寬 | `WebHeader` `68`（`mb=false`）| `40`（每側）| `1200`（`max1200` 容器，x = 40，置中）| `20`（`orange/orange150`）| `100`（`orange/orange150`）|

> 內容寬度 = 畫板寬度 − 左右留白 ×2（行動裝置與平板）。DESK 改為 **`max1200` 容器固定寬度 `1200px` 置中**，x = 40（兩側各 40px 留白）。
>
> ⚠️ iOS／Android 的 `StatusBar`（及 `iOS Home Indicator`／`Android Bottom Button`）為 **`6 Header & Footer` 頁面元件的 instance，重建時務必連結**，勿建立空白條——精確 SVG 見 [header-footer.md](header-footer.md)。

---

## 版面自動佈局與尺寸 Auto-layout & sizing（重建關鍵）

> ⚠️ **五種畫板皆為 auto-layout。MB／TB／DESK 的高度為 HUG（隨內容自動長高），切勿設固定高度。** 先前 rebuild 把畫板做成固定高度，導致內容變動時版面不會重排——這正是需要修正的地方。

| 裝置 Device | 畫板 auto-layout | 寬度 Width | 高度 Height |
|---|---|---|---|
| iOS | VERTICAL | FIXED `375` | **FIXED `812`**（裝置螢幕）|
| Android | VERTICAL | FIXED `360` | **FIXED `800`**（裝置螢幕）|
| MB | VERTICAL | FIXED `375` | **HUG**（隨內容）|
| TB | VERTICAL | FIXED `768` | **HUG** |
| DESK | VERTICAL | FIXED `1280` | **HUG** |

- **MB／TB／DESK（網頁）：** 畫板為 **VERTICAL auto-layout**、`primaryAxisSizingMode = AUTO`（**高度 HUG**）、`counterAxisSizingMode = FIXED`（寬度固定）。子項由上而下依序堆疊（**itemSpacing = 0**，間距由 DesignMark 子項本身佔位）：`WebHeader`（`mb=false`）→ `DesignMark`（頁首→內容，`orange/orange150`）→ `body` → `DesignMark`（內容→頁尾，`orange/orange150`）→ `WebFooter`。**畫板高度＝各子項總和**（MB `63+20+446+40+594 = 1163`；TB `80+20+446+40+287 = 873`）。
- **iOS／Android（原生）：** 畫板為 VERTICAL auto-layout，**高度固定**（`primaryAxisSizingMode = FIXED`，iOS `812` / Android `800`）、寬度固定。子項由上而下：`StatusBar`（頂）→ `DesignMark`（iOS `20px` / Android `60px`，`orange/orange150`）→ `body`（中）→ 原生底部元件（底）。body Y 座標：iOS `64`（44＋20）；Android `84`（24＋60）。
- **`WebHeader` / `WebFooter` instance：** 本身為 VERTICAL auto-layout、**高度 HUG**，隨內容長高——重建時保持 HUG，勿鎖死高度。
- **`body`：** HORIZONTAL auto-layout（左 gutter｜`container`｜右 gutter），**寬度 FILL**；內含安全內容區 `container`（兩軸 FILL）。此為量測骨架，`body`／`container` 高度在骨架中為固定佔位值。

> ✅ 重建檢查：MB／TB／DESK 畫板必為 **VERTICAL + 高度 HUG + 寬度固定**；`WebHeader`／`WebFooter` 保持高度 HUG。**唯 iOS／Android 為固定螢幕高度**，其餘一律 HUG。

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
- 畫板：VERTICAL auto-layout，**高度固定 `812`**、寬度固定 `375`，itemSpacing = 0。
- 子項堆疊順序（上→下）：
  1. `StatusBar`（instance `148:9211`，`375 × 44`，Y = 0）⚠️ 務必連結元件、勿留空
  2. `DesignMark`（`375 × 20`，Y = 44，填色 `orange/orange150`）— 瀏覽器列間距標記
  3. `body`（`375 × 714`，**Y = 64**）— 安全內容區；`container` 寬 `335`，左右各 `xl`（20px）
  4. `iOS Home Indicator`（instance `148:9195`，`375 × 34`，Y = 778）⚠️ 務必連結、填色綁 `gray/gray1000`
- `StatusBar` 顏色為 OS literal（不綁定）；`iOS Home Indicator` 綁本地 `gray/gray1000`。
- **body Y = 64 = StatusBar（44）＋ DesignMark（20）**；body 高 = 812 − 44 − 20 − 34 = **714**。

### Android（`179:266`，`360 × 800`）
- 畫板：VERTICAL auto-layout，**高度固定 `800`**、寬度固定 `360`，itemSpacing = 0。
- 子項堆疊順序（上→下）：
  1. `StatusBar`（instance `148:9210`，`360 × 24`，Y = 0）⚠️ 務必連結元件、勿留空
  2. `DesignMark`（`360 × 60`，Y = 24，填色 `orange/orange150`）— 瀏覽器列間距標記
  3. `body`（`360 × 668`，**Y = 84**）— 安全內容區；`container` 寬 `320`，左右各 `xl`（20px）
  4. `Android Bottom Button`（instance `148:9227`，`360 × 48`，Y = 752）⚠️ 務必連結；填色綁 `gray/gray0`，頂線 `gray/gray150`，圖標 `gray/gray800`
- `StatusBar` 顏色為 OS literal（不綁定）；`Android Bottom Button` 綁本地灰階變數。
- **body Y = 84 = StatusBar（24）＋ DesignMark（60）**；body 高 = 800 − 24 − 60 − 48 = **668**。

### MB（手機網頁 375，`272:905`）
- 畫板：**VERTICAL auto-layout，高度 HUG，寬度固定 `375`**，itemSpacing = 0；高度＝`63+20+446+40+594 = 1163`。
- 子項堆疊順序（上→下）：
  1. `WebHeader`（instance，`mb=false`，**高 `63`**，高度 HUG）
  2. `DesignMark`（`375 × 20`，填色 `orange/orange150`）— 頁首→內容間距
  3. `body`（`375 × 446`）— `container` 寬 `335`，左右各 `xl`（20px）
  4. `DesignMark`（`375 × 40`，填色 `orange/orange150`）— 內容→頁尾間距
  5. `WebFooter`（instance，高度 HUG）
- ⚠️ `WebHeader` 的 `mb` 屬性必須為 `false`（預設值）——設為 `true` 會多出 20px 底部間距，使版面間距顯示為 0px。

### TB（平板 768，`272:1810`）
- 畫板：**VERTICAL auto-layout，高度 HUG，寬度固定 `768`**，itemSpacing = 0；高度＝`80+20+446+40+287 = 873`。
- 子項堆疊順序（上→下）：
  1. `WebHeader`（instance，`mb=false`，**高 `80`**，高度 HUG）
  2. `DesignMark`（`768 × 20`，填色 `orange/orange150`）— 頁首→內容間距
  3. `body`（`768 × 446`）— `container` 寬 `728`，左右各 `xl`（20px）
  4. `DesignMark`（`768 × 40`，填色 `orange/orange150`）— 內容→頁尾間距
  5. `WebFooter`（instance，高度 HUG）
- ⚠️ `WebHeader` 的 `mb` 屬性必須為 `false`（預設值），原因同 MB。

### DESK（桌機 1280，`272:2101`）
- 畫板：**VERTICAL auto-layout，高度 HUG，寬度固定 `1280`**，itemSpacing = 0。
- 子項堆疊順序（上→下）：
  1. `WebHeader`（instance，`mb=false`，**高 `68`**，高度 HUG）
  2. `DesignMark`（`1280 × 20`，填色 `orange/orange150`）— 頁首→內容間距
  3. `max1200`（`1200 × body_h`，x = 40）— 內容以最大寬度 `1200px` 置中，兩側最小留白 `4xl`（40px）
  4. `DesignMark`（`1280 × 100`，填色 `orange/orange150`）— 內容→頁尾間距
  5. `WebFooter`（instance，高度 HUG）
- ⚠️ `WebHeader` 的 `mb` 屬性必須為 `false`（預設值）。
- 內容→頁尾間距 `100px` 無對應 Spacing Token（刻度最大 `4xl`＝40），直接以固定 `100` 建立 DesignMark。

---

## 實作備註 Implementation Notes

- **輔助色綁定狀態：** 本頁所有量測輔助色（`gray/gray100`、`blue/blue150`、`orange/orange150`、`orange/orange400`、`blue/blue500`）皆已綁定本地 `Primitive` 變數，無外部集合、無舊版重複、無寫死 hex。此頁為**設計參考骨架**，量測標記（`DesignMark` / `measurement`）不應輸出至產品 UI。
- **量測標記配色：** 垂直留白／間距標記使用 `orange/orange400`；DESK 內容最大寬度（1200px）水平標記使用 `blue/blue500`；裝置畫板背景為 `gray/gray100`。
- **間距未變數綁定：** 留白／間距標註框為固定尺寸的量測參考，**未**綁定 `Spacing` 變數；僅響應式網頁畫板寬度（375／768／1280）綁定至 `Device/Breakpoint`。重建產品 UI（非本骨架）時，仍應以本地 `Spacing` Token 綁定實際留白。
- **留白統一為 `xl`（20）：** iOS、Android、MB、TB 四種裝置左右留白一致為 `20px`（`Spacing/xl`）。桌機改為 `1200px` 置中、最小留白 `40px`（`Spacing/4xl`）。
- **垂直節奏：** 頁首→內容固定 `xl`（20，`orange/orange150` DesignMark）；內容→頁尾在 MB／TB 為 `4xl`（40，`orange/orange150`），DESK 為 `100px`（`orange/orange150`，無對應 Token）。iOS 與 Android 的 StatusBar 後同樣各有一個 DesignMark（iOS `20px`、Android `60px`，`orange/orange150`），body Y 座標分別為 `64` 與 `84`。
- **`WebHeader` 必須使用 `mb=false`（預設值）：** 版面骨架中的 `WebHeader` instance 不應顯示底部間距——底部 20px 間距改由緊接在後的 `DesignMark` 呈現（`orange/orange150`）。若 `mb=true`，WebHeader 本身多出 20px，而 DesignMark 又疊加 20px，導致頁首→內容實際視覺距離變成 40px。
- **原生頭尾為 instance（務必連結，勿留空）：** iOS／Android 的 `StatusBar`（iOS＝`148:9211`／Android＝`148:9210`，來自 `6 Header & Footer` 元件 `148:9212`）、`iOS Home Indicator`（`148:9195`）、`Android Bottom Button`（`148:9227`）皆為該頁元件的 **instance**——重建時務必**連結**這些元件，其精確 SVG 已內嵌於 [header-footer.md](header-footer.md)；**切勿建立空白佔位條**（先前 rebuild 的 StatusBar 出現空白即因未連結此元件）。綁定：`StatusBar` 為 OS 模擬色 literal（不綁定）；`iOS Home Indicator` 綁 `gray/gray1000`；`Android Bottom Button` 綁 `gray/gray0`／`gray/gray150`／`gray/gray800`。
- **頁首／頁尾為 instance：** 各網頁裝置的 `WebHeader` / `WebFooter` 皆為 [header-footer.md](header-footer.md) 元件的 instance，版面模板僅引用、不改動其內部。
