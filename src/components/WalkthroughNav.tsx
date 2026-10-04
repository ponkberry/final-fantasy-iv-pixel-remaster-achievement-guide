import { useEffect, useState } from 'react'
import type { WalkthroughChapter } from '../types'

interface ChapterProgress {
  done: number
  total: number
}

interface WalkthroughNavProps {
  chapters: WalkthroughChapter[]
  progressByChapter: Record<string, ChapterProgress>
  onJumpToChapter: (id: string) => void
}

export function WalkthroughNav({ chapters, progressByChapter, onJumpToChapter }: WalkthroughNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen])

  return (
    <>
      {/* Mobile / narrow screens: floating button that opens a jump-to-chapter panel from anywhere */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Jump to chapter"
        aria-expanded={mobileMenuOpen}
        className="fixed bottom-4 left-4 z-40 flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 md:hidden"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="size-6">
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zm0 5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative max-h-[70vh] w-full overflow-y-auto rounded-t-xl border-t border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                Jump to chapter
              </p>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close"
                className="rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>
            <ol className="space-y-0.5 text-sm">
              {chapters.map((chapter, i) => {
                const progress = progressByChapter[chapter.id]
                const complete = progress && progress.total > 0 && progress.done === progress.total
                return (
                  <li key={chapter.id}>
                    <button
                      type="button"
                      onClick={() => {
                        onJumpToChapter(chapter.id)
                        setMobileMenuOpen(false)
                      }}
                      className="flex w-full items-center gap-2 rounded px-2 py-2 text-left text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                      <span className="w-5 shrink-0 text-right text-xs text-slate-400 dark:text-slate-600">
                        {i + 1}
                      </span>
                      <span className="flex-1 truncate">{chapter.title}</span>
                      {progress && progress.total > 0 && (
                        <span
                          className={`shrink-0 text-xs ${
                            complete
                              ? 'text-violet-600 dark:text-violet-400'
                              : 'text-slate-400 dark:text-slate-600'
                          }`}
                        >
                          {complete ? '✓' : `${progress.done}/${progress.total}`}
                        </span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      )}

      {/* Wider screens: sticky sidebar */}
      <nav className="hidden shrink-0 md:block md:w-64">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
            Chapters
          </p>
          <ol className="space-y-0.5 text-sm">
            {chapters.map((chapter, i) => {
              const progress = progressByChapter[chapter.id]
              const complete = progress && progress.total > 0 && progress.done === progress.total
              return (
                <li key={chapter.id}>
                  <button
                    type="button"
                    onClick={() => onJumpToChapter(chapter.id)}
                    className="flex w-full items-center gap-2 rounded px-2 py-1 text-left text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <span className="w-5 shrink-0 text-right text-xs text-slate-400 dark:text-slate-600">
                      {i + 1}
                    </span>
                    <span className="flex-1 truncate">{chapter.title}</span>
                    {progress && progress.total > 0 && (
                      <span
                        className={`shrink-0 text-xs ${
                          complete
                            ? 'text-violet-600 dark:text-violet-400'
                            : 'text-slate-400 dark:text-slate-600'
                        }`}
                      >
                        {complete ? '✓' : `${progress.done}/${progress.total}`}
                      </span>
                    )}
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
