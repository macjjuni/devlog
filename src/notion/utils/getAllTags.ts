import { ICard } from '../types/types'

export const getAllTags = (data: ICard[]) =>
  data.reduce<ICard['tags']>((acc, { tags }) => {
    tags.forEach((tag) => {
      if (!acc.find((item) => item.id === tag.id)) {
        acc.push(tag)
      }
    })

    return acc
  }, [])
