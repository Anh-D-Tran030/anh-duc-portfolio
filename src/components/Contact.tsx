import { motion } from 'framer-motion'
import { Mail, GitFork, ExternalLink, Download } from 'lucide-react'
import { fadeUp, stagger } from '../utils/animations'
import { resumes } from '../data/resumes'

const EMAIL = 'trananhduc10022007@gmail.com'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 pt-[120px] pb-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div
            variants={fadeUp}
            className="relative bg-ink rounded-[14px] px-6 py-10 md:p-14 text-center overflow-hidden"
          >
            {/* Decorative blurred circle */}
            <div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: '#2D5BE3', opacity: 0.15, filter: 'blur(60px)' }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="font-syne font-extrabold text-white text-4xl md:text-[40px] tracking-[-0.02em]">
                Get in touch
              </h2>

              <p className="font-sans text-[15px] leading-[1.7] font-light max-w-lg"
                style={{ color: 'rgba(255,255,255,0.75)' }}>
                Looking for AI/ML Engineering and Software/Backend Engineering internships in
                Sydney. Email is the fastest way to reach me.
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="font-mono text-[14px] sm:text-[15px] text-white underline underline-offset-4 decoration-white/40 hover:decoration-white break-all"
              >
                {EMAIL}
              </a>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink font-sans font-medium text-sm hover:bg-surface2 transition-colors duration-200"
                >
                  <Mail size={15} aria-hidden="true" />
                  Email Me
                </a>
                <a
                  href="https://github.com/Anh-D-Tran030"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub (opens in a new tab)"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-sans font-medium text-sm hover:bg-white/10 transition-colors duration-200"
                >
                  <GitFork size={15} aria-hidden="true" />
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/anh-tran-39b484305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn (opens in a new tab)"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-sans font-medium text-sm hover:bg-white/10 transition-colors duration-200"
                >
                  <ExternalLink size={15} aria-hidden="true" />
                  LinkedIn ↗
                </a>
                {resumes.map((resume) => (
                  <a
                    key={resume.href}
                    href={resume.href}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-sans font-medium text-sm hover:bg-white/10 transition-colors duration-200"
                  >
                    <Download size={15} aria-hidden="true" />
                    {resume.label} ({resume.format})
                  </a>
                ))}
              </div>

              {/* Availability note */}
              <p className="font-mono text-[12px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Available from November 2026 · Sydney, NSW
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
