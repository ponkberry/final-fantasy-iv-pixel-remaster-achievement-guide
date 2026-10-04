import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { treasures } from '../data/treasures'
import type { TreasureEntry, TreasureKind } from '../types'

const STORAGE_KEY = 'ffiv-pr-treasure-progress'

const totals: Record<TreasureKind, number> = { chest: 0, hidden: 0 }
for (const entry of treasures) totals[entry.kind] += entry.contents.length

/** Each chest/hidden item inside a group is tracked on its own, keyed by group id and position. */
function itemKey(entryId: string, index: number) {
  return `${entryId}:${index}`
}

export function useTreasureProgress() {
  const [collectedKeys, setCollectedKeys] = useLocalStorage<string[]>(STORAGE_KEY, [])

  const collectedSet = useMemo(() => new Set(collectedKeys), [collectedKeys])

  const isCollected = useCallback(
    (entryId: string, index: number) => collectedSet.has(itemKey(entryId, index)),
    [collectedSet],
  )

  const toggle = useCallback(
    (entryId: string, index: number) => {
      const key = itemKey(entryId, index)
      setCollectedKeys((prev) =>
        prev.includes(key) ? prev.filter((existing) => existing !== key) : [...prev, key],
      )
    },
    [setCollectedKeys],
  )

  const reset = useCallback(() => setCollectedKeys([]), [setCollectedKeys])

  const groupProgress = useCallback(
    (entry: TreasureEntry) => {
      const done = entry.contents.filter((_, i) => collectedSet.has(itemKey(entry.id, i))).length
      return { done, total: entry.contents.length }
    },
    [collectedSet],
  )

  const collected = useMemo(() => {
    const counts: Record<TreasureKind, number> = { chest: 0, hidden: 0 }
    for (const entry of treasures) {
      entry.contents.forEach((_, i) => {
        if (collectedSet.has(itemKey(entry.id, i))) counts[entry.kind] += 1
      })
    }
    return counts
  }, [collectedSet])

  const percentFor = useCallback(
    (kind: TreasureKind) => (totals[kind] === 0 ? 0 : (collected[kind] / totals[kind]) * 100),
    [collected],
  )

  return { isCollected, toggle, reset, groupProgress, totals, collected, percentFor }
}
