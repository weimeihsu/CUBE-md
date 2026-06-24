import { PageHeader } from "@/components/page-header"

const scale = [
  { token: "3xl", size: 32 },
  { token: "2xl", size: 24 },
  { token: "xl",  size: 20 },
  { token: "lg",  size: 18 },
  { token: "md",  size: 16 },
  { token: "sm",  size: 14 },
  { token: "xs",  size: 12 },
]

const fonts = [
  {
    name: "Noto Sans TC",
    figmaPrefix: "NotoSansTC",
    family: "'Noto Sans TC', sans-serif",
    specimen: "使用者透過清晰易讀的介面快速完成操作並獲得良好的體驗",
  },
  {
    name: "Roboto Flex",
    figmaPrefix: "RobotoFlex",
    family: "'Roboto Flex', sans-serif",
    specimen: "The quick brown fox jumps over the lazy dog while testing typography",
  },
]

export default function TypographyPage() {
  return (
    <div>
      <PageHeader title="字體 Typography" description="Noto Sans TC 和 Roboto Flex 共 28 種文字樣式組合。" filename="typography.md" />

      <div className="flex flex-col gap-12">
        {fonts.map(({ name, figmaPrefix, family, specimen }) => (
          <div key={name}>
            <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-gray-150">
              <span className="text-[14px] font-bold text-foreground">{name}</span>
              <span className="text-[14px] text-gray-400">
                {figmaPrefix}/{"<size>px"}/Regular · Bold
              </span>
            </div>

            <div className="flex flex-col">
              {scale.map(({ token, size }) => (
                <div
                  key={token}
                  className="flex items-start gap-6 py-4 border-b border-gray-150 last:border-0"
                >
                  <div className="w-20 shrink-0 pt-0.5 flex flex-col gap-0.5">
                    <span className="text-[14px] font-medium text-gray-700">{token}</span>
                    <span className="text-[14px] text-gray-400">{size}px / 150%</span>
                  </div>

                  <div className="flex flex-col gap-1 min-w-0 flex-1 overflow-hidden">
                    <div
                      className="text-foreground truncate"
                      style={{ fontSize: size, lineHeight: "150%", fontWeight: 700, fontFamily: family }}
                    >
                      {specimen}
                    </div>
                    <div
                      className="text-foreground truncate"
                      style={{ fontSize: size, lineHeight: "150%", fontWeight: 400, fontFamily: family }}
                    >
                      {specimen}
                    </div>
                  </div>

                  <div className="hidden sm:flex shrink-0 flex-col gap-1 items-end pt-0.5">
                    <span className="text-[14px] text-gray-400">Bold</span>
                    <span className="text-[14px] text-gray-400">Regular</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
