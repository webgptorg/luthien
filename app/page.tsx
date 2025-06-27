import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { IntegrationsSection } from '@/components/integrations-section'
import { PricingSection } from '@/components/pricing-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  console.log("Home page loading - Personal Developer AI Avatar landing page")
  
  return (
    <div className="min-h-screen bg-dev-slate-900 text-white">
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
