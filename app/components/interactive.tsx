'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import type { ReactNode } from 'react'

const links = [
  ['Beranda', '#home'],
  ['Fitur', '#features'],
  ['Keunggulan', '#benefits'],
  ['Dashboard', '#dashboard'],
  ['Harga', '#pricing'],
  ['Kontak', '#contact'],
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const update = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)
      setHidden(currentScrollY > 120 && currentScrollY > lastScrollY.current)
      lastScrollY.current = currentScrollY
    }
    lastScrollY.current = window.scrollY
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    const sections = links
      .map(([, href]) => document.querySelector(href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visibleSection) setActiveLink(`#${visibleSection.target.id}`)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-4 transition-[padding,transform,opacity] duration-500 ease-out ${scrolled ? 'pt-3' : 'pt-5'} ${hidden ? '-translate-y-[calc(100%+1rem)] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
      <div className={`mx-auto flex h-14 max-w-[1160px] items-center justify-between gap-2 rounded-full border border-white/65 bg-[rgba(255,255,255,0.52)] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_12px_30px_rgba(11,31,79,0.12)] backdrop-blur-[20px] transition-all duration-300 ${scrolled ? 'shadow-[0_12px_40px_rgba(11,31,79,0.16)]' : ''}`}>
        <a
          href="#home"
          className="flex h-11 items-center border-r border-[#DCE4EE] px-4 sm:px-5"
        >
          <Image src="/jahris-logo.png" alt="JAHRIS" width={190} height={39} priority className="h-auto w-[112px] sm:w-[126px]" />
        </a>

        <div className="flex h-full items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                aria-current={activeLink === href ? 'page' : undefined}
                className={`rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                  activeLink === href
                    ? 'bg-white/85 text-[#12264F] shadow-sm'
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
              onClick={() => { setActiveLink(href); setOpen(false) }}
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
