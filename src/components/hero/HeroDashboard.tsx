import { areaPath, smoothPath, type Point } from '@/lib/chart'
import { RECON_ROWS } from '@/lib/data'
import { Glyph } from '@/components/ui/Glyph'

const RECONCILED: Point[] = [
  [8, 158], [56, 146], [104, 151], [152, 124], [200, 131], [248, 101],
  [296, 108], [344, 78], [392, 85], [440, 57], [488, 63], [536, 33],
]

const LEAKAGE: Point[] = [
  [8, 184], [56, 181], [104, 177], [152, 173], [200, 171], [248, 165],
  [296, 161], [344, 157], [392, 152], [440, 148], [488, 144], [536, 139],
]

const SIDEBAR = [
  { label: 'Overview', glyph: 'grid' },
  { label: 'Reconciliation', glyph: 'db' },
  { label: 'Exceptions', glyph: 'spark' },
  { label: 'Recoveries', glyph: 'bolt' },
  { label: 'Ledger', glyph: 'chart' },
  { label: 'Integrations', glyph: 'link' },
  { label: 'Developers', glyph: 'terminal' },
] as const

const KPIS = [
  { label: 'Reconciled Volume', value: '$4.21B', delta: '+12.4%', tone: 'brand' as const },
  { label: 'Revenue Recovered', value: '$3.84M', delta: '+18.9%', tone: 'signal' as const },
  { label: 'Open Exceptions', value: '212', delta: '−64.1%', tone: 'ink' as const },
]

const EXCEPTIONS = [
  { label: 'Commission under-settlement', source: 'Amazon US', score: 96, tone: 'signal' },
  { label: 'Duplicate invoice, net variance', source: 'SAP FI', score: 88, tone: 'brand' },
  { label: 'Unclaimed chargeback window', source: 'Adyen', score: 74, tone: 'alert' },
] as const

function toneRing(tone: 'signal' | 'brand' | 'alert') {
  if (tone === 'signal') return 'stroke-signal-500'
  if (tone === 'brand') return 'stroke-brand-500'
  return 'stroke-alert-500'
}

function toneText(tone: 'signal' | 'brand' | 'alert') {
  if (tone === 'signal') return 'text-signal-400'
  if (tone === 'brand') return 'text-brand-300'
  return 'text-alert-400'
}

