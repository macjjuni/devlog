import styled, { keyframes } from 'styled-components'

const LoadEffect = keyframes`
  0%{
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, 0);
  }
`
export const LoadBackground = styled.div`
  position: ab;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  transition: opacity 0.6s ease;
`

export const LoadWrap = styled.div`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;

  & > div > .dot:nth-last-child(1) {
    animation: ${LoadEffect} 0.6s 0.1s linear infinite;
  }
  & > div > .dot:nth-last-child(2) {
    animation: ${LoadEffect} 0.6s 0.2s linear infinite;
  }
  & > div > .dot:nth-last-child(3) {
    animation: ${LoadEffect} 0.6s 0.3s linear infinite;
  }
`
export const Dot = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 0.2rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.system.ERROR};
`
