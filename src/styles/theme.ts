import { css } from 'styled-components'

export interface ICateColor {
  key: string
  color: string
}

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

export const palette = {
  primary: '#1d74ff',
  error: '',
  success: '',
  warning: '',
  BLG0: '#ffffff',
  BLG100: '#f3f3f4',
  BLG200: '#e8ebed',
  BLG300: '#dee2e6',
  BLG400: '#c9cdd2',
  BLG500: '#9ea4aa',
  BLG600: '#72787f',
  BLG700: '#454c53',
  BLG800: '#26282b',
  BLG900: '#1b1d1f',
  BLG1000: '#000000',
  BookBg: '#464646',
}

const color = {
  ...palette,
  lightColor: palette.BLG800,
  lightBg: palette.BLG0,
  darkColor: palette.BLG0,
  darkBg: palette.BLG800,
}

const theme = {
  color,
  size: {
    xs: '2px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xxl: '32px',
    xxxl: '48px',
    xxxxl: '64px',
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
    postTitle: '30px',
    category: '32px',
    categoryActive: '34px',
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
    { key: 'dev', color: '#9a57ff' },
    { key: 'bitcoin', color: '#f7931a' },
    { key: 'js/ts', color: '#FFCA28' },
    { key: 'react', color: '#61dafb' },
    { key: 'vue', color: '#42b983' },
    { key: 'cs', color: '#cf4040' },
    { key: 'git', color: '#EE513B' },
    { key: '일상', color: '#26b7f0' },
    { key: 'default', color: '#3e3e3e' },
  ],
}

export default theme
