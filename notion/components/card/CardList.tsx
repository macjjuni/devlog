import Image from 'next/image'
import moment from 'moment'
import { useAppSelector } from 'redux/hook'
import * as C from './CardList.style'
import TagList from './tags/TagList'
import { placeholderBase64 } from '../../config'
import type { CardData } from '../../types/types'

interface ICardItem {
  data: CardData[]
}

const CardList = ({ data }: ICardItem) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)

  return (
    <C.CardWrap>
      {data.map((item) => (
        <C.CardItem key={item.id} colormode={colorMode}>
          <C.CardArticle>
            <C.CardLink href={`/post/${item.id}`}>
              <C.CardImageWrap className="themeBgc">
                <Image src={item.cover} alt={item.title} width="300" height="300" placeholder="blur" blurDataURL={placeholderBase64} />
              </C.CardImageWrap>
              <C.DesWrap>
                <C.CardTitle>{item.title}</C.CardTitle>
                <C.CardSubWrap>
                  <span>{item.category?.name}</span>
                  <time>{moment(item.published).format('YYYY-MM-DD')}</time>
                </C.CardSubWrap>
                <TagList tags={item.tags} />
              </C.DesWrap>
            </C.CardLink>
          </C.CardArticle>
        </C.CardItem>
      ))}
    </C.CardWrap>
  )
}

export default CardList
