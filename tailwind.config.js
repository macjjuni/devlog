/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': { 'max': '1280px' },
        'tablet': { 'max': '920px' },
        'mobile': { 'max': '464px' },
      },
      spacing: {
        'layout': 'var(--layout-width)',
        'header': 'var(--header-height)',
        'header-mini': 'var(--header-mini-height)',
        'footer': 'var(--footer-height)',
      },
      fontFamily: {
        default: ['var(--default-font)'],
      },
      colors: {
        'background': 'var(--background)',
        'surface': 'var(--surface)',
        'terminal-amber': 'var(--terminal-amber)',
        'terminal-amber-dim': 'var(--terminal-amber-dim)',
        'terminal-text': 'var(--terminal-text)',
        'terminal-dim': 'var(--terminal-dim)',
        'terminal-border': 'var(--terminal-border)',
        'terminal-border-dim': 'var(--terminal-border-dim)',
      },
      boxShadow: {
        'glow': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'glow-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
