'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import type { ReactNode } from 'react'

const links = [['Beranda', '#home'], ['Fitur', '#features'], ['Dashboard', '#dashboard'], ['Keunggulan', '#benefits'], ['Implementasi', '#implementation'], ['Harga', '#pricing']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 ${scrolled ? 'pt-3' : 'pt-5'}`}>
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4">
        <a
          href="#home"
          className="flex h-14 items-center rounded-full border border-white/55 bg-[rgba(255,255,255,0.38)] px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_12px_30px_rgba(11,31,79,0.12)] backdrop-blur-[20px] transition-all hover:border-white/80 hover:bg-[rgba(255,255,255,0.52)] sm:px-7"
        >
          <Image src="/jahris-logo.png" alt="JAHRIS" width={190} height={39} priority className="h-auto w-[122px] sm:w-[140px]" />
        </a>

        <div className={`flex h-14 items-center gap-2 rounded-full border border-white/55 bg-[rgba(255,255,255,0.38)] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_12px_30px_rgba(11,31,79,0.12)] backdrop-blur-[20px] transition-all duration-300 ${scrolled ? 'bg-[rgba(255,255,255,0.52)] shadow-[0_12px_40px_rgba(11,31,79,0.18)]' : ''}`}>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {links.map(([name, href], i) => (
              <a
                key={name}
                href={href}
                className={`rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                  i === 0
                    ? 'bg-gradient-to-br from-[#F5F0FF] to-[#DDD0FF] text-[#1E0F45] shadow-sm'
                    : 'text-[#314E7A] hover:bg-white/50 hover:text-[#0B1F4F]'
                }`}
              >
                {name}
              </a>
            ))}
          </nav>

          <a
            href="https://app.jahris.id"
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center rounded-full bg-gradient-to-r from-[#3B1A7E] to-[#7C3AED] px-6 text-xs font-bold text-white border border-[rgba(167,139,250,0.38)] shadow-md transition-all duration-300 hover:border-white/50 hover:-translate-y-0.5 sm:inline-flex"
          >
            Coba Sekarang ↗
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full text-[#0B1F4F] hover:bg-white/50 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <nav
        className={`mx-auto mt-2 max-w-[1360px] overflow-hidden rounded-2xl border border-[rgba(167,139,250,0.18)] bg-[#0E0720]/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-out lg:hidden ${
          open ? 'max-h-[450px] translate-y-0 p-4 opacity-100' : 'pointer-events-none max-h-0 -translate-y-2 p-0 opacity-0'
        }`}
        aria-label="Navigasi mobile"
        aria-hidden={!open}
      >
        <div className="grid gap-2">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
            >
              {name}
            </a>
          ))}
          <a
            href="https://app.jahris.id"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-gradient-to-r from-[#F5F0FF] to-[#DDD0FF] px-4 py-3 text-center text-sm font-bold text-[#1E0F45] shadow-md"
          >
            Coba Sekarang ↗
          </a>
        </div>
      </nav>
    </header>
  )
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div data-motion-reveal className={className}>{children}</div>
}

export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  return <span>{to}{suffix}</span>
}
