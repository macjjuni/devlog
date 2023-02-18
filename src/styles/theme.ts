import { DefaultTheme, css } from 'styled-components'

export type TypoVariantTypes = 'heading_xlg' | 'heading_lg' | 'heading_md' | 'heading_sm' | 'body' | 'text_strong' | 'text_lg' | 'text_md' | 'text_sm' | 'default'

// 디바이스별 반응형 미디어쿼리 분기점
export const deviceSizes = {
  mobile: '768px',
  tablet: '960px',
  laptop: '1200px',
}
const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
}
const layout = {
  desktop: {
    header: '70px',
    main: `calc(100vh - 138px)`,
    footer: '68px',
  },
  mobile: {
    header: '60px',
    main: `calc(100vh - 128px)`,
    footer: '68px',
  },
}

export const colors = {
  text: {
    BODY: '#1B1D1F',
    HEADING: '#26282B',
    HELPTEXT: '#9EA4AA',
    PLACEHOLDER: '#C9CDD2',
  },
  border: '#DEE2E6',
  background: {
    DIM: 'rgba(0, 0 , 0, 0.6)',
    HIGHLIGHT: '#C9CDD2',
    DISABLED: '#F8F9FA',
    BASIC: '#fff',
  },
  primary: {
    DARK: '#0E6FDB',
    MED: '#0782EF',
    MAIN: '#33A1FF',
    LIGHT: '#E2F1FF',
  },
  secondary: {
    DARK: '#00AD28',
    MED: '#32D962',
    MAIN: '#32D962',
    LIGHT: '#E6FAE9',
  },
  accent: {
    DARK: '#E56C00',
    MED: '#EC7C01',
    MAIN: '#F59704',
    LIGHT: '#F59704',
  },
  gray: {
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
  },
  system: {
    ERROR: '#FA5C5C',
    ERROR_LIGHT: '#FFF5F5',
    SUCCESS: '#04cf52',
    SUCCESS_LIGHT: '#F3FFF8',
    WARNING: '#FFAB49',
    WARNING_LIGHT: '#FFF8F2',
    INFO50: '#F3FAFF',
    INFO100: '#BDE0FF',
    INFO200: '#33A1FF',
  },
}

// Typography Font Style
const fontStyle = {
  desktop: {
    heading_xlg: css`
      font-size: 44px;
      line-height: 64px;
    `,
    heading_lg: css`
      font-size: 30px;
      line-height: 45px;
    `,
    heading_md: css`
      font-size: 26px;
      line-height: 40px;
    `,
    heading_sm: css`
      font-size: 22px;
      line-height: 36px;
    `,
    body: css`
      font-size: 18px;
      line-height: 27px;
    `,
    text_strong: css`
      font-size: 18px;
      line-height: 29px;
    `,
    text_lg: css`
      font-size: 20px;
      line-height: 30px;
    `,
    text_md: css`
      font-size: 16px;
      line-height: 24px;
    `,
    text_sm: css`
      font-size: 14px;
      line-height: 18px;
    `,
    default: css``,
  },
  mobile: {
    heading_xlg: css`
      font-size: 28px;
      line-height: 43px;
    `,
    heading_lg: css`
      font-size: 24px;
      line-height: 37px;
    `,
    heading_md: css`
      font-size: 22px;
      line-height: 34px;
    `,
    heading_sm: css`
      font-size: 19px;
      line-height: 32px;
    `,
    body: css`
      font-size: 16px;
      line-height: 27px;
    `,
    text_strong: css`
      font-size: 18px;
      line-height: 29px;
    `,
    text_lg: css`
      font-size: 20px;
      line-height: 30px;
    `,
    text_md: css`
      font-size: 16px;
      line-height: 24px;
    `,
    text_sm: css`
      font-size: 14px;
      line-height: 18px;
    `,
    default: css``,
  },
}

export type ColorsTypes = typeof colors
export type DeviceTypes = typeof device
export type LayoutTypes = typeof layout
export type FontTypes = typeof fontStyle

export const theme: DefaultTheme = {
  colors,
  device,
  fontStyle,
  layout,
}
