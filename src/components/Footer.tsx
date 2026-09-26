import { COMPLIANCE_BADGES, FOOTER_COLUMNS } from '@/lib/data'
import { Logo } from './ui/Logo'
import { Glyph } from './ui/Glyph'

const SOCIALS = [
  {
    label: 'LinkedIn',
    path: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.19 1.46-2.19 2.97V21h-4V9z',
  },
  {
    label: 'X',
    path: 'M17.53 3H20.5l-6.49 7.41L21.75 21h-5.98l-4.68-6.12L5.7 21H2.73l6.94-7.93L2.5 3h6.13l4.23 5.6L17.53 3zm-1.04 16.2h1.64L7.6 4.72H5.84L16.49 19.2z',
  },
  {
    label: 'GitHub',
    path: 'M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0012 2z',
  },
]

const STATUS = [
  { label: 'API', value: 'Operational', tone: 'text-signal-400' },
  { label: 'Reconciliation', value: 'Operational', tone: 'text-signal-400' },
  { label: 'Inference', value: 'Operational', tone: 'text-signal-400' },
  { label: 'Console', value: 'Operational', tone: 'text-signal-400' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-900/8 bg-ink-50/70">
      {/* Compliance trust band */}
      <div className="border-b border-ink-900/8 bg-white">
        <div className="mx-auto flex max-w-[84rem] flex-col items-center gap-5 px-5 py-7 sm:px-8 lg:flex-row lg:justify-between">
          <p className="font-mono text-[0.64rem] tracking-[0.18em] text-ink-400 uppercase">
            Compliance &amp; trust
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {COMPLIANCE_BADGES.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center gap-2 rounded-lg border border-ink-900/10 bg-white px-3 py-2 text-[0.75rem] font-semibold tracking-[-0.01em] text-ink-600 shadow-[0_1px_4px_-2px_rgba(8,12,21,0.14)]"
              >
                <Glyph name="shield" className="size-3.5 text-brand-500" />
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[84rem] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,3fr)]">
          {/* Brand block */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.88rem] leading-relaxed text-ink-500">
              The AI reconciliation and revenue intelligence engine for multi-channel commerce and enterprise finance
              teams.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-lg border border-ink-900/10 bg-white text-ink-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-ink-900/8 bg-white p-4">
              <p className="font-mono text-[0.58rem] tracking-[0.16em] text-ink-400 uppercase">
                Platform status
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                {STATUS.map((s) => (
                  <li key={s.label} className="flex items-center gap-1.5 text-[0.72rem]">
                    <span className="size-1.5 rounded-full bg-signal-500" />
                    <span className="truncate text-ink-600">{s.label}</span>
                    <span className={`ml-auto shrink-0 font-mono text-[0.6rem] ${s.tone}`}>100%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[0.82rem] font-bold tracking-[-0.02em] text-ink-950">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-[0.82rem] text-ink-500 transition-colors hover:text-brand-600"
                      >
                        {link.label}
                        <svg
                          viewBox="0 0 12 12"
                          className="size-2.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M4 2.5L8.5 6 4 9.5" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-ink-900/8 pt-7 md:flex-row">
          <p className="text-center text-[0.78rem] text-ink-500 md:text-left">
            © {new Date().getFullYear()} HMRECON Technologies Pvt. Ltd. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['Privacy Policy', 'Terms of Service', 'Security', 'DPA', 'Acceptable Use', 'Status'].map((l) => (
              <li key={l}>
                <a href="#" className="text-[0.78rem] text-ink-500 transition-colors hover:text-brand-600">
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <p className="flex items-center gap-2 font-mono text-[0.68rem] text-ink-400">
            <span className="size-1.5 rounded-full bg-signal-500" />
            All systems operational
          </p>
        </div>

        {/* Oversized wordmark */}
        <div aria-hidden="true" className="mt-12 select-none overflow-hidden">
          <p className="bg-gradient-to-b from-ink-900/8 to-transparent bg-clip-text text-center text-[clamp(3.5rem,15vw,12rem)] leading-[0.85] font-extrabold tracking-[-0.06em] text-transparent">
            HMRECON
          </p>
        </div>
      </div>
    </footer>
  )
}
