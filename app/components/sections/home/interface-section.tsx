import { Check, Database, LayoutDashboard, Users, Workflow } from 'lucide-react'
import { Reveal } from '../../layout/navbar'
import { Container } from '../../shared/ui'
import { ProductShowcase } from '../product/product-showcase'

export function InterfaceSection() {
  const cards = [
    {
      icon: Database,
      title: 'Repositori Data Karyawan',
      desc: 'Simpan, kelola, dan perbarui data karyawan beserta dokumen pendukung dalam struktur yang rapi dan mudah dicari.',
      bullets: ['Profil lengkap per karyawan', 'Dokumen & berkas terlampir', 'Riwayat perubahan tercatat'],
    },
    {
      icon: LayoutDashboard,
      title: 'Overview & Ringkasan',
      desc: 'Monitor metrik penting dari dashboard utama Ã¢â‚¬â€ absensi harian, cuti, payroll, sampai progress KPI seluruh tim.',
      bullets: ['Visualisasi data metrik', 'Filter periode & cabang', 'Ekspor Excel/PDF siap kirim'],
    },
    {
      icon: Workflow,
      title: 'Satu Sumber Data Terpercaya',
      desc: 'Semua modul menggunakan sumber data yang sama. Laporan dan keputusan HR selalu akurat dan konsisten.',
      bullets: ['Tidak ada entry data ganda', 'Perubahan auto sinkron', 'Audit trail perubahan'],
    },
    {
      icon: Users,
      title: 'Kolaborasi Lintas Tim',
      desc: 'Bagikan informasi pekerjaan, pantau progress lintas departemen, dan evaluasi bersama dari satu platform.',
      bullets: ['Notifikasi real-time', 'Status pekerjaan transparan', 'Akses per jabatan aman'],
    },
  ]
  return (
    <section id="dashboard" className="scroll-mt-24 relative overflow-hidden bg-white py-20 text-[#12264F] sm:py-[120px]">
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-[680px] text-center">
            <div className="hidden mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[rgba(96,165,250,0.45)] bg-gradient-to-br from-[#60A5FA] via-[#A78BFA] to-[#4C1D95] text-[#FAF7FF] shadow-[0_0_50px_rgba(96,165,250,0.30)] animate-aurora">
              <LayoutDashboard size={24}/>
            </div>
            <p className="hidden mt-5 text-[11px] font-bold uppercase tracking-[.2em] text-gradient-aurora">Manajemen Visual JAHRIS</p>
            <h2 className="font-display text-[clamp(30px,4vw,40px)] font-semibold leading-[1.15] tracking-[-.02em] text-[#12264F]">
              Satu antarmuka untuk HR, keuangan, dan tugas.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8">
            <ProductShowcase />
          </div>
        </Reveal>

        <div className="hidden mt-14 grid gap-6 lg:grid-cols-2">
          {cards.map(({ icon: Icon, title, desc, bullets }, idx) => (
            <Reveal key={title}>
              <article className="aurora-card-dark top-edge-highlight card-glow h-full rounded-3xl p-7 backdrop-blur-md" style={idx % 2 ? undefined : undefined}>
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgba(217,70,239,0.40)] bg-gradient-to-br from-[#D946EF] via-[#A78BFA] to-[#6D28D9] text-[#15092e] shadow-[0_0_40px_rgba(217,70,239,0.24)]">
                  <Icon size={22}/>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-[#FAF7FF]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#C4B5FD]">{desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {bullets.map(b => (
                    <li key={b} className="flex items-start gap-3 text-sm text-[#EDE9FE]">
                      <Check size={17} className="mt-0.5 shrink-0 text-[#F0ABFC]"/>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}


