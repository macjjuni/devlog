import Image from "next/image";
import "./pageCover.scss";

const size = { width: 1200, height: 300 };

export default function PageCover({ url, alt }: { url: string; alt: string }) {
  return (
    <div className="page-cover">
      <Image className="page-cover__image" src={url} alt={alt} width={size.width} height={size.height} />
    </div>
  );
}
