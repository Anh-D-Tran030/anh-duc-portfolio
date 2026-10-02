import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 'vaylo',
    company: 'Vaylo Technologies',
    role: 'Co-Founder & CTO',
    period: 'Jan 2026 – Present',
    location: 'Sydney, NSW',
    highlight: true,
    bullets: [
      'Building a construction SaaS platform with three modules: Flow (document transmittals and version control), Core (site operations, RFIs and daily logs) and Quant (cost estimation and budgeting).',
      'Built a cost anomaly agent that flags line items deviating more than 15% from forecast and writes them to a daily log for human review before any action.',
      'Deployed the MVP on React, Node.js, Supabase and AI APIs; designed multi-user workspaces with role-based access control.',
    ],
    tags: ['React', 'Node.js', 'Supabase', 'AI APIs', 'System Architecture'],
  },
  {
    id: 'tutor',
    company: 'Vinschool, Central Park Campus',
    role: 'Academic Tutor',
    period: '2021 – 2023',
    location: 'Ho Chi Minh City, Vietnam',
    highlight: false,
    bullets: [
      'Provided one-on-one academic support; improved student confidence through targeted sessions.',
      'Adapted explanations to different learning styles across subjects.',
    ],
    tags: [],
  },
]
