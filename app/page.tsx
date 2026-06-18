import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { posts } from "@/lib/posts"

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-foreground mb-1">Recent Updates</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Latest changes to the CUBE design system
      </p>

      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className="no-underline block group">
            <Card className="border-border transition-colors group-hover:border-ring group-hover:shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-[14px] font-medium">
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
