import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { useBestiaryProgress } from './useBestiaryProgress'
import { useTreasureProgress } from './useTreasureProgress'
import { achievements } from '../data/achievements'

const STORAGE_KEY = 'ffiv-pr-achievement-progress'
const SUBITEM_STORAGE_KEY = 'ffiv-pr-achievement-subitem-progress'

const lockedIds = new Set(
  achievements
    .filter(
      (a) =>
        a.bestiaryThreshold !== undefined ||
        a.treasureThreshold !== undefined ||
        a.requiresAllOthers ||
        (a.subItems && a.subItems.length > 0),
    )
    .map((a) => a.id),
)

function subItemKey(achievementId: string, subItemId: string) {
  return `${achievementId}:${subItemId}`
}

export function useAchievementProgress() {
  const [completedIds, setCompletedIds] = useLocalStorage<string[]>(STORAGE_KEY, [])
  const [completedSubItemKeys, setCompletedSubItemKeys] = useLocalStorage<string[]>(
    SUBITEM_STORAGE_KEY,
    [],
  )
  const { percentComplete: bestiaryPercent } = useBestiaryProgress()
  const { percentFor: treasurePercentFor } = useTreasureProgress()

  const manualSet = useMemo(() => new Set(completedIds), [completedIds])
  const completedSubItemSet = useMemo(() => new Set(completedSubItemKeys), [completedSubItemKeys])

  const isSubItemComplete = useCallback(
    (achievementId: string, subItemId: string) =>
      completedSubItemSet.has(subItemKey(achievementId, subItemId)),
    [completedSubItemSet],
  )

  const toggleSubItem = useCallback(
    (achievementId: string, subItemId: string) => {
      const key = subItemKey(achievementId, subItemId)
      setCompletedSubItemKeys((prev) =>
        prev.includes(key) ? prev.filter((existing) => existing !== key) : [...prev, key],
      )
    },
    [setCompletedSubItemKeys],
  )

  const subItemProgress = useCallback(
    (achievementId: string) => {
      const achievement = achievements.find((a) => a.id === achievementId)
      const subItems = achievement?.subItems ?? []
      const done = subItems.filter((s) => completedSubItemSet.has(subItemKey(achievementId, s.id))).length
      return { done, total: subItems.length }
    },
    [completedSubItemSet],
  )

  const completedSet = useMemo(() => {
    const set = new Set(manualSet)
    for (const a of achievements) {
      if (a.bestiaryThreshold !== undefined && bestiaryPercent >= a.bestiaryThreshold) set.add(a.id)
      if (
        a.treasureThreshold !== undefined &&
        treasurePercentFor(a.treasureThreshold.kind) >= a.treasureThreshold.percent
      ) {
        set.add(a.id)
      }
      if (
        a.subItems &&
        a.subItems.length > 0 &&
        a.subItems.every((s) => completedSubItemSet.has(subItemKey(a.id, s.id)))
      ) {
        set.add(a.id)
      }
    }
    // checked last, since it depends on every other achievement's derived state
    for (const a of achievements) {
      if (!a.requiresAllOthers) continue
      set.delete(a.id)
      if (achievements.every((other) => other.id === a.id || set.has(other.id))) set.add(a.id)
    }
    return set
  }, [manualSet, bestiaryPercent, treasurePercentFor, completedSubItemSet])

  const isComplete = useCallback((id: string) => completedSet.has(id), [completedSet])
  const isLocked = useCallback((id: string) => lockedIds.has(id), [])

  const toggle = useCallback(
    (id: string) => {
      if (lockedIds.has(id)) return
      setCompletedIds((prev) =>
        prev.includes(id) ? prev.filter((existing) => existing !== id) : [...prev, id],
      )
    },
    [setCompletedIds],
  )

  const reset = useCallback(() => {
    setCompletedIds([])
    setCompletedSubItemKeys([])
  }, [setCompletedIds, setCompletedSubItemKeys])

  const total = achievements.length
  const completedCount = completedSet.size
  const percentComplete = total === 0 ? 0 : Math.round((completedCount / total) * 100)

  return {
    completedSet,
    isComplete,
    isLocked,
    toggle,
    reset,
    total,
    completedCount,
    percentComplete,
    isSubItemComplete,
    toggleSubItem,
    subItemProgress,
  }
}
