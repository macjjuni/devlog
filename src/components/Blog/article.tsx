import Image from 'next/image'
import { MdOpenInNew } from 'react-icons/md'
import { ArticleWrap } from './style'
import { type PostTypes } from '../../type/blog'

const blogURL = process.env.NEXT_BLOG_URL || 'https://juni-official.tistory.com/'

const Article = ({ post }: { post: PostTypes }) => {
  return (
    <ArticleWrap>
      <a target="_blank" rel="noreferrer" title={post.title} href={`${blogURL}${post.link}`}>
        <Image src={post.thumb} alt={post.title} width={270} height={150} />
        <MdOpenInNew />
        <h3>{post.title}</h3>
      </a>
    </ArticleWrap>
  )
}
export default Article
