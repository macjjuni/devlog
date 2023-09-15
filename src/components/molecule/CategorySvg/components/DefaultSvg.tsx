import { ISvg } from '@/types/svg'

const DefaultSvg = ({ width = 100, height = 100, color = '#ffffff' }: ISvg) => {
  return (
    <svg
      fill={color}
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      id="Glyph"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_" />
        <path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_" />
        <path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_" />
      </g>
    </svg>
  )
}

export default DefaultSvg
