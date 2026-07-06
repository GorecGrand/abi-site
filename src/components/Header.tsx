import { useEffect, useState } from 'react'
import OptimizedImage from './OptimizedImage'
import { useIsDesktop } from '../hooks/use-media-query'

const navLinks = [
  { label: 'О компании', href: '#about' },
  { label: 'Экосистема', href: '#ecosystem' },
  { label: 'Как мы работаем', href: '#howwework' },
  { label: 'Услуги', href: '#services' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Блог', href: '#blog' },
  { label: 'Контакты', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isDesktop = useIsDesktop()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDesktop
            ? 'bg-[#0B0C10]/70 backdrop-blur-2xl saturate-150 shadow-lg shadow-[#00BFFF]/5'
            : 'bg-[#0B0C10]/90 shadow-lg shadow-[#00BFFF]/5'
          : 'bg-transparent'
      }`}
      style={scrolled ? { borderBottom: '1px solid rgba(0, 191, 255, 0.1)' } : {}}
    >
      <div className="abi-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo — ABI neon triangle */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <OptimizedImage
              src="/assets/abi-logo-official.jpg"
              alt="ABI Team"
              className="h-10 w-auto object-contain rounded-md"
              width={120}
              height={40}
              loading="eager"
              decoding="async"
            />
            <span
              className="text-white font-semibold text-lg tracking-wide hidden sm:block transition-colors group-hover:text-[#66FCF1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: isDesktop ? '0 0 10px rgba(0, 191, 255, 0.15)' : 'none',
              }}
            >
              ABI Team
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-2 text-sm rounded-lg hover:bg-[#00BFFF]/10 transition-all"
                style={{ color: '#C5C6C7' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#66FCF1'
                  if (isDesktop) {
                    e.currentTarget.style.textShadow = '0 0 10px rgba(102, 252, 241, 0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#C5C6C7'
                  e.currentTarget.style.textShadow = 'none'
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="ml-3 px-5 py-2 text-sm font-semibold rounded-full transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #0B4F6C, #00BFFF)',
                color: '#FFF',
                boxShadow: '0 0 15px rgba(0, 191, 255, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                border: '1px solid rgba(102, 252, 241, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 0 25px rgba(0, 191, 255, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 0 15px rgba(0, 191, 255, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              Запросить аудит
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2"
            style={{ color: '#C5C6C7' }}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          className="xl:hidden border-t py-4"
          style={{
            background: 'rgba(11, 12, 16, 0.98)',
            borderColor: 'rgba(0, 191, 255, 0.1)',
          }}
        >
          <nav className="abi-container flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-3 text-left rounded-lg transition-all"
                style={{ color: '#C5C6C7' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="mt-3 px-5 py-3 text-sm font-semibold rounded-full"
              style={{
                background: 'linear-gradient(135deg, #0B4F6C, #00BFFF)',
                color: '#FFF',
                boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)',
                border: '1px solid rgba(102, 252, 241, 0.3)',
              }}
            >
              Запросить аудит
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
