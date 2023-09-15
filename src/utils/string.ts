export const pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/

export const checkKorean = (str: string): boolean => {
  if (pattern.test(str)) return true
  return false
}
