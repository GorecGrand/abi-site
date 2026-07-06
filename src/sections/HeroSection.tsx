import { useMemo } from 'react'
import { useIsDesktop, usePrefersReducedMotion } from '../hooks/use-media-query'

/** Лёгкий CSS-фолбэк — без WebGL */
function HeroFallback() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Центральное свечение */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 100, 180, 0.15) 0%, rgba(0, 60, 120, 0.06) 40%, transparent 70%)',
          animation: reducedMotion ? 'none' : 'pulse-glow 4s ease-in-out infinite',
        }}
      />
      {/* Акцентное кольцо */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full border border-[#00BFFF]/10"
        style={{
          animation: reducedMotion ? 'none' : 'spin 60s linear infinite',
        }}
      />
      {/* Частицы */}
      {useMemo(() => Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const radius = 120 + Math.random() * 80
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? '#00FFFF' : '#00BFFF',
              opacity: 0.3 + Math.random() * 0.3,
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              boxShadow: `0 0 6px ${i % 3 === 0 ? 'rgba(0,255,255,0.4)' : 'rgba(0,191,255,0.3)'}`,
              animation: reducedMotion ? 'none' : `pulse-glow ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        )
      }), [reducedMotion])}
      {/* Сетка */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 191, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 191, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const isDesktop = useIsDesktop()

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-x-hidden"
      style={{ background: '#0B0C10' }}
    >
      {/* Фоновое свечение */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 191, 255, 0.08) 0%, rgba(102, 252, 241, 0.03) 30%, transparent 60%)',
        }}
      />

      {/* Сетка на мобиле */}
      {!isDesktop && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 191, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 191, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      )}

      {/* Фон — всегда CSS-фолбэк, без WebGL */}
      <HeroFallback />

      {/* Градиент сверху вниз для глубины */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, #0B0C10 95%)',
        }}
      />

      {/* Контент */}
      <div className="relative z-10 abi-container pt-24 pb-24">
        <div className="flex justify-center">
          <div className="max-w-2xl text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(0, 191, 255, 0.08)',
                border: '1px solid rgba(0, 191, 255, 0.2)',
                backdropFilter: isDesktop ? 'blur(10px)' : 'none',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#00BFFF', boxShadow: '0 0 8px #00BFFF' }}
              />
              <span className="text-sm font-medium" style={{ color: '#00BFFF' }}>
                ООО «ЭЙБИАЙ» — российская IT-компания
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug mb-4 pb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#FFFFFF',
              }}
            >
              Архитекторы{' '}
              <span
                className="block mt-2 neon-text pb-1"
                style={{
                  background: 'linear-gradient(135deg, #00BFFF, #66FCF1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                адаптивной цифровой среды
              </span>
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed mb-4 max-w-xl"
              style={{ color: '#C5C6C7' }}
            >
              Помогаем компаниям развиваться в мире, где скорость изменений — главное конкурентное преимущество
            </p>

            <p
              className="text-xl sm:text-2xl font-light italic mb-6"
              style={{
                color: '#C5C6C7',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Там, где была пустота, появляется рабочая система.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: '#888' }}
            >
              ABI Team создаёт для бизнеса собственные цифровые системы управления
              — не шаблонные CRM, а адаптивные решения под реальные процессы
              компании.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="abi-btn-primary"
              >
                Запросить аудит процессов и AI-возможностей
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="abi-btn-outline"
              >
                Обсудить проект
              </button>
            </div>

            <div 
              className="grid grid-cols-3 gap-6 mt-12 pt-8"
              style={{ borderTop: '1px solid rgba(0, 191, 255, 0.1)' }}
            >
              <div>
                <div
                  className="text-2xl sm:text-3xl font-bold neon-text-subtle"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#00BFFF',
                  }}
                >
                  4
                </div>
                <div className="text-sm mt-1" style={{ color: '#888' }}>
                  Направления
                </div>
              </div>
              <div>
                <div
                  className="text-2xl sm:text-3xl font-bold neon-text-subtle"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#00BFFF',
                  }}
                >
                  AI
                </div>
                <div className="text-sm mt-1" style={{ color: '#888' }}>
                  Интеграции
                </div>
              </div>
              <div>
                <div
                  className="text-2xl sm:text-3xl font-bold neon-text-subtle"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#00BFFF',
                  }}
                >
                  360°
                </div>
                <div className="text-sm mt-1" style={{ color: '#888' }}>
                  Подход
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
