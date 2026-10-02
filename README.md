# Anh Duc Tran Portfolio

Personal portfolio site for Anh Duc Tran: UTS Bachelor of Artificial Intelligence student targeting AI/ML Engineering and Software/Backend Engineering internships, and Co-Founder & CTO of Vaylo Technologies.

Live sections: Hero, Projects, Skills, Experience, Contact.

## Stack

- **React 19** + **TypeScript**
- **Vite** (dev server + build)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **lucide-react** for icons

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (HMR)
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Project structure

```
src/
  components/    UI sections (Nav, Hero, Projects, Skills, Experience, Contact, Footer)
  data/          content: projects, experience, skills, resumes
  types/         shared TypeScript interfaces
  utils/         animation variants
```

Content is data-driven: edit the files in `src/data/` to update projects, experience, and skills without touching the components.

## Resumes

Resume download buttons (Hero and Contact) render only when `src/data/resumes.ts` lists at least one file. Put the final files in `public/resume/` and add an entry per file with the correct `format` (`PDF` or `DOCX`).
