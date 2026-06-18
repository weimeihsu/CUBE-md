interface DownloadDocProps {
  filename: string
  label?: string
}

export function DownloadDoc({ filename, label }: DownloadDocProps) {
  return (
    <a
      href={`/doc/${filename}`}
      download={filename}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[14px] bg-gray-150 text-gray-900 hover:bg-gray-200 transition-colors duration-150 no-underline"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 1v8M4 6.5l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {label ?? filename}
    </a>
  )
}
