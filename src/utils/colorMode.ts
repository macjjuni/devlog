// OS 테마 다크모드인지 체크
export const isDark = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}
