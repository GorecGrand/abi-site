import ScrollReveal from '../components/ScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Разбираем бизнес-процессы',
    desc: 'Смотрим, как компания работает сейчас: заявки, клиенты, сотрудники, отчёты, коммуникации, ручные действия.',
  },
  {
    num: '02',
    title: 'Проектируем систему под вашу логику',
    desc: 'Определяем роли, интерфейсы, дашборды, автоматизации, интеграции и AI-возможности.',
  },
  {
    num: '03',
    title: 'Создаём рабочую систему с нуля',
    desc: 'Разрабатываем решение под конкретные задачи, без ограничения шаблонами готовых сервисов.',
  },
  {
    num: '04',
    title: 'Адаптируем под пользователей',
    desc: 'Учитываем, как удобно работать руководителю, сотрудникам и отдельным ролям внутри компании.',
  },
  {
    num: '05',
    title: 'Обучаем и сопровождаем',
    desc: 'Проводим команду через внедрение, объясняем, как пользоваться системой, и дорабатываем её по обратной связи.',
  },
]

export default function HowWeWorkSection() {
  return (
    <section
      id="howwework"
      className="abi-section"
      style={{ background: '#0B0C10' }}
    >
      <div className="abi-container">
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
              Как мы работаем
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#FFFFFF',
              }}
            >
              От <span style={{ color: '#00BFFF' }}>аудита</span> до{' '}
              <span style={{ color: '#66FCF1' }}>внедрения</span>
            </h2>
            <p className="text-lg" style={{ color: '#C5C6C7' }}>
              Мы не продаём шаблон, не увидев процессы. Сначала — полевой разбор
              и карта потерь, затем — приоритеты, архитектура решения и уже
              после этого внедрение.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div
            className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px hidden sm:block"
            style={{
              background: 'linear-gradient(to bottom, #00BFFF, #45A29E, #66FCF1, #8B5CF6, #00BFFF)',
            }}
          />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div
                  className={`flex flex-col sm:flex-row gap-6 items-start sm:items-center ${
                    i % 2 === 1 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Number circle */}
                  <div className="flex-shrink-0 flex items-center gap-4 sm:block">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold neon-text"
                      style={{
                        background: 'linear-gradient(135deg, #0B4F6C, #00BFFF)',
                        color: '#FFFFFF',
                        boxShadow: '0 0 20px rgba(0, 191, 255, 0.3)',
                        border: '2px solid rgba(102, 252, 241, 0.3)',
                      }}
                    >
                      {step.num}
                    </div>
                    {/* Mobile line */}
                    <div
                      className="w-px h-8 sm:hidden"
                      style={{
                        background: 'linear-gradient(to bottom, #00BFFF, transparent)',
                      }}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className="flex-1 rounded-2xl p-6 transition-all duration-300 hover:border-[#00BFFF40]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#FFFFFF',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#C5C6C7' }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block sm:w-14" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
