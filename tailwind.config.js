/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': { 'max': '1100px' },
        'tablet': { 'max': '768px' },
        'mobile': { 'max': '464px' },
      },
      spacing: {
        'layout': 'var(--layout-width)',
        'header': 'var(--header-height)',
        'header-mini': 'var(--header-mini-height)',
        'footer': 'var(--footer-height)',
        'sidebar': 'var(--sidebar-width)',
      },
      fontFamily: {
        default: ['var(--default-font)'],
      },
      colors: {
        'background': 'var(--background)',
      },
    },
  },
  plugins: [],
}