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
  | 'doc'
  | 'users'
  | 'clock'
  | 'stamp'
  | 'coins'

/* ── Navigation ────────────────────────────────────────────────── */

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Results', href: '#results' },
  { label: 'Technology', href: '#technology' },
  { label: 'Insights', href: '#insights' },
]

/* ── Industries served ─────────────────────────────────────────── */

export interface Industry {
  name: string
  glyph: Glyph
}

export const INDUSTRIES: Industry[] = [
  { name: 'E-commerce & D2C', glyph: 'bag' },
  { name: 'SaaS & Technology', glyph: 'terminal' },
  { name: 'Manufacturing', glyph: 'box' },
  { name: 'Healthcare & Diagnostics', glyph: 'shield' },
  { name: 'Real Estate & Construction', glyph: 'grid' },
  { name: 'Logistics & Supply Chain', glyph: 'cloud' },
  { name: 'Professional Services', glyph: 'spark' },
  { name: 'Startups & Scale-ups', glyph: 'bolt' },
  { name: 'Retail & FMCG', glyph: 'bag' },
  { name: 'Fintech & NBFCs', glyph: 'db' },
  { name: 'Education & EdTech', glyph: 'snow' },
  { name: 'Hospitality & Travel', glyph: 'clock' },
  { name: 'Hospitality', glyph: 'clock' },
  { name: 'Renewable Energy', glyph: 'spark' },
  { name: 'Non-Profit & Trusts', glyph: 'users' },
  { name: 'Export & Import', glyph: 'link' },
]

/* ── Services (bento) ──────────────────────────────────────────── */

export interface Service {
  eyebrow: string
  title: string
  body: string
  glyph: Glyph
  span: 'tall' | 'normal' | 'wide'
  bullets?: string[]
}

export const SERVICES: Service[] = [
  {
    eyebrow: 'Statutory Audit',
    title: 'Audits that stand up to the regulator and your investors',
    body: 'Risk-based audit programmes under SA 200, executed by qualified chartered accountants. We test the assertions that matter, document the exceptions properly, and deliver a signed audit report without last-minute surprises.',
    glyph: 'shield',
    span: 'tall',
    bullets: [
      'SA 200 risk-based planning',
      'CARO & NFRA reporting',
      'Group & consolidated audits',
    ],
  },
  {
    eyebrow: 'Tax Compliance',
    title: 'Direct, indirect and transfer-pricing compliance',
    body: 'Income tax, TDS/TCS, GST, and transfer pricing — filed on time, every time, with reconciliations that tie back to your books.',
    glyph: 'stamp',
    span: 'normal',
  },
  {
    eyebrow: 'Financial Reporting',
    title: 'Ind AS, IFRS and Companies Act close',
    body: 'Ind AS-compliant financial statements, board packs, and monthly MIS — prepared on a documented, reviewable accounting policy set.',
    glyph: 'doc',
    span: 'normal',
  },
  {
    eyebrow: 'Revenue Assurance',
    title: 'We reconcile what you earned against what you were paid',
    body: 'Order-level reconciliation across marketplaces, PSPs and ERPs. We identify short settlements, unclaimed credits and duplicate payouts — and file the claims on your behalf.',
    glyph: 'bolt',
    span: 'normal',
  },
  {
    eyebrow: 'CFO Advisory',
    title: 'Fractional CFO, outsourced finance and diligence',
    body: 'CFO-as-a-service, outsourced bookkeeping and payroll, fundraise and M&A due diligence, internal audit, and governance support — on retainer or per engagement.',
    glyph: 'spark',
    span: 'wide',
    bullets: ['Fractional CFO retainer', 'Due diligence & valuations', 'Internal audit & IFRS readiness'],
  },
]

