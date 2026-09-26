import { INDUSTRIES, type Industry } from '@/lib/data'
import { Glyph } from './ui/Glyph'
import { Reveal } from './ui/Reveal'

function IndustryTile({ name, glyph }: Industry) {
  return (
    <div className="group flex shrink-0 items-center gap-3 px-7 py-4 sm:px-9">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-ink-900/8 bg-white text-ink-400 transition-all duration-500 group-hover:border-ink-900/14 group-hover:text-ink-700">
        <Glyph name={glyph} className="size-[1.15rem]" />
      </span>
      <span className="text-[0.95rem] font-semibold tracking-[-0.02em] whitespace-nowrap text-ink-400 transition-colors duration-500 group-hover:text-ink-800">
        {name}
      </span>
    </div>
  )
}

export function IndustriesMarquee() {
  const rowA = INDUSTRIES.slice(0, 8)
  const rowB = INDUSTRIES.slice(8)

  return (
    <section id="industries" className="relative border-y border-ink-900/8 bg-ink-50/70 py-14 sm:py-16">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="font-mono text-[0.68rem] tracking-[0.2em] text-ink-400 uppercase">
              Sector experience
            </p>
            <h2 className="max-w-2xl text-[1.35rem] font-bold tracking-[-0.03em] text-ink-900 sm:text-[1.6rem]">
              Industry-specific teams who already know your numbers
            </h2>
            <p className="max-w-xl text-[0.9rem] text-ink-500">
              A garment exporter's working capital is not a SaaS company's. Every engagement is led by professionals
              who have worked inside your sector.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-11 space-y-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="pause-on-hover flex w-max overflow-hidden">
          <div className="animate-marquee flex shrink-0">
            {[...rowA, ...rowA].map((item, i) => (
              <IndustryTile key={`a-${item.name}-${i}`} {...item} />
            ))}
          </div>
        </div>
        <div className="pause-on-hover flex w-max overflow-hidden">
          <div className="animate-marquee-reverse flex shrink-0">
            {[...rowB, ...rowB].map((item, i) => (
              <IndustryTile key={`b-${item.name}-${i}`} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-11 max-w-[84rem] px-5 sm:px-8">
        <Reveal delay={80}>
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink-900/8 bg-white px-6 py-5 sm:flex-row">
            <p className="text-center text-[0.9rem] text-ink-600 sm:text-left">
              Not seeing your sector?{' '}
              <span className="font-semibold text-ink-900">
                We take on niche and complex industries as standard
              </span>{' '}
              — and we will tell you honestly if we are not the right firm.
            </p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-[0.88rem] font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              Request an industry brief
              <svg viewBox="0 0 16 16" className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
