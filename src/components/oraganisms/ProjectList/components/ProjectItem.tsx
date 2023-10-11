import type { IProjectPage } from '@/@types/notion'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import getPageCoverImage from '@/api/notion/pageCover'
import config from '@/config/notion.config'

const { blog } = config

const imgStyle = 'object-cover w-full h-[240px] hover:scale-105 transition-all duration-500'

export default function ProjectItem({ page }: { page: IProjectPage }) {
  const [isRender, setRender] = useState(false)
  const [img, setImg] = useState({
    url: blog.defaultThumb,
    alt: 'img description',
  })

  const getCover = useCallback(async () => {
    const { coverUrl, alt } = await getPageCoverImage(page.id)
    setImg({ url: coverUrl, alt })
  }, [])

  const onImageLoad = useCallback(() => {
    setRender(true)
  }, [])

  useEffect(() => {
    getCover()
  }, [])

  return (
    <Link href={`/project/${page.id}`} className=" md:w-[calc((100%-48px)/3)]">
      <div className="w-full rounded-md overflow-hidden">
        <Image
          className={`${imgStyle} ${isRender ? 'fade-in' : ''}`}
          src={img.url}
          alt={img.alt}
          width={330}
          height={240}
          loading="eager"
          placeholder="empty"
          onLoadingComplete={onImageLoad}
        />
      </div>
      <h2 className="text-[24px] font-[500] mt-sm p-xs">{page.title}</h2>
      <ul className="flex justify-start items-center gap-sm text-body p-xs">
        {page.stack.map((sk) => (
          <li key={sk.id}>📌 {sk.name}</li>
        ))}
      </ul>
    </Link>
  )
}