/* ── Results / outcomes ────────────────────────────────────────── */

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
    value: 1200,
    suffix: '+',
    prefix: '',
    decimals: 0,
    label: 'Engagements Delivered',
    detail: 'Across audits, tax filings, board reporting and diligence since 2011.',
  },
  {
    value: 98,
    suffix: '%',
    prefix: '',
    decimals: 0,
    label: 'On-Time Statutory Filings',
    detail: 'No late GSTR-3B, TDS, ROC or income tax returns across the last three assessment years.',
  },
  {
    value: 15,
    suffix: ' yrs',
    prefix: '',
    decimals: 0,
    label: 'Average Partner Experience',
    detail: 'Every engagement is led by a chartered accountant, never delegated to a junior team.',
  },
  {
    value: 6.2,
    suffix: ' days',
    prefix: '',
    decimals: 1,
    label: 'Average Turnaround',
    detail: 'Books to reviewed financials, against an industry average of roughly 21 days.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'HMRECON found ₹38 lakh of unclaimed input tax credits and a channel under-settlement pattern our own team had missed for three years. They filed the claims and recovered it in one quarter.',
    name: 'Ananya Iyer',
    role: 'Director, D2C Group · 4 storefronts, 9 marketplaces',
    metric: '₹38 L recovered in one quarter',
  },
  {
    quote:
      'Our statutory audit was the first one in four years that came back with no management letter observations. The reconciliation pack they built is now the single source of truth for our board.',
    name: 'Rohit Malhotra',
    role: 'CFO, Manufacturing · SAP + Tally, 3 entities',
    metric: 'Clean audit, zero observations',
  },
  {
    quote:
      'We were raising a Series B and needed audited financials plus a diligence-grade data room in six weeks. Their team delivered in four, and walked our investors through it.',
    name: 'Kavya Nair',
    role: 'Co-founder, B2B SaaS · Seed to Series B',
    metric: 'Diligence-ready in 4 weeks',
  },
]

export const DIAGNOSTIC_STATS = [
  { v: '₹0', l: 'Upfront cost' },
  { v: '45 min', l: 'Diagnostic call' },
  { v: '5 days', l: 'To a scoped proposal' },
  { v: 'Fixed', l: 'Fee, no hourly billing' },
]

/* ── Engagement timeline (delivery tab) ────────────────────────── */

export const ENGAGEMENT_PHASES = [
  { phase: 'Scoping', detail: 'Entity map, materiality, risk assessment', days: 'Day 1–2', done: true },
  { phase: 'Records & PBC', detail: 'Document request list, ledger access, confirmations', days: 'Day 2–5', done: true },
  { phase: 'Fieldwork', detail: 'Testing, sampling, reconciliations, queries', days: 'Day 5–12', done: true },
  { phase: 'Review & Adjustments', detail: 'Partner review, journal testing, reporting', days: 'Day 12–16', done: false },
  { phase: 'Sign-off & Filing', detail: 'Audit report, board approval, statutory filing', days: 'Day 16–20', done: false },
]

/* ── Client portal (security tab) ──────────────────────────────── */

export const PORTAL_ITEMS = [
  { name: 'GSTR-3B · Jul 2026', type: 'Statutory return', state: 'Filed', tone: 'signal' },
  { name: 'TDS Returns · Q1 FY27', type: 'Statutory return', state: 'Filed', tone: 'signal' },
  { name: 'Bank Confirmations', type: 'Audit evidence', state: 'Received', tone: 'signal' },
  { name: 'Channel Settlement Reconciliation', type: 'Revenue assurance', state: 'In review', tone: 'brand' },
  { name: 'Inventory Count Sheet', type: 'Audit evidence', state: 'Awaiting client', tone: 'alert' },
  { name: 'Related Party Transactions', type: 'Disclosure', state: 'Draft', tone: 'ink' },
]

export const LEDGER_ROWS = [
  { id: 'SET-0426', channel: 'Amazon Seller', gross: '₹48,21,000.00', net: '₹45,55,580.00', state: 'Short', conf: 94.2 },
  { id: 'SET-0427', channel: 'Shopify India', gross: '₹31,88,450.00', net: '₹31,88,450.00', state: 'Cleared', conf: 100 },
  { id: 'SET-0428', channel: 'SAP · Channel Sales', gross: '₹1,22,40,000.00', net: '₹1,19,33,218.00', state: 'Short', conf: 91.7 },
  { id: 'SET-0429', channel: 'Tally · Direct', gross: '₹76,12,075.00', net: '₹76,12,075.00', state: 'Cleared', conf: 99.6 },
  { id: 'SET-0430', channel: 'Razorpay', gross: '₹54,00,910.00', net: '₹51,88,022.00', state: 'Claimed', conf: 96.4 },
]

/* ── Systems & security ────────────────────────────────────────── */

export const SYSTEMS = [
  { label: 'Secure Client Portal', value: 'Document exchange with full trail' },
  { label: '256-bit Encryption', value: 'At rest and in transit' },
  { label: 'Multi-Factor Auth', value: 'Mandatory on all client accounts' },
  { label: 'Role-Based Access', value: 'Partner / manager / client separation' },
  { label: 'Immutable Audit Log', value: 'Every access and edit recorded' },
  { label: 'India Data Residency', value: 'Servers hosted in-country' },
  { label: 'AES-256 Backups', value: 'Hourly, 7-year retention' },
  { label: 'Digital Signatures', value: 'DSC-backed filing and sign-off' },
]

