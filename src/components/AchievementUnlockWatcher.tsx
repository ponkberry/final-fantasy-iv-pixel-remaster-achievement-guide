import { useEffect, useRef } from 'react'
import { achievements } from '../data/achievements'
import { useAchievementProgress } from '../hooks/useAchievementProgress'
import { useToast } from '../context/ToastContext'

const achievementById = new Map(achievements.map((a) => [a.id, a]))

/** Mounted once at the app root - fires a toast whenever an achievement newly completes, no matter which page triggered it. */
export function AchievementUnlockWatcher() {
  const { completedSet } = useAchievementProgress()
  const { addToast } = useToast()
  const previous = useRef<Set<string> | null>(null)

  useEffect(() => {
    if (previous.current === null) {
      // first mount: seed from whatever's already complete this session, don't toast for it
      previous.current = new Set(completedSet)
      return
    }

    for (const id of completedSet) {
      if (previous.current.has(id)) continue
      const achievement = achievementById.get(id)
      if (achievement) {
        addToast({
          title: 'Achievement Unlocked',
          message: achievement.name,
          icon: achievement.icon,
        })
      }
    }

    previous.current = new Set(completedSet)
  }, [completedSet, addToast])

  return null
}
