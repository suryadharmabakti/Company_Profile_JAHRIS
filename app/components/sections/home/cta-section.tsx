import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../../layout/navbar'
import { Container } from '../../shared/ui'

export function CtaSection() {
  return (
    <section className="noise-texture relative scroll-mt-24 overflow-hidden py-24 text-white sm:py-28 section-aurora-bg">
      <div className="divider-glow absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[600px] w-[600px] animate-blob-drift-slow rounded-full blur-[150px]" style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.30) 0%, rgba(124,58,237,0.16) 40%, transparent 65%)' }} />
      <div className="pointer-events-none absolute -top-20 -right-20 h-[600px] w-[600px] animate-blob-drift rounded-full blur-[150px]" style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.28) 0%, rgba(96,165,250,0.14) 45%, transparent 65%)' }} />
      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>

          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-.05em]">
            <span className="text-gradient-aurora animate-aurora">Buat pengelolaan SDM</span><br/>
            <span className="text-[#FAF7FF]">lebih sederhana.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#C4B5FD]">
            Ceritakan kebutuhan perusahaan Anda. Tim JAHRIS siap membantu memilih konfigurasi dan paket yang tepat.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hrmanagementjaxer@gmail.com?subject=Konsultasi%20JAHRIS"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[rgba(244,114,182,0.38)] bg-gradient-to-br from-[rgba(217,70,239,0.18)] to-[rgba(96,165,250,0.12)] px-7 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[rgba(244,114,182,0.60)] hover:shadow-[0_10px_34px_rgba(217,70,239,0.28)]"
            >
              Jadwalkan konsultasi <ArrowUpRight size={16}/>
            </a>
            <a
              href="https://wa.me/6281511496687"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[rgba(244,114,182,0.38)] bg-gradient-to-br from-[rgba(217,70,239,0.18)] to-[rgba(96,165,250,0.12)] px-7 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[rgba(244,114,182,0.60)] hover:shadow-[0_10px_34px_rgba(217,70,239,0.28)]"
            >
              Hubungi WhatsApp <ArrowUpRight size={16}/>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="apple-media-frame">
            <div className="relative h-[320px] overflow-hidden rounded-[25px] bg-[#1a0d3a] sm:h-[380px]">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[rgba(244,114,182,0.45)] to-transparent" />
              <Image
                src="/images/proposal/p5-3.jpg"
                alt="Penggunaan aplikasi JAHRIS melalui smartphone"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center"
              />
              <div className="product-caption absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a0d3a] via-[#1a0d3a]/80 to-transparent px-6 py-6 pt-16 text-sm font-semibold sm:px-7">
                Akses JAHRIS di mana pun tim bekerja.
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}


