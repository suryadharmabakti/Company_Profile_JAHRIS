'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

const slides = [
  { title: 'Satu pusat kendali untuk seluruh tim.', label: '01 / MANAJEMEN TUGAS', image: '/proposal/p6-2.jpg', alt: 'Tampilan asli dashboard manajemen tugas JAHRIS', description: 'Pantau tugas lintas departemen, progres pekerjaan, dan pekerjaan yang melewati tenggat dalam satu tampilan.' },
  { title: 'Alur kerja yang terlihat jelas.', label: '02 / BOARD KANBAN', image: '/proposal/p7-2.png', alt: 'Tampilan asli board Kanban JAHRIS', description: 'Pindahkan pekerjaan dari To Do, On Progress, Review, hingga Done dengan board yang mudah dipahami.' },
  { title: 'Rencana tim, lebih mudah dipantau.', label: '03 / GANTT CHART', image: '/proposal/p8-2.png', alt: 'Tampilan asli Gantt Chart JAHRIS', description: 'Lihat jadwal dan durasi tugas dalam tampilan Gantt untuk koordinasi yang lebih terarah.' },
]

export function ProductShowcase() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]
  const step = (direction: number) => setIndex(current => (current + direction + slides.length) % slides.length)

  return (
    <div>
      <div className="relative overflow-hidden rounded-[28px] border border-[rgba(167,139,250,0.32)] bg-[rgba(20,10,45,0.72)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_30px_80px_rgba(0,0,0,0.32),0_0_80px_rgba(124,58,237,0.14)] backdrop-blur-xl sm:p-5 lg:p-7">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.45)] to-transparent z-20" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A0612] via-[rgba(20,10,45,0.6)] to-transparent z-10" />

        <div key={slide.image} className="relative aspect-[16/11] overflow-hidden rounded-[20px] border border-white/10 bg-[#120826] sm:aspect-[16/9] lg:aspect-[2.1/1]">
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-top transition-transform duration-700 hover:scale-[1.01]"
            priority={index === 0}
          />
        </div>

        <div className="absolute bottom-8 left-8 right-8 z-20 max-w-2xl text-white sm:bottom-10 sm:left-10">
          <span className="inline-block rounded-full border border-[rgba(167,139,250,0.20)] bg-[rgba(255,255,255,0.055)] px-3 py-1 text-[10px] font-bold uppercase tracking-[.18em] text-[#C4B5FD] backdrop-blur-sm sm:text-xs">
            {slide.label}
          </span>
          <h3 className="mt-3 max-w-xl font-display text-2xl font-bold leading-tight tracking-tight text-[#F5F3FF] sm:text-3xl">
            {slide.title}
          </h3>
          <p className="mt-2.5 hidden max-w-lg text-sm leading-6 text-[#B8A8DE] sm:block">
            {slide.description}
          </p>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {slides.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setIndex(i)}
              aria-label={`Tampilkan ${item.label}`}
              aria-current={index === i}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === i
                  ? 'w-12 bg-gradient-to-r from-white via-violet-200 to-[#C4B5FD] shadow-[0_0_12px_rgba(255,255,255,0.8)]'
                  : 'w-2.5 bg-violet-900/60 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://app.jahris.id"
            target="_blank"
            rel="noreferrer"
            className="mr-3 hidden items-center gap-1.5 text-sm font-bold text-violet-200 transition hover:text-white hover:gap-2 sm:inline-flex"
          >
            Lihat aplikasi <ArrowUpRight size={16}/>
          </a>
          <button
            onClick={() => step(-1)}
            aria-label="Slide sebelumnya"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/15 hover:border-white/40 hover:-translate-x-0.5"
          >
            <ArrowLeft size={18}/>
          </button>
          <button
            onClick={() => step(1)}
            aria-label="Slide berikutnya"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/15 hover:border-white/40 hover:translate-x-0.5"
          >
            <ArrowRight size={18}/>
          </button>
        </div>
      </div>
    </div>
  )
}
