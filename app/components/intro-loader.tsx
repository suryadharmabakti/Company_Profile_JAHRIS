'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function IntroLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timeout = window.setTimeout(() => setVisible(false), reducedMotion ? 300 : 3000)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div
      aria-live="polite"
      aria-label="Memuat JAHRIS"
      className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#F7FAFE] px-6 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] object-cover opacity-80 blur-[1px]"
      >
        <source src="/loading.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#F7FAFE]/35" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="intro-logo grid h-20 w-20 place-items-center rounded-[24px] border border-white/80 bg-white/70 p-4 shadow-[0_16px_40px_rgba(18,38,79,.10)] backdrop-blur-xl sm:h-24 sm:w-24">
          <Image src="/icon_jahris.png" alt="JAHRIS" width={64} height={64} priority className="h-auto w-full object-contain" />
        </div>
        <p className="intro-hello mt-7 font-display text-4xl font-semibold tracking-[-.05em] text-[#12264F] sm:text-5xl">Hello</p>
        <p className="intro-subtitle mt-2 text-sm font-medium tracking-[.12em] text-[#69758D]">JAHRIS</p>
      </div>
    </div>
  )
}
