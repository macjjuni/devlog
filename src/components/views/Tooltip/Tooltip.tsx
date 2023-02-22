import { type SetStateAction, Dispatch, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import * as T from './Tooltip.style'
import { TooltipAnimation } from './framer-motion'

const Tooltip = ({ value, setValue }: { value: boolean; setValue: Dispatch<SetStateAction<boolean>> }) => {
  useEffect(() => {
    if (value)
      setTimeout(() => {
        setValue(false)
      }, 2000)
  }, [value])

  return (
    <>
      <AnimatePresence>
        {value && (
          <T.Tooltip {...TooltipAnimation}>
            <T.TooltipText>Copied!</T.TooltipText>
          </T.Tooltip>
        )}
      </AnimatePresence>
    </>
  )
}
export default Tooltip
