import { SectionSidebar } from "@/components/section-sidebar"
import { navSections } from "@/lib/nav"

const baseSection = navSections.find((s) => s.href === "/base")!

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100svh-3.5rem)]">
      <SectionSidebar title={baseSection.label} links={baseSection.children ?? []} />
      <main className="flex-1 min-w-0 p-4 pl-14 md:p-8">{children}</main>
    </div>
  )
}
