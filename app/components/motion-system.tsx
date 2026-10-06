'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

/** One scoped animation controller. Content stays visible if JavaScript is unavailable. */
export function MotionSystem() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let lenis: Lenis | undefined
    let ticker: ((time: number) => void) | undefined
    if (window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches) {
      lenis = new Lenis({ duration: 1.05, smoothWheel: true })
      lenis.on('scroll', ScrollTrigger.update)
      ticker = (time: number) => lenis?.raf(time * 1000)
      gsap.ticker.add(ticker)
      gsap.ticker.lagSmoothing(0)
    }

    const ctx = gsap.context(() => {
      const hero = gsap.timeline({ defaults: { ease: 'power3.out', duration: .72 } })
      hero.from('[data-hero-badge]', { opacity: 0, y: 18 })
        .from('[data-hero-line]', { opacity: 0, yPercent: 85, stagger: .11 }, '-=.5')
        .from('[data-hero-description]', { opacity: 0, y: 26 }, '-=.5')
        .from('[data-hero-actions]', { opacity: 0, y: 20 }, '-=.55')
        .from('[data-hero-visual]', { opacity: 0, y: 34, scale: .97, duration: .9 }, '-=.7')
        .from('[data-hero-stack]', { opacity: 0, y: 16 }, '-=.65')

      gsap.utils.toArray<HTMLElement>('[data-motion-reveal]').forEach((item) => {
        if (item.closest('#home')) return
        gsap.from(item, {
          opacity: 0, y: 40, duration: .8, ease: 'power3.out', clearProps: 'all',
          scrollTrigger: { trigger: item, start: 'top 85%', once: true },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-motion-heading]').forEach((heading) => {
        gsap.from(heading, {
          yPercent: 95, opacity: 0, duration: .9, ease: 'power3.out', clearProps: 'all',
          scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-motion-progress]').forEach((bar) => {
        gsap.from(bar, {
          scaleX: 0, transformOrigin: 'left center', duration: 1.15, ease: 'power3.out', clearProps: 'transform',
          scrollTrigger: { trigger: bar, start: 'top 90%', once: true },
        })
      })

      if (window.matchMedia('(min-width: 1024px)').matches) {
        gsap.to('[data-hero-visual]', {
          y: 34, ease: 'none',
          scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: .7 },
        })
      }

      gsap.utils.toArray<HTMLElement>('[data-motion-parallax]').forEach((visual) => {
        gsap.fromTo(visual, { y: 26 }, {
          y: -26, ease: 'none',
          scrollTrigger: { trigger: visual, start: 'top bottom', end: 'bottom top', scrub: .8 },
        })
      })

      gsap.utils.toArray<HTMLElement>('footer .grid > div').forEach((item, index) => {
        gsap.from(item, {
          opacity: 0, y: 22, duration: .7, delay: index * .08, ease: 'power3.out', clearProps: 'all',
          scrollTrigger: { trigger: item, start: 'top 92%', once: true },
        })
      })
    })

    ScrollTrigger.refresh()
    return () => {
      ctx.revert()
      if (ticker) gsap.ticker.remove(ticker)
      lenis?.destroy()
    }
  }, [])
  return null
}
