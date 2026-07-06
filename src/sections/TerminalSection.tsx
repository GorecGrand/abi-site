import { useEffect, useRef, useState, useCallback } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { useIsDesktop } from '../hooks/use-media-query'

const keywords = [
  'AI-АССИСТЕНТЫ',
  'АВТОМАТИЗАЦИЯ',
  'BI-АНАЛИТИКА',
  'CRM',
  'ИНТЕГРАЦИИ',
  'БОТЫ',
  'ДАШБОРДЫ',
  'АУДИТ',
  'GPT',
  'NLP',
  'ML',
  'API',
  'ОБЛАКО',
  'КОНТРОЛЬ',
  'РОСТ',
]

/** Lightweight CSS marquee fallback for mobile */
function MobileTerminalFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#0B0C10' }}>
      {/* Subtle gradient lines simulating the wave */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${15 + i * 10}%`,
              background: `linear-gradient(90deg, transparent, rgba(0, 191, 255, ${0.1 + (i % 3) * 0.05}), transparent)`,
            }}
          />
        ))}
      </div>
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)',
        }}
      />
    </div>
  )
}

export default function TerminalSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const animRef = useRef<number>(0)
  const isDesktop = useIsDesktop()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05, rootMargin: '100px' }
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    let time = 0
    const cols = isDesktop ? 80 : 40
    let cellW = 0
    let cellH = 0
    let rows = 40

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, isDesktop ? 2 : 1.5)
      const rect = canvas.parentElement!.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cellW = rect.width / cols
      cellH = cellW * 1.6
      rows = Math.ceil(rect.height / cellH)
    }

    resize()
    window.addEventListener('resize', resize)

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*'

    const frame = () => {
      // CRITICAL FIX: stop rendering when not visible, don't just skip drawing
      if (!visible) {
        animRef.current = requestAnimationFrame(frame)
        return
      }

      const rect = canvas.parentElement!.getBoundingClientRect()
      ctx.fillStyle = '#0B0C10'
      ctx.fillRect(0, 0, rect.width, rect.height)

      time += 0.02

      // Draw characters — blue/cyan wave
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellW
          const y = row * cellH
          const normalizedX = col / cols
          const waveY =
            Math.sin(normalizedX * 15 + time * 2) * 0.15 +
            Math.sin(normalizedX * 8 - time) * 0.1 +
            0.5
          const rowNormalized = row / rows
          const distFromWave = Math.abs(rowNormalized - waveY)
          const thickness = 0.08

          let char = ''
          let alpha = 0

          if (distFromWave < thickness) {
            alpha = 1 - distFromWave / thickness
            const keywordIdx = Math.floor(normalizedX * keywords.length)
            const keyword = keywords[keywordIdx] || 'AI'
            const charIdx = Math.floor((col * 7 + row * 13 + Math.floor(time * 10)) % keyword.length)
            char = keyword[charIdx] || chars[Math.floor(Math.random() * chars.length)]
          } else if (distFromWave < thickness * 3) {
            alpha = 0.25 * (1 - (distFromWave - thickness) / (thickness * 2))
            if (Math.random() > 0.7) {
              char = chars[Math.floor(Math.random() * chars.length)]
            }
          } else if (Math.random() > 0.985) {
            alpha = 0.06
            char = chars[Math.floor(Math.random() * chars.length)]
          }

          if (char && alpha > 0) {
            const flicker = 0.85 + Math.random() * 0.15
            ctx.font = `${Math.max(10, cellW * 0.8)}px 'Courier New', monospace`
            ctx.fillStyle = `rgba(0, 191, 255, ${alpha * flicker})`
            ctx.fillText(char, x + 2, y + cellH * 0.8)
          }
        }
      }

      // Subtle radial glow
      const gradient = ctx.createRadialGradient(
        rect.width / 2, rect.height / 2, 0,
        rect.width / 2, rect.height / 2, rect.width * 0.7
      )
      gradient.addColorStop(0, 'rgba(0, 191, 255, 0.04)')
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.2)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, rect.width, rect.height)

      // Vignette
      const vigGradient = ctx.createRadialGradient(
        rect.width / 2, rect.height / 2, rect.width * 0.3,
        rect.width / 2, rect.height / 2, rect.width * 0.6
      )
      vigGradient.addColorStop(0, 'rgba(0,0,0,0)')
      vigGradient.addColorStop(1, 'rgba(0,0,0,0.5)')
      ctx.fillStyle = vigGradient
      ctx.fillRect(0, 0, rect.width, rect.height)

      animRef.current = requestAnimationFrame(frame)
    }

    animRef.current = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [visible, isDesktop])

  useEffect(() => {
    // Only run canvas on desktop — mobile uses CSS fallback
    if (!isDesktop) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const cleanup = draw(canvas, ctx)
    return cleanup
  }, [isDesktop, draw])

  // Cleanup on unmount
  useEffect(() => {
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ background: '#0B0C10', minHeight: '80vh' }}
    >
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 191, 255, 0.2), transparent)' }} />

      {/* Canvas Background — desktop only */}
      {isDesktop ? (
        <div className="absolute inset-0">
          <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
        </div>
      ) : (
        <MobileTerminalFallback />
      )}

      {/* Content overlay */}
      <div className="relative z-10 abi-container flex flex-col items-center justify-center min-h-[80vh] py-20">
        <ScrollReveal>
          <div className="text-center mb-8">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{ background: 'rgba(0, 191, 255, 0.1)', border: '1px solid rgba(0, 191, 255, 0.2)', color: '#00BFFF', fontFamily: "'Courier New', monospace" }}
            >
              {'>'} SYSTEM.INIT()
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#FFFFFF' }}
            >
              Компетенции ABI Team
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              От транскрибации звонков до проектирования корпоративных
              платформ — мы создаём цифровые системы, которые работают.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats grid — cyan/blue */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl w-full mb-12">
          {[
            { label: 'AI-моделей', value: '15+' },
            { label: 'Интеграций', value: '50+' },
            { label: 'Процессов', value: '100+' },
            { label: 'Клиентов', value: '30+' },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div
                className="text-center p-5 rounded-2xl"
                style={{ background: 'rgba(0, 191, 255, 0.04)', border: '1px solid rgba(0, 191, 255, 0.12)' }}
              >
                <div
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{ fontFamily: "'Courier New', monospace", color: '#00BFFF', textShadow: isDesktop ? '0 0 20px rgba(0,191,255,0.4)' : 'none' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm" style={{ color: 'rgba(0, 191, 255, 0.6)' }}>
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Marquee — blue */}
        <ScrollReveal>
          <div
            className="mt-12 w-full overflow-hidden rounded-xl py-3"
            style={{ background: 'rgba(0, 191, 255, 0.03)', border: '1px solid rgba(0, 191, 255, 0.08)' }}
          >
            <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
              {[...keywords, ...keywords, ...keywords, ...keywords].map((kw, i) => (
                <span key={i} className="mx-4 text-sm font-medium" style={{ color: 'rgba(0, 191, 255, 0.35)', fontFamily: "'Courier New', monospace" }}>
                  {kw} <span style={{ color: 'rgba(0, 191, 255, 0.12)' }}>//</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
