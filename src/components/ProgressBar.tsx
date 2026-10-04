interface ProgressBarProps {
  completed: number
  total: number
  percent: number
}

export function ProgressBar({ completed, total, percent }: ProgressBarProps) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm text-slate-600 dark:text-slate-400">
        <span>Progress</span>
        <span>
          {completed} / {total} ({percent}%)
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-violet-500 transition-[width]"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
