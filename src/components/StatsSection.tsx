import { useCountUp } from '@/hooks/useCountUp'
import { useInView } from '@/hooks/useInView'
import { DIAGNOSTIC_STATS, STATS, TESTIMONIALS, type Stat } from '@/lib/data'
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

export function StatsSection() {
  return (
    <section id="results" className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
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
                Measured, not claimed
              </p>
              <h2 className="mt-3 text-[2rem] font-extrabold tracking-[-0.045em] text-white sm:text-[2.6rem]">
                The numbers your board and{' '}
                <span className="text-gradient-brand">your auditor ask about</span>
              </h2>
            </div>
            <p className="max-w-sm text-[0.92rem] leading-relaxed text-ink-400">
              Firm-wide statistics for the last three financial years. Individual engagement outcomes vary with scope
              and client systems.
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

        {/* Client outcomes */}
        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <Glyph
                  name="users"
                  className="absolute -right-4 -bottom-4 size-28 text-white/[0.04]"
                  strokeWidth={1}
                />
                <p className="tabular relative inline-flex w-fit items-center gap-2 rounded-full bg-brand-500/12 px-3 py-1.5 text-[0.72rem] font-semibold text-brand-300 ring-1 ring-brand-500/25">
                  {t.metric}
                </p>
                <blockquote className="relative mt-5 flex-1 text-[0.98rem] leading-relaxed font-medium text-ink-100">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="relative mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-[0.78rem] font-bold text-white">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[0.85rem] font-semibold text-white">{t.name}</span>
                    <span className="block truncate text-[0.75rem] text-ink-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Free diagnostic CTA */}
        <Reveal delay={100}>
          <div className="mt-4 grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl bg-brand-gradient p-8 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:p-12">
            <div>
              <h3 className="text-[1.6rem] leading-tight font-extrabold tracking-[-0.04em] text-white sm:text-[2rem]">
                Start with a free 45-minute diagnostic.
              </h3>
              <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-white/85">
                No charge, no obligation, no sales deck. A partner reviews your current books, tells you where the
                exposure sits, and gives you a fixed-fee proposal in writing within five working days.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="w-full bg-ink-950 text-white shadow-none hover:bg-ink-900 sm:w-auto">
                  Book a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full border-0 bg-white/20 text-white ring-0 backdrop-blur-sm hover:bg-white/30 sm:w-auto"
                >
                  See our fee structure
                </Button>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-3">
              {DIAGNOSTIC_STATS.map((item) => (
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
