import { css } from 'styled-components'

// 노션태그 컬러 테이블
export const COLOR_TABLE = {
  purple: '#e9d5ff',
  yellow: '#fef9c3',
  green: '#bbf7d0',
  blue: '#bfdbfe',
  pink: '#fbcfe8',
  brown: '#eee0da',
  red: '#fecaca',
  orange: '#fed7aa',
  gray: '#f3f4f6',
  default: '#c8d6e5',
}

export const notionCSS = css`
  /* 노션 스타일 */
  :root {
    --notion-max-width: 100%;
  }

  .notion-app {
    position: relative;
    min-height: 100vh;
    font-size: 18px;
    background: none;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 16px;
    }
  }

  .notion-page-content {
    width: 100%;
    display: flex;
    flex-direction: row;
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
    text-align: left;
    margin: 10px 0;
  }

  .notion-page {
    padding-bottom: 64px;
    background: ${({ theme }) => theme.colors.background.BASIC};
    transition: 0.3s ease;

    @media ${({ theme }) => theme.device.mobile} {
      padding: 12px 12px 48px 12px;
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
    max-width: 240px;
    padding: 6px;
    transition: background-color 0.3s ease;
  }

  .notion-aside-table-of-contents-header {
    position: relative;
    display: block;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    padding: 4px 0;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 2px;
  }
  .notion-aside-table-of-contents-header::after {
    content: '';
    position: absolute;
    bottom: -13px;
    left: 50%;
    width: 2px;
    height: 12px;
    background-color: #000;
  }
  .dark-mode .notion-aside-table-of-contents-header::after {
    background-color: #fff;
  }

  .notion-table-of-contents > a > span {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
  }

  .medium-zoom--opened {
    position: relative;
    overflow: hidden;
  }

  .notion-property-multi_select-item {
    height: 22px;
  }

  @media screen and (max-width: 1100px) {
    .notion-page-content {
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
    }
    .notion-aside,
    .notion-aside-table-of-contents {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
    }
  }
`
