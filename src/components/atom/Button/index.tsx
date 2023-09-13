import { useState, useCallback } from 'react'
import ButtonStyled from './style'
import Tooltip from '../Tooltip'

interface IButton {
  children?: React.ReactNode
  className?: string
  fontSize?: number
  padding?: string
  width?: number
  height?: number
  bg?: string
  disabled?: boolean
  borderColor?: string
  borderWidth?: string
  borderRadius?: number
  onClick?: () => void
  tooltipText?: string
  icon?: React.ReactNode
  noStyle?: boolean
}

const Button = (props: IButton) => {
  const [isTT, setTT] = useState(false)

  const onMouseEnter = useCallback(() => {
    if (!props.tooltipText) return
    setTT(true)
  }, [])
  const onMouseLeave = useCallback(() => {
    if (!props.tooltipText) return
    setTT(false)
  }, [])

  return (
    <ButtonStyled.Wrap>
      <ButtonStyled.Button
        className={`${props.className || ''} ${props.icon ? 'icon' : ''} ${props.noStyle ? 'no-style' : ''}`}
        onClick={props.onClick}
        fontSize={props.fontSize}
        padding={props.padding}
        bg={props.bg}
        disabled={props.disabled}
        width={props.width}
        height={props.height}
        borderRadius={props.borderRadius}
        borderColor={props.borderColor}
        borderWidth={props.borderWidth}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {props.children}
        {props.icon}
      </ButtonStyled.Button>
      <Tooltip text={props.tooltipText || ''} show={isTT} />
    </ButtonStyled.Wrap>
  )
}

export default Button
