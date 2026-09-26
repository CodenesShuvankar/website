import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'
import { Glyph } from './ui/Glyph'

const ASSURANCES = ['30-day pilot', 'SOC 2 Type II', 'No data lock-in', 'Dedicated solutions engineer']

export function CTASection() {
  return (
    <section id="demo" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
                  backgroundSize: '52px 52px',
                  maskImage: 'radial-gradient(ellipse 60% 70% at 50% 50%, black, transparent)',
                }}
              />
              <div className="absolute -top-24 left-1/2 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[120px]" />
              <div className="absolute -bottom-40 left-1/2 h-[22rem] w-[38rem] -translate-x-1/2 rounded-full bg-brand-300/15 blur-[120px]" />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-1.5 font-mono text-[0.65rem] tracking-[0.16em] text-brand-300 uppercase backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-brand-400 animate-blink" />
                Now onboarding Q3 cohorts
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl text-[2.1rem] leading-[1.06] font-extrabold tracking-[-0.048em] text-white sm:text-[2.9rem] lg:text-[3.3rem]">
                Your revenue is telling the truth.{' '}
                <span className="text-gradient-brand">Go find out how much.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-ink-400 sm:text-[1.08rem]">
                Book a 30-minute working session. We'll connect one of your live channels, run a real reconciliation, and
                show you exactly what it recovers.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Book a Demo
                  <svg viewBox="0 0 16 16" className="size-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Button>
                <Button variant="ghost-light" size="lg" className="w-full sm:w-auto">
                  <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6.5 4.2l5 3.8-5 3.8V4.2z" />
                    <rect x="2" y="2.5" width="12" height="11" rx="2.4" />
                  </svg>
                  Explore Architecture
                </Button>
              </div>

              <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
                {ASSURANCES.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-[0.8rem] text-ink-400">
                    <Glyph name="shield" className="size-3.5 text-signal-500" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
