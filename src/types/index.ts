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
  status: 'complete' | 'in-progress'
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

export type { LucideIcon }
