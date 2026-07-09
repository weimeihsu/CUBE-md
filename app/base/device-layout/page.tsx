import { PageHeader } from "@/components/page-header"

// Horizontal scale so the widest device (DESK 1280) stays readable on screen.
const SCALE = 0.42

type Device = {
  name: string
  label: string
  w: number
  gutter: number
  content: number
  kind: "native" | "web"
  // native bands
  statusBar?: number
  bottomBar?: number
  bottomBarLabel?: string
  // web bands
  headerH?: number
  topGap?: number
  bottomGap?: number
  maxWidth?: number
}

const devices: Device[] = [
  { name: "iOS", label: "iOS 原生 375 × 812", w: 375, gutter: 20, content: 335, kind: "native", statusBar: 44, bottomBar: 34, bottomBarLabel: "Home Indicator 34" },
  { name: "Android", label: "Android 原生 360 × 800", w: 360, gutter: 20, content: 320, kind: "native", statusBar: 24, bottomBar: 48, bottomBarLabel: "Bottom Button 48" },
  { name: "MB", label: "手機網頁 375", w: 375, gutter: 20, content: 335, kind: "web", headerH: 83, topGap: 20, bottomGap: 40 },
  { name: "TB", label: "平板 768", w: 768, gutter: 20, content: 728, kind: "web", headerH: 100, topGap: 20, bottomGap: 40 },
  { name: "DESK", label: "桌機 1280（內容 max 1200 置中）", w: 1280, gutter: 40, content: 1200, kind: "web", headerH: 68, topGap: 20, bottomGap: 100, maxWidth: 1200 },
]

const CONTENT_H = 220 // representative content-area height (px, pre-scale)

function px(n: number) {
  return Math.max(1, Math.round(n * SCALE))
}

function Band({ h, className, children }: { h: number; className: string; children?: React.ReactNode }) {
  return (
    <div
      className={`flex items-center justify-center text-[11px] leading-none ${className}`}
      style={{ height: px(h) }}
    >
      {children}
    </div>
  )
}

function DeviceSchematic({ d }: { d: Device }) {
  const width = px(d.w)
  const gutter = px(d.gutter)
  return (
    <div className="shrink-0">
      <div
        className="rounded-md border border-gray-200 overflow-hidden bg-white"
        style={{ width }}
      >
        {/* Header / status bar */}
        {d.kind === "native" ? (
          <Band h={d.statusBar!} className="bg-gray-100 text-gray-500 border-b border-gray-150">
            StatusBar {d.statusBar}
          </Band>
        ) : (
          <Band h={d.headerH!} className="bg-gray-150 text-gray-600 font-medium border-b border-gray-200">
            WebHeader {d.headerH}
          </Band>
        )}

        {/* Top gap (web only) */}
        {d.kind === "web" && (
          <Band h={d.topGap!} className="bg-orange-150 text-orange-700">
            {d.topGap}
          </Band>
        )}

        {/* Content row: gutters (orange) + safe content area (blue) */}
        <div className="flex" style={{ height: px(CONTENT_H), background: "var(--orange-150)" }}>
          <div className="shrink-0 flex items-center justify-center" style={{ width: gutter }} />
          <div
            className="flex-1 flex items-center justify-center text-[11px] text-blue-800"
            style={{ background: "var(--blue-150)", maxWidth: px(d.content) }}
          >
            {d.content}px
          </div>
          <div className="shrink-0" style={{ width: gutter }} />
        </div>

        {/* Bottom gap (web only) */}
        {d.kind === "web" && (
          <Band h={d.bottomGap!} className="bg-orange-150 text-orange-700">
            {d.bottomGap}
          </Band>
        )}

        {/* Footer / bottom bar */}
        {d.kind === "native" ? (
          <Band h={d.bottomBar!} className="bg-gray-100 text-gray-500 border-t border-gray-150">
            {d.bottomBarLabel}
          </Band>
        ) : (
          <Band h={44} className="bg-gray-150 text-gray-600 font-medium border-t border-gray-200">
            WebFooter
          </Band>
        )}
      </div>

      {/* Caption */}
      <div className="mt-2 text-center">
        <p className="text-[13px] font-semibold text-foreground">{d.name}</p>
        <p className="text-[12px] text-muted-foreground">{d.label}</p>
        <p className="text-[12px] text-gray-400 mt-0.5">
          留白 {d.gutter} · 內容 {d.maxWidth ? `≤${d.maxWidth}` : d.content}
        </p>
      </div>
    </div>
  )
}

function LegendSwatch({ varName, label }: { varName: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-4 h-4 rounded-sm border border-gray-200" style={{ background: `var(--${varName})` }} />
      <span className="text-[13px] text-muted-foreground">{label}</span>
    </div>
  )
}

export default function DeviceLayoutPage() {
  return (
    <div>
      <PageHeader
        title="裝置版面 Device Layout"
        description="五種裝置的版面骨架：安全內容區、左右留白與垂直間距。"
        filename="device-layout.md"
      />

      {/* Legend */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <LegendSwatch varName="blue-150" label="安全內容區 Safe content（blue/blue150）" />
          <LegendSwatch varName="orange-150" label="留白／間距 Gutter & gap（orange/orange150）" />
          <LegendSwatch varName="gray-150" label="頁首／頁尾 Header & Footer" />
        </div>
      </section>

      {/* Device gallery */}
      <section className="mb-12">
        <div className="pb-3 mb-6 border-b border-gray-150">
          <span className="text-[14px] font-bold text-foreground">版面骨架 Layout Templates</span>
        </div>
        <div className="flex flex-wrap items-start gap-x-8 gap-y-10 overflow-x-auto pb-2">
          {devices.map((d) => (
            <DeviceSchematic key={d.name} d={d} />
          ))}
        </div>
      </section>

      {/* Spec table */}
      <section>
        <div className="pb-3 mb-6 border-b border-gray-150">
          <span className="text-[14px] font-bold text-foreground">量測值 Measurements</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-left text-gray-500">
                <th className="py-2 pr-4 font-medium">裝置</th>
                <th className="py-2 pr-4 font-medium">畫板寬</th>
                <th className="py-2 pr-4 font-medium">留白 Gutter</th>
                <th className="py-2 pr-4 font-medium">內容寬</th>
                <th className="py-2 pr-4 font-medium">頁首→內容</th>
                <th className="py-2 pr-4 font-medium">內容→頁尾</th>
              </tr>
            </thead>
            <tbody className="text-foreground">
              {devices.map((d) => (
                <tr key={d.name} className="border-b border-gray-150">
                  <td className="py-2 pr-4 font-medium">{d.name}</td>
                  <td className="py-2 pr-4">{d.w}</td>
                  <td className="py-2 pr-4">{d.gutter}{d.name === "DESK" ? "（最小）" : ""}</td>
                  <td className="py-2 pr-4">{d.maxWidth ? `≤ ${d.maxWidth}（置中）` : d.content}</td>
                  <td className="py-2 pr-4">{d.topGap ?? "—"}</td>
                  <td className="py-2 pr-4">{d.bottomGap ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-muted-foreground mt-4">
          行動裝置與平板左右留白統一為 <code className="bg-gray-100 px-1 rounded">xl</code>（20）；桌機改為內容 <code className="bg-gray-100 px-1 rounded">max-width 1200</code> 置中、兩側最小留白 <code className="bg-gray-100 px-1 rounded">4xl</code>（40）。DESK 內容→頁尾的 100px 為版面級離散值，不在間距刻度上。
        </p>
      </section>
    </div>
  )
}
