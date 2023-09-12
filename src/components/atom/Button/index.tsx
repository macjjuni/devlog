import { useState, useCallback } from 'react'
import ButtonStyled from './style'
import Tooltip from '../Tooltip'

interface IButton {
  children: React.ReactNode
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
}

const Button = ({
  children,
  className,
  fontSize,
  padding,
  width,
  height,
  bg,
  borderRadius,
  borderColor,
  borderWidth,
  disabled,
  onClick,
  tooltipText,
}: IButton) => {
  const [isTT, setTT] = useState(false)

  const onMouseEnter = useCallback(() => {
    if (!tooltipText) return
    setTT(true)
  }, [])
  const onMouseLeave = useCallback(() => {
    if (!tooltipText) return
    setTT(false)
  }, [])

  return (
    <ButtonStyled.Wrap>
      <ButtonStyled.Button
        className={className || ''}
        onClick={onClick}
        fontSize={fontSize}
        padding={padding}
        bg={bg}
        disabled={disabled}
        width={width}
        height={height}
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderWidth={borderWidth}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </ButtonStyled.Button>
      <Tooltip text={tooltipText || ''} show={isTT} />
    </ButtonStyled.Wrap>
  )
}

export default Button
