import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import OptimizedImage from '../components/OptimizedImage'
import { useIsDesktop } from '../hooks/use-media-query'

interface CaseItem {
  id: string
  h2: string
  industry: string
  image: string
  webpImage: string
  short: string
  full: string
  result: string
  tags: string[]
  cta: string
}

const cases: CaseItem[] = [
  {
    id: 'case-calls',
    industry: 'Производство и продажа мебели',
    h2: 'ИИ-анализ звонков для мебельной фабрики',
    image: '/assets/case-calls.jpg',
    webpImage: '/assets/case-calls.webp',
    short:
      'ABI Team спроектировала систему ИИ-анализа звонков: транскрибация, проверка скриптов, выявление ошибок, отчёты для руководителя. Контроль качества стал системным.',
    full: `Мебельная фабрика ежедневно работает с большим количеством входящих и исходящих звонков. При таком потоке выборочная ручная прослушка больше не даёт руководителю реальной картины: часть ошибок остаётся незаметной, качество обработки возражений оценивается субъективно, а слабые места команды обнаруживаются слишком поздно.\n\nABI Team спроектировала решение для ИИ-анализа звонков, в котором каждый разговор можно перевести в текст, проверить по логике скрипта, разобрать по ключевым этапам общения и вынести в управленческий отчёт. В архитектуру решения вошли транскрибация звонков, анализ диалогов, выявление типовых ошибок менеджеров, разбор возражений и подготовка логики для дальнейшей интеграции с CRM и телефонией.\n\nВ результате компания получает не просто архив разговоров, а контур управляемости. Руководитель видит, где теряются заявки, какие возражения встречаются чаще всего, какие сотрудники соблюдают стандарты общения, а где нужно обучение и доработка скриптов.`,
    result:
      'Руководитель получает обзор не по нескольким случайным звонкам, а по всему массиву коммуникаций; видно, где теряются заявки, какие возражения повторяются и какие сотрудники нуждаются в обучении.',
    tags: ['ИИ-анализ звонков', 'Автоматизация', 'BI', 'CRM'],
    cta: 'Обсудить ИИ-анализ звонков',
  },
  {
    id: 'case-transport',
    industry: 'Транспорт и логистика',
    h2: 'Информационная система для транспортной компании',
    image: '/assets/case-transport.jpg',
    webpImage: '/assets/case-transport.webp',
    short:
      'Спроектирована архитектура единой информационной системы: рейсы, документы, сроки, статусы и роли — всё в одном контуре вместо разрозненных таблиц.',
    full: `В транспортном бизнесе одна из самых болезненных точек — разрозненные данные. Рейсы могут вестись в одной таблице, документы — в другой, статусы согласований — в переписке, а контроль сроков часто держится на памяти конкретных сотрудников. В такой схеме руководителю трудно быстро понять, где завис процесс, кто отвечает за следующий шаг и какие документы уже готовы.\n\nABI Team подготовила архитектуру информационной системы, которая объединяет ключевые операционные контуры компании: логику учёта рейсов, работу с документами, статусы и этапы прохождения задач, контроль сроков, роли пользователей и доступы. Дополнительно была заложена MVP-логика, чтобы проект можно было развивать поэтапно, а не пытаться внедрить всё сразу.\n\nРезультатом стала основа единой цифровой системы вместо набора несвязанных инструментов. Руководству проще видеть статус процессов и проблемные места, а команде — работать в более понятной и прозрачной среде.`,
    result:
      'Вместо разрозненного ручного контроля появляется основа единой цифровой системы, где руководству проще видеть ход процессов и слабые места.',
    tags: ['Цифровая инфраструктура', 'Автоматизация', 'MVP', 'Интеграции'],
    cta: 'Обсудить архитектуру системы',
  },
  {
    id: 'case-crm-retail',
    industry: 'Мебельный ритейл (B2B / B2C)',
    h2: 'CRM и автоматизация продаж для мебельного ритейла',
    image: '/assets/case-furniture.jpg',
    webpImage: '/assets/case-furniture.webp',
    short:
      'CRM-контур с разделением B2B и B2C: структура отделов, роли, воронки, сущности. Продажи стали прозрачнее и управляемее.',
    full: `Компании из мебельного ритейла часто одновременно работают с несколькими типами клиентов: частные покупатели, корпоративные заказчики, партнёры, дилеры. Если все эти процессы смешиваются в одной воронке без понятных правил, CRM быстро перестаёт помогать и превращается в сложную таблицу, где трудно контролировать сделки, роли и зоны ответственности.\n\nABI Team построила CRM-контур с разделением B2B- и B2C-направлений. Были настроены структура отделов, роли сотрудников, права доступа, ключевые сущности CRM, логика воронок и подготовка к интеграции телефонии. Такой подход дал компании не просто «настроенную систему», а рабочую логику продаж, где каждый тип клиента обрабатывается по своей схеме.\n\nВ результате продажи стали заметно прозрачнее и управляемее. Менеджеры работают в единой структуре, руководство быстрее видит сделки, этапы и узкие места, а компания получает базу для дальнейшей автоматизации.`,
    result:
      'Продажи стали прозрачнее, ответственность распределяется яснее, а CRM перестала быть формальной базой и стала рабочим инструментом управления.',
    tags: ['CRM', 'Автоматизация продаж', 'Интеграции', 'BI'],
    cta: 'Обсудить настройку CRM',
  },
  {
    id: 'case-crm-cosmetics',
    industry: 'Дистрибуция косметики',
    h2: 'CRM и аналитика для косметической дистрибуции',
    image: '/assets/case-cosmetics.jpg',
    webpImage: '/assets/case-cosmetics.webp',
    short:
      'Переупаковка CRM-логики: от «хранилища карточек» до системы управления продажами. Прозрачность по воронке, коммуникациям, точкам роста.',
    full: `Для дистрибьютора косметики CRM часто сначала используется как база контактов, но по мере роста бизнеса этого становится недостаточно. Руководителю важно видеть, как движутся сделки, насколько регулярно менеджеры работают с клиентами, где проседает воронка и какие сегменты базы приносят результат.\n\nABI Team подготовила CRM-логику, в которой акцент был сделан не только на структуру клиентской базы, но и на этапы сделки, контроль коммуникаций, рекомендации по аналитике продаж и точки для последующей автоматизации. Такой подход помогает превратить CRM из «хранилища карточек» в более управляемую систему продаж.\n\nВ результате компания получает более понятную картину по клиентам, активности команды и точкам роста. Руководство видит, как работает воронка и где нужны доработки, а сама CRM становится одной из опор адаптивной бизнес интеллект-системы, а не отдельным изолированным инструментом.`,
    result:
      'Компания получила больше прозрачности по воронке, коммуникациям и точкам роста.',
    tags: ['CRM', 'BI-аналитика', 'Автоматизация продаж', 'Отчётность'],
    cta: 'Обсудить CRM-архитектуру',
  },
]

