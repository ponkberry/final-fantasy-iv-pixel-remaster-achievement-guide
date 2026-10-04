import { useEffect, useState } from 'react'

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-4 left-4 z-40 hidden size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 md:flex"
    >
      <svg viewBox="0 0 20 20" fill="currentColor" className="size-6">
        <path
          fillRule="evenodd"
          d="M10 3a.75.75 0 01.53.22l4.5 4.5a.75.75 0 01-1.06 1.06L10.75 5.56V16a.75.75 0 01-1.5 0V5.56L6.03 8.78a.75.75 0 01-1.06-1.06l4.5-4.5A.75.75 0 0110 3z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}
