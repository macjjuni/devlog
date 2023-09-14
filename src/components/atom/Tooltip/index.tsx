import TooltipStyled from './style'

export interface ITooltip {
  $text: string
  $show: boolean
}

const Tooltip = ({ $text, $show }: ITooltip) => {
  return (
    <TooltipStyled $show={$show} $text={$text} className={$show ? 'active' : 'noActive'}>
      {$text}
    </TooltipStyled>
  )
}

export default Tooltip
