import { SectionSidebar } from "@/components/section-sidebar"
import { navSections } from "@/lib/nav"

const componentsSection = navSections.find((s) => s.href === "/components")!

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100svh-3.5rem)]">
      <SectionSidebar
        title={componentsSection.label}
        links={componentsSection.children}
      />
      <main className="flex-1 min-w-0 p-4 pl-14 md:p-8">{children}</main>
    </div>
  )
}
