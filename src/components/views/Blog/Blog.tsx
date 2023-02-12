import { useRef, MutableRefObject, useCallback } from 'react'
import type { PostTypes } from 'type/blog'
import Text from 'components/common/Text'
import Article from './components/Article'
import * as B from './Blog.style'

const BlogArticle = ({ posts }: { posts: PostTypes[] }) => {
  const blogRef = useRef(null) as MutableRefObject<HTMLDivElement | null>

  const scrollHandler = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const target = blogRef.current
    if (target !== null && e.deltaX === 0) {
      target.scrollLeft += e.deltaY
    }
  }, [])

  return (
    <B.Blog>
      <Text type="h2" variant="heading_md">
        🗒️ Recent Posts
      </Text>
      <B.BlogWrap ref={blogRef} onWheel={scrollHandler}>
        {posts.map((post) => (
          <Article key={post.title} post={post} />
        ))}
      </B.BlogWrap>
    </B.Blog>
  )
}
export default BlogArticle
