import ScrollReveal from '../components/ScrollReveal'

const comparisonData = [
  { criterion: 'Быстрый старт', crm: true, integrator: true, studio: 'partial', abi: true },
  { criterion: 'Работа по шаблону', crm: true, integrator: 'partial', studio: false, abi: false, highlight: true },
  { criterion: 'Кастомная логика бизнеса', crm: false, integrator: false, studio: true, abi: true, highlight: true },
  { criterion: 'BI / аналитика', crm: 'partial', integrator: 'partial', studio: 'partial', abi: true },
  { criterion: 'AI-инструменты', crm: 'partial', integrator: 'partial', studio: 'partial', abi: true },
  { criterion: 'Индивидуальные дашборды', crm: false, integrator: 'partial', studio: true, abi: true },
  { criterion: 'Адаптация под сотрудников', crm: false, integrator: 'partial', studio: 'partial', abi: true },
  { criterion: 'Обучение команды', crm: 'partial', integrator: true, studio: 'partial', abi: true },
  { criterion: 'Сопровождение внедрения', crm: 'partial', integrator: true, studio: 'partial', abi: true },
  { criterion: 'Единая цифровая среда', crm: false, integrator: 'partial', studio: 'partial', abi: true, highlight: true },
]

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ background: 'rgba(0, 191, 255, 0.15)' }}>
        <svg className="w-3.5 h-3.5" style={{ color: '#00BFFF' }} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </span>
    )
  }
  if (status === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ background: 'rgba(255, 80, 80, 0.1)' }}>
        <svg className="w-3.5 h-3.5" style={{ color: '#FF5050' }} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </span>
    )
  }
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ background: 'rgba(0, 191, 255, 0.06)' }}>
      <span className="text-xs" style={{ color: '#45A29E' }}>~</span>
    </span>
  )
}

const diffCards = [
  {
    title: 'Кастомная логика под ваш бизнес',
    desc: 'Не шаблонные CRM, а адаптивные решения под реальные процессы компании. Система создаётся с нуля под вашу логику работы.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00BFFF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'AI-интеграция на всех уровнях',
    desc: 'AI-ассистенты, анализ звонков, автоматическая генерация отчётов и рекомендаций — искусственный интеллект работает везде, где это даёт эффект.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00BFFF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: 'Адаптация под каждую роль',
    desc: 'От собственника до конкретного сотрудника — у каждого свои интерфейс, дашборды и доступы. Система растёт вместе с компанией.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00BFFF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
]

export default function DifferencesSection() {
  return (
    <section
      id="about"
      className="abi-section"
      style={{ background: '#0B0C10' }}
    >
      {/* Subtle separator */}
      <div className="absolute left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 191, 255, 0.15), transparent)' }} />

      <div className="abi-container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{ background: 'rgba(0, 191, 255, 0.1)', border: '1px solid rgba(0, 191, 255, 0.2)', color: '#00BFFF' }}
            >
              Почему ABI Team
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#FFFFFF' }}
            >
              Готовая CRM vs{' '}
              <span style={{ color: '#00BFFF' }}>ABI Team</span>
            </h2>
            <p className="text-lg" style={{ color: '#C5C6C7' }}>
              Готовые CRM и сервисы дают стандартную структуру. ABI Team создаёт
              структуру под вас — с кастомной логикой, AI-инструментами и
              полным сопровождением.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature cards — glassmorphism */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {diffCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100}>
              <div
                className="rounded-3xl p-7 h-full transition-all duration-500 card-glow"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(0, 191, 255, 0.08)', border: '1px solid rgba(0, 191, 255, 0.15)' }}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF', fontFamily: "'Playfair Display', serif" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#C5C6C7' }}>
                  {card.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison table — dark */}
        <ScrollReveal>
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr style={{ background: '#1F2833' }}>
                    <th className="px-6 py-4 text-sm font-semibold text-left w-1/3" style={{ color: '#FFFFFF' }}>Критерий</th>
                    <th className="px-4 py-4 text-center text-xs font-medium" style={{ color: '#888' }}>Готовая CRM</th>
                    <th className="px-4 py-4 text-center text-xs font-medium" style={{ color: '#888' }}>Интегратор</th>
                    <th className="px-4 py-4 text-center text-xs font-medium" style={{ color: '#888' }}>Студия разработки</th>
                    <th className="px-4 py-4 text-center text-sm font-bold" style={{ color: '#00BFFF' }}>ABI Team</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr
                      key={row.criterion}
                      className="transition-colors hover:bg-[#1F283330]"
                      style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}
                    >
                      <td className="px-6 py-4 text-sm font-medium" style={{ color: row.highlight ? '#00BFFF' : '#C5C6C7' }}>
                        {row.criterion}
                      </td>
                      <td className="px-4 py-4 text-center"><StatusIcon status={row.crm} /></td>
                      <td className="px-4 py-4 text-center"><StatusIcon status={row.integrator} /></td>
                      <td className="px-4 py-4 text-center"><StatusIcon status={row.studio} /></td>
                      <td className="px-4 py-4 text-center"><StatusIcon status={row.abi} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
