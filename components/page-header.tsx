import { DownloadDoc } from "@/components/download-doc"

interface PageHeaderProps {
  title: string
  description: string
  filename: string
}

export function PageHeader({ title, description, filename }: PageHeaderProps) {
  return (
    <div className="sticky top-14 z-10 bg-background -mx-4 md:-mx-8 px-4 md:px-8 flex items-start justify-between mb-8 pb-5 border-b border-gray-150">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <DownloadDoc filename={filename} />
    </div>
  )
}
