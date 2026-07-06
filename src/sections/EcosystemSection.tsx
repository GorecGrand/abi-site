import ScrollReveal from '../components/ScrollReveal'
import OptimizedImage from '../components/OptimizedImage'
import { useIsDesktop } from '../hooks/use-media-query'

const directions = [
  {
    title: 'Core Tech',
    subtitle: 'Технологическое ядро',
    description:
      'Разработка цифровых продуктов под ключ, автоматизация бизнес-процессов и CTO-as-a-Service. Мы проектируем архитектуру, пишем код и запускаем системы.',
    features: ['MVP за 4-8 недель', 'CTO-as-a-Service', 'Автоматизация процессов', 'Технический аудит'],
    icon: '/assets/icon-core-tech.png',
    accent: '#00BFFF',
  },
  {
    title: 'BI / AI Solutions',
    subtitle: 'Интеллект и аналитика',
    description:
      'BI-системы, корпоративные ИИ-агенты и аналитика данных. Внедряем искусственный интеллект в реальные бизнес-процессы для управленческих решений.',
    features: ['BI-дашборды', 'ИИ-агенты', 'Анализ данных', 'Прогнозирование'],
    icon: '/assets/icon-bi-ai.png',
    accent: '#66FCF1',
  },
  {
    title: 'CulturalTech',
    subtitle: 'Культурные проекты',
    description:
      'NeuroFest и федеральные культурные инициативы. Соединяем технологии и искусство: цифровые экспозиции, нейроинтерфейсы, интерактивные перформансы.',
    features: ['NeuroFest', 'Цифровые экспозиции', 'Нейроинтерфейсы', 'Федеральные проекты'],
    icon: '/assets/icon-culturaltech.png',
    accent: '#8B5CF6',
  },
  {
    title: 'EdTech',
    subtitle: 'Образование и развитие',
    description:
      'Обучение команд цифровым компетенциям. Повышение квалификации в области AI, автоматизации, аналитики и управления технологиями.',
    features: ['Корпоративное обучение', 'AI-г literacy', 'Воркшопы', 'Сертификация'],
    icon: '/assets/icon-edtech.png',
    accent: '#45A29E',
  },
]

export default function EcosystemSection() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const isDesktop = useIsDesktop()

  return (
    <section
      id="ecosystem"
      className="abi-section relative overflow-hidden"
      style={{ background: '#0B0C10' }}
    >
      {/* Background glow effects — simplified on mobile */}
      {isDesktop && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 191, 255, 0.06) 0%, transparent 70%)',
          }}
        />
      )}

      <div className="abi-container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{
                background: 'rgba(0, 191, 255, 0.1)',
                border: '1px solid rgba(0, 191, 255, 0.2)',
                color: '#00BFFF',
              }}
            >
              Наша экосистема
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#FFFFFF',
              }}
            >
              4 направления{' '}
              <span 
                className="neon-text"
                style={{ color: '#66FCF1' }}
              >
                одна экосистема
              </span>
            </h2>
            {/* Ecosystem tagline */}
            <p className="text-lg mb-4" style={{ color: '#C5C6C7' }}>
              ABI Team — это не просто IT-интегратор. Мы строим адаптивные
              бизнес интеллект-системы через четыре взаимосвязанных направления.
            </p>
            {/* Unified ecosystem message */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-2"
              style={{
                background: 'rgba(102, 252, 241, 0.05)',
                border: '1px solid rgba(102, 252, 241, 0.15)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#66FCF1', boxShadow: '0 0 6px #66FCF1' }}
              />
              <span className="text-xs sm:text-sm" style={{ color: '#66FCF1' }}>
                Одна цифровая экосистема — все направления работают в связке
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Directions Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {directions.map((dir, i) => (
            <ScrollReveal key={dir.title} delay={i * 100}>
              <div
                className="group relative rounded-3xl p-6 sm:p-8 h-full transition-all duration-500 cursor-pointer card-glow overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${dir.accent}15`,
                  backdropFilter: isDesktop ? 'blur(20px)' : 'none',
                }}
                onClick={scrollToContact}
                onMouseEnter={isDesktop ? (e) => {
                  e.currentTarget.style.borderColor = `${dir.accent}40`
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                } : undefined}
                onMouseLeave={isDesktop ? (e) => {
                  e.currentTarget.style.borderColor = `${dir.accent}15`
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                } : undefined}
              >
                {/* Corner accent — desktop only */}
                {isDesktop && (
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-40"
                    style={{
                      background: `radial-gradient(circle at top right, ${dir.accent}, transparent 70%)`,
                    }}
                  />
                )}

                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  {/* 3D Icon — LARGER, PNG */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        boxShadow: isDesktop
                          ? `0 0 20px ${dir.accent}20, inset 0 0 20px rgba(0,0,0,0.5)`
                          : `0 0 10px ${dir.accent}15`,
                      }}
                    >
                      <OptimizedImage
                        src={dir.icon}
                        alt={dir.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                        width={96}
                        height={96}
                        loading="lazy"
                        decoding="async"
                        style={{
                          filter: 'brightness(1.05)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest mb-1 block"
                      style={{ color: dir.accent }}
                    >
                      {dir.subtitle}
                    </span>
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#FFFFFF',
                      }}
                    >
                      {dir.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: '#C5C6C7' }}
                    >
                      {dir.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {dir.features.map((f) => (
                        <span
                          key={f}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: `${dir.accent}10`,
                            color: dir.accent,
                            border: `1px solid ${dir.accent}25`,
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover arrow — desktop only */}
                {isDesktop && (
                  <div
                    className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                    style={{
                      background: `${dir.accent}15`,
                      border: `1px solid ${dir.accent}30`,
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke={dir.accent} strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
