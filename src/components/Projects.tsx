import { motion } from 'framer-motion'
import { GitFork, ExternalLink, CheckCircle2 } from 'lucide-react'
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

function ProjectLinks({ links }: { links: Project['links'] }) {
  return (
    <div className="flex items-center gap-3 mt-6">
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium text-ink-muted hover:text-ink transition-colors duration-200"
        >
          <GitFork size={14} />
          GitHub
        </a>
      )}
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium text-ink-muted hover:text-ink transition-colors duration-200"
        >
          <ExternalLink size={14} />
          Demo
        </a>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: Project['status'] }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
      <CheckCircle2 size={11} />
      {status === 'complete' ? 'Complete' : 'In Progress'}
    </span>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative bg-surface rounded-card border border-border overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-0">
        {/* Left: content */}
        <div className="p-8 flex flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-accent-warm bg-orange-50 px-2.5 py-1 rounded-md font-medium">
              Featured
            </span>
            <StatusBadge status={project.status} />
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <h3
            className="font-syne font-bold text-ink mt-3 mb-[10px]"
            style={{ fontSize: '22px', letterSpacing: '-0.01em' }}
          >
            {project.title}
          </h3>

          <p className="font-sans text-ink-muted font-light" style={{ fontSize: '15px', lineHeight: '1.85' }}>
            {project.description}
          </p>

          <ProjectLinks links={project.links} />
        </div>

        {/* Right: metric */}
        {project.metric && (
          <div className="flex flex-col items-center justify-center p-8 bg-accent-light border-t lg:border-t-0 lg:border-l border-border">
            <span
              className="font-syne font-extrabold text-accent leading-none tracking-[-0.02em]"
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
    </motion.div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative bg-surface rounded-card border border-border overflow-hidden flex flex-col"
      style={{ padding: '28px 32px' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div className="flex flex-wrap gap-2">
        <StatusBadge status={project.status} />
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <h3
        className="font-syne font-bold text-ink mt-3"
        style={{ fontSize: '22px', letterSpacing: '-0.01em', marginBottom: '10px' }}
      >
        {project.title}
      </h3>

      <p className="font-sans text-ink-muted font-light flex-1" style={{ fontSize: '15px', lineHeight: '1.85' }}>
        {project.description}
      </p>

      <ProjectLinks links={project.links} />
    </motion.div>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col"
        >
          {/* Header */}
          <motion.div variants={fadeUp}>
            <p className="font-mono text-ink-muted text-[12px] tracking-[0.16em] mb-4">// Projects</p>
            <h2
              className="font-syne font-extrabold text-ink tracking-[-0.02em] mb-12"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
            >
              Production ML Systems
            </h2>
          </motion.div>

          {/* Featured */}
          <FeaturedCard project={featured} />

          {/* 2-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
