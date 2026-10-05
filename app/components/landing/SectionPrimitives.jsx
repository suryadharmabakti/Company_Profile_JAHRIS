export function Reveal({ children, className = '', delay = 0 }) {
  return <div className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }}>{children}</div>
}

export function Label({ children, dark = false }) {
  const colors = dark
    ? 'border border-white/15 bg-white/10 text-blue-100'
    : 'bg-royal/10 text-royal'

  return <span className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.1em] ${colors}`}>{children}</span>
}
