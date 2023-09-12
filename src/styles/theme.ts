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

const theme = {
  color: {
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
    dark: '#26282b',
  },
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
}

export interface ICategoryTheme {
  title: string
  class: string
}

export const categoryTheme: ICategoryTheme[] = [
  { title: 'dev', class: 'bg-[#7c42db]' },
  { title: 'daily', class: 'bg-[#eae600]' },
  { title: 'typescript', class: 'bg-[#007acc]' },
  { title: 'react', class: 'bg-[#61dafb]' },
  { title: 'vue', class: 'bg-[#42b983]' },
  { title: 'bitcoin', class: 'bg-[#f7931a]' },
]

export default theme
