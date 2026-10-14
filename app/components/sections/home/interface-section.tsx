import { Reveal } from '../../layout/navbar'
import { Container } from '../../shared/ui'
import { ProductShowcase } from '../product/product-showcase'

export function InterfaceSection() {
  return (
    <section id="dashboard" className="relative scroll-mt-24 overflow-hidden bg-white py-20 text-[#12264F] sm:py-[120px]">
      <Container className="relative z-10">
        <Reveal variant="fade-in">
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="font-display text-[clamp(30px,4vw,40px)] font-semibold leading-[1.15] tracking-[-.02em] text-[#12264F]">
              Satu antarmuka untuk HR, keuangan, dan tugas.
            </h2>
          </div>
        </Reveal>

        <Reveal variant="slide-right">
          <div className="mt-8">
            <ProductShowcase />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
