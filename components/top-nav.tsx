"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navSections } from "@/lib/nav"

export function TopNav() {
  const pathname = usePathname()

  return (
    <header
      className="fixed top-0 inset-x-0 h-14 z-50 flex items-center px-8 gap-6 bg-blue-1000"
    >
      <Link
        href="/"
        className="text-md font-bold text-white no-underline tracking-tight shrink-0 whitespace-nowrap"
      >
        點麥當勞D · Design System
      </Link>

      <nav className="flex items-center gap-1.5">
        {navSections.map((section) => {
          const isActive = pathname.startsWith(section.href)
          return (
            <Link
              key={section.href}
              href={section.children[0].href}
              className={`px-2 py-1.5 rounded text-md no-underline transition-colors duration-150 ${
                isActive
                  ? "text-white bg-green-600"
                  : "text-gray-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {section.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
