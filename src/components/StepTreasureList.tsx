import type { TreasureEntry } from '../types'
import { TreasureTags } from './TreasureTags'
import { ImageHint } from './ImageHint'
import { treasureImages } from '../data/guideImages'

interface StepTreasureListProps {
  entries: TreasureEntry[]
  isCollected: (entryId: string, index: number) => boolean
  onToggle: (entryId: string, index: number) => void
}

/** Treasures referenced by a walkthrough step: where to look, then one checkbox per chest/item. */
export function StepTreasureList({ entries, isCollected, onToggle }: StepTreasureListProps) {
  if (entries.length === 0) return null

  return (
    <ul className="mt-2 ml-6 space-y-2 rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-900/60">
      {entries.map((entry) => (
        <li key={entry.id}>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            <span className="font-medium text-slate-600 dark:text-slate-400">{entry.location}</span>
            {entry.hint ? ` - ${entry.hint}` : ''}
            <ImageHint images={treasureImages[entry.id] ?? []} label={entry.location} />
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
            {entry.contents.map((item, i) => {
              const done = isCollected(entry.id, i)
              return (
                <label key={i} className="flex cursor-pointer items-center gap-1.5 text-sm">
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => onToggle(entry.id, i)}
                    className="size-3.5 shrink-0 accent-violet-600"
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
              )
            })}
            <TreasureTags entry={entry} />
          </div>
        </li>
      ))}
    </ul>
  )
}
