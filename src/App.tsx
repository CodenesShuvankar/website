import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IndustriesMarquee } from './components/IndustriesMarquee'
import { ServicesBento } from './components/ServicesBento'
import { StatsSection } from './components/StatsSection'
import { DeliverySection } from './components/DeliverySection'
import { InsightsSection } from './components/InsightsSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-dvh bg-white antialiased">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink-950 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <IndustriesMarquee />
        <ServicesBento />
        <StatsSection />
        <DeliverySection />
        <InsightsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
