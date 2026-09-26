import { COMPLIANCE_BADGES, FOOTER_COLUMNS, OFFICES, SLA } from '@/lib/data'
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
    label: 'YouTube',
    path: 'M21.6 7.2a2.5 2.5 0 00-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 001.76-1.77A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3L10 15z',
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-900/8 bg-ink-50/70">
      {/* Credentials band */}
      <div className="border-b border-ink-900/8 bg-white">
        <div className="mx-auto flex max-w-[84rem] flex-col items-center gap-5 px-5 py-7 sm:px-8 lg:flex-row lg:justify-between">
          <p className="font-mono text-[0.64rem] tracking-[0.18em] text-ink-400 uppercase">
            Credentials &amp; compliance
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
            <Logo tagline />
            <p className="mt-5 max-w-xs text-[0.88rem] leading-relaxed text-ink-500">
              A chartered accountancy firm delivering audit, tax, financial reporting and revenue assurance to
              growing businesses across India.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#contact"
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
                Response commitments
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                {SLA.map((s) => (
                  <li key={s.label} className="flex items-center gap-1.5 text-[0.72rem]">
                    <span className="size-1.5 rounded-full bg-signal-500" />
                    <span className="truncate text-ink-600">{s.label}</span>
                    <span className="ml-auto shrink-0 font-mono text-[0.6rem] text-ink-900">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-4 grid grid-cols-2 gap-2">
              {OFFICES.map((o) => (
                <li key={o.city} className="rounded-lg border border-ink-900/8 bg-white/60 px-3 py-2.5">
                  <span className="block text-[0.78rem] font-semibold text-ink-900">{o.city}</span>
                  <span className="block truncate text-[0.66rem] text-ink-500">{o.line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
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
            © {new Date().getFullYear()} HMRECON &amp; Co., Chartered Accountants. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['Privacy Policy', 'Terms of Engagement', 'Conflict Policy', 'DPDP Notice', 'Grievance Officer'].map(
              (l) => (
                <li key={l}>
                  <a href="#contact" className="text-[0.78rem] text-ink-500 transition-colors hover:text-brand-600">
                    {l}
                  </a>
                </li>
              ),
            )}
          </ul>

          <p className="flex items-center gap-2 font-mono text-[0.68rem] text-ink-400">
            <span className="size-1.5 rounded-full bg-signal-500" />
            Filings on track · 2026
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
