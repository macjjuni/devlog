import React from 'react'

const defaultStyle = 'w-[50%] h-[2px] bg-BLG600 dark:bg-BLG300 rounded-xs'

export default function Hamburger() {
  return (
    <>
      <span className={defaultStyle} />
      <span className={defaultStyle} />
      <span className={defaultStyle} />
    </>
  )
}
