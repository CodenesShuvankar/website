import { useCountUp } from '@/hooks/useCountUp'
import { useInView } from '@/hooks/useInView'
import { STATS, type Stat } from '@/lib/data'
import { Glyph } from './ui/Glyph'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'

const BAR_WIDTH: Record<number, string> = {
  0: 'w-0',
  1: 'w-[28%]',
  2: 'w-[52%]',
  3: 'w-full',
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4)
  const animated = useCountUp({
    to: stat.value,
    decimals: stat.decimals,
    start: inView,
    duration: 2000 + index * 160,
  })

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:border-brand-500/30 hover:bg-white/[0.06]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-10 size-40 rounded-full bg-brand-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-60"
      />

      <p className="tabular relative text-[2.9rem] leading-none font-extrabold tracking-[-0.05em] text-gradient-light sm:text-[3.4rem]">
        {stat.prefix}
        {animated}
        <span className="text-gradient-brand">{stat.suffix}</span>
      </p>

      <p className="relative mt-3 text-[0.95rem] font-semibold text-white">{stat.label}</p>
      <p className="relative mt-1.5 text-[0.82rem] leading-relaxed text-ink-400">{stat.detail}</p>

      <div className="relative mt-5 h-0.5 overflow-hidden rounded-full bg-white/8">
        <div
          className={`h-full rounded-full bg-brand-gradient transition-[width] duration-[1600ms] ease-out ${BAR_WIDTH[index]}`}
          style={{ transitionDelay: `${200 + index * 120}ms` }}
        />
      </div>
    </div>
  )
}

const PROOF = [
  {
    quote:
      'We closed August in four days instead of eleven. The first month, HMRECON found $1.2M in commission leakage we had been writing off for two years.',
    name: 'Priya Raghunathan',
    role: 'VP Finance, D2C Group · 4 storefronts, 9 marketplaces',
    metric: '$1.2M recovered in month one',
  },
  {
    quote:
      'Our auditors asked for the payout-to-invoice trail for 40,000 lines. It was a single query. That used to be a three-week project every single quarter.',
    name: 'Daniel Okonkwo',
    role: 'Controller, Multi-entity Retail · SAP + Tally',
    metric: 'Audit prep: 3 weeks → 1 day',
  },
]

export function StatsSection() {
  return (
    <section id="roi" className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 62% 58% at 50% 40%, black, transparent)',
          }}
        />
        <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] animate-drift rounded-full bg-brand-500/18 blur-[140px]" />
        <div className="right-0 -bottom-32 h-[24rem] w-[24rem] rounded-full bg-info-500/12 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[0.68rem] tracking-[0.2em] text-brand-300 uppercase">
                Measurable outcomes
              </p>
              <h2 className="mt-3 text-[2rem] font-extrabold tracking-[-0.045em] text-white sm:text-[2.6rem]">
                The numbers your board{' '}
                <span className="text-gradient-brand">actually asks about</span>
              </h2>
            </div>
            <p className="max-w-sm text-[0.92rem] leading-relaxed text-ink-400">
              Aggregated, anonymized results across 400+ finance teams running HMRECON in production. Median values,
              first 12 months.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <StatCard stat={stat} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Proof points */}
        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {PROOF.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <figure className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <Glyph
                  name="chart"
                  className="absolute -right-4 -bottom-4 size-28 text-white/[0.04]"
                  strokeWidth={1}
                />
                <p className="tabular inline-flex items-center gap-2 rounded-full bg-brand-500/12 px-3 py-1.5 text-[0.72rem] font-semibold text-brand-300 ring-1 ring-brand-500/25">
                  {p.metric}
                </p>
                <blockquote className="relative mt-5 text-[1.02rem] leading-relaxed font-medium text-ink-100">
                  &ldquo;{p.quote}&rdquo;
                </blockquote>
                <figcaption className="relative mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-[0.78rem] font-bold text-white">
                    {p.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[0.85rem] font-semibold text-white">{p.name}</span>
                    <span className="block truncate text-[0.75rem] text-ink-500">{p.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* ROI calculator teaser */}
        <Reveal delay={100}>
          <div className="mt-4 grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl bg-brand-gradient p-8 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:p-12">
            <div>
              <h3 className="text-[1.6rem] leading-tight font-extrabold tracking-[-0.04em] text-white sm:text-[2rem]">
                Calculate your recoverable revenue in under 60 seconds.
              </h3>
              <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-white/85">
                Input your monthly payout volume and average channel count. Our ROI model projects recoverable leakage,
                hours saved, and payback period — based on benchmarks from 400+ deployments.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="w-full bg-ink-950 text-white shadow-none hover:bg-ink-900 sm:w-auto"
                >
                  Open the ROI calculator
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full border-0 bg-white/20 text-white ring-0 backdrop-blur-sm hover:bg-white/30 sm:w-auto"
                >
                  Talk to sales
                </Button>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-3">
              {[
                { v: '$0', l: 'Setup cost' },
                { v: '< 14d', l: 'Time to value' },
                { v: '3.4×', l: 'Typical ROI' },
                { v: '0', l: 'Spreadsheets migrated' },
              ].map((item) => (
                <div
                  key={item.l}
                  className="rounded-2xl border border-white/20 bg-white/12 p-4 backdrop-blur-sm"
                >
                  <dd className="tabular text-[1.5rem] leading-none font-extrabold tracking-[-0.04em] text-white">
                    {item.v}
                  </dd>
                  <dt className="mt-1.5 text-[0.75rem] text-white/80">{item.l}</dt>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
