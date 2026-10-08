'use client'

import Image from 'next/image'
import { type KeyboardEvent, useId, useState } from 'react'

const tabs = ['Dashboard', 'Absensi', 'Payroll', 'Tugas'] as const
type Tab = typeof tabs[number]

const screens: Record<Tab, { src: string; alt: string; caption: string }> = {
  Dashboard: { src: '/Dhashboard.png', alt: 'Dashboard JAHRIS', caption: 'Ringkasan karyawan, kehadiran, dan pengajuan terbaru dalam satu halaman.' },
  Absensi: { src: '/Absensi.png', alt: 'Halaman absensi JAHRIS', caption: 'Rekap absensi harian otomatis, lengkap dengan status izin dan cuti.' },
  Payroll: { src: '/Payroll.png', alt: 'Halaman payroll JAHRIS', caption: 'Gaji, komponen payroll, dan status pembayaran tersaji dengan rapi.' },
  Tugas: { src: '/Task.png', alt: 'Halaman manajemen tugas JAHRIS', caption: 'Board tugas membantu tim memantau progres pekerjaan antar departemen.' },
}

export function ProductShowcase() {
  const [active, setActive] = useState<Tab>('Dashboard')
  const id = useId()
  const screen = screens[active]
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const indexes = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 }
    const next = indexes[event.key as keyof typeof indexes]
    if (next === undefined) return
    event.preventDefault()
    setActive(tabs[next])
    document.getElementById(`${id}-tab-${next}`)?.focus()
  }

  return <div>
    <div role="tablist" aria-label="Tampilan produk JAHRIS" className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-[var(--surface-border)] bg-white/72 p-1.5 shadow-[var(--surface-shadow)] backdrop-blur-xl">
      {tabs.map((tab, index) => <button key={tab} id={`${id}-tab-${index}`} role="tab" aria-selected={active === tab} aria-controls={`${id}-panel-${index}`} tabIndex={active === tab ? 0 : -1} onClick={() => setActive(tab)} onKeyDown={(event) => onKeyDown(event, index)} className={`h-10 shrink-0 rounded-full px-5 text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#1E4FD8] ${active === tab ? 'bg-[#12264F] text-white' : 'text-[#55627D] hover:text-[#12264F]'}`}>{tab}</button>)}
    </div>
    <div id={`${id}-panel-${tabs.indexOf(active)}`} role="tabpanel" aria-labelledby={`${id}-tab-${tabs.indexOf(active)}`} className="mt-6 overflow-hidden rounded-[24px] border border-[var(--surface-border)] bg-white/72 shadow-[var(--surface-shadow)] backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-[#E8ECF3] px-[18px] py-[14px]"><i className="h-2.5 w-2.5 rounded-full bg-[#D5DBE6]"/><i className="h-2.5 w-2.5 rounded-full bg-[#D5DBE6]"/><i className="h-2.5 w-2.5 rounded-full bg-[#D5DBE6]"/><span className="ml-2 rounded-full border border-[var(--surface-border)] px-3 py-1 text-xs text-[#55627D]">app.jahris.id</span></div>
      <div className="bg-[#F7FAFE] p-3 sm:p-6"><div className="relative aspect-[16/9] overflow-hidden rounded-[14px] border border-[var(--surface-border)] bg-white"><Image key={screen.src} src={screen.src} alt={screen.alt} fill priority={active === 'Dashboard'} sizes="(max-width: 1024px) 92vw, 1180px" className="object-contain"/></div></div>
    </div>
    <p className="mt-5 text-sm text-[#55627D]">{screen.caption}</p>
  </div>
}
