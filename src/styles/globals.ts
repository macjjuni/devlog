import { createGlobalStyle } from 'styled-components'
import { type ColorModeTypes } from 'types/theme'
import { dark } from 'redux/slice/colorMode'
import { notionCSS } from '../../notion/styles/notion.style'

export const GlobalCSS = createGlobalStyle<{ colorMode: ColorModeTypes }>`

  @font-face {
  font-family: 'NanumBarunGothic';
  font-style: normal;
  font-weight: 400;
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
  }

  @font-face {
  font-family: 'NanumBarunGothic';
  font-style: normal;
  font-weight: 700;
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot');
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf') format('truetype')
  }

  @font-face {
  font-family: 'NanumBarunGothic';
  font-style: normal;
  font-weight: 300;
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot');
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf') format('truetype');
  }

  .nanumbarungothic * {
  font-family: 'NanumBarunGothic', sans-serif;
  }

  html,
  body {
    scroll-behavior: smooth;
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

  .fsi {
    font-style: italic;
  }
  .fwb {
    font-weight: bold;
  }

  ${notionCSS}
`
