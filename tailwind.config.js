/** @type {import('tailwindcss').Config} */

const layout = {
  width: '1200px',
  height: '100dvh',
  header: {
    height: '56px',
  },
  main: {
    width: '1200px',
  },
  footer: {
    height: '32px',
  },
  page: {
    left: '280px',
    right: '100%',
  },
}

const size = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  xxl: '24px',
  xxxl: '28px',
  xxxxl: '32px',
}

module.exports = {
  darkMode: 'class',
  content: ['./layout/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '465px',
        md: '768px',
        lg: '1100px',
      },
      colors: {
        yellow: '#feca57',
        red: '#ED2B2A',
        navy: '#341f97',
        black: '#222f3e',
        primary: '#228bf8',
        secondary: '#32D962',
        SUCCESS: '#04cf52',
        WARNING: '#FFAB49',
        BLG0: '#ffffff',
        BLG50: '#F8F9FA',
        BLG100: '#F1F3F5',
        BLG200: '#E8EBED',
        BLG300: '#DEE2E6',
        BLG400: '#C9CDD2',
        BLG500: '#9EA4AA',
        BLG600: '#72787F',
        BLG700: '#454C53',
        BLG800: '#26282B',
        BLG900: '#1B1D1F',
        BLG1000: '#000000',
      },
      maxWidth: {
        layout: layout.width,
        header: layout.width,
        left: layout.page.left,
        right: layout.page.right,
      },
      width: {},
      height: {
        header: layout.header.height,
        footer: layout.footer.height,
      },
      minHeight: {
        layout: layout.height,
      },
      inset: {
        ...size,
        headerHalf: `calc(${layout.header.height} / 2)`,
        header: layout.header.height,
      },
      gap: {
        ...size,
      },
      fontSize: {
        ...size,
        logo: ['32px', { fontWeight: '900', lineHeight: '34px' }],
        body: ['16px', { fontWeight: '400', lineHeight: '18px' }],
        nav: ['20px', { fontWeight: '300', lineHeight: '22px' }],
        navActive: ['22px', { fontWeight: '600', lineHeight: '24px' }],
        categoryTitle: ['22px', { fontWeight: '600' }],
        category: ['18px', { fontWeight: '300', lineHeight: 1.15 }],
        categoryActive: ['18px', { fontWeight: '600', lineHeight: 1.15 }],
        pageHeading: ['26px', { fontWeight: '600', lineHeight: 1.15 }],
        postCat: ['20px', { fontWeight: 'bold' }],
        postTitle: ['20px'],
        postDate: ['16px'],
        postTag: ['16px'],
      },
      padding: {
        ...size,
        main: layout.header.height,
      },
      margin: size,
      boxShadow: {
        header: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        headerDark: 'rgba(195, 191, 188, 0.3) 0px 1px 2px 0px, rgba(195, 191, 188, 0.15) 0px 2px 6px 2px',
        newIcon: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        newIconDark: 'rgba(255, 255, 255, 0.05) 0px 6px 24px 0px, rgba(255, 255, 255, 0.08) 0px 0px 0px 1px',
        tag: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
      },
      transitionProperty: { header: 'transform' },
      transitionDuration: { header: '0.2s' },
      transitionTimingFunction: { header: 'linear' },
    },
  },
  plugins: [],
}
