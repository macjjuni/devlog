import { AiOutlineCloseCircle } from 'react-icons/ai'

interface IRemoveButton {
  isShow: boolean
  onClick: () => void
}

const RemoveButton = ({ isShow, onClick }: IRemoveButton) => {
  if (!isShow) return null
  return (
    <button type="button" className="flex items-center" onClick={onClick}>
      <AiOutlineCloseCircle fontSize={20} />
    </button>
  )
}

export default RemoveButton
