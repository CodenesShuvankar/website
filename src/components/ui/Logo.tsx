interface LogoProps {
  className?: string
  tone?: 'dark' | 'light'
  showMark?: boolean
}

export function Logo({ className = '', tone = 'dark', showMark = true }: LogoProps) {
  const recon = tone === 'dark' ? 'text-ink-900' : 'text-white'
  const suffix = tone === 'dark' ? 'text-ink-400' : 'text-ink-400'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {showMark && (
        <span
          aria-hidden="true"
          className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-[10px] bg-brand-gradient shadow-[0_6px_18px_-6px_rgba(249,130,12,0.75)]"
        >
          <svg viewBox="0 0 24 24" className="size-[22px] text-white" fill="none">
            <path
              d="M5 18V6M5 6h5.2a3.2 3.2 0 010 6.4H5m8.4 5.6V6"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
      <span
        className="font-sans text-[1.32rem] font-extrabold tracking-[-0.045em] leading-none"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        <span className="text-gradient-brand">HM</span>
        <span className={recon}>RECON</span>
        <span className={`${suffix} ml-1.5 align-super text-[0.5rem] font-semibold tracking-[0.16em]`}>
          AI
        </span>
      </span>
    </span>
  )
}
