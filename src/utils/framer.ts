export const colorModeAnimation = {
  initial: { y: -100, rotate: 60 },
  animate: { y: 0, rotate: 0 },
  exit: { y: -100, rotate: 60 },
  transition: {
    type: 'spring',
    stiffness: 180,
  },
}

export const projectListMotion = {
  show: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.1, delay: 0.3 },
  },
}

export const projectItemMotion = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -20 },
}

export const postListMotion = {
  show: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.133, delay: 0.36 },
  },
}

export const postItemMotion = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -36 },
}

export const verticalPostCatListMotion = {
  show: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.08 },
  },
}

export const verticalPostCatItemMotion = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -25 },
}
