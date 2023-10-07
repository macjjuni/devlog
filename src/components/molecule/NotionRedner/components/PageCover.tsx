import Image from 'next/image'

const PageCover = ({ url, alt }: { url: string; alt: string }) => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      <Image className="notion-page-cover" src={url} alt={alt} width="1200" height="300" placeholder="blur" blurDataURL={url} />
    </div>
  )
}

export default PageCover
