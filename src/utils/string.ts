export const pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/

export const checkKorean = (str: string): boolean => {
  if (pattern.test(str)) return true
  return false
}

// -------------------- 랜덤 숫자 생성 --------------------
export const getRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// -------------------- 랜덤 문자열 생성 --------------------
export const getRandomText = (length: number): string => {
  const arr = []
  for (let i = 0; i < length; i += 1) {
    arr.push(String.fromCodePoint(getRandom(97, 122)))
  }
  return arr.join('')
}
