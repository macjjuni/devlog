import { BiDonateHeart } from 'react-icons/bi'

const btcColor = '#f7931a'
const defaultStyle = `flex justify-center items-center w-[56px] h-[56px] rounded-full border-4 border-[${btcColor}] bg-white dark:bg-BLG900`

const DonateButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button type="button" className={defaultStyle} onClick={onClick}>
      <BiDonateHeart fontSize={32} color={btcColor} />
    </button>
  )
}

export default DonateButton
