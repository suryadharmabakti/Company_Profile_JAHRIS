import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../../layout/navbar'
import { Container } from '../../shared/ui'

const linkClass = 'text-[13px] leading-6 text-[#6E6E73] transition-colors hover:text-[#12264F]'
const headingClass = 'text-[13px] font-semibold text-[#1D1D1F]'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="h-full w-full">
      <defs>
        <linearGradient id="whatsapp-green" x1="72" y1="52" x2="448" y2="474" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5BD567" />
          <stop offset="1" stopColor="#237A2C" />
        </linearGradient>
      </defs>
      <circle cx="256" cy="256" r="256" fill="url(#whatsapp-green)" />
      <circle cx="256" cy="256" r="220" fill="#1D6C25" opacity=".58" />
      <path d="M146 368 267 247l147 147v82H255z" fill="#145B20" opacity=".48" />
      <circle cx="256" cy="256" r="116" fill="white" />
      <path fill="#277B31" d="M222 190c-7 0-15 2-20 8-8 9-11 22-7 35 10 34 43 69 78 84 12 5 27 3 36-6l14-14c4-4 4-10 0-14l-24-23c-4-4-10-4-14 0l-10 10c-4 4-10 5-15 2-14-8-27-21-35-36-3-5-2-11 2-15l10-10c4-4 4-10 0-14l-23-23c-3--3-7-4-12-4Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-[#D2D2D7] bg-[#F5F5F7]/90 text-[#6E6E73] backdrop-blur-xl">
      <Reveal variant="fade-in">
        <Container className="relative py-9 sm:py-11">
        <a
          href="https://wa.me/6281511496687"
          target="_blank"
          rel="noreferrer"
          aria-label="Hubungi JAHRIS melalui WhatsApp"
          className="whatsapp-float absolute right-8 top-8 h-12 w-12 rounded-full shadow-[0_8px_18px_rgba(29,29,31,.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12264F] sm:right-10 sm:top-10 lg:right-12"
        >
          <WhatsAppIcon />
        </a>
        <div className="max-w-5xl text-[12px] leading-5 text-[#6E6E73]">
          <p>JAHRIS membantu perusahaan mengelola data karyawan, absensi, payroll, dan tugas dalam satu sistem kerja yang terhubung.</p>
          <p className="mt-1.5">Butuh bantuan memilih konfigurasi? Hubungi tim JAHRIS untuk konsultasi sesuai kebutuhan perusahaan Anda.</p>
        </div>

        <div className="mt-5 grid gap-8 border-t border-[#D2D2D7] pt-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <a href="#home" className="inline-flex" aria-label="Kembali ke beranda JAHRIS">
              <Image src="/images/brand/logo.png" alt="JAHRIS" width={190} height={39} className="h-auto w-[132px]" />
            </a>
            <p className="mt-3 max-w-[230px] text-[13px] leading-6 text-[#6E6E73]">Platform manajemen SDM dari PT JAXER Group Indonesia.</p>
            <a href="https://app.jahris.id" target="_blank" rel="noreferrer" className={`mt-3 inline-flex items-center gap-1.5 ${linkClass}`}>Buka aplikasi <ArrowUpRight size={14} /></a>
          </div>

          <div>
            <h3 className={headingClass}>Jelajahi</h3>
            <div className="mt-2 grid gap-1">
              <a href="#features" className={linkClass}>Fitur</a>
              <a href="#benefits" className={linkClass}>Keunggulan</a>
              <a href="#dashboard" className={linkClass}>Antarmuka</a>
              <a href="#pricing" className={linkClass}>Harga</a>
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Hubungi kami</h3>
            <div className="mt-2 grid gap-1">
              <a href="mailto:support@jahris.id" className={`${linkClass} break-all`}>support@jahris.id</a>
              <p className={linkClass}>Cempaka Putih, Jakarta Pusat</p>
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Ikuti JAHRIS</h3>
            <div className="mt-2 grid gap-1">
              <a href="https://instagram.com/jahris.id" target="_blank" rel="noreferrer" className={linkClass}>Instagram</a>
              <a href="https://wa.me/6281511496687" target="_blank" rel="noreferrer" className={linkClass}>WhatsApp</a>
              <a href="mailto:support@jahris.id" className={linkClass}>Email</a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 border-t border-[#D2D2D7] pt-4 text-center text-[12px] text-[#6E6E73] sm:grid-cols-3 sm:items-center">
          <span className="sm:col-start-2">© 2026 PT JAXER Group Indonesia. Hak cipta dilindungi.</span>
        </div>
        </Container>
      </Reveal>
    </footer>
  )
}