export const PRINCIPLES = [
  {
    title: 'Partner-led, always',
    body: 'The partner who scopes your engagement signs your report. We do not staff engagements with juniors and hope for the best.',
    glyph: 'users' as const,
  },
  {
    title: 'Confidential by default',
    body: 'Mutual NDAs before the first call, least-privilege access, and a documented retention schedule we will show you on request.',
    glyph: 'shield' as const,
  },
  {
    title: 'Nothing filed silently',
    body: 'Every return, adjustment and claim is prepared, reviewed by a second qualified member, and shared with you before submission.',
    glyph: 'stamp' as const,
  },
]

/* ── Insights ──────────────────────────────────────────────────── */

export interface Insight {
  tag: string
  title: string
  read: string
  date: string
}

export const INSIGHTS: Insight[] = [
  {
    tag: 'Direct Tax',
    title: 'Section 194Q, 194J and the 10% TDS regime: what changed this quarter',
    read: '6 min read',
    date: 'Aug 2026',
  },
  {
    tag: 'Indirect Tax',
    title: 'GSTR-2B auto-population is now final. Your ITC claims are shifting.',
    read: '9 min read',
    date: 'Aug 2026',
  },
  {
    tag: 'Revenue Assurance',
    title: 'Why marketplaces under-settle, and the four-line reconciliation that catches it',
    read: '11 min read',
    date: 'Jul 2026',
  },
  {
    tag: 'Governance',
    title: 'What NFRA-registered entities should expect from their first audit',
    read: '7 min read',
    date: 'Jul 2026',
  },
]

/* ── Footer ────────────────────────────────────────────────────── */

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Statutory Audit', href: '#services' },
      { label: 'Internal & Forensic Audit', href: '#services' },
      { label: 'Direct Tax Advisory', href: '#services' },
      { label: 'GST & Indirect Tax', href: '#services' },
      { label: 'Transfer Pricing', href: '#services' },
      { label: 'Financial Reporting', href: '#services' },
      { label: 'Revenue Assurance', href: '#services' },
      { label: 'CFO Advisory', href: '#services' },
    ],
  },
  {
    title: 'Engagements',
    links: [
      { label: 'Outsourced Accounting', href: '#services' },
      { label: 'Bookkeeping & Payroll', href: '#services' },
      { label: 'Fundraise Due Diligence', href: '#services' },
      { label: 'M&A Transaction Support', href: '#services' },
      { label: 'Valuation & Fairness Opinion', href: '#services' },
      { label: 'IFRS / Ind AS Readiness', href: '#services' },
      { label: 'Company Incorporation', href: '#contact' },
      { label: 'Compliance Calendar', href: '#insights' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'E-commerce & D2C', href: '#industries' },
      { label: 'SaaS & Technology', href: '#industries' },
      { label: 'Manufacturing', href: '#industries' },
      { label: 'Healthcare & Diagnostics', href: '#industries' },
      { label: 'Real Estate', href: '#industries' },
      { label: 'Fintech & NBFCs', href: '#industries' },
      { label: 'Logistics', href: '#industries' },
      { label: 'Startups & Scale-ups', href: '#industries' },
    ],
  },
  {
    title: 'Firm',
    links: [
      { label: 'About HMRECON', href: '#about' },
      { label: 'Our Partners', href: '#about' },
      { label: 'Client Portal', href: '#contact' },
      { label: 'Insights', href: '#insights' },
      { label: 'Careers', href: '#contact' },
      { label: 'Fees & Engagement Terms', href: '#contact' },
      { label: 'Client Testimonials', href: '#results' },
      { label: 'Contact Our Offices', href: '#contact' },
    ],
  },
]

export const COMPLIANCE_BADGES = [
  'ICAI Registered',
  'Chartered Accountants',
  'ISO 27001',
  'SOC 2 Type II',
  'GDPR Compliant',
  'DPDP Act 2023',
  'NASBA Member',
  'XBRL Enabled',
]

export const OFFICES = [
  { city: 'Mumbai', line: 'Bandra Kurla Complex' },
  { city: 'Bengaluru', line: 'Koramangala' },
  { city: 'New Delhi', line: 'Nehru Place' },
  { city: 'Chennai', line: 'Adyar' },
]

export const SLA = [
  { label: 'Email', value: '< 4 hrs' },
  { label: 'Phone', value: '< 1 hr' },
  { label: 'Portal', value: '24 / 7' },
  { label: 'Filings on track', value: '100%' },
]
