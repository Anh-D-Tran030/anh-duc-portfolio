import { motion } from 'framer-motion'
import { GitFork, ExternalLink, CheckCircle2, Clock } from 'lucide-react'
import { projects, infraTags } from '../data/projects'
import { fadeUp, stagger } from '../utils/animations'
import type { Project } from '../types'

function Tag({ label }: { label: string }) {
  const isInfra = infraTags.has(label)
  return (
    <span
      className={`inline-block font-mono text-[12px] px-3 py-[5px] rounded-md ${
        isInfra
          ? 'bg-surface2 text-ink-muted'
          : 'bg-accent-light text-accent'
      }`}
    >
      {label}
    </span>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  const { links, title } = project
  if (!links.github && !links.demo) return null

  return (
    <div className="flex items-center gap-4 mt-6">
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} on GitHub (opens in a new tab)`}
          className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium text-ink-muted hover:text-ink transition-colors duration-200"
        >
          <GitFork size={14} aria-hidden="true" />
          GitHub
        </a>
      )}
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} demo (opens in a new tab)`}
          className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium text-ink-muted hover:text-ink transition-colors duration-200"
        >
          <ExternalLink size={14} aria-hidden="true" />
          Demo
        </a>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: Project['status'] }) {
  const done = status.tone === 'done'
  const Icon = done ? CheckCircle2 : Clock
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-md ${
        done ? 'text-emerald-800 bg-emerald-50' : 'text-amber-800 bg-amber-50'
      }`}
    >
      <Icon size={11} aria-hidden="true" />
      {status.label}
    </span>
  )
}

function ProjectSections({ sections }: { sections: Project['sections'] }) {
  if (!sections) return null

  return (
    <dl className="flex flex-col gap-3 mt-5">
      {sections.map((section) => (
        <div key={section.label} className="flex flex-col gap-1">
          <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
            {section.label}
          </dt>
          <dd
            className="font-sans text-ink-muted m-0"
            style={{ fontSize: '15px', lineHeight: '1.55', maxWidth: '62ch' }}
          >
            {section.detail}
          </dd>
        </div>
      ))}
    </dl>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative bg-surface rounded-card border border-border overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-0">
        {/* Left: content */}
        <div className="flex flex-col p-6 sm:px-10 sm:py-9 max-w-[720px]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-orange-800 bg-orange-50 px-2.5 py-1 rounded-md font-medium">
              Featured
            </span>
            <StatusBadge status={project.status} />
          </div>

          <h3
            className="font-display font-bold text-ink mt-3 mb-2"
            style={{ fontSize: '23px', letterSpacing: '-0.02em' }}
          >
            {project.title}
          </h3>

          <p className="font-sans text-ink-muted" style={{ fontSize: '16px', lineHeight: '1.55', maxWidth: '60ch' }}>
            {project.description}
          </p>

          <ProjectSections sections={project.sections} />

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <ProjectLinks project={project} />
        </div>

        {/* Right: metric */}
        {project.metric && (
          <div className="flex flex-col items-center justify-center bg-accent-light border-t lg:border-t-0 lg:border-l border-border p-8 sm:p-10">
            <span
              className="font-display font-extrabold text-accent leading-none tracking-[-0.035em]"
              style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}
            >
              {project.metric.value}
            </span>
            <span className="font-sans text-ink-muted text-center leading-snug mt-2" style={{ fontSize: '13px' }}>
              {project.metric.label}
            </span>
          </div>
        )}
      </div>
    </motion.article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative bg-surface rounded-card border border-border overflow-hidden flex flex-col p-6 sm:px-9 sm:py-8"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div className="flex flex-wrap gap-2">
        <StatusBadge status={project.status} />
      </div>

      <h3
        className="font-display font-bold text-ink mt-3"
        style={{ fontSize: '23px', letterSpacing: '-0.02em', marginBottom: '8px' }}
      >
        {project.title}
      </h3>

      <p className="font-sans text-ink-muted" style={{ fontSize: '16px', lineHeight: '1.55', maxWidth: '55ch' }}>
        {project.description}
      </p>

      <ProjectSections sections={project.sections} />

      <div className="flex flex-wrap gap-2 mt-6">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <div className="flex-1" />
      <ProjectLinks project={project} />
    </motion.article>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <p className="font-mono text-ink-muted text-[12px] tracking-[0.16em] mb-4">// Projects</p>
            <h2
              className="font-display font-extrabold text-ink tracking-[-0.03em] max-w-[800px]"
              style={{ fontSize: 'clamp(36px, 4vw, 48px)' }}
            >
              Selected Projects
            </h2>
            <p className="font-sans text-ink-muted text-[17px] leading-[1.55] mt-3 max-w-[640px]">
              Applied AI, backed by reliable APIs, evaluation, and delivery.
            </p>
          </motion.div>

          {/* Featured */}
          <FeaturedCard project={featured} />

          {/* 2-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
