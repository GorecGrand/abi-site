import { memo } from 'react'
import { Button } from '@/components/ui/button'

const base = import.meta.env.BASE_URL

const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 10%, rgba(56,189,248,0.20) 0, transparent 60%),
                            radial-gradient(circle at 90% 20%, rgba(94,234,212,0.18) 0, transparent 55%),
                            radial-gradient(circle at 15% 80%, rgba(59,130,246,0.16) 0, transparent 55%)`,
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-28 md:flex-row md:items-center md:gap-16">
        <div className="relative z-10 flex-1 space-y-8">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-cyan-400/40 bg-slate-900/60 shadow-lg shadow-cyan-500/30">
              <img
                src={`${base}assets/abi-logo.png`}
                alt="ABI Team логотип"
                loading="lazy"
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                ABI Team
              </p>
              <p className="text-sm text-slate-300">
                Архитекторы адаптивной цифровой среды бизнеса
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Цифровая экосистема,
              <br />
              которая работает на ваш бизнес
            </h1>

            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              Мы проектируем и внедряем адаптивную цифровую архитектуру для компаний,
              которым важны управляемость, прозрачная аналитика и устойчивый рост.
              От первых задач до масштабирования — один связный цифровой контур.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400">
              Обсудить проект
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="border border-slate-700/70 bg-slate-900/60 text-slate-100 hover:bg-slate-800"
              asChild
            >
              <a href="#cases">Смотреть кейсы</a>
            </Button>
          </div>

          <div className="flex items-center gap-2 pt-4 text-xs text-slate-400">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-slate-700 bg-slate-900/70 text-[0.65rem] text-slate-300">
              PDF
            </span>

            <a
              href={`${base}assets/kod-deistviya.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-cyan-300 hover:underline"
            >
              Код действия ABI Team: как мы выстраиваем проекты
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-6 flex flex-1 justify-center md:mt-0">
          <div className="relative h-[260px] w-full max-w-md overflow-hidden rounded-3xl border border-cyan-400/40 bg-slate-950/60 shadow-2xl shadow-cyan-500/30">
            <img
              src={`${base}assets/hero-cyborg-suit.png`}
              alt="Визуальная метафора адаптивной цифровой архитектуры"
              loading="lazy"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
})

export default HeroSection
