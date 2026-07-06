import { Suspense, lazy } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import EcosystemSection from './sections/EcosystemSection'

// Lazy load heavy sections for code splitting
const HowWeWorkSection = lazy(() => import('./sections/HowWeWorkSection'))
const DifferencesSection = lazy(() => import('./sections/DifferencesSection'))
const ServicesSection = lazy(() => import('./sections/ServicesSection'))
const TerminalSection = lazy(() => import('./sections/TerminalSection'))
const CasesSection = lazy(() => import('./sections/CasesSection'))
const BlogSection = lazy(() => import('./sections/BlogSection'))
const ContactSection = lazy(() => import('./sections/ContactSection'))

function LazySection({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="abi-section flex items-center justify-center" style={{ background: '#0B0C10', minHeight: '40vh' }}>
          <div
            className="w-12 h-12 border-2 rounded-full animate-spin"
            style={{ borderColor: 'rgba(0, 191, 255, 0.3)', borderTopColor: 'transparent' }}
          />
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero always eager (above the fold) */}
        <HeroSection />
        <EcosystemSection />

        {/* Below the fold — lazy loaded */}
        <LazySection>
          <HowWeWorkSection />
        </LazySection>
        <LazySection>
          <DifferencesSection />
        </LazySection>
        <LazySection>
          <ServicesSection />
        </LazySection>
        <LazySection>
          <TerminalSection />
        </LazySection>
        <LazySection>
          <CasesSection />
        </LazySection>
        <LazySection>
          <ContactSection />
        </LazySection>
        <LazySection>
          <BlogSection />
        </LazySection>
      </main>
      <Footer />
    </div>
  )
}

export default App
