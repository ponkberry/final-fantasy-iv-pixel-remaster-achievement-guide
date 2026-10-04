import { useState } from 'react'
import type { Achievement } from '../types'

interface AchievementCardProps {
  achievement: Achievement
  completed: boolean
  locked?: boolean
  onToggle: (id: string) => void
  subItemProgress?: { done: number; total: number }
  isSubItemComplete?: (subItemId: string) => boolean
  onToggleSubItem?: (subItemId: string) => void
  thresholdProgress?: { current: number; target: number }
}

export function AchievementCard({
  achievement,
  completed,
  locked,
  onToggle,
  subItemProgress,
  isSubItemComplete,
  onToggleSubItem,
  thresholdProgress,
}: AchievementCardProps) {
  const [expanded, setExpanded] = useState(false)
  const hasSubItems = achievement.subItems && achievement.subItems.length > 0

  return (
    <div
      className={`rounded-lg border p-4 transition-colors ${
        completed
          ? 'border-violet-300 bg-violet-50 dark:border-violet-800 dark:bg-violet-950/40'
          : 'border-slate-200 dark:border-slate-800'
      }`}
    >
      <label className={`flex items-start gap-3 ${locked ? 'cursor-default' : 'cursor-pointer'}`}>
        <input
          type="checkbox"
          checked={completed}
          disabled={locked}
          onChange={() => onToggle(achievement.id)}
          className="mt-1 size-4 accent-violet-600 disabled:cursor-not-allowed disabled:opacity-60"
        />
        <img
          src={achievement.icon}
          alt=""
          width={48}
          height={48}
          className={`size-12 shrink-0 rounded ${completed ? '' : 'opacity-50 grayscale'}`}
        />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-slate-900 dark:text-white">{achievement.name}</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              {achievement.category}
            </span>
            {hasSubItems && subItemProgress && (
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  completed
                    ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                }`}
              >
                {subItemProgress.done} / {subItemProgress.total}
              </span>
            )}
            {!hasSubItems && thresholdProgress && (
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  completed
                    ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                }`}
              >
                {thresholdProgress.current} / {thresholdProgress.target}
%
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
          {locked && !hasSubItems && (
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
              {achievement.treasureThreshold !== undefined
                ? 'Unlocks automatically from Treasures progress'
                : achievement.requiresAllOthers
                  ? 'Unlocks automatically once every other achievement is complete'
                  : 'Unlocks automatically from Bestiary progress'}
            </p>
          )}
          {hasSubItems && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setExpanded((v) => !v)
              }}
              className="mt-1 text-xs text-violet-600 hover:underline dark:text-violet-400"
            >
              {expanded ? 'Hide' : 'Show'} checklist ({subItemProgress?.done ?? 0}/
              {subItemProgress?.total ?? achievement.subItems?.length})
            </button>
          )}
        </div>
      </label>

      {hasSubItems && expanded && (
        <ul className="mt-3 ml-7 space-y-1 border-l-2 border-slate-200 pl-3 dark:border-slate-800">
          {achievement.subItems!.map((sub) => {
            const done = isSubItemComplete?.(sub.id) ?? false
            return (
              <li key={sub.id}>
                <label className="flex cursor-pointer items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => onToggleSubItem?.(sub.id)}
                    className="mt-0.5 size-3.5 shrink-0 accent-violet-600"
                  />
                  <span
                    className={
                      done
                        ? 'text-slate-500 line-through dark:text-slate-500'
                        : 'text-slate-700 dark:text-slate-300'
                    }
                  >
                    {sub.label}
                  </span>
                </label>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
