# CUBE-md · Design System Preview Site — Workflow Guide

This file is automatically loaded by Claude Code at the start of every session.
It ensures consistent work across machines and conversations.

---

## Project overview

A static HTML design-system preview site for the **點麥當勞D** Figma library
(`kkyAx6QTTNF6ZyB9rSeN6W`). Each page renders live visual previews of one design
token category and provides a downloadable `.md` spec file for Figma reconstruction.

The site is self-contained — no build step, no server required. It runs on
`file://`, `localhost`, or GitHub Pages without modification.

---

## Tech stack

| Concern | Solution |
|---|---|
| Styling | Tailwind CSS via CDN (`https://cdn.tailwindcss.com`) |
| Custom tokens | `tailwind.config.js` — loaded before the CDN script |
| Fonts | Google Fonts via `styles.css` (`@import`) — Noto Sans TC + Roboto Flex |
| Navigation | `nav.js` — injected into every page's `<nav>` element |
| Downloads | `downloads.js` — pre-baked markdown content, no fetch/network needed |
| Interactivity | `main.js` — minimal shared JS |

**Tailwind config** lives at `tailwind.config.js` and is loaded as a plain script.
Custom tokens added there: `text-11`, `text-13`, `text-15`, `text-32`, letter-spacing
variants (`tracking-xs/sm/md/lg`), `max-w-page` (1200px), `border-1.5`, `zIndex-100`.
Colors `gray-*` and `blue-*` are redefined — use them for grays; use `inline style`
for `green500 (#1D9C58)` and `blue1000 (#02293D)` since those aren't in the Tailwind config.

---

## File structure

```
/
├── index.html              ← Overview / card grid
├── typography.html
├── colors.html
├── spacing-radius.html
├── icons.html
├── buttons.html
├── styles.css              ← Google Fonts import only
├── tailwind.config.js      ← Custom Tailwind tokens
├── nav.js                  ← Shared navigation (injected into every page)
├── downloads.js            ← PRE-BAKED markdown content for all download buttons
├── main.js                 ← Shared JS utilities
└── doc/
    ├── typography-guidelines.md
    ├── color-palette.md
    ├── spacing-radius.md
    ├── icons.md
    └── buttons-spec.md
```

---

## ⚠️ Critical: the download system

Downloads do NOT fetch files from the filesystem. `downloads.js` holds a
`DOWNLOAD_FILES` object with every `.md` filename as a key and the full markdown
content as a pre-baked string value. `handleDownload()` in `main.js` reads from
this object and creates a Blob.

**Whenever a new `.md` file is created in `doc/`, its full content must also be
added to `DOWNLOAD_FILES` in `downloads.js`.** If it's missing, the download
button silently fails (logs an error to the console, nothing else).

Current entries in `DOWNLOAD_FILES`:
- `typography-guidelines.md`
- `color-palette.md`
- `spacing-radius.md`
- `icons.md`
- `buttons-spec.md`

---

## Checklist: adding a new page

Follow every step — skipping any one of them breaks something.

1. **Create `<name>.html`** — copy the head/nav/main/footer shell from an existing
   page. Load `styles.css`, `tailwind.config.js`, CDN Tailwind, `nav.js`,
   `downloads.js`, `main.js`. Use `<body class="font-sans bg-gray-100 text-gray-900 text-sm leading-normal pt-14">`.

2. **Add the page to `nav.js`** — append `{ href: '<name>.html', label: 'Label' }`
   to the `links` array. The active state is applied automatically by comparing
   `location.pathname` to the href.

3. **Add a card to `index.html`** — follow the existing card pattern:
   - Outer `<a href="<name>.html">` with classes `overflow-hidden no-underline text-gray-900 block transition-all duration-200`
   - Preview `<div>` at `height:140px` with `bg-white rounded`
   - Info `<div class="p-5 border-t-2 border-gray-900">` with title, subtitle, `前往頁面` link, and download button
   - Download button: `href="doc/<name>.md" download="<name>.md" onclick="handleDownload(event,this)"`

