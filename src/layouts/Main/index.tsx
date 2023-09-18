import HeaderObserver from '@/components/atom/HeaderObserver'

const defaultStyle = 'flex flex-col md:flex-row flex-1 justify-center items-stretch  md:gap-xxl relative max-w-main w-full pt-main'
const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={defaultStyle}>
      <HeaderObserver />
      {children}
    </main>
  )
}

export default Main
