import { memo } from 'react'
// import { FaMoon } from 'react-icons/fa'
import { ImSun } from 'react-icons/im'
import * as T from './ColorToggleButton.style'

const ColorToggleButton = () => {
  return (
    <T.Toggle>
      <T.ToggleButton>
        <ImSun fontSize="22px" color="#9d6fff" />
        {/* {colorMode !== 'light' && <FaMoon fontSize="22px" color="#ffea20" />} */}
      </T.ToggleButton>
    </T.Toggle>
  )
}

export default memo(ColorToggleButton)
