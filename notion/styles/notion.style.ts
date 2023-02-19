import { css } from 'styled-components'

export const notionCSS = css`
  /* 노션 스타일 */
  :root {
    --notion-max-width: 100%;
  }

  .notion-app {
    min-height: auto;
    font-size: 18px;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 16px;
    }
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
    max-width: 280px;
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
`
