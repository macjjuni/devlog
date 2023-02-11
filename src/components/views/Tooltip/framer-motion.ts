export const y = 10

export const TooltipAnimation = {
  initial: {
    opacity: 0,
    y,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y,
  },
  transition: {
    type: 'spring',
    stiffness: 700,
    damping: 25,
    duration: 2000,
  },
}
