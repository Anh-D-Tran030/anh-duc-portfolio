import type { Resume } from '../types'

// Download buttons in Hero and Contact render only when this list is non-empty.
// To publish: put the final files in public/resume/ and add entries, e.g.
//   { label: 'Applied AI resume', href: '/resume/Anh_Duc_Tran_Resume_Applied_AI.pdf', format: 'PDF' },
//   { label: 'Backend resume', href: '/resume/Anh_Duc_Tran_Resume_Backend.pdf', format: 'PDF' },
export const resumes: Resume[] = []
