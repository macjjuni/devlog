import { type Session } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'

const LoginButton = ({ session }: { session: Session | null }) => {
  return (
    <>
      {!session?.user ? (
        <button
          type="button"
          onClick={() => {
            signIn('google')
          }}
        >
          로그인
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            signOut()
          }}
        >
          로그아웃
        </button>
      )}
    </>
  )
}

export default LoginButton
