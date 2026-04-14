import { motion } from 'framer-motion'
import { Mail, GitFork, ExternalLink } from 'lucide-react'
import { fadeUp, stagger } from '../utils/animations'

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
            className="relative bg-ink rounded-[14px] p-10 md:p-14 text-center overflow-hidden"
          >
            {/* Decorative blurred circle */}
            <div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: '#2D5BE3', opacity: 0.15, filter: 'blur(60px)' }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="font-syne font-extrabold text-white text-4xl md:text-[40px] tracking-[-0.02em]">
                Let's build something.
              </h2>

              <p className="font-sans text-[15px] leading-[1.7] font-light max-w-lg"
                style={{ color: 'rgba(255,255,255,0.6)' }}>
                Open to ML Engineering internships in Sydney. I ship production systems, not just
                notebooks.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                <a
                  href="mailto:trananhduc10022007@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink font-sans font-medium text-sm hover:bg-surface2 transition-colors duration-200"
                >
                  <Mail size={15} />
                  Email Me
                </a>
                <a
                  href="https://github.com/anhduc-tran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-sans font-medium text-sm hover:bg-white/10 transition-colors duration-200"
                >
                  <GitFork size={15} />
                  GitHub ↗
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-sans font-medium text-sm hover:bg-white/10 transition-colors duration-200"
                >
                  <ExternalLink size={15} />
                  LinkedIn ↗
                </a>
              </div>

              {/* Availability note */}
              <p className="font-mono text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Available from November 2026 · Sydney, NSW
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
