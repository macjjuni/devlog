import { useAppDispatch, useAppSelector } from 'redux/hook'
import { toggle } from 'redux/slice/colorMode'
import { FaMoon } from 'react-icons/fa'
import { ImSun } from 'react-icons/im'
import { ToggleItem, ButtonStyled } from '../Header.style'

const ThemeButton = () => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  const dispatch = useAppDispatch()

  return (
    <ToggleItem>
      <ButtonStyled onClick={() => dispatch(toggle())}>
        {colorMode === 'light' && <ImSun fontSize="22px" color="#9d6fff" />}
        {colorMode !== 'light' && <FaMoon fontSize="22px" color="#ffea20" />}
      </ButtonStyled>
    </ToggleItem>
  )
}

export default ThemeButton
