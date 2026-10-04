import { useCallback, useSyncExternalStore } from 'react'

const listeners = new Map<string, Set<() => void>>()
const cache = new Map<string, { raw: string | null; parsed: unknown }>()

function subscribe(key: string, callback: () => void) {
  let set = listeners.get(key)
  if (!set) {
    set = new Set()
    listeners.set(key, set)
  }
  set.add(callback)
  return () => set!.delete(callback)
}

function emitChange(key: string) {
  listeners.get(key)?.forEach((callback) => callback())
}

/** Reads localStorage for `key`, returning a cached parsed reference unless the raw string changed. */
function readValue<T>(key: string, initialValue: T): T {
  let raw: string | null
  try {
    raw = window.localStorage.getItem(key)
  } catch {
    // storage unreadable (e.g. private browsing) - trust whatever's cached in memory
    const cached = cache.get(key)
    return cached ? (cached.parsed as T) : initialValue
  }

  const cached = cache.get(key)
  if (cached && cached.raw === raw) {
    return cached.parsed as T
  }

  let parsed: T
  try {
    parsed = raw ? (JSON.parse(raw) as T) : initialValue
  } catch {
    parsed = initialValue
  }
  cache.set(key, { raw, parsed })
  return parsed
}

/**
 * State backed by window.localStorage - persists across tab and browser restarts until cleared.
 * Uses useSyncExternalStore so every component reading the same key stays in sync in real time,
 * even across independently-mounted hook instances on different pages.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const value = useSyncExternalStore(
    (callback) => subscribe(key, callback),
    () => readValue(key, initialValue),
    () => initialValue,
  )

  const setStoredValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const prev = readValue(key, initialValue)
      const resolved = next instanceof Function ? next(prev) : next
      const raw = JSON.stringify(resolved)
      try {
        window.localStorage.setItem(key, raw)
      } catch {
        // localStorage unavailable (e.g. private browsing) - falls back to in-memory cache only
      }
      cache.set(key, { raw, parsed: resolved })
      emitChange(key)
    },
    [key, initialValue],
  )

  return [value, setStoredValue] as const
}
