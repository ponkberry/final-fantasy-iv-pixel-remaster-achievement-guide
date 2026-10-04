import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAchievementProgress } from '../hooks/useAchievementProgress'
import { useBestiaryProgress } from '../hooks/useBestiaryProgress'
import { useTreasureProgress } from '../hooks/useTreasureProgress'
import { ProgressBar } from '../components/ProgressBar'
import { exportSession, importSession } from '../utils/sessionExport'

const sections = [
  { to: '/walkthrough', title: 'Walkthrough', body: 'Chapter-by-chapter guide through the story.' },
  { to: '/achievements', title: 'Achievements', body: 'Track all 30 achievements and check them off as you go.' },
  { to: '/bestiary', title: 'Bestiary', body: 'Log every monster and boss for the Field Research achievements.' },
  { to: '/treasures', title: 'Treasures', body: 'Every chest and hidden item, for Treasure Hunter and Item Detector.' },
]

export function HomePage() {
  const { completedCount, total, percentComplete } = useAchievementProgress()
  const bestiary = useBestiaryProgress()
  const treasure = useTreasureProgress()
  const [importError, setImportError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImportFile = (file: File) => {
    setImportError(null)
    file
      .text()
      .then(importSession)
      .catch((err: unknown) => {
        setImportError(err instanceof Error ? err.message : 'Could not import this file.')
      })
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Final Fantasy IV (Pixel Remaster) Achievement Guide
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        A step-by-step walkthrough paired with achievement, bestiary, and treasure trackers. Your
        progress is saved in this browser and persists across visits until you reset it.
      </p>

      <div className="mt-6 rounded-lg border border-slate-200 p-5 dark:border-slate-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Before you dive in
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-400">
          <li>
            The Walkthrough follows the story chapter by chapter, with achievements, bestiary
            entries, and treasures called out right where you find them. Check them off there, or
            catch up later from their own tabs.
          </li>
          <li>
            Everything can be done in a single playthrough. The only missables are the treasures
            and bestiary entries in one-visit dungeons (Tower of Zot, both trips through the Tower
            of Babel, and the Giant of Babel) and the Sylph summon sidequest.
          </li>
          <li>
            Red banners mark one-visit areas and points of no return. Treasure Hunter, Item
            Detector, Field Research, Summon Master, Summon Collector, Power Unleashed, and Master
            of IV all fill in automatically from your other progress.
          </li>
          <li>
            Stock up on Sirens before you leave the Giant of Babel. They make the rare-drop grinds
            (secret summons and the Pink Tail) far less painful. You can also buy them at the
            Hummingway Home on the moon.
          </li>
          <li>Everything is saved locally in this browser and stays there until you hit Reset.</li>
        </ul>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sections.map((section) => (
          <Link
            key={section.to}
            to={section.to}
            className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-violet-400 dark:border-slate-800"
          >
            <h2 className="text-lg font-medium text-slate-900 dark:text-white">{section.title}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{section.body}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Achievements
          </h3>
          <ProgressBar completed={completedCount} total={total} percent={percentComplete} />
        </div>
        <div>
          <h3 className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Bestiary</h3>
          <ProgressBar
            completed={bestiary.seenCount}
            total={bestiary.total}
            percent={Math.round(bestiary.percentComplete)}
          />
        </div>
        <div>
          <h3 className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Chests</h3>
          <ProgressBar
            completed={treasure.collected.chest}
            total={treasure.totals.chest}
            percent={Math.floor(treasure.percentFor('chest'))}
          />
        </div>
        <div>
          <h3 className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Hidden items
          </h3>
          <ProgressBar
            completed={treasure.collected.hidden}
            total={treasure.totals.hidden}
            percent={Math.floor(treasure.percentFor('hidden'))}
          />
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 p-5 dark:border-slate-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Backup &amp; restore
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Export your progress to a file you can save or move to another browser. Importing
          replaces your current progress here and reloads the page.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={exportSession}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Export progress
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Import progress
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleImportFile(file)
              e.target.value = ''
            }}
          />
        </div>
        {importError && (
          <p className="mt-2 text-sm text-red-700 dark:text-red-400">{importError}</p>
        )}
      </div>
    </div>
  )
}
