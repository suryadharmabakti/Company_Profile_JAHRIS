import { IntroLoader } from './components/effects/intro-loader'
import { MotionSystem } from './components/effects/motion-system'
import { Navbar } from './components/layout/navbar'
import { CtaSection } from './components/sections/home/cta-section'
import { FeaturesSection, WorkflowSection } from './components/sections/home/features-section'
import { Footer } from './components/sections/home/footer'
import { HeroSection } from './components/sections/home/hero-section'
import { InterfaceSection } from './components/sections/home/interface-section'
import { PricingSection } from './components/sections/home/pricing-section'

export default function Page() {
  return (
    <>
      <IntroLoader />
      <MotionSystem />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <InterfaceSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
