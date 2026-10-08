import Image from 'next/image'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { Container } from '../ui'

const linkClass = 'text-[13px] leading-6 text-[#6E6E73] transition-colors hover:text-[#12264F]'
const headingClass = 'text-[13px] font-semibold text-[#1D1D1F]'

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-[#D2D2D7] bg-[#F5F5F7]/90 text-[#6E6E73] backdrop-blur-xl">
      <Container className="py-9 sm:py-11">
        <div className="max-w-5xl text-[12px] leading-5 text-[#6E6E73]">
          <p>JAHRIS membantu perusahaan mengelola data karyawan, absensi, payroll, dan tugas dalam satu sistem kerja yang terhubung.</p>
          <p className="mt-1.5">Butuh bantuan memilih konfigurasi? Hubungi tim JAHRIS untuk konsultasi sesuai kebutuhan perusahaan Anda.</p>
        </div>

        <div className="mt-5 grid gap-8 border-t border-[#D2D2D7] pt-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <a href="#home" className="inline-flex" aria-label="Kembali ke beranda JAHRIS">
              <Image src="/jahris-logo.png" alt="JAHRIS" width={190} height={39} className="h-auto w-[132px]" />
            </a>
            <p className="mt-3 max-w-[230px] text-[13px] leading-6 text-[#6E6E73]">Platform manajemen SDM dari PT JAXER Group Indonesia.</p>
            <a href="https://app.jahris.id" target="_blank" rel="noreferrer" className={`mt-3 inline-flex items-center gap-1.5 ${linkClass}`}>
              Buka aplikasi <ArrowUpRight size={14} />
            </a>
          </div>

          <div>
            <h3 className={headingClass}>Jelajahi</h3>
            <div className="mt-2 grid gap-1">
              <a href="#features" className={linkClass}>Fitur</a>
              <a href="#benefits" className={linkClass}>Keunggulan</a>
              <a href="#dashboard" className={linkClass}>Dashboard</a>
              <a href="#pricing" className={linkClass}>Harga</a>
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Hubungi kami</h3>
            <div className="mt-2 grid gap-1">
              <a href="mailto:hrmanagementjaxer@gmail.com" className={`${linkClass} break-all`}>hrmanagementjaxer@gmail.com</a>
              <a href="tel:+6281511496687" className={linkClass}>+62 815 1149 6687</a>
              <p className={linkClass}>Cempaka Putih, Jakarta Pusat</p>
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Ikuti JAHRIS</h3>
            <div className="mt-2 grid gap-1">
              <a href="https://instagram.com/jahris.id" target="_blank" rel="noreferrer" className={linkClass}>Instagram</a>
              <a href="https://wa.me/6281511496687" target="_blank" rel="noreferrer" className={linkClass}>WhatsApp</a>
              <a href="mailto:hrmanagementjaxer@gmail.com" className={linkClass}>Email</a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#D2D2D7] pt-4 text-[12px] text-[#6E6E73]">
          <span>© 2026 PT JAXER Group Indonesia. Hak cipta dilindungi.</span>
          <span className="inline-flex items-center gap-1.5"><Mail size={13} /> Dukungan JAHRIS <Phone size={13} className="ml-2" /> Senin–Jumat</span>
        </div>
      </Container>
    </footer>
  )
}
