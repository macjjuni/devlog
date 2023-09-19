import { useCallback } from 'react'
import { type IPage } from '@/types/notion'
import Link from 'next/link'
import config from '@/config/notion.config'
import common from '@/styles/common'
import { motion } from 'framer-motion'
import { postItemMotion } from '@/utils/framer' // Framer Motion
import date from '@/lib/date'

const { blog, post } = config

const PostItem = ({ page }: { page: IPage }) => {
  // 최신 포스트 여부 체크
  const isNew = useCallback(() => post.RECENT_DAY > date.nowDiff(page.published), [page.published])

  return (
    <motion.article variants={postItemMotion} className={`flex ${common.textColor} border-b ${common.borderColor} first:border-t`}>
      <Link href={`/${blog.postPath}/${page?.id}`} className="relative w-full h-full p-md">
        {isNew() ? 'new' : null}
        <h2 className="text-postCat">{page?.category?.name}</h2>
        <h3 className="text-postTitle">{page?.title}</h3>
        <div className="flex justify-start items-center gap-lg text-body mt-md">
          <p>{date.format(page?.published)}</p>
          <ul className="flex gap-md">{page?.tags?.map((tag) => <li key={tag.id} className="text-postTag">{`#${tag.name}`}</li>)}</ul>
        </div>
        <p className="body mt-md">Read more</p>
      </Link>
    </motion.article>
  )
}
export default PostItem
