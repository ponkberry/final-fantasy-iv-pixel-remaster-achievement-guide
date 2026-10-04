import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'

export interface Toast {
  id: string
  title: string
  message: string
  icon?: string
}

const TOAST_LIFETIME_MS = 60_000

interface ToastContextValue {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timeouts = useRef(new Map<string, ReturnType<typeof setTimeout>>())

  const removeToast = useCallback((id: string) => {
    const timeout = timeouts.current.get(id)
    if (timeout) {
      clearTimeout(timeout)
      timeouts.current.delete(id)
    }
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`
      setToasts((prev) => [...prev, { ...toast, id }])
      const timeout = setTimeout(() => removeToast(id), TOAST_LIFETIME_MS)
      timeouts.current.set(id, timeout)
    },
    [removeToast],
  )

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within a ToastProvider')
  return ctx
}
