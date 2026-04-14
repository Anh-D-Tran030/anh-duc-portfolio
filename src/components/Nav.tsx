import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GitFork, Mail } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['home', 'projects', 'experience', 'contact']

export default function Nav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px' },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="flex items-center gap-1 px-3 py-2 rounded-full border border-border shadow-sm"
        style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)' }}
      >
        {/* Monogram */}
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-ink mr-2 flex-shrink-0">
          <span className="font-syne font-bold text-[13px] text-bg tracking-tight">AD</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={href}
                href={href}
                onClick={handleNav(href)}
                className={`px-4 py-1.5 rounded-full text-sm font-sans font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-ink text-surface'
                    : 'text-ink-muted hover:text-ink hover:bg-surface2'
                }`}
              >
                {label}
              </a>
            )
          })}
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-border mx-2" />

        {/* Icon Buttons */}
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/Anh-D-Tran030"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-ink-muted hover:text-ink hover:bg-surface2 transition-all duration-200"
            aria-label="GitHub"
          >
            <GitFork size={15} />
          </a>
          <a
            href="mailto:trananhduc10022007@gmail.com"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-ink-muted hover:text-ink hover:bg-surface2 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
