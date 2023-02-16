import { useAppSelector } from 'redux/hook'
import * as T from './TistoryIcon.style'

const TistorySVG = () => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)

  return (
    <T.SVGStyled colorMode={colorMode} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.4 408.4" className="tistory-svg">
      <g>
        <circle className="cls-1" cx="58.18" cy="58.18" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="58.18" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="204.2" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="350.22" r="58.18" />
        <circle className="cls-1" cx="350.22" cy="58.18" r="58.18" />
      </g>
    </T.SVGStyled>
  )
}

export default TistorySVG
