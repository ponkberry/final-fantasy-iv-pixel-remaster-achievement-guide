import type { TreasureEntry } from '../types'
import { TreasureTags } from './TreasureTags'

interface ChapterTreasureListProps {
  entries: TreasureEntry[]
  isCollected: (id: string) => boolean
  onToggle: (id: string) => void
}

export function ChapterTreasureList({ entries, isCollected, onToggle }: ChapterTreasureListProps) {
  if (entries.length === 0) return null

  const chestCount = entries.filter((e) => e.kind === 'chest').reduce((n, e) => n + e.contents.length, 0)
  const hiddenCount = entries.filter((e) => e.kind === 'hidden').reduce((n, e) => n + e.contents.length, 0)

  return (
    <div className="mt-4 rounded-lg border border-slate-200 p-3 dark:border-slate-800">
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
        Treasures in this area ({chestCount} chests, {hiddenCount} hidden items)
      </p>
      <ul className="grid gap-x-4 gap-y-1 sm:grid-cols-2">
        {entries.map((entry) => {
          const done = isCollected(entry.id)
          return (
            <li key={entry.id}>
              <label className="flex cursor-pointer items-start gap-2 py-0.5 text-sm">
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => onToggle(entry.id)}
                  className="mt-0.5 size-3.5 shrink-0 accent-violet-600"
                />
                <span>
                  <span className={done ? 'text-slate-500 line-through dark:text-slate-500' : 'text-slate-700 dark:text-slate-300'}>
                    {entry.contents.join(', ')}
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-500">
                    {entry.location}
                    {entry.hint ? ` - ${entry.hint}` : ''}
                  </span>
                  <TreasureTags entry={entry} />
                </span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
