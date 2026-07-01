import Image from "next/image"
import { PageHeader } from "@/components/page-header"

function DeviceFrame({ label, children }: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="text-[14px] font-medium text-foreground mb-3">{label}</p>
      <div className="overflow-x-auto w-fit">
        {children}
      </div>
    </div>
  )
}

const nativeItems = [
  { label: "StatusBar (iOS + Android)", src: "/img/header-n-footer/StatusBar.png",                  width: 415, height: 162 },
  { label: "iOS Home Indicator",         src: "/img/header-n-footer/iOS-Home-Indicator.png",          width: 375, height: 34  },
  { label: "Android Bottom Button",      src: "/img/header-n-footer/Android-Bottom-Button.png",       width: 360, height: 48  },
]

export default function HeaderFooterPage() {
  return (
    <div>
      <PageHeader
        title="頁首與頁尾 Header & Footer"
        description="網頁 RWD 頁首／頁尾三斷點元件，及手機原生頭尾參考。"
        filename="header-footer.md"
      />

      <div className="flex flex-col gap-14">

        {/* ══ 1. WebHeader ════════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">191:442</span>
            <span className="text-[14px] font-bold text-foreground">網頁頁首 WebHeader</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-8">
            Device variant：DESK / TB / MB。白底，底部 1px 分隔線，logo 靠左（手機置中）。
          </p>

          <div className="flex flex-col gap-8">
            <DeviceFrame label="DESK（桌機）">
              <Image unoptimized src="/img/header-n-footer/header-Device=DESK.png" alt="WebHeader DESK" width={1280} height={98} />
            </DeviceFrame>

            <DeviceFrame label="TB（平板 768px）">
              <Image unoptimized src="/img/header-n-footer/header-Device=TB.png" alt="WebHeader TB" width={768} height={120} />
            </DeviceFrame>

            <DeviceFrame label="MB（手機 375px）">
              <Image unoptimized src="/img/header-n-footer/heade-Device=MB.png" alt="WebHeader MB" width={375} height={103} />
            </DeviceFrame>
          </div>
        </section>

        {/* ══ 2. WebFooter ════════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">191:476</span>
            <span className="text-[14px] font-bold text-foreground">網頁頁尾 WebFooter</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-8">
            兩段式結構：上段白底（logo ＋ 選單 ＋ 社群圖標），下段綠色漸層橫幅（次要連結 ＋ 版權）。
          </p>

          <div className="flex flex-col gap-8">
            <DeviceFrame label="DESK（桌機）">
              <Image unoptimized src="/img/header-n-footer/footer-Device=DESK.png" alt="WebFooter DESK" width={1280} height={205} />
            </DeviceFrame>

            <DeviceFrame label="TB（平板 768px）">
              <Image unoptimized src="/img/header-n-footer/footer-Device=TB.png" alt="WebFooter TB" width={768} height={287} />
            </DeviceFrame>

            <DeviceFrame label="MB（手機 375px）">
              <Image unoptimized src="/img/header-n-footer/footer-Device=MB.png" alt="WebFooter MB" width={375} height={594} />
            </DeviceFrame>
          </div>
        </section>

        {/* ══ 3. Mobile Native（參考用）══════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">231:693</span>
            <span className="text-[14px] font-bold text-foreground">手機原生頭尾 Mobile Native</span>
            <span className="text-[14px] font-normal text-gray-400">（參考用，非 CUBE 元件）</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-6">
            用於展示 App 在原生環境的頭尾脈絡。顏色不綁定 CUBE 變數，忠實模擬作業系統外觀。
          </p>

          <div className="flex flex-col gap-6">
            {nativeItems.map(({ label, src, width, height }) => (
              <DeviceFrame key={label} label={label}>
                <Image unoptimized src={src} alt={label} width={width} height={height} />
              </DeviceFrame>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
