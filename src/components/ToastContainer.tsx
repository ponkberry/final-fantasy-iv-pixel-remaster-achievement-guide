import { useToast } from '../context/ToastContext'

export function ToastContainer() {
  const { toasts, removeToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex w-full max-w-sm flex-col-reverse gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="status"
          className="animate-toast-in flex items-start gap-3 rounded-lg border border-violet-300 bg-white p-3 shadow-lg dark:border-violet-800 dark:bg-slate-900"
        >
          {toast.icon && (
            <img src={toast.icon} alt="" width={40} height={40} className="size-10 shrink-0 rounded" />
          )}
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium uppercase tracking-wide text-violet-600 dark:text-violet-400">
              {toast.title}
            </p>
            <p className="mt-0.5 truncate text-sm font-medium text-slate-900 dark:text-white">
              {toast.message}
            </p>
          </div>
          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            aria-label="Dismiss notification"
            className="shrink-0 rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}
