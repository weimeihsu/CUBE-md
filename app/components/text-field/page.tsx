import { PageHeader } from "@/components/page-header"

// ── SVG Icons ──────────────────────────────────────────────────────────────────

function SearchIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth={1.5} />
      <path d="M16.5 16.5L21 21" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}

function ClearIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M18 6L6 18M6 6l12 12" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}

// ── Types ──────────────────────────────────────────────────────────────────────

type TFState = "enabled" | "focused" | "error" | "disabled"
type InputTextConfig = "placeholder" | "input" | "empty"
type LabelTextConfig = "label" | "placeholder" | "input" | "empty"

// ── Helpers ────────────────────────────────────────────────────────────────────

function borderProps(state: TFState): React.CSSProperties {
  const width = state === "focused" ? 2 : 1
  const color =
    state === "focused" ? "var(--green-500)" :
    state === "error"   ? "var(--red-500)" :
    "var(--gray-500)"
  return { border: `${width}px solid ${color}` }
}

// ── 元件 1: Input ──────────────────────────────────────────────────────────────

function InputField({
  state,
  textConfig,
  leadingIcon = true,
  trailingIcon = false,
}: {
  state: TFState
  textConfig: InputTextConfig
  leadingIcon?: boolean
  trailingIcon?: boolean
}) {
  const isDisabled = state === "disabled"
  const isFocused = state === "focused"

  const textColor =
    textConfig === "input"  ? "var(--gray-900)" :
    textConfig === "empty"  ? "var(--green-700)" :
    "var(--gray-600)"

  return (
    <div style={{ width: 296, opacity: isDisabled ? 0.5 : 1 }}>
      <div style={{
        background: "var(--gray-0)",
        borderRadius: 6,
        padding: 12,
        display: "flex",
        alignItems: "center",
        gap: 8,
        ...borderProps(state),
      }}>
        {leadingIcon && <SearchIcon color="var(--gray-500)" />}

        <span style={{ flex: 1, fontSize: 16, lineHeight: 1.5, color: textColor }}>
          {textConfig === "placeholder" && "請輸入內容"}
          {textConfig === "input" && (
            <>已輸入文字{isFocused && <span style={{ color: "var(--green-700)" }}>|</span>}</>
          )}
          {textConfig === "empty" && "|"}
        </span>

        {trailingIcon && (
          <div style={{ paddingLeft: 8 }}>
            <ClearIcon color="var(--gray-500)" />
          </div>
        )}
      </div>
    </div>
  )
}

// ── 元件 2: Input-Label version ────────────────────────────────────────────────

