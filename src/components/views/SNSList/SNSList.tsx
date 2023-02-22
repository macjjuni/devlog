import { FiGithub, FiInstagram } from 'react-icons/fi'
import styled from 'styled-components'
import TistorySVG from './components/TistoryIcon'
import SNSItem from './components/SNSItem'

export const SNSListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;

  & > li:first-child > a > svg {
    width: 28px;
    height: 28px;
  }
  & > li:nth-child(2) > a > svg {
    width: 23px;
    height: 23px;
  }
  & > li:last-child > a > svg {
    width: 28px;
    height: 28px;
  }
`

const SNSList = () => {
  return (
    <SNSListStyled>
      <SNSItem href="https://github.com/macjjuni" title="Github Profile" icon={<FiGithub />} />
      <SNSItem href="https://juni-official.tistory.com" title="Tistory Blog" icon={<TistorySVG />} />
      <SNSItem href="https://www.instagram.com/juni.btc/" title="Instagram Profile" icon={<FiInstagram />} />
    </SNSListStyled>
  )
}

export default SNSList
