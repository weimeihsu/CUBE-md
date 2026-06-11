# Typography Guidelines

A shared typography standard for product/app design. This document is the single
source of truth for fonts, the type scale, weights, and the named text styles.
It is written so that both designers and AI agents can re-create the exact same
system in Figma (or in code) from scratch.

Source: Figma file `kkyAx6QTTNF6ZyB9rSeN6W`, page **Typography** (文字).

---

## 1. Font strategy

Two typefaces, selected automatically by script (language of the content):

| Script / content        | Font family       | Role                          |
| ----------------------- | ----------------- | ----------------------------- |
| Chinese (Traditional)   | **Noto Sans TC**  | Default for Chinese text      |
| English (Latin)         | **Roboto Flex**   | Default for English text      |
| Numbers / digits        | **Roboto Flex**   | Default for numerals          |

Rules:
- Use **Noto Sans TC** for any Chinese (CJK) characters.
- Use **Roboto Flex** for English letters and all numbers.
- In mixed strings, each run should render in its language's default font
  (Chinese glyphs in Noto Sans TC, Latin/digits in Roboto Flex).
- Both families share the **same size scale, weights, line-height, and letter-spacing**,
  so the two stay visually aligned at every token.

---

## 2. Type scale (size tokens)

Seven semantic size tokens. The token is the stable name; the pixel value is the
size it currently maps to. Always reference the **token**, not the raw px.

| Token | Font size | Line height | Letter spacing |
| ----- | --------- | ----------- | -------------- |
| `3xl` | 32 px     | 150%        | 0%             |
| `2xl` | 24 px     | 150%        | 0%             |
| `xl`  | 20 px     | 150%        | 0%             |
| `lg`  | 18 px     | 150%        | 0%             |
| `md`  | 16 px     | 150%        | 0%             |
| `sm`  | 14 px     | 150%        | 0%             |
| `xs`  | 12 px     | 150%        | 0%             |

- **Line height** is `150%` of the font size for every token (e.g. 32px → 48px).
- **Letter spacing** is `0%` for every token.

---

## 3. Weights

Each token is available in two weights:

| Weight label | Figma font style | Numeric weight |
| ------------ | ---------------- | -------------- |
| Regular      | `Regular`        | 400            |
| Bold         | `Bold`           | 700            |

---

## 4. Named text styles

Every combination of **family × size × weight** is a registered Figma text style.
That is 2 families × 7 sizes × 2 weights = **28 styles**.

Naming convention:

```
<Family>/<Size>px/<Weight>

Family : NotoSansTC | RobotoFlex
Size   : 32 | 24 | 20 | 18 | 16 | 14 | 12
Weight : Regular | Bold
```

All 28 styles (line height 150%, letter spacing 0%):

| Token | Size | Noto Sans TC (Chinese)        | Roboto Flex (English / numbers) |
| ----- | ---- | ----------------------------- | ------------------------------- |
| `3xl` | 32   | NotoSansTC/32px/Regular · Bold | RobotoFlex/32px/Regular · Bold  |
| `2xl` | 24   | NotoSansTC/24px/Regular · Bold | RobotoFlex/24px/Regular · Bold  |
| `xl`  | 20   | NotoSansTC/20px/Regular · Bold | RobotoFlex/20px/Regular · Bold  |
| `lg`  | 18   | NotoSansTC/18px/Regular · Bold | RobotoFlex/18px/Regular · Bold  |
| `md`  | 16   | NotoSansTC/16px/Regular · Bold | RobotoFlex/16px/Regular · Bold  |
| `sm`  | 14   | NotoSansTC/14px/Regular · Bold | RobotoFlex/14px/Regular · Bold  |
| `xs`  | 12   | NotoSansTC/12px/Regular · Bold | RobotoFlex/12px/Regular · Bold  |

---

## 5. Specimen text

Use these strings when previewing the scale (one row per token, Bold above Regular):

- **Chinese (Noto Sans TC):** 使用者透過清晰易讀的介面快速完成操作並獲得良好的體驗
- **English (Roboto Flex):** The quick brown fox jumps over the lazy dog while testing typography, spacing, and overall readability.

---

## 6. Machine-readable spec

For programmatic re-creation. Line height and letter spacing apply to all entries.

```json
{
  "fonts": {
    "chinese": { "family": "Noto Sans TC", "use": ["chinese"] },
    "english": { "family": "Roboto Flex", "use": ["english", "numbers"] }
  },
  "global": { "lineHeight": "150%", "letterSpacing": "0%" },
  "weights": [
    { "label": "Regular", "figmaStyle": "Regular", "numeric": 400 },
    { "label": "Bold", "figmaStyle": "Bold", "numeric": 700 }
  ],
  "scale": [
    { "token": "3xl", "size": 32 },
    { "token": "2xl", "size": 24 },
    { "token": "xl",  "size": 20 },
    { "token": "lg",  "size": 18 },
    { "token": "md",  "size": 16 },
    { "token": "sm",  "size": 14 },
    { "token": "xs",  "size": 12 }
  ],
  "styleNaming": "<Family>/<Size>px/<Weight>",
  "families": ["NotoSansTC", "RobotoFlex"]
}
```

---

## 7. How to re-create this system

1. **Install the fonts.** Make `Noto Sans TC` and `Roboto Flex` available in the file.
2. **Create the 28 text styles** by iterating: for each family in
   `[Noto Sans TC, Roboto Flex]`, each size in `[32, 24, 20, 18, 16, 14, 12]`,
   each weight in `[Regular, Bold]`:
   - Name it `<Family>/<Size>px/<Weight>` (family as `NotoSansTC` / `RobotoFlex`).
   - Set font size to the size, line height to `150%`, letter spacing to `0%`.
3. **Map tokens to sizes** using the scale in §2 (`3xl`→32 … `xs`→12).
4. **Apply by language:** Chinese content uses the `NotoSansTC/*` styles;
   English and numeric content uses the `RobotoFlex/*` styles.
5. **Build the reference page** (optional): two tables, columns
   `Token | Font size | Font weight | Look`, one row per token, showing the
   Bold and Regular specimen for each — one table per font family.
