import { Global, css } from '@emotion/react'
// import theme from '@/theme/theme'

const globalStyles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    background: linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb));
  }

  a {
    box-sizing: border-box;
    font-size: inherit;
    color: inherit;
    text-decoration: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 0;
  }
`

const GlobalStyles = () => <Global styles={globalStyles} />
export default GlobalStyles
