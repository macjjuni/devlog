import { ISvg } from '@/@types/svg'

export default function PgrSvg({ width = 80, height = 80, color = '#202B3D' }: ISvg) {
  return (
    <svg viewBox="0 0 24 24" width={`${width}px`} height={`${height}px`} fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}
