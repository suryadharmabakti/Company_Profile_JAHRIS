import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10 ${className}`}>{children}</div>
}

export function Eyebrow({ children }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      data-hero-badge
      className="inline-flex items-center gap-2 rounded-full border border-[rgba(167,139,250,0.20)] bg-[rgba(255,255,255,0.055)] px-4 py-1.5 backdrop-blur-sm transition-all"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
      <span className="text-[11px] font-bold uppercase tracking-[.15em] text-[rgba(235,225,255,0.85)]">
        {children}
      </span>
    </span>
  )
}
