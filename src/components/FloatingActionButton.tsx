import { memo } from 'react'
import { Button } from '@/components/ui/button'

const base = import.meta.env.BASE_URL

const contacts = [
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/abi_team',
    icon: `${base}assets/icon-bi-ai.png`,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/79999999999',
    icon: `${base}assets/icon-core-tech.png`,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:hello@abi.team',
    icon: `${base}assets/icon-edtech.png`,
  },
]

export const FloatingActionButton = memo(function FloatingActionButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      {contacts.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-2 text-xs text-slate-100 shadow-lg shadow-slate-900/60 backdrop-blur-md hover:bg-slate-800"
        >
          <div className="relative h-6 w-6 overflow-hidden rounded-full border border-cyan-400/50 bg-slate-950/80">
            <img
              src={item.icon}
              alt={item.label}
              loading="lazy"
              width={24}
              height={24}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="hidden sm:inline">{item.label}</span>
        </a>
      ))}

      <Button
        size="icon"
        className="h-11 w-11 rounded-full bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-400"
        asChild
      >
        <a href="#contact">
          <span className="sr-only">Связаться с ABI Team</span>
          +
        </a>
      </Button>
    </div>
  )
})
