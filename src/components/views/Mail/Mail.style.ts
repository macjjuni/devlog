import styled from 'styled-components'

export const Mail = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    justify-content: flex-end;
  }
`
export const MailWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    & > .mail-text::after {
      width: 100%;
    }
  }
`

export const Spacer = styled.div`
  width: 10px;
`
export const LottieCustom = styled.div`
  margin: 0 -10px;
`
export const MailText = styled.div`
  position: relative;
  top: 1px;
  ${({ theme }) => theme.fontStyle.pc.text_lg};

  &::after {
    content: '';
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 0%;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.primary.MAIN};
    transition: width 0.2s ease;
    z-index: -1;
  }
`
