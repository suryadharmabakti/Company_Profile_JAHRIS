import Image from 'next/image'
import { ArrowUpRight, CheckCircle2, ShieldCheck, Smartphone } from 'lucide-react'
import { Reveal } from '../../layout/navbar'
import { Container } from '../../shared/ui'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-[#F7FAFE] text-[#0B1F4F]">
      <div
        className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[600px] w-[700px] animate-blob-drift-slow rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.22) 0%, rgba(124,58,237,0.12) 40%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute left-1/3 top-0 -z-10 h-[500px] w-[600px] animate-blob-drift rounded-full blur-[110px]"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.24) 0%, rgba(167,139,250,0.18) 45%, transparent 65%)' }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[700px] w-[900px] animate-glow-pulse blur-[140px]"
        style={{ background: 'radial-gradient(ellipse at 68% 42%, rgba(96,165,250,0.20) 0%, rgba(124,58,237,0.28) 35%, rgba(76,29,149,0.16) 60%, transparent 75%)' }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-[520px] w-[620px] animate-blob-drift rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.10) 0%, rgba(124,58,237,0.12) 40%, transparent 65%)' }}
      />
      <div className="hero-tech-grid pointer-events-none absolute inset-0 -z-10 opacity-80" />
      <div className="horizon-glow animate-horizon" />

      <Container className="relative flex min-h-[100svh] flex-col items-center justify-center gap-9 pb-16 pt-32 text-center sm:pt-36">
        <Reveal className="w-full">

          <h1 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(3rem,6.2vw,5.8rem)] font-semibold leading-[1.04] tracking-[-.055em]">
            <span className="block overflow-hidden"><span data-hero-line className="block text-[#0B1F4F]">Kelola tim.</span></span>
            <span className="block overflow-hidden"><span data-hero-line className="block text-[#0B1F4F]">Bekerja lebih</span></span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block text-gradient-navy-blue">
                terarah.
              </span>
            </span>
          </h1>

          <p data-hero-description className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#55627D] sm:text-lg">
            Satu ruang kerja yang membuat data, proses, dan keputusan HR bergerak lebih rapi.
          </p>

          <div data-hero-actions className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://app.jahris.id"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#12264F] px-7 text-sm font-bold text-white shadow-[0_10px_24px_rgba(18,38,79,.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1C3970]"
            >
              Coba JAHRIS <ArrowUpRight size={16}/>
            </a>
            <a
              href="#pricing"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[#D6E0EC] bg-white/65 px-7 text-sm font-bold text-[#12264F] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Lihat Harga <ArrowUpRight size={16}/>
            </a>
          </div>

          <div data-hero-stack className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-[#DCE4EE] pt-5 text-sm text-[#55627D]">
            <span className="flex items-center gap-2 transition-colors hover:text-[#DDD6FE]"><CheckCircle2 size={17} className="text-[#A78BFA]"/> Implementasi ±14 hari</span>
            <span className="flex items-center gap-2 transition-colors hover:text-[#DDD6FE]"><Smartphone size={17} className="text-[#A78BFA]"/> Laptop & smartphone</span>
            <span className="flex items-center gap-2 transition-colors hover:text-[#DDD6FE]"><ShieldCheck size={17} className="text-[#A78BFA]"/> Berbasis web</span>
          </div>
        </Reveal>

        <div data-hero-visual className="relative mx-auto w-full max-w-[1080px]">
          <Image
            src="/images/hero/Hero1-hd.png"
            alt="Tampilan terintegrasi dashboard JAHRIS"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 1024px) 94vw, 1080px"
            className="h-auto w-full object-contain mix-blend-multiply"
          />
        </div>
      </Container>
    </section>
  )
}


