"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Separator } from "@/components/ui/separator"

type SidebarLink = { label: string; href: string }

export function SectionSidebar({
  title,
  links,
}: {
  title: string
  links: SidebarLink[]
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close on navigation
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      {/* Mobile burger button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-14 left-0 z-40 flex items-center justify-center w-10 h-10 bg-card border-r border-b border-border text-foreground"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={[
          "fixed md:sticky top-14 left-0 z-50 md:z-auto",
          "h-[calc(100svh-3.5rem)] w-52 shrink-0 overflow-y-auto",
          "border-r border-border bg-card py-6 px-3",
          "transition-transform duration-200 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden absolute top-4 right-3 p-1 rounded-md text-muted-foreground hover:text-foreground"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>

        <p className="px-2 mb-2 text-[14px] font-bold text-muted-foreground uppercase tracking-widest">
          {title}
        </p>
        <Separator className="mb-3" />
        <nav className="flex flex-col gap-0.5">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-2 py-2 rounded-md text-sm no-underline transition-colors ${
                  isActive
                    ? "bg-secondary font-semibold text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
