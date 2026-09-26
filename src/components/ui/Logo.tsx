interface LogoProps {
  className?: string
  tone?: 'dark' | 'light'
  tagline?: boolean
}

export function Logo({ className = '', tone = 'dark', tagline = false }: LogoProps) {
  const recon = tone === 'dark' ? 'text-ink-900' : 'text-white'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
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

      <span className="flex flex-col leading-none">
        <span className="text-[1.3rem] font-extrabold tracking-[-0.05em]">
          <span className="text-gradient-brand">HM</span>
          <span className={recon}>RECON</span>
        </span>
        {tagline && (
          <span className="mt-1 font-mono text-[0.52rem] tracking-[0.18em] text-ink-400 uppercase">
            Chartered Accountants
          </span>
        )}
      </span>
    </span>
  )
}
