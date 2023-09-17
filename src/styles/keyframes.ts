import * as SC from 'styled-components'

const tooltipHover = SC.keyframes`
  \ 0% {
    top: 0%;
  }
  \ 10% {
    top: 90%;
  }
  \ 100% {
    top: 118%;
    opacity: 1;
  }
`
export const tooltipHoverFrames = SC.css`
  animation: ${tooltipHover} 0.2s ease-in-out forwards;
`

const tooltipUnHover = SC.keyframes`
  \ 0% {
    top: 118%;
    opacity: 1;
  }
  \ 90% {
    top: 90%;
    opacity: 0;
  }
  \ 100% {
    top: 0%;
    opacity: 0;
  }
`
export const tooltipUnHoverFrames = SC.css`
  animation: ${tooltipUnHover} 0.16s ease-in-out forwards;
`
