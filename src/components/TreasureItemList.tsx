import type { TreasureEntry } from '../types'

interface TreasureItemListProps {
  entry: TreasureEntry
  isCollected: (entryId: string, index: number) => boolean
  onToggle: (entryId: string, index: number) => void
}

/** One checkbox per chest/hidden item in a treasure group. */
export function TreasureItemList({ entry, isCollected, onToggle }: TreasureItemListProps) {
  return (
    <ul className="space-y-0.5">
      {entry.contents.map((item, i) => {
        const done = isCollected(entry.id, i)
        return (
          <li key={i}>
            <label className="flex cursor-pointer items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={done}
                onChange={() => onToggle(entry.id, i)}
                className="mt-0.5 size-3.5 shrink-0 accent-violet-600"
                aria-label={`Mark ${item} (${entry.location}) as collected`}
              />
              <span
                className={
                  done ? 'text-slate-500 line-through dark:text-slate-500' : 'text-slate-700 dark:text-slate-300'
                }
              >
                {item}
              </span>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
