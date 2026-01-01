import Image from "next/image";

const size = { width: 1052, height: 300 };

export default function PageCover({ url, alt }: { url: string; alt: string }) {
  return (
    <div className="relative h-[300px] w-full overflow-hidden">
      <Image
        className="h-full w-full object-cover"
        src={url}
        alt={alt}
        width={size.width}
        height={size.height}
        priority // 상단 커버 이미지이므로 LCP 최적화
      />
    </div>
  );
}