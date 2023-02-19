import { createGlobalStyle } from 'styled-components'
import { type ColorModeTypes } from 'types/theme'
import { dark } from 'redux/slice/colorMode'
import { notionCSS } from '../../notion/styles/notion.style'

export const GlobalCSS = createGlobalStyle<{ colorMode: ColorModeTypes }>`
  html,
  body {
    color: ${({ theme, colorMode }) => {
      if (colorMode === dark) {
        return theme.colors.gray.BLG300
      }
      return theme.colors.gray.BLG900
    }};
    background: ${({ theme, colorMode }) => {
      if (colorMode === dark) {
        return theme.colors.gray.BLG800
      }
      return theme.colors.background.BASIC
    }};
    padding: 0;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    overflow-y: auto;
    overflow-x: hidden;
    transition: 0.3s ease;
  }

  .themeBgc {
    transition: background-color 0.3s ease;
    background-color: ${({ theme, colorMode }) => {
      if (colorMode === dark) return theme.colors.gray.BLG800
      return theme.colors.background.BASIC
    }};
  }
  
  .zIdx-1 {
    z-index: 1;
  }

  .transparent {
    opacity: 0 !important; 
  }

  ${notionCSS}
`
