import { useAppDispatch, useAppSelector } from 'redux/hook'
import { toggle } from 'redux/slice/colorMode'
import { FaMoon } from 'react-icons/fa'
import { ImSun } from 'react-icons/im'
import * as T from './ColorToggleButton.style'

const ColorToggleButton = () => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  const dispatch = useAppDispatch()

  return (
    <T.Toggle>
      <T.ToggleButton onClick={() => dispatch(toggle())}>
        {colorMode === 'light' && <ImSun fontSize="22px" color="#9d6fff" />}
        {colorMode !== 'light' && <FaMoon fontSize="22px" color="#ffea20" />}
      </T.ToggleButton>
    </T.Toggle>
  )
}

export default ColorToggleButton
