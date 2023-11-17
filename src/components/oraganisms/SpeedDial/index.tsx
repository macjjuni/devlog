import { useCallback, useState } from 'react'
import DonateButton from '@/components/atom/DonateButton'
import BtcPayment from '@/components/molecule/BtcPaymentDial'

const wrapStyle = 'fixed bottom-0 right-0 flex flex-col w-[80px] pr-[16px] pb-[24px]'
const btnWrapStyle = 'flex flex-col items-center gap-[8px]'

const SpeedDial = () => {
  const [isDonate, setDonate] = useState(false)

  const toggleDonate = useCallback(() => {
    setDonate((prev) => !prev)
  }, [isDonate])

  const closeDonate = useCallback(() => {
    setDonate(false)
  }, [])

  return (
    <div className={wrapStyle}>
      {/* 버튼 영역 */}
      <div className={btnWrapStyle}>
        <DonateButton onClick={toggleDonate} />
      </div>
      {/* 히든 영역 */}
      <BtcPayment on={isDonate} onToggle={closeDonate} />
    </div>
  )
}

export default SpeedDial
