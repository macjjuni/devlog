import { useState, useEffect, useCallback } from 'react'
import { FaMoon } from 'react-icons/fa'
import { ImSun } from 'react-icons/im'
import { ToggleItem, ButtonStyled } from '../style'
import colorMode, { type ModeReturnTypes } from '../../../utils/colorMode'

const ThemeButton = () => {
  const [theme, setTheme] = useState<ModeReturnTypes>(null)

  const handleToggle = useCallback(() => {
    colorMode.themeToggle()
    setTheme(colorMode.getColorMode())
  }, [])

  useEffect(() => {
    const mode = colorMode.getColorMode()
    setTheme(mode)
  }, [])

  return (
    <ToggleItem>
      <ButtonStyled onClick={handleToggle}>
        {theme === 'light' && <ImSun fontSize="22px" color="#9d6fff" />}
        {theme === 'dark' && <FaMoon fontSize="22px" color="#ffea20" />}
      </ButtonStyled>
    </ToggleItem>
  )
}

export default ThemeButton
