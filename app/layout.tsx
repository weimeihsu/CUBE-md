import type { Metadata } from "next"
import { TooltipProvider } from "@/components/ui/tooltip"
import { TopNav } from "@/components/top-nav"
import "./globals.css"

export const metadata: Metadata = {
  title: "CUBE Design System",
  description: "Design system preview site for 點麥當勞D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <TooltipProvider>
          <TopNav />
          <div className="pt-14">{children}</div>
        </TooltipProvider>
      </body>
    </html>
  )
}
