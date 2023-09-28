import useStore from '@/store'
import { comma } from '@/utils/string'

// Binance API URL
const binanceURL = `wss://stream.binance.com:9443/ws/btcusdt@ticker`

// Zustand
const { getState } = useStore

let timeout: NodeJS.Timeout | null = null
let retryCount = 1
const limitCount = 3
const setTime = 3000 // ms 재시도 시간 간격

const clearTimeOut = () => {
  if (!timeout) return
  clearTimeout(timeout)
  timeout = null
}

// 소켓 생성
let socket: WebSocket | null = null

// 소켓 초기화
function initBinance() {
  socket = new WebSocket(binanceURL)

  // eslint-disable-next-line func-names
  socket.onopen = function () {
    console.log('on socket_Binance')
    retryCount = 1
    console.info('서버에 연결되었습니다.(Binance)')
  }
  socket.onmessage = ({ data }) => {
    const json = JSON.parse(data)
    const usd = Math.ceil(Number(json.c)) // 현재 가격
    getState().setBtc(comma(usd.toString()))
  }

  // 소켓 에러 핸들링
  socket.onerror = (e) => {
    console.dir(e)
    if (socket === null) return
    socket.close()
  }

  // 소켓 닫힘
  socket.onclose = (e) => {
    console.dir(`비정상적 종료(Binance): ${e.code}`)
    if (e.wasClean || e.code === 1000) {
      console.log(`서버 연결 해제(Binance)`)
    } else if (e.code === 1006) {
      // 비정상적 오류
      timeout = setTimeout(() => {
        console.info(`${setTime / 1000}초 후 재연결 시도합니다. (${(retryCount += 1)})`)
        if (retryCount > limitCount) {
          // 제한 횟숨만큼 연결 재시도
          clearTimeOut()
          console.error(`서버가 응답하지 않습니다. 나중에 다시 시도해주세요.(Binance) 🙏`)
        } else {
          initBinance()
        }
      }, setTime)
    }
  }
}
// 접속 해제
export const closeBinance = () => {
  if (!socket) return
  socket.close(1000)
}

export default initBinance
