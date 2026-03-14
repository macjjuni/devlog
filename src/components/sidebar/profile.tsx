import Image from "next/image";

interface ProfileProps {
  description?: string | null;
}

const AVATAR_SRC = "https://avatars.githubusercontent.com/u/38034518?v=4";

export default function Profile({ description }: ProfileProps) {

  const logoName = process.env.NEXT_PUBLIC_LOGO;

  return (
    <div className="flex h-[130px] tablet:h-auto items-center gap-4 rounded-lg border border-gray-200 p-4 select-none
                    dark:border-gray-700">

      <Image
        className="h-20 w-20 shrink-0 rounded-full object-cover"
        src={AVATAR_SRC}
        alt="profile image"
        width={160}
        height={160}
        priority
      />

      <div className="flex flex-col gap-1.5">
        <p className="text-lg font-bold leading-tight">
          {logoName}
        </p>
        {description && (
          <p className="text-sm leading-snug text-gray-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
