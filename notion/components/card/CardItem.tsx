import Image from 'next/image'
import moment from 'moment'
import { useAppSelector } from 'redux/hook'
import * as C from './Card.style'
import TagList from './tags/TagList'
import type { CardData } from '../../types/types'

interface ICardItem {
  data: CardData
}

const CardItem = ({ data }: ICardItem) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  const { id, title, published, category, tags, cover } = data
  return (
    <C.CardItem colormode={colorMode}>
      <C.CardArticle>
        <C.CardLink href={`/post/${id}`}>
          <C.CardImageWrap className="themeBgc">
            <Image src={cover} alt={title} width="300" height="300" />
          </C.CardImageWrap>
          <C.DesWrap>
            <C.CardTitle>{title}</C.CardTitle>
            <C.CardSubWrap>
              <span>{category?.name}</span>
              <time>{moment(published).format('YYYY-MM-DD')}</time>
            </C.CardSubWrap>
            <TagList tags={tags} />
          </C.DesWrap>
        </C.CardLink>
      </C.CardArticle>
    </C.CardItem>
  )
}

export default CardItem
