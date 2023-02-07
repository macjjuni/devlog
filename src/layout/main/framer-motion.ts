export const xWidth = 15

export const MainAnimation = {
  initial: {
    opacity: 0,
    x: xWidth,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    type: 'spring',
    stiffness: 500,
    damping: 25,
    duration: 0.15,
  },
}
