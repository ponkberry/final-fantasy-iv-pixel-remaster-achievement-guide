import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'ffiv-pr-theme'

type Theme = 'light' | 'dark'

function getSystemTheme(): Theme {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Explicit light/dark override, persisted to localStorage. Defaults to the OS preference on a
 * user's first visit. index.html applies the same class synchronously before React mounts, to
 * avoid a flash of the wrong theme on load.
 */
export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>(STORAGE_KEY, getSystemTheme())

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
