import { useState } from 'react'
import { useIsDesktop } from '../hooks/use-media-query'

export default function FloatingActionButton() {
  const [open, setOpen] = useState(false)
  const [pulse, setPulse] = useState(true)
  const isDesktop = useIsDesktop()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded menu */}
      {open && (
        <div className="flex flex-col gap-2 items-end mb-1 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <a
            href="https://t.me/evgenynegotiator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(11, 12, 16, 0.95)',
              backdropFilter: isDesktop ? 'blur(20px)' : 'none',
              border: '1px solid rgba(0, 191, 255, 0.2)',
              boxShadow: isDesktop
                ? '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 191, 255, 0.1)'
                : '0 4px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            <span className="text-sm font-medium" style={{ color: '#C5C6C7' }}>Telegram</span>
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(0, 191, 255, 0.15)' }}
            >
              <svg className="w-5 h-5" fill="#00BFFF" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024q-.16.037-5.128 3.373c-.486.315-.973.472-1.39.463-.458-.01-1.34-.234-1.996-.426-.805-.236-1.444-.36-1.388-.758.03-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
          </a>

          <a
            href="mailto:abi.team@yandex.ru"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(11, 12, 16, 0.95)',
              backdropFilter: isDesktop ? 'blur(20px)' : 'none',
              border: '1px solid rgba(0, 191, 255, 0.2)',
              boxShadow: isDesktop
                ? '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 191, 255, 0.1)'
                : '0 4px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            <span className="text-sm font-medium" style={{ color: '#C5C6C7' }}>Email</span>
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(0, 191, 255, 0.15)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="#00BFFF" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
          </a>

          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
              setOpen(false)
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(11, 12, 16, 0.95)',
              backdropFilter: isDesktop ? 'blur(20px)' : 'none',
              border: '1px solid rgba(102, 252, 241, 0.3)',
              boxShadow: isDesktop
                ? '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(102, 252, 241, 0.1)'
                : '0 4px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            <span className="text-sm font-semibold" style={{ color: '#66FCF1' }}>Оставить заявку</span>
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(102, 252, 241, 0.15)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="#66FCF1" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </button>
        </div>
      )}

      {/* Main FAB Button */}
      <button
        onClick={() => {
          setOpen(!open)
          setPulse(false)
        }}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #0B4F6C 0%, #00BFFF 50%, #66FCF1 100%)',
          boxShadow: isDesktop
            ? (open
              ? '0 0 30px rgba(0, 191, 255, 0.6), 0 0 60px rgba(0, 191, 255, 0.25), 0 8px 20px rgba(0,0,0,0.4)'
              : '0 0 20px rgba(0, 191, 255, 0.4), 0 0 40px rgba(0, 191, 255, 0.15), 0 4px 15px rgba(0,0,0,0.3)')
            : '0 2px 8px rgba(0,0,0,0.3)',
          animation: isDesktop && pulse && !open ? 'neonPulse 3s ease-in-out infinite' : 'none',
          border: '1px solid rgba(102, 252, 241, 0.4)',
        }}
        aria-label="AI Ассистент"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
          </svg>
        )}
      </button>

      {/* AI label */}
      {!open && (
        <div
          className="absolute -top-8 right-0 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap pointer-events-none"
          style={{
            background: 'rgba(0, 191, 255, 0.15)',
            border: '1px solid rgba(0, 191, 255, 0.25)',
            color: '#00BFFF',
            backdropFilter: isDesktop ? 'blur(10px)' : 'none',
          }}
        >
          AI Ассистент
        </div>
      )}
    </div>
  )
}
