import { FiGithub, FiInstagram } from 'react-icons/fi'
import { CgNotes } from 'react-icons/cg'
import { UlStyled } from '../style'
import LinkWrap from './LinkWrap'

const SnsIcons = () => {
  return (
    <UlStyled>
      <li>
        <LinkWrap href="https://github.com/macjjuni" icon={<FiGithub />} />
      </li>
      <li>
        <LinkWrap href="https://juni-official.tistory.com" icon={<CgNotes />} />
      </li>
      <li>
        <LinkWrap href="https://www.instagram.com/juni.btc/" icon={<FiInstagram />} />
      </li>
    </UlStyled>
  )
}

export default SnsIcons
