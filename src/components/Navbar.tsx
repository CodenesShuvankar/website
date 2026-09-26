import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/lib/data'
import { Logo } from './ui/Logo'
import { Glyph } from './ui/Glyph'
import { Button } from './ui/Button'

const DROPDOWN_ITEMS: Record<string, { label: string; href: string; desc: string; glyph: Parameters<typeof Glyph>[0]['name'] }[]> = {
  Platform: [
    { label: 'Reconciliation Engine', href: '#features', desc: 'Fuse every channel into one ledger', glyph: 'grid' },
    { label: 'AI Exception Handling', href: '#features', desc: 'Multimodal models resolve breaks', glyph: 'spark' },
    { label: 'Revenue Leak Radar', href: '#features', desc: 'Detect short payments in real time', glyph: 'bolt' },
    { label: 'Continuous Assurance', href: '#features', desc: 'Audit-ready, versioned, traceable', glyph: 'shield' },
  ],
  Modules: [
    { label: 'Payout Reconciliation', href: '#features', desc: 'Settlement files matched to orders', glyph: 'db' },
    { label: 'Short Payment Recovery', href: '#features', desc: 'Automatic claims and collections', glyph: 'chart' },
    { label: 'ERP & GL Sync', href: '#integrations', desc: 'SAP, Tally, NetSuite, Xero', glyph: 'link' },
    { label: 'Tax & FX Normalization', href: '#integrations', desc: 'Multi-currency, multi-jurisdiction', glyph: 'cloud' },
  ],
  Resources: [
    { label: 'API Reference', href: '#developers', desc: 'REST and GraphQL, fully typed', glyph: 'terminal' },
    { label: 'Webhook Events', desc: 'Stream every state change', href: '#developers', glyph: 'bolt' },
    { label: 'Architecture Overview', href: '#developers', desc: 'How the engine is built', glyph: 'grid' },
    { label: 'Security & Compliance', href: '#', desc: 'SOC 2 Type II, ISO 27001', glyph: 'shield' },
  ],
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink-900/8 bg-white/85 backdrop-blur-xl backdrop-saturate-150'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-[84rem] items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" aria-label="HMRECON home" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(link.columns ? link.label : null)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.875rem] font-medium text-ink-700 transition-colors hover:text-ink-950"
                aria-expanded={link.columns ? openMenu === link.label : undefined}
              >
                {link.label}
                {link.columns && (
                  <svg
                    viewBox="0 0 12 12"
                    className={`size-2.5 text-ink-400 transition-transform duration-300 ${openMenu === link.label ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2.5 4.5L6 8l3.5-3.5" />
                  </svg>
                )}
              </a>

              {link.columns && openMenu === link.label && (
                <div className="absolute top-full left-1/2 w-[42rem] -translate-x-1/2 pt-3">
                  <div className="animate-rise overflow-hidden rounded-2xl border border-ink-900/8 bg-white p-2 shadow-[0_28px_70px_-28px_rgba(8,12,21,0.4)]">
                    <div className="grid grid-cols-2 gap-1">
                      {link.columns.map((column) => (
                        <div key={column} className="rounded-xl p-3">
                          <p className="px-2 pb-2 text-[0.68rem] font-semibold tracking-[0.14em] text-ink-400 uppercase">
                            {column}
                          </p>
                          {DROPDOWN_ITEMS[column].map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="group/item flex items-start gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-ink-50"
                            >
                              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-200/70 transition-colors group-hover/item:bg-brand-100">
                                <Glyph name={item.glyph} className="size-4" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[0.855rem] font-semibold tracking-[-0.01em] text-ink-900">
                                  {item.label}
                                </span>
                                <span className="block text-[0.775rem] leading-snug text-ink-500">
                                  {item.desc}
                                </span>
                              </span>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="mt-1 flex items-center justify-between gap-4 rounded-xl bg-ink-950 px-4 py-3.5">
                      <p className="text-[0.8rem] text-ink-200">
                        <span className="font-semibold text-white">New:</span> Autonomous close — close the books
                        in 2 days, not 11.
                      </p>
                      <a
                        href="#developers"
                        className="shrink-0 text-[0.8rem] font-semibold text-brand-300 transition-colors hover:text-brand-200"
                      >
                        Read the changelog →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button variant="ghost-dark" size="sm" className="mr-1">
            Sign in
          </Button>
          <Button variant="primary" size="sm">
            Book a Demo
            <svg viewBox="0 0 16 16" className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="grid size-10 place-items-center rounded-full ring-1 ring-ink-900/12 text-ink-900 transition-colors hover:bg-ink-50 lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 block h-[1.6px] w-full rounded bg-current transition-all duration-300 ${
                mobileOpen ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-[1.6px] w-full rounded bg-current transition-opacity duration-200 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.6px] w-full rounded bg-current transition-all duration-300 ${
                mobileOpen ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="animate-rise max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-ink-900/8 bg-white px-5 pt-4 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-ink-900/6">
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-[1.05rem] font-semibold tracking-[-0.02em] text-ink-900"
                >
                  {link.label}
                </a>
                {link.columns && (
                  <div className="pb-4">
                    {link.columns.flatMap((c) => DROPDOWN_ITEMS[c]).map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 py-2 text-[0.875rem] text-ink-500"
                      >
                        <Glyph name={item.glyph} className="size-4 text-ink-400" />
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2.5">
            <Button variant="primary" size="lg" onClick={() => setMobileOpen(false)}>
              Book a Demo
            </Button>
            <Button variant="secondary" size="lg" onClick={() => setMobileOpen(false)}>
              Sign in
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
