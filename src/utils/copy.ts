type TextType = string

export const textCopy = async (text: TextType): Promise<boolean> => {
  try {
    if (navigator) {
      await navigator.clipboard.writeText(text)
      return true
    }
    const inputEle = document.createElement('input')
    inputEle.style.position = 'absolute'
    inputEle.style.top = '-9999px'
    document.body.appendChild(inputEle)
    inputEle.value = text
    inputEle.select()
    document.execCommand('copy')
    document.body.removeChild(inputEle)
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}
