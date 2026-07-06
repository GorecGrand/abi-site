import ScrollReveal from '../components/ScrollReveal'

const services = [
  {
    title: 'AI-системы и интеллектуальные ассистенты',
    description:
      'Разработка и внедрение решений с применением искусственного интеллекта для автоматизации задач, анализа данных, поддержки сотрудников и клиентских коммуникаций.',
    items: [
      'AI-ассистенты для бизнеса',
      'Корпоративные GPT-ассистенты',
      'Анализ звонков, переписок и документов',
      'Генерация отчётов и рекомендаций',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00BFFF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    color: '#00BFFF',
  },
  {
    title: 'BI и бизнес-аналитика',
    description:
      'Создание систем бизнес-интеллекта для сбора, обработки, визуализации и анализа данных из разных источников.',
    items: [
      'Аналитические панели и дашборды',
      'Управленческая отчётность',
      'Сбор данных из CRM, таблиц, телефонии',
      'Визуализация ключевых показателей',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00BFFF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: '#45A29E',
  },
  {
    title: 'Автоматизация бизнес-процессов',
    description:
      'Проектирование и внедрение цифровых сценариев, которые сокращают ручную работу, ускоряют обработку заявок и делают процессы управляемыми.',
    items: [
      'Автоматизация продаж и клиентского сервиса',
      'Автоматизация документооборота',
      'Автоматические уведомления и задачи',
      'Настройка логики процессов в CRM',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00BFFF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    color: '#00BFFF',
  },
  {
    title: 'CRM и корпоративные платформы',
    description:
      'Внедрение, настройка и развитие CRM-систем, внутренних платформ и цифровых рабочих сред для компаний.',
    items: [
      'Внедрение и настройка CRM',
      'Bitrix24, amoCRM и другие системы',
      'Проектирование воронок и ролей',
      'Внутренние кабинеты и рабочие пространства',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00BFFF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    color: '#45A29E',
  },
  {
    title: 'Интеграции и цифровая инфраструктура',
    description:
      'Связывание разных сервисов, систем и источников данных в единую цифровую среду.',
    items: [
      'Интеграции через API',
      'Подключение телефонии и мессенджеров',
      'Обмен данными между CRM и сервисами',
      'Настройка цифровой архитектуры проекта',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00BFFF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    color: '#00BFFF',
  },
  {
    title: 'Боты и прикладные IT-решения',
    description:
      'Создание прикладных программных решений для конкретных задач бизнеса: от чат-ботов до внутренних инструментов и сервисов.',
    items: [
      'Telegram-боты и чат-боты',
      'Внутренние сервисы и инструменты',
      'Прототипы цифровых продуктов',
      'MVP для проверки гипотез',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00BFFF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    color: '#45A29E',
  },
]

export default function ServicesSection() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="services"
      className="abi-section relative"
      style={{ background: '#0B0C10' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 191, 255, 0.3), transparent)',
        }}
      />

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
              Наши услуги
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#FFFFFF',
              }}
            >
              Комплексные{' '}
              <span style={{ color: '#00BFFF' }}>IT-решения</span> для бизнеса
            </h2>
            <p className="text-lg" style={{ color: '#C5C6C7' }}>
              От аудита процессов до полной цифровой трансформации — создаём
              адаптивные системы под задачи вашей компании.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div
                className="group rounded-3xl p-6 sm:p-7 h-full flex flex-col cursor-pointer transition-all duration-500 card-glow"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(10px)',
                }}
                onClick={scrollToContact}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${service.color}30`
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{
                    background: `${service.color}10`,
                    border: `1px solid ${service.color}20`,
                  }}
                >
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: '#C5C6C7' }}>
                  {service.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: '#888' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{
                          background: service.color,
                          boxShadow: `0 0 6px ${service.color}60`,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  className="flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                  style={{ color: service.color }}
                >
                  <span>Подробнее</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-base mb-4" style={{ color: '#888' }}>
              Не уверены, какое решение подходит именно вам?
            </p>
            <button onClick={scrollToContact} className="abi-btn-primary">
              Получить бесплатную консультацию
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
