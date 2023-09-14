import NextTopLoader from 'nextjs-toploader'
import { palette } from '@/styles/theme'

const options = {
  color: palette.primary,
  initialPosition: 0.1,
  crawlSpeed: 200,
  height: 4,
  crawl: true,
  showSpinner: false,
  easing: 'ease',
  speed: 300,
}
const WithProgressBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextTopLoader {...options} />
      {children}
    </>
  )
}
export default WithProgressBar
