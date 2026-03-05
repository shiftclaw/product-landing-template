import { FloatingNav } from "@/components/floating-nav"
import {
  HeroSection,
  SocialProof,
  Features,
  Pricing,
  FAQ,
  Footer,
} from "@/components/sections"
import {
  siteConfig,
  socialProofConfig,
  featuresConfig,
  pricingConfig,
  faqConfig,
  footerConfig,
} from "@/config/site"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNav name={siteConfig.name} links={siteConfig.navLinks} />
      <main>
        <HeroSection />
        <SocialProof {...socialProofConfig} />
        <Features {...featuresConfig} />
        <Pricing {...pricingConfig} />
        <FAQ {...faqConfig} />
      </main>
      <Footer {...footerConfig} />
    </div>
  )
}
