import { ISvg } from '@/@types/svg'

export default function VueSvg({ width = 85, height = 85, color = '#ffffff' }: ISvg) {
  return (
    <svg
      viewBox="0 -17.5 256 256"
      width={`${width}px`}
      height={`${height}px`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      fill={color}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill={color} />
        <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill={color} />
        <path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" fill="#d7e0ea" />
      </g>
    </svg>
  )
}
