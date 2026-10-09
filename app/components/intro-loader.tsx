'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function IntroLoader() {
  const [stage, setStage] = useState<'idle' | 'visible' | 'leaving'>('idle')
  const introScheduled = useRef(false)

  useEffect(() => {
    if (!introScheduled.current) {
      const key = 'jahris-intro-seen'
      try {
        if (window.sessionStorage.getItem(key)) return
        window.sessionStorage.setItem(key, 'true')
      } catch {
        // Continue showing the intro if session storage is unavailable.
      }
      introScheduled.current = true
    }

    const begin = window.setTimeout(() => setStage('visible'), 0)
    const leave = window.setTimeout(() => setStage('leaving'), 3400)
    const finish = window.setTimeout(() => setStage('idle'), 4000)
    return () => {
      window.clearTimeout(begin)
      window.clearTimeout(leave)
      window.clearTimeout(finish)
    }
  }, [])

  if (stage === 'idle') return null

  return (
    <div
      aria-live="polite"
      aria-label="Memuat JAHRIS"
      className={`intro-loader fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-black transition-opacity duration-600 ease-[cubic-bezier(.22,1,.36,1)] ${stage === 'leaving' ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
    >
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/loading.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/10" />
      <div className="intro-brand relative z-10 flex flex-col items-center text-center">
        <div className="grid h-20 w-20 place-items-center rounded-[24px] border border-white/70 bg-white/85 p-4 shadow-[0_16px_40px_rgba(0,0,0,.22)] backdrop-blur-xl sm:h-24 sm:w-24">
          <Image src="/icon_jahris.png" alt="JAHRIS" width={64} height={64} priority className="h-auto w-full object-contain" />
        </div>
        <div aria-hidden="true" className="mt-5 h-1 w-20 overflow-hidden rounded-full bg-white/30 shadow-[0_1px_8px_rgba(255,255,255,.24)]">
          <div className="intro-progress h-full rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,.95)]" />
        </div>
      </div>
    </div>
  )
}
