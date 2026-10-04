import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { bestiary } from '../data/bestiary'

const STORAGE_KEY = 'ffiv-pr-bestiary-progress'

export function useBestiaryProgress() {
  const [seenNumbers, setSeenNumbers] = useLocalStorage<number[]>(STORAGE_KEY, [])

  const seenSet = useMemo(() => new Set(seenNumbers), [seenNumbers])

  const isSeen = useCallback((number: number) => seenSet.has(number), [seenSet])

  const toggle = useCallback(
    (number: number) => {
      setSeenNumbers((prev) =>
        prev.includes(number) ? prev.filter((existing) => existing !== number) : [...prev, number],
      )
    },
    [setSeenNumbers],
  )

  const reset = useCallback(() => setSeenNumbers([]), [setSeenNumbers])

  const total = bestiary.length
  const seenCount = seenSet.size
  const percentComplete = total === 0 ? 0 : (seenCount / total) * 100

  return { seenSet, isSeen, toggle, reset, total, seenCount, percentComplete }
}
