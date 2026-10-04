import type { TreasureEntry } from '../types'

const tagClass = 'rounded-full px-2 py-0.5 text-[11px] font-medium'

/** Small kind / count / monster-in-a-box / missable badges shown under a treasure's contents. */
export function TreasureTags({ entry }: { entry: TreasureEntry }) {
  const count = entry.contents.length
  return (
    <span className="mt-1 flex flex-wrap gap-1">
      <span className={`${tagClass} bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400`}>
        {count} {entry.kind === 'chest' ? (count === 1 ? 'chest' : 'chests') : count === 1 ? 'hidden item' : 'hidden items'}
      </span>
      {entry.monsterInABox && (
        <span className={`${tagClass} bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300`}>
          Monster-in-a-box
        </span>
      )}
      {entry.missable && (
        <span className={`${tagClass} bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400`}>
          Missable
        </span>
      )}
    </span>
  )
}
