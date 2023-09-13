import '@emotion/react'
import theme from '@/styles/theme'

const themes = theme('light')
type ThemeTpye = typeof themes

declare module '@emotion/react' {
  export interface Theme extends ThemeTpye {}
}
