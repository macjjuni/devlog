import Image from 'next/image'
import Text from 'components/common/Text'
import { type PostTypes } from 'type/blog'
import { MdOpenInNew } from 'react-icons/md'
import { ArticleWrap } from '../Blog.style'

const blogURL = process.env.NEXT_PUBLIC_BLOG_URL || 'https://juni-official.tistory.com/'

const Article = ({ post }: { post: PostTypes }) => {
  return (
    <ArticleWrap>
      <a target="_blank" rel="noreferrer" title={post.title} href={`${blogURL}${post.link}`}>
        <Image src={post.thumb} alt={post.title} width={270} height={150} priority />
        <Text type="span" variant="text_md" className="post-date">
          <span>{post.date}</span>
          <MdOpenInNew />
        </Text>
        <Text type="h3" variant="text_md" className="post-title">
          {post.title}
        </Text>
      </a>
    </ArticleWrap>
  )
}
export default Article
