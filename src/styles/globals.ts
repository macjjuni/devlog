import { createGlobalStyle } from 'styled-components'
import { type ColorModeTypes } from 'type/theme'
import { dark } from 'redux/slice/colorMode'

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

  /* box-shadow:rgba(0, 0, 33, 0.07) 0px 16px 22.4px 4.8px,rgba(0, 0, 33, 0.05) 0px 3.2px 16px 0px,rgba(0, 0, 33, 0.07) 0px 0px 1px 0px; */
`
