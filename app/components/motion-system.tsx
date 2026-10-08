'use client'

import { useEffect } from 'react'
import { animate, stagger } from 'animejs'
import Lenis from 'lenis'

/** Anime.js controller. Content stays visible without JavaScript or with reduced motion. */
export function MotionSystem() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const animations: ReturnType<typeof animate>[] = []
    const play = (...args: Parameters<typeof animate>) => {
      const animation = animate(...args)
      animations.push(animation)
      return animation
    }

    const heroElements = document.querySelectorAll<HTMLElement>(
      '[data-hero-badge], [data-hero-line], [data-hero-description], [data-hero-actions], [data-hero-stack], [data-hero-visual]',
    )
    play(heroElements, {
      opacity: [0, 1],
      y: [28, 0],
      delay: stagger(95),
      duration: 760,
      ease: 'outExpo',
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const element = entry.target as HTMLElement
        play(element, { opacity: [0, 1], y: [36, 0], duration: 720, ease: 'outExpo' })
        observer.unobserve(element)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    document.querySelectorAll<HTMLElement>('[data-motion-reveal]').forEach((element) => {
      if (!element.closest('#home')) observer.observe(element)
    })

    let lenis: Lenis | undefined
    let frameId: number | undefined
    if (window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches) {
      lenis = new Lenis({ duration: 1.05, smoothWheel: true })
      const frame = (time: number) => {
        lenis?.raf(time)
        frameId = requestAnimationFrame(frame)
      }
      frameId = requestAnimationFrame(frame)
    }

    return () => {
      observer.disconnect()
      animations.forEach((animation) => animation.revert())
      if (frameId) cancelAnimationFrame(frameId)
      lenis?.destroy()
    }
  }, [])

  return null
}
