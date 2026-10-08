import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10 ${className}`}>{children}</div>
}

export function Eyebrow({ children }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      data-hero-badge
      className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-[rgba(255,255,255,0.48)] px-4 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(11,31,79,0.08)] backdrop-blur-sm transition-all"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#2563A9]" />
      <span className="text-[11px] font-bold uppercase tracking-[.15em] text-[#0B1F4F]">
        {children}
      </span>
    </span>
  )
}
