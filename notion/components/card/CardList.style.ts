import styled from 'styled-components'
import Link from 'next/link'
import type { ColorModeTypes } from 'type/theme'
import { dark } from 'redux/slice/colorMode'

export const CardWrap = styled.ul`
  display: grid;
  gap: 48px;
  // 데스크톱
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media ${({ theme }) => theme.device.laptop} {
    gap: 16px;
  }
  // 테블릿
  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  // 모바일
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`
export const CardItem = styled.li<{ colormode: ColorModeTypes }>`
  display: flex;
  align-items: flex-start;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow, transform 0.3s ease;
  box-shadow: ${({ colormode }) => {
    if (colormode === dark) {
      return 'rgb(240 240 240 / 10%) 0px 0px 0px 1px, rgb(240 240 240 / 10%) 0px 2px 4px'
    }
    return 'rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px'
  }};
  // 모바일
  @media screen and (max-width: 600px) {
    height: 340px;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ colormode }) => {
      if (colormode === dark) {
        return 'rgba(255, 255, 222, 0.07) 0px 16px 22.4px 4.8px, rgba(255, 255, 222, 0.05) 0px 3.2px 16px 0px, rgba(255, 255, 222, 0.07) 0px 0px 1px 0px'
      }
      return 'rgba(0, 0, 33, 0.07) 0px 16px 22.4px 4.8px, rgba(0, 0, 33, 0.05) 0px 3.2px 16px 0px, rgba(0, 0, 33, 0.07) 0px 0px 1px 0px'
    }};
  }
`
export const CardArticle = styled.article`
  width: 100%;
`
export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const CardImageWrap = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  // 모바일
  @media screen and (max-width: 600px) {
    height: 240px;
  }

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(1) translate(-50%, -50%);
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`
export const DesWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 6px;
  height: 100px;
`
export const CardSubWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > span {
    ${({ theme }) => theme.fontStyle.mobile.text_sm};
  }
  & > time {
    ${({ theme }) => theme.fontStyle.mobile.text_sm};
  }
`
export const CardTitle = styled.h2`
  ${({ theme }) => theme.fontStyle.desktop.text_lg};
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const TagWrap = styled.div``
