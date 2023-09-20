import { useCallback } from 'react'
import { type IPage } from '@/types/notion'
import Link from 'next/link'
import config from '@/config/notion.config'
import common from '@/styles/common'
import { motion } from 'framer-motion'
import { postItemMotion } from '@/utils/framer' // Framer Motion
import date from '@/lib/date'
import NewSvg from '@/components/svg/NewSvg'
import CategorySvg from '@/components/molecule/CategorySvg'

const { blog, post } = config

const PostItem = ({ page }: { page: IPage }) => {
  // 최신 포스트 여부 체크
  const isNew = useCallback(() => post.RECENT_DAY > date.nowDiff(page.published), [page.published])

  return (
    <motion.article variants={postItemMotion} className={`flex ${common.textColor} ${common.borderColor}`}>
      <Link
        href={`/${blog.postPath}/${page?.id}`}
        className={`page-item relative w-full h-full p-lg mb-lg rounded-sm overflow-hidden border border-BLG200 hover:bg-BLG50 ${common.trs}`}
      >
        <div className="flex justify-between items-center gap-sm h-[40px] text-postCat">
          <h2 className="flex justify-center items-center gap-sm">
            <CategorySvg category={page?.category?.name} />
            {page?.category?.name}
          </h2>
          {isNew() && <NewSvg className="new-icon" width={40} height={40} />}
        </div>
        <h3 className="text-postTitle ">{page?.title}</h3>
        <div className="flex justify-start items-center gap-lg mt-sm text-body">
          <ul className="flex gap-lg text-BLG1000">{page?.tags?.map((tag) => <li key={tag.id} className="text-postTag">{`#${tag.name}`}</li>)}</ul>
        </div>
        <div className="flex justify-between items-center mt-xl">
          <p>{date.format(page?.published)}</p>
          <p className="page-date text-body text-right">Read more</p>
        </div>
      </Link>
    </motion.article>
  )
}
export default PostItem
