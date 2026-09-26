export type Glyph =
  | 'bag'
  | 'cloud'
  | 'bolt'
  | 'box'
  | 'grid'
  | 'snow'
  | 'db'
  | 'chart'
  | 'link'
  | 'terminal'
  | 'shield'
  | 'spark'

export interface Integration {
  name: string
  glyph: Glyph
  category: 'Marketplace' | 'ERP & Finance' | 'Payments' | 'Data & Infra'
}

export const INTEGRATIONS: Integration[] = [
  { name: 'Shopify', glyph: 'bag', category: 'Marketplace' },
  { name: 'Amazon', glyph: 'cloud', category: 'Marketplace' },
  { name: 'SAP', glyph: 'grid', category: 'ERP & Finance' },
  { name: 'Tally', glyph: 'chart', category: 'ERP & Finance' },
  { name: 'NetSuite', glyph: 'cloud', category: 'ERP & Finance' },
  { name: 'Xero', glyph: 'spark', category: 'ERP & Finance' },
  { name: 'QuickBooks', glyph: 'db', category: 'ERP & Finance' },
  { name: 'Stripe', glyph: 'bolt', category: 'Payments' },
  { name: 'Razorpay', glyph: 'bolt', category: 'Payments' },
  { name: 'Adyen', glyph: 'shield', category: 'Payments' },
  { name: 'PayPal', glyph: 'link', category: 'Payments' },
  { name: 'WooCommerce', glyph: 'bag', category: 'Marketplace' },
  { name: 'Flipkart', glyph: 'box', category: 'Marketplace' },
  { name: 'Meesho', glyph: 'box', category: 'Marketplace' },
  { name: 'PostgreSQL', glyph: 'db', category: 'Data & Infra' },
  { name: 'Snowflake', glyph: 'snow', category: 'Data & Infra' },
  { name: 'S3 Warehouse', glyph: 'box', category: 'Data & Infra' },
  { name: 'dbt', glyph: 'terminal', category: 'Data & Infra' },
]

export interface NavLink {
  label: string
  href: string
  description: string
  columns?: ('Platform' | 'Modules' | 'Resources')[]
}

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Platform',
    href: '#features',
    description: 'The AI reconciliation and revenue intelligence engine',
    columns: ['Platform', 'Modules'],
  },
  {
    label: 'Developers',
    href: '#developers',
    description: 'REST & GraphQL APIs, SDKs, and reference architecture',
    columns: ['Resources'],
  },
  {
    label: 'Integrations',
    href: '#integrations',
    description: 'Pre-built connectors for marketplaces, ERPs, and PSPs',
    columns: ['Modules'],
  },
  {
    label: 'Pricing',
    href: '#roi',
    description: 'Outcome-based pricing tied to reconciled volume',
  },
]

export interface Feature {
  eyebrow: string
  title: string
  body: string
  glyph: Glyph
  span: 'wide' | 'tall' | 'normal'
  bullets?: string[]
}

export const FEATURES: Feature[] = [
  {
    eyebrow: 'AI-Powered Intelligence',
    title: 'Predictive insights that resolve exceptions before they escalate',
    body: 'Multimodal models read invoices, POs, contracts, and remittance notes as documents — not fields. Every mismatch is scored, clustered by root cause, and routed with a recommended action and a confidence level your team can accept or override.',
    glyph: 'spark',
    span: 'tall',
    bullets: [
      'Multimodal document understanding',
      'Root-cause clustering of exceptions',
      'Auto-resolved exception handling',
    ],
  },
  {
    eyebrow: 'Single Source of Truth',
    title: 'One reconciled ledger across every marketplace and ERP',
    body: 'Orders, payouts, fees, refunds, chargebacks, FX, and tax net out into a single immutable ledger entry. Close the books on live data instead of exported spreadsheets.',
    glyph: 'db',
    span: 'normal',
  },
  {
    eyebrow: 'Revenue Execution',
    title: 'Recover short payments and cut manual operations',
    body: 'HMRECON detects under-settled payouts, withheld commissions, and unclaimed chargebacks, then files claims and chases collections on your behalf — automatically.',
    glyph: 'bolt',
    span: 'normal',
  },
  {
    eyebrow: 'Continuous Assurance',
    title: 'Audit-ready by default, not by quarter-end scramble',
    body: 'Every adjustment is versioned, attributed, and traceable to its source document. Export a defensible audit trail without touching a spreadsheet.',
    glyph: 'shield',
    span: 'normal',
  },
  {
    eyebrow: 'Realtime Ingestion',
    title: 'Streaming connectors that go live in minutes, not quarters',
    body: 'Managed webhooks, CDC pipelines, and nightly backfills normalize every source into a canonical financial schema. Ship a new connector with the SDK, or let us build it.',
    glyph: 'link',
    span: 'wide',
    bullets: ['Managed webhooks & CDC', 'Canonical financial schema', 'Zero-config backfills'],
  },
]

export interface Stat {
  value: number
  suffix: string
  prefix: string
  decimals: number
  label: string
  detail: string
}

export const STATS: Stat[] = [
  {
    value: 99,
    suffix: '%',
    prefix: '',
    decimals: 0,
    label: 'Invoice Accuracy',
    detail: 'Median match accuracy across 40M+ monthly transaction lines.',
  },
  {
    value: 90,
    suffix: '%',
    prefix: '',
    decimals: 0,
    label: 'Reduction in Manual Ops',
    detail: 'Fewer touches per close cycle, measured across 400+ finance teams.',
  },
  {
    value: 4.2,
    suffix: 'B',
    prefix: '$',
    decimals: 1,
    label: 'Reconciled Monthly Volume',
    detail: 'Gross merchandise value processed and verified each month.',
  },
  {
    value: 11,
    suffix: ' days',
    prefix: '',
    decimals: 0,
    label: 'Faster Time to Close',
    detail: 'From period-end to a fully reconciled, signed-off ledger.',
  },
]

