import type { LucideIcon } from 'lucide-react'

export interface SkillCard {
  icon: LucideIcon
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  featured?: boolean
  metric?: { value: string; label: string }
  sections?: { label: string; detail: string }[]
  status: { label: string; tone: 'done' | 'ongoing' }
  links: { github?: string; demo?: string }
}

export interface SkillGroup {
  emoji: string
  title: string
  chips: string[]
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  highlight: boolean
  bullets: string[]
  tags: string[]
}

export interface Resume {
  label: string
  href: string
  format: 'PDF' | 'DOCX'
}

export type { LucideIcon }
