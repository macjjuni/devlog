export const defaultTrs = 'ease duration-300 transition-all'

const common = {
  textHover: 'hover:underline decoration-2 underline-offset-[4px]',
  borderColor: `border-BLG300 dark:border-BLG700 ${defaultTrs}`,
  bgColor: `bg-lightBg dark:bg-darkBg ${defaultTrs}`,
  textColor: `text-lightColor dark:text-darkColor ${defaultTrs}`,
  trs: defaultTrs,
  listBorder: 'relative after:content-[""] after:absolute after:w-[90%] after:h-[1px] after:bg-BLG100',
}

export default common
