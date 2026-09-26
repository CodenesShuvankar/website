import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost-dark' | 'ghost-light'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

const SIZES: Record<Size, string> = {
  sm: 'h-9 px-4 text-[0.82rem]',
  md: 'h-11 px-5 text-[0.9rem]',
  lg: 'h-[3.25rem] px-7 text-[0.95rem]',
}

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-brand-gradient text-white shadow-[0_10px_30px_-10px_rgba(249,130,12,0.85)] hover:shadow-[0_16px_40px_-12px_rgba(249,130,12,0.95)] hover:brightness-[1.06] active:brightness-95',
  secondary:
    'bg-white text-ink-900 ring-1 ring-ink-900/12 shadow-[0_2px_10px_-4px_rgba(8,12,21,0.18)] hover:ring-ink-900/22 hover:bg-ink-50',
  'ghost-dark':
    'text-ink-700 ring-1 ring-ink-900/10 hover:bg-ink-900/[0.04] hover:text-ink-900',
  'ghost-light':
    'text-white/85 ring-1 ring-white/18 hover:bg-white/10 hover:text-white',
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-all duration-300 will-change-transform ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
