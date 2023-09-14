import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { dark, light } from '@/types/theme'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0 auto;
    box-sizing: border-box;
  }
  :root {
    font-family: 'Noto Sans Korean', 'Noto Sans', system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    box-sizing: border-box;
    font-size: inherit;
    color: inherit;
    text-decoration: inherit;
  }

  body {
    margin: 0;
    transition: color, background-color ${theme.trs.sm};
  }

  html[data-theme="${light}"] > body {
    color: ${theme.color.lightColor};
    background-color: ${theme.color.lightBg};
  }
  html[data-theme="${dark}"] > body {
    color: ${theme.color.darkColor};
    background-color: ${theme.color.darkBg};
  }
`

export default GlobalStyle
