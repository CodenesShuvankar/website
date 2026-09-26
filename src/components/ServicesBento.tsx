import type { ReactNode } from 'react'
import { SERVICES, type Service } from '@/lib/data'
import { Glyph } from './ui/Glyph'
import { Reveal } from './ui/Reveal'

/* ── Per-service visuals ──────────────────────────────────────── */

function AuditVisual() {
  const procedures = [
    { name: 'Revenue recognition testing', result: 'Pass', tone: 'signal' },
    { name: 'Bank confirmations', result: 'Confirmed', tone: 'signal' },
    { name: 'Inventory observation', result: 'Pass', tone: 'signal' },
    { name: 'Related party completeness', result: 'Exception', tone: 'alert' },
    { name: 'Subsequent events review', result: 'Pass', tone: 'signal' },
  ]

  const toneMap = {
    signal: 'bg-signal-500/12 text-signal-600',
    alert: 'bg-alert-500/12 text-alert-600',
  } as const

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-ink-900/8 bg-ink-50/80">
      <div className="flex items-center gap-2 border-b border-ink-900/7 bg-white/60 px-4 py-2.5">
        <Glyph name="shield" className="size-3.5 text-brand-600" />
        <p className="font-mono text-[0.58rem] tracking-[0.14em] text-ink-400 uppercase">
          Audit programme · SA 200
        </p>
        <span className="ml-auto font-mono text-[0.55rem] text-ink-500">PM ₹18.0 L</span>
      </div>

      <ul>
        {procedures.map((p) => (
          <li
            key={p.name}
            className="flex items-center gap-3 border-b border-ink-900/5 px-4 py-2.5 last:border-0"
          >
            <span
              className={`grid size-4 shrink-0 place-items-center rounded-full ${
                p.tone === 'signal' ? 'bg-signal-500/15' : 'bg-alert-500/15'
              }`}
            >
              {p.tone === 'signal' ? (
                <svg viewBox="0 0 12 12" className="size-2.5 text-signal-600" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2.5 6.2l2.4 2.4L9.5 3.6" />
                </svg>
              ) : (
                <svg viewBox="0 0 12 12" className="size-2.5 text-alert-600" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 3l6 6M9 3l-6 6" />
                </svg>
              )}
            </span>
            <span className="truncate text-[0.72rem] text-ink-700">{p.name}</span>
            <span
              className={`ml-auto shrink-0 rounded-md px-2 py-0.5 font-mono text-[0.55rem] font-semibold ${
                toneMap[p.tone as keyof typeof toneMap]
              }`}
            >
              {p.result}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-ink-900/7 bg-ink-950 px-4 py-2.5">
        <span className="font-mono text-[0.56rem] text-ink-400">4 findings · 1 escalated to key audit matter</span>
        <span className="tabular font-mono text-[0.6rem] font-bold text-brand-300">36 of 41 complete</span>
      </div>
    </div>
  )
}

function TaxVisual() {
  const returns = [
    { name: 'GSTR-3B', period: 'Jul 2026', due: '20 Aug', state: 'Filed', tone: 'signal' },
    { name: 'GSTR-1', period: 'Jul 2026', due: '11 Aug', state: 'Filed', tone: 'signal' },
    { name: 'TDS 26Q', period: 'Q2 FY27', due: '07 Jul', state: 'Filed', tone: 'signal' },
    { name: 'TDS 194Q', period: 'Q2 FY27', due: '30 Jul', state: 'Review', tone: 'brand' },
    { name: 'Advance Tax', period: 'Q2 FY27', due: '15 Sep', state: 'Upcoming', tone: 'ink' },
  ]

  const pill = {
    signal: 'bg-signal-500/12 text-signal-600',
    brand: 'bg-brand-500/12 text-brand-700',
    ink: 'bg-ink-900/6 text-ink-500',
  } as const

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-ink-900/8 bg-ink-50/80">
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 border-b border-ink-900/7 bg-white/60 px-4 py-2.5 font-mono text-[0.52rem] tracking-[0.12em] text-ink-400 uppercase">
        <span>Return</span>
        <span>Due</span>
        <span className="text-right">Status</span>
      </div>
      {returns.map((r) => (
        <div
          key={r.name}
          className="grid grid-cols-[1fr_auto_auto] items-center gap-x-3 border-b border-ink-900/5 px-4 py-2.5 last:border-0"
        >
          <span className="min-w-0 truncate text-[0.72rem] text-ink-800">
            {r.name}
            <span className="ml-1.5 font-mono text-[0.6rem] text-ink-400">{r.period}</span>
          </span>
          <span className="font-mono text-[0.6rem] whitespace-nowrap text-ink-500">{r.due}</span>
          <span
            className={`ml-1 rounded-md px-2 py-0.5 text-right font-mono text-[0.55rem] font-semibold whitespace-nowrap ${
              pill[r.tone as keyof typeof pill]
            }`}
          >
            {r.state}
          </span>
        </div>
      ))}
    </div>
  )
}

function ReportingVisual() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-ink-900/8 bg-ink-50/80">
      <div className="grid grid-cols-[1fr_auto] gap-x-4 px-4 py-2.5">
        {[
          { l: 'Revenue from operations', v: '₹48,21,40,000', b: true },
          { l: 'Cost of materials consumed', v: '₹(26,44,80,000)' },
          { l: 'Employee benefit expense', v: '₹(4,82,15,000)' },
          { l: 'Finance costs', v: '₹(1,20,40,000)' },
          { l: 'Profit before tax', v: '₹12,08,90,000', b: true },
        ].map((row) => (
          <div
            key={row.l}
            className="flex items-center gap-4 border-b border-ink-900/5 py-2.5 last:border-0"
          >
            <span
              className={`truncate text-[0.72rem] ${row.b ? 'font-semibold text-ink-900' : 'text-ink-600'}`}
            >
              {row.l}
            </span>
            <span
              className={`tabular ml-auto font-mono text-[0.68rem] ${
                row.b ? 'font-bold text-ink-950' : 'text-ink-600'
              }`}
            >
              {row.v}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-ink-900/7 bg-ink-950 px-4 py-2.5">
        <span className="font-mono text-[0.56rem] text-ink-400">Ind AS 108 · Ind AS 115 revenue policy applied</span>
        <span className="tabular font-mono text-[0.6rem] font-bold text-brand-300">Reviewed by partner</span>
      </div>
    </div>
  )
}

function RevenueAssuranceVisual() {
  const bridge = [
    { l: 'Gross order value', v: '₹4,82,10,000', pct: 100, tone: 'bg-ink-400' },
    { l: 'Platform & fulfilment fees', v: '−₹14,23,600', pct: 78, tone: 'bg-ink-500' },
    { l: 'Refunds & RTO', v: '−₹8,64,100', pct: 62, tone: 'bg-ink-600' },
    { l: 'Chargebacks', v: '−₹1,42,000', pct: 46, tone: 'bg-ink-700' },
    { l: 'TDS withheld (194Q)', v: '−₹2,24,500', pct: 34, tone: 'bg-ink-700' },
  ]

  return (
    <div className="mt-6 rounded-2xl border border-ink-900/8 bg-ink-50/80 p-4">
      <p className="font-mono text-[0.56rem] tracking-[0.14em] text-ink-400 uppercase">
        Settlement bridge · August 2026
      </p>

      <ul className="mt-3 space-y-2">
        {bridge.map((row) => (
          <li key={row.l} className="flex items-center gap-2.5">
            <span className="w-[9.5rem] shrink-0 truncate text-[0.68rem] text-ink-600">{row.l}</span>
            <span className="h-2 flex-1 overflow-hidden rounded-sm bg-ink-900/6">
              <span
                className={`block h-full rounded-sm ${row.tone} transition-[width] duration-700`}
                style={{ width: `${row.pct}%` }}
              />
            </span>
            <span className="tabular w-[6.5rem] shrink-0 text-right font-mono text-[0.62rem] text-ink-800">
              {row.v}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-3.5 flex items-center justify-between rounded-xl bg-ink-950 px-3.5 py-2.5">
        <div>
          <p className="font-mono text-[0.54rem] tracking-[0.12em] text-ink-500 uppercase">Variance claimed</p>
          <p className="tabular mt-0.5 font-mono text-[0.9rem] font-bold text-alert-400">₹2,65,420</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[0.54rem] tracking-[0.12em] text-ink-500 uppercase">Status</p>
          <p className="mt-0.5 font-mono text-[0.6rem] font-semibold text-brand-300">Claim filed · Day 6</p>
        </div>
      </div>
    </div>
  )
}

function AdvisoryVisual() {
  const retainer = [
    { l: 'Monthly close & MIS pack', v: 'Day 5' },
    { l: 'Cash flow & covenant reporting', v: 'Day 8' },
    { l: 'Board pack & variance narrative', v: 'Day 12' },
    { l: 'Fundraise data room upkeep', v: 'Ongoing' },
  ]

  return (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1.2fr_1fr]">
      <ul className="rounded-2xl border border-ink-900/8 bg-ink-50/80 p-4">
        {retainer.map((r) => (
          <li
            key={r.l}
            className="flex items-center gap-3 border-b border-ink-900/5 py-2.5 text-[0.72rem] last:border-0"
          >
            <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand-500/15">
              <span className="size-1.5 rounded-full bg-brand-500" />
            </span>
            <span className="truncate text-ink-700">{r.l}</span>
            <span className="ml-auto shrink-0 font-mono text-[0.58rem] whitespace-nowrap text-ink-400">
              {r.v}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col justify-between rounded-2xl bg-ink-950 p-4">
        <div>
          <p className="font-mono text-[0.54rem] tracking-[0.12em] text-ink-500 uppercase">
            Modeled exit
          </p>
          <p className="tabular mt-1 font-mono text-[1.1rem] font-bold text-white">2.4× EBITDA</p>
        </div>
        <p className="mt-3 text-[0.66rem] leading-snug text-ink-400">
          Normalised financials and QoE delivered in 4 weeks.
        </p>
      </div>
    </div>
  )
}

const VISUALS: Partial<Record<Service['glyph'], ReactNode>> = {
  shield: <AuditVisual />,
  stamp: <TaxVisual />,
  doc: <ReportingVisual />,
  bolt: <RevenueAssuranceVisual />,
  spark: <AdvisoryVisual />,
}

const SPAN: Record<Service['span'], string> = {
  tall: 'lg:col-span-3',
  normal: 'lg:col-span-3',
  wide: 'lg:col-span-6',
}

/* ── Section ──────────────────────────────────────────────────── */

export function ServicesBento() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-40 h-[26rem] w-[26rem] rounded-full bg-brand-300/14 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-[24rem] w-[24rem] rounded-full bg-info-400/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-[0.68rem] tracking-[0.2em] text-brand-600 uppercase">
              What we do
            </p>
            <h2 className="mt-3 text-[2rem] font-extrabold tracking-[-0.045em] text-ink-950 sm:text-[2.6rem]">
              Five practices. One{' '}
              <span className="text-gradient-brand">set of books you can defend.</span>
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-ink-600">
              We do not hand your files to a junior associate and hope. Every engagement is scoped by a partner,
              documented to standards, and signed off by a qualified chartered accountant.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90} className={SPAN[service.span]}>
              <article
                className="group relative h-full overflow-hidden rounded-3xl border border-ink-900/8 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-300/60 hover:shadow-[0_28px_60px_-30px_rgba(249,130,12,0.4)] sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex items-start gap-4">
                  <span className="relative grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-200/70 transition-all duration-500 group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-brand-400">
                    <Glyph name={service.glyph} className="size-5" />
                    <span className="absolute inset-0 rounded-xl bg-brand-gradient opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.6rem] tracking-[0.16em] text-brand-600 uppercase">
                      {service.eyebrow}
                    </p>
                    <h3 className="mt-1.5 text-[1.2rem] leading-snug font-bold tracking-[-0.03em] text-ink-950 sm:text-[1.32rem]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-[0.9rem] leading-relaxed text-ink-600">{service.body}</p>

                {service.bullets && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/8 bg-ink-50 px-3 py-1.5 text-[0.75rem] font-medium text-ink-700"
                      >
                        <span className="size-1.5 rounded-full bg-brand-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {VISUALS[service.glyph]}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
