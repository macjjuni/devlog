import type { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { blinkEffect } from 'layout/Footer/Footer.style'

const SNSLink = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 24px;

  &::after {
    content: '';
    position: absolute;
    bottom: 6px;
    right: 6px;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.system.SUCCESS};
    border-radius: 50%;
    animation: ${blinkEffect} 0.95s ease-in-out infinite alternate;
  }
`
const SNSItemStyled = styled.li`
  font-size: 0;
  width: 40px;
  height: 40px;
  margin-left: 14px;
  border-radius: 50%;
  cursor: pointer;
`

export interface ISNSItem {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon: ReactNode
  title?: string
}

const SNSItem: FC<ISNSItem> = ({ href, target = '_blank', icon, title }) => {
  return (
    <SNSItemStyled>
      <SNSLink href={href} target={target} title={title}>
        {icon}
      </SNSLink>
    </SNSItemStyled>
  )
}

export default SNSItem
