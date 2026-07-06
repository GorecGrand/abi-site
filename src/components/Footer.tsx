export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{ background: '#0B0C10', borderTop: '1px solid rgba(0, 191, 255, 0.08)' }}
    >
      <div className="abi-container py-12 sm:py-16">
        {/* === BRAND HEADER (NEW) === */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-10">
          {/* Logo */}
          <img
            src="/assets/abi-logo-official.jpg"
            alt="ABI Team Logo"
            className="w-16 h-auto object-contain flex-shrink-0 rounded-sm"
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            style={{ mixBlendMode: 'screen' }}
          />
          {/* Title + Subtitle + Description */}
          <div className="flex-1">
            <p
              className="text-xl sm:text-2xl font-bold tracking-wide"
              style={{ color: '#FFFFFF', fontFamily: "'Playfair Display', serif" }}
            >
              ABI Team
            </p>
            <p className="text-sm mt-0.5 mb-3" style={{ color: '#888' }}>
              ООО «ЭЙБИАЙ»
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed max-w-xl"
              style={{ color: '#C5C6C7' }}
            >
              ООО «ЭЙБИАЙ» развивает IT-направление под брендом ABI Team. Архитекторы адаптивной цифровой среды бизнеса.
            </p>
          </div>
          {/* Social buttons */}
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            {/* Telegram */}
            <a
              href="https://t.me/ABI_biz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(0, 191, 255, 0.06)',
                border: '1px solid rgba(0, 191, 255, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 191, 255, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(102, 252, 241, 0.5)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 191, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 191, 255, 0.06)'
                e.currentTarget.style.borderColor = 'rgba(0, 191, 255, 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              aria-label="Telegram"
            >
              <svg className="w-5 h-5" fill="#00BFFF" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024q-.16.037-5.128 3.373c-.486.315-.973.472-1.39.463-.458-.01-1.34-.234-1.996-.426-.805-.236-1.444-.36-1.388-.758.03-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            {/* VK */}
            <a
              href="https://vk.ru/evgenynegotiator"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(0, 191, 255, 0.06)',
                border: '1px solid rgba(0, 191, 255, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 191, 255, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(102, 252, 241, 0.5)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 191, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 191, 255, 0.06)'
                e.currentTarget.style.borderColor = 'rgba(0, 191, 255, 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              aria-label="VKontakte"
            >
              <svg className="w-5 h-5" fill="#00BFFF" viewBox="0 0 24 24">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.136.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.673 4 8.231c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z" />
              </svg>
            </a>
            {/* Chat / TenChat */}
            <a
              href="https://tenchat.ru/negotiator"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(0, 191, 255, 0.06)',
                border: '1px solid rgba(0, 191, 255, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 191, 255, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(102, 252, 241, 0.5)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 191, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 191, 255, 0.06)'
                e.currentTarget.style.borderColor = 'rgba(0, 191, 255, 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              aria-label="Чат"
            >
              <svg className="w-5 h-5" fill="none" stroke="#00BFFF" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Separator between header and columns */}
        <div
          className="w-full mb-10"
          style={{ borderTop: '1px solid rgba(0, 191, 255, 0.06)' }}
        />

        {/* === 3 COLUMNS (EXISTING — UNCHANGED) === */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12">
          {/* Column 1 — КОМПАНИЯ */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-4"
              style={{ color: '#00BFFF' }}
            >
              КОМПАНИЯ
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm transition-colors duration-300 hover:text-[#66FCF1]"
                  style={{ color: '#C5C6C7' }}
                >
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  className="text-sm transition-colors duration-300 hover:text-[#66FCF1]"
                  style={{ color: '#C5C6C7' }}
                >
                  Экосистема
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors duration-300 hover:text-[#66FCF1]"
                  style={{ color: '#C5C6C7' }}
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  className="text-sm transition-colors duration-300 hover:text-[#66FCF1]"
                  style={{ color: '#C5C6C7' }}
                >
                  Кейсы
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 — УСЛУГИ */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-4"
              style={{ color: '#00BFFF' }}
            >
              УСЛУГИ
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors duration-300 hover:text-[#66FCF1]"
                  style={{ color: '#C5C6C7' }}
                >
                  AI-системы
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors duration-300 hover:text-[#66FCF1]"
                  style={{ color: '#C5C6C7' }}
                >
                  BI и аналитика
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors duration-300 hover:text-[#66FCF1]"
                  style={{ color: '#C5C6C7' }}
                >
                  Автоматизация
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors duration-300 hover:text-[#66FCF1]"
                  style={{ color: '#C5C6C7' }}
                >
                  CRM и платформы
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — КОНТАКТЫ */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-4"
              style={{ color: '#00BFFF' }}
            >
              КОНТАКТЫ
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:abi.team@yandex.ru"
                  className="text-sm transition-colors duration-300 hover:text-[#66FCF1]"
                  style={{ color: '#C5C6C7' }}
                >
                  abi.team@yandex.ru
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/evgenynegotiator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-300 hover:text-[#66FCF1]"
                  style={{ color: '#C5C6C7' }}
                >
                  @evgenynegotiator
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/ABI_biz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-300 hover:text-[#66FCF1]"
                  style={{ color: '#C5C6C7' }}
                >
                  t.me/ABI_biz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* === LEGAL BLOCK (EXISTING — UNCHANGED) === */}
        <div
          className="w-full mb-8"
          style={{ borderTop: '1px solid rgba(0, 191, 255, 0.08)' }}
        />
        <div className="text-center">
          <p className="text-xs mb-1" style={{ color: '#666' }}>
            ООО «ЭЙБИАЙ» развивает IT-направление под брендом ABI Team
          </p>
          <p className="text-xs mb-1" style={{ color: '#666' }}>
            ИНН: 4706092970 | ОГРН: 1254700017626
          </p>
          <p className="text-xs" style={{ color: '#666' }}>
            © 2026 ABI Team. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