export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[70rem] [perspective:1800px]">
      {/* ── Isometric floor plane ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[6%] bottom-[-16%] h-[46%] origin-bottom [transform:rotateX(74deg)] [transform-style:preserve-3d]"
      >
        <div
          className="size-full [mask-image:radial-gradient(ellipse_at_center,black_5%,transparent_72%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(249,130,12,0.20) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,130,12,0.20) 1px, transparent 1px)',
            backgroundSize: '58px 58px',
          }}
        />
      </div>

      {/* Ambient glow pools behind the panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 animate-drift rounded-full bg-brand-500/18 blur-[120px]"
      />

      <div className="relative [transform-style:preserve-3d] [transform:rotateX(6deg)_rotateY(-13deg)] sm:[transform:rotateX(7deg)_rotateY(-11deg)]">
        {/* ── Dashboard panel ─────────────────────────────────── */}
        <div className="overflow-hidden rounded-[1.4rem] border border-white/12 bg-ink-950 shadow-[0_70px_140px_-50px_rgba(8,12,21,0.9),0_0_0_1px_rgba(255,255,255,0.05)]">
          {/* Title bar */}
          <div className="flex items-center gap-3 border-b border-white/8 bg-white/[0.03] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-alert-500/70" />
              <span className="size-2.5 rounded-full bg-brand-400/70" />
              <span className="size-2.5 rounded-full bg-signal-500/70" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 font-mono text-[0.62rem] text-ink-400">
              <span className="size-1.5 rounded-full bg-signal-400 animate-blink" />
              app.hmrecon.com/ledger
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="rounded-full bg-signal-500/12 px-2.5 py-1 text-[0.6rem] font-semibold tracking-wide text-signal-400 ring-1 ring-signal-500/25">
                LIVE SYNC
              </span>
              <span className="size-6 rounded-full bg-brand-gradient" />
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <aside className="hidden w-[11.5rem] shrink-0 flex-col border-r border-white/8 bg-white/[0.02] p-3 lg:flex">
              <p className="px-2.5 pt-1 pb-3 text-[0.58rem] font-semibold tracking-[0.18em] text-ink-500 uppercase">
                Workspace
              </p>
              <ul className="flex flex-col gap-0.5">
                {SIDEBAR.map((item, i) => (
                  <li key={item.label}>
                    <div
                      className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.73rem] font-medium transition-colors ${
                        i === 1
                          ? 'bg-brand-500/14 text-white ring-1 ring-brand-500/25'
                          : 'text-ink-400 hover:bg-white/5 hover:text-ink-200'
                      }`}
                    >
                      <Glyph
                        name={item.glyph}
                        className={`size-3.5 ${i === 1 ? 'text-brand-300' : 'text-ink-500'}`}
                      />
                      {item.label}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <div className="flex items-center gap-2">
                  <Glyph name="shield" className="size-3.5 text-signal-400" />
                  <p className="text-[0.66rem] font-semibold text-ink-200">Ledger sealed</p>
                </div>
                <p className="mt-1.5 font-mono text-[0.58rem] text-ink-500">sha256:9f2c…a41d</p>
              </div>
            </aside>

            {/* Main */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 px-4 py-3.5 sm:px-5">
                <div>
                  <h3 className="text-[0.86rem] font-semibold tracking-[-0.02em] text-white">
                    Reconciliation Overview
                  </h3>
                  <p className="font-mono text-[0.6rem] text-ink-500">FY26 · Aug 2026 · All entities</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg bg-white/5 p-1">
                  {['7D', '30D', 'QTD', 'FY'].map((t) => (
                    <span
                      key={t}
                      className={`rounded-md px-2.5 py-1 text-[0.6rem] font-semibold ${
                        t === 'QTD' ? 'bg-brand-500 text-white' : 'text-ink-500'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-1 gap-px bg-white/8 sm:grid-cols-3">
                {KPIS.map((kpi) => (
                  <div key={kpi.label} className="bg-ink-950 px-4 py-3.5 sm:px-5">
                    <p className="truncate text-[0.6rem] font-medium tracking-[0.1em] text-ink-500 uppercase">
                      {kpi.label}
                    </p>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span
                        className={`tabular text-[1.15rem] font-bold tracking-[-0.03em] ${
                          kpi.tone === 'brand' ? 'text-brand-300' : 'text-white'
                        }`}
                      >
                        {kpi.value}
                      </span>
                      <span
                        className={`tabular text-[0.62rem] font-semibold ${
                          kpi.tone === 'signal' ? 'text-signal-400' : kpi.delta.startsWith('−') ? 'text-signal-400' : 'text-ink-500'
                        }`}
                      >
                        {kpi.delta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-px bg-white/8 lg:grid-cols-[1.55fr_1fr]">
                {/* Chart */}
                <div className="bg-ink-950 p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[0.68rem] font-semibold text-ink-200">Reconciled vs. leakage</p>
                    <div className="flex items-center gap-3 font-mono text-[0.55rem] text-ink-500">
                      <span className="flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-brand-400" />
                        Reconciled
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-alert-500/70" />
                        Leakage
                      </span>
                    </div>
                  </div>

                  <svg viewBox="0 0 544 200" className="h-[7.5rem] w-full" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="reconFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f9820c" stopOpacity="0.34" />
                        <stop offset="100%" stopColor="#f9820c" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="leakStroke" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.25" />
                      </linearGradient>
                    </defs>

                    {[40, 80, 120, 160].map((y) => (
                      <line key={y} x1="0" y1={y} x2="544" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    ))}

                    <path d={areaPath(RECONCILED, 196)} fill="url(#reconFill)" />
                    <path d={smoothPath(RECONCILED)} fill="none" stroke="#fb9f3c" strokeWidth="2.2" strokeLinecap="round" />
                    <path d={smoothPath(LEAKAGE)} fill="none" stroke="url(#leakStroke)" strokeWidth="1.6" strokeDasharray="4 4" strokeLinecap="round" />

                    <circle cx="536" cy="33" r="4" fill="#fb9f3c" />
                    <circle cx="536" cy="33" r="8" fill="#fb9f3c" opacity="0.22" className="animate-pulse-ring origin-center" />
                  </svg>

                  <div className="mt-1 flex justify-between font-mono text-[0.5rem] text-ink-600">
                    {['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'].map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>

                {/* AI insight rail */}
                <div className="bg-ink-950 p-4 sm:p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="grid size-5 place-items-center rounded-md bg-brand-500/15 ring-1 ring-brand-500/30">
                      <Glyph name="spark" className="size-3 text-brand-300" />
                    </span>
                    <p className="text-[0.68rem] font-semibold text-ink-200">AI Exception Queue</p>
                    <span className="ml-auto font-mono text-[0.55rem] text-ink-500">3 open</span>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {EXCEPTIONS.map((ex) => (
                      <li key={ex.label} className="rounded-lg border border-white/8 bg-white/[0.03] p-2.5">
                        <p className="truncate text-[0.65rem] font-medium text-ink-200">{ex.label}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/8">
                            <div
                              className={`h-full rounded-full ${toneRing(ex.tone)} bg-current`}
                              style={{ width: `${ex.score}%` }}
                            />
                          </div>
                          <span className={`tabular font-mono text-[0.55rem] font-semibold ${toneText(ex.tone)}`}>
                            {ex.score}%
                          </span>
                        </div>
                        <p className="mt-1.5 font-mono text-[0.55rem] text-ink-600">{ex.source}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex items-center gap-2 rounded-lg bg-brand-500/10 px-2.5 py-2 ring-1 ring-brand-500/20">
                    <Glyph name="bolt" className="size-3 shrink-0 text-brand-300" />
                    <p className="text-[0.6rem] leading-tight text-brand-100">
                      Auto-filed 47 claims · <span className="font-semibold text-brand-300">$312K</span> recovered
                    </p>
                  </div>
                </div>
              </div>

              {/* Ledger table */}
              <div className="border-t border-white/8">
                <div className="flex items-center justify-between px-4 py-3 sm:px-5">
                  <p className="text-[0.68rem] font-semibold text-ink-200">Live ledger stream</p>
                  <span className="font-mono text-[0.55rem] text-ink-600">virtualized · 40M rows</span>
                </div>
                <div className="overflow-hidden">
                  <div className="grid grid-cols-[4.5rem_1fr_5.5rem_5.5rem_4rem] gap-2 border-y border-white/8 bg-white/[0.03] px-4 py-2 font-mono text-[0.53rem] tracking-[0.1em] text-ink-600 uppercase sm:px-5">
                    <span>Ref</span>
                    <span>Channel</span>
                    <span className="text-right">Gross</span>
                    <span className="text-right">Net</span>
                    <span className="text-right">Conf.</span>
                  </div>
                  {RECON_ROWS.map((row) => (
                    <div
                      key={row.id}
                      className="grid grid-cols-[4.5rem_1fr_5.5rem_5.5rem_4rem] items-center gap-2 border-b border-white/5 px-4 py-2.5 text-[0.66rem] transition-colors last:border-0 hover:bg-white/[0.03] sm:px-5"
                    >
                      <span className="truncate font-mono text-ink-500">{row.id}</span>
                      <span className="flex min-w-0 items-center gap-2">
                        <span
                          className={`size-1.5 shrink-0 rounded-full ${
                            row.status === 'Matched'
                              ? 'bg-signal-500'
                              : row.status === 'Exception'
                                ? 'bg-alert-500'
                                : 'bg-brand-400'
                          }`}
                        />
                        <span className="truncate text-ink-200">{row.channel}</span>
                      </span>
                      <span className="tabular text-right text-ink-400">{row.gross}</span>
                      <span className="tabular text-right font-medium text-ink-100">{row.net}</span>
                      <span
                        className={`tabular text-right font-mono ${
                          row.conf > 99
                            ? 'text-signal-400'
                            : row.conf > 95
                              ? 'text-brand-300'
                              : 'text-alert-400'
                        }`}
                      >
                        {row.conf.toFixed(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Floating depth layers ──────────────────────────── */}
        <div
          className="absolute -top-7 -right-3 hidden animate-float-slow rounded-xl border border-white/12 bg-ink-900/92 px-3.5 py-2.5 shadow-[0_20px_50px_-22px_rgba(0,0,0,0.95)] backdrop-blur-md sm:block lg:-right-8 [transform:translateZ(70px)]"
        >
          <p className="font-mono text-[0.53rem] tracking-[0.12em] text-ink-500 uppercase">Match rate</p>
          <p className="tabular mt-0.5 text-[1.05rem] font-bold text-white">
            99.2<span className="text-brand-300">%</span>
          </p>
        </div>

        <div
          className="absolute -bottom-6 -left-3 hidden animate-float-slow rounded-xl border border-white/12 bg-ink-900/92 px-3.5 py-2.5 shadow-[0_20px_50px_-22px_rgba(0,0,0,0.95)] backdrop-blur-md sm:block lg:-left-10 [animation-delay:-3.5s] [transform:translateZ(90px)]"
        >
          <div className="flex items-center gap-2">
            <span className="relative grid size-5 place-items-center">
              <span className="absolute size-5 rounded-full bg-signal-500/25 animate-pulse-ring" />
              <span className="size-1.5 rounded-full bg-signal-400" />
            </span>
            <p className="font-mono text-[0.55rem] text-ink-300">1,284,092 lines reconciled</p>
          </div>
        </div>

        <div
          className="absolute top-1/3 -left-6 hidden animate-float-slow rounded-lg border border-brand-500/25 bg-ink-900/92 px-3 py-2 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md xl:block [animation-delay:-1.8s] [transform:translateZ(120px)]"
        >
          <p className="text-[0.6rem] font-semibold text-ink-200">Short payment detected</p>
          <p className="tabular mt-0.5 font-mono text-[0.6rem] text-alert-400">−$4,212.59 · Amazon US</p>
        </div>
      </div>

      {/* Base plinth for a true isometric grounding */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[10%] -bottom-4 h-px bg-gradient-to-r from-transparent via-brand-500/45 to-transparent blur-[1px]"
      />
    </div>
  )
}
