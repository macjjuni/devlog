import { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { FaMoon } from 'react-icons/fa'
import { ImSun } from 'react-icons/im'
import { ToggleItem, ButtonStyled } from '../style'
import { themeToggle, getColorMode, type ModeReturnTypes } from '../../../utils/colorMode'

const useMultiEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const ToggleButton = () => {
  const [colorMode, setMode] = useState<ModeReturnTypes>(null)

  const handleToggle = useCallback(() => {
    themeToggle()
    setMode(getColorMode())
  }, [])

  useMultiEffect(() => {
    const mode = getColorMode()
    setMode(mode)
  }, [])

  return (
    <ToggleItem>
      <ButtonStyled onClick={handleToggle}>
        {colorMode === 'light' && <ImSun fontSize="22px" color="#9d6fff" />}
        {colorMode === 'dark' && <FaMoon fontSize="22px" color="#ffea20" />}
      </ButtonStyled>
    </ToggleItem>
  )
}

export default ToggleButton
