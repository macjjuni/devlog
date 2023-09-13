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
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.1, delay: 0.3 },
  },
}

export const projectItemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

export const postListMotion = {
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.08, delay: 0.36 },
  },
}

export const postItemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

export const verticalPostCatListMotion = {
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.08 },
  },
}

export const verticalPostCatItemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -25 },
}
