---
title: 裝置版面
section: 基礎建設
href: /base/device-layout
date: 2026-08-05
description: 五種裝置的基礎版面骨架（iOS、Android、手機網頁、平板、桌機），以「色彩指示」標記各區塊角色（狀態列／頁首／頁尾／內容／間距）。頁首／頁尾與原生頭尾已簡化為色塊 frame（無向量）。
---

# 裝置版面規格 Device Layout Spec

> 🔁 **重建後必做「自我檢查」——不需使用者要求，AI agent 完成 rebuild 後請立即自行比對來源並逐項檢查、修正，再回報完成。** 重點檢查：
> 1. **畫板尺寸**：MB／TB／DESK 為 VERTICAL auto-layout、**高度 HUG**、寬度固定——**勿設固定高度**；iOS／Android 為固定螢幕高度（`812`／`800`）。
> 2. **色塊角色正確（關鍵）**：頭尾各區塊為**純色塊 frame（無向量、無圖標）**，其**背景色代表角色**——`purple/purple150`＝狀態列／瀏覽器列、`gray/gray0`＝頁首／App 標題列、`green/green150`＝頁尾／底部列、`gray/gray150`＝商標佔位。**務必依 §版面色彩指示 對應正確色彩**（先前常見錯誤：色彩用錯）。
> 3. **頁首／頁尾為本地 frame**：`header-shell`（`Browser` 瀏覽器列＋`NavBar` 導覽列）與 `footer` 皆為各畫板內的本地 frame，**非** instance；`logo` 為 `gray/gray150` 方塊佔位。
> 4. **色彩指示圖例**：本頁含一個「排版區塊」圖例 frame（色彩對照表），**請一併重建**（見 §版面色彩指示）。
> 5. **量測骨架**：`gapN`／`mx20`（`orange/orange150`）與 `container`（`blue/blue150`）為量測參考，不輸出至產品 UI。
>
> 📷 **參考截圖**（同資料夾）：`DeviceLayout/{iOS,Android,MB,TB,DESK}.jpg`。重建後逐一比對結構與**色彩**；數值、變數、尺寸模式一律以本文件為準。

> **前置作業 Prerequisites**
> 1. 間距 Spacing（`spacing-radius.md`）
> 2. 色彩 Colors（`color-palette.md`）
> 3. 字體 Typography（`typography.md`；瀏覽器列網址用 `RobotoFlex/16px/Regular`）
> 4. 圖標 Icons（`icons.md`）——瀏覽器列引用 `i-05`／`i-06`／`i-19`（`Size=16`）

Source: Figma file `kkyAx6QTTNF6ZyB9rSeN6W`, page **6 Device Layout**（`179:186`）。

> ℹ️ **本頁為版面骨架，非產品 UI。** 各區塊以**色塊**標示角色（見 §版面色彩指示），頭尾**不含**任何向量／圖標／商標（原生 StatusBar／Home Indicator／Bottom Button 的向量已清除，改為純色塊）。唯瀏覽器列保留三個系統圖標 instance（`i-05`／`i-06`／`i-19`）。`logo` 以灰方塊佔位。

---

## 版面色彩指示 Layout colour indicators（背景色 = 區塊角色）

**每個版面 frame 的背景色代表它的角色。** 重建時務必依此對應——這是本頁最容易出錯之處。

| 背景色 Colour | 代表角色 Role | 套用的 frame |
|---|---|---|
| `purple/purple150` `#E3E6FF` | 狀態列／瀏覽器列 StatusBar & Browser | iOS `StatusBar`、Android `StatusBar`、`Browser`（MB／TB 瀏覽器列）|
| `gray/gray0` `#FFFFFF` | 頁首／App 標題列 Header | `NavBar`（Web 頁首）、Android `Title + Action`、`header-shell` |
| `green/green150` `#CBEFDC` | 頁尾／底部列 Footer & bottom bars | iOS `iOS Home Indicator`、`Android Bottom Button`、`footer` |
| `gray/gray150` `#E7E7E7` | 商標佔位 Logo placeholder | `logo` 方塊 |
| `blue/blue150` `#CAECFF` | 安全內容區 Content | `container` |
| `orange/orange150` `#FFE2C2` | 間距／留白 Spacing & gutter | `gap20`／`gap40`／`gap100`、左右留白 `mx20` |
| `gray/gray100` `#F5F5F5` | 裝置畫板背景 Backdrop | 五個裝置 frame 底色 |

