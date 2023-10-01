import { useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import useStore from '@/store'
import { useSession, signIn } from 'next-auth/react'
import common from '@/styles/common'
import Modal from '../atom/Modal'

const LoginModal = () => {
  const { isModal, setModal } = useStore((state) => state)
  const { data: session } = useSession()

  // 이미 로그인 중이라면 예외처리
  useEffect(() => {
    if (isModal && session) {
      console.warn('already Login')
      setModal(false)
    }
  }, [isModal, session])

  return (
    <Modal title="로그인">
      <button
        type="button"
        className={`flex gap-md justify-center items-center w-[280px] px-md py-sm my-md mx-auto border-2 rounded-sm ${common.borderColor}`}
        onClick={() => {
          signIn('google')
        }}
      >
        <FcGoogle fontSize={30} />
        <span>Sign in With Google</span>
      </button>
    </Modal>
  )
}

export default LoginModal
