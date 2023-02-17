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
  /* 노션 스타일 */
  :root {
    --notion-max-width: 100%;
  }

  .notion-app {
    font: inherit;
    min-height: auto;
  }

  .notion-page-cover-wrapper {
    margin-bottom: -60px;
  }

  .notion-page-icon-hero.notion-page-icon-image .notion-page-icon {
    border-radius: 4rem;
  }

  .notion-h {
    span {
      display: flex;
      align-items: center;

      svg {
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  .notion-title {
    text-align: center;
  }

  .notion-page {
    padding-bottom: 64px;
    background: ${({ theme }) => theme.colors.background.BASIC};
    transition: 0.3s ease;

    @media ${({ theme }) => theme.device.mobile} {
      padding: 12px;
    }
  }
  // 노션 상세페이지 다크모드 배경색
  .dark-mode .notion-page {
    background-color: ${({ theme }) => theme.colors.gray.BLG800};
  }

  .notion-page-content-has-aside {
    gap: 1rem;
    width: 100%;
  }

  .notion-aside-table-of-contents {
    min-width: 200px;
    max-width: 300px;
    padding: 6px;
    transition: background-color 0.3s ease;
  }

  .notion-aside-table-of-contents-header {
    display: block;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    padding: 4px 0;
    text-align: left;
    border-radius: 2px;
  }

  .notion-table-of-contents > a > span {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
  }

`
