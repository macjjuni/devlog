import Image from 'next/image'
import { MdOpenInNew } from 'react-icons/md'
import { type PostTypes } from 'type/blog'
import * as B from '../Blog.style'

const blogURL = process.env.NEXT_PUBLIC_BLOG_URL || 'https://juni-official.tistory.com/'

const Article = ({ post }: { post: PostTypes }) => {
  return (
    <B.Article>
      <B.BlogLink target="_blank" rel="noreferrer" title={post.title} href={`${blogURL}${post.link}`}>
        <Image src={post.thumb} alt={post.title} width={270} height={150} priority />
        <B.BlogDate type="span" variant="text_md">
          <span>{post.date}</span>
          <MdOpenInNew />
        </B.BlogDate>
        <B.BlogTitle type="h3" variant="text_md">
          {post.title}
        </B.BlogTitle>
      </B.BlogLink>
    </B.Article>
  )
}
export default Article
