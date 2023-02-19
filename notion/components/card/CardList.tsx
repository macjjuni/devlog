import Image from 'next/image'
import moment from 'moment'
import { useAppSelector } from 'redux/hook'
import * as C from './CardList.style'
import TagList from './tags/TagList'
import { ThumbnailPlaceholderBase64 } from '../../config'
import type { ICard } from '../../types/types'

interface ICardItem {
  data: ICard[]
}

const CardList = ({ data }: ICardItem) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)

  return (
    <C.CardWrap>
      {data.map((item) => (
        <C.CardItem key={item.id} colormode={colorMode}>
          <C.CardArticle>
            <C.CardLink href={`/blog/${item.id}`}>
              <C.CardImageWrap className="themeBgc">
                <Image src={item.cover} alt={item.title} width="300" height="205" placeholder="blur" blurDataURL={ThumbnailPlaceholderBase64} />
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
