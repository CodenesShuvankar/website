import type { ReactNode } from 'react'
import { FEATURES, type Feature } from '@/lib/data'
import { Glyph } from './ui/Glyph'
import { Reveal } from './ui/Reveal'

/* ── Per-card visuals ─────────────────────────────────────────── */

function IntelligenceVisual() {
  const rows = [
    { label: 'Invoice + remittance + PO', conf: 99, tone: 'bg-signal-500' },
    { label: 'Fuzzy amount + date match', conf: 94, tone: 'bg-brand-500' },
    { label: 'FX + tax policy variance', conf: 87, tone: 'bg-brand-500' },
    { label: 'Unmapped GL account', conf: 62, tone: 'bg-alert-500' },
  ]

  return (
    <div className="mt-6 rounded-2xl border border-ink-900/8 bg-ink-50/80 p-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="grid size-5 place-items-center rounded-md bg-brand-500/12 ring-1 ring-brand-500/25">
          <Glyph name="spark" className="size-3 text-brand-600" />
        </span>
        <p className="font-mono text-[0.58rem] tracking-[0.14em] text-ink-400 uppercase">Multimodal matcher</p>
        <span className="ml-auto rounded-full bg-signal-500/12 px-2 py-0.5 font-mono text-[0.52rem] font-semibold text-signal-600">
          1.28M infer/sec
        </span>
      </div>

      <ul className="space-y-2.5">
        {rows.map((row) => (
          <li key={row.label} className="flex items-center gap-3">
            <span className="w-[11.5rem] shrink-0 truncate font-mono text-[0.62rem] text-ink-600">{row.label}</span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-900/7">
              <span
                className={`block h-full rounded-full ${row.tone} animate-shimmer`}
                style={{
                  width: `${row.conf}%`,
                  backgroundImage:
                    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)',
                  backgroundSize: '200% 100%',
                }}
              />
            </span>
            <span className="tabular w-9 shrink-0 text-right font-mono text-[0.6rem] font-semibold text-ink-900">
              {row.conf}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function LedgerVisual() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-ink-900/8 bg-ink-50/80">
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 border-b border-ink-900/7 bg-white/60 px-4 py-2 font-mono text-[0.52rem] tracking-[0.12em] text-ink-400 uppercase">
        <span>Source</span>
        <span className="text-right">Records</span>
        <span className="text-right">Status</span>
      </div>
      {[
        { src: 'Shopify', n: '4.2M', ok: true },
        { src: 'Amazon', n: '9.8M', ok: true },
        { src: 'SAP FI', n: '12.1M', ok: true },
        { src: 'Tally', n: '6.4M', ok: false },
        { src: 'Adyen', n: '7.6M', ok: true },
      ].map((row) => (
        <div
          key={row.src}
          className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 border-b border-ink-900/5 px-4 py-2.5 text-[0.7rem] last:border-0"
        >
          <span className="font-medium text-ink-800">{row.src}</span>
          <span className="tabular text-right font-mono text-[0.66rem] text-ink-500">{row.n}</span>
          <span
            className={`ml-2 rounded-full px-2 py-0.5 text-right font-mono text-[0.5rem] font-semibold ${
              row.ok ? 'bg-signal-500/12 text-signal-600' : 'bg-brand-500/12 text-brand-700'
            }`}
          >
            {row.ok ? 'SYNCHED' : 'REVIEW'}
          </span>
        </div>
      ))}
      <div className="flex items-center justify-between bg-ink-950 px-4 py-2.5">
        <span className="font-mono text-[0.56rem] text-ink-400">Unified canonical ledger</span>
        <span className="tabular font-mono text-[0.6rem] font-bold text-brand-300">40,102,884 entries</span>
      </div>
    </div>
  )
}

function RecoveryVisual() {
  return (
    <div className="mt-6 space-y-2.5">
      {[
        { label: 'Auto-filed chargeback claims', value: '1,284', pct: 100 },
        { label: 'Commission clawbacks recovered', value: '$2.14M', pct: 78 },
        { label: 'Duplicate payouts reversed', value: '411', pct: 46 },
      ].map((row) => (
        <div key={row.label} className="rounded-xl border border-ink-900/8 bg-ink-50/80 px-3.5 py-2.5">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[0.74rem] font-medium text-ink-700">{row.label}</span>
            <span className="tabular shrink-0 font-mono text-[0.78rem] font-bold text-ink-950">{row.value}</span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-ink-900/7">
            <div className="h-full rounded-full bg-brand-gradient" style={{ width: `${row.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function AssuranceVisual() {
  return (
    <div className="mt-6 rounded-2xl border border-ink-900/8 bg-ink-50/80 p-3.5 font-mono text-[0.6rem]">
      {[
        { t: '08:02:14', e: 'source.sync', s: 'amazon · 412 orders' },
        { t: '08:02:19', e: 'match.batch', s: '409 auto · 3 flagged' },
        { t: '08:02:22', e: 'ledger.seal', s: 'sha256:9f2c…a41d' },
        { t: '08:02:31', e: 'claim.file', s: 'window 14d · $4,212' },
      ].map((row) => (
        <div key={row.t} className="flex items-center gap-2.5 border-b border-ink-900/5 py-2 last:border-0">
          <span className="text-ink-400">{row.t}</span>
          <span className="font-semibold text-brand-700">{row.e}</span>
          <span className="ml-auto truncate text-ink-500">{row.s}</span>
        </div>
      ))}
    </div>
  )
}

function IngestionVisual() {
  const steps = ['Webhook', 'Normalize', 'Enrich', 'Match', 'Settle']
  return (
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span
              className={`rounded-lg px-3 py-1.5 font-mono text-[0.62rem] font-semibold ${
                i === steps.length - 1
                  ? 'bg-brand-gradient text-white'
                  : 'border border-ink-900/8 bg-white text-ink-600'
              }`}
            >
              {step}
            </span>
            {i < steps.length - 1 && <span className="text-ink-300">→</span>}
          </div>
        ))}
      </div>
      <p className="font-mono text-[0.58rem] text-ink-400 sm:ml-auto sm:text-right">
        p99 latency <span className="font-bold text-ink-800">1.2s</span> · 40M rows/day
      </p>
    </div>
  )
}

const VISUALS: Partial<Record<Feature['glyph'], ReactNode>> = {
  spark: <IntelligenceVisual />,
  db: <LedgerVisual />,
  bolt: <RecoveryVisual />,
  shield: <AssuranceVisual />,
  link: <IngestionVisual />,
}

const SPAN: Record<Feature['span'], string> = {
  tall: 'lg:col-span-3',
  normal: 'lg:col-span-3',
  wide: 'lg:col-span-6',
}

/* ── Section ──────────────────────────────────────────────────── */

export function BentoFeatures() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-40 h-[26rem] w-[26rem] rounded-full bg-brand-300/14 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-[24rem] w-[24rem] rounded-full bg-info-400/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-[0.68rem] tracking-[0.2em] text-brand-600 uppercase">
              Core capabilities
            </p>
            <h2 className="mt-3 text-[2rem] font-extrabold tracking-[-0.045em] text-ink-950 sm:text-[2.6rem]">
              An intelligence layer built for{' '}
              <span className="text-gradient-brand">high-stakes financial data</span>
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-ink-600">
              Every module is designed around one question: can we trust this number without asking anyone? HMRECON
              answers it continuously, across every entity, currency, and jurisdiction you operate in.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-6">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 90} className={SPAN[feature.span]}>
              <article
                className="group relative h-full overflow-hidden rounded-3xl border border-ink-900/8 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-300/60 hover:shadow-[0_28px_60px_-30px_rgba(249,130,12,0.4)] sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex items-start gap-4">
                  <span className="relative grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-200/70 transition-all duration-500 group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-brand-400">
                    <Glyph name={feature.glyph} className="size-5" />
                    <span className="absolute inset-0 rounded-xl bg-brand-gradient opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.6rem] tracking-[0.16em] text-brand-600 uppercase">
                      {feature.eyebrow}
                    </p>
                    <h3 className="mt-1.5 text-[1.2rem] leading-snug font-bold tracking-[-0.03em] text-ink-950 sm:text-[1.32rem]">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-[0.9rem] leading-relaxed text-ink-600">{feature.body}</p>

                {feature.bullets && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {feature.bullets.map((b) => (
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

                {VISUALS[feature.glyph]}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
