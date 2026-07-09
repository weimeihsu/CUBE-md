export type NavSection = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const navSections: NavSection[] = [
  {
    label: "基礎建設",
    href: "/base",
    children: [
      { label: "顏色 Colors", href: "/base/colors" },
      { label: "字體 Typography", href: "/base/typography" },
      { label: "間距與圓角 Spacing & Radius", href: "/base/spacing-radius" },
      { label: "裝置版面 Device Layout", href: "/base/device-layout" },
    ],
  },
  {
    label: "元件",
    href: "/components",
    children: [
      { label: "圖標 Icons", href: "/components/icons" },
      { label: "按鈕 Buttons", href: "/components/buttons" },
      { label: "選擇元件 Selections", href: "/components/selections" },
      { label: "文字欄位 Text Field", href: "/components/text-field" },
      { label: "頁首與頁尾 Header & Footer", href: "/components/header-footer" },
    ],
  },
  {
    label: "安裝指南",
    href: "/guide",
  },
]
