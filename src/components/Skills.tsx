import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import { fadeUp, stagger } from '../utils/animations'
import type { SkillGroup } from '../types'

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-surface rounded-card border border-border p-6 flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">{group.emoji}</span>
        <h3 className="font-display font-bold text-ink text-[16px]">{group.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.chips.map((chip) => (
          <span
            key={chip}
            className="font-mono text-[12px] text-ink-muted bg-surface2 border border-border rounded-md px-2.5 py-1"
          >
            {chip}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 pt-[120px] pb-24">
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
            <p className="font-mono text-ink-muted text-[12px] tracking-[0.16em]">// Skills</p>
            <h2
              className="font-display font-extrabold text-ink tracking-[-0.03em]"
              style={{ fontSize: 'clamp(36px, 4vw, 48px)' }}
            >
              Technical Skills
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillGroups.map((group) => (
              <SkillGroupCard key={group.title} group={group} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
