import type { BestiaryEntry } from '../types'

interface ChapterBestiaryListProps {
  entries: BestiaryEntry[]
  isSeen: (number: number) => boolean
  onToggle: (number: number) => void
}

export function ChapterBestiaryList({ entries, isSeen, onToggle }: ChapterBestiaryListProps) {
  if (entries.length === 0) return null

  return (
    <div className="mt-4 rounded-lg border border-slate-200 p-3 dark:border-slate-800">
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
        Bestiary in this area
      </p>
      <ul className="grid gap-x-4 gap-y-1 sm:grid-cols-2">
        {entries.map((entry) => {
          const seen = isSeen(entry.number)
          return (
            <li key={entry.number}>
              <label className="flex cursor-pointer items-start gap-2 py-0.5 text-sm">
                <input
                  type="checkbox"
                  checked={seen}
                  onChange={() => onToggle(entry.number)}
                  className="mt-0.5 size-3.5 shrink-0 accent-violet-600"
                />
                <span>
                  <span className={seen ? 'text-slate-500 line-through dark:text-slate-500' : 'text-slate-700 dark:text-slate-300'}>
                    #{entry.number} {entry.name}
                  </span>
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
