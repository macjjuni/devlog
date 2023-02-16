import type { FC, ReactNode } from 'react'
import { useAppSelector } from 'redux/hook'
import * as S from './SNSItem.style'
import { SNSItem as SNSImtesStyled } from '../SNSIcons/SNSIcons.style'

export interface ISNSItem {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon: ReactNode
  title?: string
}

const SNSItem: FC<ISNSItem> = ({ href, target = '_blank', icon, title }) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  return (
    <SNSImtesStyled colorMode={colorMode}>
      <S.SNSLink href={href} target={target} title={title} whileHover={{ rotate: 8 }} transition={{ duration: 0.3 }}>
        {icon}
      </S.SNSLink>
    </SNSImtesStyled>
  )
}

export default SNSItem
