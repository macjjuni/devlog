import Image from "next/image";
import { Link } from "next-view-transitions";
import { getFormatDate } from "@/lib/date";
import { getCategoryPageUrl } from "@/route";
import type { PostMeta } from "@/@types/post";

export default function PostHeader({ meta }: { meta: PostMeta }) {
  return (
    <header className="mb-8 border-b border-gray-200 pb-6">
      {meta.cover && (
        <div className="relative mb-6 h-[300px] w-full overflow-hidden rounded-lg">
          <Image
            className="h-full w-full object-cover"
            src={meta.cover}
            alt={meta.title}
            width={1052}
            height={300}
            priority
          />
        </div>
      )}
      <h1 className="mb-3 text-3xl font-bold leading-tight tablet:text-2xl">{meta.title}</h1>
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
        {meta.category && (
          <Link href={getCategoryPageUrl(meta.category)} className="rounded bg-gray-100 px-2 py-0.5 text-gray-600 hover:bg-gray-200">
            {meta.category}
          </Link>
        )}
        <time dateTime={meta.date}>{getFormatDate(meta.date)}</time>
      </div>
      {meta.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs text-gray-500">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
