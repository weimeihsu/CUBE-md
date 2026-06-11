/**
 * Programmatic file download.
 * Uses pre-baked content from downloads.js — no fetch, no network request.
 * Works identically on file://, localhost, and GitHub Pages.
 */
function handleDownload(e, el) {
  e.preventDefault();
  e.stopPropagation(); // keep index-card navigation from firing

  const filename = el.getAttribute('download') || el.getAttribute('href').split('/').pop();
  const content  = DOWNLOAD_FILES[filename];

  if (!content) {
    console.error('Download: file not found in DOWNLOAD_FILES:', filename);
    return;
  }

  // Build blob and fire the Save dialog
  const blob    = new Blob([content], { type: 'application/octet-stream' });
  const blobUrl = URL.createObjectURL(blob);

  const tmp = document.createElement('a');
  tmp.href     = blobUrl;
  tmp.download = filename;
  document.body.appendChild(tmp);
  tmp.click();
  document.body.removeChild(tmp);

  setTimeout(() => URL.revokeObjectURL(blobUrl), 500);
}