### 圖例 frame「排版區塊」（`546:825`，請一併重建）

本頁含一個色彩對照圖例 frame（標題文字 **`排版區塊`**），將上述**角色色彩**列給讀者。請在重建時一併建立，結構如下（每列：`32 × 32` 色票 ＋ 原生標籤 ＋ `1px` 分隔線 ＋ 對應的 Web 標籤，列間以 `1px` divider 分隔）：

| 色票 Swatch | 原生 Native | Web |
|---|---|---|
| `green/green150` | `iOS Home Indicator` / `Android Bottom Button` | `Web Footer` |
| `gray/gray0` | `Android Title + Action` | `Web Header` |
| `purple/purple150` | `StatusBar` | `Web Browser` |

> `gray/gray0`（白）色票在白底上需加淺邊框（`gray/gray150`）方可辨識。

---

## 版面總表 Layout Overview

| 裝置 Device | 畫板 Artboard | 頂部 | 底部 | 左右留白 | 內容寬度 | 高度 |
|---|---|---|---|---|---|---|
| **iOS**（原生）| `375 × 812` | `StatusBar` `44`（紫）＋ `gap20` `20` | `iOS Home Indicator` `34`（綠）| `20` | `335` | **固定 812** |
| **Android**（原生）| `360 × 800` | `StatusBar` `24`（紫）＋ `Title + Action` `56`（白）| `Android Bottom Button` `48`（綠）| `20` | `320` | **固定 800** |
| **MB**（手機網頁）| `375` 寬 | `header-shell` `88`（`Browser` 32 紫 ＋ `NavBar` 56 白）| `footer` `56`（綠）| `20` | `335` | **HUG（650）** |
| **TB**（平板）| `768` 寬 | `header-shell` `100`（`Browser` 32 紫 ＋ `NavBar` 68 白）| `footer` `56`（綠）| `20` | `728` | **HUG（662）** |
| **DESK**（桌機）| `1280` 寬 | `header-shell` `68`（僅 `NavBar`，無 `Browser`）| `footer` `56`（綠）| `40`（每側）| `1200`（`max1200` 置中）| **HUG（690）** |

---

## 版面自動佈局與尺寸 Auto-layout & sizing（重建關鍵）

> ⚠️ **五種畫板皆為 VERTICAL auto-layout；MB／TB／DESK 高度為 HUG，切勿設固定高度。**

| 裝置 | 寬度 Width | 高度 Height |
|---|---|---|
| iOS | FIXED `375` | **FIXED `812`** |
| Android | FIXED `360` | **FIXED `800`** |
| MB | FIXED `375` | **HUG**（`88+20+446+40+56 = 650`）|
| TB | FIXED `768` | **HUG**（`100+20+446+40+56 = 662`）|
| DESK | FIXED `1280` | **HUG**（`68+566+56 = 690`）|

- **MB／TB／DESK：** VERTICAL、`primaryAxisSizingMode = AUTO`（高度 HUG）、`counterAxisSizingMode = FIXED`（寬度固定），`itemSpacing = 0`。堆疊：`header-shell` → `gap20` → `body` → `gap40`（DESK 內容區為 `max1200`，內含 `gap20`／`container`／`gap100`）→ `footer`。
- **iOS／Android：** VERTICAL、**高度固定**（螢幕尺寸）、寬度固定。
- **`body`：** HORIZONTAL（`mx20` 左｜`container`｜`mx20` 右），寬度 FILL；`container` 為安全內容區（`blue/blue150`）。

---

## 各裝置細節 Per-Device Detail

> 頭尾色塊皆為**空的色塊 frame（無向量、無圖標）**，背景色依 §版面色彩指示。

### iOS（`179:267`，`375 × 812`，固定）
1. `StatusBar`（`375 × 44`，`purple/purple150`）
2. `gap20`（`375 × 20`，`orange/orange150`）
3. `body`（`375 × 714`）：`mx20`｜`container` 寬 `335`（`blue/blue150`）｜`mx20`
4. `iOS Home Indicator`（`375 × 34`，`green/green150`）

