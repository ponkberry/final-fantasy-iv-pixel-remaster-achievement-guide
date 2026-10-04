import type { TreasureEntry } from '../types'
import { TreasureTags } from './TreasureTags'
import { TreasureItemList } from './TreasureItemList'

interface ChapterTreasureListProps {
  entries: TreasureEntry[]
  isCollected: (entryId: string, index: number) => boolean
  onToggle: (entryId: string, index: number) => void
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
      <ul className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
        {entries.map((entry) => (
          <li key={entry.id}>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              <span className="font-medium text-slate-600 dark:text-slate-400">{entry.location}</span>
              {entry.hint ? ` - ${entry.hint}` : ''}
            </p>
            <TreasureTags entry={entry} />
            <div className="mt-1">
              <TreasureItemList entry={entry} isCollected={isCollected} onToggle={onToggle} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
