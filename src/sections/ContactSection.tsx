import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import OptimizedImage from '../components/OptimizedImage'
import { useIsDesktop } from '../hooks/use-media-query'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'

type Channel = 'telegram' | 'email'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [channel, setChannel] = useState<Channel>('telegram')
  const [contactValue, setContactValue] = useState('')
  const [promoCode, setPromoCode] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const isDesktop = useIsDesktop()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const payload = {
      name,
      phone,
      channel,
      contact: contactValue,
      promoCode: promoCode || null,
      source: 'abiteam.tech',
      timestamp: new Date().toISOString(),
    }

    console.log('Webhook payload:', payload)
    await new Promise((r) => setTimeout(r, 1000))

    setSubmitted(true)
    setSubmitting(false)
  }

  const reset = () => {
    setName('')
    setPhone('')
    setChannel('telegram')
    setContactValue('')
    setPromoCode('')
    setSubmitted(false)
  }

  return (
    <section
      id="contact"
      className="abi-section"
      style={{
        background: '#0B0C10',
      }}
    >
      <div className="abi-container">
        {/* Partner Program */}
        <ScrollReveal>
          <div
            className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 mb-16"
            style={{
              background: 'rgba(102, 252, 241, 0.03)',
              border: '1px solid rgba(102, 252, 241, 0.12)',
            }}
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Partner icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(102, 252, 241, 0.1)',
                }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="#66FCF1"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>

              <div className="flex-1">
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#FFFFFF',
                  }}
                >
                  Партнёрская программа «Код Действия»
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: '#C5C6C7' }}
                >
                  Партнёр получает персональный промокод и вознаграждение за
                  оплаченные проекты. Клиент, пришедший по промокоду, получает
                  дополнительные бонусы от ABI Team. Уже есть промокод? Укажите
                  его при обращении. Хотите стать партнёром? Свяжитесь с нами
                  или скачайте PDF с подробными условиями.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const el = document.querySelector('#lead-form')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="abi-btn-primary text-xs py-3 px-5"
                  >
                    Связаться с нами
                  </button>
                  <a
                    href="/assets/kod-deistviya.pdf"
                    download
                    className="abi-btn-outline text-xs py-3 px-5 text-center"
                    onClick={(e) => {
                      // If PDF doesn't exist yet, show coming soon
                      e.preventDefault()
                      alert(
                        'PDF «Код Действия» будет доступен для скачивания после публикации презентации партнёрской программы.'
                      )
                    }}
                  >
                    Скачать PDF «Код Действия»
                  </a>
                </div>

                {/* Promo code hint */}
                <div
                  className="mt-5 p-4 rounded-xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px dashed rgba(0, 191, 255, 0.2)',
                  }}
                >
                  <p className="text-xs" style={{ color: '#888' }}>
                    <span style={{ color: '#00BFFF' }}>Есть промокод?</span>{' '}
                    Введите его при отправке заявки — мы закрепим обращение за
                    партнёром и применим бонусы для вашего проекта.{' '}
                    <span style={{ color: '#666' }}>
                      Например: IVANOV-ABI
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Main contact grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
          {/* Left column - info */}
          <ScrollReveal className="lg:col-span-2">
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
                style={{
                  background: 'rgba(0, 191, 255, 0.1)',
                  border: '1px solid rgba(0, 191, 255, 0.2)',
                  color: '#00BFFF',
                }}
              >
                Связаться с нами
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#FFFFFF',
                }}
              >
                Готовы обсудить{' '}
                <span style={{ color: '#00BFFF' }}>ваш проект?</span>
              </h2>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: '#C5C6C7' }}
              >
                Заполните форму, и мы свяжемся с вами для обсуждения аудита
                процессов и AI-возможностей вашего бизнеса.
              </p>

              {/* Contact info */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    label: 'Email',
                    value: 'abi.team@yandex.ru',
                    href: 'mailto:abi.team@yandex.ru',
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="#00BFFF"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: 'Telegram',
                    value: '@evgenynegotiator',
                    href: 'https://t.me/evgenynegotiator',
                    external: true,
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="#00BFFF"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024q-.16.037-5.128 3.373c-.486.315-.973.472-1.39.463-.458-.01-1.34-.234-1.996-.426-.805-.236-1.444-.36-1.388-.758.03-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Телефон',
                    value: '+7 (965) 052-39-64',
                    href: 'tel:+79650523964',
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="#00BFFF"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h7.5"
                        />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div className="flex items-center gap-4" key={item.label}>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(0, 191, 255, 0.08)' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        className="text-xs uppercase tracking-wide mb-0.5"
                        style={{ color: '#888' }}
                      >
                        {item.label}
                      </div>
                      {'external' in item && item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm transition-colors hover:text-[#00BFFF]"
                          style={{ color: '#C5C6C7' }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <a
                          href={item.href}
                          className="text-sm transition-colors hover:text-[#00BFFF]"
                          style={{ color: '#C5C6C7' }}
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* OKVED — Company Details Accordion */}
              <div
                className="mt-8 rounded-2xl p-5"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(0, 191, 255, 0.1)',
                }}
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="okved" style={{ borderBottom: 'none' }}>
                    <AccordionTrigger
                      className="text-sm font-semibold hover:no-underline py-0"
                      style={{ color: '#00BFFF' }}
                    >
                      Реквизиты компании
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-0">
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#888' }}>
                            Основной вид деятельности
                          </p>
                          <p className="text-sm leading-relaxed" style={{ color: '#C5C6C7' }}>
                            62.02 Деятельность консультативная и работы в области компьютерных технологий
                          </p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#888' }}>
                            Дополнительные виды деятельности
                          </p>
                          <ul className="space-y-1.5">
                            {[
                              '62.01 Разработка компьютерного программного обеспечения',
                              '63.99.1 Деятельность по оказанию консультационных и информационных услуг',
                              '70.22 Консультирование по вопросам коммерческой деятельности и управления',
                            ].map((item) => (
                              <li key={item} className="text-sm leading-relaxed" style={{ color: '#C5C6C7' }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column - form */}
          <ScrollReveal className="lg:col-span-3" delay={200}>
            <div
              id="lead-form"
              className="p-6 sm:p-8 rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(0, 191, 255, 0.15)' }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="#00BFFF"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#FFFFFF',
                    }}
                  >
                    Заявка отправлена!
                  </h3>
                  <p className="mb-6" style={{ color: '#C5C6C7' }}>
                    Мы получили ваш запрос и свяжемся с вами в ближайшее время
                    через выбранный канал связи.
                  </p>
                  <button onClick={reset} className="abi-btn-outline text-sm">
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: '#C5C6C7' }}
                    >
                      Имя <span style={{ color: '#00BFFF' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Как к вам обращаться?"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#00BFFF'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          'rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: '#C5C6C7' }}
                    >
                      Телефон <span style={{ color: '#00BFFF' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#00BFFF'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          'rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>

                  {/* Channel selection */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: '#C5C6C7' }}
                    >
                      Предпочтительный канал связи{' '}
                      <span style={{ color: '#00BFFF' }}>*</span>
                    </label>
                    <div className="flex gap-3 mb-3">
                      {[
                        { key: 'telegram' as const, label: 'Telegram' },
                        { key: 'email' as const, label: 'Email' },
                      ].map((opt) => (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => setChannel(opt.key)}
                          className="flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                          style={{
                            background:
                              channel === opt.key
                                ? 'rgba(0, 191, 255, 0.15)'
                                : 'rgba(255, 255, 255, 0.05)',
                            border:
                              channel === opt.key
                                ? '1px solid #00BFFF'
                                : '1px solid rgba(255, 255, 255, 0.1)',
                            color:
                              channel === opt.key ? '#00BFFF' : '#C5C6C7',
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    <input
                      type={channel === 'email' ? 'email' : 'text'}
                      required
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      placeholder={
                        channel === 'telegram'
                          ? '@username или номер телефона'
                          : 'your@email.com'
                      }
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#00BFFF'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          'rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>

                  {/* Promo code */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: '#C5C6C7' }}
                    >
                      Промокод партнёра
                      <span className="text-xs ml-2" style={{ color: '#888' }}>
                        (необязательно)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) =>
                        setPromoCode(e.target.value.toUpperCase())
                      }
                      placeholder="Например: IVANOV-ABI"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none uppercase"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#00BFFF'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          'rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full abi-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Отправка...
                      </span>
                    ) : (
                      'Запросить аудит процессов и AI-возможностей'
                    )}
                  </button>

                  <p
                    className="text-xs text-center"
                    style={{ color: '#666' }}
                  >
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных
                    данных. Мы не передаём данные третьим лицам.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* ABI Brand Logo — page closing element */}
        <ScrollReveal>
          <div className="mt-20 flex flex-col items-center">
            <div
              className="w-px h-16 mb-8"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 191, 255, 0.3), transparent)',
              }}
            />
            <div className="flex flex-col items-center gap-4">
              <OptimizedImage
                src="/assets/abi-logo-official.jpg"
                alt="ABI Team Logo"
                className="h-20 sm:h-24 w-auto object-contain rounded-lg"
                width={160}
                height={80}
                loading="lazy"
                decoding="async"
              />
              <div className="text-center">
                <p
                  className="text-sm font-semibold tracking-widest uppercase"
                  style={{
                    color: '#00BFFF',
                    fontFamily: "'Playfair Display', serif",
                    textShadow: isDesktop ? '0 0 10px rgba(0, 191, 255, 0.2)' : 'none',
                  }}
                >
                  ABI Team
                </p>
                <p className="text-xs mt-1" style={{ color: '#666' }}>
                  ООО «ЭЙБИАЙ» — Архитекторы адаптивной цифровой среды
                </p>
              </div>
            </div>
            <div
              className="w-px h-16 mt-8"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(0, 191, 255, 0.3))',
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
