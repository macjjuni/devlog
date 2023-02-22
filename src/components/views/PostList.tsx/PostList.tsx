import type { ICard } from 'notion/types/types'
import Link from 'next/link'
import moment from 'moment'
import * as P from './PostList.style'

interface IPostList {
  data: ICard[]
}

const PostList = ({ data }: IPostList) => {
  return (
    <P.PostWrap>
      {data.map((post) => (
        <P.PostItem key={post.id}>
          <Link href={`/devlog/${post.id}`}>
            <P.Category>{post.category?.name}</P.Category>
            <P.Title>{post.title}</P.Title>
            <P.Published>{moment(post.published).format('YYYY-MM-DD')}</P.Published>
            <P.TagList>
              {post.tags.map((tag) => (
                <P.Tag key={tag.id}>#{tag.name}</P.Tag>
              ))}
              {post.tags.length === 0 && <P.Tag>없음</P.Tag>}
            </P.TagList>
          </Link>
        </P.PostItem>
      ))}
    </P.PostWrap>
  )
}

export default PostList
