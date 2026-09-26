import { INSIGHTS, OFFICES } from '@/lib/data'
import { Glyph } from './ui/Glyph'
import { Reveal } from './ui/Reveal'

const PARTNERS = [
  { name: 'Rajiv Menon', cred: 'FCA · 22 yrs', focus: 'Audit & assurance' },
  { name: 'Shruti Kulkarni', cred: 'CA · 16 yrs', focus: 'Direct & indirect tax' },
  { name: 'Arjun Deshpande', cred: 'ACA · 14 yrs', focus: 'Revenue assurance' },
]

const CREDENTIALS = [
  'Firm Registration No. 138472/W/M',
  'Peer review by the ICAI Council',
  'ICAI registered audit firm',
  'NASBA member firm',
]

export function InsightsSection() {
  return (
    <section id="insights" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-0 h-[22rem] w-[22rem] rounded-full bg-brand-300/12 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[0.68rem] tracking-[0.2em] text-brand-600 uppercase">
                Insights
              </p>
              <h2 className="mt-3 text-[2rem] font-extrabold tracking-[-0.045em] text-ink-950 sm:text-[2.4rem]">
                Written by the people who do the work
              </h2>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-[0.88rem] font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              Subscribe to the quarterly briefing
              <svg viewBox="0 0 16 16" className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 80}>
              <a
                href="#insights"
                className="group flex h-full flex-col rounded-2xl border border-ink-900/8 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-300/60 hover:shadow-[0_22px_48px_-28px_rgba(249,130,12,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 font-mono text-[0.58rem] font-semibold tracking-[0.1em] text-brand-700 uppercase ring-1 ring-brand-200/70">
                    {post.tag}
                  </span>
                  <span className="font-mono text-[0.58rem] text-ink-400">{post.date}</span>
                </div>
                <h3 className="mt-4 flex-1 text-[1rem] leading-snug font-bold tracking-[-0.025em] text-ink-950">
                  {post.title}
                </h3>
                <span className="mt-5 flex items-center gap-1.5 font-mono text-[0.66rem] text-ink-400">
                  {post.read}
                  <svg viewBox="0 0 12 12" className="size-2.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 2.5L8.5 6 4 9.5" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* The firm */}
        <div id="about" className="mt-20 scroll-mt-24">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-ink-900/8 bg-ink-950">
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
                <div className="p-8 sm:p-10">
                  <p className="font-mono text-[0.68rem] tracking-[0.2em] text-brand-300 uppercase">
                    The firm
                  </p>
                  <h2 className="mt-3 text-[1.6rem] font-extrabold tracking-[-0.04em] text-white sm:text-[1.95rem]">
                    Chartered accountants who have run finance teams, not just audited them.
                  </h2>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-400">
                    HMRECON was founded in 2011 by partners who had spent years as CFO and controller before moving to
                    practice. That is why we are comfortable operating your close, not only reviewing it — and why our
                    reports tend to be shorter than the queries.
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {CREDENTIALS.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-[0.85rem] text-ink-300">
                        <Glyph name="shield" className="mt-0.5 size-3.5 shrink-0 text-brand-400" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/8 p-8 sm:p-10 lg:border-t-0 lg:border-l">
                  <p className="font-mono text-[0.6rem] tracking-[0.18em] text-ink-500 uppercase">
                    Partners
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {PARTNERS.map((p) => (
                      <li
                        key={p.name}
                        className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-[0.72rem] font-bold text-white">
                          {p.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-[0.85rem] font-semibold text-white">{p.name}</span>
                          <span className="block truncate font-mono text-[0.68rem] text-ink-500">
                            {p.cred} · {p.focus}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 font-mono text-[0.6rem] tracking-[0.18em] text-ink-500 uppercase">
                    Offices
                  </p>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {OFFICES.map((o) => (
                      <li
                        key={o.city}
                        className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2.5"
                      >
                        <span className="block text-[0.78rem] font-semibold text-ink-100">{o.city}</span>
                        <span className="block truncate text-[0.66rem] text-ink-500">{o.line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
