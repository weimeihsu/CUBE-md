import { DownloadDoc } from "@/components/download-doc"

const spacingTokens = [
  { token: "xxs", value: 4 },
  { token: "xs",  value: 6 },
  { token: "sm",  value: 8 },
  { token: "md",  value: 12 },
  { token: "lg",  value: 16 },
  { token: "xl",  value: 20 },
  { token: "2xl", value: 24 },
  { token: "3xl", value: 32 },
  { token: "4xl", value: 40 },
  { token: "5xl", value: 80 },
]

const radiusTokens = [
  { token: "s",    value: 4,   note: "small" },
  { token: "md",   value: 6,   note: "medium" },
  { token: "lg",   value: 12,  note: "large" },
  { token: "full", value: 100, note: "pill / circle" },
]

export default function SpacingRadiusPage() {
  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">間距與圓角 Spacing & Radius</h1>
          <p className="text-sm text-muted-foreground">
            10 個間距標記和 4 個圓角標記。
          </p>
        </div>
        <DownloadDoc filename="spacing-radius.md" />
      </div>

      {/* ── Spacing ── */}
      <section className="mb-12">
        <div className="pb-3 mb-6 border-b border-gray-150">
          <span className="text-[14px] font-bold text-foreground">間距 Spacing</span>
        </div>

        <div className="flex flex-wrap items-start gap-x-5 gap-y-8">
          {spacingTokens.map(({ token, value }) => (
            <div key={token} className="flex flex-col items-center gap-2" style={{ minWidth: 40 }}>
              <span className="text-[14px] font-medium text-gray-500">{token}</span>
              <div style={{ width: value, height: value, background: "var(--gray-200)" }} />
              <span className="text-[14px] text-gray-400">{value}px</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Radius ── */}
      <section>
        <div className="pb-3 mb-6 border-b border-gray-150">
          <span className="text-[14px] font-bold text-foreground">圓角 Radius</span>

        </div>

        <div className="flex flex-wrap items-start gap-x-8 gap-y-8">
          {radiusTokens.map(({ token, value, note }) => (
            <div key={token} className="flex flex-col items-center gap-2">
              <span className="text-[14px] font-medium text-gray-500">{token}</span>
              <div
                style={{
                  width: 80,
                  height: 80,
                  background: "var(--gray-200)",
                  borderRadius: value,
                }}
              />
              <span className="text-[14px] text-gray-400">{value}px</span>
              <span className="text-[14px] text-gray-400 text-center">{note}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
