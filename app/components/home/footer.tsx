import Image from 'next/image'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '../ui'

export function Footer() {
  return (
    <footer className="bg-[#120826] border-t border-[rgba(217,70,239,0.22)] text-[#B8A8DE]">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1.2fr_1fr]">
        <div>
          <a href="#home" className="inline-flex">
            <Image src="/jahris-logo.png" alt="JAHRIS" width={190} height={39} className="h-auto w-[156px]" />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-7 text-[#C4B5FD]">Sistem manajemen SDM berbasis web dari PT JAXER Group Indonesia.</p>
          <a href="https://app.jahris.id" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F5F3FF] hover:text-[#F0ABFC] transition-colors">
            Buka aplikasi <ArrowUpRight size={15}/>
          </a>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[.16em] text-[#FAF7FF]">JELAJAHI</h3>
          <div className="mt-5 grid gap-3 text-sm">
            <a href="#features" className="hover:text-white transition-colors">Fitur</a>
            <a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a>
            <a href="#implementation" className="hover:text-white transition-colors">Implementasi</a>
            <a href="#pricing" className="hover:text-white transition-colors">Harga</a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[.16em] text-[#FAF7FF]">KONTAK</h3>
          <div className="mt-5 grid gap-3 text-sm">
            <a href="mailto:hrmanagementjaxer@gmail.com" className="flex items-start gap-2 break-all hover:text-white transition-colors"><Mail size={15} className="mt-1 shrink-0 text-[#F0ABFC]"/>hrmanagementjaxer@gmail.com</a>
            <a href="tel:+6281511496687" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={15} className="text-[#F0ABFC]"/>+62 815 1149 6687</a>
            <span className="flex items-start gap-2"><MapPin size={15} className="mt-1 shrink-0 text-[#F0ABFC]"/>Cempaka Putih, Jakarta Pusat 10510</span>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[.16em] text-[#FAF7FF]">IKUTI KAMI</h3>
          <div className="mt-5 grid gap-3 text-sm">
            <a href="https://instagram.com/jahris.id" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram @jahris.id ↗</a>
            <a href="https://wa.me/6281511496687" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp ↗</a>
          </div>
        </div>
      </Container>

      <Container className="flex flex-wrap justify-between gap-4 border-t border-[rgba(217,70,239,0.22)] py-5 text-xs text-[#B8A8DE]">
        <span>© 2026 PT JAXER Group Indonesia. Hak cipta dilindungi.</span>
        <a href="#home" className="hover:text-white transition-colors">Kembali ke atas ↑</a>
      </Container>
    </footer>
  )
}
