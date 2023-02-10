import { createGlobalStyle } from 'styled-components'
import { type ColorModeTypes } from 'type/theme'
import { light } from 'redux/slice/colorMode'

export const GlobalCSS = createGlobalStyle<{ colorMode: ColorModeTypes }>`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    color: ${({ theme, colorMode }) => {
      if (colorMode === light) {
        return theme.colors.gray.BLG900
      }
      return theme.colors.gray.BLG300
    }};
    background: ${({ theme, colorMode }) => {
      if (colorMode === light) {
        return theme.colors.background.BASIC
      }
      return theme.colors.gray.BLG800
    }};
    padding: 0;
    margin: 0;
    font-family: 'Single Day', 'cursive', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    transition: 0.5s ease;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    margin: 0;
  }

  button {
    border: 0;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  a {
    margin: 0;
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    margin: 0;
    padding: 0;
  }

  img {
    margin: 0;
  }

  li {
    list-style: none;
  }
  /* :root[${colorSchema}='dark'] {
    .nav-link > a::after {
      background: ${({ theme }) => theme.colors.gray.BLG300} !important;
    }
    .tistory-svg { fill: #fff }
  } */

  /* box-shadow:rgba(0, 0, 33, 0.07) 0px 16px 22.4px 4.8px,rgba(0, 0, 33, 0.05) 0px 3.2px 16px 0px,rgba(0, 0, 33, 0.07) 0px 0px 1px 0px; */
`
