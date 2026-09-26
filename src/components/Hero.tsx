import { Button } from './ui/Button'
import { HeroDashboard } from './hero/HeroDashboard'

const TRUST = [
  { value: '$4.2B', label: 'Reconciled monthly' },
  { value: '99.2%', label: 'Median match accuracy' },
  { value: '11 days', label: 'Faster time to close' },
]

const TICKER = ['recon.run.completed', 'ledger.entry.sealed', 'claim.filed', 'payout.recovered']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-[7.5rem] pb-16 sm:pt-[9rem] lg:pb-24">
      {/* ── Background system ──────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fine [mask-image:radial-gradient(ellipse_70%_58%_at_50%_18%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-brand-500/12 blur-[130px]" />
        <div className="absolute -top-24 left-[8%] h-[22rem] w-[22rem] rounded-full bg-brand-300/20 blur-[110px]" />
        <div className="absolute right-[4%] top-40 h-[20rem] w-[20rem] rounded-full bg-info-400/12 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[84rem] px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement pill */}
          <div className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-ink-900/8 bg-white/70 py-1.5 pr-4 pl-1.5 shadow-[0_2px_14px_-6px_rgba(8,12,21,0.25)] backdrop-blur-md">
            <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.08em] text-white uppercase">
              New
            </span>
            <span className="text-[0.78rem] font-medium text-ink-700">
              Autonomous Close — books closed in 2 days
            </span>
            <svg viewBox="0 0 16 16" className="size-3 text-ink-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 3.5L10.5 8 6 12.5" />
            </svg>
          </div>

          {/* Headline */}
          <h1
            className="animate-rise mt-7 text-[2.6rem] leading-[1.03] font-extrabold tracking-[-0.045em] text-ink-950 sm:text-[3.6rem] lg:text-[4.35rem]"
            style={{ animationDelay: '80ms' }}
          >
            Automate Your Entire{' '}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient-brand">Revenue</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-400/45"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              >
                <path d="M3 8.5C40 3.5 92 3 197 6" />
              </svg>
            </span>{' '}
            &amp; Reconciliation Operation.
          </h1>

          {/* Subheadline */}
          <p
            className="animate-rise mx-auto mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink-600 sm:text-[1.12rem]"
            style={{ animationDelay: '160ms' }}
          >
            HMRECON is the AI reconciliation and revenue intelligence engine that eliminates revenue leaks,
            reconciles multi-channel data, and gives your finance team a single, defensible source of financial truth
            — in near real time.
          </p>

          {/* CTAs */}
          <div
            className="animate-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: '240ms' }}
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Book a Demo
              <svg viewBox="0 0 16 16" className="size-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" className="group w-full sm:w-auto">
              <svg viewBox="0 0 16 16" className="size-4 text-brand-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6.5 4.2l5 3.8-5 3.8V4.2z" />
                <rect x="2" y="2.5" width="12" height="11" rx="2.4" />
              </svg>
              Explore Architecture
            </Button>
          </div>

          <p
            className="animate-rise mt-5 font-mono text-[0.7rem] text-ink-400"
            style={{ animationDelay: '300ms' }}
          >
            No credit card · 30-day pilot · SOC 2 Type II · Deploys in 14 days
          </p>
        </div>

        {/* ── Visualization ────────────────────────────────────── */}
        <div className="animate-rise mt-16 sm:mt-20" style={{ animationDelay: '380ms' }}>
          <HeroDashboard />
        </div>

        {/* Trust strip */}
        <div className="mt-16 border-t border-ink-900/8 pt-10 sm:mt-20">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <p className="max-w-xs text-center text-[0.82rem] leading-relaxed text-ink-500 lg:text-left">
              Trusted by finance and operations teams reconciling high-volume, multi-channel revenue.
            </p>
            <dl className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 lg:w-auto lg:gap-14">
              {TRUST.map((t) => (
                <div key={t.label} className="text-center lg:text-left">
                  <dt className="sr-only">{t.label}</dt>
                  <dd>
                    <span className="tabular block text-[1.65rem] font-extrabold tracking-[-0.045em] text-ink-950">
                      {t.value}
                    </span>
                    <span className="mt-1 block text-[0.78rem] text-ink-500">{t.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Live event ticker */}
      <div className="relative mt-14 border-y border-ink-900/8 bg-ink-950 py-3">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 font-mono text-[0.7rem] whitespace-nowrap text-ink-400">
            {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((event, i) => (
              <span key={`${event}-${i}`} className="flex items-center gap-2.5">
                <span className="size-1.5 rounded-full bg-signal-500" />
                <span className="text-ink-200">{event}</span>
                <span className="text-ink-600">200 OK</span>
                <span className="text-ink-600">{String(12 + i * 3).padStart(2, '0')}ms</span>
                <span className="text-brand-400">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
