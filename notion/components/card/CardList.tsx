import * as C from './Card.style'
import CardItem from './CardItem'
import type { CardData } from '../../types/types'

interface CardListProps {
  data: CardData[]
}

const CardList = ({ data }: CardListProps) => {
  return (
    <C.CardWrap>
      {data.map((item) => (
        <CardItem key={item.id} data={item} />
      ))}
    </C.CardWrap>
  )
}

export default CardList
