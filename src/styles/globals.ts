import { createGlobalStyle } from 'styled-components'
import { colorSchema } from '../utils/colorMode'

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0 auto;
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.gray.BLG900};
    background: ${({ theme }) => theme.colors.background.BASIC};
    padding: 0;
    margin: 0;
    font-family: 'Single Day', 'cursive', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    transition: color, background-color 0.5s ease;
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
  :root[${colorSchema}='dark'] {
    body {
      color: ${({ theme }) => theme.colors.gray.BLG200};
      background: ${({ theme }) => theme.colors.gray.BLG900};
    }
    .nav-link > a::after { 
      background: ${({ theme }) => theme.colors.gray.BLG300};
    }
  }
`
