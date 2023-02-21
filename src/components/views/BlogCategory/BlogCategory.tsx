import Link from 'next/link'
import { SelectPropertyResponse } from 'notion/types/types'
import { COLOR_TABLE } from 'styles/notion/notion.style'
import { useAppSelector } from 'redux/hook'
import * as T from './BlogCategory.style'

interface IBlogCategory {
  postCount: number
  category: SelectPropertyResponse[] | undefined
}

const BlogCategory = ({ postCount, category }: IBlogCategory) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)

  return (
    <T.CategoryWrap>
      <T.Category>
        <T.CategoryItem bgColor={COLOR_TABLE.default} colormode={colorMode}>
          <Link href="/devlog">전체 글({postCount})</Link>
        </T.CategoryItem>
        {category?.map((item) => (
          <T.CategoryItem key={item.id} bgColor={COLOR_TABLE[item.color]} colormode={colorMode}>
            <Link href={`/category/${item.name}`}>{item.name}</Link>
          </T.CategoryItem>
        ))}
      </T.Category>
    </T.CategoryWrap>
  )
}

export default BlogCategory
