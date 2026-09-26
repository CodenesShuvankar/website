import { useState } from 'react'
import { ENGAGEMENT_PHASES, PORTAL_ITEMS, PRINCIPLES, SYSTEMS } from '@/lib/data'
import { Glyph } from './ui/Glyph'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'

/* ── Client portal mockup ──────────────────────────────────────── */

const PORTAL_NAV = ['Dashboard', 'Documents', 'Filings', 'Reconciliations', 'Messages'] as const

const STATE_TONE = {
  signal: 'bg-signal-500/12 text-signal-600',
  brand: 'bg-brand-500/12 text-brand-700',
  alert: 'bg-alert-500/12 text-alert-600',
  ink: 'bg-ink-900/6 text-ink-500',
} as const

function PortalMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-alert-500/60" />
        <span className="size-2.5 rounded-full bg-brand-400/60" />
        <span className="size-2.5 rounded-full bg-signal-500/60" />
        <span className="ml-2 font-mono text-[0.62rem] text-ink-400">portal.hmrecon.com</span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-signal-500/12 px-2 py-0.5 font-mono text-[0.52rem] font-semibold text-signal-400 ring-1 ring-signal-500/25">
          <Glyph name="shield" className="size-2.5" />
          256-BIT
        </span>
      </div>

      <div className="flex">
        <nav className="hidden w-[9.5rem] shrink-0 flex-col gap-0.5 border-r border-white/8 p-2.5 sm:flex">
          {PORTAL_NAV.map((item, i) => (
            <span
              key={item}
              className={`rounded-lg px-2.5 py-2 text-[0.68rem] font-medium ${
                i === 0 ? 'bg-brand-500/14 text-white ring-1 ring-brand-500/25' : 'text-ink-500'
              }`}
            >
              {item}
            </span>
          ))}
          <span className="mt-auto rounded-lg border border-white/8 bg-white/[0.03] p-2.5">
            <span className="block text-[0.6rem] font-semibold text-ink-200">2FA active</span>
            <span className="mt-0.5 block font-mono text-[0.52rem] text-ink-500">Last access 09:41</span>
          </span>
        </nav>

        <div className="min-w-0 flex-1 p-3">
          <div className="grid grid-cols-3 gap-2">
            {[
              { l: 'Documents', v: '248' },
              { l: 'Pending on you', v: '3' },
              { l: 'Filed this FY', v: '96' },
            ].map((k) => (
              <div key={k.l} className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5">
                <p className="tabular font-mono text-[0.95rem] font-bold text-white">{k.v}</p>
                <p className="mt-0.5 truncate text-[0.55rem] text-ink-500">{k.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-2.5 grid grid-cols-[1fr_auto] gap-2 border-y border-white/8 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.5rem] tracking-[0.12em] text-ink-600 uppercase">
            <span>Item</span>
            <span className="text-right">Status</span>
          </div>
          {PORTAL_ITEMS.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-[1fr_auto] items-center gap-2 border-b border-white/5 px-3 py-2.5 text-[0.66rem] last:border-0"
            >
              <span className="min-w-0">
                <span className="block truncate text-ink-200">{item.name}</span>
                <span className="block truncate font-mono text-[0.55rem] text-ink-600">{item.type}</span>
              </span>
              <span
                className={`shrink-0 rounded-md px-2 py-0.5 font-mono text-[0.52rem] font-semibold whitespace-nowrap ${
                  STATE_TONE[item.tone as keyof typeof STATE_TONE]
                }`}
              >
                {item.state}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Engagement timeline mockup ────────────────────────────────── */

function TimelineMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-alert-500/60" />
        <span className="size-2.5 rounded-full bg-brand-400/60" />
        <span className="size-2.5 rounded-full bg-signal-500/60" />
        <span className="ml-2 font-mono text-[0.62rem] text-ink-400">engagement-plan.pdf</span>
        <span className="ml-auto font-mono text-[0.55rem] text-ink-600">20 working days</span>
      </div>

      <div className="p-4">
        {ENGAGEMENT_PHASES.map((phase, i) => (
          <div key={phase.phase} className="flex gap-3">
            <div className="flex w-6 shrink-0 flex-col items-center">
              <span
                className={`grid size-6 shrink-0 place-items-center rounded-full border text-[0.55rem] font-bold ${
                  phase.done
                    ? 'border-signal-500/40 bg-signal-500/15 text-signal-400'
                    : 'border-white/12 bg-white/[0.04] text-ink-500'
                }`}
              >
                {phase.done ? (
                  <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.5 6.2l2.4 2.4L9.5 3.6" />
                  </svg>
                ) : (
                  i + 1
                )}
              </span>
              {i < ENGAGEMENT_PHASES.length - 1 && (
                <span
                  className={`my-1 w-px flex-1 ${phase.done ? 'bg-signal-500/35' : 'bg-white/10'}`}
                />
              )}
            </div>

            <div className="mb-3 min-w-0 flex-1 rounded-lg border border-white/8 bg-white/[0.03] px-3.5 py-2.5">
              <div className="flex items-baseline justify-between gap-3">
                <p className="truncate text-[0.76rem] font-semibold text-white">{phase.phase}</p>
                <p className="shrink-0 font-mono text-[0.55rem] whitespace-nowrap text-ink-500">{phase.days}</p>
              </div>
              <p className="mt-1 text-[0.65rem] leading-snug text-ink-400">{phase.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-white/8 bg-white/[0.02] px-4 py-2.5">
        <span className="font-mono text-[0.56rem] text-ink-500">Fixed fee agreed in the engagement letter</span>
        <span className="tabular font-mono text-[0.6rem] font-bold text-brand-300">Day 20 of 20</span>
      </div>
    </div>
  )
}

/* ── Assurance strip ───────────────────────────────────────────── */

function AssuranceStrip() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
      {[
        { l: 'NDA signed', v: 'Before first call', glyph: 'stamp' as const },
        { l: 'Second-reviewer sign-off', v: 'On every return', glyph: 'users' as const },
        { l: '7-year document retention', v: 'Per ICAI requirements', glyph: 'doc' as const },
      ].map((a) => (
        <div key={a.l} className="flex items-center gap-3 bg-ink-950 px-5 py-4">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-500/12 text-brand-300 ring-1 ring-brand-500/25">
            <Glyph name={a.glyph} className="size-4" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[0.78rem] font-semibold text-white">{a.l}</span>
            <span className="block truncate text-[0.7rem] text-ink-500">{a.v}</span>
          </span>
        </div>
      ))}
    </div>
  )
}

/* ── Section ──────────────────────────────────────────────────── */

export function DeliverySection() {
  const [tab, setTab] = useState<'portal' | 'timeline'>('portal')

  return (
    <section id="technology" className="relative overflow-hidden bg-ink-50/60 py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fine opacity-70 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.2em] text-brand-600 uppercase">
                How we work
              </p>
              <h2 className="mt-3 text-[2rem] font-extrabold tracking-[-0.045em] text-ink-950 sm:text-[2.6rem]">
                Your books, held to the standard{' '}
                <span className="text-gradient-brand">a regulator would apply.</span>
              </h2>
            </div>
            <p className="max-w-xl text-[0.95rem] leading-relaxed text-ink-600">
              Firm systems, restricted access, and a documented trail on every file. You always know exactly who has
              touched your data, what was changed, and when it was filed.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-ink-900/8 bg-ink-950">
              <div className="flex items-center gap-1 border-b border-white/8 px-4 py-3">
                {(
                  [
                    { id: 'portal' as const, label: 'Client Portal' },
                    { id: 'timeline' as const, label: 'Engagement Plan' },
                  ]
                ).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTab(t.id)}
                    aria-pressed={tab === t.id}
                    className={`rounded-lg px-3 py-1.5 font-mono text-[0.68rem] transition-colors ${
                      tab === t.id
                        ? 'bg-brand-500/15 text-brand-200 ring-1 ring-brand-500/30'
                        : 'text-ink-500 hover:text-ink-300'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
                <span className="ml-auto font-mono text-[0.55rem] text-ink-600">
                  {tab === 'portal' ? 'Encrypted session' : 'Illustrative plan'}
                </span>
              </div>

              <div className="p-3 sm:p-4">{tab === 'portal' ? <PortalMock /> : <TimelineMock />}</div>

              <div className="grid grid-cols-1 gap-px border-t border-white/8 bg-white/8 sm:grid-cols-3">
                {[
                  { label: 'Access', value: 'Role-based' },
                  { label: 'Trail', value: 'Immutable log' },
                  { label: 'Residency', value: 'India' },
                ].map((s) => (
                  <div key={s.label} className="bg-ink-950 px-4 py-3">
                    <p className="font-mono text-[0.55rem] tracking-[0.14em] text-ink-600 uppercase">
                      {s.label}
                    </p>
                    <p className="mt-1 font-mono text-[0.72rem] font-semibold text-ink-200">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={110}>
              <AssuranceStrip />
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-4 overflow-hidden rounded-3xl border border-ink-900/8 bg-ink-950 p-6">
                <p className="font-mono text-[0.6rem] tracking-[0.18em] text-ink-500 uppercase">
                  Systems &amp; security
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-white/8 sm:grid-cols-2">
                  {SYSTEMS.map((s) => (
                    <li key={s.label} className="bg-ink-950 px-4 py-3.5">
                      <p className="text-[0.76rem] font-semibold tracking-[-0.01em] text-white">{s.label}</p>
                      <p className="mt-0.5 text-[0.7rem] leading-snug text-ink-500">{s.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-ink-900/8 bg-white p-6 transition-all duration-400 hover:-translate-y-0.5 hover:border-brand-300/60 hover:shadow-[0_20px_44px_-26px_rgba(249,130,12,0.4)]">
                <span className="grid size-10 place-items-center rounded-xl bg-ink-950 text-brand-300">
                  <Glyph name={p.glyph} className="size-[1.15rem]" />
                </span>
                <h3 className="mt-4 text-[1.02rem] font-bold tracking-[-0.025em] text-ink-950">{p.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-600">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-ink-900/8 bg-white p-6 sm:flex-row sm:p-7">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-200/70">
                <Glyph name="doc" className="size-5" />
              </span>
              <div>
                <h3 className="text-[1.05rem] font-bold tracking-[-0.025em] text-ink-950">
                  Request our engagement terms and fee schedule
                </h3>
                <p className="mt-1 text-[0.86rem] text-ink-600">
                  Fixed fees, defined scope, and a named partner — in writing, before you commit to anything. No
                  hourly billing and no scope creep.
                </p>
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row">
              <Button variant="primary" size="md">
                Request a proposal
              </Button>
              <Button variant="ghost-dark" size="md">
                <Glyph name="doc" className="size-3.5" />
                Download firm profile
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
