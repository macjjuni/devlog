import config from '@/config/notion.config'
import { type IPage } from '@/types/notion'
import { motion } from 'framer-motion'
import { postItemMotion } from '@/utils/framer' // Framer Motion
import Link from 'next/link'
import common from '@/styles/common'

const { blog } = config

const PostItem = ({ page }: { page: IPage }) => {
  return (
    <motion.li variants={postItemMotion} className={`flex border-b ${common.borderColor} ${common.textColor}`}>
      <Link href={`/${blog.postPath}/${page?.id}`} prefetch className="relative w-full h-full p-md">
        <h2 className="text-postCat">{page?.category?.name}</h2>
        <h3 className="text-postTitle">{page?.title}</h3>
        <div className="flex justify-start items-center gap-lg text-body mt-md">
          <p>{page?.published}</p>
          <ul className="">
            {page.tags.map((tag) => (
              <li key={tag.id} className="text-postTag">{`#${tag.name}`}</li>
            ))}
          </ul>
        </div>
        <p className="body mt-md">Read more</p>
      </Link>
    </motion.li>
  )
}
export default PostItem
