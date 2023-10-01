import common from '@/styles/common'

const defaultStyle = `${common.bgColor} w-full border-t ${common.borderColor}`

const Footer = () => {
  return (
    <footer className={defaultStyle}>
      <div className="relative flex justify-end items-center w-full max-w-layout h-footer px-md m-auto">{new Date().getFullYear()} kkussaeng.</div>
    </footer>
  )
}

export default Footer
