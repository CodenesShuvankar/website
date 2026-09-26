import { useState } from 'react'
import { API_SNIPPET, SCHEMA_SNIPPET, type CodeLine } from '@/lib/data'
import { Glyph } from './ui/Glyph'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'

const LAYERS = [
  {
    name: 'Connectors',
    detail: 'Managed OAuth, webhooks, CDC & nightly backfill',
    glyph: 'link' as const,
  },
  {
    name: 'Normalization',
    detail: 'Canonical financial schema, FX & tax handling',
    glyph: 'grid' as const,
  },
  {
    name: 'Reconciliation Engine',
    detail: 'Deterministic + probabilistic matching, 1.28M lines/sec',
    glyph: 'db' as const,
  },
  {
    name: 'Intelligence Layer',
    detail: 'Multimodal inference, root-cause clustering, auto-claims',
    glyph: 'spark' as const,
  },
  {
    name: 'Ledger & Audit Vault',
    detail: 'Immutable, versioned, append-only storage',
    glyph: 'shield' as const,
  },
]

const STACK = [
  { label: 'REST / GraphQL', value: 'Typed, versioned surface' },
  { label: 'React + TypeScript', value: 'Modular component system' },
  { label: 'PostgreSQL', value: 'Ledger system of record' },
  { label: 'Prisma ORM', value: 'Typed, migration-safe queries' },
  { label: 'Row-Level Security', value: 'Tenant isolation in-engine' },
  { label: 'Supabase-compatible', value: 'Auth, RLS, session model' },
  { label: 'OpenTelemetry', value: 'Traces, metrics, audit logs' },
  { label: 'Row-virtualized UI', value: '40M rows, 60fps tables' },
]

const PRINCIPLES = [
  {
    title: 'Typed end to end',
    body: 'Generated SDKs, discriminated unions for every webhook payload, and exhaustive compile-time checks on ledger mutations.',
    glyph: 'terminal' as const,
  },
  {
    title: 'Secure by construction',
    body: 'OIDC/SAML SSO, SCIM provisioning, hardware-key support, and row-level security policies enforced at the database layer.',
    glyph: 'shield' as const,
  },
  {
    title: 'Isolated inference',
    body: 'Model backends run behind a versioned inference gateway, so ML changes never destabilize the reconciliation contract.',
    glyph: 'spark' as const,
  },
]

