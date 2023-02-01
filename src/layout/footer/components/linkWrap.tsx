import { FC } from 'react'
import { LinkStyled } from '../style'
import { ILinkWrap } from '../type'

const LinkWrap: FC<ILinkWrap> = ({ href, target = '_blank', icon, title }) => {
  return (
    <LinkStyled href={href} target={target} title={title} whileHover={{ rotate: 7 }} transition={{ duration: 0.2 }}>
      {icon}
    </LinkStyled>
  )
}

export default LinkWrap
