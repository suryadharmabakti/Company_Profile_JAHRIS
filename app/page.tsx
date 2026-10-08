import Image from 'next/image'
import { ArrowUpRight, ArrowRight, BarChart3, CalendarCheck2, Check, CheckCircle2, CircleDollarSign, Clock3, Fingerprint, LayoutDashboard, Mail, MapPin, Network, Phone, ShieldCheck, Smartphone, Users, Wallet, Puzzle, Boxes, Workflow, Database, Shield, Globe, Sparkles, Quote, User } from 'lucide-react'
import { Navbar, Reveal, Counter } from './components/interactive'
import { MotionSystem } from './components/motion-system'
import { ProductShowcase } from './components/product-showcase'
import { Container, Eyebrow } from './components/ui'
import { benefits, industries, modules, pricing, steps, testimonials } from './components/home/data'
import { Footer } from './components/home/footer'

function Hero() {
  return (
    <section id="home" className="noise-texture relative min-h-[100svh] overflow-hidden bg-[linear-gradient(145deg,#FFFFFF_0%,#F1F7FF_48%,#DCEBFF_100%)] text-[#0B1F4F]">
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

      <Container className="relative grid min-h-[100svh] items-center gap-12 pb-20 pt-32 sm:pt-36 lg:grid-cols-[.95fr_1.05fr]">
        <Reveal>
          <Eyebrow>JAHRIS / PLATFORM HR TERPADU</Eyebrow>

          <h1 className="mt-6 max-w-2xl font-display text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[1.08] tracking-[-.045em]">
            <span className="block overflow-hidden"><span data-hero-line className="block text-[#0B1F4F]">Kelola tim.</span></span>
            <span className="block overflow-hidden"><span data-hero-line className="block text-[#0B1F4F]">Bekerja lebih</span></span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block text-gradient-navy-blue">
                terarah.
              </span>
            </span>
          </h1>

          <p data-hero-description className="mt-6 max-w-xl text-base leading-8 text-[#466384] sm:text-lg">
            JAHRIS menyatukan data karyawan, absensi, cuti, payroll, kinerja, keuangan, dan tugas dalam satu sistem manajemen SDM berbasis web.
          </p>

          <div data-hero-actions className="mt-7 flex flex-wrap gap-4">
            <a
              href="https://app.jahris.id"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-br from-[#F8F5FF] via-[#E9DFFF] to-[#C4B5FD] px-7 text-sm font-extrabold text-[#1E0F45] shadow-[0_8px_30px_rgba(167,139,250,0.22),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(255,255,255,0.28)]"
            >
              Coba JAHRIS <ArrowUpRight size={16}/>
            </a>
            <a
              href="#pricing"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[rgba(167,139,250,0.35)] bg-gradient-to-br from-[#3B1A7E] to-[#5B21B6] px-7 text-sm font-bold text-white shadow-[0_4px_20px_rgba(124,58,237,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(196,181,253,0.55)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.40)]"
            >
              Lihat Harga <ArrowUpRight size={16}/>
            </a>
          </div>

          <div data-hero-stack className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[rgba(11,31,79,0.12)] pt-5 text-sm text-[#466384]">
            <span className="flex items-center gap-2 transition-colors hover:text-[#DDD6FE]"><CheckCircle2 size={17} className="text-[#A78BFA]"/> Implementasi ±14 hari</span>
            <span className="flex items-center gap-2 transition-colors hover:text-[#DDD6FE]"><Smartphone size={17} className="text-[#A78BFA]"/> Laptop & smartphone</span>
            <span className="flex items-center gap-2 transition-colors hover:text-[#DDD6FE]"><ShieldCheck size={17} className="text-[#A78BFA]"/> Berbasis web</span>
          </div>
        </Reveal>

        <div data-hero-visual className="relative mx-auto w-full max-w-[980px] px-1 py-4 sm:px-3 lg:scale-[1.4]">
          <div className="pointer-events-none absolute inset-[12%] -z-10 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,169,0.18),rgba(96,165,250,0.12)_48%,transparent_72%)] blur-[58px]" />
          <Image
            src="/hero-device-collage.png"
            alt="Rangkaian dashboard dan perangkat JAHRIS"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 1024px) 94vw, 760px"
            className="h-auto w-full object-contain drop-shadow-[0_24px_35px_rgba(11,31,79,0.16)]"
          />
        </div>
      </Container>
    </section>
  )
}

function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-16 text-white section-aurora-bg">
      <div className="divider-glow absolute inset-x-0 top-0" />
      <Container className="relative z-10">
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[.22em] text-gradient-aurora">
            Sudah dipercaya oleh tim HR di berbagai industri
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-5">
            {industries.map((name) => (
              <div key={name} className="flex items-center justify-center gap-2 py-2 opacity-80 transition-all hover:opacity-100 hover:-translate-y-0.5">
                <Boxes size={18} className="text-[#C4B5FD]" />
                <span className="font-display text-base font-bold tracking-[-.02em] text-[#EDE9FE]">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            ['7', 'modul dalam satu platform'],
            ['14', 'hari estimasi implementasi'],
            ['100', '% berbasis web'],
            ['1', 'ruang kerja terpadu'],
          ].map(([value, label]) => (
            <div key={label} className="border-l border-[rgba(217,70,239,0.28)] pl-6 transition-all hover:border-[rgba(244,114,182,0.55)]">
              <p className="font-display text-3xl font-extrabold tracking-[-.05em] text-gradient-aurora sm:text-4xl">
                <Counter to={Number(value)}/>{value === '100' ? '%' : ''}
              </p>
              <p className="mt-1.5 text-xs text-[#B8A8DE] sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </Container>
      <div className="divider-glow absolute inset-x-0 bottom-0" />
    </section>
  )
}

function SyncSection() {
  const features = [
    { icon: Database, title: 'Pusat Data', desc: 'Seluruh data karyawan terkonsolidasi — tidak tersebar di spreadsheet terpisah.' },
    { icon: Sparkles, title: 'Sinkron Otomatis', desc: 'Satu perubahan langsung diperbarui ke semua modul — absensi, payroll, kinerja terhubung.' },
    { icon: Shield, title: 'Akses Terkendali', desc: 'Hak akses per departemen & per jabatan — data sensitif tetap terlindungi.' },
  ]
  return (
    <section className="relative overflow-hidden py-24 text-white sm:py-28 section-aurora-alt">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[480px] w-[800px] -translate-x-1/2 blur-[120px]" style={{ background: 'radial-gradient(ellipse, rgba(217,70,239,0.22) 0%, rgba(96,165,250,0.10) 45%, transparent 65%)' }} />
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Sistem SDM Terintegrasi</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.2] tracking-[-.04em]">
              <span className="text-[#F5F3FF]">Data karyawan dan proses HR,</span>
              <br className="hidden sm:block"/>
              <span className="text-gradient-aurora"> selalu sinkron dalam JAHRIS.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <Reveal key={title}>
              <div className="feature-card-purple top-edge-highlight card-glow rounded-2xl p-6 backdrop-blur-md">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[rgba(217,70,239,0.35)] bg-gradient-to-br from-[#4C1D95] via-[#6D28D9] to-[#1E0F45] text-[#F5F3FF] shadow-[0_0_24px_rgba(217,70,239,0.22)]">
                  <Icon size={19}/>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-[#FAF7FF]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#C4B5FD]">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] blur-[50px]" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.28), transparent 60%)' }} />
            <div className="glass-card rounded-[28px] p-3 sm:p-5">
              <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#120826]">
                <Image
                  src="/proposal/p7-2.png"
                  alt="Tampilan board Kanban JAHRIS"
                  width={1800}
                  height={1000}
                  className="h-[300px] w-full object-cover object-top sm:h-[440px]"
                />
                <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(18,8,38,0.72) 100%)' }} />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function ModulesSection() {
  const badges = [
    { icon: Puzzle, title: 'Desain Modular', desc: 'Aktifkan hanya fitur yang dibutuhkan.' },
    { icon: Workflow, title: 'Otomatisasi Alur', desc: 'Notifikasi & rekap berjalan otomatis.' },
    { icon: Globe, title: 'Multi Perangkat', desc: 'Bisa dibuka di laptop & smartphone.' },
    { icon: Database, title: 'Rekap Real-time', desc: 'Data langsung muncul di dashboard.' },
    { icon: Shield, title: 'Keamanan Berlapis', desc: 'Enkripsi & backup data rutin.' },
    { icon: Sparkles, title: 'UI Ramah Pengguna', desc: 'Karyawan cepat beradaptasi.' },
  ]
  return (
    <section id="features" className="scroll-mt-24 relative overflow-hidden py-24 text-white sm:py-28 section-aurora-bg">
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
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[rgba(244,114,182,0.45)] bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#1E0F45] text-[#F5F3FF] shadow-[0_0_50px_rgba(217,70,239,0.32)] animate-aurora">
              <Boxes size={24}/>
            </div>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[.2em] text-gradient-aurora">Modul HR JAHRIS</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.2] tracking-[-.04em]">
              <span className="text-[#FAF7FF]">7 modul HR yang saling terhubung,</span>
              <br className="hidden sm:block"/>
              <span className="text-gradient-aurora"> kelola dari satu dashboard.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {badges.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="aurora-mini-card top-edge-highlight card-glow flex items-start gap-4 rounded-2xl p-5 transition-all">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[rgba(244,114,182,0.35)] bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#3B1A7E] text-[#F5F3FF] shadow-[0_0_24px_rgba(167,139,250,0.25)]">
                  <Icon size={17}/>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#FAF7FF]">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#C4B5FD]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-7">
          <Reveal className="lg:col-span-3">
            <article className="aurora-card-dark top-edge-highlight card-glow h-full rounded-3xl p-7 backdrop-blur-md">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgba(244,114,182,0.40)] bg-gradient-to-br from-[#6D28D9] via-[#A78BFA] to-[#D946EF] text-[#15092e] shadow-[0_0_40px_rgba(217,70,239,0.30)]">
                <Users size={22}/>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-[#FAF7FF]">Data Karyawan & Kehadiran</h3>
              <p className="mt-3 text-sm leading-7 text-[#C4B5FD]">Informasi personal, jabatan, status kerja, dan catatan kehadiran harian — tersimpan rapi dan mudah dicari.</p>
              <div className="mt-6 space-y-3">
                {modules.slice(0, 2).map(m => {
                  const ModIcon = m.icon
                  return (
                    <div key={m.title} className="aurora-mini-card top-edge-highlight flex items-center gap-4 rounded-xl p-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#2D1B69] text-[#F5F3FF] shadow-[0_0_18px_rgba(167,139,250,0.22)]">
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
          <Reveal className="lg:col-span-4">
            <article className="aurora-card-dark top-edge-highlight card-glow h-full rounded-3xl p-7 backdrop-blur-md">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgba(96,165,250,0.45)] bg-gradient-to-br from-[#60A5FA] via-[#A78BFA] to-[#6D28D9] text-[#15092e] shadow-[0_0_40px_rgba(96,165,250,0.28)]">
                <LayoutDashboard size={22}/>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-[#FAF7FF]">Payroll, Kinerja, dan Laporan</h3>
              <p className="mt-3 text-sm leading-7 text-[#C4B5FD]">Hitung gaji otomatis berdasarkan absensi, pantau KPI, dan ekspor laporan ke Excel/PDF dalam satu klik.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {modules.slice(3).map(m => {
                  const ModIcon = m.icon
                  return (
                    <div key={m.title} className="aurora-mini-card top-edge-highlight flex items-start gap-3 rounded-xl p-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#2D1B69] text-[#F5F3FF] shadow-[0_0_18px_rgba(167,139,250,0.22)]">
                        <ModIcon size={18}/>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[#FAF7FF]">{m.title}</p>
                        <p className="mt-0.5 text-xs leading-5 text-[#B8A8DE]">{m.points.join(' · ')}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <article className="aurora-card-dark top-edge-highlight card-glow h-full rounded-3xl p-7 backdrop-blur-md">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgba(244,114,182,0.45)] bg-gradient-to-br from-[#F472B6] via-[#A78BFA] to-[#6D28D9] text-[#15092e] shadow-[0_0_40px_rgba(244,114,182,0.30)] animate-aurora">
                <Workflow size={22}/>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-[#FAF7FF]">Cuti, izin, dan reimbursement — tanpa kertas.</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#C4B5FD]">Karyawan ajukan sendiri melalui akunnya, atasan setujui lewat notifikasi. Semua alur terdokumentasi otomatis di sistem.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[modules[2], modules[5], modules[6]].map(m => {
                  const ModIcon = m.icon
                  return (
                    <div key={m.title} className="aurora-mini-card top-edge-highlight card-glow rounded-2xl p-5">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#2D1B69] text-[#F5F3FF] shadow-[0_0_18px_rgba(167,139,250,0.22)]">
                        <ModIcon size={18}/>
                      </div>
                      <p className="mt-4 text-sm font-bold text-[#FAF7FF]">{m.title}</p>
                      <p className="mt-1.5 text-xs leading-5 text-[#B8A8DE]">{(m as any).copy || m.points.join(' · ')}</p>
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

function TestimonialBlock({ quote, name, role, company }: { quote: string; name: string; role: string; company: string }) {
  return (
    <Reveal>
      <figure className="mx-auto max-w-3xl px-4 py-14 text-center">
        <Quote size={28} className="mx-auto text-[#A78BFA] opacity-60"/>
        <blockquote className="mt-5 font-display text-lg font-semibold leading-[1.6] tracking-[-.01em] text-[#E8DEFF] sm:text-xl">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center justify-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#3B1A7E] to-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.35)]">
            <User size={16}/>
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-[#F0EAFF]">{name}</p>
            <p className="text-xs text-[#9D8CC4]">{role} · {company}</p>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  )
}

function OperationsSection() {
  const badges = [
    { icon: Globe, title: 'Akses di Mana Saja', desc: 'Buka dashboard di laptop atau smartphone kapan pun.' },
    { icon: Puzzle, title: 'Integrasi Fleksibel', desc: 'Sesuaikan dengan alur & kebijakan HR perusahaan Anda.' },
    { icon: Shield, title: 'Privasi Terjamin', desc: 'Data gaji & kinerja hanya untuk pihak berwenang.' },
    { icon: Workflow, title: 'Alur Persetujuan', desc: 'Cuti, izin, klaim langsung sampai ke atasan tepat.' },
    { icon: Database, title: 'Backup Rutin', desc: 'Data dicadangkan tiap hari — selalu aman tersedia.' },
    { icon: Sparkles, title: 'Branding Sendiri', desc: 'Logo, warna, nama perusahaan Anda di aplikasi.' },
  ]
  return (
    <section className="relative scroll-mt-24 overflow-hidden py-24 text-white sm:py-28 section-aurora-alt">
      <div className="pointer-events-none absolute left-1/3 top-0 h-[440px] w-[700px] -translate-x-1/2 blur-[130px]" style={{ background: 'radial-gradient(ellipse, rgba(244,114,182,0.22) 0%, rgba(217,70,239,0.14) 35%, transparent 65%)' }} />
      <div className="divider-glow absolute inset-x-0 top-0" />
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[rgba(96,165,250,0.45)] bg-gradient-to-br from-[#60A5FA] via-[#A78BFA] to-[#4C1D95] text-[#FAF7FF] shadow-[0_0_50px_rgba(96,165,250,0.28)] animate-aurora">
              <Sparkles size={24}/>
            </div>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[.2em] text-gradient-aurora">Disesuaikan untuk Perusahaan Anda</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.2] tracking-[-.04em]">
              <span className="text-[#FAF7FF]">Hubungkan kebutuhan HR perusahaan Anda</span>
              <br className="hidden sm:block"/>
              <span className="text-gradient-aurora"> dengan JAHRIS.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {badges.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="aurora-mini-card top-edge-highlight card-glow flex items-start gap-4 rounded-2xl p-5 transition-all">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[rgba(244,114,182,0.35)] bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#3B1A7E] text-[#F5F3FF] shadow-[0_0_24px_rgba(167,139,250,0.25)]">
                  <Icon size={17}/>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#FAF7FF]">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#C4B5FD]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="aurora-card-dark top-edge-highlight card-glow rounded-3xl p-7 backdrop-blur-md">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgba(217,70,239,0.45)] bg-gradient-to-br from-[#D946EF] via-[#A78BFA] to-[#4C1D95] text-[#15092e] shadow-[0_0_40px_rgba(217,70,239,0.28)]">
                <Puzzle size={22}/>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-[#FAF7FF]">Sesuaikan dengan alur HR Anda</h3>
              <p className="mt-3 text-sm leading-7 text-[#C4B5FD]">Atur struktur organisasi, level jabatan, aturan cuti, dan komponen payroll agar sesuai kebijakan internal perusahaan.</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {['Karyawan', 'Atasan', 'HR', 'Finance', 'Admin', 'Direksi'].map(r => (
                  <div key={r} className="aurora-mini-card top-edge-highlight rounded-xl py-2.5 text-center text-xs font-bold text-[#F5F3FF]">
                    {r}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article className="aurora-card-dark top-edge-highlight card-glow rounded-3xl p-7 backdrop-blur-md">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgba(96,165,250,0.45)] bg-gradient-to-br from-[#60A5FA] via-[#7C3AED] to-[#4C1D95] text-[#FAF7FF] shadow-[0_0_40px_rgba(96,165,250,0.28)]">
                <Users size={22}/>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-[#FAF7FF]">Siap untuk multi-perusahaan & multi-cabang</h3>
              <p className="mt-3 text-sm leading-7 text-[#C4B5FD]">Satu sistem untuk mengelola seluruh entitas bisnis. Laporan per perusahaan, per cabang, atau konsolidasi tersedia siap pakai.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Konsolidasi Laporan', 'Shared Database', 'Per-Company Setup', 'Multi Cabang'].map(t => (
                  <span key={t} className="rounded-full border border-[rgba(244,114,182,0.32)] bg-gradient-to-br from-[rgba(124,58,237,0.30)] to-[rgba(217,70,239,0.20)] px-4 py-2 text-xs font-bold text-[#F5F3FF] shadow-[0_0_18px_rgba(217,70,239,0.16)]">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal className="lg:col-span-2">
            <article className="aurora-card-dark top-edge-highlight card-glow h-full rounded-3xl p-7 backdrop-blur-md">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgba(244,114,182,0.45)] bg-gradient-to-br from-[#F472B6] via-[#A78BFA] to-[#6D28D9] text-[#15092e] shadow-[0_0_40px_rgba(244,114,182,0.28)] animate-aurora">
                <Globe size={22}/>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-[#FAF7FF]">Aplikasi web — akses perangkat apa saja tanpa install.</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#C4B5FD]">Karyawan cukup membuka browser di laptop atau smartphone, login dengan akun masing-masing — semua tersedia tanpa instalasi aplikasi tambahan.</p>
              <div className="mt-7">
                <div className="glass-card top-edge-highlight rounded-[28px] p-3">
                  <div className="relative aspect-[21/9] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#1a0d3a]">
                    <Image
                      src="/proposal/p5-5.png"
                      alt="Tampilan dashboard JAHRIS di laptop"
                      fill
                      sizes="(max-width: 1024px) 100vw, 900px"
                      className="scale-[1.4] object-contain"
                    />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
      <div className="divider-glow absolute inset-x-0 bottom-0" />
    </section>
  )
}

function NetworkSection() {
  const centerMod = { icon: LayoutDashboard, title: 'PUSAT DATA', subtitle: 'Satu sumber kebenaran seluruh HR' }
  const outerCards = modules.map((m, idx) => ({ ...m, order: idx + 1 }))
  const orderMap = { sm: [1, 2, 3, 4, 5, 6, 7] as const }
  void orderMap
  const flows = [
    { from: 'Absensi', to: 'Payroll', label: 'Data kehadiran → hitung gaji otomatis' },
    { from: 'Cuti & Izin', to: 'Payroll', label: 'Izin → potongan / tunjangan disesuaikan' },
    { from: 'Kinerja', to: 'Dashboard', label: 'Hasil evaluasi → muncul di laporan' },
    { from: 'Reimbursement', to: 'Keuangan', label: 'Klaim → masuk ke laporan keuangan' },
  ]
  const CenterIcon = centerMod.icon
  const slots = [
    { card: outerCards[0], wrapperOrder: 'order-2 sm:order-1', },
    { card: outerCards[1], wrapperOrder: 'order-3 sm:order-2', },
    { card: outerCards[2], wrapperOrder: 'order-4', },
    { card: outerCards[3], wrapperOrder: 'order-5', },
    { card: outerCards[4], wrapperOrder: 'order-6 col-span-2 sm:col-span-1', },
    { card: outerCards[5], wrapperOrder: 'order-7 sm:col-span-1', },
    { card: outerCards[6], wrapperOrder: 'order-8 col-span-2 sm:col-span-1', },
  ]
  return (
    <section className="relative overflow-hidden py-24 text-white sm:py-28 section-aurora-bg">
      <div className="divider-glow absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute -left-24 top-24 h-[460px] w-[460px] animate-blob-drift-slow rounded-full blur-[130px]" style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.22) 0%, transparent 60%)' }} />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-[520px] w-[520px] animate-blob-drift rounded-full blur-[130px]" style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.18) 0%, rgba(124,58,237,0.14) 40%, transparent 60%)' }} />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[480px] w-[800px] -translate-x-1/2 blur-[140px]" style={{ background: 'radial-gradient(ellipse, rgba(244,114,182,0.18) 0%, rgba(217,70,239,0.12) 40%, transparent 60%)' }} />
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[rgba(217,70,239,0.45)] bg-gradient-to-br from-[#D946EF] via-[#A78BFA] to-[#60A5FA] text-[#15092e] shadow-[0_0_50px_rgba(217,70,239,0.30)] animate-aurora">
              <Network size={24}/>
            </div>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[.2em] text-gradient-aurora">Satu Jaringan Terintegrasi</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.2] tracking-[-.04em]">
              <span className="text-[#FAF7FF]">Seluruh modul HR terhubung</span>
              <br className="hidden sm:block"/>
              <span className="text-gradient-aurora"> dalam satu jaringan JAHRIS.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#C4B5FD]">
              Tidak ada lagi data tercecer. Satu perubahan di sebuah modul otomatis mengalir ke modul terkait, dengan pusat data sebagai inti tunggal.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14">
            <div className="aurora-card-dark top-edge-highlight card-glow relative overflow-hidden rounded-[32px] p-8 backdrop-blur-md sm:p-12">
              <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(217,70,239,0.22), rgba(96,165,250,0.12) 40%, transparent 65%)' }} />

              <div className="relative mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr]">
                {slots.map((s, i) => {
                  const ModIcon = s.card.icon
                  return (
                    <div key={s.card.title + '-' + i} className={s.wrapperOrder}>
                      <div className="aurora-mini-card top-edge-highlight card-glow relative rounded-2xl p-4 sm:p-5">
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#2D1B69] text-[#F5F3FF] shadow-[0_0_18px_rgba(167,139,250,0.22)]">
                            <ModIcon size={18}/>
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-[#FAF7FF]">{s.card.title}</p>
                            <p className="truncate text-[11px] text-[#B8A8DE]">{s.card.points[0]}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}

                <div className="order-1 sm:order-3 sm:col-span-1 row-span-2 sm:row-span-2 sm:my-auto">
                  <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center rounded-3xl border-2 border-[rgba(244,114,182,0.50)] bg-gradient-to-br from-[rgba(217,70,239,0.55)] via-[rgba(124,58,237,0.45)] to-[rgba(76,29,149,0.55)] p-6 text-center shadow-[0_0_80px_rgba(217,70,239,0.32)] sm:p-8 animate-aurora" style={{ backgroundSize: '200% 200%' }}>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#FDF4FF] via-[#F0ABFC] to-[#C4B5FD] text-[#15092e] shadow-md">
                      <CenterIcon size={24}/>
                    </div>
                    <p className="mt-5 text-[10px] font-black uppercase tracking-[.22em] text-[#FAF5FF]">{centerMod.title}</p>
                    <p className="mt-2 text-sm font-bold text-[#FAF7FF]">{centerMod.subtitle}</p>
                    <div className="mx-auto mt-5 grid w-full max-w-[240px] grid-cols-4 gap-1.5">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="h-1.5 rounded-full bg-gradient-to-r from-[#F472B6] via-[#E9D5FF] to-[#60A5FA] opacity-80"/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {flows.map(f => (
            <Reveal key={f.label}>
              <div className="aurora-mini-card top-edge-highlight card-glow flex flex-col gap-3 rounded-2xl p-4 backdrop-blur sm:flex-row sm:items-center sm:gap-4 sm:px-5 sm:py-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-[rgba(244,114,182,0.35)] bg-gradient-to-br from-[rgba(124,58,237,0.35)] to-[rgba(217,70,239,0.25)] px-3 py-1.5 text-xs font-bold text-[#F5F3FF] shadow-[0_0_18px_rgba(217,70,239,0.16)]">{f.from}</span>
                  <ArrowRight size={18} className="shrink-0 text-[#F0ABFC]"/>
                  <span className="rounded-xl border border-[rgba(96,165,250,0.35)] bg-gradient-to-br from-[rgba(96,165,250,0.30)] to-[rgba(124,58,237,0.22)] px-3 py-1.5 text-xs font-bold text-[#F5F3FF] shadow-[0_0_18px_rgba(96,165,250,0.14)]">{f.to}</span>
                </div>
                <p className="text-xs leading-5 text-[#C4B5FD]">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
      <div className="divider-glow absolute inset-x-0 bottom-0" />
    </section>
  )
}

function ManagementSection() {
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
      desc: 'Monitor metrik penting dari dashboard utama — absensi harian, cuti, payroll, sampai progress KPI seluruh tim.',
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
    <section id="dashboard" className="scroll-mt-24 relative overflow-hidden py-24 text-white sm:py-28 section-aurora-alt">
      <div className="divider-glow absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute left-1/4 top-10 h-[500px] w-[500px] animate-blob-drift-slow rounded-full blur-[130px]" style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.22) 0%, transparent 60%)' }} />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[500px] w-[500px] animate-blob-drift rounded-full blur-[130px]" style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.18) 0%, rgba(217,70,239,0.12) 40%, transparent 60%)' }} />
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[rgba(96,165,250,0.45)] bg-gradient-to-br from-[#60A5FA] via-[#A78BFA] to-[#4C1D95] text-[#FAF7FF] shadow-[0_0_50px_rgba(96,165,250,0.30)] animate-aurora">
              <LayoutDashboard size={24}/>
            </div>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[.2em] text-gradient-aurora">Manajemen Visual JAHRIS</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.2] tracking-[-.04em]">
              <span className="text-[#FAF7FF]">Kelola data HR, keuangan, dan tugas tim</span>
              <br className="hidden sm:block"/>
              <span className="text-gradient-aurora"> dalam satu antarmuka yang menyenangkan.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12">
            <ProductShowcase />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
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
      <div className="divider-glow absolute inset-x-0 bottom-0" />
    </section>
  )
}

function BenefitsTimeline() {
  return (
    <section id="benefits" className="scroll-mt-24 relative overflow-hidden py-24 text-white sm:py-28 section-aurora-bg">
      <div className="divider-glow absolute inset-x-0 top-0" />
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Keunggulan JAHRIS</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-.04em]">
              <span className="text-[#FAF7FF]">Dirancang agar </span>
              <span className="text-gradient-aurora">HR terasa ringan.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 space-y-3">
          {benefits.map(([number, title, description]) => (
            <Reveal key={number}>
              <div className="aurora-mini-card top-edge-highlight card-glow group flex items-start gap-5 rounded-[22px] p-5 backdrop-blur-md transition-all duration-300 hover:translate-x-1 sm:p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[rgba(244,114,182,0.35)] bg-gradient-to-br from-[#F472B6] via-[#A78BFA] to-[#4C1D95] font-display text-lg font-extrabold text-[#FAF7FF] shadow-[0_0_24px_rgba(217,70,239,0.28)] animate-aurora">
                  {number}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-[#FAF7FF]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#C4B5FD]">{description}</p>
                </div>
                <ArrowUpRight size={17} className="ml-2 hidden shrink-0 text-[#B8A8DE] group-hover:text-[#F0ABFC] sm:block transition-colors"/>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
      <div className="divider-glow absolute inset-x-0 bottom-0" />
    </section>
  )
}

function Implementation() {
  return (
    <section id="implementation" className="relative scroll-mt-24 overflow-hidden py-20 text-white sm:py-24 section-aurora-alt">
      <div className="divider-glow absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute right-0 top-0 h-[440px] w-[440px] animate-blob-drift rounded-full blur-[130px]" style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.22) 0%, transparent 60%)' }} />
      <Container className="relative z-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-7">
            <div>
              <Eyebrow>Implementasi</Eyebrow>
              <h2 className="mt-5 max-w-4xl font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-.04em]">
                <span className="text-[#FAF7FF]">Dari kebutuhan menjadi </span>
                <span className="text-gradient-aurora">sistem siap pakai.</span>
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(244,114,182,0.32)] bg-gradient-to-br from-[rgba(217,70,239,0.16)] to-[rgba(96,165,250,0.10)] px-4 py-2 text-sm font-semibold text-[#F5F3FF] backdrop-blur-sm shadow-[0_0_20px_rgba(217,70,239,0.12)]">
              <Clock3 size={17} className="text-[#F0ABFC]"/> Estimasi ±14 hari*
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step}>
              <div className="group border-t-2 border-[rgba(244,114,182,0.28)] pt-5 transition-all duration-300 hover:border-[#F472B6]">
                <span className="text-gradient-aurora font-display text-3xl font-extrabold tracking-[-.04em] animate-aurora">
                  0{i + 1}
                </span>
                <p className="mt-5 max-w-[190px] text-sm font-semibold leading-6 text-[#C4B5FD] transition-colors group-hover:text-[#FAF7FF]">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-xs text-[#B8A8DE]">*Waktu implementasi dapat berubah sesuai kebutuhan dan cakupan penyesuaian perusahaan.</p>
      </Container>
      <div className="divider-glow absolute inset-x-0 bottom-0" />
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 relative overflow-hidden py-24 text-white sm:py-28 section-aurora-bg">
      <div className="pointer-events-none absolute left-1/4 top-20 h-[500px] w-[500px] animate-blob-drift-slow rounded-full blur-[140px]" style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.22) 0%, transparent 60%)' }} />
      <div className="pointer-events-none absolute right-1/4 bottom-20 h-[500px] w-[500px] animate-blob-drift rounded-full blur-[140px]" style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.18) 0%, rgba(217,70,239,0.14) 40%, transparent 60%)' }} />
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Investasi yang mengikuti pertumbuhan</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-.04em]">
              <span className="text-[#FAF7FF]">Pilih ruang untuk </span>
              <span className="text-gradient-aurora">bertumbuh.</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-[#C4B5FD]">
              Mulai dari kebutuhan HR dasar hingga sistem dengan penyesuaian untuk organisasi besar.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {pricing.map(plan => (
            <Reveal key={plan.name}>
              <article
                className={`relative flex h-full flex-col rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl ${
                  plan.popular
                    ? 'border-2 border-[rgba(244,114,182,0.55)] bg-gradient-to-b from-[rgba(76,29,149,0.60)] via-[rgba(124,58,237,0.48)] to-[rgba(30,15,69,0.55)] text-white shadow-[0_30px_80px_rgba(0,0,0,0.40),0_0_80px_rgba(217,70,239,0.28)] animate-aurora'
                    : 'aurora-card-dark top-edge-highlight card-glow text-white'
                }`}
                style={plan.popular ? { backgroundSize: '200% 200%' } : undefined}
              >
                {plan.popular && <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[28px] bg-gradient-to-r from-transparent via-[rgba(244,114,182,0.85)] to-transparent" />}
                {plan.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-[#FDF4FF] via-[#F0ABFC] to-[#C4B5FD] px-4 py-1.5 text-[10px] font-black tracking-widest text-[#15092e] shadow-[0_6px_20px_rgba(217,70,239,0.38)]">
                    PALING POPULER
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-bold text-[#FAF7FF]">{plan.name}</h3>
                  <ArrowUpRight size={18} className="text-[#F0ABFC]"/>
                </div>

                <p className="mt-2 text-sm text-[#C4B5FD]">{plan.audience}</p>

                <div className="mt-6 border-b border-[rgba(244,114,182,0.22)] pb-6">
                  {plan.old && <span className="text-sm text-[#9D8CC4] line-through">{plan.old}</span>}
                  <p className="mt-1 font-display text-4xl font-extrabold tracking-[-.06em] text-gradient-aurora animate-aurora">{plan.price}</p>
                  <p className="mt-1 text-xs text-[#B8A8DE]">{plan.unit}</p>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[.15em] text-[#F0ABFC]">Termasuk</p>

                <ul className="mt-5 flex-1 space-y-4">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[#EDE9FE]">
                      <Check size={18} className="shrink-0 text-[#F0ABFC]"/>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  className={`mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-[#FDF4FF] via-[#F0ABFC] to-[#C4B5FD] text-[#15092e] shadow-[0_10px_34px_rgba(240,171,252,0.35),inset_0_1px_0_rgba(255,255,255,0.85)] hover:shadow-[0_16px_48px_rgba(244,114,182,0.45)]'
                      : 'bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#6D28D9] border border-[rgba(217,70,239,0.38)] text-white shadow-[0_6px_20px_rgba(217,70,239,0.32)] hover:border-[rgba(244,114,182,0.58)] hover:shadow-[0_10px_34px_rgba(217,70,239,0.45)]'
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight size={16}/>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-[#B8A8DE]">
          Harga &ldquo;mulai dari&rdquo; dan ketersediaan fitur mengikuti proposal JAHRIS 2026; konfirmasi penawaran akhir dengan tim sales. Paket Pro ditujukan mulai ≥50 karyawan, Enterprise mulai ≥300 karyawan.
        </p>
      </Container>
    </section>
  )
}

function TestimonialsGrid() {
  return (
    <section className="relative overflow-hidden py-24 text-white sm:py-28 section-aurora-alt">
      <div className="pointer-events-none absolute left-1/3 top-20 h-[440px] w-[440px] animate-blob-drift-slow rounded-full blur-[140px]" style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.22) 0%, transparent 60%)' }} />
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Kisah Klien</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-[-.04em]">
              <span className="text-gradient-aurora">Dipercaya tim HR</span>
              <span className="text-[#FAF7FF]"> membangun sistem yang lebih produktif.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map(t => (
            <Reveal key={t.name}>
              <article className="aurora-card-dark top-edge-highlight card-glow h-full rounded-3xl p-7 backdrop-blur-md">
                <Quote size={22} className="text-[#F0ABFC] opacity-70"/>
                <blockquote className="mt-5 text-sm leading-7 text-[#EDE9FE]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[rgba(217,70,239,0.20)] pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#F472B6] via-[#A78BFA] to-[#4C1D95] text-white shadow-[0_0_22px_rgba(217,70,239,0.38)]">
                    <User size={15}/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#FAF7FF]">{t.name}</p>
                    <p className="text-[11px] text-[#B8A8DE]">{t.role} · {t.company}</p>
                  </div>
                </figcaption>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="noise-texture relative scroll-mt-24 overflow-hidden py-24 text-white sm:py-28 section-aurora-bg">
      <div className="divider-glow absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[600px] w-[600px] animate-blob-drift-slow rounded-full blur-[150px]" style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.30) 0%, rgba(124,58,237,0.16) 40%, transparent 65%)' }} />
      <div className="pointer-events-none absolute -top-20 -right-20 h-[600px] w-[600px] animate-blob-drift rounded-full blur-[150px]" style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.28) 0%, rgba(96,165,250,0.14) 45%, transparent 65%)' }} />
      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <Eyebrow>Mari berkolaborasi</Eyebrow>
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
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-br from-[#FDF4FF] via-[#F0ABFC] to-[#C4B5FD] px-7 text-sm font-extrabold text-[#15092e] shadow-[0_10px_34px_rgba(240,171,252,0.35),inset_0_1px_0_rgba(255,255,255,0.85)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(244,114,182,0.48)]"
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
          <div className="glass-card top-edge-highlight rounded-[28px] p-3">
            <div className="relative h-[320px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#1a0d3a] sm:h-[380px]">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[rgba(244,114,182,0.45)] to-transparent" />
              <Image
                src="/proposal/p5-3.jpg"
                alt="Penggunaan aplikasi JAHRIS melalui smartphone"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a0d3a] via-[#1a0d3a]/80 to-transparent px-6 py-6 pt-16 text-sm font-semibold text-[#F5F3FF] sm:px-7">
                Akses JAHRIS di mana pun tim bekerja.
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function LegacyFooter() {
  return (
    <footer className="bg-[#120826] border-t border-[rgba(217,70,239,0.22)] text-[#B8A8DE]">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1.2fr_1fr]">
        <div>
          <a href="#home" className="inline-flex">
            <Image src="/logo_white.png" alt="JAHRIS" width={190} height={39} className="h-auto w-[156px]" />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-7 text-[#C4B5FD]">
            Sistem manajemen SDM berbasis web dari PT JAXER Group Indonesia.
          </p>
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
            <a href="mailto:hrmanagementjaxer@gmail.com" className="flex items-start gap-2 break-all hover:text-white transition-colors">
              <Mail size={15} className="mt-1 shrink-0 text-[#F0ABFC]"/>hrmanagementjaxer@gmail.com
            </a>
            <a href="tel:+6281511496687" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={15} className="text-[#F0ABFC]"/>+62 815 1149 6687
            </a>
            <span className="flex items-start gap-2">
              <MapPin size={15} className="mt-1 shrink-0 text-[#F0ABFC]"/>Cempaka Putih, Jakarta Pusat 10510
            </span>
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

export default function Page() {
  return (
    <>
      <MotionSystem />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <SyncSection />
        <ModulesSection />
        <OperationsSection />
        <NetworkSection />
        <ManagementSection />
        <BenefitsTimeline />
        <Implementation />
        <Pricing />
        <TestimonialsGrid />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
