import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { experiences } from '../data/experience'
import { fadeUp, stagger } from '../utils/animations'
import type { Experience } from '../types'

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`relative bg-surface rounded-card border p-6 flex flex-col gap-4 ${
        exp.highlight ? 'border-l-[3px] border-l-accent border-border' : 'border-border'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display font-bold text-ink text-[18px]">{exp.company}</h3>
            {exp.highlight && (
              <span className="font-mono text-[10px] font-medium text-orange-800 bg-orange-50 px-2 py-0.5 rounded-full">
                CTO
              </span>
            )}
          </div>
          <p className="font-sans text-accent font-medium text-[14px]">{exp.role}</p>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1 text-[12px] font-mono text-ink-muted flex-shrink-0">
          <span>{exp.period}</span>
          <span className="flex items-center gap-1">
            <MapPin size={10} aria-hidden="true" />
            {exp.location}
          </span>
        </div>
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-2 list-none p-0 m-0">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2.5 text-[15px] font-sans font-medium text-ink-muted leading-[1.55]">
            <span className="text-accent mt-[6px] flex-shrink-0 text-[8px]" aria-hidden="true">▶</span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tags */}
      {exp.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] text-ink-muted bg-surface2 border border-border rounded-md px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-10"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <p className="font-mono text-ink-muted text-[12px] tracking-[0.16em]">// Experience</p>
            <h2
              className="font-display font-extrabold text-ink tracking-[-0.03em]"
              style={{ fontSize: 'clamp(36px, 4vw, 48px)' }}
            >
              Where I've Built
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative flex flex-col gap-5">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border -ml-6 hidden lg:block" />
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
