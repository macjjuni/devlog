const defaultStyle = 'relative flex justify-end items-center w-full h-footer bg-BLG0'

const Footer = () => {
  return (
    <footer className={defaultStyle}>
      {new Date().getFullYear()} kkussaeng.
      <div className="footer-line absolute top-0 left-[-50%] w-[150vw] border-t border-r-BLG300" />
    </footer>
  )
}

export default Footer
