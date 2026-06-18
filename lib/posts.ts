export type Post = {
  title: string
  section: "Base" | "Components"
  href: string
  date: string
  description: string
}

export const posts: Post[] = [
  {
    title: "Buttons",
    section: "Components",
    href: "/components/buttons",
    date: "2026-06-15",
    description:
      "Added 5 button types — Dynamic, Bottom, Icon, Text Link, and Block — with 32 variants across Filled, Outlined, and Text styles. All tokens bound to Figma variables.",
  },
  {
    title: "Icons",
    section: "Components",
    href: "/components/icons",
    date: "2026-06-01",
    description:
      "5 icon component sets (i-01, i-03, i-06, i-24, i-67) across 5 sizes (16–40px). Fill and stroke colors bound to Primitive/gray/gray900.",
  },
  {
    title: "Spacing & Radius",
    section: "Base",
    href: "/base/spacing-radius",
    date: "2026-05-20",
    description:
      "10 spacing tokens (xxs–5xl) and 4 radius tokens (s, md, lg, full). Visual scale rendered as a staircase of blocks with token labels.",
  },
  {
    title: "Colors",
    section: "Base",
    href: "/base/colors",
    date: "2026-05-15",
    description:
      "68 primitive color variables across 6 sets: blue, green, purple, red, orange, and gray. Swatch grid with bound Figma variable names and hex values.",
  },
  {
    title: "Typography",
    section: "Base",
    href: "/base/typography",
    date: "2026-05-10",
    description:
      "28 text styles across Noto Sans TC and Roboto Flex — 7 size tokens (12–32px) × 2 weights × 2 families. Line height 150%, letter spacing 0%.",
  },
]
