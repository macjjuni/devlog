import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
  return {
    getItem(key) {
      return Promise.resolve(null)
    },
    setItem(key, value) {
      return Promise.resolve(value)
    },
    removeItem(key) {
      return Promise.resolve()
    },
  }
}

// Next 서버에서 실행 안되도록 설정
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

export default storage
