import { useEffect, useRef, useState } from 'react'

interface CountUpOptions {
  to: number
  duration?: number
  decimals?: number
  start?: boolean
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

/**
 * Eases a numeric value toward `to` once `start` flips to true.
 * Uses rAF and respects reduced-motion by jumping straight to the end.
 */
export function useCountUp({ to, duration = 1900, decimals = 0, start = true }: CountUpOptions) {
  const [value, setValue] = useState(0)
  const frame = useRef<number | undefined>(undefined)
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (!start) return

    if (reduced.current) {
      setValue(to)
      return
    }

    const begin = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - begin) / duration, 1)
      setValue(to * easeOutExpo(progress))

      if (progress < 1) {
        frame.current = requestAnimationFrame(tick)
      }
    }

    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current !== undefined) cancelAnimationFrame(frame.current)
    }
  }, [to, duration, start])

  return value.toFixed(decimals)
}
