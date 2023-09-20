// import common from '@/styles/common'

const defaultStyle = 'relative flex justify-end items-center w-full h-footer px-md bg-BLG0'

const Footer = () => {
  return (
    <footer className={defaultStyle}>
      {new Date().getFullYear()} kkussaeng.
      {/* <div className={`footer-line absolute top-0 left-[-50%] w-[150vw] border-t ${common.borderColor}`} /> */}
    </footer>
  )
}

export default Footer
