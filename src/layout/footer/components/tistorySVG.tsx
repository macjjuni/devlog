import { useAppSelector } from 'redux/hook'
import { light } from 'redux/slice/colorMode'

const TistorySVG = ({ size = 20 }: { size?: number }) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme) === light || false

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.4 408.4" className="tistory-svg" style={{ width: `${size}px`, height: `${size}px`, fill: colorMode ? '#000' : '#fff' }}>
      <g>
        <circle className="cls-1" cx="58.18" cy="58.18" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="58.18" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="204.2" r="58.18" />
        <circle className="cls-1" cx="204.2" cy="350.22" r="58.18" />
        <circle className="cls-1" cx="350.22" cy="58.18" r="58.18" />
      </g>
    </svg>
  )
}

export default TistorySVG
