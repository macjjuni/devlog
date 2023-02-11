import { type SetStateAction, Dispatch, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useAppSelector } from 'redux/hook'
import Text from 'components/common/Text'
import * as T from './Tooltip.style'
import { TooltipAnimation } from './framer-motion'

const Tooltip = ({ value, setValue }: { value: boolean; setValue: Dispatch<SetStateAction<boolean>> }) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)

  useEffect(() => {
    if (value)
      setTimeout(() => {
        setValue(false)
      }, 2000)
  }, [value])

  return (
    <AnimatePresence>
      {value && (
        <T.Tooltip colormode={colorMode} {...TooltipAnimation}>
          <Text type="span" variant="body">
            Copied!
          </Text>
        </T.Tooltip>
      )}
    </AnimatePresence>
  )
}
export default Tooltip
