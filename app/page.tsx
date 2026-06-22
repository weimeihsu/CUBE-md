import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getPosts } from "@/lib/posts"

export default function HomePage() {
  const posts = getPosts()
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-foreground mb-1">最新更新</h1>
      <p className="text-sm text-muted-foreground mb-8">
        CUBE 設計系統的最新異動紀錄
      </p>

      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className="no-underline block group">
            <Card className="border-border transition-colors group-hover:border-ring group-hover:shadow-[0px_4px_10px_-5px_rgba(0,40,61,0.30)]">
              <CardContent className="p-5 relative">
                <ChevronRight
                  size={16}
                  color="var(--blue-1000)"
                  className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className={`text-[14px] font-medium ${
                      post.section === "元件"
                        ? "bg-blue-150 text-blue-800"
                        : "bg-green-150 text-green-800"
                    }`}
                  >
                    {post.section}
                  </Badge>
                  <span className="text-[14px] text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
