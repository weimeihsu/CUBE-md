import { DownloadDoc } from "@/components/download-doc"

function PlusIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M12 5v14" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}

function ChevronRightIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dash() {
  return <span className="flex items-center text-[14px] text-gray-300">—</span>
}

function StateLabel({ children }: { children: React.ReactNode }) {
  return <span className="flex items-center text-[14px] text-gray-400">{children}</span>
}

export default function ButtonsPage() {
  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">按鈕 Buttons</h1>
          <p className="text-sm text-muted-foreground">5 種按鈕元件。</p>
        </div>
        <DownloadDoc filename="buttons.md" />
      </div>

      <div className="flex flex-col gap-14">

        {/* ══ 1. Dynamic Button ══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">1:3634</span>
            <span className="text-[14px] font-bold text-foreground">按鈕 Dynamic Button</span>
          </div>

          {/* — lg — */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[14px] font-medium text-foreground">lg</span>
              <span className="text-[14px] text-gray-400">NotoSansTC · 16px Bold · py-12px px-24px · r-6</span>
            </div>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-[72px_160px_160px_120px_120px] gap-x-3 gap-y-5 min-w-max">
                <div />
                <span className="text-[14px] text-gray-500 font-medium">Filled</span>
                <span className="text-[14px] text-gray-500 font-medium">Outlined</span>
                <span className="text-[14px] text-gray-500 font-medium">Ghost</span>
                <span className="text-[14px] text-gray-500 font-medium">Text / Green</span>

                {/* Enabled */}
                <StateLabel>Enabled</StateLabel>
                <div>
                  <button type="button" className="py-3 px-6 rounded-[6px] text-[16px] font-bold bg-blue-1000 text-white hover:shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)]">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-3 px-6 rounded-[6px] text-[16px] font-bold bg-gray-0 border border-blue-1000 text-blue-1000 hover:shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)]">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-3 px-6 rounded-[6px] text-[16px] font-bold text-blue-1000">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-3 px-6 rounded-[6px] text-[16px] font-bold text-green-500">
                    按鈕文字
                  </button>
                </div>

                {/* Hover */}
                <StateLabel>Hover</StateLabel>
                <div>
                  <button type="button" className="py-3 px-6 rounded-[6px] text-[16px] font-bold bg-blue-1000 text-white shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)] cursor-default">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-3 px-6 rounded-[6px] text-[16px] font-bold bg-gray-0 border border-blue-1000 text-blue-1000 shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)] cursor-default">
                    按鈕文字
                  </button>
                </div>
                <Dash />
                <Dash />

                {/* Disabled */}
                <StateLabel>Disabled</StateLabel>
                <div>
                  <button type="button" className="py-3 px-6 rounded-[6px] text-[16px] font-bold bg-gray-150 text-gray-300 cursor-not-allowed">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-3 px-6 rounded-[6px] text-[16px] font-bold bg-gray-0 border border-gray-900 text-gray-900 opacity-50 cursor-not-allowed">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-3 px-6 rounded-[6px] text-[16px] font-bold text-gray-900 opacity-50 cursor-not-allowed">
                    按鈕文字
                  </button>
                </div>
                <Dash />
              </div>
            </div>
          </div>

          {/* — sm — */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[14px] font-medium text-foreground">sm</span>
              <span className="text-[14px] text-gray-400">NotoSansTC · 14px Bold · py-4px px-12px · r-6</span>
            </div>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-[72px_100px_100px_100px_100px] gap-x-3 gap-y-5 min-w-max">
                <div />
                <span className="text-[14px] text-gray-500 font-medium">Filled</span>
                <span className="text-[14px] text-gray-500 font-medium">Outlined</span>
                <span className="text-[14px] text-gray-500 font-medium">Text</span>
                <span className="text-[14px] text-gray-500 font-medium">Text / Green</span>

                {/* Enabled */}
                <StateLabel>Enabled</StateLabel>
                <div>
                  <button type="button" className="py-1 px-3 rounded-[6px] text-[14px] font-bold bg-blue-1000 text-white hover:shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)]">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-1 px-3 rounded-[6px] text-[14px] font-bold bg-gray-0 border border-blue-1000 text-blue-1000 hover:shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)]">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-1 px-3 rounded-[6px] text-[14px] font-bold text-blue-1000">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-1 px-3 rounded-[6px] text-[14px] font-bold text-green-500">
                    按鈕文字
                  </button>
                </div>

                {/* Hover */}
                <StateLabel>Hover</StateLabel>
                <div>
                  <button type="button" className="py-1 px-3 rounded-[6px] text-[14px] font-bold bg-blue-1000 text-white shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)] cursor-default">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-1 px-3 rounded-[6px] text-[14px] font-bold bg-gray-0 border border-blue-1000 text-blue-1000 shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)] cursor-default">
                    按鈕文字
                  </button>
                </div>
                <Dash />
                <Dash />

                {/* Disabled */}
                <StateLabel>Disabled</StateLabel>
                <div>
                  <button type="button" className="py-1 px-3 rounded-[6px] text-[14px] font-bold bg-gray-150 text-gray-300 cursor-not-allowed">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-1 px-3 rounded-[6px] text-[14px] font-bold bg-gray-0 border border-gray-900 text-gray-900 opacity-50 cursor-not-allowed">
                    按鈕文字
                  </button>
                </div>
                <div>
                  <button type="button" className="py-1 px-3 rounded-[6px] text-[14px] font-bold text-gray-900 opacity-50 cursor-not-allowed">
                    按鈕文字
                  </button>
                </div>
                <Dash />
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. Bottom Button ══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">1:3486</span>
            <span className="text-[14px] font-bold text-foreground">底部按鈕 Bottom Button</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-6">NotoSansTC · 16px Bold · p-12px · r-6 · width: fill container</p>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-[72px_1fr_1fr] gap-x-6 gap-y-5 min-w-[480px] max-w-[640px]">
              <div />
              <span className="text-[14px] text-gray-500 font-medium">Filled</span>
              <span className="text-[14px] text-gray-500 font-medium">Outlined</span>

              <StateLabel>Enabled</StateLabel>
              <button type="button" className="w-full p-3 rounded-[6px] text-[16px] font-bold bg-blue-1000 text-white text-center hover:shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)]">
                按鈕文字
              </button>
              <button type="button" className="w-full p-3 rounded-[6px] text-[16px] font-bold bg-gray-0 border border-blue-1000 text-blue-1000 text-center hover:shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)]">
                按鈕文字
              </button>

              <StateLabel>Hover</StateLabel>
              <button type="button" className="w-full p-3 rounded-[6px] text-[16px] font-bold bg-blue-1000 text-white text-center shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)] cursor-default">
                按鈕文字
              </button>
              <button type="button" className="w-full p-3 rounded-[6px] text-[16px] font-bold bg-gray-0 border border-blue-1000 text-blue-1000 text-center shadow-[0px_8px_20px_-5px_rgba(0,40,61,0.30)] cursor-default">
                按鈕文字
              </button>

              <StateLabel>Disabled</StateLabel>
              <button type="button" className="w-full p-3 rounded-[6px] text-[16px] font-bold bg-gray-150 text-gray-300 text-center cursor-not-allowed">
                按鈕文字
              </button>
              <button type="button" className="w-full p-3 rounded-[6px] text-[16px] font-bold bg-gray-0 border border-gray-900 text-gray-900 opacity-50 text-center cursor-not-allowed">
                按鈕文字
              </button>
            </div>
          </div>
        </section>

        {/* ══ 3. Icon Button ══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">1:3760</span>
            <span className="text-[14px] font-bold text-foreground">圖標按鈕 Icon Button</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-6">NotoSansTC · 14px Bold · gap-4px · min-h-48px</p>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-[72px_200px_200px] gap-x-6 gap-y-5 min-w-max">
              <div />
              <span className="text-[14px] text-gray-500 font-medium">Primary · Icon → Text</span>
              <span className="text-[14px] text-gray-500 font-medium">Secondary · Text → Icon</span>

              <StateLabel>Enabled</StateLabel>
              <button type="button" className="inline-flex items-center gap-1 text-[14px] font-bold text-green-500 min-h-[48px]">
                <PlusIcon size={16} color="var(--green-500)" />
                按鈕文字
              </button>
              <button type="button" className="inline-flex items-center gap-1 text-[14px] font-bold text-gray-600 min-h-[48px]">
                按鈕文字
                <ChevronRightIcon size={16} color="var(--gray-600)" />
              </button>

              <StateLabel>Disabled</StateLabel>
              <button type="button" className="inline-flex items-center gap-1 text-[14px] font-bold text-gray-600 opacity-50 min-h-[48px] cursor-not-allowed">
                <PlusIcon size={16} color="var(--gray-600)" />
                按鈕文字
              </button>
              <button type="button" className="inline-flex items-center gap-1 text-[14px] font-bold text-gray-600 opacity-50 min-h-[48px] cursor-not-allowed">
                按鈕文字
                <ChevronRightIcon size={16} color="var(--gray-600)" />
              </button>
            </div>
          </div>
        </section>

        {/* ══ 4. Text Link ══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">1:3809</span>
            <span className="text-[14px] font-bold text-foreground">文字連結 Text Link</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-6">NotoSansTC · Bold · min-h-48px · 無左右 padding</p>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-[72px_120px_120px] gap-x-6 gap-y-5 min-w-max">
              <div />
              <span className="text-[14px] text-gray-500 font-medium">sm · 14px</span>
              <span className="text-[14px] text-gray-500 font-medium">lg · 16px</span>

              <StateLabel>Enabled</StateLabel>
              <button type="button" className="flex items-center text-[14px] font-bold text-green-500 min-h-[48px]">按鈕文字</button>
              <button type="button" className="flex items-center text-[16px] font-bold text-green-500 min-h-[48px]">按鈕文字</button>

              <StateLabel>Disabled</StateLabel>
              <button type="button" className="flex items-center text-[14px] font-bold text-gray-600 opacity-50 min-h-[48px] cursor-not-allowed">按鈕文字</button>
              <button type="button" className="flex items-center text-[16px] font-bold text-gray-600 opacity-50 min-h-[48px] cursor-not-allowed">按鈕文字</button>
            </div>
          </div>
        </section>

        {/* ══ 5. Block Button ══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">1:3860</span>
            <span className="text-[14px] font-bold text-foreground">區塊按鈕 Block Button</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-6">NotoSansTC · 16px Bold · 320×72px · 1px dashed · r-12 · 無 State</p>

          <button
            type="button"
            className="flex items-center justify-center gap-2 w-[320px] h-[72px] rounded-[12px] border border-dashed border-gray-500"
          >
            <PlusIcon size={16} color="var(--gray-600)" />
            <span className="text-[16px] font-bold text-gray-600">按鈕文字</span>
          </button>
        </section>

      </div>
    </div>
  )
}
