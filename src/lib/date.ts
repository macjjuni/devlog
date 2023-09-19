import 'dayjs/locale/ko'
import dayjs from 'dayjs'

dayjs.locale('ko')

const defaultFormat = 'YYYY.MM.DD'

const now = dayjs()

const date = {
  now: () => now.format(defaultFormat),
  nowDiff: (dateStr: string) => {
    const nowDate = dayjs(date.now(), defaultFormat)
    const diffTargetDate = dayjs(dateStr, defaultFormat)
    return nowDate.diff(diffTargetDate, 'd')
  },
  format: (dateStr: string) => dayjs(dateStr).format(defaultFormat),
}

export default date
