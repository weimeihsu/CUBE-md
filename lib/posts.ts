import fs from "fs"
import path from "path"

export type Post = {
  title: string
  section: "基礎" | "元件"
  href: string
  date: string
  description: string
}

function parseFrontmatter(content: string): Record<string, string> | null {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return null
  const result: Record<string, string> = {}
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":")
    if (colon === -1) continue
    result[line.slice(0, colon).trim()] = line.slice(colon + 1).trim()
  }
  return result
}

export function getPosts(): Post[] {
  const dir = path.join(process.cwd(), "public/CUB Guide")
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"))

  return files
    .map((file) => {
      const content = fs.readFileSync(path.join(dir, file), "utf8")
      return parseFrontmatter(content)
    })
    .filter((fm): fm is Record<string, string> => {
      return (
        fm !== null &&
        Boolean(fm.title && fm.section && fm.href && fm.date && fm.description)
      )
    })
    .map((fm) => ({
      title: fm.title,
      section: fm.section as Post["section"],
      href: fm.href,
      date: fm.date,
      description: fm.description,
    }))
    .sort((a, b) => b.date.localeCompare(a.date))
}
