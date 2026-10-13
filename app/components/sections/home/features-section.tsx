import { BarChart3, CheckCircle2, CircleDollarSign, Database, Globe, Puzzle, Shield, Sparkles, Users, Workflow } from 'lucide-react'
import { Reveal } from '../../layout/navbar'
import { Container } from '../../shared/ui'
import { modules } from './data'
export function FeaturesSection() {
  const badges = [
    { icon: Puzzle, title: 'Desain Modular', desc: 'Aktifkan hanya fitur yang dibutuhkan.' },
    { icon: Workflow, title: 'Otomatisasi Alur', desc: 'Notifikasi & rekap berjalan otomatis.' },
    { icon: Globe, title: 'Multi Perangkat', desc: 'Bisa dibuka di laptop & smartphone.' },
    { icon: Database, title: 'Rekap Real-time', desc: 'Data langsung muncul di dashboard.' },
    { icon: Shield, title: 'Keamanan Berlapis', desc: 'Enkripsi & backup data rutin.' },
    { icon: Sparkles, title: 'UI Ramah Pengguna', desc: 'Karyawan cepat beradaptasi.' },
  ]
  return (
    <section id="features" className="scroll-mt-24 relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="divider-glow absolute inset-x-0 top-0" />
      <div
        className="pointer-events-none absolute -left-24 top-32 h-[520px] w-[520px] animate-blob-drift-slow rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.22) 0%, transparent 60%)' }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-20 h-[520px] w-[720px] animate-blob-drift rounded-full blur-[140px]"
        style={{ background: 'radial-gradient(ellipse, rgba(96,165,250,0.16) 0%, rgba(124,58,237,0.18) 40%, transparent 65%)' }}
      />
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.2] tracking-[-.04em]">
              <span>Semua kebutuhan HR,</span>
              <br className="hidden sm:block"/>
              <span> dalam satu dashboard.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {badges.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="aurora-mini-card card-glow relative flex items-start gap-4 overflow-hidden rounded-2xl p-5 transition-all">
                <div aria-hidden="true" className="feature-pattern" />
                <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#E1E6ED] bg-white/80 text-[#12264F] shadow-sm">
                  <Icon size={17}/>
                </div>
                <div className="relative">
                  <h3 className="text-sm font-bold text-[#12264F]">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#69758D]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-7">
          <Reveal className="lg:col-span-7">
            <article className="glass-card card-glow h-full rounded-[28px] p-6 sm:p-8">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#E1E6ED] bg-white/80 text-[#12264F] shadow-sm">
                <Users size={22}/>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-[#FAF7FF]">Data Karyawan & Kehadiran</h3>
              <p className="mt-3 text-sm leading-7 text-[#C4B5FD]">Informasi personal, jabatan, status kerja, dan catatan kehadiran harian — tersimpan rapi dan mudah dicari.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {modules.slice(0, 2).map(m => {
                  const ModIcon = m.icon
                  return (
                    <div key={m.title} className="rounded-2xl border border-[#E3E8F0] bg-white/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.92)]">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#E1E6ED] bg-white/80 text-[#12264F] shadow-sm">
                        <ModIcon size={18}/>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[#FAF7FF]">{m.title}</p>
                        <p className="mt-0.5 text-xs text-[#B8A8DE]">{m.points.join(' · ')}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
      <div className="divider-glow absolute inset-x-0 bottom-0" />
    </section>
  )
}

export function WorkflowSection() {
  const payrollModules = [modules[3], modules[4], modules[6]]
  const requestModules = [modules[2], modules[5]]

  return (
    <section id="benefits" className="scroll-mt-24 bg-[#F7FAFE] py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.15] tracking-[-.04em] text-[#12264F]">
              Operasional HR, tanpa pekerjaan berulang.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#55627D]">
              Kelola penggajian, persetujuan, dan laporan dari alur yang saling terhubung.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className="glass-card h-full rounded-[28px] p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
                <div className="max-w-md">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#DCE5F2] bg-white text-[#2367D1] shadow-sm">
                    <CircleDollarSign size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-.03em] text-[#12264F]">Payroll dan performa, selalu terkendali.</h3>
                  <p className="mt-3 text-sm leading-7 text-[#55627D]">Data absensi mengalir ke payroll, sementara KPI dan laporan tetap siap saat dibutuhkan.</p>
                </div>
                <div className="rounded-2xl border border-[#DDE5F0] bg-white/70 px-4 py-3 text-right shadow-sm">
                  <p className="text-xs font-medium text-[#69758D]">Status proses</p>
                  <p className="mt-1 text-sm font-semibold text-[#16805C]">Terkoneksi otomatis</p>
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {payrollModules.map((module) => {
                  const Icon = module.icon
                  return (
                    <div key={module.title} className="rounded-2xl border border-[#E1E8F1] bg-white/75 p-4 shadow-sm">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#EDF4FF] text-[#2367D1]"><Icon size={17} /></div>
                      <p className="mt-4 text-sm font-semibold text-[#12264F]">{module.title}</p>
                      <p className="mt-1 text-xs leading-5 text-[#69758D]">{module.points.slice(0, 2).join(' · ')}</p>
                    </div>
                  )
                })}
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 lg:col-span-5">
            <Reveal>
              <article className="glass-card rounded-[28px] p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#DCE5F2] bg-white text-[#6A4CC7] shadow-sm"><Workflow size={20} /></div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#12264F]">Persetujuan tanpa kertas.</h3>
                    <p className="mt-2 text-sm leading-6 text-[#55627D]">Ajukan, tinjau, dan setujui dari satu alur yang jelas.</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {requestModules.map((module) => {
                    const Icon = module.icon
                    return (
                      <div key={module.title} className="flex items-center gap-3 rounded-xl border border-[#E1E8F1] bg-white/75 p-3">
                        <Icon size={17} className="text-[#6A4CC7]" />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#12264F]">{module.title}</p>
                          <p className="truncate text-xs text-[#69758D]">{module.points.slice(0, 2).join(' · ')}</p>
                        </div>
                        <CheckCircle2 size={17} className="ml-auto shrink-0 text-[#18A06E]" />
                      </div>
                    )
                  })}
                </div>
              </article>
            </Reveal>
            <Reveal>
              <article className="dark-surface rounded-[28px] border border-[#173B73] bg-[#12264F] p-6 text-white shadow-[0_18px_45px_rgba(18,38,79,.18)]">
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#C9DCFF]"><BarChart3 size={19} /></div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#D9E6FF]">Real-time</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">Laporan yang mudah dibaca.</h3>
                <p className="mt-2 text-sm leading-6 text-[#C9D6EB]">Ringkasan penting siap untuk keputusan berikutnya.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}


