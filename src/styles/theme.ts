import { css } from '@emotion/react'

const breakPoint = {
  tablet: 1100,
  mobile: 768,
}

const tablet = (style: string) => css`
  @media screen and (max-width: ${breakPoint.tablet}px) {
    ${css`
      ${style}
    `}
  }
`
const mobile = (style: string) => css`
  @media screen and (max-width: ${breakPoint.mobile}px) {
    ${css`
      ${style}
    `}
  }
`
export const color = {
  primary: '#1d74ff',
  error: '',
  success: '',
  warning: '',
  BLG0: '#ffffff',
  BLG100: '#f1f3f5',
  BLG200: '#e8ebed',
  BLG300: '#dee2e6',
  BLG400: '#c9cdd2',
  BLG500: '#9ea4aa',
  BLG600: '#72787f',
  BLG700: '#454c53',
  BLG800: '#26282b',
  BLG900: '#1b1d1f',
  BLG1000: '#000000',
}

const lightTheme = {
  color: color.BLG800,
  bg: color.BLG0,
}
const darkTheme = {
  color: color.BLG800,
  bg: color.BLG0,
}

const defaultTheme = {
  color,
  mode: {},
  size: {
    xs: '2px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xxl: '32px',
    xxxl: '48px',
    max: '40px',
    header: '36px',
    main: '100dvh',
    footer: '32px',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '28px',
    max: '34px',
    category: '38px',
    categoryActive: '42px',
  },
  trs: {
    sm: '0.33s ease',
    md: '0.66s ease',
    lg: '1s ease',
  },
  breakPoint: {
    tablet: breakPoint.tablet,
    mobile: breakPoint.mobile,
  },
  response: {
    tablet,
    mobile,
  },
  categoryColor: [
    { key: 'dev', color: '#7c42db' },
    { key: 'daily', color: '#eae600' },
    { key: 'typescript', color: '#007acc' },
    { key: 'react', color: '#61dafb' },
    { key: 'vue', color: '#42b983' },
    { key: 'bitcoin', color: '#f7931a' },
    { key: 'default', color: '#eee' },
  ],
}

type ThemeType = 'light' | 'dark'

const theme = (theme: ThemeType) => {
  if (theme === 'light') defaultTheme.mode = lightTheme
  else defaultTheme.mode = darkTheme
  return defaultTheme
}

export default theme
