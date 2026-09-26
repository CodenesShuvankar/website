import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  mode?: 'rise' | 'fade'
  className?: string
}

/**
 * Scroll-triggered entrance animation. Falls back to visible when
 * IntersectionObserver is unavailable or the user prefers reduced motion.
 */
export function Reveal({ children, delay = 0, mode = 'rise', className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      data-reveal={mode}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
      className={visible ? `is-visible ${className}` : className}
    >
      {children}
    </div>
  )
}
