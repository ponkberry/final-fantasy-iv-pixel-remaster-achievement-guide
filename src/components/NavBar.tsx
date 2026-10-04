import { NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/walkthrough', label: 'Walkthrough' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/bestiary', label: 'Bestiary' },
  { to: '/treasures', label: 'Treasures' },
]

export function NavBar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <nav className="mx-auto flex max-w-4xl items-center gap-6 px-4 py-4">
        <span className="font-semibold text-slate-900 dark:text-white">FFIV Pixel Remaster Guide</span>
        <div className="flex gap-4 text-sm">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive
                  ? 'font-medium text-violet-600 dark:text-violet-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="ml-auto flex size-8 shrink-0 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path
                fillRule="evenodd"
                d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 101.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM15.657 14.596a.75.75 0 01-1.06 1.06l-1.061-1.06a.75.75 0 111.06-1.06l1.06 1.06zM6.464 5.404a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 111.06-1.06l1.06 1.06z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  )
}
