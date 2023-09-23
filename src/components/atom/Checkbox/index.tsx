import { useState, useEffect, useCallback, type ChangeEvent } from 'react'
import { PiCheckFatLight, PiCheckFatFill } from 'react-icons/pi'
import { getRandomText } from '@/utils/string'

interface ICheckBox {
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const labelStyle = 'inline-flex items-align justify-start gap-sm p-sm select-none overflow-hidden'
const inputStyle = 'absolute left-[-100%]'
const textStyle = 'relative top-[1px] text-body'

const CheckBox = ({ label, onChange, className = '' }: ICheckBox) => {
  const [state, setState] = useState(false)
  const [id, setId] = useState('')

  const changeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setState(e.target.checked)
      onChange(e)
    },
    [state],
  )

  useEffect(() => {
    const rdTxt = getRandomText(4)
    setId(rdTxt)
  }, [])

  return (
    <label htmlFor={id} className={`${labelStyle} ${className}`}>
      <input id={id} type="checkbox" checked={state} onChange={changeValue} className={inputStyle} />
      {state ? <PiCheckFatFill fontSize={18} /> : <PiCheckFatLight fontSize={18} />}
      <span className={textStyle}>{label}</span>
    </label>
  )
}

export default CheckBox
