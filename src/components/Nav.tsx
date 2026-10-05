import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GitFork, Mail, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['home', 'projects', 'skills', 'experience', 'contact']

export default function Nav() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

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

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-ink focus:text-surface focus:text-sm"
      >
        Skip to content
      </a>
      <motion.nav
        aria-label="Main"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-5 inset-x-0 mx-auto z-50 w-max max-w-[calc(100vw-24px)]"
      >
        <div
          className="flex items-center gap-1 px-3 py-2 rounded-full border border-border shadow-sm"
          style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)' }}
        >
          {/* Monogram */}
          <a
            href="#home"
            aria-label="Anh Duc Tran, back to top"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-ink mr-2 flex-shrink-0"
          >
            <span className="font-display font-bold text-[13px] text-bg tracking-tight" aria-hidden="true">AD</span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? 'location' : undefined}
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
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GitFork size={15} aria-hidden="true" />
            </a>
            <a
              href="mailto:trananhduc10022007@gmail.com"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-ink-muted hover:text-ink hover:bg-surface2 transition-all duration-200"
              aria-label="Email Anh Duc Tran"
            >
              <Mail size={15} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-border text-ink hover:bg-surface2 transition-all duration-200"
            >
              {menuOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-2 rounded-card border border-border shadow-sm p-2 flex flex-col"
            style={{ background: 'rgba(255,255,255,0.97)' }}
          >
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === href.replace('#', '')
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`px-4 py-2.5 rounded-lg text-[15px] font-sans font-medium ${
                    isActive ? 'bg-ink text-surface' : 'text-ink hover:bg-surface2'
                  }`}
                >
                  {label}
                </a>
              )
            })}
          </div>
        )}
      </motion.nav>
    </>
  )
}
