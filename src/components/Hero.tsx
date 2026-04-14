import { motion } from 'framer-motion'
import { BarChart2, Container, Search, Rocket, ArrowRight, ExternalLink, MapPin } from 'lucide-react'
import { fadeUp, stagger } from '../utils/animations'
import type { LucideIcon } from '../types'

interface HeroSkillCard {
  icon: LucideIcon
  title: string
  description: string
}

const skillCards: HeroSkillCard[] = [
  {
    icon: BarChart2,
    title: 'ML Engineering',
    description: 'LightGBM, PyTorch, FastAPI serving',
  },
  {
    icon: Container,
    title: 'MLOps & CI/CD',
    description: 'Docker, GitHub Actions, GHCR, MLflow',
  },
  {
    icon: Search,
    title: 'RAG & Evaluation',
    description: 'Qdrant, RAGAS, DeBERTa NLI, Sentence Transformers',
  },
  {
    icon: Rocket,
    title: 'CTO @ Vaylo',
    description: 'AI CRM platform, system architecture, MVP shipped',
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[120px] pb-20 z-10"
    >
      <div className="max-w-[1400px] mx-auto w-full px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="font-mono text-accent uppercase tracking-[0.12em] text-[13px]"
            >
              Hello, I'm
            </motion.p>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="font-syne font-extrabold text-ink leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(72px, 8vw, 108px)' }}
            >
              Anh Duc
              <br />
              Tran
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="font-syne font-semibold text-accent text-[26px]"
            >
              ML Engineer & Co-founder
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="font-sans text-ink-muted leading-[1.75] font-light text-[17px] max-w-[520px]"
            >
              UTS Bachelor of AI student and Co-Founder & CTO of Vaylo Technologies. I build
              production ML systems — demand forecasting APIs, RAG pipelines, and full
              observability stacks — not just academic notebooks.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-1">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-surface font-sans font-medium text-base hover:bg-ink/90 transition-colors duration-200"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="https://github.com/anhduc-tran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-ink text-ink font-sans font-medium text-base hover:bg-surface2 transition-colors duration-200"
              >
                GitHub
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 0.15 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* 2×2 SkillCard Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skillCards.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-surface rounded-card border border-border p-7 flex flex-col gap-2"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center">
                    <Icon size={17} className="text-accent" />
                  </div>
                  <p className="font-syne font-bold text-ink text-base leading-tight mt-1">{title}</p>
                  <p className="font-mono text-ink-muted text-[13px] leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>

            {/* Status Bar */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-between bg-surface rounded-full border border-border px-6 py-[14px] text-[13px] font-mono text-ink-muted gap-4"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="relative flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 block" />
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
                </span>
                <span className="truncate">Open to internships · Nov 2026</span>
              </div>
              <span className="text-accent font-medium flex-shrink-0">CTO @ Vaylo</span>
              <div className="flex items-center gap-1 flex-shrink-0">
                <MapPin size={12} />
                <span>Sydney, NSW</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile status bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex lg:hidden items-center gap-2 mt-8 bg-surface rounded-full border border-border px-5 py-3.5 text-[13px] font-mono text-ink-muted"
        >
          <span className="relative flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 block" />
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
          </span>
          <span>Open to internships · Nov 2026 · Sydney, NSW</span>
        </motion.div>
      </div>
    </section>
  )
}