function CodeBlock({ lines, filename }: { lines: CodeLine[]; filename: string }) {
  const highlighted = filename.includes('prisma')

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-alert-500/60" />
        <span className="size-2.5 rounded-full bg-brand-400/60" />
        <span className="size-2.5 rounded-full bg-signal-500/60" />
        <span className="ml-2 font-mono text-[0.62rem] text-ink-400">{filename}</span>
        <span className="ml-auto font-mono text-[0.55rem] text-ink-600">UTF-8</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[0.68rem] leading-[1.75]">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 w-5 shrink-0 text-right text-ink-700 select-none">{i + 1}</span>
              <span className={line.tokens.trimStart().startsWith('//') ? 'text-ink-500 italic' : 'text-ink-200'}>
                <span className="text-ink-700 select-none">{'  '.repeat(line.indent)}</span>
                {highlighted ? <SchemaLine text={line.tokens} /> : <ApiLine text={line.tokens} />}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

const KEYWORDS = new Set(['const', 'await', 'new', 'true', 'false', 'null'])

function tokenize(text: string, language: 'ts' | 'prisma') {
  const parts = text.split(/('[^']*'|"[^"]*"|\b\d+(?:\.\d+)?\b|\w+|\s+|.)/g).filter(Boolean)
  return parts.map((part) => {
    if (/^'/.test(part) || /^"/.test(part)) return { t: part, c: 'text-signal-400' }
    if (/^\d/.test(part)) return { t: part, c: 'text-brand-300' }
    if (KEYWORDS.has(part)) return { t: part, c: 'text-alert-400' }
    if (language === 'ts') {
      if (/^\s+$/.test(part)) return { t: part, c: '' }
      return { t: part, c: 'text-info-400' }
    }
    if (language === 'prisma') {
      if (/^@/.test(part)) return { t: part, c: 'text-alert-400' }
      return { t: part, c: 'text-ink-300' }
    }
    return { t: part, c: 'text-ink-200' }
  })
}

function ApiLine({ text }: { text: string }) {
  return (
    <>
      {tokenize(text, 'ts').map((tok, i) => (
        <span key={i} className={tok.c}>
          {tok.t}
        </span>
      ))}
    </>
  )
}

function SchemaLine({ text }: { text: string }) {
  return (
    <>
      {tokenize(text, 'prisma').map((tok, i) => (
        <span key={i} className={tok.c}>
          {tok.t}
        </span>
      ))}
    </>
  )
}

function ArchitectureDiagram() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-950 p-5 sm:p-7">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[0.6rem] tracking-[0.18em] text-ink-500 uppercase">
            System architecture
          </p>
          <span className="flex items-center gap-1.5 rounded-full bg-signal-500/12 px-2.5 py-1 font-mono text-[0.55rem] font-semibold text-signal-400 ring-1 ring-signal-500/25">
            <span className="size-1.5 rounded-full bg-signal-400 animate-blink" />
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-2.5">
          {LAYERS.map((layer, i) => (
            <div key={layer.name} className="flex items-stretch gap-3">
              <div className="flex w-8 shrink-0 flex-col items-center">
                <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-brand-300">
                  <Glyph name={layer.glyph} className="size-4" />
                </span>
                {i < LAYERS.length - 1 && <span className="mt-1 w-px flex-1 bg-gradient-to-b from-brand-500/40 to-transparent" />}
              </div>

              <div className="group mb-1 flex flex-1 flex-col justify-center rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 transition-all duration-400 hover:border-brand-500/35 hover:bg-white/[0.05] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <p className="text-[0.86rem] font-semibold tracking-[-0.02em] text-white">{layer.name}</p>
                  <p className="mt-0.5 text-[0.75rem] text-ink-400">{layer.detail}</p>
                </div>
                <span className="mt-2 shrink-0 self-start rounded-md bg-brand-500/12 px-2 py-1 font-mono text-[0.53rem] font-semibold text-brand-300 sm:mt-0 sm:self-auto">
                  L{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2.5 border-t border-white/8 pt-5 sm:grid-cols-4">
          {[
            { v: '99.99%', l: 'Uptime SLA' },
            { v: '40M', l: 'Rows / day' },
            { v: '1.2s', l: 'p99 latency' },
            { v: '0', l: 'Downtime in FY26' },
          ].map((m) => (
            <div key={m.l}>
              <p className="tabular text-[1.15rem] font-bold text-white">{m.v}</p>
              <p className="mt-0.5 font-mono text-[0.56rem] tracking-wide text-ink-500 uppercase">{m.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DeveloperSection() {
  const [tab, setTab] = useState<'api' | 'schema'>('api')

  return (
    <section id="developers" className="relative overflow-hidden bg-ink-50/60 py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fine opacity-70 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-[84rem] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.2em] text-brand-600 uppercase">
                Developer &amp; infrastructure
              </p>
              <h2 className="mt-3 text-[2rem] font-extrabold tracking-[-0.045em] text-ink-950 sm:text-[2.6rem]">
                Engineered for extreme scale.{' '}
                <span className="text-gradient-brand">Documented for humans.</span>
              </h2>
            </div>
            <p className="max-w-xl text-[0.95rem] leading-relaxed text-ink-600">
              The frontend is a modular React and TypeScript surface built to consume high-throughput REST and GraphQL
              APIs. Behind it sits a PostgreSQL core with Prisma-managed migrations, row-level security, and an
              authentication model your engineers will already recognize from Supabase. The UI stays fast and
              interactive even while virtualizing tables of tens of millions of ledger lines.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full">
              <CodeTabs tab={tab} setTab={setTab} />
            </div>
          </Reveal>

          <Reveal delay={110} className="lg:col-span-5">
            <ArchitectureDiagram />
          </Reveal>
        </div>

        {/* Stack grid */}
        <Reveal delay={80}>
          <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-900/8 bg-ink-900/8 sm:grid-cols-2 lg:grid-cols-4">
            {STACK.map((s) => (
              <div key={s.label} className="bg-white px-5 py-5 transition-colors hover:bg-brand-50/50">
                <p className="font-mono text-[0.78rem] font-semibold tracking-[-0.01em] text-ink-900">{s.label}</p>
                <p className="mt-1 text-[0.78rem] text-ink-500">{s.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

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
                <Glyph name="terminal" className="size-5" />
              </span>
              <div>
                <h3 className="text-[1.05rem] font-bold tracking-[-0.025em] text-ink-950">
                  Ship your first reconciliation in an afternoon
                </h3>
                <p className="mt-1 text-[0.86rem] text-ink-600">
                  Install the SDK, paste your API key, and reconcile a sandbox period. Full reference docs, Postman
                  collection, and OpenAPI spec included.
                </p>
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row">
              <Button variant="primary" size="md">
                Read the docs
              </Button>
              <Button variant="ghost-dark" size="md">
                <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M4 2.6l8 5.4-8 5.4V2.6z" />
                </svg>
                Get an API key
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CodeTabs({ tab, setTab }: { tab: 'api' | 'schema'; setTab: (t: 'api' | 'schema') => void }) {
  return (
    <div className="h-full overflow-hidden rounded-3xl border border-ink-900/8 bg-ink-950">
      <div className="flex items-center gap-1 border-b border-white/8 px-4 py-3">
        {(
          [
            { id: 'api' as const, label: 'reconcile.ts', file: 'reconcile.ts', lines: API_SNIPPET },
            { id: 'schema' as const, label: 'schema.prisma', file: 'schema.prisma', lines: SCHEMA_SNIPPET },
          ]
        ).map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            aria-pressed={tab === t.id}
            className={`rounded-lg px-3 py-1.5 font-mono text-[0.68rem] transition-colors ${
              tab === t.id ? 'bg-brand-500/15 text-brand-200 ring-1 ring-brand-500/30' : 'text-ink-500 hover:text-ink-300'
            }`}
          >
            {t.label}
          </button>
        ))}
        <span className="ml-auto font-mono text-[0.55rem] text-ink-600">TypeScript · v1.4</span>
      </div>

      <div className="p-3 sm:p-4">
        <CodeBlock
          lines={tab === 'api' ? API_SNIPPET : SCHEMA_SNIPPET}
          filename={tab === 'api' ? 'reconcile.ts' : 'schema.prisma'}
        />
      </div>

      <div className="grid grid-cols-1 gap-px border-t border-white/8 bg-white/8 sm:grid-cols-3">
        {[
          { label: 'REST', value: '201 Created' },
          { label: 'GraphQL', value: '1.2M rows/page' },
          { label: 'Webhooks', value: '14 event types' },
        ].map((s) => (
          <div key={s.label} className="bg-ink-950 px-4 py-3">
            <p className="font-mono text-[0.55rem] tracking-[0.14em] text-ink-600 uppercase">{s.label}</p>
            <p className="mt-1 font-mono text-[0.72rem] font-semibold text-ink-200">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
