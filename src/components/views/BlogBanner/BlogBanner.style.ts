import styled from 'styled-components'

export const Banner = styled.div``

export const TopWrap = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 3px;
  overflow: hidden;
  z-index: -1;
  user-select: none;

  @media ${({ theme }) => theme.device.mobile} {
    height: 200px;
  }

  & > img {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: auto;
    object-fit: 'cover';
    transform: translate(-50%, 0%);
  }
`

export const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 100px;
  margin-top: 30px;
`
export const TextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const BannerIcon = styled.div`
  font-size: 36px;
  margin-right: 12px;
`
export const TextBody = styled.div`
  ${({ theme }) => theme.fontStyle.desktop.heading_lg};
  font-weight: bold;
`

export const Description = styled.p`
  padding-left: 5px;
  ${({ theme }) => theme.fontStyle.desktop.text_md};
`
