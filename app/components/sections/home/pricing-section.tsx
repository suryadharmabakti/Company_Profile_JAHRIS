import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from '../../layout/navbar'
import { Container } from '../../shared/ui'
import { pricing } from './data'
export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 relative overflow-hidden py-24 text-white sm:py-28 section-aurora-bg">
      <div className="pointer-events-none absolute left-1/4 top-20 h-[500px] w-[500px] animate-blob-drift-slow rounded-full blur-[140px]" style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.22) 0%, transparent 60%)' }} />
      <div className="pointer-events-none absolute right-1/4 bottom-20 h-[500px] w-[500px] animate-blob-drift rounded-full blur-[140px]" style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.18) 0%, rgba(217,70,239,0.14) 40%, transparent 60%)' }} />
      <Container className="relative z-10">
        <Reveal variant="fade-up">
          <div className="mx-auto max-w-2xl text-center">
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
          {pricing.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 180} variant="stagger-cards">
              <article
                className={`relative flex h-full flex-col rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-xl ${
                  plan.popular
                    ? 'pricing-featured dark-surface border border-[#1C3C70] bg-[#12264F] text-white shadow-[0_22px_48px_rgba(18,38,79,.24)]'
                    : 'aurora-card-dark top-edge-highlight card-glow text-white'
                }`}
                style={plan.popular ? { backgroundSize: '200% 200%' } : undefined}
              >
                {plan.popular && (
                  <span className="pricing-badge absolute -top-3 left-7 z-10 rounded-full border border-[#BFCDE0] bg-white px-4 py-1.5 text-[11px] font-extrabold leading-none tracking-[.08em] text-[#081B3F] shadow-[0_6px_18px_rgba(18,38,79,.16)]">
                    PALING POPULER
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-bold text-[#FAF7FF]">{plan.name}</h3>
                  <ArrowUpRight size={18} className={plan.popular ? 'text-white/70' : 'text-[#12264F]'}/>
                </div>

                <p className="mt-2 text-sm text-[#C4B5FD]">{plan.audience}</p>

                <div className={`mt-6 border-b pb-6 ${plan.popular ? 'border-white/15' : 'border-[#DFE6EF]'}`}>
                  {plan.old && <span className={`text-sm line-through ${plan.popular ? 'text-white/55' : 'text-[#69758D]'}`}>{plan.old}</span>}
                  <p className="mt-1 font-display text-4xl font-extrabold tracking-[-.06em]">{plan.price}</p>
                  <p className={`mt-1 text-xs ${plan.popular ? 'text-white/65' : 'text-[#69758D]'}`}>{plan.unit}</p>
                </div>

                <p className={`mt-6 text-xs font-bold uppercase tracking-[.15em] ${plan.popular ? 'text-white/70' : 'text-[#55627D]'}`}>Termasuk</p>

                <ul className="mt-5 flex-1 space-y-4">
                  {plan.features.map(feature => (
                    <li key={feature} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-white/85' : 'text-[#55627D]'}`}>
                      <Check size={18} className={`shrink-0 ${plan.popular ? 'text-white/70' : 'text-[#12264F]'}`}/>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  className={`mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${
                    plan.popular
                      ? 'border border-white/30 bg-white text-[#12264F] shadow-[inset_0_1px_0_rgba(255,255,255,.9)] hover:bg-white/90'
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
          Paket Pro ditujukan mulai ≥30 karyawan, Enterprise mulai ≥100 karyawan.
        </p>
      </Container>
    </section>
  )
}


