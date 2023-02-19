import styled from 'styled-components'

export const Banner = styled.div`
  position: relative;
`

export const TopWrap = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 6px;
  overflow: hidden;

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    object-fit: 'cover';
    transform: translate(-50%, -50%);
  }
`

export const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
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