4. **Create `doc/<name>.md`** — the spec file that gets downloaded.

5. **Add content to `downloads.js`** — add `"<name>.md": "... full escaped content ..."` 
   to the `DOWNLOAD_FILES` object. Every `"` in the markdown must be escaped as `\"`;
   every newline becomes `\n`. Backticks and pipe chars need no escaping.

6. **Verify**: open the page, confirm nav highlight is correct, confirm download
   button produces the right file.

---

## Design token quick reference

These are the Figma variables used across all components. Always reference by
variable name (not raw hex) in docs and specs.

### Colors (collection: Primitive)
| Variable | Hex |
|---|---|
| `gray/gray0` | `#FFFFFF` |
| `gray/gray100` | `#F5F5F5` |
| `gray/gray150` | `#E7E7E7` |
| `gray/gray200` | `#D9D9D9` |
| `gray/gray300` | `#BDBDBD` |
| `gray/gray400` | `#A3A3A3` |
| `gray/gray500` | `#898989` |
| `gray/gray600` | `#707070` |
| `gray/gray700` | `#5C5C5C` |
| `gray/gray800` | `#494949` |
| `gray/gray900` | `#373737` |
| `gray/gray1000` | `#262626` |
| `blue/blue1000` | `#02293D` |
| `green/green500` | `#1D9C58` |

### Spacing (collection: Spacing, all FLOAT px)
`xxs=4 · xs=6 · sm=8 · md=12 · lg=16 · xl=20 · 2xl=24 · 3xl=32 · 4xl=40 · 5xl=80`

### Radius (collection: Radius, all FLOAT px)
`s=4 · md=6 · lg=12 · full=100`

### Typography (text styles, naming: `<Family>/<Size>px/<Weight>`)
- Families: `NotoSansTC` (Chinese) and `RobotoFlex` (English/numbers)
- Sizes: 32, 24, 20, 18, 16, 14, 12 px
- Weights: Regular (400), Bold (700)
- Line height: 150% for all; Letter spacing: 0% for all

---

## Figma source file

File key: `kkyAx6QTTNF6ZyB9rSeN6W` (點麥當勞D)

Key pages and node IDs:
| Page | Node | Content |
|---|---|---|
| Typography | — | Type scale reference |
| Color | — | Primitive color swatch grid |
| Spacing & Radius | — | Spacing + radius scales |
| Icon-IconFont | — | 5 icon component sets |
| 按鈕 Buttons | `1:3479` | Button component set |
| Buttons › Dynamic Button | `1:3634` | 14 button variants |
| Buttons › Bottom Button | `1:3486` | 4 full-width variants |
| Buttons › Icon Button | `1:3760` | 4 icon-button variants |
| Buttons › Text Link | `1:3809` | 4 text-link variants |
| Buttons › Block Button | `1:3860` | Single block button |

To read a Figma node: use `get_design_context` with `fileKey=kkyAx6QTTNF6ZyB9rSeN6W`
and the node ID. Use `get_variable_defs` on the same node to get bound variable names.

---

## Style conventions

- **Inline styles** for design-system colors not in Tailwind config:
  `green500 → style="color:#1D9C58"`, `blue1000 → style="background:#02293D"`.
- **Tailwind classes** for grays: `bg-gray-150`, `text-gray-600`, `border-gray-900`.
- **Font families**: always set via `font-family:'Noto Sans TC',sans-serif` or
  `font-family:'Roboto Flex',sans-serif` in inline styles for rendered button previews.
- **Section headers**: `text-xl font-bold text-gray-900 mb-1` + subtitle `text-xs text-gray-600 mb-5`.
- **Preview cards**: `bg-white rounded-xl border border-gray-150 p-6 overflow-x-auto`.
- **Token label under preview**: `text-11 font-bold text-gray-900` for name, `text-11 text-gray-500` for state/value.
- **Spec footer line** inside card: `text-11 text-gray-500` with `font-mono` spans for token names.
- **Section spacing**: `mb-12` between sections, `mb-20` on the last section.
