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
      'Architecting an AI-driven CRM and inventory platform integrating automation, workspace tools, and ML-powered insights.',
      'Leading technical roadmap and ML pipeline development — from data ingestion to model serving.',
      'Shipped MVP using React, Node.js, Supabase, and AI APIs; designed multi-user workspace architecture with RBAC.',
    ],
    tags: ['React', 'Node.js', 'Supabase', 'AI APIs', 'System Architecture'],
  },
  {
    id: 'tutor',
    company: 'Vinschool — Central Park Campus',
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
