import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