function CaseCard({ item, delay }: { item: CaseItem; delay: number }) {
  const [open, setOpen] = useState(false)
  const isDesktop = useIsDesktop()

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <article
      id={item.id}
      className="rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 card-glow group"
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
      }}
      onMouseEnter={isDesktop ? (e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 191, 255, 0.2)'
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
      } : undefined}
      onMouseLeave={isDesktop ? (e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
      } : undefined}
    >
      {/* Image — fixed aspect ratio, never shrinks */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '240px' }}>
        <OptimizedImage
          webpSrc={item.webpImage}
          src={item.image}
          alt={item.h2}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          width={600}
          height={240}
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(11,12,16,0.95) 0%, rgba(11,12,16,0.4) 50%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'linear-gradient(135deg, rgba(0,191,255,0.15), transparent)' }}
        />
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              background: 'rgba(0, 191, 255, 0.15)',
              border: '1px solid rgba(0, 191, 255, 0.25)',
              color: '#00BFFF',
              backdropFilter: isDesktop ? 'blur(10px)' : 'none',
            }}
          >
            {item.industry}
          </span>
        </div>
      </div>

      {/* Content — fills remaining height, flex column */}
      <ScrollReveal delay={delay} className="flex flex-col flex-1">
        <div className="p-6 flex flex-col flex-1">
          <h3
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: '#FFFFFF' }}
          >
            {item.h2}
          </h3>

          {/* Description — stretches to fill available space */}
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#C5C6C7' }}>
            {item.short}
          </p>

          {/* Spacer pushes tags + buttons to bottom */}
          <div className="flex-1 min-h-0" />

          {/* Tags + buttons — pinned to bottom */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'rgba(0, 191, 255, 0.06)',
                    color: '#00BFFF',
                    border: '1px solid rgba(0, 191, 255, 0.12)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-sm font-medium transition-all"
                style={{ color: '#00BFFF' }}
              >
                <span>{open ? 'Скрыть' : 'Подробнее'}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <span style={{ color: 'rgba(255,255,255,0.1)' }}>|</span>
              <button
                onClick={scrollToContact}
                className="text-sm font-medium transition-colors hover:text-[#66FCF1]"
                style={{ color: '#45A29E' }}
              >
                Обсудить проект
              </button>
            </div>

            {/* Expandable content */}
            {open && (
              <div className="mt-5 pt-5 space-y-4" style={{ borderTop: '1px solid rgba(0, 191, 255, 0.1)' }}>
                {item.full.split('\n\n').map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
                    {para}
                  </p>
                ))}

                <div
                  className="p-4 rounded-xl"
                  style={{
                    background: 'rgba(102, 252, 241, 0.04)',
                    border: '1px solid rgba(102, 252, 241, 0.12)',
                  }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#66FCF1' }}>
                    Результат
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#C5C6C7' }}>
                    {item.result}
                  </p>
                </div>

                <button onClick={scrollToContact} className="abi-btn-primary text-xs py-3 px-5">
                  {item.cta}
                </button>
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>
    </article>
  )
}

export default function CasesSection() {
  return (
    <section id="cases" className="abi-section" style={{ background: '#0B0C10' }}>
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
              Кейсы
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#FFFFFF' }}
            >
              Реальные проекты, <span style={{ color: '#00BFFF' }}>реальные результаты</span>
            </h2>
            <p className="text-lg" style={{ color: '#C5C6C7' }}>
              Каждый проект начинается с понимания процессов клиента и заканчивается работающей цифровой системой.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid — explicit stretch, no wrappers around articles */}
        <div className="grid sm:grid-cols-2 gap-6 items-stretch">
          {cases.map((c, i) => (
            <CaseCard key={c.id} item={c} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
