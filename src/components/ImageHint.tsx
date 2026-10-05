import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface ImageHintProps {
  /** image paths relative to the site root */
  images: string[]
  /** what the screenshots show, for the button's accessible name */
  label: string
}

const PANEL_WIDTH = 400
const GAP = 6

/**
 * Camera button that shows guide screenshots in a floating panel. Hovering with a mouse opens it;
 * tapping toggles it (for touch screens). The panel is fixed-positioned and clamped to the viewport,
 * rendered into document.body so it never nests inside text or gets clipped, and images only load
 * once it opens.
 */
export function ImageHint({ images, label }: ImageHintProps) {
  const [pos, setPos] = useState<{
    left: number
    top?: number
    bottom?: number
    width: number
    maxHeight: number
  } | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)
  const openedByHover = useRef(false)

  const open = useCallback(() => {
    window.clearTimeout(closeTimer.current)
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    // the visual viewport is what's actually on screen (it can be smaller than innerWidth/Height
    // on mobile when something overflows the page)
    const vw = window.visualViewport?.width ?? window.innerWidth
    const vh = window.visualViewport?.height ?? window.innerHeight
    const width = Math.min(PANEL_WIDTH, vw - 16)
    const left = Math.min(Math.max(rect.left, 8), vw - width - 8)
    // prefer below the button; flip above when there's more room there. Cap the height to the
    // room on that side so the panel never runs off-screen (it scrolls instead).
    const spaceBelow = vh - rect.bottom - GAP - 8
    const spaceAbove = rect.top - GAP - 8
    if (spaceBelow >= 280 || spaceBelow >= spaceAbove) {
      setPos({ left, top: rect.bottom + GAP, width, maxHeight: spaceBelow })
    } else {
      setPos({ left, bottom: vh - rect.top + GAP, width, maxHeight: spaceAbove })
    }
  }, [])

  const close = useCallback(() => {
    window.clearTimeout(closeTimer.current)
    openedByHover.current = false
    setPos(null)
  }, [])

  const closeSoon = useCallback(() => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(close, 150)
  }, [close])

  useEffect(() => {
    if (!pos) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) close()
    }
    // keep the panel attached to its button while the page scrolls (touch taps often nudge the
    // page), and close it once the button has scrolled out of view
    const onScroll = () => {
      const rect = buttonRef.current?.getBoundingClientRect()
      if (!rect || rect.bottom < 0 || rect.top > window.innerHeight) close()
      else open()
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', close)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', close)
    }
  }, [pos, open, close])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  if (images.length === 0) return null

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label={`Show ${images.length === 1 ? 'screenshot' : `${images.length} screenshots`}: ${label}`}
        aria-expanded={pos !== null}
        onPointerEnter={(e) => {
          if (e.pointerType !== 'mouse') return
          openedByHover.current = true
          open()
        }}
        onPointerLeave={(e) => e.pointerType === 'mouse' && closeSoon()}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (!pos) open()
          // the first click after a hover-open keeps it open; any other click toggles it shut
          else if (openedByHover.current) openedByHover.current = false
          else close()
        }}
        className="inline-flex shrink-0 items-center gap-0.5 rounded px-1 py-0.5 align-middle text-xs text-slate-400 hover:bg-slate-100 hover:text-violet-600 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-violet-400"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
        {images.length > 1 && <span>{images.length}</span>}
      </button>

      {pos &&
        createPortal(
          <div
            ref={panelRef}
            role="dialog"
            aria-label={label}
            onPointerEnter={(e) => e.pointerType === 'mouse' && window.clearTimeout(closeTimer.current)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && closeSoon()}
            style={{ left: pos.left, top: pos.top, bottom: pos.bottom, width: pos.width, maxHeight: pos.maxHeight }}
            className="fixed z-50 overflow-y-auto rounded-lg border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="space-y-2">
              {images.map((src) => (
                <img key={src} src={src} alt="" className="w-full rounded" />
              ))}
            </div>
            <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-500">
              Screenshots from the lylat guide on Steam
            </p>
          </div>,
          document.body,
        )}
    </>
  )
}
