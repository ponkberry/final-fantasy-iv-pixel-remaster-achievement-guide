import type { BestiaryEntry } from '../types'

interface StepBestiaryListProps {
  entries: BestiaryEntry[]
  isSeen: (number: number) => boolean
  onToggle: (number: number) => void
}

const tagClass = 'ml-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium'

/** Bestiary entries first encountered during a walkthrough step, one checkbox each. */
export function StepBestiaryList({ entries, isSeen, onToggle }: StepBestiaryListProps) {
  if (entries.length === 0) return null

  return (
    <div className="mt-2 ml-6 rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-900/60">
      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Bestiary</p>
      <ul className="mt-1 grid gap-x-4 gap-y-1 sm:grid-cols-2">
        {entries.map((entry) => {
          const seen = isSeen(entry.number)
          return (
            <li key={entry.number}>
              <label className="flex cursor-pointer items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={seen}
                  onChange={() => onToggle(entry.number)}
                  className="mt-0.5 size-3.5 shrink-0 accent-violet-600"
                  aria-label={`Mark ${entry.name} as encountered`}
                />
                <span>
                  <span
                    className={
                      seen ? 'text-slate-500 line-through dark:text-slate-500' : 'text-slate-700 dark:text-slate-300'
                    }
                  >
                    #{entry.number} {entry.name}
                  </span>
                  {entry.boss && (
                    <span className={`${tagClass} bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400`}>
                      Boss
                    </span>
                  )}
                  {entry.missable && (
                    <span className={`${tagClass} bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400`}>
                      Missable
                    </span>
                  )}
                  {entry.notes && (
                    <span className="block text-xs text-slate-500 dark:text-slate-500">{entry.notes}</span>
                  )}
                </span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
