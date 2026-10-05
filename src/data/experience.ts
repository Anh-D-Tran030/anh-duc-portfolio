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
      'Building a construction SaaS platform for document control, site operations, and cost planning.',
      'Built an agent that flags cost items more than 15% off forecast for human review.',
      'Deployed the MVP with React, Node.js, and Supabase, including role-based workspaces.',
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
