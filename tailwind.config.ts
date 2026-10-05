import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F2F0EB',
        surface: '#FFFFFF',
        surface2: '#ECEAE4',
        ink: '#1A1814',
        'ink-muted': '#5F5C55',
        accent: '#2D5BE3',
        'accent-warm': '#E35B2D',
        'accent-light': '#EEF2FD',
        border: '#E0DDD6',
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
} satisfies Config
