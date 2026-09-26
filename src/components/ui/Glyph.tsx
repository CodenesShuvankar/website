import type { Glyph } from '@/lib/data'

const PATHS: Record<Glyph, string> = {
  spark: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z',
  db: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  bolt: 'M13.5 2.5L4.8 13.2a.6.6 0 00.5 1h5.3l-.9 7.3 8.7-10.7a.6.6 0 00-.5-1h-5.3l.9-7.3z',
  shield: 'M12 2.6l7.4 3v6c0 4.6-3.1 8.5-7.4 9.8-4.3-1.3-7.4-5.2-7.4-9.8v-6l7.4-3zM9 12.2l2.1 2.1L15.3 10',
  link: 'M9.6 13.2a4 4 0 006 .5l2.3-2.3a4 4 0 10-5.7-5.7l-1.3 1.3M14.4 10.8a4 4 0 00-6-.5L6.1 12.6a4 4 0 105.7 5.7l1.3-1.3',
  terminal: 'M4.5 5.5h15v13h-15v-13zM8 10l2.4 2.2L8 14.4M12.6 14.6h3.4',
  bag: 'M5.4 8h13.2l1 12.2a1 1 0 01-1 1.1H5.4a1 1 0 01-1-1.1L5.4 8zM8.8 8V6.3a3.2 3.2 0 016.4 0V8',
  cloud: 'M7.2 18.5a4.2 4.2 0 01-.4-8.4 5.4 5.4 0 0110.3-1.3 3.9 3.9 0 01-.5 7.7h-1.1',
  box: 'M12 2.8l8.4 4.4v9.6L12 21.2 3.6 16.8V7.2L12 2.8zM3.6 7.2L12 11.6l8.4-4.4M12 11.6v9.6M7.8 5l8.4 4.4',
  grid: 'M4 4.8h16v4.6H4V4.8zM4 14.6h16v4.6H4v-4.6zM4 9.4h16v5.2H4V9.4z',
  snow: 'M12 2.8v18.4M4 7.4l16 9.2M20 7.4L4 16.6M12 7l2.4-2.4M12 7L9.6 4.6M12 17l2.4 2.4M12 17l-2.4 2.4',
  chart: 'M4 20h16M7 20V11M12 20V4.6M17 20v-6',
}

interface GlyphProps {
  name: Glyph
  className?: string
  strokeWidth?: number
}

export function Glyph({ name, className = 'size-5', strokeWidth = 1.6 }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
