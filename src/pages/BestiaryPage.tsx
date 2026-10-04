import { useMemo, useState } from 'react'
import { bestiary } from '../data/bestiary'
import { achievements } from '../data/achievements'
import { useBestiaryProgress } from '../hooks/useBestiaryProgress'
import { ProgressBar } from '../components/ProgressBar'
import { ConfirmResetDialog } from '../components/ConfirmResetDialog'

const milestones = achievements
  .filter((a) => a.bestiaryThreshold !== undefined)
  .sort((a, b) => (a.bestiaryThreshold ?? 0) - (b.bestiaryThreshold ?? 0))

const statuses = ['All', 'Seen', 'Unseen', 'Bosses', 'Missable'] as const
type StatusFilter = (typeof statuses)[number]

export function BestiaryPage() {
  const { isSeen, toggle, reset, seenCount, total, percentComplete } = useBestiaryProgress()
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All')
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = bestiary
    if (q) {
      list = list.filter(
        (entry) => entry.name.toLowerCase().includes(q) || entry.location.toLowerCase().includes(q),
      )
    }
    if (statusFilter === 'Seen') list = list.filter((entry) => isSeen(entry.number))
    if (statusFilter === 'Unseen') list = list.filter((entry) => !isSeen(entry.number))
    if (statusFilter === 'Bosses') list = list.filter((entry) => entry.boss)
    if (statusFilter === 'Missable') list = list.filter((entry) => entry.missable)
    return list
  }, [query, statusFilter, isSeen])

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Bestiary</h1>
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
        label="bestiary progress"
        onCancel={() => setShowResetConfirm(false)}
        onConfirm={() => {
          reset()
          setShowResetConfirm(false)
        }}
      />

      <div className="mt-4">
        <ProgressBar completed={seenCount} total={total} percent={Math.round(percentComplete)} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {milestones.map((achievement) => {
          const reached = percentComplete >= (achievement.bestiaryThreshold ?? 0)
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
              {achievement.name} ({achievement.bestiaryThreshold}%)
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setStatusFilter(status)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              statusFilter === status
                ? 'border-violet-400 bg-violet-50 text-violet-700 dark:border-violet-700 dark:bg-violet-950/40 dark:text-violet-300'
                : 'border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or location…"
        className="mt-4 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
      />

      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
            <tr>
              <th className="w-10 px-3 py-2"></th>
              <th className="w-12 px-3 py-2">#</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((entry) => {
              const seen = isSeen(entry.number)
              return (
                <tr
                  key={entry.number}
                  className={`border-t border-slate-100 dark:border-slate-800 ${
                    seen ? 'bg-violet-50/60 dark:bg-violet-950/20' : ''
                  }`}
                >
                  <td className="px-3 py-2">
                    <input
                      type="checkbox"
                      checked={seen}
                      onChange={() => toggle(entry.number)}
                      className="size-4 accent-violet-600"
                      aria-label={`Mark ${entry.name} as encountered`}
                    />
                  </td>
                  <td className="px-3 py-2 text-slate-500 dark:text-slate-500">{entry.number}</td>
                  <td className="px-3 py-2 font-medium text-slate-900 dark:text-white">
                    {entry.name}
                    {entry.boss && (
                      <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        Boss
                      </span>
                    )}
                    {entry.missable && (
                      <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-medium text-red-700 dark:bg-red-950/50 dark:text-red-400">
                        Missable
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-slate-600 dark:text-slate-400">
                    {entry.location || '-'}
                    {entry.notes && (
                      <div className="text-xs text-slate-500 dark:text-slate-500">{entry.notes}</div>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {visible.length === 0 && (
          <p className="p-4 text-center text-sm text-slate-500 dark:text-slate-500">
            No monsters match these filters.
          </p>
        )}
      </div>
    </div>
  )
}
