import Image from "next/image";

interface ProfileProps {
  description?: string | null;
  imageUrl?: string | null;
}


export default function Profile({ description, imageUrl }: ProfileProps) {

  const logoName = process.env.NEXT_PUBLIC_LOGO;

  return (
    <div className="group relative flex items-start gap-4 overflow-hidden rounded-[4px] border-[0.5px] border-gray-200 p-6 select-none md:h-[120px]">

      {imageUrl && (
        <Image
          className="absolute -top-2 -right-8 h-[132px] w-[132px] rounded-full
                     shadow-[0_22px_70px_4px_rgba(255,255,255,0.48)]
                     transition-all duration-300 ease-in-out
                     group-hover:rotate-4 group-hover:shadow-[0_30px_78px_12px_rgba(255,255,255,0.48)]
                     md:right-[-40px] md:h-40 md:w-40"
          src="https://avatars.githubusercontent.com/u/38034518?v=4"
          alt="profile image"
          width={400}
          height={400}
          priority
        />
      )}

      <div className="flex w-[120px] flex-col items-start gap-1">
        <p className="text-base font-bold">
          {logoName}
        </p>
        <p className="text-sm text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}