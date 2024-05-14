import Image from "next/image";

const size = { width: 1200, height: 300 };

export default function PageCover({ url, alt }: { url: string; alt: string }) {
  return (
    <div className="relative w-full md:h-[300px] overflow-hidden">
      <Image className="notion-page-cover" src={url} alt={alt} width={size.width} height={size.height} placeholder="blur" blurDataURL="/images/default_thumb.webp" />
    </div>
  );
}
