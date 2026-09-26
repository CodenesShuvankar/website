import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/lib/data'
import { Logo } from './ui/Logo'
import { Button } from './ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
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

  const close = () => setMobileOpen(false)

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
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-block rounded-full px-3.5 py-2 text-[0.875rem] font-medium text-ink-700 transition-colors hover:text-ink-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button variant="ghost-dark" size="sm" className="mr-1">
            Client Portal
          </Button>
          <Button variant="primary" size="sm">
            Book a Consultation
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
        <div className="animate-rise max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-ink-900/8 bg-white px-5 pt-2 pb-8 lg:hidden">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-ink-900/6">
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-4 text-[1.05rem] font-semibold tracking-[-0.02em] text-ink-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2.5">
            <Button variant="primary" size="lg" onClick={close}>
              Book a Consultation
            </Button>
            <Button variant="secondary" size="lg" onClick={close}>
              Client Portal
            </Button>
          </div>
          <p className="mt-6 text-center text-[0.75rem] text-ink-400">
            ICAI Registered · Mumbai · Bengaluru · New Delhi · Chennai
          </p>
        </div>
      )}
    </header>
  )
}
