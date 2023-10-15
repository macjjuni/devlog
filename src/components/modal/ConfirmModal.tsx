import { useCallback } from 'react'
import useStore from '@/store'
import Modal from '../atom/Modal'

const modalKey = 'confirm'

export default function confirmModal() {
  const { modal, setModal } = useStore((state) => state)

  const onCancel = useCallback(() => {
    setModal({ key: null })
  }, [])

  const onConfirm = () => {
    if (modal.func) modal.func()
    onCancel()
  }

  if (modal.key === modalKey)
    return (
      <Modal title="방명록 삭제">
        <p>작성한 방명록을 삭제할까요?</p>
        <div className="flex justify-end items-center gap-xl">
          <button type="button" onClick={onConfirm}>
            확인
          </button>
          <button type="button" onClick={onCancel}>
            취소
          </button>
        </div>
      </Modal>
    )
}
