import HeroSection from '@/sections/HeroSection'
import { FloatingActionButton } from '@/components/FloatingActionButton'
import ContactSection from '@/sections/ContactSection'
import ServicesSection from '@/sections/ServicesSection'
import CasesSection from '@/sections/CasesSection'
import BlogSection from '@/sections/BlogSection'
import DifferencesSection from '@/sections/DifferencesSection'
import EcosystemSection from '@/sections/EcosystemSection'
import HowWeWorkSection from '@/sections/HowWeWorkSection'
import TerminalSection from '@/sections/TerminalSection'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <HeroSection />
      <ServicesSection />
      <DifferencesSection />
      <EcosystemSection />
      <HowWeWorkSection />
      <CasesSection />
      <TerminalSection />
      <BlogSection />
      <ContactSection />
      <FloatingActionButton />
    </div>
  )
}

export default App