export interface CodeLine {
  indent: number
  tokens: string
}

export const API_SNIPPET: CodeLine[] = [
  { indent: 0, tokens: "// One call to fuse, match and settle a settlement file" },
  { indent: 0, tokens: "const recon = await hmrecon.reconcile.create({" },
  { indent: 1, tokens: "source: 'amazon_marketplace'," },
  { indent: 1, tokens: "period: { from: '2026-08-01', to: '2026-08-31' }," },
  { indent: 1, tokens: "strategy: 'ai_multimodal'," },
  { indent: 1, tokens: "policies: { autoFileClaims: true, tolerancePct: 0.5 }," },
  { indent: 1, tokens: "webhook: { url: env('RECON_WEBHOOK_URL') }," },
  { indent: 0, tokens: "})" },
  { indent: 0, tokens: "" },
  { indent: 0, tokens: "recon.on('settled', (run) => {" },
  { indent: 1, tokens: "console.log(run.ledgerId, run.accuracy)" },
  { indent: 0, tokens: "})" },
]

export const SCHEMA_SNIPPET: CodeLine[] = [
  { indent: 0, tokens: 'model LedgerEntry {' },
  { indent: 1, tokens: 'id          String   @id @default(cuid())' },
  { indent: 1, tokens: 'period      DateTime @db.Date' },
  { indent: 1, tokens: 'source      String' },
  { indent: 1, tokens: 'grossCents  Int      @db.BigInt' },
  { indent: 1, tokens: 'feesCents   Int      @db.BigInt' },
  { indent: 1, tokens: 'netCents    Int      @db.BigInt' },
  { indent: 1, tokens: 'confidence  Decimal  @db.Decimal(5, 4)' },
  { indent: 1, tokens: 'lineItems   LineItem[]' },
  { indent: 0, tokens: '' },
  { indent: 1, tokens: '@@index([period, source(sort: Desc)])' },
  { indent: 0, tokens: '}' },
]

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Reconciliation Engine', href: '#features' },
      { label: 'Revenue Intelligence', href: '#features' },
      { label: 'Exception Automation', href: '#features' },
      { label: 'Single Source of Truth', href: '#features' },
      { label: 'Short Payment Recovery', href: '#features' },
      { label: 'Continuous Assurance', href: '#features' },
      { label: 'Payout Reconciliation', href: '#features' },
      { label: 'Chargeback Automation', href: '#features' },
    ],
  },
  {
    title: 'Modules',
    links: [
      { label: 'Marketplace Connector', href: '#integrations' },
      { label: 'ERP & GL Sync', href: '#integrations' },
      { label: 'PSP Settlement Engine', href: '#integrations' },
      { label: 'Tax & FX Normalization', href: '#integrations' },
      { label: 'Audit Trail Vault', href: '#developers' },
      { label: 'Revenue Leak Radar', href: '#features' },
      { label: 'Close Automation', href: '#features' },
      { label: 'Custom Connector SDK', href: '#developers' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { label: 'Multi-Channel Commerce', href: '#integrations' },
      { label: 'D2C & Retail Reconciliation', href: '#features' },
      { label: 'Global ERP Consolidation', href: '#integrations' },
      { label: 'Payment Provider Reconciliation', href: '#integrations' },
      { label: 'Franchise & Marketplace Payouts', href: '#features' },
      { label: 'Subscription Billing Ops', href: '#features' },
      { label: 'FP&A Revenue Truth', href: '#roi' },
      { label: 'External Audit Preparation', href: '#features' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'API Reference', href: '#developers' },
      { label: 'REST API v1', href: '#developers' },
      { label: 'GraphQL Explorer', href: '#developers' },
      { label: 'TypeScript SDK', href: '#developers' },
      { label: 'Python SDK', href: '#developers' },
      { label: 'Webhook Events', href: '#developers' },
      { label: 'Authentication & RLS', href: '#developers' },
      { label: 'Changelog', href: '#developers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About HMRECON', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Security & Trust', href: '#' },
      { label: 'Compliance Center', href: '#' },
      { label: 'Customer Stories', href: '#roi' },
      { label: 'Partners', href: '#integrations' },
      { label: 'Press Kit', href: '#' },
      { label: 'Contact Sales', href: '#demo' },
    ],
  },
]

export const COMPLIANCE_BADGES = [
  'SOC 2 Type II',
  'ISO 27001',
  'GDPR',
  'SOC 1',
  'HIPAA',
  'PCI DSS L1',
  'DPA',
  'CCPA',
]

export const RECON_ROWS = [
  { id: 'TXN-88213', channel: 'Amazon US', gross: '$48,210.00', net: '$43,997.41', status: 'Matched', conf: 99.8 },
  { id: 'TXN-88214', channel: 'Shopify', gross: '$31,884.50', net: '$31,884.50', status: 'Matched', conf: 100 },
  { id: 'TXN-88215', channel: 'SAP FI', gross: '$122,400.00', net: '$119,332.18', status: 'Exception', conf: 91.2 },
  { id: 'TXN-88216', channel: 'Tally', gross: '$76,120.75', net: '$76,120.75', status: 'Matched', conf: 99.6 },
  { id: 'TXN-88217', channel: 'Adyen', gross: '$54,009.10', net: '$51,880.22', status: 'Recovering', conf: 96.4 },
]
