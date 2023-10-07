export const colorModeAnimation = {
  initial: { y: -60, rotate: 60 },
  animate: { y: 0, rotate: 0 },
  exit: { y: -60, rotate: 60 },
  transition: {
    type: 'spring',
    stiffness: 200,
  },
}

// 메인 레이아웃 페이징 모션
export const xWidth = 10
export const pagingAnimation = {
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
    stiffness: 100,
    damping: 20,
  },
}

// 글 목록 모션
export const postListMotion = {
  show: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.08 },
  },
}
export const postItemMotion = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -36 },
}

// 카테고리 목록 모션
export const categoryListMotion = {
  show: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.08 },
  },
}
export const categoryItemMotion = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -25 },
}

// 방명록 말품선 모션
export const guestbookListMotion = {
  show: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.08 },
  },
}
export const guestbookLeftItemMotion = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 50 },
}
export const guestbookRightItemMotion = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -50 },
}
