import Image from 'next/image'

const PageCover = ({ url, alt }: { url: string; alt: string }) => {
  return <Image className="notion-page-cover" src={url} alt={alt} width={1200} height={200} placeholder="blur" blurDataURL={url} />
}

export default PageCover
