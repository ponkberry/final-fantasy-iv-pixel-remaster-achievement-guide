import { useMemo, useState } from 'react'
import { walkthrough } from '../data/walkthrough'
import { achievements } from '../data/achievements'
import { bestiary } from '../data/bestiary'
import { treasures } from '../data/treasures'
import { useAchievementProgress } from '../hooks/useAchievementProgress'
import { useWalkthroughProgress } from '../hooks/useWalkthroughProgress'
import { useBestiaryProgress } from '../hooks/useBestiaryProgress'
import { useTreasureProgress } from '../hooks/useTreasureProgress'
import { WalkthroughNav } from '../components/WalkthroughNav'
import { ChapterBestiaryList } from '../components/ChapterBestiaryList'
import { ChapterTreasureList } from '../components/ChapterTreasureList'
import { ConfirmResetDialog } from '../components/ConfirmResetDialog'

export function WalkthroughPage() {
  const {
    isComplete: isAchievementComplete,
    toggle: toggleAchievement,
    isSubItemComplete,
    toggleSubItem,
  } = useAchievementProgress()
  const {
    isComplete: isStepComplete,
    toggle: toggleStep,
    reset: resetSteps,
    isCollapsed,
    toggleCollapse,
    expandChapter,
  } = useWalkthroughProgress()
  const { isSeen, toggle: toggleBestiary } = useBestiaryProgress()
  const { isCollected, toggle: toggleTreasure } = useTreasureProgress()

  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const jumpToChapter = (id: string) => {
    expandChapter(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const achievementById = useMemo(() => new Map(achievements.map((a) => [a.id, a])), [])

  const bestiaryByChapter = useMemo(() => {
    const map = new Map<string, typeof bestiary>()
    for (const entry of bestiary) {
      const chapterIds = [entry.chapterId, ...(entry.extraChapterIds ?? [])].filter(
        (id): id is string => Boolean(id),
      )
      for (const chapterId of chapterIds) {
        const list = map.get(chapterId) ?? []
        list.push(entry)
        map.set(chapterId, list)
      }
    }
    return map
  }, [])

  const treasuresByChapter = useMemo(() => {
    const map = new Map<string, typeof treasures>()
    for (const entry of treasures) {
      if (!entry.chapterId) continue
      const list = map.get(entry.chapterId) ?? []
      list.push(entry)
      map.set(entry.chapterId, list)
    }
    return map
  }, [])

  const progressByChapter = useMemo(() => {
    const map: Record<string, { done: number; total: number }> = {}
    for (const chapter of walkthrough) {
      const done = chapter.steps.filter((s) => isStepComplete(s.id)).length
      map[chapter.id] = { done, total: chapter.steps.length }
    }
    return map
  }, [walkthrough, isStepComplete])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Walkthrough</h1>
        <button
          type="button"
          onClick={() => setShowResetConfirm(true)}
          className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          Reset step progress
        </button>
      </div>

      <ConfirmResetDialog
        open={showResetConfirm}
        label="walkthrough step progress"
        onCancel={() => setShowResetConfirm(false)}
        onConfirm={() => {
          resetSteps()
          setShowResetConfirm(false)
        }}
      />

      <div className="mt-6 flex flex-col gap-8 md:flex-row">
        <WalkthroughNav
          chapters={walkthrough}
          progressByChapter={progressByChapter}
          onJumpToChapter={jumpToChapter}
        />

        <div className="min-w-0 flex-1 space-y-10">
          {walkthrough.map((chapter) => {
            const collapsed = isCollapsed(chapter.id)
            return (
            <section key={chapter.id} id={chapter.id} className="scroll-mt-20">
              <button
                type="button"
                onClick={() => toggleCollapse(chapter.id)}
                aria-expanded={!collapsed}
                className="flex w-full items-start gap-2 text-left"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`mt-1.5 size-4 shrink-0 text-slate-400 transition-transform dark:text-slate-600 ${
                    collapsed ? '-rotate-90' : ''
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <h2 className="text-xl font-medium text-slate-900 dark:text-white">{chapter.title}</h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{chapter.summary}</p>
                </span>
              </button>

              {chapter.warning && (
                <p className="mt-2 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400">
                  ⚠ {chapter.warning}
                </p>
              )}

              {!collapsed && (
              <ol className="mt-4 space-y-3">
                {chapter.steps.map((step) => {
                  const done = isStepComplete(step.id)
                  return (
                    <li key={step.id} className="border-l-2 border-slate-200 pl-4 dark:border-slate-800">
                      <label className="flex cursor-pointer items-start gap-2">
                        <input
                          type="checkbox"
                          checked={done}
                          onChange={() => toggleStep(step.id)}
                          className="mt-1 size-4 shrink-0 accent-violet-600"
                        />
                        <span
                          className={
                            done
                              ? 'text-slate-500 line-through dark:text-slate-500'
                              : 'text-slate-800 dark:text-slate-200'
                          }
                        >
                          {step.text}
                        </span>
                      </label>
                      {step.warning && (
                        <p className="mt-2 ml-6 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400">
                          ⚠ {step.warning}
                        </p>
                      )}
                      {((step.achievementIds && step.achievementIds.length > 0) ||
                        (step.subAchievementIds && step.subAchievementIds.length > 0)) && (
                        <div className="mt-2 ml-6 flex flex-wrap gap-2">
                          {step.achievementIds?.map((id) => {
                            const achievement = achievementById.get(id)
                            if (!achievement) return null
                            const achDone = isAchievementComplete(id)
                            return (
                              <button
                                key={id}
                                type="button"
                                onClick={() => toggleAchievement(id)}
                                className={`flex items-center gap-1.5 rounded-full border py-1 pl-1 pr-3 text-xs transition-colors ${
                                  achDone
                                    ? 'border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300'
                                    : 'border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
                                }`}
                              >
                                <img
                                  src={achievement.icon}
                                  alt=""
                                  width={20}
                                  height={20}
                                  className={`size-5 rounded-full ${achDone ? '' : 'opacity-50 grayscale'}`}
                                />
                                {achDone ? '✓ ' : ''}
                                {achievement.name}
                              </button>
                            )
                          })}
                          {step.subAchievementIds?.map(({ achievementId, subItemId }) => {
                            const achievement = achievementById.get(achievementId)
                            const subItem = achievement?.subItems?.find((s) => s.id === subItemId)
                            if (!achievement || !subItem) return null
                            const subDone = isSubItemComplete(achievementId, subItemId)
                            const label = subItem.label.replace(/^\d+\.\s*/, '')
                            return (
                              <button
                                key={`${achievementId}:${subItemId}`}
                                type="button"
                                onClick={() => toggleSubItem(achievementId, subItemId)}
                                title={achievement.name}
                                className={`flex items-center gap-1.5 rounded-full border py-1 pl-1 pr-3 text-xs transition-colors ${
                                  subDone
                                    ? 'border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300'
                                    : 'border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
                                }`}
                              >
                                <img
                                  src={achievement.icon}
                                  alt=""
                                  width={20}
                                  height={20}
                                  className={`size-5 rounded-full ${subDone ? '' : 'opacity-50 grayscale'}`}
                                />
                                {subDone ? '✓ ' : ''}
                                {label}
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ol>
              )}

              {!collapsed && (
                <ChapterBestiaryList
                  entries={bestiaryByChapter.get(chapter.id) ?? []}
                  isSeen={isSeen}
                  onToggle={toggleBestiary}
                />
              )}

              {!collapsed && (
                <ChapterTreasureList
                  entries={treasuresByChapter.get(chapter.id) ?? []}
                  isCollected={isCollected}
                  onToggle={toggleTreasure}
                />
              )}
            </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
