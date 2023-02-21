import { ICard } from '../types/types'

export const getAllCategory = (data: ICard[]) => {
  // data.reduce<ICard['tags']>((acc, { tags }) => {
  //   tags.forEach((tag) => {
  //     if (!acc.find((item) => item.id === tag.id)) {
  //       acc.push(tag)
  //     }
  //   })
  console.log(data)
}
// return acc
// }, [])
