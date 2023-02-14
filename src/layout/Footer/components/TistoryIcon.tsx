import { useAppSelector } from 'redux/hook'
import * as F from '../Footer.style'

const TistorySVG = () => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)

  return (
    <F.SVGStyled colorMode={colorMode} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.4 408.4" className="tistory-svg">
      <g>
        <circle className="cls-1" cx="58.18" cy="58.18" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="58.18" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="204.2" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="350.22" r="58.18" />
        <circle className="cls-1" cx="350.22" cy="58.18" r="58.18" />
      </g>
    </F.SVGStyled>
  )
}

export default TistorySVG
