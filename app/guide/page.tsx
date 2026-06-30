import Image from "next/image"
import { DownloadDoc } from "@/components/download-doc"
import { CopyBlock } from "@/components/copy-block"

const baseFiles = [
  { label: "顏色 Colors",           file: "color-palette.md",  description: "68 個顏色變數，6 組色系" },
  { label: "字體 Typography",        file: "typography.md",     description: "28 種文字樣式，2 種字體家族" },
  { label: "間距與圓角 Spacing & Radius", file: "spacing-radius.md", description: "10 個間距 Token，4 個圓角 Token" },
]

const componentFiles = [
  { label: "圖標 Icons",             file: "icons.md",          description: "5 組圖標元件集，5 種尺寸" },
  { label: "按鈕 Buttons",           file: "buttons.md",        description: "5 種按鈕類型，32 種變體" },
  { label: "選擇元件 Selections",     file: "selections.md",     description: "核取方塊、單選框、選項卡片" },
  { label: "文字欄位 Text Field",     file: "text-field.md",     description: "輸入框、浮動標籤、欄位群組" },
]

function StepNumber({ n }: { n: number }) {
  return (
    <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[14px] font-bold text-white bg-blue-1000">
      {n}
    </div>
  )
}

function FileRow({ index, label, file, description }: {
  index: number
  label: string
  file: string
  description: string
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-150 last:border-0">
      <span className="shrink-0 w-5 text-[14px] font-medium text-gray-400 pt-0.5">{index}.</span>
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-semibold text-foreground">{label}</p>
        <p className="text-[14px] text-muted-foreground mt-0.5">{description}</p>
      </div>
      <DownloadDoc filename={file} />
    </div>
  )
}

export default function GuidePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-foreground mb-1">安裝指南</h1>
      <p className="text-base text-muted-foreground mb-10">
        透過 AI Agent 將 CUBE 設計系統匯入至你的 Figma 檔案。
      </p>

      <div className="flex flex-col gap-10">

        {/* ── 準備工作 ─────────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-lg font-bold text-foreground pb-3 mb-4 border-b border-gray-150">
            準備工作
          </h2>
          <ul className="flex flex-col gap-2 text-base text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
              一個空白的 Figma 檔案（需有編輯權限）
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
              支援 Figma MCP 的 AI Agent（例如 Claude Code）
            </li>
          </ul>
        </section>

        {/* ── 步驟 ─────────────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-lg font-bold text-foreground pb-3 mb-6 border-b border-gray-150">
            操作步驟
          </h2>

          <div className="flex flex-col gap-6">

            <div className="flex gap-4">
              <StepNumber n={1} />
              <div className="pt-0.5 flex-1 min-w-0">
                <p className="font-semibold text-foreground mb-1">建立空白 Figma 檔案</p>
                <p className="text-base text-muted-foreground mb-3">
                  在 Figma 中新增一個空白設計檔案，複製檔案 URL（格式為 <code className="text-[14px] bg-gray-100 px-1 rounded">figma.com/design/…</code>）。
                </p>
                <Image src="/img/copy-figma-url.png" alt="複製 Figma 檔案 URL" width={600} height={400} className="rounded-lg border border-gray-150 w-full" />
              </div>
            </div>

            <div className="flex gap-4">
              <StepNumber n={2} />
              <div className="pt-0.5">
                <p className="font-semibold text-foreground mb-1">開啟 AI Agent 對話</p>
                <p className="text-base text-muted-foreground">
                  啟動支援 Figma MCP 的 AI Agent，在對話中提供 Figma URL 與下載好的md檔。
                </p>
                <Image src="/img/prompt.png" alt="promt" width={600} height={400} className="rounded-lg border border-gray-150 w-full" />
              </div>
            </div>

            <div className="flex gap-4">
              <StepNumber n={3} />
              <div className="pt-0.5 flex-1 min-w-0">
                <p className="font-semibold text-foreground mb-2">依序匯入基礎建設</p>
                <p className="text-base text-muted-foreground mb-3">
                  讓 Agent 依序讀取以下規格文件並匯入。<strong className="text-foreground">每個檔案完成後再進行下一個</strong>，因為後續層級依賴前一層的變數名稱。
                </p>
                <div className="rounded-lg border border-gray-150 overflow-hidden mb-3">
                  <div className="px-3 py-2 bg-green-150 flex items-center gap-2">
                    <span className="text-[14px] font-bold text-green-800 uppercase tracking-wide">基礎建設 — 優先匯入</span>
                  </div>
                  <div className="px-3">
                    {baseFiles.map((f, i) => (
                      <FileRow key={f.file} index={i + 1} {...f} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <StepNumber n={4} />
              <div className="pt-0.5 flex-1 min-w-0">
                <p className="font-semibold text-foreground mb-2">匯入元件</p>
                <p className="text-base text-muted-foreground mb-3">
                  基礎建設全數完成後，依序匯入元件規格。元件內的色彩與間距會自動綁定至已建立的變數。
                </p>
                <div className="rounded-lg border border-gray-150 overflow-hidden mb-3">
                  <div className="px-3 py-2 bg-blue-150 flex items-center gap-2">
                    <span className="text-[14px] font-bold text-blue-800 uppercase tracking-wide">元件 — 基礎建設完成後匯入</span>
                  </div>
                  <div className="px-3">
                    {componentFiles.map((f, i) => (
                      <FileRow key={f.file} index={baseFiles.length + i + 1} {...f} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── 提示詞範本 ───────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-lg font-bold text-foreground pb-3 mb-4 border-b border-gray-150">
            Agent 提示詞範本
          </h2>
          <CopyBlock>{`我有一個 Figma 檔案：[FIGMA_URL]

請依照附件md檔的規格文件，將 CUBE 設計系統匯入至該 Figma 檔案中。`}</CopyBlock>
          <p className="text-[14px] text-muted-foreground mt-3">
            將 <code className="bg-gray-100 px-1 rounded">[FIGMA_URL]</code> 替換為你的 Figma 檔案網址，並貼上對應規格文件的內容。
          </p>
        </section>

        {/* ── 注意事項 ─────────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-lg font-bold text-foreground pb-3 mb-4 border-b border-gray-150">
            注意事項
          </h2>
          <ul className="flex flex-col gap-2.5 text-base text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
              基礎建設必須在元件之前完成，否則元件的變數綁定會失敗。
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
              每次只讓 Agent 處理一個規格文件，確認完成再繼續下一個。
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
              元件規格中的顏色均以變數名稱表示（如 <code className="text-[14px] bg-gray-100 px-1 rounded">gray/gray500</code>），Agent 應綁定至變數，而非直接填入 hex 值。
            </li>
          </ul>
        </section>

      </div>
    </div>
  )
}