function InputLabelField({
  state,
  textConfig,
}: {
  state: TFState
  textConfig: LabelTextConfig
}) {
  const isDisabled = state === "disabled"
  const isFocused = state === "focused"
  const isError = state === "error"
  const showFloatingLabel = textConfig !== "label"

  const floatingLabelColor =
    isFocused ? "var(--green-700)" :
    isError   ? "var(--red-700)" :
    "var(--gray-500)"

  const floatingLabelLeft = isFocused ? 6 : 7
  const floatingLabelTop = isFocused ? -2 : -1

  const textColor =
    textConfig === "input"  ? "var(--gray-900)" :
    textConfig === "empty"  ? "var(--green-700)" :
    "var(--gray-600)"

  return (
    <div style={{ width: 296, opacity: isDisabled ? 0.5 : 1, position: "relative" }}>
      <div style={{
        background: "var(--gray-0)",
        borderRadius: 6,
        padding: 12,
        display: "flex",
        alignItems: "center",
        ...borderProps(state),
      }}>
        <span style={{ flex: 1, fontSize: 16, lineHeight: 1.5, color: textColor }}>
          {textConfig === "label"       && "標籤文字"}
          {textConfig === "placeholder" && "請輸入內容"}
          {textConfig === "input"       && (
            <>已輸入文字{isFocused && <span style={{ color: "var(--green-700)" }}>|</span>}</>
          )}
          {textConfig === "empty" && "|"}
        </span>
      </div>

      {showFloatingLabel && (
        <div style={{
          position: "absolute",
          left: floatingLabelLeft,
          top: floatingLabelTop,
          background: "var(--gray-0)",
          padding: "0 4px",
          height: 9,
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
        }}>
          <span style={{ fontSize: 12, lineHeight: 1, color: floatingLabelColor, whiteSpace: "nowrap" }}>
            欄位標籤
          </span>
        </div>
      )}
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────

const states: { label: string; state: TFState }[] = [
  { label: "Enabled",  state: "enabled"  },
  { label: "Focused",  state: "focused"  },
  { label: "Error",    state: "error"    },
  { label: "Disabled", state: "disabled" },
]

export default function TextFieldPage() {
  return (
    <div>
      <PageHeader title="文字欄位 Text Field" description="3 種文字欄位元件。" filename="text-field.md" />

      <div className="flex flex-col gap-14">

        {/* ══ 1. Input ══════════════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">28:3989</span>
            <span className="text-[14px] font-bold text-foreground">輸入框 Input</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-6">NotoSansTC · 16px Regular · p-12px · r-6 · w-296px</p>

          {/* Placeholder text */}
          <div className="mb-8">
            <p className="text-[14px] font-medium text-foreground mb-4">Placeholder text</p>
            <div className="flex flex-wrap gap-6">
              {states.map(({ label, state }) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="text-[14px] text-gray-400">{label}</span>
                  <InputField state={state} textConfig="placeholder" />
                </div>
              ))}
            </div>
          </div>

          {/* Input text */}
          <div className="mb-8">
            <p className="text-[14px] font-medium text-foreground mb-4">Input text</p>
            <div className="flex flex-wrap gap-6">
              {states.map(({ label, state }) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="text-[14px] text-gray-400">{label}</span>
                  <InputField state={state} textConfig="input" />
                </div>
              ))}
            </div>
          </div>

          {/* Other variants */}
          <div>
            <p className="text-[14px] font-medium text-foreground mb-4">其他變體</p>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[14px] text-gray-400">Empty · Focused</span>
                <InputField state="focused" textConfig="empty" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[14px] text-gray-400">trailingIcon=true</span>
                <InputField state="enabled" textConfig="input" trailingIcon />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[14px] text-gray-400">leadingIcon=false</span>
                <InputField state="enabled" textConfig="placeholder" leadingIcon={false} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. Input-Label version ════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">31:4627</span>
            <span className="text-[14px] font-bold text-foreground">浮動標籤輸入框 Input-Label version</span>
          </div>

          {/* Label config */}
          <div className="mb-10">
            <p className="text-[14px] font-medium text-foreground mb-4">
              Label
              <span className="ml-2 text-[14px] font-normal text-gray-400">初始未互動狀態，標籤顯示於欄位內</span>
            </p>
            <div className="flex flex-wrap gap-6">
              {states.map(({ label, state }) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="text-[14px] text-gray-400">{label}</span>
                  <InputLabelField state={state} textConfig="label" />
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder text — needs top padding for floating label */}
          <div className="mb-10">
            <p className="text-[14px] font-medium text-foreground mb-4">
              Placeholder text
              <span className="ml-2 text-[14px] font-normal text-gray-400">標籤上浮後</span>
            </p>
            <div className="flex flex-wrap gap-6 pt-3">
              {states.map(({ label, state }) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="text-[14px] text-gray-400">{label}</span>
                  <InputLabelField state={state} textConfig="placeholder" />
                </div>
              ))}
            </div>
          </div>

          {/* Input text */}
          <div className="mb-10">
            <p className="text-[14px] font-medium text-foreground mb-4">Input text</p>
            <div className="flex flex-wrap gap-6 pt-3">
              {states.map(({ label, state }) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="text-[14px] text-gray-400">{label}</span>
                  <InputLabelField state={state} textConfig="input" />
                </div>
              ))}
            </div>
          </div>

          {/* Empty */}
          <div>
            <p className="text-[14px] font-medium text-foreground mb-4">
              Empty
              <span className="ml-2 text-[14px] font-normal text-gray-400">Focused only</span>
            </p>
            <div className="pt-3">
              <InputLabelField state="focused" textConfig="empty" />
            </div>
          </div>
        </section>

        {/* ══ 3. Text Field Group ═══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">1:4126</span>
            <span className="text-[14px] font-bold text-foreground">文字欄位群組 Text Field Group</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-6">固定組合版本，無 State 屬性，子元件各自維護狀態</p>

          <div className="w-full max-w-[296px]">
            {/* Group title row */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingTop: 12,
              paddingBottom: 12,
              minHeight: 48,
            }}>
              <span style={{
                flex: 1,
                paddingRight: 8,
                fontSize: 16,
                fontWeight: 700,
                lineHeight: 1.5,
                color: "var(--gray-900)",
              }}>
                群組標題
              </span>
              <button type="button" style={{
                fontSize: 14,
                fontWeight: 700,
                lineHeight: 1.5,
                color: "var(--green-500)",
                flexShrink: 0,
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}>
                動作連結
              </button>
              {/* Small Checkbox size=s (27:11977) */}
              <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
                <div style={{
                  width: 16,
                  height: 16,
                  borderRadius: 4,
                  border: "1px solid var(--gray-500)",
                  background: "var(--gray-0)",
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: 14, lineHeight: 1.5, color: "var(--gray-600)" }}>選項</span>
              </div>
            </div>

            {/* Input field — leadingIcon=false, placeholder="標題" */}
            <div style={{
              background: "var(--gray-0)",
              borderRadius: 6,
              border: "1px solid var(--gray-500)",
              padding: 12,
              display: "flex",
              alignItems: "center",
            }}>
              <span style={{ flex: 1, fontSize: 16, lineHeight: 1.5, color: "var(--gray-600)" }}>標題</span>
            </div>

            {/* Bottom row */}
            <div style={{ display: "flex", alignItems: "flex-start", paddingTop: 8 }}>
              <span style={{ flex: 1, fontSize: 14, lineHeight: 1.5, color: "var(--gray-600)" }}>
                輔助說明文字
              </span>
              <span style={{
                fontSize: 14,
                lineHeight: 1.5,
                color: "var(--gray-600)",
                paddingLeft: 4,
                flexShrink: 0,
              }}>
                (0/20)
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
