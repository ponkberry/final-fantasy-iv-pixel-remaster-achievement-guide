import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { treasures } from '../data/treasures'
import type { TreasureKind } from '../types'

const STORAGE_KEY = 'ffiv-pr-treasure-progress'

const totals: Record<TreasureKind, number> = { chest: 0, hidden: 0 }
for (const entry of treasures) totals[entry.kind] += entry.contents.length

export function useTreasureProgress() {
  const [collectedIds, setCollectedIds] = useLocalStorage<string[]>(STORAGE_KEY, [])

  const collectedSet = useMemo(() => new Set(collectedIds), [collectedIds])

  const isCollected = useCallback((id: string) => collectedSet.has(id), [collectedSet])

  const toggle = useCallback(
    (id: string) => {
      setCollectedIds((prev) =>
        prev.includes(id) ? prev.filter((existing) => existing !== id) : [...prev, id],
      )
    },
    [setCollectedIds],
  )

  const reset = useCallback(() => setCollectedIds([]), [setCollectedIds])

  // each entry can hold several chests/items, so counts are weighted by contents length
  const collected = useMemo(() => {
    const counts: Record<TreasureKind, number> = { chest: 0, hidden: 0 }
    for (const entry of treasures) {
      if (collectedSet.has(entry.id)) counts[entry.kind] += entry.contents.length
    }
    return counts
  }, [collectedSet])

  const percentFor = useCallback(
    (kind: TreasureKind) => (totals[kind] === 0 ? 0 : (collected[kind] / totals[kind]) * 100),
    [collected],
  )

  return { collectedSet, isCollected, toggle, reset, totals, collected, percentFor }
}
