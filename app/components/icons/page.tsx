import { DownloadDoc } from "@/components/download-doc"

// ── SVG icon components (viewBox 0 0 24 24) ──────────────────────────────────

const COLOR = "var(--gray-900)"

function AddIcon({ size, strokeWidth = 1.5, filled = false }: { size: number; strokeWidth?: number; filled?: boolean }) {
  if (filled) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill={COLOR} />
        <path d="M8 12h8M12 8v8" stroke="white" strokeWidth={1.8} strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={COLOR} strokeWidth={strokeWidth} />
      <path d="M8 12h8M12 8v8" stroke={COLOR} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon({ size, strokeWidth = 1.5, filled = false }: { size: number; strokeWidth?: number; filled?: boolean }) {
  if (filled) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill={COLOR} />
        <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="white" strokeWidth={1.8} strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={COLOR} strokeWidth={strokeWidth} />
      <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke={COLOR} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

function ChevronRightIcon({ size, strokeWidth = 1.5 }: { size: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke={COLOR} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SearchIcon({ size, strokeWidth = 1.5 }: { size: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke={COLOR} strokeWidth={strokeWidth} />
      <path d="M16 16l4.5 4.5" stroke={COLOR} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

function CheckmarkIcon({ size, strokeWidth = 1.5 }: { size: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 13l5 5L20 6" stroke={COLOR} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────

const sizes = [
  { px: 16, token: "lg" },
  { px: 20, token: "xl" },
  { px: 24, token: "2xl" },
  { px: 32, token: "3xl" },
  { px: 40, token: "4xl" },
]

// i-67 stroke weights per size (physical px → viewBox units = weight × 24 / size)
const checkWeights: Record<number, number> = { 16: 1.3, 20: 1.5, 24: 1.5, 32: 1.5, 40: 2 }

const gridCols = "grid-cols-[72px_repeat(5,56px)]"

// ── Page ─────────────────────────────────────────────────────────────────────

export default function IconsPage() {
  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">圖標 Icons</h1>
          <p className="text-sm text-muted-foreground">
            5 套圖標組件，共 5 種尺寸。
          </p>
        </div>
        <DownloadDoc filename="icons.md" />
      </div>

      <div className="overflow-x-auto">
        {/* Size scale header */}
        <div className={`grid ${gridCols} gap-x-3 mb-6 pb-4 border-b border-gray-150`}>
          <div />
          {sizes.map(({ px, token }) => (
            <div key={px} className="flex flex-col items-center gap-0.5">
              <span className="text-[14px] font-medium text-gray-600">{token}</span>
              <span className="text-[14px] text-gray-400">{px}px</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8">

          {/* i-01 · Add */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">i-01</span>
              <span className="text-[14px] font-semibold text-foreground">Add</span>
              
            </div>
            <div className={`grid ${gridCols} gap-x-3 gap-y-4`}>
              <span className="flex items-center text-[14px] text-gray-400">outlined</span>
              {sizes.map(({ px }) => (
                <div key={px} className="flex items-center justify-center">
                  <AddIcon size={px} />
                </div>
              ))}
              <span className="flex items-center text-[14px] text-gray-400">filled</span>
              {sizes.map(({ px }) => (
                <div key={px} className="flex items-center justify-center">
                  <AddIcon size={px} filled />
                </div>
              ))}
            </div>
          </div>

          {/* i-03 · Close */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">i-03</span>
              <span className="text-[14px] font-semibold text-foreground">Close</span>
            </div>
            <div className={`grid ${gridCols} gap-x-3 gap-y-4`}>
              <span className="flex items-center text-[14px] text-gray-400">outlined</span>
              {sizes.map(({ px }) => (
                <div key={px} className="flex items-center justify-center">
                  <CloseIcon size={px} />
                </div>
              ))}
              <span className="flex items-center text-[14px] text-gray-400">filled</span>
              {sizes.map(({ px }) => (
                <div key={px} className="flex items-center justify-center">
                  <CloseIcon size={px} filled />
                </div>
              ))}
            </div>
          </div>

          {/* i-06 · Chevron right */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">i-06</span>
              <span className="text-[14px] font-semibold text-foreground">Chevron</span>
            </div>
            <div className={`grid ${gridCols} gap-x-3`}>
             
               <span className="flex items-center text-[14px] text-gray-400">outlined</span>
              {sizes.map(({ px }) => (
                <div key={px} className="flex items-center justify-center">
                  <ChevronRightIcon size={px} />
                </div>
              ))}
            </div>
          </div>

          {/* i-24 · Search */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">i-24</span>
              <span className="text-[14px] font-semibold text-foreground">Search</span>
            </div>
            <div className={`grid ${gridCols} gap-x-3`}>
              <span className="flex items-center text-[14px] text-gray-400">outlined</span>
               
              {sizes.map(({ px }) => (
                <div key={px} className="flex items-center justify-center">
                  <SearchIcon size={px} />
                </div>
              ))}
            </div>
          </div>

          {/* i-67 · Checkmark */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">i-67</span>
              <span className="text-[14px] font-semibold text-foreground">Checkmark</span>
            </div>
            <div className={`grid ${gridCols} gap-x-3 gap-y-1`}>
              <span className="flex items-center text-[14px] text-gray-400">outlined</span>
              {sizes.map(({ px }) => (
                <div key={px} className="flex items-center justify-center">
                  <CheckmarkIcon
                    size={px}
                    strokeWidth={checkWeights[px] * 24 / px}
                  />
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
