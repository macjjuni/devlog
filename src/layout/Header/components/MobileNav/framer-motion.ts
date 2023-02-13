export const y = -10

export const MobileNavAnimation = {
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
  transition: { type: 'spring', bounce: 0.25, duration: 0.5 },
}
