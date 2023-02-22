import { createGlobalStyle } from 'styled-components'

// SSR 전용 스타일시트
export const GlobalStyles = createGlobalStyle`

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
    padding: 0;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    overflow-y: auto;
    overflow-x: hidden;
    transition: 0.3s ease;
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
  .nanum {
    font-family: 'NanumBarunGothic';
  }
`
