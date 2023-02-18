import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
  return {
    getItem(key: string) {
      return Promise.resolve(null)
    },
    setItem(key: string, value: string) {
      return Promise.resolve(value)
    },
    removeItem(key: string) {
      return Promise.resolve()
    },
  }
}

// Next 서버에서 실행 안되도록 설정
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

export default storage
