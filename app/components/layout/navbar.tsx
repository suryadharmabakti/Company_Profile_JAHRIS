'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import type { ReactNode } from 'react'

const links = [
  ['Beranda', '#home'],
  ['Fitur', '#features'],
  ['Keunggulan', '#benefits'],
  ['Antarmuka', '#dashboard'],
  ['Harga', '#pricing'],
  ['Kontak', '#contact'],
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const lastScrollY = useRef(0)
  const scrollFrame = useRef<number | null>(null)

  useEffect(() => {
    const update = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)
      setHidden(currentScrollY > 120 && currentScrollY > lastScrollY.current)
      lastScrollY.current = currentScrollY
    }
    const onScroll = () => {
      if (scrollFrame.current !== null) return
      scrollFrame.current = requestAnimationFrame(() => {
        update()
        scrollFrame.current = null
      })
    }
    lastScrollY.current = window.scrollY
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current)
    }
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
      <div className={`mx-auto flex h-16 max-w-[1160px] items-center justify-between gap-4 rounded-full border border-white/65 bg-[rgba(255,255,255,0.52)] px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_12px_30px_rgba(11,31,79,0.12)] backdrop-blur-[20px] transition-all duration-300 ${scrolled ? 'shadow-[0_12px_40px_rgba(11,31,79,0.16)]' : ''}`}>
        <a
          href="#home"
          className="flex h-11 shrink-0 items-center px-3 sm:px-4"
        >
          <Image src="/images/brand/logo.png" alt="JAHRIS" width={190} height={39} priority className="h-auto w-[112px] sm:w-[126px]" />
        </a>

        <div className="flex h-full items-center gap-3">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                aria-current={activeLink === href ? 'page' : undefined}
                className={`rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                  activeLink === href
                    ? 'bg-[#12264f] text-white shadow-sm'
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
            className="hidden min-h-11 items-center rounded-full border border-[#12264F] bg-[#12264F] px-6 text-xs font-bold text-white shadow-[0_8px_18px_rgba(18,38,79,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1C3970] sm:inline-flex"
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
        className={`mx-auto mt-2 max-w-[1160px] overflow-hidden rounded-2xl border border-[rgba(167,139,250,0.18)] bg-[#0E0720]/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-out lg:hidden ${
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
              className="rounded-lg px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
            >
              {name}
            </a>
          ))}
          <a
            href="https://app.jahris.id"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-4 py-3 bg-white text-center text-sm font-bold text-[#1E0F45] shadow-md"
          >
            Coba Sekarang ↗
          </a>
        </div>
      </nav>
    </header>
  )
}

export function Reveal({ children, className = '', delay = 0, variant = 'fade-up' }: { children: ReactNode; className?: string; delay?: number; variant?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'soft-scale' | 'stagger-cards' }) {
  return <div data-motion-reveal data-motion-delay={delay || undefined} data-motion-variant={variant} className={className}>{children}</div>
}

