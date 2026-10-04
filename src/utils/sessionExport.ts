// Bump this whenever the shape of exported data changes, so future imports can tell old exports apart.
export const EXPORT_VERSION = 1

// Every localStorage key this app writes to. Keep in sync with each hook's STORAGE_KEY.
const SESSION_STORAGE_KEYS = [
  'ffiv-pr-achievement-progress',
  'ffiv-pr-achievement-subitem-progress',
  'ffiv-pr-bestiary-progress',
  'ffiv-pr-treasure-progress',
  'ffiv-pr-theme',
  'ffiv-pr-walkthrough-progress',
  'ffiv-pr-walkthrough-collapsed',
]

interface SessionExport {
  version: number
  exportedAt: string
  data: Record<string, unknown>
}

export function exportSession(): void {
  const data: Record<string, unknown> = {}
  for (const key of SESSION_STORAGE_KEYS) {
    const raw = localStorage.getItem(key)
    if (raw === null) continue
    try {
      data[key] = JSON.parse(raw)
    } catch {
      data[key] = raw
    }
  }

  const payload: SessionExport = { version: EXPORT_VERSION, exportedAt: new Date().toISOString(), data }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `ffiv-pr-guide-progress-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

/**
 * Restores a previously exported file into localStorage and reloads the page so every tracker
 * picks up the new values. Throws with a user-facing message if the file doesn't look valid.
 */
export function importSession(fileContents: string): void {
  let parsed: unknown
  try {
    parsed = JSON.parse(fileContents)
  } catch {
    throw new Error("That file isn't valid JSON.")
  }

  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    typeof (parsed as SessionExport).version !== 'number' ||
    typeof (parsed as SessionExport).data !== 'object' ||
    (parsed as SessionExport).data === null
  ) {
    throw new Error("That file doesn't look like a progress export from this guide.")
  }

  const { version, data } = parsed as SessionExport
  if (version > EXPORT_VERSION) {
    throw new Error(
      `That file was exported from a newer version of the guide (v${version}) and can't be imported here.`,
    )
  }

  // an export from the 3D Remake guide uses different keys - refuse it rather than silently importing nothing
  if (!SESSION_STORAGE_KEYS.some((key) => key in data)) {
    throw new Error("That file doesn't contain any Pixel Remaster guide progress.")
  }

  for (const key of SESSION_STORAGE_KEYS) {
    if (!(key in data)) continue
    localStorage.setItem(key, JSON.stringify(data[key]))
  }

  window.location.reload()
}
