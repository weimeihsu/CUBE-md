"use client"

import { useState } from "react"

export function CopyBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-xl bg-[#0f1117] overflow-hidden">
      <button
        onClick={handleCopy}
        title={copied ? "已複製！" : "複製"}
        className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-150"
        aria-label="複製"
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M10.5 5.5V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        )}
      </button>
      <pre className="text-[13.5px] font-mono p-5 pr-14 overflow-x-auto leading-relaxed text-gray-200 whitespace-pre-wrap">{children}</pre>
    </div>
  )
}
