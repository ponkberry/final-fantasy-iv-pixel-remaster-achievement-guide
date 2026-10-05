import { useMemo, useState } from 'react'
import { treasures } from '../data/treasures'
import { achievements } from '../data/achievements'
import { useTreasureProgress } from '../hooks/useTreasureProgress'
import { ProgressBar } from '../components/ProgressBar'
import { ConfirmResetDialog } from '../components/ConfirmResetDialog'
import { TreasureTags } from '../components/TreasureTags'
import { TreasureItemList } from '../components/TreasureItemList'
import { ImageHint } from '../components/ImageHint'
import { treasureImages } from '../data/guideImages'

const milestones = achievements
  .filter((a) => a.treasureThreshold !== undefined)
  .sort((a, b) => {
    if (a.treasureThreshold!.kind !== b.treasureThreshold!.kind) {
      return a.treasureThreshold!.kind === 'chest' ? -1 : 1
    }
    return a.treasureThreshold!.percent - b.treasureThreshold!.percent
  })

const kinds = ['All', 'Chests', 'Hidden items'] as const
type KindFilter = (typeof kinds)[number]

const statuses = ['All', 'Collected', 'Uncollected', 'Missable'] as const
type StatusFilter = (typeof statuses)[number]

const pillClass = (active: boolean) =>
  `rounded-full border px-3 py-1 text-sm transition-colors ${
    active
      ? 'border-violet-400 bg-violet-50 text-violet-700 dark:border-violet-700 dark:bg-violet-950/40 dark:text-violet-300'
      : 'border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
  }`

export function TreasuresPage() {
  const { isCollected, toggle, reset, groupProgress, totals, collected, percentFor } =
    useTreasureProgress()
  const [query, setQuery] = useState('')
  const [kindFilter, setKindFilter] = useState<KindFilter>('All')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All')
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = treasures
    if (kindFilter === 'Chests') list = list.filter((entry) => entry.kind === 'chest')
    if (kindFilter === 'Hidden items') list = list.filter((entry) => entry.kind === 'hidden')
    if (q) {
      list = list.filter(
        (entry) =>
          entry.location.toLowerCase().includes(q) ||
          entry.contents.some((item) => item.toLowerCase().includes(q)),
      )
    }
    // a spot counts as collected only once every chest/item in it is checked off
    const isGroupDone = (entry: (typeof treasures)[number]) => {
      const { done, total } = groupProgress(entry)
      return done === total
    }
    if (statusFilter === 'Collected') list = list.filter(isGroupDone)
    if (statusFilter === 'Uncollected') list = list.filter((entry) => !isGroupDone(entry))
    if (statusFilter === 'Missable') list = list.filter((entry) => entry.missable)
    return list
  }, [query, kindFilter, statusFilter, groupProgress])

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Treasures</h1>
        <button
          type="button"
          onClick={() => setShowResetConfirm(true)}
          className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          Reset progress
        </button>
      </div>

      <ConfirmResetDialog
        open={showResetConfirm}
        label="treasure progress"
        onCancel={() => setShowResetConfirm(false)}
        onConfirm={() => {
          reset()
          setShowResetConfirm(false)
        }}
      />

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Every treasure chest and hidden item in the game, in walkthrough order, grouped by spot. Each
        chest and hidden item has its own checkbox. You can check your in-game chest count per area
        on the map screen.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Chests</h3>
          <ProgressBar
            completed={collected.chest}
            total={totals.chest}
            percent={Math.floor(percentFor('chest'))}
          />
        </div>
        <div>
          <h3 className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Hidden items</h3>
          <ProgressBar
            completed={collected.hidden}
            total={totals.hidden}
            percent={Math.floor(percentFor('hidden'))}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {milestones.map((achievement) => {
          const { kind, percent } = achievement.treasureThreshold!
          const reached = percentFor(kind) >= percent
          return (
            <div
              key={achievement.id}
              className={`flex items-center gap-1.5 rounded-full border py-1 pl-1 pr-3 text-xs ${
                reached
                  ? 'border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300'
                  : 'border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
              }`}
            >
              <img
                src={achievement.icon}
                alt=""
                width={20}
                height={20}
                className={`size-5 rounded-full ${reached ? '' : 'opacity-50 grayscale'}`}
              />
              {reached ? '✓ ' : ''}
              {achievement.name} ({percent}%{kind === 'hidden' ? ' hidden items' : ''})
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {kinds.map((kind) => (
          <button key={kind} type="button" onClick={() => setKindFilter(kind)} className={pillClass(kindFilter === kind)}>
            {kind}
          </button>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setStatusFilter(status)}
            className={pillClass(statusFilter === status)}
          >
            {status}
          </button>
        ))}
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by location or item…"
        className="mt-4 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
      />

      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
            <tr>
              <th className="px-3 py-2">Location</th>
              <th className="px-3 py-2">Contents</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((entry) => {
              const { done, total } = groupProgress(entry)
              return (
                <tr
                  key={entry.id}
                  className={`border-t border-slate-100 dark:border-slate-800 ${
                    done === total ? 'bg-violet-50/60 dark:bg-violet-950/20' : ''
                  }`}
                >
                  <td className="px-3 py-2 align-top">
                    <div className="font-medium text-slate-900 dark:text-white">
                      {entry.location}
                      <ImageHint images={treasureImages[entry.id] ?? []} label={entry.location} />
                    </div>
                    {entry.hint && (
                      <div className="text-xs text-slate-500 dark:text-slate-500">{entry.hint}</div>
                    )}
                    <TreasureTags entry={entry} />
                  </td>
                  <td className="px-3 py-2 align-top">
                    <TreasureItemList entry={entry} isCollected={isCollected} onToggle={toggle} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {visible.length === 0 && (
          <p className="p-4 text-center text-sm text-slate-500 dark:text-slate-500">
            No treasures match these filters.
          </p>
        )}
      </div>
    </div>
  )
}
