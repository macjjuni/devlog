import Article from './components/article'
import { BlogWrap } from './style'
import { type PostTypes } from '../../type/blog'

const BlogArticle = ({ posts }: { posts: PostTypes[] }) => {
  return (
    <BlogWrap>
      {posts.map((post) => (
        <Article key={post.title} post={post} />
      ))}
    </BlogWrap>
  )
}
export default BlogArticle
