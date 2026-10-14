'use client'

import { useEffect } from 'react'
import { animate, cubicBezier, stagger } from 'animejs'
import Lenis from 'lenis'

/** Anime.js controller. Content stays visible without JavaScript or with reduced motion. */
export function MotionSystem() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const animations: ReturnType<typeof animate>[] = []
    const smoothEase = cubicBezier(0.22, 1, 0.36, 1)
    const play = (...args: Parameters<typeof animate>) => {
      const animation = animate(...args)
      animations.push(animation)
      return animation
    }

    const heroElements = document.querySelectorAll<HTMLElement>(
      '[data-hero-badge], [data-hero-description], [data-hero-actions], [data-hero-stack], [data-hero-visual]',
    )
    const heroCharacters = document.querySelectorAll<HTMLElement>('[data-hero-char]')
    let heroHasPlayed = false
    const playHero = () => {
      if (heroHasPlayed) return
      heroHasPlayed = true
      play(heroCharacters, {
        opacity: [0, 1],
        x: (_target: unknown, index = 0) => [((index * 17) % 36) - 18, 0],
        y: (_target: unknown, index = 0) => [((index * 11) % 28) - 14, 0],
        scale: [0.92, 1],
        delay: stagger(42, { from: 'random' }),
        duration: 900,
        ease: smoothEase,
      })
      play(heroElements, {
        opacity: [0, 1],
        y: [28, 0],
        delay: stagger(130, { start: 900 }),
        duration: 1050,
        ease: smoothEase,
      })
    }

    const heroVisual = document.querySelector<HTMLElement>('[data-hero-visual]')
    if (heroVisual) {
      play(heroVisual, { opacity: [0, 1], scale: [0.98, 1], duration: 1000, ease: smoothEase })
    }

    if (document.documentElement.dataset.jahrisIntro !== 'active') playHero()
    window.addEventListener('jahris:intro-complete', playHero, { once: true })

    const heroSection = document.querySelector<HTMLElement>('#home')
    const heroResetObserver = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) heroHasPlayed = false
    }, { rootMargin: '160px 0px 160px 0px', threshold: 0 })
    if (heroSection) heroResetObserver.observe(heroSection)

    const revealed = new WeakSet<HTMLElement>()

    type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'soft-scale' | 'stagger-cards'
    const animateVariant = (targets: HTMLElement | HTMLElement[], variant: RevealVariant, delay: number, duration: number) => {
      const options = { opacity: [0, 1], delay, duration, ease: smoothEase }
      if (variant === 'fade-in') return play(targets, options)
      if (variant === 'slide-left') return play(targets, { ...options, x: [-18, 0] })
      if (variant === 'slide-right') return play(targets, { ...options, x: [18, 0] })
      if (variant === 'soft-scale') return play(targets, { ...options, scale: [0.97, 1] })
      return play(targets, { ...options, y: [16, 0] })
    }

    const playReveal = (element: HTMLElement) => {
      const delay = Number(element.dataset.motionDelay ?? 0)
      const variant = (element.dataset.motionVariant ?? 'fade-up') as RevealVariant
      const text = Array.from(element.querySelectorAll<HTMLElement>(
        ':scope > :is(h1, h2, h3, p), :scope > div > :is(h1, h2, h3, p)',
      ))
      const items = Array.from(element.querySelectorAll<HTMLElement>('[data-motion-card], [role="tab"]')).slice(0, 8)

      if (text.length > 0) {
        play(text, {
          opacity: [0, 1],
          y: [16, 0],
          delay: stagger(100, { start: delay }),
          duration: 850,
          ease: smoothEase,
        })
      } else if (items.length <= 1) {
        animateVariant(element, variant, delay, variant === 'stagger-cards' ? 1000 : 900)
      }

      const actions = Array.from(element.querySelectorAll<HTMLElement>(':scope > [data-motion-actions]'))
      if (actions.length > 0) {
        animateVariant(actions, 'fade-up', delay + text.length * 100 + 80, 800)
      }

      if (items.length > 1) {
        play(items, {
          opacity: [0, 1],
          y: [16, 0],
          delay: stagger(180, { start: delay }),
          duration: 1000,
          ease: smoothEase,
        })
      }

      const media = Array.from(element.querySelectorAll<HTMLElement>('[data-motion-media]'))
      if (media.length > 0) {
        animateVariant(media, variant === 'fade-in' ? 'soft-scale' : variant, delay + 100, 900)
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || revealed.has(entry.target as HTMLElement)) return
        const element = entry.target as HTMLElement
        revealed.add(element)
        playReveal(element)
      })
    }, { threshold: 0.16, rootMargin: '0px 0px -10% 0px' })

    const resetObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) revealed.delete(entry.target as HTMLElement)
      })
    }, { rootMargin: '160px 0px 160px 0px', threshold: 0 })

    document.querySelectorAll<HTMLElement>('[data-motion-reveal]').forEach((element) => {
      if (!element.closest('#home')) {
        observer.observe(element)
        resetObserver.observe(element)
      }
    })

    const scrollLinkedElements = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-float]'))
    let scrollFrame: number | null = null
    const updateScrollLinkedMotion = () => {
      const viewportCenter = window.innerHeight / 2
      scrollLinkedElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const depth = Number(element.dataset.scrollDepth ?? 1)
        const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - viewportCenter) / viewportCenter))
        const offset = Math.round(progress * -14 * depth * 10) / 10
        element.style.transform = `translate3d(0, ${offset}px, 0)`
      })
      scrollFrame = null
    }
    const onScrollLinkedMotion = () => {
      if (scrollFrame !== null) return
      scrollFrame = requestAnimationFrame(updateScrollLinkedMotion)
    }
    updateScrollLinkedMotion()
    window.addEventListener('scroll', onScrollLinkedMotion, { passive: true })
    window.addEventListener('resize', onScrollLinkedMotion)

    let lenis: Lenis | undefined
    let lenisFrame: number | null = null
    if (window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches) {
      lenis = new Lenis({
        duration: 1.08,
        smoothWheel: true,
        syncTouch: false,
        easing: (time) => 1 - Math.pow(1 - time, 4),
      })
      const renderLenis = (time: number) => {
        lenis?.raf(time)
        lenisFrame = requestAnimationFrame(renderLenis)
      }
      lenisFrame = requestAnimationFrame(renderLenis)
    }

    return () => {
      observer.disconnect()
      resetObserver.disconnect()
      heroResetObserver.disconnect()
      window.removeEventListener('jahris:intro-complete', playHero)
      window.removeEventListener('scroll', onScrollLinkedMotion)
      window.removeEventListener('resize', onScrollLinkedMotion)
      if (scrollFrame !== null) cancelAnimationFrame(scrollFrame)
      if (lenisFrame !== null) cancelAnimationFrame(lenisFrame)
      lenis?.destroy()
      animations.forEach((animation) => animation.revert())
    }
  }, [])

  return null
}