### Android（`179:266`，`360 × 800`，固定）
1. `StatusBar`（`360 × 24`，`purple/purple150`）
2. `Title + Action`（`360 × 56`，`gray/gray0`）— App 標題列
3. `body`（`360 × 672`）：`container` 寬 `320`
4. `Android Bottom Button`（`360 × 48`，`green/green150`）

### MB（手機網頁 375，`272:905`，HUG＝650）
1. `header-shell`（`375 × 88`，`gray/gray0`）：
   - `Browser`（`375 × 32`，`purple/purple150`；底部 1px `gray/gray150`，padding `[4,12,4,12]`、SPACE_BETWEEN）：`nav-left`（`i-05`＋`i-06`，`Size=16`）｜`url-bar` 文字 `cathay.com`（`RobotoFlex/16px/Regular`，`gray/gray600`）｜`i-19`（`Size=16`）
   - `NavBar`（`375 × 56`，`gray/gray0`；底部 1px `gray/gray150`，置中）：`logo`（`gray/gray150` 方塊，`187.5 × 34`，置中）
2. `gap20`（`375 × 20`，`orange/orange150`）
3. `body`（`375 × 446`）：`container` 寬 `335`
4. `gap40`（`375 × 40`，`orange/orange150`）
5. `footer`（`375 × 56`，`green/green150`）

### TB（平板 768，`272:1810`，HUG＝662）
- 同 MB，差異：`header-shell` 高 `100`（`Browser` 32 ＋ `NavBar` 68）；`NavBar` 內 `logo`（`gray/gray150`，`323 × 34`）靠左 x=20；`container` 寬 `728`；`footer` `768 × 56`。

### DESK（桌機 1280，`272:2101`，HUG＝690）
1. `header-shell`（`1280 × 68`）：**無 `Browser`**，`NavBar`（`1200`，x=40，`gray/gray0`）內 `logo`（`gray/gray150`，`323 × 34`）靠左
2. `max1200`（`1200 × 566`，x=40）：`gap20`（`1200 × 20`）＋ `container`（`1200 × 446`，`blue/blue150`）＋ `gap100`（`1200 × 100`）
3. `footer`（`1280 × 56`，`green/green150`）

---

## 實作備註 Implementation Notes

- **色彩即角色（最重要）：** 每個頭尾 frame 的**背景色代表角色**（見 §版面色彩指示）。`purple/purple150`＝狀態列／瀏覽器列、`gray/gray0`＝頁首、`green/green150`＝頁尾／底部、`gray/gray150`＝商標佔位。重建時最常見的錯誤即為**色彩用錯**，務必逐一核對。
- **頭尾已清除向量：** 原生 `StatusBar`（`Notch`／`Union`）、`iOS Home Indicator`、`Android Bottom Button` 內的向量已**移除**——現為純色塊 frame，**勿再建立任何 notch／圖標／union 向量**。唯瀏覽器列 `Browser` 保留三個系統圖標 instance（`i-05`／`i-06`／`i-19`，取自 `5 Icons`）。
- **頁首／頁尾為本地 frame：** `header-shell`（`Browser`＋`NavBar`）與 `footer` 皆為各畫板內的本地 frame，非 instance、無 `Device=*` 變體。`footer` 為 `56px` 綠色佔位條。
- **`logo` 為灰方塊佔位：** 填色 `gray/gray150`（MB `187.5×34`／TB・DESK `323×34`），僅標示商標位置；`logos.md` 已退出工作流，勿匯入真商標。
- **色彩指示圖例一併重建：** 「排版區塊」圖例 frame（`546:825`）需一併建立，讓讀者對照色彩→角色（見 §版面色彩指示）。
- **量測骨架不輸出至產品：** `gapN`／`mx20`（`orange/orange150`）、`container`（`blue/blue150`）、畫板背景（`gray/gray100`）為設計參考。實作產品 UI 時以本地 `Spacing`（`xl`＝20、`4xl`＝40；DESK 內容→頁尾 `100` 無對應 Token）綁定實際留白。
- **尺寸模式：** MB／TB／DESK 畫板 VERTICAL、高度 HUG、寬度固定；`footer` 固定 56；`body` HORIZONTAL、寬度 FILL；iOS／Android 固定螢幕高度。
