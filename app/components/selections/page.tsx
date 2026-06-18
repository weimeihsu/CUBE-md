import { DownloadDoc } from "@/components/download-doc"

// ── SVG icons ─────────────────────────────────────────────────────────────────

function TickIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5l3.5 3.5 6.5-6.5" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckmarkIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 13l5 5L20 6" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Types ─────────────────────────────────────────────────────────────────────

type Selected = "on" | "off"
type SelState = "enabled" | "disabled" | "error"

// ── Checkbox box (icon only, 20×20) ───────────────────────────────────────────

function CheckboxBox({ selected, state }: { selected: Selected; state: SelState }) {
  const isOn = selected === "on"
  const isDisabled = state === "disabled"
  const isError = state === "error"

  let bg: string, border: string
  if (isOn) {
    bg = isDisabled ? "var(--gray-600)" : "var(--green-500)"
    border = isDisabled ? "var(--gray-600)" : "var(--green-500)"
  } else if (isDisabled) {
    bg = "var(--gray-100)"; border = "var(--gray-300)"
  } else if (isError) {
    bg = "var(--gray-0)"; border = "var(--red-500)"
  } else {
    bg = "var(--gray-0)"; border = "var(--gray-500)"
  }

  return (
    <div style={{ width: 20, height: 20, borderRadius: 4, background: bg, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      {isOn && <TickIcon />}
    </div>
  )
}

// ── Radio box (icon only, 20×20) ──────────────────────────────────────────────

function RadioBox({ selected, state }: { selected: Selected; state: SelState }) {
  const isOn = selected === "on"
  const isDisabled = state === "disabled"
  const isError = state === "error"

  let bg: string, border: string
  if (isOn) {
    bg = isDisabled ? "var(--gray-600)" : "var(--green-500)"; border = "transparent"
  } else if (isDisabled) {
    bg = "var(--gray-100)"; border = "var(--gray-300)"
  } else if (isError) {
    bg = "var(--gray-0)"; border = "var(--red-500)"
  } else {
    bg = "var(--gray-0)"; border = "var(--gray-500)"
  }

  return (
    <div style={{ width: 20, height: 20, borderRadius: "50%", background: bg, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      {isOn && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
    </div>
  )
}

// ── Small Checkbox with label ─────────────────────────────────────────────────

function SmallCheckboxItem({ selected, state, size }: { selected: Selected; state: SelState; size: "s" | "lg" }) {
  const isDisabled = state === "disabled"
  const isError = state === "error"
  const fontSize = size === "s" ? 14 : 16
  const topOffset = size === "s" ? 0.5 : 2

  return (
    <div style={{ opacity: isDisabled ? 0.5 : 1 }}>
      <div style={{ position: "relative", paddingLeft: 28, display: "flex", alignItems: "center", minHeight: 20 }}>
        <div style={{ position: "absolute", left: 0, top: topOffset }}>
          <CheckboxBox selected={selected} state={state} />
        </div>
        <span style={{ fontSize, lineHeight: 1.5, color: "var(--gray-600)" }}>選項文字</span>
      </div>
      {isError && (
        <div style={{ paddingTop: 8 }}>
          <span style={{ fontSize: 14, color: "var(--red-700)", lineHeight: 1.5 }}>錯誤訊息提示</span>
        </div>
      )}
    </div>
  )
}

// ── Radio Button with label ───────────────────────────────────────────────────

function RadioItem({ selected, state }: { selected: Selected; state: SelState }) {
  const isDisabled = state === "disabled"
  const isError = state === "error"

  return (
    <div style={{ opacity: isDisabled ? 0.5 : 1 }}>
      <div style={{ position: "relative", paddingLeft: 28, display: "flex", alignItems: "center", minHeight: 20 }}>
        <div style={{ position: "absolute", left: 0, top: 2 }}>
          <RadioBox selected={selected} state={state} />
        </div>
        <span style={{ fontSize: 16, lineHeight: 1.5, color: "var(--gray-600)" }}>選項文字</span>
      </div>
      {isError && (
        <div style={{ paddingTop: 8 }}>
          <span style={{ fontSize: 14, color: "var(--red-700)", lineHeight: 1.5 }}>錯誤訊息提示</span>
        </div>
      )}
    </div>
  )
}

// ── Selection Item card (142×48) ──────────────────────────────────────────────

function SelectionCard({ selected, state }: { selected: Selected; state: SelState }) {
  const isOn = selected === "on"
  const isDisabled = state === "disabled"
  const isError = state === "error"

  const borderColor = (isOn && !isDisabled) ? "var(--green-500)" : isError ? "var(--red-500)" : "var(--gray-500)"
  const textColor = (isOn && !isDisabled) ? "var(--green-500)" : (isOn && isDisabled) ? "var(--gray-900)" : "var(--gray-600)"
  const checkColor = isDisabled ? "var(--gray-500)" : "var(--green-500)"

  return (
    <div style={{ width: 142, height: 48, background: "var(--gray-0)", borderRadius: 6, overflow: "hidden", opacity: isDisabled ? 0.5 : 1 }}>
      <div
        style={{
          width: "100%", height: "100%",
          border: `1px solid ${borderColor}`,
          borderRadius: 6,
          display: "flex", alignItems: "center", justifyContent: "center",
          paddingLeft: isOn ? 8 : 12, paddingRight: 12,
          gap: isOn ? 4 : 0,
        }}
      >
        {isOn && <CheckmarkIcon size={16} color={checkColor} />}
        <span style={{ fontSize: 16, lineHeight: 1.5, color: textColor }}>選項文字</span>
      </div>
    </div>
  )
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function ColLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-[14px] text-gray-500 font-medium">{children}</span>
}

function RowLabel({ children }: { children: React.ReactNode }) {
  return <span className="flex items-center text-[14px] text-gray-400">{children}</span>
}

function Dash() {
  return <span className="flex items-center text-[14px] text-gray-300">—</span>
}

const labeledVariants: { label: string; selected: Selected; state: SelState }[] = [
  { label: "Enabled",       selected: "off", state: "enabled"  },
  { label: "Selected",      selected: "on",  state: "enabled"  },
  { label: "Disabled (Off)", selected: "off", state: "disabled" },
  { label: "Disabled (On)",  selected: "on",  state: "disabled" },
  { label: "Error",          selected: "off", state: "error"    },
]

const radioVariants: { label: string; selected: Selected; state: SelState }[] = [
  { label: "Enabled (Off)", selected: "off", state: "enabled"  },
  { label: "Enabled (On)",  selected: "on",  state: "enabled"  },
  { label: "Disabled (Off)", selected: "off", state: "disabled" },
  { label: "Disabled (On)",  selected: "on",  state: "disabled" },
  { label: "Error",          selected: "off", state: "error"    },
]

const selectionVariants: { label: string; selected: Selected; state: SelState }[] = [
  { label: "Off / Enabled",  selected: "off", state: "enabled"  },
  { label: "Off / Disabled", selected: "off", state: "disabled" },
  { label: "Off / Error",    selected: "off", state: "error"    },
  { label: "On / Enabled",   selected: "on",  state: "enabled"  },
  { label: "On / Disabled",  selected: "on",  state: "disabled" },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SelectionsPage() {
  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">選擇元件 Selections</h1>
          <p className="text-sm text-muted-foreground">5 種選擇元件。</p>
        </div>
        <DownloadDoc filename="selections.md" />
      </div>

      <div className="flex flex-col gap-14">

        {/* ══ 1. Checkbox icon ═══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">27:12274</span>
            <span className="text-[14px] font-bold text-foreground">核取方塊（圖標）Checkbox</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-6">20×20px · r-4</p>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-[60px_80px_80px_80px] gap-x-3 gap-y-5 min-w-max">
              <div />
              <ColLabel>Enabled</ColLabel>
              <ColLabel>Disabled</ColLabel>
              <ColLabel>Error</ColLabel>

              <RowLabel>Off</RowLabel>
              <div><CheckboxBox selected="off" state="enabled" /></div>
              <div style={{ opacity: 0.5 }}><CheckboxBox selected="off" state="disabled" /></div>
              <div><CheckboxBox selected="off" state="error" /></div>

              <RowLabel>On</RowLabel>
              <div><CheckboxBox selected="on" state="enabled" /></div>
              <div style={{ opacity: 0.5 }}><CheckboxBox selected="on" state="disabled" /></div>
              <Dash />
            </div>
          </div>
        </section>

        {/* ══ 2. Small Checkbox with label ═══════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">27:11977</span>
            <span className="text-[14px] font-bold text-foreground">核取方塊（含標籤）Small Checkbox</span>
          </div>

          {/* s */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[14px] font-medium text-foreground">s</span>
              <span className="text-[14px] text-gray-400">NotoSansTC · 14px Regular · pl-28px</span>
            </div>
            <div className="overflow-x-auto">
              <div className="flex gap-8 min-w-max">
                {labeledVariants.map(({ label, selected, state }) => (
                  <div key={label} className="flex flex-col gap-2 items-start">
                    <span className="text-[14px] text-gray-400">{label}</span>
                    <SmallCheckboxItem selected={selected} state={state} size="s" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* lg */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[14px] font-medium text-foreground">lg</span>
              <span className="text-[14px] text-gray-400">NotoSansTC · 16px Regular · pl-28px</span>
            </div>
            <div className="overflow-x-auto">
              <div className="flex gap-8 min-w-max">
                {labeledVariants.map(({ label, selected, state }) => (
                  <div key={label} className="flex flex-col gap-2 items-start">
                    <span className="text-[14px] text-gray-400">{label}</span>
                    <SmallCheckboxItem selected={selected} state={state} size="lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. Radio Button icon ═══════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">99:844</span>
            <span className="text-[14px] font-bold text-foreground">單選框（圖標）Radio Button</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-6">20×20px · r-full · inner dot 8×8px</p>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-[60px_80px_80px_80px] gap-x-3 gap-y-5 min-w-max">
              <div />
              <ColLabel>Enabled</ColLabel>
              <ColLabel>Disabled</ColLabel>
              <ColLabel>Error</ColLabel>

              <RowLabel>Off</RowLabel>
              <div><RadioBox selected="off" state="enabled" /></div>
              <div style={{ opacity: 0.5 }}><RadioBox selected="off" state="disabled" /></div>
              <div><RadioBox selected="off" state="error" /></div>

              <RowLabel>On</RowLabel>
              <div><RadioBox selected="on" state="enabled" /></div>
              <div style={{ opacity: 0.5 }}><RadioBox selected="on" state="disabled" /></div>
              <Dash />
            </div>
          </div>
        </section>

        {/* ══ 4. Radio Button with Label ═════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">99:775</span>
            <span className="text-[14px] font-bold text-foreground">單選框（含標籤）Radio Button with Label</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-6">NotoSansTC · 16px Regular · pl-28px</p>

          <div className="overflow-x-auto">
            <div className="flex gap-8 min-w-max">
              {radioVariants.map(({ label, selected, state }) => (
                <div key={label} className="flex flex-col gap-2 items-start">
                  <span className="text-[14px] text-gray-400">{label}</span>
                  <RadioItem selected={selected} state={state} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. Selection Item ══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-150">
            <span className="text-[14px] font-bold px-1.5 py-0.5 rounded bg-gray-150 text-gray-700">28:4229</span>
            <span className="text-[14px] font-bold text-foreground">單選項目 Selection Item</span>
          </div>
          <p className="text-[14px] text-gray-400 mb-6">NotoSansTC · 16px Regular · 142×48px · r-6 · 1px border</p>

          <div className="flex flex-wrap gap-6">
            {selectionVariants.map(({ label, selected, state }) => (
              <div key={label} className="flex flex-col gap-2 items-start">
                <span className="text-[14px] text-gray-400">{label}</span>
                <SelectionCard selected={selected} state={state} />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
